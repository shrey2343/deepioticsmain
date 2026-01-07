import React from 'react';
import { ArrowRight, TrendingUp, DollarSign, Clock, Users, Award, Star, Shield, Zap, Target, CheckCircle } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Manufacturing Optimization',
      client: '100+ Manufacturing Leader',
      industry: 'Manufacturing',
      challenge: 'Reduce production defects by 80% and optimize quality control across 15 global facilities',
      solution: 'Deployed custom computer vision AI system with real-time defect detection and predictive maintenance algorithms',
      results: [
        { icon: TrendingUp, metric: '87%', description: 'Defect reduction achieved' },
        { icon: DollarSign, metric: '$4.2M', description: 'Annual cost savings' },
        { icon: Clock, metric: '65%', description: 'Faster quality inspection' }
      ],
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Medical Diagnosis System',
      client: 'Leading Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Improve diagnostic accuracy to 95%+ and reduce patient wait times by 50% across 20 hospitals',
      solution: 'Built custom AI medical imaging analysis system with natural language processing for patient triage',
      results: [
        { icon: TrendingUp, metric: '96%', description: 'Diagnostic accuracy rate' },
        { icon: Clock, metric: '58%', description: 'Reduction in wait times' },
        { icon: Users, metric: '2000+', description: 'Patients served daily' }
      ],
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'AI Fraud Detection & Risk Management',
      client: 'Top-Tier Financial Institution',
      industry: 'Finance',
      challenge: 'Detect fraud in real-time with 99%+ accuracy while reducing false positives by 70%',
      solution: 'Developed advanced machine learning models for real-time fraud detection and intelligent risk assessment',
      results: [
        { icon: TrendingUp, metric: '99.2%', description: 'Fraud detection accuracy' },
        { icon: DollarSign, metric: '$12.5M', description: 'Fraud losses prevented' },
        { icon: Clock, metric: '73%', description: 'Reduction in false positives' }
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-purple-500 to-pink-500'
    }
  ];

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

        {/* Premium Case Studies */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 relative z-10">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Premium Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="mb-4 sm:mb-5 md:mb-6">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className={`inline-flex items-center space-x-1.5 sm:space-x-2 bg-gradient-to-r ${study.color} text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg`}>
                      <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{study.industry}</span>
                    </span>
                    <div className="flex space-x-0.5 sm:space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors leading-tight">{study.title}</h3>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold">{study.client}</p>
                </div>

                <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-8">
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-red-100">
                    <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
                      <h4 className="text-base sm:text-lg font-bold text-red-800">Challenge</h4>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-green-100">
                    <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                      <h4 className="text-base sm:text-lg font-bold text-green-800">Solution</h4>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Premium Results */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="group text-center p-3 sm:p-4 md:p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r ${study.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                        <result.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">{result.metric}</div>
                      <div className="text-xs sm:text-sm text-gray-600 leading-tight font-medium">{result.description}</div>
                    </div>
                  ))}
                </div>

                <a 
                  href="https://tidycal.com/team/deepiotics-team/call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r ${study.color} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500 relative overflow-hidden active:scale-95`}
                >
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center space-x-2 sm:space-x-3">
                    <span>Get Similar Results</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-pulse"></div>
                </a>
              </div>

              {/* Premium Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${study.color} rounded-2xl sm:rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${study.color} rounded-2xl sm:rounded-3xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-500 opacity-50`}></div>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-56 sm:h-64 md:h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay with stats */}
                  <div className="absolute inset-0 bg-black/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-3xl font-bold mb-2">ROI Achieved</div>
                      <div className="text-xl">300%+ Returns</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Bottom CTA */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12 relative z-10">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl border border-white/20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full filter blur-2xl animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full filter blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="relative">
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight px-4">
                Ready to Achieve Similar Results?
              </h3>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
                Join <span className="font-bold text-white">500+ companies</span> that have achieved 
                <span className="font-bold text-yellow-300"> 300%+ ROI</span> with our custom AI development services. 
                Get your free strategy session and discover how AI can transform your business.
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                <div className="flex items-center space-x-1.5 sm:space-x-2 text-white/90">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                  <span className="text-xs sm:text-sm font-medium">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-1.5 sm:space-x-2 text-white/90">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                  <span className="text-xs sm:text-sm font-medium">No Commitment</span>
                </div>
                <div className="flex items-center space-x-1.5 sm:space-x-2 text-white/90">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                  <span className="text-xs sm:text-sm font-medium">ROI Guarantee</span>
                </div>
              </div>
              
              <a 
                href="https://tidycal.com/team/deepiotics-team/call"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2 sm:space-x-3 bg-white text-blue-600 px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg md:text-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 relative overflow-hidden active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center space-x-2 sm:space-x-3">
                  <span>Get Free AI Strategy Session</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-green-400 rounded-full animate-pulse flex items-center justify-center">
                  <span className="text-xs font-bold text-white">!</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;