import React from 'react';
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram, CheckCircle, ArrowRight, Star } from 'lucide-react';

const Footer = () => {

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Moving gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-600/15 to-blue-500/15 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
            animation: 'float 20s ease-in-out infinite'
          }}></div>
        </div>
        

      </div>
      
      {/* Add custom keyframes for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-4 sm:mb-5 md:mb-6">
              <img 
                src="/LogoDeepiotics1.png" 
                alt="Deepiotics Logo" 
                className="h-12 sm:h-14 md:h-16 w-auto mb-2"
              />
              <div className="h-1.5 w-20 sm:w-25 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-5 md:mb-6 leading-relaxed text-xs sm:text-sm">
              Leading AI development company specializing in custom machine learning solutions, enterprise AI automation, and intelligent business transformation for 100+ companies worldwide.
            </p>
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-5 md:mb-6">
              <a
                href="https://www.linkedin.com/company/deepiotics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://share.google/T98ArPPYIYaTLTVZ9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://share.google/SHS9rC3Rumrp9DahO"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></span>
              AI Development Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Custom AI Development
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Machine Learning Services
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  AI-Powered Data Analytics
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  AI Security & Compliance
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  AI Process Automation
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Enterprise AI Integration
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></span>
              Contact Our AI Experts
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <MapPin className="w-4 h-4 text-blue-400 group-hover:text-white" />
                </div>
                <div className="text-sm text-gray-300">
                  <p className="font-medium text-white mb-1">Headquarters</p>
                  <p>204, Atulya IT Park</p>
                  <p>Indore, MP 452016, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 transition-colors">
                  <Mail className="w-4 h-4 text-purple-400 group-hover:text-white" />
                </div>
                <div className="text-sm text-gray-300">
                  <p className="font-medium text-white mb-1">Email Us</p>
                  <a href="mailto:contact@deepiotics.com" className="hover:text-white transition-colors">contact@deepiotics.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-6 sm:mt-8 pt-5 sm:pt-6">
          <div className="flex flex-row justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 flex-wrap gap-y-4">
            <div className="text-gray-400 text-xs sm:text-sm flex items-center justify-center text-center">
              <span className="text-blue font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">© 2025 Deepiotics Pvt. Ltd. All rights reserved</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 relative group flex items-center space-x-1">
                <span>Privacy Policy</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 relative group flex items-center space-x-1">
                <span>Terms of Service</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 relative group flex items-center space-x-1">
                <span>Cookie Policy</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
