import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PainPointsSection: React.FC = () => {
  useEffect(() => {
    gsap.to('.pain-card', {
      opacity: 1,
      y: 0,
      stagger: 0.07,
      duration: 0.55,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#pain',
        start: 'top 72%'
      }
    });
  }, []);

  const painPoints = [
    {
      num: '01',
      title: 'Too Many Vendors, Too Many Gaps',
      body: 'Scattered teams mean misaligned goals, duplicate effort, and nobody owns the outcome. We replace the vendor patchwork with a single accountable partner — one team, end to end.',
      bullets: [
        'Custom Machine Learning Models',
        'AI-Powered Chatbots & Virtual Assistants',
        'Intelligent Document Processing',
        'Predictive Business Analytics'
      ]
    },
    {
      num: '02',
      title: 'Vague Plans Lead to Stalled Builds',
      body: 'Most AI projects fail before the first sprint ends. We start with a clear technical roadmap — scoped requirements, defined outcomes, realistic timelines — so your build has a foundation, not just a vision.',
      bullets: [
        'Autonomous Task Execution',
        'Multi-Channel Customer Engagement',
        'Intelligent Decision Making',
        'Seamless System Integration'
      ]
    },
    {
      num: '03',
      title: 'Slow Delivery Kills Competitive Edge',
      body: 'Every week a product sits unshipped is a week your competitors pull ahead. Our delivery model is built for speed without shortcuts — sprint-driven, milestone-tracked, and always moving.',
      bullets: [
        'Multi-Agent Orchestration',
        'Collaborative AI Networks',
        'Adaptive Learning Systems',
        'Enterprise-Scale Deployment'
      ]
    },
    {
      num: '04',
      title: 'Weak Architecture Breaks Under Pressure',
      body: 'A system that works in demo rarely survives production. We architect for the load you\'ll have in year two, not the traffic you have today — so your AI scales without breaking.',
      bullets: [
        'Advanced Business Intelligence',
        'Real-Time Data Processing',
        'Predictive Market Analysis',
        'Custom Analytics Dashboards'
      ]
    },
    {
      num: '05',
      title: 'Overcomplicated Builds Bleed Budgets',
      body: 'Complexity that doesn\'t add value costs money and time. We build lean, purpose-built AI systems — and our global delivery model keeps your costs 35% lower without sacrificing quality.',
      bullets: [
        'Custom API Development',
        'Legacy System Integration',
        'Cloud & On-Premise Deployment',
        'Scalable AI Architecture'
      ]
    },
    {
      num: '06',
      title: 'Silence From Your Dev Team is Expensive',
      body: 'Unclear updates and shifting scope destroy momentum. Every client at Deepiotics gets transparent, real-time project visibility — so you always know where things stand and what\'s coming next.',
      bullets: [
        'Real-time Collaboration Tools',
        'Automated Documentation',
        'Predictive Analytics for Projects',
        'Cross-platform Compatibility'
      ]
    }
  ];

  return (
    <section id="pain" className="s-white">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <span className="eyebrow">Most AI Projects Fail. Ours Don't.</span>
        <div className="pain-header">
          <h2 className="sec-title">
            Six Problems That Kill AI Builds — And How Deepiotics Solves Each One
          </h2>
        </div>
        <div className="pain-grid">
          {painPoints.map((point, index) => (
            <div key={index} className="pain-card">
              <div className="pain-header-row">
                <div className="pain-num">{point.num}</div>
                <h3 className="pain-title">{point.title}</h3>
              </div>
              <p className="pain-body">{point.body}</p>
              <ul className="pain-bullets">
                {point.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <a href="#cta" className="pain-link">
                Get Free Consultation <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
