import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CTASection: React.FC = () => {
  useEffect(() => {
    gsap.to('.cta-h2', {
      opacity: 1,
      y: 0,
      duration: 0.85,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#cta',
        start: 'top 74%'
      }
    });

    gsap.to('.cta-sub', {
      opacity: 1,
      y: 0,
      duration: 0.65,
      delay: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#cta',
        start: 'top 74%'
      }
    });

    gsap.to('.cta-btn', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#cta',
        start: 'top 74%'
      }
    });

    gsap.to('.cta-trust', {
      opacity: 1,
      duration: 0.5,
      delay: 0.45,
      scrollTrigger: {
        trigger: '#cta',
        start: 'top 74%'
      }
    });

    gsap.to('.cta-contact', {
      opacity: 1,
      duration: 0.5,
      delay: 0.6,
      scrollTrigger: {
        trigger: '#cta',
        start: 'top 74%'
      }
    });
  }, []);

  return (
    <section id="cta" className="s-navy">
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', margin: '0 auto' }}>
        <span className="eyebrow" style={{ color: '#60a5fa' }}>Free Strategy Session</span>
        <h2 className="cta-h2" style={{ 
          fontSize: 'clamp(32px, 4vw, 48px)',
          lineHeight: '1.2',
          background: 'linear-gradient(to right, #60a5fa, #c084fc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Let's Talk About What <em style={{
            background: 'linear-gradient(to right, #60a5fa, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontStyle: 'italic'
          }}>AI</em> Can Do for Your Business
        </h2>
        <p className="cta-sub" style={{ 
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          A 45-minute strategy session. No sales pitch. Just a clear, honest look at where AI fits into your business and what results you can realistically expect.
        </p>
        <a href="mailto:contact@deepiotics.com" className="cta-btn">
          Get Your Free AI Strategy Session
        </a>
        <div className="cta-trust">
          <span className="cta-trust-item">
            <span className="trust-dot"></span>500+ Clients Served
          </span>
          <span className="cta-trust-item">
            <span className="trust-dot"></span>$50M+ Revenue Generated
          </span>
          <span className="cta-trust-item">
            <span className="trust-dot"></span>Enterprise Security
          </span>
          <span className="cta-trust-item">
            <span className="trust-dot"></span>24/7 Support
          </span>
        </div>
        <div className="cta-contact">
          <div>
            Email: <a href="mailto:contact@deepiotics.com">contact@deepiotics.com</a> — response within 2 hours
          </div>
          <div>Office: 204, Atulya IT Park, Indore, MP 452016, India</div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
