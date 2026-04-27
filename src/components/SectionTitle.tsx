import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ children, subtitle, centered = true }: SectionTitleProps) => {
  return (
    <div style={{
      marginBottom: '48px',
      textAlign: centered ? 'center' : 'left'
    }}>
      <h2 style={{
        fontSize: 'clamp(28px, 4vw, 42px)',
        fontWeight: 700,
        color: '#fff',
        marginBottom: subtitle ? '16px' : '0',
        fontFamily: 'Plus Jakarta Sans, sans-serif'
      }}>
        {children}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: '18px',
          color: 'rgba(255,255,255,0.7)',
          maxWidth: centered ? '900px' : '100%',
          margin: centered ? '0 auto' : '0',
          lineHeight: 1.6
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
