import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ServicesSection: React.FC = () => {
  useEffect(() => {
    gsap.to('.svc-card', {
      opacity: 1,
      y: 0,
      stagger: 0.09,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#services',
        start: 'top 72%'
      }
    });
  }, []);

  const services = [
    {
      icon: '🚀',
      title: 'AI Business Growth Suite',
      desc: 'Most small and mid-sized businesses know AI can help — they just don\'t know where to start, or have a team to run it. Our AI Business Growth Suite handles everything: done-for-you websites, AI marketing agents, AI sales agents, chatbots, lead capture, and ad automation. You focus on running the business. The AI handles the growth.',
      bullets: [
        'AI Marketing Agent — autonomous content creation, campaign management, and optimisation',
        'AI Sales Agent — instant lead qualification, follow-up, and meeting booking 24/7',
        'Done-for-you AI Website & Ads Setup',
        '24/7 AI Chatbots & Voice Agents',
        'Data-Driven Analytics & Tracking'
      ],
      isNew: false
    },
    {
      icon: '💻',
      title: 'Web & App Development',
      desc: 'We build digital products that perform — responsive web apps, mobile applications, and enterprise platforms engineered for scale. From a fast MVP to a complex multi-tier system, we deliver on time and built to last.',
      bullets: [
        'Responsive Web Design',
        'Mobile App Development',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'Fast MVP & Prototype Delivery'
      ],
      isNew: false
    },
    {
      icon: '🤖',
      title: 'AI Solutions',
      desc: 'We build AI that works in production — not just in demos. From AI agents and machine learning to QA testing and healthcare analytics, every solution is tailored to your business and built to perform at scale.',
      bullets: [
        'AI QA & Software Testing — for AI-built and traditionally built products',
        'AI Agent Development — autonomous task execution, 24/7',
        'Machine Learning Solutions — custom models trained on your data',
        'Business Intelligence & Analytics — live insights, not stale reports',
        'Process Automation — up to 80% reduction in processing time',
        'AI for Healthcare — HIPAA-compliant, built for clinical environments',
        'Data Engineering — the reliable infrastructure everything else runs on'
      ],
      isNew: false
    },
    {
      icon: '🧬',
      title: 'Bioscience & Genomics AI',
      desc: 'We bring the same AI rigour we apply to enterprise software to the world of genomics. Deepiotics delivers end-to-end NGS data analysis — WGS, WES, RNA-Seq, oncology genomics, and reproductive genomics — for labs, hospitals, and diagnostic centers. White-label reports in 24–48 hours. No infrastructure required on your end.',
      bullets: [
        'NGS Data Analysis — WGS, WES, Targeted Panels, CNV & SV Detection',
        'Oncology Genomics & Cancer Panel Analysis',
        'IVF & Reproductive Genomics — PGT-A, PGT-M, PGT-SR',
        'RNA-Seq, Metagenomics & Advanced Bioinformatics',
        'White-Label Reports Delivered in 24–48 Hours'
      ],
      isNew: true
    },
    {
      icon: '🔬',
      title: 'BioAI Lab',
      desc: 'India\'s first no-code bioinformatics career program. In 8 weeks, Life Science and Biotechnology graduates go from FASTQ to job-ready — running real NGS pipelines with Galaxy, ChatGPT, and Claude, building a GitHub portfolio, and walking into Biocon and Syngene interviews prepared. No Python. No terminal. No prior experience needed.',
      bullets: [
        '8-Week, 100% Online Curriculum',
        'Run Real NGS Pipelines — No Coding Required',
        'Build a Professional GitHub Portfolio',
        '90-Question Interview Bank + AI Mock Interviews',
        'Job-Ready in 90 Days'
      ],
      isNew: true
    }
  ];

  return (
    <section id="services" className="s-lightblue">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <span className="eyebrow">What We Build</span>
        <h2 className="sec-title">End-to-End AI Solutions</h2>
        <p className="sec-sub">
          From growth automation to bioscience AI — every solution starts with your specific challenge, not our service catalogue.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="svc-card">
              {service.isNew && <div className="svc-new-badge">✦ NEW</div>}
              <div className="svc-header">
                <div className="svc-icon">{service.icon}</div>
                <h3 className="svc-title">{service.title}</h3>
              </div>
              <p className="svc-desc">{service.desc}</p>
              <ul className="svc-bullets">
                {service.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <a href="#cta" className="svc-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
