import React, { useState } from 'react';
import { TrendingUp, Target, Zap, Users, MessageSquare, BarChart3, Globe, Smartphone, Linkedin, Phone, LineChart, FileText, CheckCircle, ArrowRight, Sparkles, Award, Mail, MapPin, Bot, Megaphone } from 'lucide-react';

const AIBusinessGrowthPage = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const stats = [
    { number: '3x', label: 'More qualified leads for clients who go AI-first' },
    { number: '41%', label: 'Lower cost per lead on average' },
    { number: '60%', label: 'Faster response times with AI agents' },
    { number: '100+', label: 'Businesses transformed with the Growth Suite' }
  ];

  const problems = [
    "You're managing 10+ marketing tools that don't talk to each other.",
    "Your website looks fine - but it isn't doing anything.",
    "Social media feels like a full-time job nobody hired you for.",
    "Your ad budget disappears and you can't tell if it worked.",
    "Leads come in and go cold before anyone follows up.",
    "You're making decisions without clear data.",
    "Competitors who started after you are somehow ahead of you."
  ];

  const steps = [
    {
      number: '01',
      title: 'Strategy & Roadmap',
      description: "We start with a one-on-one AI Brand Strategy Session. Your goals, your gaps, your market. We identify exactly where AI can move the needle fastest - and build your custom growth stack around that.",
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Build & Automate',
      description: "We implement your chosen tools. AI-powered website. Chatbots. Ads. Agents. Analytics. Everything is set up, connected, and tested - with no technical work on your part.",
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'Launch, Learn & Scale',
      description: "Once live, we monitor performance and fine-tune continuously. What's working gets scaled. What isn't gets fixed. Your system gets smarter the longer it runs.",
      icon: TrendingUp,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const modules = [
    {
      icon: Target,
      title: 'AI Brand Strategy Consulting',
      description: "Before you spend a pound on tools or ads, you need a plan that actually fits your business. This is it.",
      features: [
        'One focused session to map your growth gaps',
        'Custom AI tool selection for your business type',
        'Your complete growth roadmap to execute immediately'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'AI-Powered Website Revamp',
      description: "Your website is either your best salesperson or your biggest liability. We turn it into the former.",
      features: [
        'Mobile-first, fast-loading, conversion-optimised design',
        'SEO-structured copy that ranks and reads',
        'Built to capture leads, not just look good'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbot for Lead Capture',
      description: "Your website gets visitors at 2am. Without a chatbot, those visitors leave. With one, they become leads.",
      features: [
        'Answers FAQs, qualifies leads, books calls - automatically',
        'Runs 24/7 without supervision',
        'Integrated with your CRM and calendar'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Smartphone,
      title: 'Social Media Management',
      description: "Stop staring at a blank screen wondering what to post. Your AI content system handles it.",
      features: [
        'Weekly content - posts, videos, reels - generated and scheduled',
        'Consistent brand voice across every platform',
        'Engagement monitored and responded to for you'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Meta Ads (Facebook + Instagram)',
      description: "Stop guessing with your ad budget. AI finds the audience that converts and optimises every pound.",
      features: [
        'AI-crafted creatives and copy tested for performance',
        'Audience targeting refined by real-time data',
        'Continuous optimisation - campaigns that improve over time'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Target,
      title: 'Google Ads Setup',
      description: "Capture people who are already looking for exactly what you offer - at the moment they're ready to buy.",
      features: [
        'High-intent keyword targeting built by AI',
        'Ad copy written and tested for your specific market',
        'Budget managed for maximum return, minimum waste'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn AI Lead Generation',
      description: "LinkedIn is where B2B decisions get made. We turn your profile into the first thing decision-makers see.",
      features: [
        'Profile optimised to attract the right clients',
        'AI content strategy that builds authority in your niche',
        'Smart outreach that opens conversations without being pushy'
      ],
      color: 'from-blue-600 to-cyan-600',
      link: '/linkedin-service'
    },
    {
      icon: Phone,
      title: 'AI Voice Agent',
      description: "Every call you miss is a lead your competitor answers. Your AI Voice Agent picks up every time.",
      features: [
        'Answers calls, qualifies leads, books appointments - 24/7',
        'Sounds natural - not robotic',
        'Fully integrated with your calendar and CRM'
      ],
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'AI Analytics & Tracking Setup',
      description: "You can't grow what you can't measure. We give you a dashboard that actually tells you what's working.",
      features: [
        'Microsoft Clarity, Hotjar, and Google Analytics 4 - configured properly',
        'Conversion tracking from ad click to closed deal',
        'Weekly reports in plain English - no jargon, just insight'
      ],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: FileText,
      title: 'Lead Magnet Creation',
      description: "The right free resource turns strangers into subscribers and subscribers into clients.",
      features: [
        'Strategy + design + copywriting for your lead magnet',
        'eBooks, checklists, templates - built to attract your ideal client',
        'Automated delivery and nurture sequence set up for you'
      ],
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Megaphone,
      title: 'AI Marketing Agent',
      description: "Imagine having a marketing manager who never sleeps, never takes a day off, and gets smarter every week. That's your AI Marketing Agent.",
      features: [
        'Autonomous content creation across social, email, and web',
        'Campaign management - launch, test, and optimise without manual input',
        'Real-time performance analysis with automatic strategy adjustment',
        'Integrated with your existing tools and platforms',
        'Weekly performance summaries - in plain English'
      ],
      color: 'from-cyan-500 to-blue-500',
      isNew: true
    },
    {
      icon: Bot,
      title: 'AI Sales Agent',
      description: "Your best salesperson follows up every lead within minutes, never forgets a prospect, and works 24/7 without commission. We build that for your business.",
      features: [
        'Instant lead qualification - responds to enquiries in under 60 seconds',
        'Automated multi-touch follow-up via email, SMS, and WhatsApp',
        'Objection handling trained on your specific product or service',
        'Meeting booking directly into your calendar - no back-and-forth',
        'Full pipeline reporting - know exactly where every lead stands'
      ],
      color: 'from-purple-500 to-fuchsia-500',
      isNew: true
    }
  ];

  const caseStudies = [
    {
      title: 'Tech Startup - From Invisible to In-Demand',
      result: 'LinkedIn optimisation + AI content automation → 3x profile visits. 2.5x more qualified leads. In under 60 days.',
      quote: "We went from posting twice a week and getting nothing to having decision-makers reach out to us.",
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'eCommerce Brand - Website That Finally Converts',
      result: 'AI website revamp + chatbot deployment → 38% drop in bounce rate. Enquiries doubled. Revenue up within the first month.',
      quote: "The chatbot alone paid for the whole project in the first two weeks.",
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Consulting Firm - Never Miss a Lead Again',
      result: 'AI Voice Agent + analytics setup → 60% faster response times. 30% higher conversion rate on inbound enquiries.',
      quote: "I used to lose leads to voicemail. Now every call gets answered and qualified before I've even seen it.",
      icon: Phone,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Local Service Business - Ads That Work',
      result: 'Meta Ads + GA4 setup → 41% lower cost per lead. 2x return on ad spend. Achieved in 60 days.',
      quote: "For the first time, I actually know which ad is bringing in customers.",
      icon: Target,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const trustReasons = [
    {
      title: 'Strategy before software.',
      description: "Every engagement starts with understanding your business - not upselling you on tools you don't need. You get clarity first, then the tech that delivers on it."
    },
    {
      title: 'Modular. Start small. Expand fast.',
      description: "You don't have to do everything at once. Start with one module. See the results. Then layer in more. No lock-in, no bloated packages."
    },
    {
      title: 'Done for you - completely.',
      description: "We don't send you tutorials and wish you luck. We build it, connect it, test it, and hand you something that works. Your job is to review the results."
    },
    {
      title: 'Built for businesses like yours.',
      description: "We're not an enterprise software company that also has an SMB tier. Our entire Growth Suite was designed for businesses with fewer than 50 people who want enterprise-level marketing without enterprise-level cost."
    },
    {
      title: 'You always know what\'s working.',
      description: "No vanity metrics. No confusing dashboards. Every week you get a plain-English summary of what the AI is doing, what it's generating, and where we're heading next."
    }
  ];

  return (
    <div className="min-h-screen bg-[rgba(2,13,42,1)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/8 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/8 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              You Didn't Start Your Business to Spend<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                4 Hours a Day on Marketing.
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto mb-6 leading-relaxed">
              But here you are - juggling ads, social media, lead follow-ups, and content - while your actual business waits.
            </p>
            <p className="text-lg sm:text-xl text-white/70 max-w-4xl mx-auto mb-10 leading-relaxed">
              There's a better way. Deepiotics' AI Business Growth Suite replaces the overwhelm with a done-for-you system that markets, captures, and converts - while you focus on what you do best.
            </p>
            <a
              href="https://tidycal.com/team/deepiotics-team/call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Book Your Free AI Growth Call</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-white/60 mt-4 text-sm">No commitment. 45 minutes. Walk away with a clear growth plan.</p>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              If Any of This Sounds Familiar,<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                You're in the Right Place.
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              You're working harder than you ever have - but growth still feels stuck.
            </p>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              You've got a website that doesn't convert. Social media that eats your evenings. Ads that cost more than they return. Leads that go cold because nobody followed up in time.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              You've tried the tools. You've bought the courses. And somewhere between the dashboards and the automations and the content calendars, you lost track of why you started this business in the first place.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all"
              >
                <p className="text-white/80 text-lg">{problem}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-white/80 mb-6">
              None of that is your fault. You built a great business. You just need the right system behind it.
            </p>
            <p className="text-2xl font-bold text-white mb-8">
              That's exactly what the AI Business Growth Suite is.
            </p>
            <a
              href="#how-it-works"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold text-lg"
            >
              <span>See How It Works</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Three Steps to a Business That<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Grows on Autopilot
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} text-white rounded-2xl mb-6 shadow-lg`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="text-5xl font-bold text-white/10 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://tidycal.com/team/deepiotics-team/call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Book Your Free AI Growth Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Service Modules Section */}
      <section id="modules" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Build Your{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Growth Stack
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Pick the modules that match your goals - or let us design your complete system. Every service is plug-and-play, done-for-you, and built around results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {modules.map((module, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveModule(index)}
                onMouseLeave={() => setActiveModule(null)}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                {module.isNew && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    NEW
                  </div>
                )}
                <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${module.color} text-white rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{module.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-4">{module.description}</p>
                  <ul className="space-y-2 mb-4">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-white/60 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {module.link ? (
                    <a
                      href={module.link}
                      className="flex items-center text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  ) : (
                    <div className="flex items-center text-blue-400 font-semibold">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-3xl p-8 sm:p-12 text-center border border-white/10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Don't Know Where to Start?
            </h3>
            <p className="text-lg text-white/80 mb-6 max-w-3xl mx-auto">
              Most businesses do better with a curated stack than by trying everything at once. Book a free growth call and we'll tell you exactly which three modules will move the needle fastest for your business - in the next 90 days.
            </p>
            <a
              href="https://tidycal.com/team/deepiotics-team/call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Book Your Free AI Growth Call</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              What Happens When<br />
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Businesses Go AI-First
              </span>
            </h2>
            <p className="text-xl text-white/80">These aren't projections. These are clients.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${study.color} text-white rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <study.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-lg text-white/80 leading-relaxed mb-6">{study.result}</p>
                  <blockquote className="border-l-4 border-blue-400 pl-4 italic text-white/70">
                    "{study.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://tidycal.com/team/deepiotics-team/call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/50 transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>Book Your Free AI Growth Strategy Call</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-white/60 mt-4">See your own results within 60 days - or we work until you do.</p>
          </div>
        </div>
      </section>

      {/* Why Deepiotics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Why Businesses Trust the<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Business Growth Suite
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We could list 20 features. Instead, here's what actually matters to our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustReasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-400/30 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-white/70 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-3xl p-12 border border-white/10 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Your Competitors Are Already Using AI.<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                The Question Is - Are You?
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Every month you wait is a month of leads lost, budget wasted, and ground given to businesses that automated what you're still doing manually.
            </p>
            <p className="text-lg text-white/70 mb-8">
              One free call. No sales pitch. Just a clear, honest conversation about what AI can realistically do for your business in the next 90 days.
            </p>
            <a
              href="https://tidycal.com/team/deepiotics-team/call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 mb-6"
            >
              Build Your AI Growth Stack - Free Call
            </a>
            <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
              <span>500+ businesses served</span>
              <span>·</span>
              <span>Results within 60 days</span>
              <span>·</span>
              <span>No tech knowledge required</span>
              <span>·</span>
              <span>Designed for UK businesses</span>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 space-y-2">
              <div className="flex items-center justify-center gap-2 text-white/70">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@deepiotics.com" className="hover:text-blue-400">contact@deepiotics.com</a>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/70">
                <MapPin className="w-4 h-4" />
                <span>204, Atulya IT Park, Indore, MP 452016, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessGrowthPage;
