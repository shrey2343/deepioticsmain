import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const ThemedNavigation: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', window.scrollY > 60);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isServicesDropdownOpen && !target.closest('.services-dropdown-container')) {
        setIsServicesDropdownOpen(false);
      }
    };

    if (window.innerWidth >= 1024) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesDropdownOpen]);

  return (
    <nav id="navbar" className="new-nav" ref={navRef}>
      <a href="/">
        <img src="/LogoDeepiotics1.png" alt="Deepiotics" className="nav-logo" />
      </a>

      {/* Desktop Navigation */}
      <ul className="nav-links hidden lg:flex">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li className="relative services-dropdown-container">
          <button 
            onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
            className="flex items-center gap-1"
            style={{ 
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              color: 'var(--text-light)',
              fontSize: '13px',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              fontWeight: 500,
              transition: 'color 0.25s',
              position: 'relative',
              paddingBottom: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <span>Services</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isServicesDropdownOpen && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              marginTop: '8px',
              width: '240px',
              background: 'rgba(2,13,42,0.98)',
              borderRadius: '8px',
              boxShadow: '0 4px 32px rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '8px 0',
              zIndex: 50
            }}>
              <a
                href="/AI-business-growth"
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  color: 'var(--text-light)',
                  fontSize: '13px',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(29,78,216,0.1)';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-light)';
                }}
                onClick={() => setIsServicesDropdownOpen(false)}
              >
                AI Business Growth Suite
              </a>
              <a
                href="/ai-solutions"
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  color: 'var(--text-light)',
                  fontSize: '13px',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(29,78,216,0.1)';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-light)';
                }}
                onClick={() => setIsServicesDropdownOpen(false)}
              >
                AI Solutions
              </a>
              <a
                href="/bioai-lab"
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  color: 'var(--text-light)',
                  fontSize: '13px',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(29,78,216,0.1)';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-light)';
                }}
                onClick={() => setIsServicesDropdownOpen(false)}
              >
                BioAI Lab
              </a>
              <a
                href="/bioscience-ngs"
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  color: 'var(--text-light)',
                  fontSize: '13px',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(29,78,216,0.1)';
                  e.currentTarget.style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-light)';
                }}
                onClick={() => setIsServicesDropdownOpen(false)}
              >
                Bioscience & NGS Partnership
              </a>
            </div>
          )}
        </li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/media">Media</a></li>
        <li><a href="/publication">Publication</a></li>
      </ul>

      <a 
        href="https://tidycal.com/team/deepiotics-team/call"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta hidden lg:block"
      >
        Get Free AI Strategy Session
      </a>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden"
        style={{
          padding: '8px',
          minWidth: '44px',
          minHeight: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
      >
        {isMenuOpen ? (
          <X className="w-6 h-6" style={{ color: 'var(--text-light)' }} />
        ) : (
          <Menu className="w-6 h-6" style={{ color: 'var(--text-light)' }} />
        )}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(2,13,42,0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '16px',
          boxShadow: '0 4px 32px rgba(0,0,0,0.4)'
        }} className="lg:hidden">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <a
              href="/"
              style={{
                padding: '12px 8px',
                color: 'var(--text-light)',
                fontSize: '14px',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(29,78,216,0.1)';
                e.currentTarget.style.color = '#60a5fa';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--text-light)';
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              style={{
                padding: '12px 8px',
                color: 'var(--text-light)',
                fontSize: '14px',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(29,78,216,0.1)';
                e.currentTarget.style.color = '#60a5fa';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--text-light)';
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            
            <div>
              <button 
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                style={{
                  width: '100%',
                  padding: '12px 8px',
                  color: 'var(--text-light)',
                  fontSize: '14px',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: 'all 0.2s',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textAlign: 'left'
                }}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesDropdownOpen && (
                <div style={{ marginTop: '4px', marginLeft: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <a
                    href="/AI-business-growth"
                    style={{
                      padding: '12px 16px',
                      color: 'var(--text-light)',
                      fontSize: '14px',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(29,78,216,0.1)';
                      e.currentTarget.style.color = '#60a5fa';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--text-light)';
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AI Business Growth Suite
                  </a>
                  <a
                    href="/ai-solutions"
                    style={{
                      padding: '12px 16px',
                      color: 'var(--text-light)',
                      fontSize: '14px',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(29,78,216,0.1)';
                      e.currentTarget.style.color = '#60a5fa';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--text-light)';
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AI Solutions
                  </a>
                  <a
                    href="/bioai-lab"
                    style={{
                      padding: '12px 16px',
                      color: 'var(--text-light)',
                      fontSize: '14px',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(29,78,216,0.1)';
                      e.currentTarget.style.color = '#60a5fa';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--text-light)';
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    BioAI Lab
                  </a>
                  <a
                    href="/bioscience-ngs"
                    style={{
                      padding: '12px 16px',
                      color: 'var(--text-light)',
                      fontSize: '14px',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(29,78,216,0.1)';
                      e.currentTarget.style.color = '#60a5fa';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--text-light)';
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Bioscience & NGS Partnership
                  </a>
                </div>
              )}
            </div>

            <a
              href="/portfolio"
              style={{
                padding: '12px 8px',
                color: 'var(--text-light)',
                fontSize: '14px',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(29,78,216,0.1)';
                e.currentTarget.style.color = '#60a5fa';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--text-light)';
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="/media"
              style={{
                padding: '12px 8px',
                color: 'var(--text-light)',
                fontSize: '14px',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(29,78,216,0.1)';
                e.currentTarget.style.color = '#60a5fa';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--text-light)';
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Media
            </a>
            <a
              href="/publication"
              style={{
                padding: '12px 8px',
                color: 'var(--text-light)',
                fontSize: '14px',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(29,78,216,0.1)';
                e.currentTarget.style.color = '#60a5fa';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--text-light)';
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Publication
            </a>
            <a
              href="https://tidycal.com/team/deepiotics-team/call"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: '8px',
                padding: '12px 16px',
                background: 'linear-gradient(135deg, #1d4ed8, #0f2560)',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '0 0 24px rgba(29,78,216,0.35)',
                transition: 'all 0.3s'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Get Free AI Strategy Session
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ThemedNavigation;
