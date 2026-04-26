import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HeroSection: React.FC = () => {
  useEffect(() => {
    // Hero entrance animation
    const htl = gsap.timeline({ delay: 0.15 });
    htl.to('#hero-badge', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
      .to('.word', { y: '0%', duration: 0.85, stagger: 0.09, ease: 'power3.out' }, '-=0.2')
      .to('#hero-sub', { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out' }, '-=0.3')
      .to('#hero-ctas', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25')
      .to('#hero-proof', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2')
      .to('#scroll-hint', { opacity: 1, duration: 0.4 }, '-=0.1');

    // Counter animation
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
      trigger: '#hero-proof',
      start: 'top 85%',
      once: true,
      onEnter: () => {
        counter(document.getElementById('pc1'), 500, '', '+');
        setTimeout(() => counter(document.getElementById('pc2'), 70, '', '+'), 150);
        setTimeout(() => counter(document.getElementById('pc3'), 35, '', '%'), 300);
        setTimeout(() => counter(document.getElementById('pc4'), 35, '', '%'), 450);
      }
    });

    // Mouse parallax
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to('#hero-h1', {
        rotationY: (e.clientX / window.innerWidth - 0.5) * 8,
        rotationX: -(e.clientY / window.innerHeight - 0.5) * 8,
        duration: 0.9,
        ease: 'power2.out'
      });
    };
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" className="s-navy">
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px' }}>
        <div className="hero-badge" id="hero-badge">
          <span className="badge-dot"></span>
          AI-First Development Company · Trusted by 500+ Clients
        </div>
        
        <h1 className="hero-h1" id="hero-h1">
          <span className="line">
            <span className="word">Your</span> <span className="word">Trusted</span>
          </span>
          <span className="line">
            <span className="word hero-accent">AI</span> <span className="word">Partner</span>
          </span>
        </h1>

        <p className="hero-sub" id="hero-sub">
          We design, build, and deploy intelligent AI systems — so your business can move faster, work smarter, and outgrow the competition.
        </p>

        <div className="hero-ctas" id="hero-ctas">
          <a href="#cta" className="btn-primary">Book a Free Consultation</a>
          <a href="#services" className="btn-ghost">See Our Work <span>→</span></a>
        </div>

        <div className="hero-proof" id="hero-proof">
          <div>
            <div className="proof-val" id="pc1">0<em>+</em></div>
            <div className="proof-lbl">End-to-End Delivery</div>
          </div>
          <div>
            <div className="proof-val" id="pc2">0<em>+</em></div>
            <div className="proof-lbl">Projects Shipped</div>
          </div>
          <div>
            <div className="proof-val" id="pc3">0<em>%</em></div>
            <div className="proof-lbl">Faster Time-to-Market</div>
          </div>
          <div>
            <div className="proof-val" id="pc4">0<em>%</em></div>
            <div className="proof-lbl">Cost-Efficient Outsourcing</div>
          </div>
        </div>
      </div>

      <div className="scroll-hint" id="scroll-hint">
        <div className="scroll-line"></div>
        <span className="scroll-lbl">Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;
