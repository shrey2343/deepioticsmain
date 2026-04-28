import { useEffect, useRef } from 'react';
import ThemedNavigation from './ThemedNavigation';
import FooterSection from './NewLanding/FooterSection';

const BioscienceNGSPage = () => {
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    document.body.classList.add('new-landing-active');

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
    };
  }, []);

  return (
    <div style={{ background: 'rgba(2,13,42,1)', minHeight: '100vh' }}>
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
          <h1 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: 'clamp(48px, 7vw, 96px)',
            fontWeight: 400,
            lineHeight: 1.1,
            fontStyle: 'italic',
            marginBottom: '20px',
            background: 'linear-gradient(to right, #60a5fa, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Transform Your Sequencing Data Into Discoveries
          </h1>

          <p style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            End-to-End Bioinformatics & NGS Data Analysis<br />
            WGS · WES · RNA-Seq · Single Cell · AI Insights
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">Let's Collaborate</a>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className="s-white" style={{ padding: '80px 56px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">About Us</span>
          <h2 className="sec-title">Who We Are</h2>
          <p className="sec-sub" style={{ maxWidth: '900px', margin: '0 auto 56px' }}>
            Deepiotics is an advanced AI, Bioinformatics & NGS Data Analysis company specialising in transforming raw sequencing data into clinically and scientifically actionable insights.
          </p>
          <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '900px', margin: '0 auto 40px', lineHeight: 1.75 }}>
            Our expert team of computational biologists, bioinformaticians, and data scientists delivers precision genomics solutions across oncology, reproductive medicine, infectious disease, and research sectors — without requiring any wet-lab infrastructure on your end.
          </p>

          <div className="hero-proof" style={{ 
            opacity: 1, 
            display: 'flex', 
            gap: '32px', 
            justifyContent: 'center',
            paddingTop: '32px',
            borderTop: '1px solid rgba(30,58,138,0.1)',
            flexWrap: 'wrap'
          }}>
            <div>
              <div style={{ fontSize: '13px', color: '#64748b', letterSpacing: '0.03em', fontWeight: 500 }}>24-48h Avg. Turnaround</div>
            </div>
            <div>
              <div style={{ fontSize: '13px', color: '#64748b', letterSpacing: '0.03em', fontWeight: 500 }}>100% Dry-Lab - No Setup Required</div>
            </div>
            <div>
              <div style={{ fontSize: '13px', color: '#64748b', letterSpacing: '0.03em', fontWeight: 500 }}>5+ Analysis Domains</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Portfolio */}
      <section id="services" className="s-navy" style={{ padding: '80px 56px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Our Services</span>
          <h2 className="sec-title">Our Service Portfolio</h2>
          <p className="sec-sub">Four pillars of precision genomics — covering every stage of your NGS workflow.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '56px', maxWidth: '1200px', margin: '56px auto 0' }}>
            {[
              { icon: '🧬', title: 'NGS Data Analysis', desc: 'WGS, WES, Targeted Panels, Variant Calling, CNV & SV Detection — from raw FASTQ to ACMG-classified clinical reports, handled end-to-end with validated pipelines.' },
              { icon: '🔬', title: 'RNA Sequencing', desc: 'Bulk RNA-seq, differential expression, pathway analysis (KEGG, GO, Reactome), isoform quantification, and fusion detection — precision transcriptomics with publication-ready outputs.' },
              { icon: '🦠', title: 'Microbial & Metagenomics', desc: '16S rRNA profiling, shotgun metagenomics, taxonomic classification, and AMR gene detection — full-spectrum microbial genomics analysis on demand.' },
              { icon: '🤖', title: 'Advanced Bioinformatics', desc: 'Single-cell analysis, AI-driven insights, custom bioinformatics pipelines, and publication-quality statistical visualisations — for research and clinical programs that need to go further.' }
            ].map((item, idx) => (
              <div key={idx} className="svc-card" style={{ opacity: 1, transform: 'none' }}>
                <div className="svc-header">
                  <div className="svc-icon">{item.icon}</div>
                  <h3 className="svc-title">{item.title}</h3>
                </div>
                <p className="svc-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Pipeline */}
      <section id="pipeline" className="s-white" style={{ padding: '80px 56px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Our Process</span>
          <h2 className="sec-title">Our Analysis Pipeline</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '56px', maxWidth: '1200px', margin: '56px auto 0' }}>
            {[
              { num: '1', title: 'Raw FASTQ', desc: 'Your sequencing files received via secure encrypted transfer.' },
              { num: '2', title: 'QC & Trim', desc: 'FastQC quality assessment, adapter trimming, contamination checks.' },
              { num: '3', title: 'Alignment', desc: 'Reads mapped to reference genome using validated alignment tools.' },
              { num: '4', title: 'Variant Call', desc: 'GATK-based variant calling with clinical-grade somatic callers as appropriate.' },
              { num: '5', title: 'Annotation', desc: 'Multi-database annotation with ACMG/AMP classification and clinical context.' },
              { num: '6', title: 'Report', desc: 'Structured, white-labeled clinical report delivered under your brand.' }
            ].map((item) => (
              <div key={item.num} className="pain-card" style={{ opacity: 1, transform: 'none' }}>
                <div className="pain-header-row">
                  <div className="pain-num">{item.num}</div>
                  <h3 className="pain-title">{item.title}</h3>
                </div>
                <p className="pain-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IVF & Reproductive Genomics */}
      <section id="ivf" className="s-navy" style={{ padding: '80px 56px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Reproductive Genomics</span>
          <h2 className="sec-title">IVF & Reproductive Genomics Services</h2>
          <p className="sec-sub">Precision dry-lab genomic analysis purpose-built for IVF centers — empowering embryologists and fertility specialists with accurate, actionable results.</p>
          
          <div className="services-grid" style={{ marginTop: '56px' }}>
            {[
              { title: 'PGT-A', desc: 'Aneuploidy screening — chromosomal copy number analysis per embryo via NGS.' },
              { title: 'PGT-M', desc: 'Monogenic disorder detection — single-gene disease analysis for at-risk couples.' },
              { title: 'PGT-SR', desc: 'Structural rearrangement analysis for chromosomal translocation carriers.' },
              { title: 'Embryo Ranking', desc: 'In-silico quality scoring and ranking support to guide embryo selection.' },
              { title: 'IVF Failure Review', desc: 'Dry-lab RIF analysis — uncovering genomic factors behind implantation failure.' },
              { title: 'Implantation Support', desc: 'Endometrial receptivity and implantation potential bioinformatics assessment.' }
            ].map((item, idx) => (
              <div key={idx} className="svc-card" style={{ opacity: 1, transform: 'none' }}>
                <div className="svc-header">
                  <div className="svc-icon">🧪</div>
                  <h3 className="svc-title">{item.title}</h3>
                </div>
                <p className="svc-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px', display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Zero Infrastructure Setup Required</div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>24-48 Hour Report Delivery</div>
          </div>
        </div>
      </section>

      {/* Oncology Genomics */}
      <section id="oncology" className="s-white" style={{ padding: '80px 56px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Cancer Genomics</span>
          <h2 className="sec-title">Oncology Genomics & NGS Data Analysis</h2>
          <p className="sec-sub">End-to-end dry-lab oncology NGS solutions for cancer diagnostic labs, hospitals, and precision oncology centers — from raw FASTQ to structured clinical reports.</p>
          
          <div className="services-grid" style={{ marginTop: '56px' }}>
            {[
              { title: 'Cancer Panel Analysis', desc: '25-50 and 100+ gene panel interpretation with somatic variant calling.' },
              { title: 'Somatic & Germline', desc: 'Variant analysis with ACMG/AMP classification and structured evidence documentation.' },
              { title: 'Solid Tumor Analysis', desc: 'Tumor mutational burden (TMB), MSI status, and actionable somatic mutations.' },
              { title: 'WES - Oncology', desc: 'Whole exome sequencing analysis for comprehensive cancer mutation profiling.' },
              { title: 'CNV & Fusion Detection', desc: 'Copy number variation and gene fusion identification via bioinformatics analysis.' },
              { title: 'RNA-Seq Transcriptomics', desc: 'Expression profiling, fusion detection, and pathway analysis for cancer biology.' }
            ].map((item, idx) => (
              <div key={idx} className="svc-card" style={{ opacity: 1, transform: 'none' }}>
                <div className="svc-header">
                  <div className="svc-icon">🎗️</div>
                  <h3 className="svc-title">{item.title}</h3>
                </div>
                <p className="svc-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px', fontSize: '14px', color: '#64748b' }}>
            Therapy-Linked Variant Reporting · Evidence-based insights for oncologists — structured for clinical action.
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section id="clients" className="s-navy" style={{ padding: '80px 56px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Our Partners</span>
          <h2 className="sec-title">Who We Work With</h2>
          <p className="sec-sub">Trusted by research institutions, clinical labs, and industry leaders across the genomics ecosystem.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '56px', maxWidth: '1200px', margin: '56px auto 0' }}>
            {[
              'Research Labs',
              'Hospitals & Clinics',
              'Diagnostic Centers',
              'Pharma & Biotech',
              'Universities',
              'Startups & Innovators'
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '32px 24px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: '16px',
                color: '#fff',
                fontWeight: 600
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Deepiotics */}
      <section id="why" className="s-white" style={{ padding: '80px 56px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Why Us</span>
          <h2 className="sec-title">Why Choose Deepiotics?</h2>
          <p className="sec-sub">The dry-lab partner that delivers speed, accuracy, and zero operational burden.</p>
          
          <div className="services-grid" style={{ marginTop: '56px' }}>
            {[
              { icon: '⚡', title: 'Fast Turnaround', desc: '24-48 hours for most analyses. Your clients never wait — and their confidence in your lab grows with every report.' },
              { icon: '✓', title: 'Accurate & Reproducible', desc: 'Validated bioinformatics pipelines with rigorous QC at every step. Every result is defensible, every time.' },
              { icon: '🔒', title: 'Confidential & Secure', desc: 'De-identified analysis. Patient privacy guaranteed. Your data is protected at every stage.' },
              { icon: '🏷️', title: 'White-Label Reports', desc: 'Reports delivered under your lab or hospital branding. Your clients see only you.' },
              { icon: '💬', title: '24×7 Expert Support', desc: 'Email, WhatsApp & call support from our genomics team — any time you need us.' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'Affordable, clear pricing with no hidden infrastructure costs. You know what you\'re paying before you commit.' }
            ].map((item, idx) => (
              <div key={idx} className="svc-card" style={{ opacity: 1, transform: 'none' }}>
                <div className="svc-header">
                  <div className="svc-icon">{item.icon}</div>
                  <h3 className="svc-title">{item.title}</h3>
                </div>
                <p className="svc-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Together */}
      <section id="process" className="s-navy" style={{ padding: '80px 56px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Our Process</span>
          <h2 className="sec-title">How We Work Together</h2>
          <p className="sec-sub">A simple, seamless outsourcing model — you focus on patient care, we handle the data.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '56px' }}>
            {[
              { num: '01', title: 'Data Submission', desc: 'Securely share raw sequencing data (FASTQ/BAM) via encrypted transfer.' },
              { num: '02', title: 'Analysis Begins', desc: 'Our validated pipelines process your data immediately upon receipt.' },
              { num: '03', title: 'QC & Validation', desc: 'Rigorous quality checks applied at every bioinformatics step.' },
              { num: '04', title: 'Report Delivered', desc: 'White-labeled, structured report ready under your brand — on time.' }
            ].map((item) => (
              <div key={item.num} className="pain-card" style={{ opacity: 1, transform: 'none', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="pain-header-row">
                  <div className="pain-num" style={{ color: 'rgba(96,165,250,0.3)' }}>{item.num}</div>
                  <h3 className="pain-title" style={{ color: '#fff' }}>{item.title}</h3>
                </div>
                <p className="pain-body" style={{ color: 'rgba(255,255,255,0.7)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px', display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
            <span>Zero infrastructure setup</span>
            <span>·</span>
            <span>No wet-lab required</span>
            <span>·</span>
            <span>Fully confidential</span>
            <span>·</span>
            <span>Scalable to any volume</span>
          </div>
        </div>
      </section>

      {/* Compliance & Ethics */}
      <section id="compliance" className="s-white" style={{ padding: '80px 56px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">Trust & Security</span>
          <h2 className="sec-title">Compliance & Ethics</h2>
          <p className="sec-sub">Built on a foundation of scientific integrity, data security, and regulatory responsibility.</p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '56px' }}>
            {[
              'Patient Privacy',
              'Data Confidentiality',
              'De-identified Analysis',
              'Secure Data Handling',
              'Clinical Decision Independence',
              'Scientific Transparency',
              'Validated Workflows',
              'No Clinical Intervention',
              'Unbiased Reporting',
              'Regulatory Awareness'
            ].map((item, idx) => (
              <div key={idx} className="badge-pill" style={{ opacity: 1, background: 'rgba(29,78,216,0.1)', border: '1px solid rgba(29,78,216,0.2)', color: '#1d4ed8' }}>
                {item}
              </div>
            ))}
          </div>

          <p style={{ fontSize: '14px', color: '#64748b', maxWidth: '800px', margin: '40px auto 0', lineHeight: 1.75 }}>
            We operate as your silent dry-lab partner — all clinical decisions remain exclusively with your qualified medical professionals.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="s-navy" style={{ padding: '120px 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2 className="cta-h2" style={{ opacity: 1 }}>
            Let's Build Something <em>Extraordinary Together</em>
          </h2>
          <p className="cta-sub" style={{ opacity: 1 }}>
            Partner with Deepiotics as your trusted dry-lab backend — and deliver world-class genomic insights to your clients without the operational overhead.
          </p>
          
          <div className="cta-contact" style={{ opacity: 1, marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div><a href="mailto:ayan@deepiotics.com" style={{ color: '#60a5fa', textDecoration: 'none' }}>Email Us: ayan@deepiotics.com</a></div>
            <div><a href="http://www.deepiotics.com" style={{ color: '#60a5fa', textDecoration: 'none' }}>Website: www.deepiotics.com</a></div>
            <div><a href="https://wa.me/919753181862" style={{ color: '#60a5fa', textDecoration: 'none' }}>WhatsApp: +91 9753181862</a></div>
          </div>

          <div style={{ marginTop: '40px', display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
            <span>Free consultation available</span>
            <span>·</span>
            <span>Flexible engagement models</span>
            <span>·</span>
            <span>Get started in 24 hours</span>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default BioscienceNGSPage;
