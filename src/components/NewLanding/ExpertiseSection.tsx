import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExpertiseSection: React.FC = () => {
  useEffect(() => {
    gsap.to('#expertise-content', {
      opacity: 1,
      y: 0,
      duration: 0.85,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#expertise',
        start: 'top 72%'
      }
    });
  }, []);

  return (
    <section id="expertise" className="s-navy" style={{ padding: '120px 56px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div id="expertise-content" style={{ opacity: 1 }}>
          <span className="eyebrow" style={{ color: '#60a5fa' }}>A Decade of AI</span>
          
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 600,
            lineHeight: 1.3,
            marginBottom: '32px',
            marginTop: '24px',
            background: 'linear-gradient(to right, #60a5fa, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            A Track Record That Shows It
          </h2>

          <p style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '900px',
            margin: '0 auto 60px',
            lineHeight: 1.7
          }}>
            Over 1,000 AI implementations. 25+ industries. Clients from early-stage startups to Fortune 500 corporations. Our team of 50+ AI specialists, data scientists, and engineers has spent more than a decade solving real business problems with real AI — not demos, not pilots.
          </p>

          <div className="track-record-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div className="track-record-card" style={{
              textAlign: 'center',
              padding: '32px 24px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
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
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '16px'
              }}>
                ✓
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#fff',
                marginBottom: '12px'
              }}>
                Guaranteed ROI
              </h3>
              <p style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.6
              }}>
                Measurable results in 6 months or your money back.
              </p>
            </div>

            <div className="track-record-card" style={{
              textAlign: 'center',
              padding: '32px 24px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
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
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '16px'
              }}>
                🔒
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#fff',
                marginBottom: '12px'
              }}>
                Enterprise-Grade Security
              </h3>
              <p style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.6
              }}>
                GDPR-compliant, bank-level security, production-tested.
              </p>
            </div>

            <div className="track-record-card" style={{
              textAlign: 'center',
              padding: '32px 24px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
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
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '16px'
              }}>
                ⚡
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#fff',
                marginBottom: '12px'
              }}>
                End-to-End Ownership
              </h3>
              <p style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.6
              }}>
                We own the outcome — strategy, build, deployment, and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
