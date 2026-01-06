import React, { useState } from 'react';
import { TrendingUp, Target, Zap, Users, MessageSquare, BarChart3, Globe, Smartphone, Linkedin, Phone, LineChart, FileText, CheckCircle, ArrowRight, AlertCircle, Sparkles, Rocket, Award, X } from 'lucide-react';

const AIBusinessGrowthPage = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [selectedModule, setSelectedModule] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (module: any) => {
    setSelectedModule(module);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedModule(null), 300);
  };

  const struggles = [
    { icon: AlertCircle, text: "You're juggling 10+ marketing tools   and none talk to each other." },
    { icon: AlertCircle, text: "Your website isn't converting." },
    { icon: AlertCircle, text: "Social media feels like a full-time job." },
    { icon: AlertCircle, text: "Ads are eating your budget." },
    { icon: AlertCircle, text: "You're losing leads while you sleep." },
    { icon: AlertCircle, text: "You don't have clear data." }
  ];

  const steps = [
    {
      number: '1',
      title: 'Strategy & Roadmap',
      description: 'We start with your goals. In a one-time AI Brand Strategy Session, we identify your biggest growth opportunities, choose the right AI tools, and design your custom "growth stack."',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '2',
      title: 'Build & Automate',
      description: 'From an AI-powered website revamp to chatbots, analytics, and ad automation, we implement the exact tools your business needs to scale without adding extra workload.',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '3',
      title: 'Launch, Learn & Scale',
      description: 'Once your system is live, we monitor performance, fine-tune campaigns, and scale what\'s working   powered by smart data and automation.',
      icon: Rocket,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const modules = [
    {
      icon: Target,
      title: 'AI Brand Strategy Consulting',
      description: 'Map your business goals, identify the right AI tools, and design your custom growth stack in one focused session.',
      color: 'from-blue-500 to-cyan-500',
      details: {
        overview: 'Our AI Brand Strategy Consulting helps you create a comprehensive roadmap for AI-powered business growth.',
        features: [
          'Complete business analysis and goal mapping',
          'AI tool selection and integration planning',
          'Custom growth stack design',
          'ROI projections and timeline planning',
          'Competitive analysis and positioning'
        ],
        benefits: [
          'Clear direction for AI implementation',
          'Reduced risk of technology misalignment',
          'Faster time to market',
          'Optimized budget allocation'
        ],
        timeline: '1-2 weeks'
      }
    },
    {
      icon: Globe,
      title: 'AI-Powered Website Revamp',
      description: 'Turn your old site into a stunning, mobile-friendly, and SEO-optimized platform built to convert.',
      color: 'from-purple-500 to-pink-500',
      details: {
        overview: 'Transform your website into a high-converting, AI-enhanced platform that works 24/7 to grow your business.',
        features: [
          'AI-optimized design and user experience',
          'Mobile-first responsive development',
          'Advanced SEO implementation',
          'Conversion rate optimization',
          'Performance monitoring and analytics'
        ],
        benefits: [
          'Up to 300% increase in conversion rates',
          'Improved search engine rankings',
          'Better user engagement',
          'Reduced bounce rates'
        ],
        timeline: '3-4 weeks'
      }
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbot for Lead Capture',
      description: 'Engage visitors 24/7 with an intelligent chatbot that answers FAQs, collects leads, and books calls automatically.',
      color: 'from-green-500 to-teal-500',
      details: {
        overview: 'Deploy intelligent AI chatbots that never sleep, capturing leads and qualifying prospects around the clock.',
        features: [
          '24/7 automated customer engagement',
          'Intelligent lead qualification',
          'Automatic appointment scheduling',
          'Multi-language support',
          'CRM integration and data sync'
        ],
        benefits: [
          '85% reduction in response time',
          '200% increase in lead capture',
          'Improved customer satisfaction',
          'Lower operational costs'
        ],
        timeline: '2-3 weeks'
      }
    },
    {
      icon: Smartphone,
      title: 'Social Media Management',
      description: 'Stay consistent and relevant with weekly AI-generated content   posts, videos, and engagement handled for you.',
      color: 'from-orange-500 to-red-500',
      details: {
        overview: 'Let AI handle your social media presence with consistent, engaging content that builds your brand and drives growth.',
        features: [
          'AI-generated content creation',
          'Multi-platform posting automation',
          'Engagement monitoring and response',
          'Performance analytics and optimization',
          'Brand voice consistency'
        ],
        benefits: [
          'Consistent brand presence',
          '150% increase in engagement',
          'Time savings of 20+ hours per week',
          'Better audience targeting'
        ],
        timeline: 'Ongoing monthly service'
      }
    },
    {
      icon: Users,
      title: 'Meta Ads (Facebook + Instagram)',
      description: 'Launch AI-optimized ad campaigns that find your ideal audience and turn clicks into customers.',
      color: 'from-pink-500 to-rose-500',
      details: {
        overview: 'Leverage AI-powered advertising to reach your ideal customers on Facebook and Instagram with precision targeting.',
        features: [
          'AI-driven audience targeting',
          'Dynamic ad creative optimization',
          'Automated bid management',
          'Real-time performance monitoring',
          'A/B testing and optimization'
        ],
        benefits: [
          '60% lower cost per acquisition',
          '250% increase in ROAS',
          'Better audience insights',
          'Scalable campaign management'
        ],
        timeline: '1-2 weeks setup + ongoing'
      }
    },
    {
      icon: Target,
      title: 'Google Ads Setup',
      description: 'Capture high-intent traffic with AI-crafted copy and keyword targeting.',
      color: 'from-indigo-500 to-purple-500',
      details: {
        overview: 'Dominate Google search results with AI-optimized campaigns that capture high-intent customers at the perfect moment.',
        features: [
          'AI-powered keyword research',
          'Smart bidding strategies',
          'Dynamic ad copy generation',
          'Landing page optimization',
          'Conversion tracking setup'
        ],
        benefits: [
          '40% improvement in Quality Score',
          '180% increase in click-through rates',
          'Lower cost per click',
          'Higher conversion rates'
        ],
        timeline: '1-2 weeks'
      }
    },
    {
      icon: Linkedin,
      title: 'LinkedIn AI Lead Generation',
      description: 'Transform your LinkedIn into a lead magnet   optimized profile, AI content strategy, and smart outreach.',
      color: 'from-blue-600 to-cyan-600',
      details: {
        overview: 'Turn LinkedIn into your most powerful lead generation machine with AI-driven content and outreach strategies.',
        features: [
          'Profile optimization for maximum visibility',
          'AI-generated content strategy',
          'Automated connection requests',
          'Personalized outreach campaigns',
          'Lead tracking and management'
        ],
        benefits: [
          '300% increase in profile views',
          '250% more qualified leads',
          'Enhanced professional credibility',
          'Automated relationship building'
        ],
        timeline: '2-3 weeks'
      }
    },
    {
      icon: Phone,
      title: 'AI Voice Agent',
      description: 'Add a voice-based AI sales assistant that answers calls, qualifies leads, and schedules appointments.',
      color: 'from-violet-500 to-purple-500',
      details: {
        overview: 'Deploy AI voice agents that handle calls professionally, qualify leads, and book appointments while you focus on closing deals.',
        features: [
          'Natural language conversation',
          'Intelligent call routing',
          'Automatic lead qualification',
          'Calendar integration',
          'Call recording and analysis'
        ],
        benefits: [
          'Never miss a lead again',
          '70% reduction in response time',
          'Improved lead qualification',
          '24/7 availability'
        ],
        timeline: '3-4 weeks'
      }
    },
    {
      icon: BarChart3,
      title: 'AI Analytics & Tracking Setup',
      description: 'Get full visibility into what\'s driving your sales with Microsoft Clarity, Hotjar, and Google Analytics 4.',
      color: 'from-emerald-500 to-teal-500',
      details: {
        overview: 'Gain complete visibility into your business performance with comprehensive AI-powered analytics and tracking systems.',
        features: [
          'Advanced analytics implementation',
          'Custom dashboard creation',
          'Conversion tracking setup',
          'User behavior analysis',
          'Automated reporting'
        ],
        benefits: [
          'Data-driven decision making',
          'Improved ROI tracking',
          'Better customer insights',
          'Optimized marketing spend'
        ],
        timeline: '1-2 weeks'
      }
    },
    {
      icon: FileText,
      title: 'Lead Magnet Creation',
      description: 'Design irresistible downloads (eBooks, checklists, PDFs) that grow your email list and nurture leads automatically.',
      color: 'from-amber-500 to-orange-500',
      details: {
        overview: 'Create compelling lead magnets that attract your ideal customers and build a valuable email list for long-term growth.',
        features: [
          'AI-generated content creation',
          'Professional design and layout',
          'Landing page development',
          'Email automation setup',
          'Performance tracking'
        ],
        benefits: [
          '400% increase in email signups',
          'Higher quality leads',
          'Improved nurturing sequences',
          'Better conversion rates'
        ],
        timeline: '2-3 weeks'
      }
    }
  ];

  const caseStudies = [
    {
      title: 'Tech Startup   From Invisible to In-Demand',
      result: 'AI-powered LinkedIn optimization + content automation → 3× profile visits, 2.5× more qualified leads.',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'eCommerce Brand   Website Conversion Makeover',
      result: 'AI website revamp + chatbot → Bounce rate dropped by 38%, inquiries doubled.',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Consulting Firm   24/7 Lead Qualification',
      result: 'AI Voice Agent + Analytics → 60% faster responses, 30% higher conversion.',
      icon: Phone,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Local Service Business   Smart Ads Automation',
      result: 'AI Meta Ads + GA4 → 41% lower CPL, 2× ROI in 60 days.',
      icon: Target,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const trustReasons = [
    { icon: Target, text: 'Strategy-First, Tools-Second   You get clarity, not complexity.' },
    { icon: Sparkles, text: 'Modular System   Start small, expand fast.' },
    { icon: CheckCircle, text: 'Done-For-You Implementation   We handle the tech; you focus on growth.' },
    { icon: Users, text: 'SMB-Focused Expertise   AI solutions designed for small businesses.' },
    { icon: LineChart, text: 'Transparent Reporting   Know exactly what\'s working.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="pt-24 pb-8 sm:pb-12 md:pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Grow Your Business Smarter with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI That Works for You
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
              From strategy to execution, our AI Business Growth Suite helps small and medium businesses automate marketing, capture more leads, and scale faster without the tech overwhelm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://tidycal.com/team/deepiotics-team/call"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Book Your Free AI Growth Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              {/* <a
                href="#how-it-works"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl border-2 border-gray-200 transform hover:-translate-y-1 transition-all duration-300"
              >
                See How It Works
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* The Struggle Section */}
      <section className="py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-yellow-400">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              😣 The Struggle Why Growth Feels{' '}
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                So Hard Right Now
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              If You're a Small or Medium Business Owner, This Might Sound Familiar...
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              You're working harder than ever but growth isn't getting easier. Between marketing, content, and customer acquisition, it can feel impossible to keep up with everything… especially in today's AI-driven world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {struggles.map((struggle, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border-2 border-red-100 hover:border-red-300 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{struggle.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              What if you could fix all of that   without hiring extra staff, learning complex tools, or spending hours managing it all?
            </h3>
            <p className="text-lg sm:text-xl mb-6 opacity-90">
              That's exactly why we built the AI Business Growth Suite so small and medium businesses can automate, grow, and scale smarter.
            </p>
            <a
              href="#modules"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>See How It Works</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-yellow-400">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🧭 How It Works  {' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your AI Powered Growth Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make AI driven business growth simple. In just three steps, we map your goals, build your tools, and launch your automation engine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} text-white rounded-2xl mb-6 shadow-lg`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="text-5xl font-bold text-gray-200 mb-4">
                    Step {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://tidycal.com/team/deepiotics-team/call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Book Your Free AI Growth Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-yellow-400">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🧩 Choose Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Growth Modules
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Build Your AI-Powered Growth Stack
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Pick the modules that match your business goals   or let us design your perfect AI growth system. Every service is plug-and-play, results-driven, and built for small and medium businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {modules.map((module, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveModule(index)}
                onMouseLeave={() => setActiveModule(null)}
                className="group relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${module.color} text-white rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{module.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{module.description}</p>
                  <button
                    onClick={() => handleLearnMore(module)}
                    className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              💡 Don't know where to start?
            </h3>
            <p className="text-lg sm:text-xl mb-6 opacity-90">
              Book Your Free AI Growth Call and we'll design your perfect stack together.
            </p>
            <a
              href="https://tidycal.com/team/deepiotics-team/call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-yellow-400">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🚀 Real Results.{' '}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Real Growth.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See What Happens When Businesses Go AI-First. Our clients don't just use AI   they grow with it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${study.color} text-white rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <study.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">{study.result}</p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://tidycal.com/team/deepiotics-team/call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>📞 Ready to see your own AI success story? Book Your Free AI Growth Strategy Call</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-yellow-400">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              💎 Why Businesses Trust{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our AI Growth Suite
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just add AI to your business   we build AI systems around your goals. That's why our clients see faster growth, leaner operations, and higher ROI within weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {trustReasons.map((reason, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{reason.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Let's Build Your AI Growth Stack
            </h3>
            <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Transform your business with AI-powered automation, smarter marketing, and data-driven growth strategies designed specifically for UK businesses.
            </p>
            <a
              href="https://tidycal.com/team/deepiotics-team/call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Book a Free AI Strategy Call Now</span>
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Module Details Modal */}
      {isModalOpen && selectedModule && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${selectedModule.color} rounded-2xl flex items-center justify-center`}>
                    <selectedModule.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedModule.title}</h3>
                    <p className="text-gray-600">{selectedModule.description}</p>
                  </div>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Overview</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{selectedModule.details.overview}</p>

                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                  <ul className="space-y-3 mb-6">
                    {selectedModule.details.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Benefits</h4>
                  <ul className="space-y-3 mb-6">
                    {selectedModule.details.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Sparkles className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Timeline</h5>
                      <p className="text-gray-600">{selectedModule.details.timeline}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://tidycal.com/team/deepiotics-team/call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 bg-gradient-to-r ${selectedModule.color} text-white px-6 py-3 rounded-xl font-semibold text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
                >
                  Get Started with {selectedModule.title}
                </a>
                <button
                  onClick={handleCloseModal}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIBusinessGrowthPage;
