import React from 'react';

const MarqueeSection: React.FC = () => {
  const items = [
    'AI Business Growth Suite',
    'AI Marketing Agent',
    'AI Sales Agent',
    'Machine Learning',
    'Genomics AI',
    'QA Automation',
    'AI Agents',
    'Bioinformatics',
    'Web & App Development',
    'Business Intelligence'
  ];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        <span className="marquee-item">
          {items.map((item, i) => (
            <React.Fragment key={i}>
              {item} <span className="marquee-sep">✦</span>
            </React.Fragment>
          ))}
        </span>
        <span className="marquee-item">
          {items.map((item, i) => (
            <React.Fragment key={i}>
              {item} <span className="marquee-sep">✦</span>
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );
};

export default MarqueeSection;
