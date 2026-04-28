import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ExpertiseSection: React.FC = () => {
  const neuralCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    gsap.to('.expertise-left', {
      opacity: 1,
      x: 0,
      duration: 0.85,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#expertise',
        start: 'top 72%'
      }
    });

    gsap.to('.expertise-right', {
      opacity: 1,
      x: 0,
      duration: 0.85,
      delay: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#expertise',
        start: 'top 72%'
      }
    });

    // Neural canvas animation
    const nc = neuralCanvasRef.current;
    if (nc) {
      const nx = nc.getContext('2d');
      if (nx) {
        const nodes = Array.from({ length: 22 }, () => ({
          x: Math.random() * 460 + 10,
          y: Math.random() * 460 + 10,
          vx: (Math.random() - 0.5) * 0.9,
          vy: (Math.random() - 0.5) * 0.9,
          r: Math.random() * 3.5 + 2
        }));

        const drawNeural = () => {
          nx.clearRect(0, 0, 480, 480);
          nx.fillStyle = 'rgba(240,244,255,0.3)';
          nx.fillRect(0, 0, 480, 480);

          nodes.forEach(n => {
            n.x += n.vx;
            n.y += n.vy;
            if (n.x < 8 || n.x > 472) n.vx *= -1;
            if (n.y < 8 || n.y > 472) n.vy *= -1;
          });

          nodes.forEach((a, i) => {
            nodes.slice(i + 1).forEach(b => {
              const d = Math.hypot(a.x - b.x, a.y - b.y);
              if (d < 160) {
                nx.beginPath();
                nx.moveTo(a.x, a.y);
                nx.lineTo(b.x, b.y);
                nx.strokeStyle = `rgba(29,78,216,${0.35 * (1 - d / 160)})`;
                nx.lineWidth = 1;
                nx.stroke();
              }
            });
          });

          nodes.forEach(n => {
            nx.beginPath();
            nx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
            nx.fillStyle = 'rgba(29,78,216,0.85)';
            nx.fill();
            nx.beginPath();
            nx.arc(n.x, n.y, n.r + 5, 0, Math.PI * 2);
            nx.fillStyle = 'rgba(29,78,216,0.12)';
            nx.fill();
          });

          requestAnimationFrame(drawNeural);
        };
        drawNeural();
      }
    }
  }, []);

  return (
    <section id="expertise" className="s-offwhite">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="expertise-grid">
          <div className="expertise-left">
            <span className="eyebrow">A Decade of AI</span>
            <h2 className="sec-title">A Track Record<br />That Shows It</h2>
            <p className="expertise-para" style={{ color: 'var(--text-muted)' }}>
              Over 1,000 AI implementations. 25+ industries. Clients from early-stage startups to Fortune 500 corporations. Our team of 50+ AI specialists, data scientists, and engineers has spent more than a decade solving real business problems with real AI — not demos, not pilots.
            </p>
            <p className="expertise-para" style={{ color: 'var(--text-muted)' }}>
              Average client ROI: 300%+, achieved within 6 months. That's the standard we hold ourselves to.
            </p>
            <ul className="feat-list">
              <li className="feat-item">
                <div className="feat-icon" style={{ background: 'rgba(29,78,216,0.1)', borderColor: 'rgba(29,78,216,0.2)' }}>✓</div>
                <div className="feat-content">
                  <div className="feat-title" style={{ color: 'var(--text-dark)' }}>Guaranteed ROI</div>
                  <div className="feat-desc" style={{ color: 'var(--text-muted)' }}>Measurable results in 6 months or your money back.</div>
                </div>
              </li>
              <li className="feat-item" style={{ borderColor: 'rgba(29,78,216,0.08)' }}>
                <div className="feat-icon" style={{ background: 'rgba(29,78,216,0.1)', borderColor: 'rgba(29,78,216,0.2)' }}>🔒</div>
                <div className="feat-content">
                  <div className="feat-title" style={{ color: 'var(--text-dark)' }}>Enterprise-Grade Security</div>
                  <div className="feat-desc" style={{ color: 'var(--text-muted)' }}>GDPR-compliant, bank-level security, production-tested.</div>
                </div>
              </li>
              <li className="feat-item" style={{ borderColor: 'rgba(29,78,216,0.08)' }}>
                <div className="feat-icon" style={{ background: 'rgba(29,78,216,0.1)', borderColor: 'rgba(29,78,216,0.2)' }}>⚡</div>
                <div className="feat-content">
                  <div className="feat-title" style={{ color: 'var(--text-dark)' }}>End-to-End Ownership</div>
                  <div className="feat-desc" style={{ color: 'var(--text-muted)' }}>We own the outcome — strategy, build, deployment, and beyond.</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="expertise-right">
            <div className="neural-wrap" style={{ background: '#f0f4ff', border: '1px solid rgba(29,78,216,0.15)' }}>
              <canvas ref={neuralCanvasRef} width="480" height="480"></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
