import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Brain, ChevronDown, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isInsightsDropdownOpen, setIsInsightsDropdownOpen] = useState(false);
  const [isAccountingSubmenuOpen, setIsAccountingSubmenuOpen] = useState(false);
  const [isAccountingSubmenuOpenMobile, setIsAccountingSubmenuOpenMobile] = useState(false);
  const isHomePage = window.location.pathname === '/';
  
  const servicesRef = useRef<HTMLDivElement>(null);
  const insightsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
        setIsAccountingSubmenuOpen(false);
      }
      if (insightsRef.current && !insightsRef.current.contains(event.target as Node)) {
        setIsInsightsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close one dropdown when opening another
  const handleServicesToggle = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsInsightsDropdownOpen(false);
  };

  const handleInsightsToggle = () => {
    setIsInsightsDropdownOpen(!isInsightsDropdownOpen);
    setIsServicesDropdownOpen(false);
    setIsAccountingSubmenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center">
              <img 
                src="/LogoDeepiotics.png"
                alt="Deepiotics Logo" 
                className="h-8 sm:h-10 w-auto transition-none"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            <a href="/" className="font-medium text-sm xl:text-base transition-colors hover:text-blue-600 text-gray-700">
              Home
            </a>
            <a href="/about" className="font-medium text-sm xl:text-base transition-colors hover:text-blue-600 text-gray-700">
              About Us
            </a>
            <div className="relative" ref={servicesRef}>
              <button 
                onClick={handleServicesToggle}
                className="font-medium text-sm xl:text-base transition-colors hover:text-blue-600 flex items-center space-x-1 text-gray-700"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <a
                    href="/linkedin-service"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    AI LinkedIn Growth
                  </a>
                  <a
                    href="/AI-business-growth"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    AI Business Growth Suite
                  </a>
                  <a
                    href="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    All Services
                  </a>
                  
                  <div className="relative group">
                    <div
                      className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                      onMouseEnter={() => setIsAccountingSubmenuOpen(true)}
                      onMouseLeave={() => setIsAccountingSubmenuOpen(false)}
                    >
                      <span>Accounting</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    
                    {isAccountingSubmenuOpen && (
                      <div 
                        className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                        onMouseEnter={() => setIsAccountingSubmenuOpen(true)}
                        onMouseLeave={() => setIsAccountingSubmenuOpen(false)}
                      >
                        <a
                          href="/accounting/us-accounting"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          US Accounting
                        </a>
                        <a
                          href="/accounting/truck-logistics"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          Truck & Logistics
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <a href="/portfolio" className="font-medium text-sm xl:text-base transition-colors hover:text-blue-600 text-gray-700">
              Portfolio
            </a>
            <div className="relative" ref={insightsRef}>
              <button 
                onClick={handleInsightsToggle}
                className="font-medium text-sm xl:text-base transition-colors hover:text-blue-600 flex items-center space-x-1 text-gray-700"
              >
                <span>Insights</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isInsightsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isInsightsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <a
                    href="/blog"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Blog
                  </a>
                  <a
                    href="/careers"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Careers
                  </a>
                  <a
                    href="/contact"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Contact
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://tidycal.com/team/deepiotics-team/call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg font-medium text-sm xl:text-base hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 inline-block whitespace-nowrap"
            >
              Get Free AI Strategy Session
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-b-lg shadow-lg">
            <div className="flex flex-col space-y-1 px-4">
              <a
                href="/"
                className="font-medium transition-colors hover:text-blue-600 text-gray-700 py-3 px-2 rounded-lg hover:bg-blue-50 active:bg-blue-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="font-medium transition-colors hover:text-blue-600 text-gray-700 py-3 px-2 rounded-lg hover:bg-blue-50 active:bg-blue-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <div>
                <button 
                  onClick={() => {
                    setIsServicesDropdownOpen(!isServicesDropdownOpen);
                    setIsInsightsDropdownOpen(false);
                  }}
                  className="font-medium transition-colors hover:text-blue-600 text-gray-700 flex items-center justify-between w-full py-3 px-2 rounded-lg hover:bg-blue-50 active:bg-blue-100"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesDropdownOpen && (
                  <div className="mt-1 ml-2 space-y-1">
                    <a
                      href="/linkedin-service"
                      className="block py-3 px-4 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50 active:bg-blue-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      AI LinkedIn Growth
                    </a>
                    <a
                      href="/AI-business-growth"
                      className="block py-3 px-4 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50 active:bg-blue-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      AI Business Growth Suite
                    </a>
                    <a
                      href="/services"
                      className="block py-3 px-4 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50 active:bg-blue-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      All Services
                    </a>
                    
                    <div>
                      <button
                        onClick={() => setIsAccountingSubmenuOpenMobile(!isAccountingSubmenuOpenMobile)}
                        className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50 active:bg-blue-100"
                      >
                        <span>Accounting</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAccountingSubmenuOpenMobile ? 'rotate-180' : ''}`} />
                      </button>
                      {isAccountingSubmenuOpenMobile && (
                        <div className="mt-1 ml-4 space-y-1">
                          <a
                            href="/accounting/us-accounting"
                            className="block py-3 px-4 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50 active:bg-blue-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            US Accounting
                          </a>
                          <a
                            href="/accounting/truck-logistics"
                            className="block py-3 px-4 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50 active:bg-blue-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Truck & Logistics
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <a
                href="/portfolio"
                className="font-medium transition-colors hover:text-blue-600 text-gray-700 py-3 px-2 rounded-lg hover:bg-blue-50 active:bg-blue-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <div>
                <button 
                  onClick={() => {
                    setIsInsightsDropdownOpen(!isInsightsDropdownOpen);
                    setIsServicesDropdownOpen(false);
                    setIsAccountingSubmenuOpenMobile(false);
                  }}
                  className="font-medium transition-colors hover:text-blue-600 text-gray-700 flex items-center justify-between w-full py-3 px-2 rounded-lg hover:bg-blue-50 active:bg-blue-100"
                >
                  <span>Insights</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isInsightsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isInsightsDropdownOpen && (
                  <div className="mt-1 ml-2 space-y-1">
                    <a
                      href="/blog"
                      className="block py-3 px-4 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50 active:bg-blue-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Blog
                    </a>
                    <a
                      href="/careers"
                      className="block py-3 px-4 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50 active:bg-blue-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Careers
                    </a>
                    <a
                      href="/contact"
                      className="block py-3 px-4 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50 active:bg-blue-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </a>
                  </div>
                )}
              </div>
              <a
                href="https://tidycal.com/team/deepiotics-team/call"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-medium text-sm w-full text-center inline-block mt-2 hover:from-blue-700 hover:to-purple-700 active:scale-95 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Free AI Strategy Session
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;