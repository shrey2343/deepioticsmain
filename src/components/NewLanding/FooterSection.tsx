import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <footer className="new-footer">
      <div>
        <img 
          src="/LogoDeepiotics1.png" 
          alt="Deepiotics" 
          style={{ height: '34px', objectFit: 'contain', display: 'block', marginBottom: '12px' }} 
        />
        <div className="footer-copy">© 2026 Deepiotics. All rights reserved.</div>
        <div className="footer-copy" style={{ marginTop: '3px' }}>
          204, Atulya IT Park, Indore, MP 452016, India
        </div>
      </div>
      <div className="footer-right">
        <div>Response within 2 hours</div>
        <a href="mailto:contact@deepiotics.com">contact@deepiotics.com</a>
      </div>
    </footer>
  );
};

export default FooterSection;
