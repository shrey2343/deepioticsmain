import React from 'react';
import { CheckCircle, Target, Zap, Award, Users, Sparkles, ArrowRight, Star, TrendingUp, Clock, Bot } from 'lucide-react';

const LinkedInServicePage = () => {
  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "10k+", label: "Leads Generated" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Automation Active" }
  ];

  const problems = [
    {
      icon: "🧱",
      title: "Your profile looks good  but not \"client-ready.\"",
      description: "It reads like a résumé, not a sales page. People scroll past instead of reaching out."
    },
    {
      icon: "📉",
      title: "You post sometimes, but nothing happens.",
      description: "No engagement, no reach, no leads — just silence."
    },
    {
      icon: "💬",
      title: "You don't know what to say (or how often).",
      description: "Every time you sit to post, you overthink your words or design."
    },
    {
      icon: "⌛",
      title: "You don't have time to chase leads manually.",
      description: "You're too busy building your business to spend hours sending connection requests or follow-ups."
    },
    {
      icon: "🤖",
      title: "You've tried automation before but it felt spammy.",
      description: "Generic messages killed your credibility instead of building it."
    },
    {
      icon: "💡",
      title: "And the worst part?",
      description: "You know LinkedIn works but you have no clear system to make it work for you."
    }
  ];

  const services = [
    {
      title: "ProfileIgnite",
      subtitle: "Light Up Your LinkedIn Presence",
      description: "Your profile is your first impression and your most powerful sales tool. With ProfileIgnite, we completely optimize your LinkedIn presence so it attracts attention, builds credibility, and gets you ready to generate leads instantly.",
      features: [
        "Complete Profile Optimization (Headline, About, Experience, CTA Buttons)",
        "Custom LinkedIn Banner Design",
        "Feature Section Setup (Lead Magnet, Calendar, or Case Study)",
        "Eye-Catching CTA Buttons & Visual Hooks",
        "Before–After Profile Audit Report"
      ],
      outcome: "A professional, conversion-focused profile that builds authority and brings inbound opportunities — even before you start posting.",
      pricing: "One-Time Setup",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50/50 to-purple-50/50",
      borderColor: "border-blue-200/40 hover:border-blue-300/60"
    },
    {
      title: "ContentFlow",
      subtitle: "Consistency That Converts",
      description: "Once your profile is ignited, the next step is consistent visibility. With ContentFlow, we handle your entire monthly LinkedIn posting from strategy to design so your brand stays active, relevant, and trusted.",
      features: [
        "8–12 AI-Crafted Posts (Text, Image, Carousel, or Video)",
        "1 Long-Form Article or Newsletter",
        "Branded Post Design + Hashtag Optimization",
        "Weekly Scheduling & Posting",
        "Performance Tracking + Weekly Insights"
      ],
      outcome: "A consistent, engaging LinkedIn presence that nurtures trust and attracts inbound opportunities without you lifting a finger.",
      pricing: "Monthly Subscription",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50/50 to-emerald-50/50",
      borderColor: "border-green-200/40 hover:border-green-300/60"
    },
    {
      title: "LeadBot",
      subtitle: "Automate Your LinkedIn Outreach",
      description: "Ready to turn conversations into clients? With LeadBot, we integrate AI with your LinkedIn to launch your first automated campaign from smart messaging to real leads in your inbox.",
      features: [
        "AI Campaign Tool Integration",
        "4-Step Personalized Messaging Sequence",
        "50 Prospect Research & Data Setup",
        "Complete Campaign Setup & Launch",
        "Campaign Report + 1 Week Support"
      ],
      outcome: "An AI-driven LinkedIn system that runs personalized outreach and generates qualified leads — automatically.",
      pricing: "One-Time Setup",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50/50 to-red-50/50",
      borderColor: "border-orange-200/40 hover:border-orange-300/60"
    }
  ];

  const testimonials = [
    {
      quote: "Within 2 weeks of using ProfileIgnite, I started getting inbound messages from potential clients. The ROI has been incredible!",
      name: "Sarah Johnson",
      title: "Founder, TechScale Solutions",
      initials: "SJ"
    },
    {
      quote: "ContentFlow saved me 15+ hours every week. My engagement grew 300% and I've closed 4 new clients this month alone.",
      name: "Michael Chen",
      title: "Business Coach",
      initials: "MC"
    },
    {
      quote: "LeadBot changed everything. We went from 0 to 50+ qualified leads per month on autopilot. Game changer!",
      name: "Emma Rodriguez",
      title: "CEO, Digital Marketing Agency",
      initials: "ER"
    }
  ];

  const comparisonData = [
    {
      aspect: "Time Investment",
      diy: "Takes 10–15 hours weekly writing, posting, and managing connections",
      system: "You review and approve content in minutes — we handle everything else"
    },
    {
      aspect: "Profile Setup",
      diy: "Looks decent, but not optimized for conversions",
      system: "Fully rebuilt to attract and convert ideal clients (ProfileIgnite)"
    },
    {
      aspect: "Content Strategy",
      diy: "Random posting whenever inspiration strikes",
      system: "Strategic, authority-building content designed to convert (ContentFlow)"
    },
    {
      aspect: "Lead Generation",
      diy: "Manual cold outreach with inconsistent results",
      system: "AI-powered campaigns that connect, engage, and book calls (LeadBot)"
    },
    {
      aspect: "Growth Speed",
      diy: "Slow, unpredictable, and exhausting",
      system: "Consistent, measurable, and scalable growth every month"
    },
    {
      aspect: "Focus",
      diy: "You juggle marketing instead of growing your business",
      system: "You stay focused on your clients — while we grow your brand"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Hero Section */}
      <div className="pt-24 pb-8 sm:pb-12 md:pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <a 
              href="https://grow.deepiotics.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 bg-blue-100/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200/50 mb-8 hover:bg-blue-200/90 hover:border-blue-300/70 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* LinkedIn Logo SVG */}
              <div className="relative">
                <svg 
                  className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300 group-hover:rotate-12 transform" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                {/* Animated pulse ring */}
                <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping group-hover:bg-blue-500/40"></div>
              </div>
              
              <span className="text-blue-800 font-semibold text-base sm:text-lg md:text-xl group-hover:text-blue-900 transition-colors duration-300">
                AI-Powered LinkedIn Lead Generation for Business Growth
              </span>
              
              {/* Animated arrow */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-blue-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Stop Scrolling, Stop Pitching{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Turn Your LinkedIn Into a 24/7 Lead Generation Machine
              </span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-12">
              
              
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-10">
                Most entrepreneurs struggle with visibility and leads on LinkedIn because their profile isn't optimized, their content isn't consistent, and their outreach isn't strategic.
              </p>
              
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-12">
                We fix all that using AI powered optimization, content, and campaigns that attract your ideal clients automatically.
              </p>
            </div>
            
            <a
              href="https://tidycal.com/team/deepiotics-team/call"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border-2 border-white/20 mb-16"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-semibold text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Problems Section */}
      <div className="py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden border-t border-yellow-400">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Why Most Entrepreneurs Fail to<br />
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Get Clients from LinkedIn
              </span>
            </h2>
            <p className="text-2xl sm:text-3xl mb-4 opacity-95">
              You're brilliant at what you do.
            </p>
            <p className="text-xl sm:text-2xl opacity-90">
              But on LinkedIn… it feels like you're invisible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {problems.map((problem, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                {problem.icon === "🤖" ? (
                  <div className="relative inline-block mb-4">
                    <div className="text-4xl animate-bounce">{problem.icon}</div>
                    <div className="absolute inset-0 rounded-full bg-orange-400/30 animate-ping"></div>
                  </div>
                ) : (
                  <div className="text-4xl mb-4">{problem.icon}</div>
                )}
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-xl sm:text-2xl mb-6 text-blue-300 font-semibold">
              That's exactly why we created AI for Lead Generation a 3 step system that transforms your LinkedIn from "just another profile" into a lead generation machine.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-yellow-400">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The 3 Step System to<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Transform your LinkedIn into a lead generation machine
              </span>
            </h2>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`group bg-gradient-to-br ${service.bgGradient} rounded-3xl shadow-2xl border-2 ${service.borderColor} hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}>
                <div className="p-10 md:p-16">
                  <div className="flex items-start space-x-6 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className={`text-xl font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">What's Included:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
                      <div className="flex items-center space-x-3 mb-4">
                        <Sparkles className="w-6 h-6 text-yellow-500" />
                        <h4 className="text-lg font-bold text-gray-900">Outcome:</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {service.outcome}
                      </p>
                      <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${service.gradient} text-white px-4 py-2 rounded-full font-bold`}>
                        <span>💰</span>
                        <span>{service.pricing}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50 border-t border-yellow-400">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-700">
              Real results from real entrepreneurs who transformed their LinkedIn presence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-yellow-400">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Not <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">DIY?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              You could spend hours trying to optimize your LinkedIn, write posts, and manually message leads…
            </p>
            <p className="text-lg text-gray-600">
              But the truth? Without a system you'll burn out before you see results.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="p-6 bg-gray-50/50 border-r border-gray-200/50">
                <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Aspect</h3>
              </div>
              <div className="p-6 bg-red-50/50 border-r border-gray-200/50">
                <h3 className="text-xl font-bold text-red-700 mb-4">DIY Approach</h3>
              </div>
              <div className="p-6 bg-green-50/50">
                <h3 className="text-xl font-bold text-green-700 mb-4">Our AI4Sales System</h3>
              </div>
            </div>
            
            {comparisonData.map((item, index) => (
              <div key={index} className="grid md:grid-cols-3 gap-0 border-t border-gray-200/50">
                <div className="p-6 bg-gray-50/30">
                  <h4 className="font-bold text-gray-900">{item.aspect}</h4>
                </div>
                <div className="p-6 bg-red-50/30 border-r border-gray-200/50">
                  <p className="text-gray-700">{item.diy}</p>
                </div>
                <div className="p-6 bg-green-50/30">
                  <p className="text-gray-700">{item.system}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 font-semibold">
              Why struggle to do it all yourself when you can have an AI-powered LinkedIn Growth System working for you 24/7?
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden border-t border-yellow-400">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stop Guessing. Start Growing.
          </h2>
          
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Transform Your<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              LinkedIn Presence?
            </span>
          </h3>
          
          <p className="text-xl sm:text-2xl mb-12 opacity-95 leading-relaxed">
            Join 500+ entrepreneurs who have turned their LinkedIn into a lead generation machine. Start your journey today.
          </p>
          
          <a
            href="https://tidycal.com/team/deepiotics-team/call"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-3 bg-white text-blue-600 px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border-2 border-white/20 mb-12"
          >
            <span>Get Started Now</span>
            <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkedInServicePage;