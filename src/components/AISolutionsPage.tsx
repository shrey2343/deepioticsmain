import { useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AISolutionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Animate approach cards
    gsap.to('.approach-card', {
      opacity: 1,
      y: 0,
      stagger: 0.07,
      duration: 0.55,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.approach-grid',
        start: 'top 72%'
      }
    });

    // Animate service cards
    gsap.to('.ai-service-card', {
      opacity: 1,
      y: 0,
      stagger: 0.07,
      duration: 0.55,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.services-container',
        start: 'top 72%'
      }
    });

    // Animate trust point cards
    gsap.to('.trust-point-card', {
      opacity: 1,
      y: 0,
      stagger: 0.07,
      duration: 0.55,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.trust-points-grid',
        start: 'top 72%'
      }
    });
  }, []);

  const services = [
    {
      id: 'ai-qa',
      featured: true,
      title: 'AI QA & Software Testing',
      headline: 'A product that does not work reliably is not a product - it is a liability.',
      description: 'Whether you have built with AI or built traditionally, quality assurance is what stands between your development effort and your users trust. We provide comprehensive software testing services for both AI-developed products and traditionally built applications.',
      capabilities: [
        'Functional and regression testing for web, mobile, and enterprise applications',
        'AI model validation - accuracy, bias, consistency, and output reliability',
        'Performance and load testing under real-world traffic conditions',
        'API testing and integration verification',
        'End-to-end test automation - build once, run continuously',
        'AI-specific QA - hallucination testing, prompt injection, and edge case detection',
        'UAT (User Acceptance Testing) planning and execution'
      ],
      impact: 'Fewer bugs in production. Faster releases with confidence. AI that behaves the way you designed it to.'
    },
    {
      id: 'ai-agents',
      title: 'AI Agent Development',
      headline: 'Your business runs on decisions and interactions - thousands of them every day.',
      description: 'AI agents handle the repetitive ones so your team can focus on the ones that actually need human judgment. We build custom AI agents that work autonomously across your business.',
      capabilities: [
        'Conversational AI chatbots and voice assistants',
        'Autonomous task execution and intelligent decision-making',
        'Multi-channel deployment - web, mobile, messaging platforms',
        'Context-aware, personalised interactions',
        'Full integration with your existing business systems'
      ],
      impact: 'Clients report up to 60% reduction in operational costs within 90 days of deployment.'
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning Solutions',
      headline: 'You have data. Most businesses do. The question is whether it is making you money or just sitting in a database.',
      description: 'Machine learning turns your historical data into a competitive advantage - one that gets smarter the more it runs.',
      capabilities: [
        'Custom model development and training on your data',
        'Predictive analytics and business forecasting',
        'Computer vision and image recognition systems',
        'Natural language processing and text intelligence',
        'Recommendation engines and anomaly detection'
      ],
      impact: 'Better predictions. Fewer surprises. Decisions made on evidence, not instinct.'
    },
    {
      id: 'business-intelligence',
      title: 'Business Intelligence & Analytics',
      headline: 'If your data lives in spreadsheets, siloed tools, and monthly reports that are already out of date - you are not running on information.',
      description: 'We fix that. We build BI and analytics systems that give decision-makers a live, accurate view of what is happening in their business.',
      capabilities: [
        'Real-time dashboards and KPI reporting',
        'Data warehousing and ETL pipelines',
        'Advanced visualisation and self-service BI tools',
        'Predictive and prescriptive analytics',
        'Performance tracking and executive reporting'
      ],
      impact: 'From gut-feel decisions to data-driven ones - in weeks, not quarters.'
    },
    {
      id: 'process-automation',
      title: 'Process Automation',
      headline: 'If your team spends hours on tasks that follow the same rules every time - those hours belong to AI.',
      description: 'Every manual step we automate is time your people can spend on work that actually needs them.',
      capabilities: [
        'Robotic Process Automation (RPA) for repetitive workflows',
        'Intelligent document processing and data extraction',
        'Workflow optimisation and approval automation',
        'Legacy system integration and business rules engines',
        'Exception handling, monitoring, and audit trails'
      ],
      impact: 'Up to 80% reduction in processing time. Consistent outputs. Zero rework.'
    },
    {
      id: 'healthcare-ai',
      title: 'AI for Healthcare',
      headline: 'Healthcare runs on information - patient data, clinical notes, imaging, scheduling, compliance.',
      description: 'The problem is not that the information does not exist. It is that too much of it gets processed slowly, manually, or not at all.',
      capabilities: [
        'AI-powered patient triage and symptom assessment',
        'Automated medical documentation and clinical notes',
        'Predictive analytics for readmission risk',
        'Intelligent appointment scheduling and patient reminders',
        'Medical imaging analysis and diagnostics support',
        'HIPAA-compliant data handling and system integration'
      ],
      impact: 'Less paperwork. Faster diagnoses. Clinicians spending more time with patients.'
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering',
      headline: 'AI is only as good as the data it runs on.',
      description: 'Dirty data, siloed pipelines, and fragile infrastructure do not just slow things down - they produce wrong answers.',
      capabilities: [
        'Data pipeline architecture and ETL engineering',
        'Real-time data streaming and event processing',
        'Data quality, governance, and observability',
        'Cloud, on-premise, and hybrid data infrastructure',
        'Data lake and warehouse design at enterprise scale'
      ],
      impact: 'A data foundation your AI can trust - and your business can scale on.'
    }
  ];

  const stats = [
    { number: '1,000+', label: 'AI implementations delivered' },
    { number: '25+', label: 'Industries served' },
    { number: '50+', label: 'AI specialists, engineers, and data scientists' },
    { number: '6 months', label: 'Average time to measurable ROI' }
  ];

  const trustPoints = [
    {
      title: 'We start with your problem, not our product.',
      description: 'Every engagement begins with a deep understanding of your business. We recommend what you need - including telling you when a simpler solution will serve you better than AI.'
    },
    {
      title: 'We build for production, not for presentation.',
      description: 'Our solutions are tested, monitored, and maintained in live environments. You get something that works at scale - not something that only works in demos.'
    },
    {
      title: 'You own everything we build.',
      description: 'Full IP ownership. Full source code. No lock-in. The work we deliver is yours - to run, to modify, to hand to another team if you ever choose to.'
    }
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        padding: '100px 24px 80px',
        background: 'linear-gradient(180deg, rgba(2,13,42,1) 0%, rgba(1,8,28,0.98) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.4
        }}>
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(29,78,216,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(147,51,234,0.25) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(70px)'
          }} />
        </div>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '24px',
            lineHeight: 1.2,
            fontFamily: 'Plus Jakarta Sans, sans-serif'
          }}>
             <span style={{
              background: 'linear-gradient(to right, #60a5fa, #c084fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>The Right AI Solution Exists for Every Problem.Let's Find Yours.</span>
          </h1>
          <p style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '40px',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: 1.6
          }}>
            We do not offer AI for the sake of AI. Every solution we build starts with your specific challenge - and ends with a measurable result you can point to.
          </p>
          <a
            href="https://tidycal.com/team/deepiotics-team/call"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              background: 'linear-gradient(to right, #2563eb, #9333ea)',
              color: '#fff',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 0 32px rgba(37,99,235,0.5)',
              transition: 'all 0.3s',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 0 48px rgba(29,78,216,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 32px rgba(29,78,216,0.4)';
            }}
          >
            Schedule Your Free Consultation
            <ArrowRight style={{ width: '20px', height: '20px' }} />
          </a>
          <p style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.6)',
            marginTop: '16px'
          }}>
            No commitment. Walk away with a clear recommendation for your business.
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section style={{
        padding: '80px 24px',
        background: 'rgba(2,13,42,0.5)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '16px',
            textAlign: 'center',
            fontFamily: 'Plus Jakarta Sans, sans-serif'
          }}>
            End-to-End AI. From First Conversation to Production and Beyond.
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '60px',
            textAlign: 'center',
            maxWidth: '1100px',
            margin: '0 auto 60px',
            lineHeight: 1.6
          }}>
            Most AI projects fail not because the technology does not work - but because of poor strategy, rushed development, or zero support after launch. We have built our entire process around preventing those three failures.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }} className="approach-grid">
            {[
              {
                title: 'Discovery & Strategy',
                description: 'We map your business, identify the highest-impact AI opportunities, and build a roadmap before a single line of code is written. You know exactly what you are getting and why before we start.'
              },
              {
                title: 'Development & Deployment',
                description: 'Production-ready AI - not prototypes. We build, test, and deploy solutions that perform under real load, with real users, in real business conditions.'
              },
              {
                title: 'Support & Optimisation',
                description: 'AI is not a one-time project. We monitor, fine-tune, and improve your systems continuously - so they perform better in month six than they did on launch day.'
              }
            ].map((step, index) => (
              <div key={index} style={{
                padding: '32px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.3s',
                opacity: 0,
                transform: 'translateY(28px)'
              }}
              className="approach-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(29,78,216,0.3)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#fff',
                  marginBottom: '16px',
                  fontFamily: 'Plus Jakarta Sans, sans-serif'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.6
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section style={{
        padding: '80px 24px',
        background: 'var(--bg-primary)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '16px',
            textAlign: 'center',
            fontFamily: 'Plus Jakarta Sans, sans-serif'
          }}>
            Our AI Solutions
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '60px',
            textAlign: 'center'
          }}>
            Seven specialisations. One team. Every engagement starts with your business problem - not our service catalogue.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }} className="services-container">
            {services.map((service) => (
              <div
                key={service.id}
                className="ai-service-card"
                style={{
                  padding: '40px',
                  background: '#fff',
                  borderRadius: '16px',
                  border: service.featured 
                    ? '2px solid rgba(29,78,216,0.3)' 
                    : '1px solid rgba(226,232,240,0.5)',
                  transition: 'all 0.3s',
                  position: 'relative',
                  overflow: 'hidden',
                  opacity: 0,
                  transform: 'translateY(28px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 48px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {service.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    padding: '6px 16px',
                    background: 'linear-gradient(135deg, #1d4ed8, #9333ea)',
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: 600,
                    borderRadius: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Featured
                  </div>
                )}

                <h3 style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#1e293b',
                  marginBottom: '16px',
                  fontFamily: 'Plus Jakarta Sans, sans-serif'
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '18px',
                  color: '#334155',
                  marginBottom: '16px',
                  fontWeight: 500,
                  lineHeight: 1.5
                }}>
                  {service.headline}
                </p>

                <p style={{
                  fontSize: '16px',
                  color: '#64748b',
                  marginBottom: '32px',
                  lineHeight: 1.7
                }}>
                  {service.description}
                </p>

                <div style={{ marginBottom: '32px' }}>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#1e293b',
                    marginBottom: '16px',
                    fontFamily: 'Plus Jakarta Sans, sans-serif'
                  }}>
                    What We {service.id === 'ai-qa' ? 'Test' : 'Build'}
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}>
                    {service.capabilities.map((capability, idx) => (
                      <li key={idx} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        fontSize: '15px',
                        color: '#475569',
                        lineHeight: 1.6
                      }}>
                        <CheckCircle style={{
                          width: '20px',
                          height: '20px',
                          color: '#10b981',
                          flexShrink: 0,
                          marginTop: '2px'
                        }} />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{
                  padding: '20px',
                  background: 'rgba(6,182,212,0.08)',
                  borderLeft: '4px solid #06b6d4',
                  borderRadius: '8px'
                }}>
                  <p style={{
                    fontSize: '16px',
                    color: '#0f172a',
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: 1.6
                  }}>
                    {service.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Deepiotics Section */}
      <section style={{
        padding: '80px 24px',
        background: 'rgba(2,13,42,0.5)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '60px',
            textAlign: 'center',
            fontFamily: 'Plus Jakarta Sans, sans-serif'
          }}>
            What Makes Our AI Different
          </h2>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            marginBottom: '80px'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '24px'
              }}>
                <div style={{
                  fontSize: 'clamp(36px, 5vw, 48px)',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #60a5fa, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '8px',
                  fontFamily: 'Plus Jakarta Sans, sans-serif'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.4
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Points */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }} className="trust-points-grid">
            {trustPoints.map((point, index) => (
              <div key={index} style={{
                padding: '32px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.3s',
                opacity: 0,
                transform: 'translateY(28px)'
              }}
              className="trust-point-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(29,78,216,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#fff',
                  marginBottom: '12px',
                  fontFamily: 'Plus Jakarta Sans, sans-serif'
                }}>
                  {point.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(180deg, rgba(2,13,42,1) 0%, rgba(1,8,28,1) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(29,78,216,0.4) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(100px)'
          }} />
        </div>

        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '24px',
            fontFamily: 'Plus Jakarta Sans, sans-serif'
          }}>
            You have Read the Menu. Now Let's Talk About Your Order.
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '40px',
            lineHeight: 1.6
          }}>
            Every engagement starts with one conversation. Tell us the problem. We will tell you exactly how we would approach it - and whether AI is the right tool for the job.
          </p>
          <a
            href="https://tidycal.com/team/deepiotics-team/call"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              background: 'linear-gradient(to right, #2563eb, #9333ea)',
              color: '#fff',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 0 32px rgba(37,99,235,0.5)',
              transition: 'all 0.3s',
              border: 'none',
              cursor: 'pointer',
              marginBottom: '24px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 0 48px rgba(37,99,235,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 32px rgba(29,78,216,0.4)';
            }}
          >
            Schedule Your Free Consultation
            <ArrowRight style={{ width: '20px', height: '20px' }} />
          </a>
          <p style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '32px'
          }}>
            No obligation. Straight answers. A clear recommendation you can act on.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
            fontSize: '15px',
            color: 'rgba(255,255,255,0.7)'
          }}>
            <div>
              <strong style={{ color: '#fff' }}>Email:</strong>{' '}
              <a href="mailto:contact@deepiotics.com" style={{
                color: '#60a5fa',
                textDecoration: 'none'
              }}>
                contact@deepiotics.com
              </a>
            </div>
            <div style={{ textAlign: 'center' }}>
              <strong style={{ color: '#fff' }}>Office:</strong>{' '}
              204, Atulya IT Park, Indore, MP 452016, India
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolutionsPage;
