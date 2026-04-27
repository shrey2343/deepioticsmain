import { ReactNode } from 'react';

interface ContentCardProps {
  children: ReactNode;
  featured?: boolean;
  className?: string;
}

const ContentCard = ({ children, featured = false, className = '' }: ContentCardProps) => {
  return (
    <div
      className={className}
      style={{
        padding: '32px',
        background: featured 
          ? 'linear-gradient(135deg, rgba(29,78,216,0.1), rgba(147,51,234,0.05))' 
          : 'rgba(255,255,255,0.03)',
        borderRadius: '16px',
        border: featured 
          ? '2px solid rgba(29,78,216,0.3)' 
          : '1px solid rgba(255,255,255,0.08)',
        transition: 'all 0.3s',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 48px rgba(0,0,0,0.3)';
        e.currentTarget.style.background = featured 
          ? 'linear-gradient(135deg, rgba(29,78,216,0.15), rgba(147,51,234,0.08))' 
          : 'rgba(255,255,255,0.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.background = featured 
          ? 'linear-gradient(135deg, rgba(29,78,216,0.1), rgba(147,51,234,0.05))' 
          : 'rgba(255,255,255,0.03)';
      }}
    >
      {children}
    </div>
  );
};

export default ContentCard;
