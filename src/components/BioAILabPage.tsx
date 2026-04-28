import { useEffect, useRef } from 'react';
import ThemedNavigation from './ThemedNavigation';
import FooterSection from './NewLanding/FooterSection';

const BioAILabPage = () => {
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
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.5 + 0.5
        }));

        const animateBg = () => {
          bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
          particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > bgCanvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > bgCanvas.height) p.vy *= -1;
            bgCtx.beginPath();
            bgCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            bgCtx.fillStyle = 'rgba(96,165,250,0.4)';
            bgCtx.fill();
          });
          requestAnimationFrame(animateBg);
        };
        animateBg();

        return () => {
          window.removeEventListener('resize', resizeBg);
        };
      }
    }

    return () => {
      document.body.classList.remove('new-landing-active');
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div style={{ background: 'rgba(2,13,42,1)', minHeight: '100vh' }}>
      {/* Custom Cursor */}
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-ring" ref={cursorRingRef}></div>
      
      {/* Background Canvas */}
      <canvas id="bg-canvas" ref={bgCanvasRef}></canvas>
      
      <ThemedNavigation />
      
      {/* Hero Section */}
      <section id="hero" className="s-navy" style={{ 
        padding: '140px 56px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto' }}>
          <div className="hero-badge" style={{ opacity: 1, marginBottom: '20px' }}>
            <span className="badge-dot"></span>
            By Deepiotics · Program Brochure 2025
          </div>
          
          <h1 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: 'clamp(48px, 7vw, 96px)',
            fontWeight: 400,
            lineHeight: 1.1,
            fontStyle: 'italic',
            marginBottom: '20px',
            color: '#fff'
          }}>
            BioAI Lab
          </h1>

          <p style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            India's First AI-Powered, No-Code Bioinformatics Program.<br />
            Bioinformatics ka naya tarika — bina coding ke.
          </p>

          <div className="hero-proof" style={{ 
            opacity: 1, 
            display: 'flex', 
            gap: '32px', 
            justifyContent: 'center',
            paddingTop: '32px',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}>
            <div>
              <div className="proof-lbl">8-Week Structured Curriculum</div>
            </div>
            <div>
              <div className="proof-lbl">No-Code AI-Powered Tools</div>
            </div>
            <div>
              <div className="proof-lbl">Job-Ready In 90 Days</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#register" className="btn-primary">Register - Free Workshop</a>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span>www.deepiotics.com</span>
              <span>·</span>
              <span>+91 88272 72142</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="s-white" style={{ padding: '80px 56px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">About the Program</span>
          <h2 className="sec-title">About the Program</h2>
          <p className="sec-sub" style={{ maxWidth: '900px', margin: '0 auto 56px' }}>
            BioAI Lab is an 8-week, 100% online program for Biotechnology, Life Science, Microbiology, Genetics, and Biochemistry graduates who want to build a real bioinformatics career — without learning Python or any coding language.
          </p>
          <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '900px', margin: '0 auto', lineHeight: 1.75 }}>
            Students use AI tools like Galaxy, ChatGPT, and Claude to run actual NGS pipelines, analyse real Indian genomic datasets from NCBI/SRA, build a professional GitHub portfolio, and prepare confidently for interviews at Biocon, Syngene, and leading research institutions.
          </p>
        </div>
      </section>

      {/* Program at a Glance */}
      <section id="glance" className="s-navy" style={{ padding: '80px 56px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Program at a Glance</span>
          <h2 className="sec-title">What You Get</h2>
          
          <div className="services-grid" style={{ marginTop: '56px' }}>
            <div className="svc-card" style={{ opacity: 1, transform: 'none' }}>
              <div className="svc-icon">📚</div>
              <h3 className="svc-title">8-Week Structured Curriculum</h3>
              <p className="svc-desc">
                AI tools, NGS pipelines, real Indian datasets, GitHub portfolio, and a complete interview preparation system — built week by week. Every module is designed around what bioinformatics employers actually look for.
              </p>
            </div>

            <div className="svc-card" style={{ opacity: 1, transform: 'none' }}>
              <div className="svc-icon">🤖</div>
              <h3 className="svc-title">No-Code, AI-Powered Tools</h3>
              <p className="svc-desc">
                Run full NGS pipelines using Galaxy, ChatGPT, and Claude. No Python. No terminal. No coding required — ever. If you can use a browser, you can do bioinformatics.
              </p>
            </div>

            <div className="svc-card" style={{ opacity: 1, transform: 'none' }}>
              <div className="svc-icon">💼</div>
              <h3 className="svc-title">Job-Ready in 90 Days</h3>
              <p className="svc-desc">
                A real GitHub portfolio, a LinkedIn profile optimised for biotech recruiters, and a complete interview preparation system — all built during the program, not after it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section id="audience" className="s-white" style={{ padding: '80px 56px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Target Audience</span>
          <h2 className="sec-title">Who Is This Program For?</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '56px' }}>
            {[
              { num: '01', title: 'BSc / MSc Graduates', desc: 'Biotechnology, Life Sciences, Microbiology, Genetics, Biochemistry, or related fields — who want to enter bioinformatics without a coding background.' },
              { num: '02', title: 'Job Seekers', desc: 'Graduates who haven\'t landed a job yet and want the exact NGS portfolio and skills that top biotech recruiters look for — at Biocon, Syngene, and beyond.' },
              { num: '03', title: 'Thesis Students', desc: 'Students working on genomics or molecular biology research who need to analyse real NGS data — without writing a single line of code.' },
              { num: '04', title: 'Career Switchers', desc: 'Lab technicians and research assistants ready to transition into higher-paying bioinformatics analyst roles — on their own timeline.' }
            ].map((item) => (
              <div key={item.num} className="pain-card" style={{ opacity: 1, transform: 'none' }}>
                <div className="pain-num">{item.num}</div>
                <h3 className="pain-title">{item.title}</h3>
                <p className="pain-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Week Curriculum */}
      <section id="curriculum" className="s-navy" style={{ padding: '80px 56px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Complete Week-by-Week</span>
          <h2 className="sec-title">The 8-Week Curriculum</h2>
          <p className="sec-sub">Complete week-by-week — covering every stage of the NGS bioinformatics workflow using AI tools.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginTop: '56px' }}>
            {[
              { week: 'Week 1', title: 'Foundation: AI Tool Stack & Introduction', desc: 'What bioinformatics is and why it matters in 2025 India · Your AI tool stack: Galaxy, ChatGPT, Claude · Browser-based workspace setup — no installation required · Understanding NGS technology and sequencing concepts · Your first FASTQ file: structure, format, and how to read it' },
              { week: 'Week 2', title: 'QC & Pre-processing', desc: 'FastQC on Galaxy — AI interprets every quality metric · Phred scores, adapter contamination, and GC bias explained · Trimmomatic: AI configures, you review and understand output · Before/after QC — knowing when your data is clean to proceed · Hands-on: process a real Indian FASTQ file end-to-end' },
              { week: 'Week 3', title: 'Alignment: Reference Genome', desc: 'What a reference genome is and why we align reads to it · BWA-MEM: AI walks through every parameter — you understand the logic · SAM and BAM formats: structure, sorting, and indexing · Mapping statistics: what 98% alignment rate means · Hands-on: align Indian genomics reads to hg38 — live' },
              { week: 'Week 4', title: 'Variant Calling with GATK', desc: 'SNV vs InDel vs structural variant — explained simply · GATK HaplotypeCaller: AI configures, you follow the logic · VCF file output: every column explained in plain language · GVCF workflow for multi-sample joint calling — overview · Hands-on: call variants on your Indian dataset — output VCF' },
              { week: 'Week 5', title: 'Annotation & Interpretation', desc: 'ClinVar and dbSNP: what they contain and how to query · ANNOVAR/SnpEff: AI runs the tool, you interpret the output · Pathogenic vs benign vs VUS — clinical significance explained · p-values, allele frequency, Hardy-Weinberg demystified · Hands-on: annotate VCF and identify top 3 relevant variants' },
              { week: 'Week 6', title: 'Data Visualisation - No R Required', desc: 'Heatmaps: publication-quality using AI and drag-drop tools · Manhattan plots for GWAS — significance thresholds · PCA (Principal Component Analysis): what it shows · Volcano plots for differential expression analysis · Hands-on: generate 4 visualisation types — no R code' },
              { week: 'Week 7', title: 'GitHub Portfolio & LinkedIn', desc: 'Why GitHub is the most powerful bioinformatics job tool · Profile setup: README — AI writes your first draft · Project 1: NGS pipeline repo with full documentation · Project 2: Indian genomics variant analysis repo · LinkedIn headline and skills — AI-optimised for recruiters' },
              { week: 'Week 8', title: 'Interview Preparation & Placement', desc: '90 Biocon/Syngene questions with model answers · Technical: NGS pipeline, variant interpretation, tools · AI mock interview: 30-minute simulation with feedback · Salary negotiation: word-for-word scripts tested · Cold outreach: LinkedIn and email (34% HR response rate)' }
            ].map((item, idx) => (
              <div key={idx} className="svc-card" style={{ opacity: 1, transform: 'none', textAlign: 'left' }}>
                <div style={{ 
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: 'linear-gradient(135deg, rgba(29,78,216,0.12), rgba(59,130,246,0.08))',
                  color: 'var(--blue)',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  borderRadius: '3px',
                  border: '1px solid rgba(29,78,216,0.2)',
                  marginBottom: '18px'
                }}>{item.week}</div>
                <h3 className="svc-title">{item.title}</h3>
                <p className="svc-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Module */}
      <section id="bonus" className="s-white" style={{ padding: '80px 56px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Bonus Module</span>
          <h2 className="sec-title">Interview Mastery System — Included</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '56px' }}>
            {[
              '90-question Biocon/Syngene bank with full model answers',
              'AI mock interview simulator with real-time feedback',
              'Salary negotiation scripts — tested, word-for-word',
              '200+ HR contacts + cold outreach templates (34% response rate)'
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '32px 24px',
                background: '#f8faff',
                borderRadius: '8px',
                border: '1px solid rgba(29,78,216,0.1)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(29,78,216,0.12), rgba(59,130,246,0.06))',
                  border: '1px solid rgba(29,78,216,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  marginBottom: '20px',
                  margin: '0 auto 20px'
                }}>✓</div>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Bonuses */}
      <section id="bonuses" className="s-navy" style={{ padding: '80px 56px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Additional Value</span>
          <h2 className="sec-title">Five Bonuses Included With the Program</h2>
          
          <div className="services-grid" style={{ marginTop: '56px' }}>
            {[
              { num: '01', title: '60-Minute Daily Session System', desc: 'Structured 60-minute daily sessions with pre-built weekly schedules for students juggling college, lab work, and internships. No marathon sessions. Built for real student life.' },
              { num: '02', title: 'Zero-Hardware Setup Kit', desc: 'Run enterprise-level NGS analysis on any ₹15,000 laptop or smartphone via browser. Pre-configured Day 1 environments. No installation, no IT support required.' },
              { num: '03', title: 'The Comeback Protocol', desc: 'A re-entry module for students who tried bioinformatics before and stopped. Diagnoses where you got stuck and provides a personalised 2-week sprint forward.' },
              { num: '04', title: 'Cold Recruiter Playbook', desc: 'Word-for-word LinkedIn messages, email, and WhatsApp templates for HR managers at Biocon, Syngene, and 50+ biotech companies — with a verified 34% response rate.' },
              { num: '05', title: 'Real Indian Genomics Dataset Pack', desc: 'Curated NCBI/SRA datasets from Indian population genomics studies covering diabetes, cardiac, and oncology contexts — the exact disease areas top Indian biotech firms ask about in interviews.' }
            ].map((item) => (
              <div key={item.num} className="svc-card" style={{ opacity: 1, transform: 'none' }}>
                <div className="svc-new-badge">{item.num}</div>
                <h3 className="svc-title">{item.title}</h3>
                <p className="svc-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Is Delivered */}
      <section id="delivery" className="s-white" style={{ padding: '80px 56px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Program Delivery</span>
          <h2 className="sec-title">Live, Recorded & Supported — All Three</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '56px' }}>
            {[
              { icon: '🎥', title: 'Weekly Live Sessions', desc: 'Instructor-led cohort calls every week — real-time Q&A, live demos, and guided walkthroughs of each module.' },
              { icon: '📹', title: 'Self-Paced Recordings', desc: 'Every session is recorded. Rewatch at your own pace as many times as needed. Lifetime access included.' },
              { icon: '💬', title: 'Community & Support', desc: 'Private WhatsApp group with peers, mentors, and the Deepiotics team — for questions, help, and project feedback throughout the program.' }
            ].map((item, idx) => (
              <div key={idx} className="svc-card" style={{ opacity: 1, transform: 'none' }}>
                <div className="svc-icon">{item.icon}</div>
                <h3 className="svc-title">{item.title}</h3>
                <p className="svc-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="s-navy" style={{ padding: '120px 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2 className="cta-h2" style={{ opacity: 1 }}>
            Ready to Start Your <em>Bioinformatics Career?</em>
          </h2>
          <p className="cta-sub" style={{ opacity: 1 }}>
            No coding. No prior bioinformatics experience required. Just 60 minutes a day and the drive to build something real.
          </p>
          <a href="#register" className="cta-btn" style={{ opacity: 1 }}>Register - Free Workshop</a>
          
          <div className="cta-contact" style={{ opacity: 1, marginTop: '48px' }}>
            <a href="http://www.deepiotics.com">www.deepiotics.com</a> · <a href="tel:+918827272142">+91 88272 72142</a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default BioAILabPage;
