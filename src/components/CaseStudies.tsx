import React from 'react';
import { TrendingUp, Shield, Zap, Target } from 'lucide-react';

const CaseStudies = () => {

  return (
    <section id="case-studies" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden border-t border-yellow-400">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/5 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-green-400/5 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 relative z-10"> 
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight px-4">
            Proven AI Development Success Stories{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              $50M+ in Client Savings
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto px-4 mb-6 sm:mb-8 leading-relaxed">
            See how our custom AI development services have transformed operations for 
            <span className="font-semibold text-blue-600"> 100+ companies</span> and growing businesses across industries, delivering 
            <span className="font-semibold text-green-600"> measurable ROI</span> and competitive advantages.
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">100+ Success Stories</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">300%+ Average ROI</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">Enterprise Grade</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">6 Month ROI</span>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default CaseStudies;