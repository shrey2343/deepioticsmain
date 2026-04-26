import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MetricsSection: React.FC = () => {
  useEffect(() => {
    gsap.to('.metric-cell', {
      opacity: 1,
      y: 0,
      stagger: 0.09,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#metrics',
        start: 'top 72%'
      }
    });
  }, []);

  return (
    <section id="metrics" className="s-navy">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 0 }}>
        <span className="eyebrow">Real Results. Measured Daily.</span>
        <h2 className="sec-title">
          Live Business Intelligence<br />From Active Client Deployments
        </h2>
        <p className="metrics-label">
          Performance data from Deepiotics-managed AI systems across active enterprise deployments
        </p>
        <div className="metrics-row">
          <div className="metric-cell">
            <span className="metric-val up">+247%</span>
            <span className="metric-lbl">Revenue Impact</span>
          </div>
          <div className="metric-cell">
            <span className="metric-val up">+312%</span>
            <span className="metric-lbl">Automation Success</span>
          </div>
          <div className="metric-cell">
            <span className="metric-val down">-52%</span>
            <span className="metric-lbl">Operational Savings</span>
          </div>
          <div className="metric-cell">
            <span className="metric-val">99.7%</span>
            <span className="metric-lbl">AI Accuracy</span>
          </div>
          <div className="metric-cell">
            <span className="metric-val up">$5.2M</span>
            <span className="metric-lbl">Client Savings</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
