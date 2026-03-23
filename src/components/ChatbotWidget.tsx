import React, { useState, useRef, useEffect } from 'react';
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

interface ChatbotWidgetProps {
  customerName?: string;
  customerId?: string;
}

const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ 
  customerName = "Guest", 
  customerId = "guest_user" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Good day! I'm Olivia, your AI technology consultant at Deepiotics.\n\nI operate with advanced intelligence and voice capabilities to help you explore our engineering solutions. How may I assist you today?",
      sender: 'olivia',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [conversationContext, setConversationContext] = useState<string[]>([]);
  const [micPermission, setMicPermission] = useState<'granted' | 'denied' | 'prompt'>('prompt');
  const [voiceError, setVoiceError] = useState('');
  const [continuousVoiceMode, setContinuousVoiceMode] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadFormData, setLeadFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

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

    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US'; // Changed to en-US for better mobile support
      recognitionRef.current.maxAlternatives = 1;

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setVoiceError('');
        handleSendMessage(transcript, true);
      };

      recognitionRef.current.onerror = (event: any) => {
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setVoiceError('Microphone access denied. Please allow microphone permission in your browser settings.');
          setMicPermission('denied');
        } else if (event.error === 'no-speech') {
          setVoiceError('No speech detected. Please try again.');
        } else if (event.error === 'network') {
          setVoiceError('Network error. Please check your connection.');
        } else {
          setVoiceError('Voice input error. Please try again.');
        }
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    synthRef.current = window.speechSynthesis;

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const speak = (text: string) => {
    if (!voiceEnabled || !synthRef.current) return;

    synthRef.current.cancel();
    
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
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Priority: UK/US professional female voices
      const preferredVoices = [
        'Google UK English Female',
        'Google US English Female', 
        'Microsoft Zira Desktop',
        'Microsoft Zira',
        'Samantha',
        'Karen',
        'Victoria',
        'Fiona',
        'Moira',
        'Tessa'
      ];
      
      // Find best female voice
      let selectedVoice = null;
      for (const preferred of preferredVoices) {
        selectedVoice = voices.find(v => v.name.includes(preferred));
        if (selectedVoice) break;
      }
      
      // Fallback: any en-GB or en-US female voice
      if (!selectedVoice) {
        selectedVoice = voices.find(v => 
          (v.lang === 'en-GB' || v.lang === 'en-US') && 
          (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('woman'))
        );
      }
      
      // Final fallback: any en-GB or en-US voice
      if (!selectedVoice) {
        selectedVoice = voices.find(v => v.lang === 'en-GB' || v.lang === 'en-US');
      }
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
      } else {
        utterance.lang = 'en-GB'; // UK English for professional feel
      }
      
      // Professional voice settings
      utterance.rate = 0.95; // Natural speaking pace
      utterance.pitch = 0.85; // Warm, professional female tone
      utterance.volume = 1;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
        // Auto-restart listening in continuous mode
        if (continuousVoiceMode && recognitionRef.current) {
          setTimeout(() => {
            try {
              recognitionRef.current.start();
              setIsListening(true);
            } catch (e) {
              console.log('Recognition restart failed:', e);
              setContinuousVoiceMode(false);
            }
          }, 1000);
        }
      };
      utterance.onerror = () => setIsSpeaking(false);

      if (synthRef.current) {
        synthRef.current.speak(utterance);
      }
    });
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  const toggleVoiceInput = async () => {
    if (!recognitionRef.current) {
      setVoiceError('Voice recognition not supported in this browser. Please use Chrome or Edge.');
      return;
    }

    if (isListening) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        console.log('Stop error:', e);
      }
      setIsListening(false);
      setContinuousVoiceMode(false);
      setVoiceError('');
      return;
    }

    // Check if getUserMedia is available
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setVoiceError('Microphone access not available. Please use HTTPS and a modern browser.');
      return;
    }

    try {
      console.log('Requesting microphone permission...');
      
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
      
      // Stop the stream immediately (we just needed permission)
      stream.getTracks().forEach(track => {
        track.stop();
        console.log('Track stopped:', track.label);
      });
      
      setMicPermission('granted');
      setVoiceError('');
      
      // Delay before starting recognition (helps on all platforms)
      setTimeout(() => {
        try {
          console.log('Starting speech recognition...');
          recognitionRef.current.start();
          setIsListening(true);
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
      setIsListening(false);
      
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        setVoiceError('🎤 Microphone blocked! Click the lock icon 🔒 in address bar → Site Settings → Allow Microphone');
        setMicPermission('denied');
      } else if (error.name === 'NotFoundError') {
        setVoiceError('No microphone detected. Please connect a microphone and try again.');
      } else if (error.name === 'NotReadableError') {
        setVoiceError('Microphone is being used by another app. Please close other apps and try again.');
      } else if (error.name === 'SecurityError') {
        setVoiceError('Security error. Please ensure you\'re using HTTPS and refresh the page.');
      } else {
        setVoiceError(`Microphone error: ${error.message || 'Unknown error'}. Please refresh and try again.`);
      }
    }
  };

  const toggleContinuousVoice = async () => {
    if (continuousVoiceMode) {
      // Stop continuous mode
      setContinuousVoiceMode(false);
      if (isListening && recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          console.log('Stop error:', e);
        }
        setIsListening(false);
      }
      if (isSpeaking && synthRef.current) {
        synthRef.current.cancel();
        setIsSpeaking(false);
      }
    } else {
      // Check if getUserMedia is available
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setVoiceError('Microphone access not available. Please use HTTPS and a modern browser.');
        return;
      }

      // Start continuous mode
      try {
        console.log('Requesting microphone for continuous mode...');
        
        const stream = await navigator.mediaDevices.getUserMedia({ 
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
            sampleRate: 44100
          } 
        });
        
        console.log('Microphone granted for continuous mode');
        
        // Stop the stream immediately
        stream.getTracks().forEach(track => {
          track.stop();
          console.log('Track stopped:', track.label);
        });
        
        setMicPermission('granted');
        setVoiceError('');
        setContinuousVoiceMode(true);
        
        // Delay for all platforms
        setTimeout(() => {
          try {
            console.log('Starting continuous recognition...');
            recognitionRef.current.start();
            setIsListening(true);
            console.log('Continuous recognition started');
          } catch (e: any) {
            console.error('Continuous recognition error:', e);
            if (e.message && e.message.includes('already started')) {
              setIsListening(true);
            } else {
              setVoiceError('Could not start continuous mode. Try single voice input instead.');
              setContinuousVoiceMode(false);
            }
          }
        }, 200);
      } catch (error: any) {
        console.error('Continuous mode error:', error);
        
        if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
          setVoiceError('🎤 Microphone blocked! Click lock icon 🔒 → Site Settings → Allow Microphone');
          setMicPermission('denied');
        } else if (error.name === 'NotReadableError') {
          setVoiceError('Microphone busy. Close other apps using microphone.');
        } else if (error.name === 'SecurityError') {
          setVoiceError('Security error. Ensure HTTPS and refresh page.');
        } else {
          setVoiceError('Could not start continuous voice. Try single voice input instead.');
        }
      }
    }
  };

  // HubSpot Lead Submission
  const submitToHubSpot = async (formData: LeadFormData) => {
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
            value: formData.phone
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
        setLeadSubmitted(true);
        setShowLeadForm(false);
        
        const successMsg: Message = {
          id: Date.now().toString(),
          text: `🎉 Thank you ${formData.name}! Your details have been submitted successfully.\n\nOur team will contact you within 24 hours to discuss your AI strategy.\n\nIn the meantime, feel free to ask me anything about our services!`,
          sender: 'olivia',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, successMsg]);
        speak(successMsg.text);
        
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

  const getOliviaResponse = (userMessage: string, context: string[]): string => {
    const msg = userMessage.toLowerCase();
    const hasAskedBefore = (topic: string) => context.some(c => c.includes(topic));

    // Trigger lead form for specific intents
    const leadTriggers = [
      'book', 'schedule', 'call', 'meeting', 'consultation', 'strategy',
      'contact', 'talk', 'speak', 'discuss', 'demo', 'interested',
      'pricing', 'quote', 'proposal', 'help me', 'get started'
    ];

    const shouldShowLeadForm = leadTriggers.some(trigger => msg.includes(trigger));
    
    if (shouldShowLeadForm && !leadSubmitted) {
      setTimeout(() => setShowLeadForm(true), 500);
      return "I'd love to connect you with our team! 🎯\n\nLet me collect your details so we can schedule a free AI strategy call with you.\n\nPlease fill in the form below and we'll reach out within 24 hours.";
    }

    // Website content knowledge base
    const websiteKnowledge = {
      company: "Deepiotics is an AI development company specializing in Custom Generative AI solutions, process automation, and AI Agents. We're your AI-Trusted Partner for Every Stage of Your Business Growth.",
      location: "204, Atulya IT Park, Indore, MP 452016, India",
      email: "contact@deepiotics.com",
      phone: "+91 8827272142",
      booking: "https://tidycal.com/team/deepiotics-team/call",
      services: [
        "Custom AI Development - Machine learning models, AI chatbots, intelligent document processing",
        "AI Agents - Autonomous task execution, multi-channel engagement, intelligent decision making",
        "Multi-Agent Systems - Agent orchestration, collaborative AI networks, adaptive learning",
        "AI Analytics - Business intelligence, real-time data processing, predictive analysis",
        "AI Integration - Custom API development, legacy system integration, cloud deployment",
        "Process Automation - Workflow automation, RPA, intelligent automation",
        "AI LinkedIn Growth - Personal branding, content strategy, lead generation",
        "AI Business Growth Suite - Complete digital transformation solutions"
      ],
      stats: {
        projects: "70+ AI Solutions Delivered",
        efficiency: "80% Average Efficiency Gain",
        savings: "35% Lower Operational Costs",
        clients: "100+ companies worldwide"
      },
      caseStudies: [
        "Manufacturing: 87% defect reduction, £4.2M annual savings",
        "Healthcare: 96% diagnostic accuracy, 2000+ patients daily",
        "Finance: 99.2% fraud detection, £12.5M losses prevented",
        "Logistics: 34% fuel cost reduction, 41% delivery improvement"
      ],
      benefits: [
        "End-to-End Product Engineering",
        "Proven Experience With 70+ AI Projects",
        "Faster Time-to-Market",
        "Cost-Efficient Global Outsourcing"
      ],
      pages: {
        home: "Hero section with video background, services overview, AI capabilities, case studies",
        about: "Company details, team information, mission and vision",
        services: "Detailed service offerings with consultation booking",
        portfolio: "Case studies and success stories",
        careers: "Job listings and application portal",
        contact: "Contact form and company information",
        blog: "AI insights and industry updates"
      }
    };

    // Greeting - varied responses
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      if (hasAskedBefore('greeting')) {
        return "Welcome back! How can I provide further insight into our technology capabilities?";
      }
      return "Hello! I'm Olivia, your AI technology consultant at Deepiotics.\n\nWe specialise in AI development, automation, and enterprise software engineering. What specific challenge are you looking to address?";
    }

    // Services - intelligent, non-repetitive
    if (msg.includes('service') || msg.includes('what do you do') || msg.includes('what can you do')) {
      if (hasAskedBefore('services')) {
        return "To expand on our capabilities:\n\nOur engineering approach focuses on precision architecture, scalable infrastructure, and long-term partnership. We handle the complete development lifecycle—from strategic planning through deployment and optimisation.\n\nWhich area aligns most closely with your current objectives?";
      }
      setConversationContext(prev => [...prev, 'services']);
      return `Deepiotics delivers end-to-end technology solutions:\n\n${websiteKnowledge.services.map(s => '• ' + s).join('\n')}\n\nWe engineer smarter, deliver faster, and customise deeply. Would you like to explore a specific domain?`;
    }

    // Stats and achievements
    if (msg.includes('stat') || msg.includes('number') || msg.includes('achievement') || msg.includes('result')) {
      return `Here are our proven results:\n\n${Object.values(websiteKnowledge.stats).map(s => '✓ ' + s).join('\n')}\n\nWe've delivered measurable impact across ${websiteKnowledge.stats.clients}. Would you like to see specific case studies?`;
    }

    // Location and contact
    if (msg.includes('location') || msg.includes('address') || msg.includes('where') || msg.includes('office')) {
      return `Our office is located at:\n\n📍 ${websiteKnowledge.location}\n\n📧 Email: ${websiteKnowledge.email}\n📞 Phone: ${websiteKnowledge.phone}\n\nWould you like to schedule a visit or book a consultation?`;
    }

    // Website pages
    if (msg.includes('page') || msg.includes('website') || msg.includes('navigate')) {
      return `Our website includes:\n\n${Object.entries(websiteKnowledge.pages).map(([page, desc]) => `• ${page.charAt(0).toUpperCase() + page.slice(1)}: ${desc}`).join('\n')}\n\nWhich section would you like to explore?`;
    }

    // Benefits
    if (msg.includes('benefit') || msg.includes('advantage') || msg.includes('why work')) {
      return `Key benefits of working with Deepiotics:\n\n${websiteKnowledge.benefits.map(b => '✓ ' + b).join('\n')}\n\nWe focus on delivering real business value. Would you like to discuss your specific needs?`;
    }

    // Why choose - strategic angles
    if (msg.includes('why choose') || msg.includes('why deepiotics') || msg.includes('what makes you')) {
      if (hasAskedBefore('why')) {
        return "Beyond technical excellence, our strategic advantage lies in:\n\n• Architectural precision that scales with your growth\n• Predictable delivery through proven methodologies\n• Security-first engineering culture\n• Long-term partnership mindset—not transactional engagements\n\nWe've helped 100+ organisations achieve measurable competitive advantages. Shall we discuss your specific requirements?";
      }
      setConversationContext(prev => [...prev, 'why']);
      return "Excellent question. Here's our strategic differentiation:\n\n✓ Engineering excellence with 15+ years of proven expertise\n✓ AI-first approach to complex business challenges\n✓ Deep customisation aligned to your exact requirements\n✓ Scalable, secure, enterprise-grade architecture\n✓ Delivery discipline with transparent communication\n\nOur clients achieve measurable ROI through superior engineering quality. Would you like to see specific case studies?";
    }

    // AI - varied technical depth
    if (msg.includes('ai') || msg.includes('artificial intelligence') || msg.includes('machine learning')) {
      if (hasAskedBefore('ai')) {
        return "Our AI engineering extends beyond standard implementations:\n\nWe architect multi-agent systems, build custom ML pipelines, and integrate AI seamlessly into existing infrastructure. Recent projects include predictive analytics platforms, intelligent automation systems, and computer vision solutions.\n\nClients typically see 80%+ efficiency gains and 35% operational cost reduction. What's your specific AI use case?";
      }
      setConversationContext(prev => [...prev, 'ai']);
      return "AI is our core engineering strength. We specialise in:\n\n• Custom AI Development tailored to business logic\n• Multi-Agent Systems for complex orchestration\n• Machine Learning models with production-grade accuracy\n• Natural Language Processing & conversational AI\n• Computer Vision for intelligent visual analysis\n• Predictive Analytics for strategic decision-making\n\nOur solutions deliver measurable business impact. Would you like to discuss a specific application?";
    }

    // Pricing - consultative approach
    if (msg.includes('price') || msg.includes('cost') || msg.includes('budget') || msg.includes('investment')) {
      if (hasAskedBefore('pricing')) {
        return "Our pricing philosophy centres on value delivery and transparent partnership.\n\nWe structure engagements based on your strategic objectives—whether that's fixed-scope delivery, flexible time-and-materials, or ongoing retainer partnerships.\n\nI'd recommend a brief consultation where we can understand your requirements and provide a tailored proposal. Shall I arrange that?";
      }
      setConversationContext(prev => [...prev, 'pricing']);
      return "Our pricing reflects the strategic value and engineering quality we deliver.\n\nWe offer:\n• Fixed-price projects for well-defined scopes\n• Time & materials for evolving requirements\n• Retainer partnerships for ongoing innovation\n\nEach engagement is tailored to your specific objectives. I'd be happy to arrange a free consultation where our team can provide a detailed, transparent proposal.\n\nWould you like to schedule a strategy session?";
    }

    // Contact - professional guidance
    if (msg.includes('contact') || msg.includes('call') || msg.includes('meeting') || msg.includes('book') || msg.includes('schedule')) {
      return "I'd be delighted to connect you with our engineering team.\n\n📞 Book a free AI strategy session:\nhttps://tidycal.com/team/deepiotics-team/call\n\n📧 Email our consultants:\ncontact@deepiotics.com\n\n📍 Visit our office:\n204, Atulya IT Park, Indore, MP 452016, India\n\nOur experts typically respond within 2 hours during business hours. Is there anything specific you'd like me to prepare for the consultation?";
    }

    // Portfolio - strategic presentation
    if (msg.includes('portfolio') || msg.includes('case stud') || msg.includes('example') || msg.includes('project') || msg.includes('work')) {
      if (hasAskedBefore('portfolio')) {
        return "Our portfolio spans multiple industries with consistent results:\n\nManufacturing, healthcare, finance, logistics, and SaaS—each project delivered measurable ROI through precision engineering and strategic AI implementation.\n\nWe've generated £50M+ in client value through operational efficiency, cost reduction, and revenue enhancement. Which industry vertical interests you most?";
      }
      setConversationContext(prev => [...prev, 'portfolio']);
      return "We've delivered 70+ successful AI and software engineering projects:\n\n🏭 Manufacturing: 87% defect reduction, £4.2M annual savings\n🏥 Healthcare: 96% diagnostic accuracy, 2000+ patients daily\n💰 Finance: 99.2% fraud detection, £12.5M losses prevented\n🚚 Logistics: 34% fuel cost reduction, 41% delivery improvement\n\nOur solutions consistently deliver measurable business impact. Would you like detailed case studies in your industry?";
    }

    // Technical questions - architectural insight
    if (msg.includes('how') || msg.includes('technical') || msg.includes('architecture') || msg.includes('implement')) {
      return "That's a thoughtful technical question.\n\nOur architectural approach emphasises:\n• Scalable, modular design patterns\n• Security-first engineering principles\n• Cloud-native infrastructure where appropriate\n• Seamless integration with existing systems\n\nThe specific implementation varies based on your requirements, infrastructure, and strategic objectives.\n\nWould you like me to arrange a technical consultation where our architects can provide detailed insights?";
    }

    // Default - intelligent, consultative
    return "That's an interesting question. As your AI technology consultant, I'm here to help you understand how our engineering capabilities can address your specific challenges.\n\nDeepiotics specialises in:\n• AI Development & Intelligent Automation\n• Custom Software & Enterprise Solutions\n• Cloud Engineering & Infrastructure\n• Data Analytics & Business Intelligence\n\nCould you tell me more about what you're looking to achieve? Or would you prefer to speak directly with one of our senior consultants?\n\nI can arrange a free strategy session immediately.";
  };

  const handleSendMessage = (text?: string, isVoiceInput?: boolean) => {
    const messageText = text || inputText.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
      isVoice: isVoiceInput
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    setTimeout(() => {
      const response = getOliviaResponse(messageText, conversationContext);
      const oliviaMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'olivia',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, oliviaMessage]);
      
      if (voiceEnabled && isVoiceInput) {
        speak(response);
      }
    }, 400); // Faster response - 400ms instead of 800ms
  };

  const quickActions = [
    { icon: '🔍', text: 'Explore Services' },
    { icon: '📞', text: 'Book a Call' },
    { icon: '❓', text: 'Why Choose Us?' }
  ];

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group"
      >
        <div className="relative">
          <img 
            src="/Olivia.PNG" 
            alt="Olivia" 
            className="w-10 h-10 rounded-full border-2 border-white"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia&backgroundColor=b6e3f4';
            }}
          />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
        </div>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transition-all duration-300 ${isMinimized ? 'w-80 sm:w-80' : 'w-[calc(100vw-2rem)] sm:w-96 max-w-md'}`}>
      <div className={`bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 relative flex flex-col ${isMinimized ? 'h-20' : 'h-[85vh] sm:h-[600px] max-h-[600px]'}`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src="/Olivia.PNG" 
                alt="Olivia" 
                className="w-12 h-12 rounded-full border-2 border-white"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia&backgroundColor=b6e3f4';
                }}
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Olivia</h3>
              <p className="text-white/80 text-xs">AI Consultant • Online</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleContinuousVoice}
              className={`transition-colors p-2 ${
                continuousVoiceMode 
                  ? 'text-green-400 animate-pulse' 
                  : 'text-white/80 hover:text-white'
              }`}
              title={continuousVoiceMode ? 'Stop continuous voice' : 'Start continuous voice conversation'}
            >
              {continuousVoiceMode ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white/80 hover:text-white transition-colors p-2"
            >
              {isMinimized ? <Maximize2 className="w-5 h-5" /> : <Minimize2 className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 bg-gradient-to-b from-gray-50 to-white">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                    {message.sender === 'olivia' && (
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-semibold text-gray-600">Olivia</span>
                      </div>
                    )}
                    <div
                      className={`rounded-2xl px-3 sm:px-4 py-2 sm:py-3 ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                          : 'bg-white border border-gray-200 text-gray-800'
                      }`}
                    >
                      <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed break-words">{message.text}</p>
                      {message.isVoice && (
                        <div className="flex items-center space-x-1 mt-1 text-xs opacity-70">
                          <Mic className="w-3 h-3" />
                          <span>Voice message</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {isSpeaking && (
                <div className="flex items-center space-x-2 text-pink-500 text-sm">
                  <Volume2 className="w-4 h-4 animate-pulse" />
                  <span>Olivia is speaking...</span>
                  <button onClick={stopSpeaking} className="text-xs underline">Stop</button>
                </div>
              )}
              <div ref={messagesEndRef} />
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

            {/* Quick Actions */}
            <div className="px-2 py-2 sm:px-4 sm:py-3 flex flex-wrap gap-1 sm:gap-2 border-t border-gray-200 bg-white overflow-x-auto flex-shrink-0">
              {quickActions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(action.text)}
                  className="px-2 sm:px-3 py-1.5 sm:py-2 bg-white border border-gray-200 rounded-full text-xs hover:bg-gray-50 transition-colors flex items-center space-x-1 whitespace-nowrap flex-shrink-0"
                >
                  <span className="text-sm">{action.icon}</span>
                  <span className="text-xs">{action.text}</span>
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-2 sm:p-4 bg-white border-t border-gray-200 flex-shrink-0">
              <div className="min-h-[60px] sm:min-h-[48px]">
                {continuousVoiceMode && (
                  <div className="mb-2 p-2 bg-green-50 border border-green-200 rounded-lg text-xs text-green-700 flex items-center space-x-1 sm:space-x-2">
                    <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse flex-shrink-0" />
                    <span className="font-semibold text-[10px] sm:text-xs">Voice Active</span>
                    <span className="text-green-600 hidden sm:inline text-[10px] sm:text-xs">- Speak naturally</span>
                  </div>
                )}
                {voiceError && (
                  <div className="mb-2 p-2 bg-red-50 border border-red-200 rounded-lg text-[10px] sm:text-xs text-red-600 flex items-start space-x-2">
                    <span className="flex-shrink-0 text-xs">⚠️</span>
                    <span className="break-words flex-1">{voiceError}</span>
                    <button onClick={() => setVoiceError('')} className="ml-auto text-red-400 hover:text-red-600">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type message..."
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 text-xs sm:text-sm"
                />
                <button
                  onClick={toggleVoiceInput}
                  className={`p-2 sm:p-3 rounded-full transition-all relative flex-shrink-0 ${
                    isListening
                      ? 'bg-red-500 text-white animate-pulse'
                      : micPermission === 'denied'
                      ? 'bg-gray-300 text-gray-500'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
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
                  className="p-2 sm:p-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full hover:shadow-lg transition-all flex-shrink-0"
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

export default ChatbotWidget;
