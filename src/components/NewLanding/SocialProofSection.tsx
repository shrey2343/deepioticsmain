import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SocialProofSection: React.FC = () => {
  useEffect(() => {
    const counter = (el: HTMLElement | null, target: number, pre = '', suf = '') => {
      if (!el) return;
      let v = 0;
      const step = target / 80;
      const t = setInterval(() => {
        v = Math.min(v + step, target);
        el.innerHTML = pre + Math.floor(v) + '<em>' + suf + '</em>';
        if (v >= target) clearInterval(t);
      }, 18);
    };

    ScrollTrigger.create({
      trigger: '#social',
      start: 'top 72%',
      once: true,
      onEnter: () => {
        gsap.to('.social-block', {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: 'power2.out'
        });
        gsap.to('.badge-pill', {
          opacity: 1,
          stagger: 0.08,
          duration: 0.4,
          delay: 0.3
        });
        counter(document.getElementById('ss1'), 500, '', '+');
        setTimeout(() => {
          const el = document.getElementById('ss2');
          if (el) {
            let v = 0;
            const t = setInterval(() => {
              v = Math.min(v + 1, 50);
              el.innerHTML = '$' + v + '<em>M+</em>';
              if (v >= 50) clearInterval(t);
            }, 30);
          }
        }, 150);
        setTimeout(() => counter(document.getElementById('ss3'), 300, '', '%'), 300);
      }
    });
  }, []);

  return (
    <section id="social" className="s-navy">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <span className="eyebrow">100+ Companies. One Common Decision.</span>
        <h2 className="sec-title" style={{ maxWidth: '680px', margin: '0 auto 16px' }}>
          They needed AI that actually works in production — not a prototype that looks good in a boardroom. So they came to Deepiotics.
        </h2>
        <div className="social-grid">
          <div className="social-block">
            <span className="social-num" id="ss1">0<em>+</em></span>
            <div className="social-lbl">Clients Served</div>
          </div>
          <div className="social-block">
            <span className="social-num" id="ss2">$0<em>M+</em></span>
            <div className="social-lbl">Revenue Generated for Clients</div>
          </div>
          <div className="social-block">
            <span className="social-num" id="ss3">0<em>%</em></span>
            <div className="social-lbl">Average Efficiency Gains</div>
          </div>
        </div>
        <div className="badges-row">
          <span className="badge-pill">Industry Leader</span>
          <span className="badge-pill">Proven Results</span>
          <span className="badge-pill">Enterprise Security</span>
          <span className="badge-pill">Fast Deployment</span>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
