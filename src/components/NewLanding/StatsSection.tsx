import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const StatsSection: React.FC = () => {
  useEffect(() => {
    const counter = (el: HTMLElement | null, target: number, pre = '', suf = '') => {
      if (!el) return;
      let v = 0;
      const step = target / 80;
      const t = setInterval(() => {
        v = Math.min(v + step, target);
        el.innerHTML = pre + Math.floor(v) + '<sub>' + suf + '</sub>';
        if (v >= target) clearInterval(t);
      }, 18);
    };

    ScrollTrigger.create({
      trigger: '#stats',
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.to('.stat-block', {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.65,
          ease: 'power2.out'
        });
        counter(document.getElementById('s1'), 70, '', '+');
        setTimeout(() => counter(document.getElementById('s2'), 80, '', '%'), 150);
        setTimeout(() => counter(document.getElementById('s3'), 35, '', '%'), 300);
      }
    });
  }, []);

  return (
    <section id="stats" className="s-white">
      <div style={{ textAlign: 'center', marginBottom: '52px' }}>
        <span className="eyebrow">By The Numbers</span>
        <h2 className="sec-title">Proven at Scale</h2>
      </div>
      <div className="stats-row">
        <div className="stat-block">
          <span className="stat-num" id="s1">0<sub>+</sub></span>
          <div className="stat-lbl">AI Solutions Delivered</div>
        </div>
        <div className="stat-block">
          <span className="stat-num" id="s2">0<sub>%</sub></span>
          <div className="stat-lbl">Average Efficiency Gain</div>
        </div>
        <div className="stat-block">
          <span className="stat-num" id="s3">0<sub>%</sub></span>
          <div className="stat-lbl">Lower Operational Costs</div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
