import { Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, rgba(2,13,42,0.98) 0%, rgba(1,8,28,1) 100%)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {/* Moving gradient orbs */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '25%',
          width: '384px',
          height: '384px',
          background: 'linear-gradient(to right, rgba(29,78,216,0.2), rgba(6,182,212,0.2))',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'pulse 4s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          right: '25%',
          width: '384px',
          height: '384px',
          background: 'linear-gradient(to right, rgba(147,51,234,0.2), rgba(236,72,153,0.2))',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'pulse 4s ease-in-out infinite 2s'
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '288px',
          height: '288px',
          background: 'linear-gradient(to right, rgba(79,70,229,0.15), rgba(59,130,246,0.15))',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse 4s ease-in-out infinite 4s'
        }} />
        
        {/* Animated grid pattern */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '50px 50px',
            animation: 'float 20s ease-in-out infinite'
          }} />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>

      <div style={{
        position: 'relative',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '40px 16px 48px'
      }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '48px'
          }}
        >
          {/* Company Info */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <img 
                src="/LogoDeepiotics1.png" 
                alt="Deepiotics Logo" 
                style={{
                  height: '64px',
                  width: 'auto',
                  marginBottom: '8px'
                }}
                className="h-48 sm:h-56 md:h-64"
              />
              <div style={{
                height: '6px',
                width: '80px',
                background: 'linear-gradient(to right, #3b82f6, #a855f7, #ec4899)',
                borderRadius: '9999px'
              }} className="sm:w-100" />
            </div>
            <p style={{
              color: '#d1d5db',
              marginBottom: '24px',
              lineHeight: '1.6',
              fontSize: '14px'
            }} className="text-xs sm:text-sm">
              Leading AI development company specializing in custom machine learning solutions, enterprise AI automation, and intelligent business transformation for 100+ companies worldwide.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}>
              <a
                href="https://www.linkedin.com/company/deepiotics"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2563eb';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Linkedin style={{ width: '20px', height: '20px' }} />
              </a>
              <a
                href="https://share.google/T98ArPPYIYaTLTVZ9"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2563eb';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Facebook style={{ width: '20px', height: '20px' }} />
              </a>
              <a
                href="https://share.google/SHS9rC3Rumrp9DahO"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#db2777';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Instagram style={{ width: '20px', height: '20px' }} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{
              color: '#fff',
              fontWeight: 'bold',
              marginBottom: '24px',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                width: '4px',
                height: '24px',
                background: 'linear-gradient(to bottom, #3b82f6, #a855f7)',
                borderRadius: '9999px',
                marginRight: '12px'
              }} />
              AI Development Services
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Custom AI Development',
                'Machine Learning Services',
                'AI-Powered Data Analytics',
                'AI Security & Compliance',
                'AI Process Automation',
                'Enterprise AI Integration'
              ].map((service) => (
                <li key={service}>
                  <a href="/services" style={{
                    color: '#9ca3af',
                    fontSize: '14px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#fff';
                    const dot = e.currentTarget.querySelector('span');
                    if (dot) (dot as HTMLElement).style.width = '8px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#9ca3af';
                    const dot = e.currentTarget.querySelector('span');
                    if (dot) (dot as HTMLElement).style.width = '6px';
                  }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      background: '#3b82f6',
                      borderRadius: '9999px',
                      marginRight: '8px',
                      transition: 'width 0.3s'
                    }} />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              color: '#fff',
              fontWeight: 'bold',
              marginBottom: '24px',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                width: '4px',
                height: '24px',
                background: 'linear-gradient(to bottom, #3b82f6, #a855f7)',
                borderRadius: '9999px',
                marginRight: '12px'
              }} />
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Services', href: '/services' },
                { label: 'About Us', href: '/about' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} style={{
                    color: '#9ca3af',
                    fontSize: '14px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#fff';
                    const dot = e.currentTarget.querySelector('span');
                    if (dot) (dot as HTMLElement).style.width = '8px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#9ca3af';
                    const dot = e.currentTarget.querySelector('span');
                    if (dot) (dot as HTMLElement).style.width = '6px';
                  }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      background: '#a855f7',
                      borderRadius: '9999px',
                      marginRight: '8px',
                      transition: 'width 0.3s'
                    }} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{
              color: '#fff',
              fontWeight: 'bold',
              marginBottom: '24px',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                width: '4px',
                height: '24px',
                background: 'linear-gradient(to bottom, #3b82f6, #a855f7)',
                borderRadius: '9999px',
                marginRight: '12px'
              }} />
              Contact Our AI Experts
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#2563eb'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                  <MapPin style={{ width: '16px', height: '16px', color: '#60a5fa' }} />
                </div>
                <div style={{ fontSize: '14px', color: '#d1d5db' }}>
                  <p style={{ fontWeight: 500, color: '#fff', marginBottom: '4px' }}>Headquarters</p>
                  <p style={{ margin: 0 }}>204, Atulya IT Park</p>
                  <p style={{ margin: 0 }}>Indore, MP 452016, India</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#a855f7'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                  <Mail style={{ width: '16px', height: '16px', color: '#c084fc' }} />
                </div>
                <div style={{ fontSize: '14px', color: '#d1d5db' }}>
                  <p style={{ fontWeight: 500, color: '#fff', marginBottom: '4px' }}>Email Us</p>
                  <a href="mailto:contact@deepiotics.com" style={{
                    color: '#d1d5db',
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}>
                    contact@deepiotics.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          marginTop: '32px',
          paddingTop: '24px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}
          className="md:flex-row md:justify-between md:gap-0">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
            }}
            className="md:flex-row md:gap-24">
              <div style={{
                color: '#9ca3af',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textAlign: 'center'
              }} className="text-xs sm:text-sm">
                <span style={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(to right, #60a5fa, #c084fc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  © 2025 Deepiotics Pvt. Ltd. All rights reserved
                </span>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              fontSize: '14px'
            }} className="text-xs sm:text-sm sm:gap-16 md:gap-24">
              <a href="#" style={{
                color: '#9ca3af',
                textDecoration: 'none',
                position: 'relative',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff';
                const underline = e.currentTarget.querySelector('span');
                if (underline) (underline as HTMLElement).style.width = '100%';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#9ca3af';
                const underline = e.currentTarget.querySelector('span');
                if (underline) (underline as HTMLElement).style.width = '0';
              }}>
                Privacy Policy
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: '2px',
                  background: 'linear-gradient(to right, #3b82f6, #a855f7)',
                  transition: 'width 0.3s'
                }} />
              </a>
              <a href="#" style={{
                color: '#9ca3af',
                textDecoration: 'none',
                position: 'relative',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff';
                const underline = e.currentTarget.querySelector('span');
                if (underline) (underline as HTMLElement).style.width = '100%';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#9ca3af';
                const underline = e.currentTarget.querySelector('span');
                if (underline) (underline as HTMLElement).style.width = '0';
              }}>
                Terms of Service
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: '2px',
                  background: 'linear-gradient(to right, #3b82f6, #a855f7)',
                  transition: 'width 0.3s'
                }} />
              </a>
              <a href="#" style={{
                color: '#9ca3af',
                textDecoration: 'none',
                position: 'relative',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff';
                const underline = e.currentTarget.querySelector('span');
                if (underline) (underline as HTMLElement).style.width = '100%';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#9ca3af';
                const underline = e.currentTarget.querySelector('span');
                if (underline) (underline as HTMLElement).style.width = '0';
              }}>
                Cookie Policy
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: '2px',
                  background: 'linear-gradient(to right, #3b82f6, #a855f7)',
                  transition: 'width 0.3s'
                }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
