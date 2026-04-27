import { ReactNode } from 'react';

interface GridLayoutProps {
  children: ReactNode;
  columns?: number;
  gap?: string;
  className?: string;
}

const GridLayout = ({ children, columns = 3, gap = '32px', className = '' }: GridLayoutProps) => {
  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${columns === 1 ? '100%' : columns === 2 ? '300px' : '280px'}, 1fr))`,
        gap: gap
      }}
    >
      {children}
    </div>
  );
};

export default GridLayout;
