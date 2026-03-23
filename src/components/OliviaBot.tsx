import { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, X, Minimize2, Maximize2, Volume2, VolumeX } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'olivia';
  timestamp: Date;
  isVoice?: boolean;
}

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
}

const OliviaBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text:
        "Welcome to Deepiotics! 👋 My name is Olivia, your virtual AI assistant. 😊\n\nHow can I make your experience better today? 🤔",
      sender: 'olivia',
      timestamp: new Date()
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [micPermission, setMicPermission] = useState<'granted' | 'denied' | 'prompt'>('prompt');
  const [voiceError, setVoiceError] = useState('');
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadFormData, setLeadFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ---------------------------
  // 🔊 Initialize Speech System
  // ---------------------------
  useEffect(() => {
    // Check microphone permission
    if (navigator.permissions) {
      navigator.permissions.query({ name: 'microphone' as PermissionName }).then((result) => {
        setMicPermission(result.state as 'granted' | 'denied' | 'prompt');
        result.onchange = () => {
          setMicPermission(result.state as 'granted' | 'denied' | 'prompt');
        };
      }).catch(() => {
        setMicPermission('prompt');
      });
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("SpeechRecognition not supported in this browser");
      return;
    }

    const recog = new SpeechRecognition();
    recog.continuous = true;
    recog.interimResults = false;
    recog.lang = "en-US";

    recog.onstart = () => {
      setIsListening(true);
      setVoiceError('');
    };

    recog.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
    };

    recog.onerror = (event: any) => {
      setIsListening(false);
      if (event.error === 'not-allowed') {
        setVoiceError('Microphone access denied. Please allow microphone permission.');
        setMicPermission('denied');
      } else if (event.error === 'no-speech') {
        setVoiceError('No speech detected. Please try again.');
      } else if (event.error === 'network') {
        setVoiceError('Network error. Please check your connection.');
      }
    };

    recog.onend = () => {
      setIsListening(false);

      if (inputText.trim() !== "") {
        handleSendMessage(inputText, true);
      }
    };

    recognitionRef.current = recog;

    // Speech Synthesis Init
    synthRef.current = window.speechSynthesis;

    return () => {
      if (synthRef.current) synthRef.current.cancel();
      if (recognitionRef.current) recognitionRef.current.abort();
    };
  }, [inputText]);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🔊 Voice Output
  const speak = (text: string) => {
    if (!voiceEnabled || !synthRef.current) return;

    synthRef.current.cancel();
    
    // Detect mobile device
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Wait for voices to load
    const loadVoices = () => {
      return new Promise<SpeechSynthesisVoice[]>((resolve) => {
        let voices = synthRef.current?.getVoices() || [];
        if (voices.length > 0) {
          resolve(voices);
        } else {
          if (synthRef.current) {
            synthRef.current.onvoiceschanged = () => {
              voices = synthRef.current?.getVoices() || [];
              resolve(voices);
            };
          }
        }
      });
    };
    
    loadVoices().then((voices) => {
      const utter = new SpeechSynthesisUtterance(text);
      
      let selectedVoice = null;
      
      if (isMobile) {
        // Mobile-specific voice selection for soft US feminine quality
        const mobileVoices = [
          'Google US English Female', // Priority US voice
          'en-US-Standard-C', // US Standard female
          'Samantha', // Soft US female voice
          'Karen', // US female voice
          'Microsoft Zira', // US voice
          'Google UK English Female',
          'en-GB-Standard-A',
          'Victoria',
          'Fiona'
        ];
        
        for (const preferred of mobileVoices) {
          selectedVoice = voices.find(v => v.name.includes(preferred) || v.voiceURI.includes(preferred));
          if (selectedVoice) break;
        }
        
        // Mobile fallback: any English voice
        if (!selectedVoice) {
          selectedVoice = voices.find(v => 
            v.lang.startsWith('en') && 
            (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('woman') || v.default)
          );
        }
      } else {
        // Desktop voice selection prioritizing soft US feminine voices
        const desktopVoices = [
          'Google US English Female', // Priority US voice
          'Microsoft Zira Desktop', // US voice
          'Microsoft Zira', // US voice
          'Samantha', // Soft US female voice
          'Karen', // US female voice
          'Google UK English Female',
          'Victoria', // British female
          'Fiona' // Scottish female
        ];
        
        for (const preferred of desktopVoices) {
          selectedVoice = voices.find(v => v.name.includes(preferred));
          if (selectedVoice) break;
        }
        
        // Desktop fallback - prioritize US English
        if (!selectedVoice) {
          selectedVoice = voices.find(v => 
            v.lang === 'en-US' && 
            (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('woman'))
          );
        }
        
        // Secondary fallback - any US English voice
        if (!selectedVoice) {
          selectedVoice = voices.find(v => v.lang === 'en-US');
        }
      }
      
      // Final fallback: any English voice (prefer US)
      if (!selectedVoice) {
        selectedVoice = voices.find(v => v.lang === 'en-US') || voices.find(v => v.lang.startsWith('en'));
      }
      
      if (selectedVoice) {
        utter.voice = selectedVoice;
        utter.lang = selectedVoice.lang;
      } else {
        utter.lang = 'en-US'; // Default to US English
      }
      
      // Device-specific voice settings for soft feminine voice
      if (isMobile) {
        utter.rate = 0.85; // Slower for gentle mobile delivery
        utter.pitch = 1.2; // Higher pitch for soft feminine voice
        utter.volume = 0.9; // Slightly softer volume
      } else {
        utter.rate = 0.9; // Gentle speaking pace
        utter.pitch = 1.1; // Soft feminine tone
        utter.volume = 0.95; // Slightly reduced volume for softness
      }

      utter.onstart = () => setIsSpeaking(true);
      utter.onend = () => setIsSpeaking(false);
      utter.onerror = () => setIsSpeaking(false);

      // Mobile-specific: Add delay for better audio processing
      if (isMobile) {
        setTimeout(() => {
          if (synthRef.current) {
            synthRef.current.speak(utter);
          }
        }, 100);
      } else {
        if (synthRef.current) {
          synthRef.current.speak(utter);
        }
      }
    });
  };

  const stopSpeaking = () => {
    if (synthRef.current) synthRef.current.cancel();
    setIsSpeaking(false);
  };

  // 🎤 Toggle Voice Input
  const toggleVoiceInput = async () => {
    if (!recognitionRef.current) {
      setVoiceError('Voice recognition not supported. Please use Chrome, Edge, or Safari.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setVoiceError('');
      return;
    }

    // Check if we're on HTTPS (required for production)
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
      setVoiceError('🔒 Voice input requires HTTPS. Please use the secure version of this site.');
      return;
    }

    // Check if getUserMedia is available
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setVoiceError('Microphone access not available. Please use a modern browser with HTTPS.');
      return;
    }

    try {
      console.log('Requesting microphone permission...');
      console.log('Protocol:', window.location.protocol);
      console.log('Hostname:', window.location.hostname);
      
      // Request microphone permission explicitly with detailed constraints
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          sampleRate: 44100
        } 
      });
      
      console.log('Microphone permission granted');
      console.log('Audio tracks:', stream.getAudioTracks().length);
      
      // Stop the stream immediately (we just needed permission)
      stream.getTracks().forEach(track => {
        track.stop();
        console.log('Track stopped:', track.label);
      });
      
      setMicPermission('granted');
      setVoiceError('');
      
      // Delay before starting recognition
      setTimeout(() => {
        try {
          console.log('Starting speech recognition...');
          recognitionRef.current.start();
          console.log('Speech recognition started successfully');
        } catch (e: any) {
          console.error('Recognition start error:', e);
          if (e.message && e.message.includes('already started')) {
            setIsListening(true);
          } else {
            setVoiceError('Could not start voice recognition. Please refresh and try again.');
          }
        }
      }, 200);
    } catch (error: any) {
      console.error('Microphone access error:', error);
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      setIsListening(false);
      
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        setVoiceError('🎤 Microphone blocked! Click the lock icon 🔒 in your browser address bar → Site Settings → Allow Microphone');
        setMicPermission('denied');
      } else if (error.name === 'NotFoundError') {
        setVoiceError('No microphone detected. Please connect a microphone and try again.');
      } else if (error.name === 'NotReadableError') {
        setVoiceError('Microphone is being used by another app. Please close other apps and try again.');
      } else if (error.name === 'SecurityError') {
        setVoiceError('🔒 Security error. This site must use HTTPS for microphone access. Please contact support.');
      } else if (error.name === 'NotSupportedError') {
        setVoiceError('Microphone not supported on this device or browser. Please try Chrome or Edge.');
      } else {
        setVoiceError(`Microphone error: ${error.message || 'Unknown error'}. Please ensure HTTPS and refresh.`);
      }
    }
  };

  // ---------------------------
  // ✅ Form Validation
  // ---------------------------
  const validateForm = (formData: LeadFormData): string | null => {
    // Name validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      return "कृपया अपना सही नाम दर्ज करें (कम से कम 2 अक्षर)";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "कृपया सही Email ID दर्ज करें (जैसे: name@example.com)";
    }

    // Phone validation (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/[^\d]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return "कृपया सही Phone Number दर्ज करें (10 अंक, 6-9 से शुरू)";
    }

    return null;
  };

  // ---------------------------
  // 📝 HubSpot Lead Submission
  // ---------------------------
  const submitToHubSpot = async (formData: LeadFormData) => {
    // Validate form first
    const validationError = validateForm(formData);
    if (validationError) {
      const errorMsg: Message = {
        id: Date.now().toString(),
        text: `❌ ${validationError}\n\nकृपया सही जानकारी भरकर दोबारा try करें।`,
        sender: 'olivia',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
      return;
    }

    setIsSubmittingLead(true);
    
    try {
      const hubspotFormData = {
        fields: [
          {
            objectTypeId: "0-1",
            name: "firstname",
            value: formData.name.split(' ')[0]
          },
          {
            objectTypeId: "0-1",
            name: "lastname",
            value: formData.name.split(' ').slice(1).join(' ') || formData.name.split(' ')[0]
          },
          {
            objectTypeId: "0-1",
            name: "email",
            value: formData.email
          },
          {
            objectTypeId: "0-1",
            name: "phone",
            value: formData.phone.replace(/[^\d]/g, '') // Clean phone number
          },
          {
            objectTypeId: "0-1",
            name: "lead_source",
            value: "Deepiotics Website - Olivia Bot"
          }
        ],
        context: {
          pageUri: window.location.href,
          pageName: "Deepiotics - Olivia Bot Lead Capture"
        }
      };

      const response = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/244512215/973bf6d5-1212-46d6-b866-8bf09df07006',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(hubspotFormData)
        }
      );

      if (response.ok) {
        // Track successful lead submission
        if (typeof window !== 'undefined' && (window as any).clarity) {
          (window as any).clarity('event', 'lead_form_submitted', {
            source: 'olivia_bot',
            email_domain: formData.email.split('@')[1],
            timestamp: new Date().toISOString()
          });
        }

        setLeadSubmitted(true);
        setShowLeadForm(false);
        
        const successMsg: Message = {
          id: Date.now().toString(),
          text: `🎉 Thank you ${formData.name}! Your details have been submitted successfully.\n\nOur team will contact you within 24 hours to discuss your AI strategy.\n\nIn the meantime, feel free to ask me anything about our services!`,
          sender: 'olivia',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, successMsg]);
        // Delay speech for form submission to ensure proper audio
        setTimeout(() => {
          speak(successMsg.text);
        }, 500);
        
        // Reset form
        setLeadFormData({ name: '', email: '', phone: '' });
      } else {
        throw new Error('Failed to submit to HubSpot');
      }
    } catch (error) {
      console.error('HubSpot submission error:', error);
      const errorMsg: Message = {
        id: Date.now().toString(),
        text: '❌ Sorry, there was an error submitting your details. Please try again or contact us directly at contact@deepiotics.com',
        sender: 'olivia',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsSubmittingLead(false);
    }
  };

  // ---------------------------
  // 🤖 Olivia Response Logic with Lead Generation
  // ---------------------------
  const getOliviaResponse = (msg: string): string => {
    const m = msg.toLowerCase();

    // Trigger lead form for specific intents
    const leadTriggers = [
      'book', 'schedule', 'call', 'meeting', 'consultation', 'strategy',
      'contact', 'talk', 'speak', 'discuss', 'demo', 'interested',
      'pricing', 'quote', 'proposal', 'help me', 'get started'
    ];

    const shouldShowLeadForm = leadTriggers.some(trigger => m.includes(trigger));
    
    if (shouldShowLeadForm && !leadSubmitted) {
      setTimeout(() => setShowLeadForm(true), 500);
      return "I'd love to connect you with our team! 🎯\n\nLet me collect your details so we can schedule a free AI strategy call with you.\n\nPlease fill in the form below and we'll reach out within 24 hours.";
    }

    // Website knowledge base
    const websiteKnowledge = {
      company: "Deepiotics - Your AI-Trusted Partner for Every Stage of Your Business Growth",
      location: "204, Atulya IT Park, Indore, MP 452016, India",
      email: "contact@deepiotics.com",
      phone: "+91 8827272142",
      booking: "https://tidycal.com/team/deepiotics-team/call",
      stats: "70+ AI Solutions Delivered | 80% Efficiency Gain | 35% Cost Reduction",
      benefits: "End-to-End Product Engineering | 70+ AI Projects | Faster Time-to-Market | Cost-Efficient"
    };

    if (m.includes("service") || m.includes("what do you do"))
      return "Deepiotics offers:\n\n• Custom AI Development - ML models, chatbots, document processing\n• AI Agents - Autonomous execution, multi-channel engagement\n• Multi-Agent Systems - Orchestration, collaborative AI\n• AI Analytics - Business intelligence, predictive analysis\n• Process Automation - Workflow automation, RPA\n• AI LinkedIn Growth - Personal branding, lead generation\n• AI Business Growth Suite - Complete digital transformation\n\nWhich service interests you?";

    if (m.includes("why") || m.includes("choose"))
      return `Why Deepiotics?\n\n✓ ${websiteKnowledge.benefits}\n✓ Proven Results: ${websiteKnowledge.stats}\n✓ 100+ companies worldwide trust us\n\nWant to see case studies?`;

    if (m.includes("ai"))
      return "We build custom AI solutions:\n\n• Multi-Agent Systems\n• Machine Learning models\n• NLP chatbots & virtual assistants\n• Computer Vision\n• Predictive Analytics\n• Intelligent Document Processing\n\nClients see 80%+ efficiency gains!";

    if (m.includes("price") || m.includes("cost"))
      return "Pricing depends on your scope.\nWe offer fixed-price & retainer models.\n\nOur solutions deliver 35% cost reduction on average.\nWould you like a free consultation?";

    if (m.includes("call") || m.includes("contact") || m.includes("location") || m.includes("address"))
      return `Contact Deepiotics:\n\n📞 Book call: ${websiteKnowledge.booking}\n📧 Email: ${websiteKnowledge.email}\n📱 Phone: ${websiteKnowledge.phone}\n📍 Office: ${websiteKnowledge.location}`;

    if (m.includes("stat") || m.includes("result") || m.includes("achievement"))
      return `Our proven results:\n\n✓ ${websiteKnowledge.stats}\n✓ 100+ companies worldwide\n✓ Manufacturing: 87% defect reduction\n✓ Healthcare: 96% diagnostic accuracy\n✓ Finance: 99.2% fraud detection\n\nWant specific case studies?`;

    if (m.includes("page") || m.includes("website") || m.includes("navigate"))
      return "Our website includes:\n\n• Home - Services overview, AI capabilities\n• About - Company details, team info\n• Services - Detailed offerings\n• Portfolio - Case studies & success stories\n• Careers - Job listings\n• Contact - Get in touch\n• Blog - AI insights\n\nWhich section interests you?";

    if (m.includes("hi") || m.includes("hello") || m.includes("hey"))
      return "Hi! 😊 I'm Olivia, your AI consultant at Deepiotics.\n\nWe specialize in AI development, automation, and enterprise solutions.\n\nHow can I help you today?";

    return "Interesting! Could you tell me more?\n\nI can help with:\n• AI Development & Automation\n• Services & Pricing\n• Case Studies & Results\n• Contact Information\n\nWhat would you like to know?";
  };

  // ---------------------------
  // 📩 Send Message Logic
  // ---------------------------
  const handleSendMessage = (text?: string, isVoice?: boolean) => {
    const msg = text || inputText.trim();
    if (!msg) return;

    // Track Olivia Bot interaction
    if (typeof window !== 'undefined' && (window as any).clarity) {
      (window as any).clarity('event', 'olivia_message_sent', {
        message_type: isVoice ? 'voice' : 'text',
        message_length: msg.length,
        timestamp: new Date().toISOString()
      });
    }

    const userMsg: Message = {
      id: Date.now().toString(),
      text: msg,
      sender: "user",
      timestamp: new Date(),
      isVoice
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText("");

    setTimeout(() => {
      const response = getOliviaResponse(msg);

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "olivia",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMsg]);

      if (voiceEnabled && isVoice) speak(response);
    }, 400); // Faster response - 400ms instead of 800ms
  };

  // ---------------------------
  // 💬 Quick Actions
  // ---------------------------
  const quickActions = [
    { icon: "🔍", text: "Explore Services" },
    { icon: "📞", text: "Book a Call" },
    { icon: "❓", text: "Why Choose Us?" },
  ];

  // =====================================================
  // UI STARTS HERE
  // =====================================================

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center"
      >
        <img
          src="/Olivia.PNG"
          alt="Olivia"
          className="w-10 h-10 rounded-full border-2 border-white animate-bounce"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia";
          }}
        />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 ${isMinimized ? "w-80" : "w-[calc(100vw-2rem)] sm:w-80 lg:w-72 max-w-md"}`}>
      <div className={`bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden relative ${isMinimized ? "h-20" : "h-[85vh] sm:h-[500px] lg:h-[450px] max-h-[500px]"}`}>

        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/Olivia.PNG" className="w-12 h-12 rounded-full border-2 border-white" />
            <div>
              <h3 className="text-white font-bold text-lg">Olivia</h3>
              <p className="text-white/80 text-xs">AI Assistant • Online</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button onClick={() => setVoiceEnabled(!voiceEnabled)} className="text-white">
              {voiceEnabled ? <Volume2 /> : <VolumeX />}
            </button>

            <button onClick={() => setIsMinimized(!isMinimized)} className="text-white">
              {isMinimized ? <Maximize2 /> : <Minimize2 />}
            </button>

            <button onClick={() => setIsOpen(false)} className="text-white">
              <X />
            </button>
          </div>
        </div>

        {/* Messages */}
        {!isMinimized && (
          <>
            <div className="h-[calc(85vh-280px)] sm:h-[280px] lg:h-[240px] max-h-[280px] overflow-y-auto p-3 sm:p-4 bg-gray-50">
              {messages.map((m) => (
                <div key={m.id} className={`mb-4 flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] ${m.sender === "user" ? "text-right" : ""}`}>
                    <div
                      className={`px-3 sm:px-4 py-2 sm:py-3 rounded-2xl ${
                        m.sender === "user"
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                          : "bg-white border"
                      }`}
                    >
                      <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed break-words">{m.text}</p>
                    </div>
                  </div>
                </div>
              ))}

              {isSpeaking && (
                <div className="mt-2 text-pink-500 flex items-center space-x-2">
                  <Volume2 className="animate-pulse" />
                  <span>Olivia is speaking...</span>
                  <button onClick={stopSpeaking} className="underline text-xs">Stop</button>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="p-2 sm:p-3 flex gap-1 sm:gap-2 border-t bg-white overflow-x-auto">
              {quickActions.map((a, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(a.text)}
                  className="px-2 sm:px-3 py-1.5 sm:py-2 border rounded-full text-xs hover:bg-gray-100 whitespace-nowrap flex-shrink-0 flex items-center space-x-1"
                >
                  <span className="text-sm">{a.icon}</span>
                  <span className="text-xs">{a.text}</span>
                </button>
              ))}
            </div>

            {/* Lead Form Modal */}
            {showLeadForm && (
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Get Your Free Strategy Call</h3>
                    <p className="text-sm text-gray-600">Fill in your details below and our team will contact you within 24 hours</p>
                  </div>

                  <form onSubmit={(e) => {
                    e.preventDefault();
                    submitToHubSpot(leadFormData);
                  }} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={leadFormData.name}
                        onChange={(e) => setLeadFormData({...leadFormData, name: e.target.value})}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Enter your email address (required)"
                        value={leadFormData.email}
                        onChange={(e) => setLeadFormData({...leadFormData, email: e.target.value})}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Phone with country code (e.g. +91) (required)"
                        value={leadFormData.phone}
                        onChange={(e) => setLeadFormData({...leadFormData, phone: e.target.value})}
                        required
                        pattern="\+?[0-9]{10,15}"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                      />
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setShowLeadForm(false)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmittingLead}
                        className="flex-1 px-4 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:shadow-lg transition-all font-medium disabled:opacity-50"
                      >
                        {isSubmittingLead ? 'Submitting...' : 'Continue'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-2 sm:p-4 border-t bg-white">
              {voiceError && (
                <div className="mb-2 p-2 bg-red-50 border border-red-200 rounded-lg text-[10px] sm:text-xs text-red-600 flex items-start space-x-2">
                  <span className="flex-shrink-0 text-xs">⚠️</span>
                  <span className="flex-1 break-words">{voiceError}</span>
                  <button onClick={() => setVoiceError('')} className="text-red-400 hover:text-red-600">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
              <div className="flex items-center gap-1 sm:gap-2">
                <input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 rounded-full text-xs sm:text-sm"
                  placeholder="Type message..."
                />

                <button
                  onClick={toggleVoiceInput}
                  className={`p-2 sm:p-3 rounded-full relative flex-shrink-0 ${
                    isListening
                      ? "bg-red-500 text-white animate-pulse"
                      : micPermission === 'denied'
                      ? "bg-gray-300 text-gray-500"
                      : "bg-gray-200"
                  }`}
                  title={
                    micPermission === 'denied'
                      ? 'Microphone access denied'
                      : isListening
                      ? 'Stop listening'
                      : 'Start voice input'
                  }
                >
                  {isListening ? <MicOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Mic className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {micPermission === 'denied' && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white"></span>
                  )}
                </button>

                <button
                  onClick={() => handleSendMessage()}
                  className="p-2 sm:p-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full flex-shrink-0"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OliviaBot;
