import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  showHero?: boolean;
}

const PageLayout = ({ children, title, subtitle, showHero = true }: PageLayoutProps) => {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {showHero && title && (
        <section style={{
          padding: '64px 24px 60px',
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
              marginBottom: subtitle ? '24px' : '0',
              lineHeight: 1.2,
              fontFamily: 'Plus Jakarta Sans, sans-serif'
            }}>
              {title}
            </h1>
            {subtitle && (
              <p style={{
                fontSize: 'clamp(16px, 2vw, 20px)',
                color: 'rgba(255,255,255,0.8)',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: 1.6
              }}>
                {subtitle}
              </p>
            )}
          </div>
        </section>
      )}

      <section style={{
        padding: '80px 24px',
        background: showHero ? 'rgba(2,13,42,0.5)' : 'var(--bg-primary)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {children}
        </div>
      </section>
    </div>
  );
};

export default PageLayout;
