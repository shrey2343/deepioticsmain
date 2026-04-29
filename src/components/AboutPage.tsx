import { useState, useEffect } from 'react';
import { ChevronDown, Mail, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // Animate service cards
    gsap.to('.about-service-card', {
      opacity: 1,
      y: 0,
      stagger: 0.07,
      duration: 0.55,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-services-section',
        start: 'top 72%'
      }
    });

    // Animate team cards
    gsap.to('.about-team-card', {
      opacity: 1,
      y: 0,
      stagger: 0.07,
      duration: 0.55,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-team-section',
        start: 'top 72%'
      }
    });

    // Animate why choose cards
    gsap.to('.about-why-card', {
      opacity: 1,
      y: 0,
      stagger: 0.07,
      duration: 0.55,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-why-section',
        start: 'top 72%'
      }
    });

    // Animate FAQ cards
    gsap.to('.about-faq-card', {
      opacity: 1,
      y: 0,
      stagger: 0.07,
      duration: 0.55,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-faq-section',
        start: 'top 72%'
      }
    });
  }, []);

  const stats = [
    { number: '2018', label: 'Founded' },
    { number: '70+', label: 'AI Solutions Delivered' },
    { number: '500+', label: 'Clients Served' },
    { number: '24/7', label: 'Support Available' }
  ];

  const services = [
    {
      title: 'AI Business Growth Suite',
      description: 'Done-for-you AI for small and medium businesses. AI marketing agents, AI sales agents, chatbots, ad automation, and analytics - implemented, connected, and running without you managing any of it.',
      link: '/ai-business-growth'
    },
    {
      title: 'Web & App Development',
      description: 'High-performance web and mobile applications built for scale - from fast MVPs to complex enterprise platforms. Clean architecture, intelligent features, delivered on time.',
      link: '/services'
    },
    {
      title: 'AI Solutions',
      description: 'Enterprise AI built for production. AI QA and software testing, AI agents, machine learning, business intelligence, process automation, healthcare AI, and data engineering - tailored to your business, proven in the real world.',
      link: '/ai-solutions'
    },
    {
      title: 'Bioscience & Genomics AI',
      description: 'End-to-end NGS data analysis for genomics labs, hospitals, IVF centers, and diagnostic institutions. WGS, WES, RNA-Seq, oncology genomics, and reproductive genomics - white-label reports in 24-48 hours, zero infrastructure required.',
      link: '/services'
    },
    {
      title: 'BioAI Lab',
      description: "India's first AI-powered, no-code bioinformatics career program. An 8-week curriculum for Life Science graduates who want to master NGS pipelines, build a real GitHub portfolio, and land roles at Biocon, Syngene, and top research institutions - without writing a single line of code.",
      link: '/services'
    }
  ];

  const industries = [
    'Healthcare', 'Financial Services', 'Automotive', 'Retail & E-commerce',
    'Manufacturing', 'Technology', 'Education', 'Logistics',
    'Genomics & Life Sciences', 'Pharma & Biotech', 'Research Institutions'
  ];

  const whyChoose = [
    {
      title: 'Transparent Collaboration',
      description: 'No black boxes. No surprise scope changes. No updates that come three weeks too late. Every Deepiotics engagement comes with regular check-ins, clear milestones, and complete visibility into where things stand - at every stage.'
    },
    {
      title: 'Proven Expertise Since 2018',
      description: "Over 1,000 AI implementations across healthcare, fintech, bioscience, automotive, and more. Our team doesn't just know the theory - they've shipped production AI across dozens of industries and know where things go wrong before they do."
    },
    {
      title: 'Custom by Design, Not by Default',
      description: "We don't have a product to sell you. Every solution we build starts from scratch with your specific challenge. That means no bloated features you'll never use, and no shortcuts that cause problems six months later."
    },
    {
      title: 'Value Without Compromise',
      description: 'Professional AI at a price point that makes sense for your business. Our global delivery model lets us offer enterprise-grade quality without the enterprise price tag - so you get a solution that works and an ROI that justifies it.'
    }
  ];

  const team = [
    {
      name: 'Ayan Nigam',
      title: 'Founder & Chief Executive Officer',
      bio: 'Ayan founded Deepiotics in 2018 with a vision to make enterprise-grade AI accessible to businesses of every size. With 20+ years of experience across AI strategy, product development, and enterprise transformation, he leads the company\'s direction and its work with Fortune 500 clients worldwide.',
      linkedin: '#',
      image: '/ayan.jpeg',
      initials: 'AN',
      imagePosition: 'center'
    },
    {
      name: 'Dr. Madhu Jain',
      title: 'Head of Research & Data Science',
      bio: "Ph.D. in Data Science, Dr. Jain leads Deepiotics' research function - the engine behind every model, algorithm, and pipeline the company ships. Her work ensures that what we build isn't just technically sound, but genuinely advances the state of the art for each client's use case.",
      linkedin: '#',
      image: '/madhuji.png',
      initials: 'MJ',
      imagePosition: 'center'
    },
    {
      name: 'Rajshri Nigam',
      title: 'Director of Business Development',
      bio: "Rajshri builds and manages Deepiotics' client partnerships across UK, US, and European markets. Her approach is straightforward: understand the business problem first, then find the right solution - not the other way around. Her relationships with clients are built on outcomes, not engagements.",
      linkedin: '#',
      image: '/rajeshri.png',
      initials: 'RN',
      imagePosition: 'center'
    },
    {
      name: 'Narendra Pipliwal',
      title: 'Delivery Head',
      bio: 'Narendra owns the delivery lifecycle at Deepiotics - from project kickoff through production launch and beyond. With an obsessive focus on timeline integrity and quality assurance, he ensures every solution ships exactly as designed, on time, and performs under real-world conditions from day one.',
      linkedin: '#',
      image: '/Narendra.png',
      initials: 'NP',
      imagePosition: 'center'
    },
    {
      name: 'Amol Upadhyay',
      title: 'Head, Genomics & AI Bioinformatics',
      bio: "Amol leads Deepiotics' bioscience division - overseeing end-to-end NGS data analysis, AI-powered genomics pipelines, and bioinformatics solutions for labs, hospitals, and research institutions. His work bridges the gap between computational biology and clinical application, delivering results that are both scientifically rigorous and immediately actionable.",
      linkedin: '#',
      image: '/amol.jpeg',
      initials: 'AU',
      imagePosition: 'center top'
    },
    {
      name: 'Manish Manon',
      title: 'Chief Financial Officer',
      bio: "Manish oversees Deepiotics' financial strategy, planning, and operations - ensuring the company scales sustainably while delivering maximum value at every price point. His financial discipline is what allows Deepiotics to offer enterprise-quality AI without the enterprise price tag.",
      linkedin: '#',
      image: '/manish1.png',
      initials: 'MM',
      imagePosition: 'center',
      whiteBg: true
    }
  ];

  const faqs = [
    {
      question: "What services does Deepiotics offer?",
      answer: "Deepiotics covers five main areas: the AI Business Growth Suite (done-for-you AI marketing, sales agents, chatbots, and automation for SMBs), Web & App Development, AI Solutions (AI QA and software testing, ML, automation, analytics, healthcare AI, and data engineering), Bioscience & Genomics AI (end-to-end NGS data analysis for labs and hospitals), and BioAI Lab (our no-code bioinformatics career program for life science graduates). Every service is delivered end-to-end - from strategy through deployment."
    },
    {
      question: "How can AI benefit my business?",
      answer: "Depends on your business - which is why we don't give a generic answer. In our experience, AI creates the most immediate impact in three areas: reducing the time your team spends on repetitive, rule-based tasks; improving the speed and accuracy of decisions that currently rely on manual data review; and generating and qualifying leads around the clock without adding headcount. In a free strategy session, we can identify the highest-ROI AI opportunities specific to your business in under 45 minutes."
    },
    {
      question: "What is Deepiotics' approach to project engagement?",
      answer: "Every engagement starts with a discovery phase - we map your business, understand your goals, and identify the right approach before any development begins. From there, we work in structured sprints with clear milestones and regular client check-ins. We don't disappear for three months and resurface with something you didn't ask for. You have full visibility at every stage, and we adjust based on what we learn as we build."
    },
    {
      question: "How is pricing determined for AI projects?",
      answer: "Pricing depends on scope, complexity, and timeline - not on a standard rate card. After an initial consultation, we provide a detailed proposal with clear cost breakdown and timeline. We don't do vague estimates or hidden fees. If a project's scope changes, we flag it early and agree on the path forward before any additional cost is incurred. Our goal is to maximize your ROI, not bill hours."
    },
    {
      question: "Which industries does Deepiotics serve?",
      answer: "Our AI solutions are in production across healthcare, financial services, automotive, retail and e-commerce, manufacturing, technology, education, logistics, genomics and life sciences, pharma and biotech, and research institutions. If you're in an industry not on this list, the answer is probably still yes - the underlying AI challenges tend to be similar across sectors, and our team has the breadth to adapt."
    },
    {
      question: "What kind of support and maintenance do you provide?",
      answer: "Post-launch, we provide 24/7 monitoring and support for production systems. Our maintenance packages include model performance tracking, drift detection, bug fixes, and continuous optimization. AI systems don't stay static - the world changes, your data changes, and your models need to keep up. We make sure they do."
    },
    {
      question: "How do I get started with a project at Deepiotics?",
      answer: "Book a free strategy session. It takes 45 minutes. We'll review your challenge, ask the right questions, and give you an honest assessment of what AI can realistically do for your business and in what timeframe. No sales pitch. If we're a good fit, we'll propose a clear engagement plan. If we're not the right partner for your specific need, we'll tell you that too."
    },
    {
      question: "What makes Deepiotics different from other AI development companies?",
      answer: "Three things. First, we start with your problem - not our product. Most AI companies sell a tool and then find a use case for it. We reverse that. Second, we build for production. Our solutions are tested, monitored, and maintained in real environments - not demos. Third, we're one of the few AI companies operating across both enterprise technology and bioscience - giving us a cross-disciplinary perspective that most pure-play AI shops simply don't have."
    }
  ];

  return (
    <div className="min-h-screen bg-[rgba(2,13,42,1)]">
      {/* Hero Section - Navy */}
      <div className="relative overflow-hidden pt-24 pb-20" style={{ background: 'rgba(2,13,42,1)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/8 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/8 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <br />
              <span style={{
                background: 'linear-gradient(to right, #60a5fa, #c084fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                We Build AI That Works <br/>In the Real World.
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Not in labs. Not in demos. In your business - shipped, running, and generating measurable results.
            </p>
            <p className="text-lg text-white/60">
              Founded 2018 · Headquartered in Indore, India · Serving clients globally
            </p>
          </div>
        </div>
      </div>

      {/* Stats Bar - White */}
      <div className="py-16" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{
                  background: 'linear-gradient(to right, #2563eb, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {stat.number}
                </div>
                <div className="text-sm md:text-base" style={{ color: '#64748b' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Are - Navy */}
      <div className="py-20" style={{ background: 'rgba(2,13,42,1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Who We Are</h2>
            <div className="space-y-4 text-white/80 text-lg leading-relaxed">
              <p>
                Deepiotics was founded in 2018 with one belief: that AI shouldn't be a privilege reserved for companies with seven-figure technology budgets. Every business - from a 10-person startup to a global enterprise - deserves intelligent technology that actually moves the needle.
              </p>
              <p>
                We're headquartered in Indore, India, and we work with clients across the UK, US, and European markets. What started as a custom AI development company has grown into something broader: a full-service AI partner covering enterprise automation, business growth, bioscience analytics, and now an education program that's training the next generation of bioinformatics professionals.
              </p>
              <p>
                Our team brings together computational biologists, data scientists, ML engineers, full-stack developers, and business strategists under one roof. That breadth isn't accidental - complex AI problems rarely sit neatly inside a single discipline, and neither do we.
              </p>
              <p>
                What hasn't changed since 2018 is how we work. We start with your business problem, not our product catalogue. We build for production, not for presentations. And we measure our success by the results you see - not the technology we deploy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision - White */}
      <div className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 border border-blue-200">
              <h2 className="text-3xl font-bold mb-4" style={{
                background: 'linear-gradient(to right, #2563eb, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Our Mission</h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#1e293b' }}>
                To make advanced AI accessible, practical, and profitable - for businesses of every size, in every industry.
              </p>
              <p className="leading-relaxed" style={{ color: '#475569' }}>
                We do this by building custom AI solutions that solve real problems, delivering them on time, and standing behind them long after launch. Not with promises - with results.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-8 border border-purple-200">
              <h2 className="text-3xl font-bold mb-4" style={{
                background: 'linear-gradient(to right, #2563eb, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Our Vision</h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#1e293b' }}>
                To be the most trusted AI partner in the world - not the biggest, but the most reliable.
              </p>
              <p className="leading-relaxed" style={{ color: '#475569' }}>
                Trust is built through transparency, technical depth, and a genuine commitment to the outcome. That's what we're building toward - one client, one solution, one result at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do - Navy */}
      <div className="py-20 about-services-section" style={{ background: 'rgba(2,13,42,1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-xl text-white/70">Five areas. One team. Every engagement built around your specific challenge.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="about-service-card bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all" style={{ opacity: 0, transform: 'translateY(28px)' }}>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{service.description}</p>
                <a href={service.link} className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                  Explore {service.title} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries - White */}
      <div className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{
              background: 'linear-gradient(to right, #2563eb, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Industries We Serve</h2>
            <p className="text-xl" style={{ color: '#64748b' }}>Our solutions are in production across every major sector - and growing.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <span key={index} className="px-6 py-3 bg-blue-50 rounded-full border border-blue-200" style={{ color: '#1e293b' }}>
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Deepiotics - Navy */}
      <div className="py-20 about-why-section" style={{ background: 'rgba(2,13,42,1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Deepiotics</h2>
            <p className="text-xl text-white/70">Four things our clients tell us matter most - and why we've built the company around them.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((item, index) => (
              <div 
                key={index} 
                className="about-why-card bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 transition-all duration-300 cursor-pointer" 
                style={{ opacity: 0, transform: 'translateY(28px)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(96,165,250,0.3)';
                  e.currentTarget.style.boxShadow = '0 12px 48px rgba(96,165,250,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team - White */}
      <div className="py-20 about-team-section" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{
              background: 'linear-gradient(to right, #2563eb, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>The Team Behind Deepiotics</h2>
            <p className="text-xl" style={{ color: '#64748b' }}>Six leaders. Dozens of disciplines. One common standard: AI that works in production, not just in pitches.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="about-team-card bg-blue-50 rounded-xl p-6 border border-blue-200 hover:border-blue-400 transition-all" style={{ opacity: 0, transform: 'translateY(28px)' }}>
                <div className="flex flex-col items-center mb-4">
                  {member.image ? (
                    <div className="relative w-32 h-32 mb-4">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full rounded-full object-cover border-4 border-white"
                          style={{ 
                            objectPosition: member.imagePosition || 'center',
                            backgroundColor: member.whiteBg ? '#ffffff' : 'transparent'
                          }}
                        />
                      </div>
                      <div className="absolute bottom-1 right-1 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center border-3 border-white" style={{ borderWidth: '3px' }}>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-2xl font-bold mb-4" style={{ color: '#2563eb' }}>
                      {member.initials}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center" style={{ color: '#1e293b' }}>{member.name}</h3>
                <p className="text-sm mb-4 text-center" style={{ color: '#2563eb' }}>{member.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ - Navy */}
      <div className="py-20 about-faq-section" style={{ background: 'rgba(2,13,42,1)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-white/70">The questions we get asked most - answered honestly.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="about-faq-card bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden" style={{ opacity: 0, transform: 'translateY(28px)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA - White */}
      <div className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 border border-blue-200 text-center">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1e293b' }}>
              Ready to See What AI<br />Can Do for Your Business?
            </h2>
            <p className="text-xl mb-8" style={{ color: '#475569' }}>
              One conversation is all it takes. Tell us your challenge - we'll tell you exactly how we'd approach it.
            </p>
            <a
              href="https://tidycal.com/team/deepiotics-team/call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-white text-lg font-semibold rounded-xl hover:shadow-2xl transition-all"
              style={{ background: 'linear-gradient(to right, #2563eb, #9333ea)' }}
            >
              Schedule Your Free Consultation
            </a>
            <p className="mt-6 text-sm" style={{ color: '#64748b' }}>
              No commitment. Straight answers. A recommendation you can act on immediately.
            </p>
            <div className="mt-8 pt-8 border-t space-y-2" style={{ borderColor: '#e2e8f0' }}>
              <div className="flex items-center justify-center gap-2" style={{ color: '#64748b' }}>
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@deepiotics.com" className="hover:text-blue-600" style={{ color: '#64748b' }}>contact@deepiotics.com</a>
              </div>
              <div className="flex items-center justify-center gap-2" style={{ color: '#64748b' }}>
                <MapPin className="w-4 h-4" />
                <span>204, Atulya IT Park, Indore, MP 452016, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
