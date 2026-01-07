import React from 'react';
import { ArrowRight, Play, Sparkles, Zap, Target, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 border-t border-yellow-400">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
        >
          <source src="https://res.cloudinary.com/dq5v1ewpq/video/upload/v1754303402/Deepiotics_qt54hg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <span className="block">Your AI-Trusted Partner for</span>{' '}
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Every Stage of Your Business Growth
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Empowering your business with end-to-end AI-driven solutions from website creation and app development to lead generation and ad campaigns that deliver real growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a 
                href="https://tidycal.com/team/deepiotics-team/call"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 active:scale-95"
              >
                <span className="text-sm sm:text-base">Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              {/* <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>See AI Solutions in Action</span>
              </button> */}
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-white text-sm sm:text-base">End-to-End Product Engineering</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-white text-sm sm:text-base">Proven Experience With 70+ AI Projects</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-white text-sm sm:text-base">Faster Time-to-Market</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-white text-sm sm:text-base">Cost-Efficient Global Outsourcing</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">70+</div>
                <div className="text-xs sm:text-sm text-gray-300 leading-tight">AI Solutions Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">80%</div>
                <div className="text-xs sm:text-sm text-gray-300 leading-tight">Average Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">35%</div>
                <div className="text-xs sm:text-sm text-gray-300 leading-tight">Lower Operational Costs</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">AI Performance Metrics</h3>
                    <p className="text-sm text-gray-300">Live business intelligence</p>
                  </div>
                </div>
                
                {/* Mock chart */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Revenue Impact</span>
                    <span className="text-sm font-semibold text-green-400">+247%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full w-4/5"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Automation Success</span>
                    <span className="text-sm font-semibold text-green-400">+312%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-3/4"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Operational Savings</span>
                    <span className="text-sm font-semibold text-green-400">-52%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 xl:p-4 shadow-lg border border-white/20">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 xl:w-5 xl:h-5 text-blue-400" />
                  <span className="text-xs xl:text-sm font-medium text-white">99.7% AI Accuracy</span>
                </div>
              </div>

              <div className="absolute -bottom-12 -left-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 xl:p-4 shadow-lg border border-white/20">
                <div className="text-center">
                  <div className="text-base xl:text-lg font-bold text-white">$5.2M</div>
                  <div className="text-xs text-gray-300">Client Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;