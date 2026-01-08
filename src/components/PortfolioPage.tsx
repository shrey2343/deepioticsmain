import { Gamepad2, Sparkles, Users, BarChart, CheckCircle, Award, Target, Zap, Globe, Shield, TrendingUp, Brain, Palette, Camera, Database, Lock, ShoppingCart, Heart, Building2, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function PortfolioPage() {
  const [vyuhImageIndex, setVyuhImageIndex] = useState(0);
  const [futureVisionImageIndex, setFutureVisionImageIndex] = useState(0);
  const [dentalImageIndex, setDentalImageIndex] = useState(0);
  const [covidImageIndex, setCovidImageIndex] = useState(0);
  const [researchImageIndex, setResearchImageIndex] = useState(0);
  const [oliviaImageIndex, setOliviaImageIndex] = useState(0);
  
  const vyuhImages = [
    { src: '/vy7.PNG', alt: 'Vyuh Game Interface 1' },
    { src: '/vy8.PNG', alt: 'Vyuh Game Interface 2' }
  ];

  const futureVisionImages = [
    { src: '/a1.PNG', alt: 'FutureVision App Interface 1' },
    { src: '/a2.PNG', alt: 'FutureVision App Interface 2' },
    { src: '/a3.PNG', alt: 'FutureVision App Interface 3' }
  ];

  const dentalImages = [
    { src: '/xray.png', alt: 'Dental X-ray Analysis Interface' }
  ];

  const covidImages = [
    { src: '/Pne.png', alt: 'CovidXTrail Pneumonia Detection Interface' }
  ];

  const researchImages = [
    { src: '/Researchers1.png', alt: 'ResearchHub Interface 1' },
    { src: '/Researchers2.png', alt: 'ResearchHub Interface 2' },
    { src: '/Researchers3.png', alt: 'ResearchHub Interface 3' }
  ];

  const oliviaImages = [
    { src: '/Olivia2.png', alt: 'Olivia AI Consultant Interface' }
  ];

  const nextVyuhImage = () => {
    setVyuhImageIndex((prev) => (prev + 1) % vyuhImages.length);
  };

  const prevVyuhImage = () => {
    setVyuhImageIndex((prev) => (prev - 1 + vyuhImages.length) % vyuhImages.length);
  };

  const nextFutureVisionImage = () => {
    setFutureVisionImageIndex((prev) => (prev + 1) % futureVisionImages.length);
  };

  const prevFutureVisionImage = () => {
    setFutureVisionImageIndex((prev) => (prev - 1 + futureVisionImages.length) % futureVisionImages.length);
  };

  const nextDentalImage = () => {
    setDentalImageIndex((prev) => (prev + 1) % dentalImages.length);
  };

  const prevDentalImage = () => {
    setDentalImageIndex((prev) => (prev - 1 + dentalImages.length) % dentalImages.length);
  };

  const nextCovidImage = () => {
    setCovidImageIndex((prev) => (prev + 1) % covidImages.length);
  };

  const prevCovidImage = () => {
    setCovidImageIndex((prev) => (prev - 1 + covidImages.length) % covidImages.length);
  };

  const nextResearchImage = () => {
    setResearchImageIndex((prev) => (prev + 1) % researchImages.length);
  };

  const prevResearchImage = () => {
    setResearchImageIndex((prev) => (prev - 1 + researchImages.length) % researchImages.length);
  };

  const nextOliviaImage = () => {
    setOliviaImageIndex((prev) => (prev + 1) % oliviaImages.length);
  };

  const prevOliviaImage = () => {
    setOliviaImageIndex((prev) => (prev - 1 + oliviaImages.length) % oliviaImages.length);
  };

  const caseStudies = [
    {
      icon: Gamepad2,
      company: 'Vyuh',
      industry: 'Gaming & EdTech',
      title: 'Vyuh The Game That Trains Modern Leaders Under Pressure',
      challenge: 'Creating an engaging multiplayer gaming platform that revives ancient Indian warfare strategies while providing modern gaming experience with real-time battles, tournaments, and cultural education.',
      solution: 'We developed Vyuh - a comprehensive gaming platform featuring ancient Indian tactical warfare based on Mahabharata formations. The platform includes real-time multiplayer battles, AI-powered opponent matching, tournament systems, offline practice modes, and educational content about Sanskrit terminology and historical battle strategies.',
      results: [
        '10,000+ active players globally',
        '500+ tournaments conducted',
        '4.8/5 user rating',
        'Available in 25 countries',
        '92% player retention rate'
      ],
      technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'AWS'],
      timeline: '6 months',
      team: '8 specialists',
      link: 'https://www.vyuh9.in/',
      metrics: [
        { label: 'Active Players', value: '10K+' },
        { label: 'Tournaments', value: '500+' },
        { label: 'Countries', value: '25' },
        { label: 'User Rating', value: '4.8' }
      ],
      features: [
        { title: 'Strategic Gameplay', desc: 'Reviving ancient Indian warfare strategies through modern gaming mechanics with Chakravyuha formations.' },
        { title: 'Cultural Heritage', desc: 'Educational platform teaching Mahabharata stories and ancient Indian tactical warfare systems.' },
        { title: 'Modern Features', desc: 'Cross-platform gaming with responsive design and offline practice against AI opponents.' }
      ],
      benefits: [
        { title: 'Decisive Leadership Under Pressure', desc: 'Trains leaders to make fast, confident decisions in high-stress situations. Outcome: Less hesitation, stronger ownership, faster execution.' },
        { title: 'Strategic Thinking in Complex Systems', desc: 'Players analyze multi-layered problems and think several moves ahead. Outcome: Better planning, fewer blind spots, smarter strategies.' },
        { title: 'Critical Thinking & Adaptive Mindset', desc: 'Develops ability to adapt strategy in real-time when conditions change. Outcome: Agile leaders who stay effective in chaos.' },
        { title: 'Resilience & Mental Discipline', desc: 'Builds mental resilience, focus, and emotional control under pressure. Outcome: Calm leadership in volatile situations.' }
      ]
    },
    {
      icon: Camera,
      company: 'FutureVision',
      industry: 'AI & Photography',
      title: 'An AI-powered app that helps parents visualize, inspire, and emotionally connect with their child’s future.',
      challenge: 'Parents wanted to visualize their children\'s future career possibilities in a meaningful way. Traditional photo editing was time-consuming and lacked emotional connection. Need for AI-powered solution that creates realistic future portraits.',
      solution: 'We created FutureVision - an advanced AI portrait generator using deep learning algorithms for age progression and facial feature analysis. The platform generates professional career visualizations with realistic clothing and backgrounds for multiple career paths including doctor, pilot, entrepreneur, and artist roles.',
      results: [
        '50,000+ portraits generated',
        '95% accuracy in age progression',
        '4.9/5 customer satisfaction',
        'Privacy-focused data handling',
        'Shareable social media results'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'OpenCV'],
      timeline: '5 months',
      team: '10 specialists',
      link: 'https://future-bloom-portraits.lovable.app',
      metrics: [
        { label: 'Portraits Generated', value: '50K+' },
        { label: 'AI Accuracy', value: '95%' },
        { label: 'User Rating', value: '4.9' },
        { label: 'Career Options', value: '12+' }
      ],
      features: [
        { title: 'Advanced AI Technology', desc: 'Deep learning algorithms for age progression and facial feature analysis with professional results.' },
        { title: 'Emotional Connection', desc: 'Personalized experience creating emotional bonds with future possibilities for families.' },
        { title: 'Privacy First', desc: 'Family-friendly interface with privacy-focused data handling and secure processing.' }
      ],
      benefits: [
        { title: 'Creates Emotional Connection', desc: 'Parents see their child\'s future, building hope and motivation. Emotion: "I can actually see my child becoming this."' },
        { title: 'Inspires Children at Young Age', desc: 'Visual representation boosts confidence and aspiration. Impact: Dreams feel possible, not distant.' },
        { title: 'Encourages Career Awareness', desc: 'Introduces children (5-15 years) to career possibilities. Outcome: Exploration without stress.' },
        { title: 'A Memory Parents Cherish', desc: 'Digital keepsakes parents save and revisit as their child grows. Emotion: Pride, attachment, joy.' }
      ]
    },
    {
      icon: Database,
      company: 'ResearchHub',
      industry: 'Research & Development',
      title: 'Global Research & Innovation Marketplace',
      challenge: 'Researchers and organizations struggled to find verified collaborators for R&D projects. Lack of secure communication channels and milestone tracking led to project failures. Need for a trusted global marketplace connecting researchers with organizations.',
      solution: 'We built ResearchHub - a comprehensive R&D marketplace platform connecting 20,000+ verified academic researchers with organizations across 200+ domains. The platform features credential verification, end-to-end encrypted communication, milestone tracking, secure payment systems, and real-time collaboration tools.',
      results: [
        '20,000+ verified researchers',
        '15,000+ active projects',
        '200+ research domains',
        '98% project completion rate',
        'End-to-end encryption'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
      timeline: '8 months',
      team: '12 specialists',
      link: 'https://researchhub-frontend.onrender.com/',
      metrics: [
        { label: 'Verified Researchers', value: '20K+' },
        { label: 'Active Projects', value: '15K+' },
        { label: 'Research Domains', value: '200+' },
        { label: 'Completion Rate', value: '98%' }
      ],
      features: [
        { title: 'Verified Network', desc: '20,000+ verified academic researchers across 200+ domains with credential verification system.' },
        { title: 'Secure Collaboration', desc: 'End-to-end encrypted communication with milestone tracking and secure payment systems.' },
        { title: 'Growth Metrics', desc: 'Platform showing 33% YoY growth in researchers and 87% increase in active projects.' }
      ],
      benefits: [
        { title: 'Verified Network', desc: '20,000+ verified academic researchers across 200+ domains ensuring quality collaborations.' },
        { title: 'Secure Platform', desc: 'End-to-end encrypted communication and secure payment systems protecting intellectual property.' },
        { title: 'High Success Rate', desc: '98% project completion rate with milestone tracking and real-time collaboration tools.' },
        { title: 'Rapid Growth', desc: '33% YoY growth in researchers and 87% increase in active projects demonstrating platform value.' }
      ]
    },
    {
      icon: Sparkles,
      company: 'Deepiotics',
      industry: 'AI & Customer Service',
      title: 'Olivia - AI-Powered Virtual Consultant',
      challenge: 'Businesses needed 24/7 customer engagement with intelligent, context-aware responses. Traditional chatbots lacked personality and couldn\'t handle complex queries, leading to poor customer experience and high support costs.',
      solution: 'We developed Olivia - an advanced AI consultant with voice capabilities, natural language understanding, and lead generation features. Olivia provides intelligent responses, collects customer information, integrates with HubSpot, and offers continuous voice conversation mode for seamless interaction.',
      results: [
        '24/7 intelligent customer engagement',
        '85% query resolution without human intervention',
        'Voice-enabled natural conversations',
        'Automated lead capture and CRM integration',
        '4.8/5 user satisfaction rating'
      ],
      technologies: ['React', 'TypeScript', 'Web Speech API', 'HubSpot API', 'Supabase'],
      timeline: '4 months',
      team: '6 specialists',
      link: 'https://deepiotics.com',
      benefits: [
        { title: '24/7 Availability', desc: 'Intelligent customer engagement round the clock without human intervention, reducing support costs.' },
        { title: 'Voice Interaction', desc: 'Natural voice conversations with Web Speech API for seamless customer experience.' },
        { title: 'Smart Lead Generation', desc: 'Automated lead capture with HubSpot CRM integration for efficient sales pipeline management.' },
        { title: 'High Resolution Rate', desc: '85% query resolution without human intervention, improving customer satisfaction to 4.8/5.' }
      ]
    },
    {
      icon: Heart,
      company: 'Dentists Community',
      industry: 'Healthcare & Dental',
      title: 'Automated Dental X-ray Analysis',
      challenge: 'Dentists spent significant time manually analyzing X-rays to detect missing teeth, wisdom teeth, and diagnose individual tooth conditions. This time-consuming process reduced productivity and delayed patient diagnosis.',
      solution: 'We developed an AI-powered dental X-ray analysis system using Detectron2 framework with Mask-RCNN for automatic tooth detection and segmentation. The system detects and classifies 32 tooth classes, identifies missing teeth, wisdom teeth, and diagnoses conditions like cavities, treatments, and healthy teeth, significantly reducing diagnosis time.',
      results: [
        'Automatic detection of 32 tooth classes',
        'Missing teeth and wisdom tooth identification',
        'Individual tooth condition classification',
        '70% reduction in diagnosis time',
        'Enhanced diagnostic accuracy for dentists'
      ],
      technologies: ['Detectron2', 'Mask-RCNN', 'Python', 'Deep Learning', 'Computer Vision'],
      timeline: '6 months',
      team: '10 specialists',
      benefits: [
        { title: 'Automated Detection', desc: 'AI-powered system automatically detects and classifies all 32 tooth types with high accuracy.' },
        { title: 'Time Efficiency', desc: '70% reduction in diagnosis time allows dentists to focus on patient care and treatment planning.' },
        { title: 'Comprehensive Analysis', desc: 'Identifies missing teeth, wisdom teeth, cavities, treatments, and healthy teeth in single scan.' },
        { title: 'Enhanced Accuracy', desc: 'Deep learning algorithms provide consistent and reliable diagnostic support for dental professionals.' }
      ]
    },
    {
      icon: Building2,
      company: 'Healthcare Providers',
      industry: 'Healthcare & Radiology',
      title: 'CovidXTrail - Pneumonia Detection from X-Ray',
      challenge: 'Healthcare professionals needed rapid, accurate analysis of chest X-rays to detect Covid-19 and Pneumonia. Manual analysis was time-consuming and required significant radiologist expertise, creating bottlenecks in patient diagnosis.',
      solution: 'We developed CovidXTrail - an AI solution that analyzes chest X-rays in minutes to detect signs of Covid-19 and Pneumonia. The system augments radiologists\' diagnostic ability using AI trained on thousands of verified X-rays, automating time-consuming and low cognitive value tasks while increasing productivity.',
      results: [
        'Chest X-ray analysis in minutes',
        'High accuracy with radiologist-verified training data',
        'Automated detection of Covid-19 and Pneumonia',
        'Increased radiologist productivity',
        'Faster patient diagnosis and treatment'
      ],
      technologies: ['Deep Learning', 'Python', 'TensorFlow', 'Medical Imaging', 'Computer Vision'],
      timeline: '5 months',
      team: '12 specialists',
      benefits: [
        { title: 'Rapid Analysis', desc: 'AI-powered chest X-ray analysis completed in minutes, enabling faster patient diagnosis and treatment decisions.' },
        { title: 'High Accuracy', desc: 'Trained on thousands of radiologist-verified X-rays ensuring reliable Covid-19 and Pneumonia detection.' },
        { title: 'Productivity Boost', desc: 'Automates time-consuming tasks allowing radiologists to focus on complex cases and patient care.' },
        { title: 'Scalable Solution', desc: 'Handles high volume of X-rays efficiently, reducing diagnostic bottlenecks in healthcare facilities.' }
      ]
    },
    {
      icon: DollarSign,
      company: 'US E-Commerce Startup',
      industry: 'E-Commerce & AI',
      title: 'Consumer Cognitive Profile Generation',
      challenge: 'E-commerce platforms struggled to provide personalized experiences. Generic recommendations failed to predict individual buying behavior, resulting in poor engagement and lost sales opportunities.',
      solution: 'We developed an AI-powered system that generates consumer cognitive profiles by analyzing demographic data, online interactions, and dynamic external factors. Our customized Machine Learning algorithm creates user personas based on behavioral, environmental, and demographic data, factoring in external influences and emotions to predict shopping behavior and deliver personalized experiences.',
      results: [
        'Personalized user persona generation',
        'Behavioral and emotional analysis',
        'Improved buying behavior prediction',
        'Enhanced customer engagement',
        'More personalized online shopping experience'
      ],
      technologies: ['Machine Learning', 'Python', 'Behavioral Analytics', 'AWS', 'Data Science'],
      timeline: '7 months',
      team: '14 specialists'
    },
    {
      icon: TrendingUp,
      company: 'Supply Chain Logistics',
      industry: 'Logistics',
      title: 'AI-Driven Route Optimization',
      challenge: 'The logistics company faced challenges with inefficient routing, high fuel costs, delayed deliveries, and difficulty adapting to real-time changes.',
      solution: 'We developed an AI-powered route optimization system that uses machine learning, real-time data, and predictive analytics to determine the most efficient delivery routes.',
      results: [
        '34% reduction in fuel costs',
        '41% improvement in on-time deliveries',
        '$18M annual operational savings',
        '29% increase in daily deliveries',
        '82% driver satisfaction improvement'
      ],
      technologies: ['Google OR-Tools', 'Python', 'Google Cloud', 'Redis', 'GraphQL'],
      timeline: '5 months',
      team: '9 specialists'
    },
    {
      icon: BarChart,
      company: 'Marketing Technology Company',
      industry: 'MarTech',
      title: 'Predictive Customer Analytics',
      challenge: 'The company lacked insights into customer behavior and couldn\'t effectively predict churn or identify upsell opportunities.',
      solution: 'We built a comprehensive customer analytics platform that uses machine learning to segment customers, predict churn risk, identify upsell opportunities, and optimize marketing spend.',
      results: [
        '56% improvement in churn prediction',
        '47% increase in customer lifetime value',
        '$9M additional revenue from upsells',
        '38% improvement in marketing ROI',
        '71% reduction in customer acquisition cost'
      ],
      technologies: ['Pandas', 'Python', 'Snowflake', 'Tableau', 'Airflow'],
      timeline: '4 months',
      team: '7 specialists'
    }
  ];

  return (
    <div className="pt-20 sm:pt-28 md:pt-32 lg:pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/8 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/8 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/6 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            {/* Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span> */}
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            {/* Real-world AI solutions delivering measurable results */}
          </p>
        </div>

        <div className="mb-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl shadow-xl p-6 md:p-10 text-white relative overflow-hidden border border-white/10">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Target className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl sm:text-3xl font-bold">Our Portfolio</h2>
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            <p className="text-base sm:text-lg opacity-90 mb-6 max-w-2xl mx-auto text-center">
             Real-world AI solutions delivering measurable results Cutting-edge projects in AI and research platforms.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-3xl font-black mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">70+</div>
                  <div className="text-xs font-semibold opacity-90">AI Solutions</div>
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-3xl font-black mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">80%</div>
                  <div className="text-xs font-semibold opacity-90">Efficiency Gain</div>
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-3xl font-black mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">35%</div>
                  <div className="text-xs font-semibold opacity-90">Cost Reduction</div>
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-3xl font-black mb-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">100+</div>
                  <div className="text-xs font-semibold opacity-90">Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {caseStudies.map((study, index) => (
            <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200/60 hover:border-blue-300/80 relative">
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-5 sm:p-6 text-white relative overflow-hidden">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                
                <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg border border-white/30">
                    <study.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 leading-tight">{study.title}</h2>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">{study.company}</span>
                      <span className="text-xs opacity-80">•</span>
                      <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">{study.industry}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8 relative">
                {/* Metrics Cards - Only for first 3 projects */}
                {study.metrics && (
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-3 border border-blue-200/50 hover:border-blue-300/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                        <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">{metric.value}</div>
                        <div className="text-[10px] font-semibold text-gray-600 uppercase tracking-wide">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Features Grid - Only for first 3 projects */}
                {study.features && (
                  <div className="grid md:grid-cols-3 gap-4 mb-5">
                    {study.features.map((feature, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-xl p-4 border border-slate-200/50 hover:border-blue-300/60 hover:shadow-md transition-all duration-300">
                        <h4 className="text-sm font-bold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-xs text-gray-700 leading-relaxed">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Benefits Section with Image - Only for Vyuh */}
                {study.company === 'Vyuh' && study.benefits && (
                  <div className="mb-5">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-sm">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Why Corporates Use Vyuh</h3>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-5">
                      {/* Left: Benefits + Solution */}
                      <div className="space-y-3">
                        {study.benefits.map((benefit, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 rounded-xl p-3 border border-purple-200/50 hover:border-purple-300/80 hover:shadow-md transition-all duration-300">
                            <h4 className="text-sm font-bold text-gray-900 mb-1 flex items-start">
                              <span className="text-purple-600 mr-2">{idx + 1}️⃣</span>
                              {benefit.title}
                            </h4>
                            <p className="text-xs text-gray-700 leading-relaxed">{benefit.desc}</p>
                          </div>
                        ))}
                        {/* Solution */}
                        <div className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-xl p-3 border border-blue-200/40 hover:border-blue-300/60 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm">
                              <Zap className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="text-sm font-bold text-gray-900">Solution</h3>
                          </div>
                          <p className="text-xs text-gray-700 leading-relaxed">{study.solution}</p>
                        </div>
                      </div>
                      {/* Right: Image Slider */}
                      <div className="relative group/img">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover/img:blur-2xl transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl p-4 border border-white/10 shadow-2xl overflow-hidden h-full flex flex-col">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
                          <div className="relative flex-1 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 group-hover/img:border-white/40 transition-all duration-300">
                            <a 
                              href="https://www.vyuh9.in/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block w-full h-full cursor-pointer"
                            >
                              <img 
                                src={vyuhImages[vyuhImageIndex].src}
                                alt={vyuhImages[vyuhImageIndex].alt}
                                className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                            </a>
                            {/* Navigation Buttons */}
                            <button
                              onClick={(e) => { e.preventDefault(); prevVyuhImage(); }}
                              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                              aria-label="Previous image"
                            >
                              <ChevronLeft className="w-5 h-5 text-gray-800" />
                            </button>
                            <button
                              onClick={(e) => { e.preventDefault(); nextVyuhImage(); }}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                              aria-label="Next image"
                            >
                              <ChevronRight className="w-5 h-5 text-gray-800" />
                            </button>
                            {/* Image Indicators */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                              {vyuhImages.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={(e) => { e.preventDefault(); setVyuhImageIndex(idx); }}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    idx === vyuhImageIndex 
                                      ? 'bg-white w-6' 
                                      : 'bg-white/50 hover:bg-white/75'
                                  }`}
                                  aria-label={`Go to image ${idx + 1}`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="mt-3 flex items-center justify-center gap-2 text-white/80 text-xs relative">
                            <Gamepad2 className="w-4 h-4" />
                            <span className="font-semibold">Live Game Interface ({vyuhImageIndex + 1}/{vyuhImages.length})</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Benefits Section with Image - Only for FutureVision */}
                {study.company === 'FutureVision' && study.benefits && (
                  <div className="mb-5">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-sm">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Why Parents Love This App</h3>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-5">
                      {/* Left: Benefits + Solution */}
                      <div className="space-y-3">
                        {study.benefits.map((benefit, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 rounded-xl p-3 border border-purple-200/50 hover:border-purple-300/80 hover:shadow-md transition-all duration-300">
                            <h4 className="text-sm font-bold text-gray-900 mb-1 flex items-start">
                              <span className="text-purple-600 mr-2">{idx + 1}️⃣</span>
                              {benefit.title}
                            </h4>
                            <p className="text-xs text-gray-700 leading-relaxed">{benefit.desc}</p>
                          </div>
                        ))}
                        {/* Solution */}
                        <div className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-xl p-3 border border-blue-200/40 hover:border-blue-300/60 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm">
                              <Zap className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="text-sm font-bold text-gray-900">Solution</h3>
                          </div>
                          <p className="text-xs text-gray-700 leading-relaxed">{study.solution}</p>
                        </div>
                      </div>
                      {/* Right: Image Slider */}
                      <div className="relative group/img">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover/img:blur-2xl transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 rounded-2xl p-4 border border-white/10 shadow-2xl overflow-hidden h-full flex flex-col">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"></div>
                          <div className="relative flex-1 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 group-hover/img:border-white/40 transition-all duration-300">
                            <a 
                              href="https://future-bloom-portraits.lovable.app" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block w-full h-full cursor-pointer"
                            >
                              <img 
                                src={futureVisionImages[futureVisionImageIndex].src}
                                alt={futureVisionImages[futureVisionImageIndex].alt}
                                className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                            </a>
                            {/* Navigation Buttons */}
                            <button
                              onClick={(e) => { e.preventDefault(); prevFutureVisionImage(); }}
                              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                              aria-label="Previous image"
                            >
                              <ChevronLeft className="w-5 h-5 text-gray-800" />
                            </button>
                            <button
                              onClick={(e) => { e.preventDefault(); nextFutureVisionImage(); }}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                              aria-label="Next image"
                            >
                              <ChevronRight className="w-5 h-5 text-gray-800" />
                            </button>
                            {/* Image Indicators */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                              {futureVisionImages.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={(e) => { e.preventDefault(); setFutureVisionImageIndex(idx); }}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    idx === futureVisionImageIndex 
                                      ? 'bg-white w-6' 
                                      : 'bg-white/50 hover:bg-white/75'
                                  }`}
                                  aria-label={`Go to image ${idx + 1}`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="mt-3 flex items-center justify-center gap-2 text-white/80 text-xs relative">
                            <Camera className="w-4 h-4" />
                            <span className="font-semibold">AI Portrait Generator ({futureVisionImageIndex + 1}/{futureVisionImages.length})</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Benefits Section with Image - For Dental X-ray */}
                {study.company === 'Dentists Community' && study.benefits && (
                  <div className="mb-5">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-sm">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Key Benefits</h3>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-5">
                      {/* Left: Benefits + Solution */}
                      <div className="space-y-3">
                        {study.benefits.map((benefit, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 rounded-xl p-3 border border-purple-200/50 hover:border-purple-300/80 hover:shadow-md transition-all duration-300">
                            <h4 className="text-sm font-bold text-gray-900 mb-1 flex items-start">
                              <span className="text-purple-600 mr-2">{idx + 1}️⃣</span>
                              {benefit.title}
                            </h4>
                            <p className="text-xs text-gray-700 leading-relaxed">{benefit.desc}</p>
                          </div>
                        ))}
                        {/* Solution */}
                        <div className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-xl p-3 border border-blue-200/40 hover:border-blue-300/60 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm">
                              <Zap className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="text-sm font-bold text-gray-900">Solution</h3>
                          </div>
                          <p className="text-xs text-gray-700 leading-relaxed">{study.solution}</p>
                        </div>
                      </div>
                      {/* Right: Image Slider */}
                      <div className="relative group/img">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover/img:blur-2xl transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-red-900 via-pink-900 to-rose-900 rounded-2xl p-4 border border-white/10 shadow-2xl overflow-hidden h-full flex flex-col">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/30 to-pink-500/30 rounded-full blur-3xl"></div>
                          <div className="relative flex-1 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 group-hover/img:border-white/40 transition-all duration-300">
                            <img 
                              src={dentalImages[dentalImageIndex].src}
                              alt={dentalImages[dentalImageIndex].alt}
                              className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            {dentalImages.length > 1 && (
                              <>
                                <button
                                  onClick={(e) => { e.preventDefault(); prevDentalImage(); }}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                                  aria-label="Previous image"
                                >
                                  <ChevronLeft className="w-5 h-5 text-gray-800" />
                                </button>
                                <button
                                  onClick={(e) => { e.preventDefault(); nextDentalImage(); }}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                                  aria-label="Next image"
                                >
                                  <ChevronRight className="w-5 h-5 text-gray-800" />
                                </button>
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                                  {dentalImages.map((_, idx) => (
                                    <button
                                      key={idx}
                                      onClick={(e) => { e.preventDefault(); setDentalImageIndex(idx); }}
                                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        idx === dentalImageIndex 
                                          ? 'bg-white w-6' 
                                          : 'bg-white/50 hover:bg-white/75'
                                      }`}
                                      aria-label={`Go to image ${idx + 1}`}
                                    />
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                          <div className="mt-3 flex items-center justify-center gap-2 text-white/80 text-xs relative">
                            <Heart className="w-4 h-4" />
                            <span className="font-semibold">AI X-ray Analysis {dentalImages.length > 1 ? `(${dentalImageIndex + 1}/${dentalImages.length})` : ''}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Benefits Section with Image - For ResearchHub */}
                {study.company === 'ResearchHub' && study.benefits && (
                  <div className="mb-5">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-sm">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Platform Highlights</h3>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-5">
                      {/* Left: Benefits + Solution */}
                      <div className="space-y-3">
                        {study.benefits.map((benefit, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 rounded-xl p-3 border border-purple-200/50 hover:border-purple-300/80 hover:shadow-md transition-all duration-300">
                            <h4 className="text-sm font-bold text-gray-900 mb-1 flex items-start">
                              <span className="text-purple-600 mr-2">{idx + 1}️⃣</span>
                              {benefit.title}
                            </h4>
                            <p className="text-xs text-gray-700 leading-relaxed">{benefit.desc}</p>
                          </div>
                        ))}
                        {/* Solution */}
                        <div className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-xl p-3 border border-blue-200/40 hover:border-blue-300/60 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm">
                              <Zap className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="text-sm font-bold text-gray-900">Solution</h3>
                          </div>
                          <p className="text-xs text-gray-700 leading-relaxed">{study.solution}</p>
                        </div>
                      </div>
                      {/* Right: Image Slider */}
                      <div className="relative group/img">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover/img:blur-2xl transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 rounded-2xl p-4 border border-white/10 shadow-2xl overflow-hidden h-full flex flex-col">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
                          <div className="relative flex-1 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 group-hover/img:border-white/40 transition-all duration-300">
                            <a 
                              href="https://researchhub-frontend.onrender.com/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block w-full h-full cursor-pointer"
                            >
                              <img 
                                src={researchImages[researchImageIndex].src}
                                alt={researchImages[researchImageIndex].alt}
                                className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                            </a>
                            <button
                              onClick={(e) => { e.preventDefault(); prevResearchImage(); }}
                              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                              aria-label="Previous image"
                            >
                              <ChevronLeft className="w-5 h-5 text-gray-800" />
                            </button>
                            <button
                              onClick={(e) => { e.preventDefault(); nextResearchImage(); }}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                              aria-label="Next image"
                            >
                              <ChevronRight className="w-5 h-5 text-gray-800" />
                            </button>
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                              {researchImages.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={(e) => { e.preventDefault(); setResearchImageIndex(idx); }}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    idx === researchImageIndex 
                                      ? 'bg-white w-6' 
                                      : 'bg-white/50 hover:bg-white/75'
                                  }`}
                                  aria-label={`Go to image ${idx + 1}`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="mt-3 flex items-center justify-center gap-2 text-white/80 text-xs relative">
                            <Database className="w-4 h-4" />
                            <span className="font-semibold">Research Platform ({researchImageIndex + 1}/{researchImages.length})</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Benefits Section with Image - For Olivia */}
                {study.company === 'Deepiotics' && study.benefits && (
                  <div className="mb-5">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-sm">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Key Features</h3>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-5">
                      {/* Left: Benefits + Solution */}
                      <div className="space-y-3">
                        {study.benefits.map((benefit, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 rounded-xl p-3 border border-purple-200/50 hover:border-purple-300/80 hover:shadow-md transition-all duration-300">
                            <h4 className="text-sm font-bold text-gray-900 mb-1 flex items-start">
                              <span className="text-purple-600 mr-2">{idx + 1}️⃣</span>
                              {benefit.title}
                            </h4>
                            <p className="text-xs text-gray-700 leading-relaxed">{benefit.desc}</p>
                          </div>
                        ))}
                        {/* Solution */}
                        <div className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-xl p-3 border border-blue-200/40 hover:border-blue-300/60 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm">
                              <Zap className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="text-sm font-bold text-gray-900">Solution</h3>
                          </div>
                          <p className="text-xs text-gray-700 leading-relaxed">{study.solution}</p>
                        </div>
                      </div>
                      {/* Right: Image Slider */}
                      <div className="relative group/img">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl group-hover/img:blur-2xl transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl p-4 border border-white/10 shadow-2xl overflow-hidden h-full flex flex-col">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-full blur-3xl"></div>
                          <div className="relative flex-1 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 group-hover/img:border-white/40 transition-all duration-300">
                            <a 
                              href="https://deepiotics.com" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block w-full h-full cursor-pointer"
                            >
                              <img 
                                src={oliviaImages[oliviaImageIndex].src}
                                alt={oliviaImages[oliviaImageIndex].alt}
                                className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                            </a>
                            {oliviaImages.length > 1 && (
                              <>
                                <button
                                  onClick={(e) => { e.preventDefault(); prevOliviaImage(); }}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                                  aria-label="Previous image"
                                >
                                  <ChevronLeft className="w-5 h-5 text-gray-800" />
                                </button>
                                <button
                                  onClick={(e) => { e.preventDefault(); nextOliviaImage(); }}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                                  aria-label="Next image"
                                >
                                  <ChevronRight className="w-5 h-5 text-gray-800" />
                                </button>
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                                  {oliviaImages.map((_, idx) => (
                                    <button
                                      key={idx}
                                      onClick={(e) => { e.preventDefault(); setOliviaImageIndex(idx); }}
                                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        idx === oliviaImageIndex 
                                          ? 'bg-white w-6' 
                                          : 'bg-white/50 hover:bg-white/75'
                                      }`}
                                      aria-label={`Go to image ${idx + 1}`}
                                    />
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                          <div className="mt-3 flex items-center justify-center gap-2 text-white/80 text-xs relative">
                            <Sparkles className="w-4 h-4" />
                            <span className="font-semibold">AI Consultant {oliviaImages.length > 1 ? `(${oliviaImageIndex + 1}/${oliviaImages.length})` : ''}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Benefits Section with Image - For CovidXTrail */}
                {study.company === 'Healthcare Providers' && study.benefits && (
                  <div className="mb-5">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-sm">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Key Benefits</h3>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-5">
                      {/* Left: Benefits + Solution */}
                      <div className="space-y-3">
                        {study.benefits.map((benefit, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 rounded-xl p-3 border border-purple-200/50 hover:border-purple-300/80 hover:shadow-md transition-all duration-300">
                            <h4 className="text-sm font-bold text-gray-900 mb-1 flex items-start">
                              <span className="text-purple-600 mr-2">{idx + 1}️⃣</span>
                              {benefit.title}
                            </h4>
                            <p className="text-xs text-gray-700 leading-relaxed">{benefit.desc}</p>
                          </div>
                        ))}
                        {/* Solution */}
                        <div className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-xl p-3 border border-blue-200/40 hover:border-blue-300/60 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm">
                              <Zap className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="text-sm font-bold text-gray-900">Solution</h3>
                          </div>
                          <p className="text-xs text-gray-700 leading-relaxed">{study.solution}</p>
                        </div>
                      </div>
                      {/* Right: Image Slider */}
                      <div className="relative group/img">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover/img:blur-2xl transition-all duration-300"></div>
                        <div className="relative bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 rounded-2xl p-4 border border-white/10 shadow-2xl overflow-hidden h-full flex flex-col">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"></div>
                          <div className="relative flex-1 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 group-hover/img:border-white/40 transition-all duration-300">
                            <img 
                              src={covidImages[covidImageIndex].src}
                              alt={covidImages[covidImageIndex].alt}
                              className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            {covidImages.length > 1 && (
                              <>
                                <button
                                  onClick={(e) => { e.preventDefault(); prevCovidImage(); }}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                                  aria-label="Previous image"
                                >
                                  <ChevronLeft className="w-5 h-5 text-gray-800" />
                                </button>
                                <button
                                  onClick={(e) => { e.preventDefault(); nextCovidImage(); }}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                                  aria-label="Next image"
                                >
                                  <ChevronRight className="w-5 h-5 text-gray-800" />
                                </button>
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                                  {covidImages.map((_, idx) => (
                                    <button
                                      key={idx}
                                      onClick={(e) => { e.preventDefault(); setCovidImageIndex(idx); }}
                                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        idx === covidImageIndex 
                                          ? 'bg-white w-6' 
                                          : 'bg-white/50 hover:bg-white/75'
                                      }`}
                                      aria-label={`Go to image ${idx + 1}`}
                                    />
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                          <div className="mt-3 flex items-center justify-center gap-2 text-white/80 text-xs relative">
                            <Building2 className="w-4 h-4" />
                            <span className="font-semibold">CovidXTrail Analysis {covidImages.length > 1 ? `(${covidImageIndex + 1}/${covidImages.length})` : ''}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Benefits Section - For other projects */}
                {study.company !== 'Vyuh' && study.company !== 'FutureVision' && study.company !== 'Dentists Community' && study.company !== 'Healthcare Providers' && study.company !== 'ResearchHub' && study.company !== 'Deepiotics' && study.benefits && (
                  <div className="mb-5">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-sm">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Key Benefits
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {study.benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 rounded-xl p-3 border border-purple-200/50 hover:border-purple-300/80 hover:shadow-md transition-all duration-300">
                          <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-start">
                            <span className="text-purple-600 mr-2">{idx + 1}️⃣</span>
                            {benefit.title}
                          </h4>
                          <p className="text-xs text-gray-700 leading-relaxed">{benefit.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4 mb-5">
                  <div className="group/item bg-gradient-to-br from-red-50/50 to-orange-50/50 rounded-xl p-4 border border-red-200/40 hover:border-red-300/60 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-sm">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900">Challenge</h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{study.challenge}</p>
                  </div>
                  {!study.benefits && (
                    <div className="group/item bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-xl p-4 border border-blue-200/40 hover:border-blue-300/60 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm">
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-base font-bold text-gray-900">Solution</h3>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{study.solution}</p>
                    </div>
                  )}
                </div>

                <div className="mb-5">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-sm">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Results</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="group/result bg-gradient-to-br from-green-50/80 to-emerald-50/80 p-3 rounded-xl border border-green-200/50 hover:border-green-300/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover/result:scale-110 transition-transform">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-xs text-gray-800 font-semibold leading-relaxed">{result}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl p-4 border border-gray-200/60">
                  <div className={`grid sm:grid-cols-2 ${study.link ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-3`}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 hover:shadow-md transition-all duration-300">
                      <h4 className="text-[10px] font-bold text-gray-600 mb-2 uppercase tracking-wider">Technologies</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-[10px] font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 hover:shadow-md transition-all duration-300">
                      <h4 className="text-[10px] font-bold text-gray-600 mb-2 uppercase tracking-wider">Timeline</h4>
                      <div className="flex items-center space-x-1.5">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                        <p className="text-gray-900 font-bold text-sm">{study.timeline}</p>
                      </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 hover:shadow-md transition-all duration-300">
                      <h4 className="text-[10px] font-bold text-gray-600 mb-2 uppercase tracking-wider">Team</h4>
                      <div className="flex items-center space-x-1.5">
                        <Users className="w-4 h-4 text-purple-600" />
                        <p className="text-gray-900 font-bold text-sm">{study.team}</p>
                      </div>
                    </div>
                    {study.link && (
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 hover:shadow-md transition-all duration-300">
                        <h4 className="text-[10px] font-bold text-gray-600 mb-2 uppercase tracking-wider">Live Project</h4>
                        <a
                          href={study.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-lg font-bold text-xs hover:shadow-md hover:scale-105 transition-all duration-300"
                        >
                          <Globe className="w-3 h-3" />
                          <span>Visit</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center relative overflow-hidden border border-white/10">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Ready to Create Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Success Story?</span>
            </h2>
            
            <p className="text-base sm:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results
            </p>
            
            <a
              href="https://tidycal.com/team/deepiotics-team/call"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <span>Schedule Free Consultation</span>
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
            
            <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-xs opacity-90">
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No Commitment</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Expert Consultation</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Tailored Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
