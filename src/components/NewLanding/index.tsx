import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/newLanding.css';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import MarqueeSection from './MarqueeSection';
// import StatsSection from './StatsSection';
import MetricsSection from './MetricsSection';
import PainPointsSection from './PainPointsSection';
import ServicesSection from './ServicesSection';
// import SocialProofSection from './SocialProofSection';
import ExpertiseSection from './ExpertiseSection';
import TeamSection from './TeamSection';
import CTASection from './CTASection';
import FooterSection from './FooterSection';

gsap.registerPlugin(ScrollTrigger);

const NewLanding: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    document.body.classList.add('new-landing-active');

    // Cursor animation
    let mx = 0, my = 0, rx = 0, ry = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + 'px';
        cursorRef.current.style.top = my + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    const cursorInterval = setInterval(() => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = rx + 'px';
        cursorRingRef.current.style.top = ry + 'px';
      }
    }, 16);

    // Cursor hover effects
    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%,-50%) scale(2.5)';
      if (cursorRingRef.current) cursorRingRef.current.style.transform = 'translate(-50%,-50%) scale(0.4)';
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
      if (cursorRingRef.current) cursorRingRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
    };

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Background canvas animation
    const bgCanvas = bgCanvasRef.current;
    if (bgCanvas) {
      const bgCtx = bgCanvas.getContext('2d');
      if (bgCtx) {
        const resizeBg = () => {
          bgCanvas.width = window.innerWidth;
          bgCanvas.height = window.innerHeight;
        };
        resizeBg();
        window.addEventListener('resize', resizeBg);

        const particles = Array.from({ length: 70 }, () => ({
          x: Math.random() * bgCanvas.width,
          y: Math.random() * bgCanvas.height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.8 + 0.5,
          o: Math.random() * 0.35 + 0.1
        }));

        const drawBg = () => {
          bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
          
          particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = bgCanvas.width;
            if (p.x > bgCanvas.width) p.x = 0;
            if (p.y < 0) p.y = bgCanvas.height;
            if (p.y > bgCanvas.height) p.y = 0;

            bgCtx.beginPath();
            bgCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            bgCtx.fillStyle = `rgba(96,165,250,${p.o})`;
            bgCtx.fill();
          });

          particles.forEach((p, i) => {
            particles.slice(i + 1).forEach(q => {
              const d = Math.hypot(p.x - q.x, p.y - q.y);
              if (d < 130) {
                bgCtx.beginPath();
                bgCtx.moveTo(p.x, p.y);
                bgCtx.lineTo(q.x, q.y);
                bgCtx.strokeStyle = `rgba(29,78,216,${0.05 * (1 - d / 130)})`;
                bgCtx.stroke();
              }
            });
          });

          requestAnimationFrame(drawBg);
        };
        drawBg();
      }
    }

    // Canvas visibility based on scroll
    const navySecs = document.querySelectorAll('.s-navy, .s-navy-mid');
    const updateCanvas = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      let on = false;
      navySecs.forEach(s => {
        const section = s as HTMLElement;
        if (mid >= section.offsetTop && mid <= section.offsetTop + section.offsetHeight) on = true;
      });
      if (bgCanvas) bgCanvas.style.opacity = on ? '0.55' : '0';
    };
    window.addEventListener('scroll', updateCanvas, { passive: true });
    updateCanvas();

    // Cursor color adapt
    const adaptCursor = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      let white = false;
      document.querySelectorAll('.s-white, .s-offwhite, .s-lightblue').forEach(s => {
        const section = s as HTMLElement;
        if (mid >= section.offsetTop && mid <= section.offsetTop + section.offsetHeight) white = true;
      });
      if (cursorRef.current) cursorRef.current.style.background = white ? '#1d4ed8' : '#60a5fa';
      if (cursorRingRef.current) cursorRingRef.current.style.borderColor = white ? 'rgba(29,78,216,0.45)' : 'rgba(96,165,250,0.4)';
    };
    window.addEventListener('scroll', adaptCursor, { passive: true });
    adaptCursor();

    return () => {
      document.body.classList.remove('new-landing-active');
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cursorInterval);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      window.removeEventListener('scroll', updateCanvas);
      window.removeEventListener('scroll', adaptCursor);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-ring" ref={cursorRingRef}></div>
      <canvas id="bg-canvas" ref={bgCanvasRef}></canvas>
      
      <Navigation />
      <HeroSection />
      <MarqueeSection />
      {/* <StatsSection /> */}
      <MetricsSection />
      <PainPointsSection />
      <ServicesSection />
      {/* <SocialProofSection /> */}
      <ExpertiseSection />
      <TeamSection />
      <CTASection />
      <FooterSection />
    </>
  );
};

export default NewLanding;
