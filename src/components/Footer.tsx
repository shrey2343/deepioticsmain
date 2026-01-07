import React, { useState } from 'react';
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram, CheckCircle, ArrowRight, Star } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isRocketLaunching, setIsRocketLaunching] = useState(false);

  const handleRocketLaunch = () => {
    setIsRocketLaunching(true);
    setTimeout(() => setIsRocketLaunching(false), 6000);
  };

const handleSubscribe = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!email) {
    setError("Please enter your email");
    return;
  }

  setIsSubmitting(true);
  setError("");

  try {
    await fetch("https://script.google.com/macros/s/AKfycbwbCWJRZVLmzvod0BLu24fmbAuNlsYrV5YDTjBv60wp0kWmvA0MaqdwaNVt1CMJl1rX/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/newsletter-subscribe`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error || "Failed to subscribe. Please try again.");
      return;
    }

    setIsSubmitted(true);
    setEmail("");
    setTimeout(() => setIsSubmitted(false), 3000);
  } catch (err) {
    console.error("Subscription error:", err);
    setError("Failed to subscribe. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Company Info - Larger Column */}
          <div className="lg:col-span-4">
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-green-400/30">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
              <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400" />
              <span className="text-xs text-gray-300 leading-tight">Industry Leading AI Solutions</span>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
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

          {/* Company */}
          <div className="lg:col-span-2">
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
          <div className="lg:col-span-3">
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

        {/* Newsletter Section */}
        <div className="border-t border-white/10 mt-8 sm:mt-10 md:mt-12 pt-8 sm:pt-10">
          <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10 relative overflow-hidden">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 items-center">
              <div>
                <div className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-5 md:mb-6 border border-white/20">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span className="text-xs font-bold text-white tracking-wider">EXCLUSIVE NEWSLETTER</span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white leading-tight">
                  Get AI Insights That 
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Drive Results</span>
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3">
                  Join 8,500+ industry leaders receiving weekly AI trends, exclusive case studies, and actionable insights.
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-xs text-gray-400">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-400" />
                    <span>Weekly AI Updates</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-400" />
                    <span>Exclusive Content</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-400" />
                    <span>No Spam</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your professional email"
                    disabled={isSubmitting || isSubmitted}
                    className="flex-1 px-4 py-3 sm:px-5 sm:py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 text-sm disabled:opacity-50 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 active:scale-95"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Subscribed!</span>
                      </>
                    ) : (
                      <>
                        <span>{isSubmitting ? 'Subscribing...' : 'Subscribe Now'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
                {error && (
                  <p className="text-red-400 text-sm mt-2">{error}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-6 sm:mt-8 pt-5 sm:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 sm:space-y-6 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="text-gray-400 text-xs sm:text-sm flex items-center space-x-2 text-center">
                <span className="text-blue font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">© 2025 Deepiotics Pvt. Ltd. All rights reserved</span>
              </div>
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
              <div className="hidden md:block w-px h-4 bg-white/20"></div>
              <button 
                onClick={handleRocketLaunch}
                className="flex items-center space-x-1 text-xs text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                <span>🚀</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rocket Launch Effect */}
      {isRocketLaunching && (
        <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-purple-900 to-black animate-pulse"></div>
          
          {/* Stars */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>

          {/* Rocket */}
          <div className="absolute left-1/2 transform -translate-x-1/2 rocket-launch">
            <div className="text-8xl animate-bounce" style={{
              animation: 'rocketLaunch 6s ease-out forwards'
            }}>
              🚀
            </div>
            
            {/* Fire Trail */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-8 h-32 bg-gradient-to-t from-orange-500 via-red-500 to-yellow-400 rounded-full opacity-80 animate-pulse rocket-fire"></div>
          </div>

          {/* Smoke Clouds */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-48 bg-gray-400 opacity-30 rounded-full animate-ping rocket-smoke"></div>
          
          {/* Launch Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-6xl font-bold text-white mb-4 animate-pulse">
              🚀 LAUNCHING! 🚀
            </h1>
            <p className="text-2xl text-gray-300 animate-bounce">
              Taking Your Business to New Heights!
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes rocketLaunch {
          0% {
            bottom: -100px;
            transform: translateX(-50%) rotate(0deg);
          }
          20% {
            bottom: 20vh;
            transform: translateX(-50%) rotate(-5deg);
          }
          40% {
            bottom: 40vh;
            transform: translateX(-50%) rotate(5deg);
          }
          60% {
            bottom: 60vh;
            transform: translateX(-50%) rotate(-3deg);
          }
          80% {
            bottom: 80vh;
            transform: translateX(-50%) rotate(2deg);
          }
          100% {
            bottom: 120vh;
            transform: translateX(-50%) rotate(0deg);
          }
        }
        
        .rocket-fire {
          animation: fireFlicker 0.1s infinite alternate;
        }
        
        @keyframes fireFlicker {
          0% { height: 32px; opacity: 0.8; }
          100% { height: 48px; opacity: 1; }
        }
        
        .rocket-smoke {
          animation: smokeExpand 6s ease-out forwards;
        }
        
        @keyframes smokeExpand {
          0% { width: 96px; height: 48px; opacity: 0.3; }
          50% { width: 192px; height: 96px; opacity: 0.2; }
          100% { width: 384px; height: 192px; opacity: 0; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
