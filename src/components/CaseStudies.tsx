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
    <section id="case-studies" className="py-8 sm:py-12 md:py-14 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden border-t border-yellow-400">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/5 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-green-400/5 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 relative z-10"> 
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight">
            Proven AI Development Success Stories{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              $50M+ in Client Savings
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto px-4 mb-8 leading-relaxed">
            See how our custom AI development services have transformed operations for 
            <span className="font-semibold text-blue-600"> 100+ companies</span> and growing businesses across industries, delivering 
            <span className="font-semibold text-green-600"> measurable ROI</span> and competitive advantages.
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Target className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">100+ Success Stories</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">300%+ Average ROI</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Shield className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium">Enterprise Grade</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Zap className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium">6 Month ROI</span>
            </div>
          </div>
        </div>

        {/* Premium Case Studies */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 relative z-10">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Premium Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className={`inline-flex items-center space-x-2 bg-gradient-to-r ${study.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                      <Award className="w-4 h-4" />
                      <span>{study.industry}</span>
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{study.title}</h3>
                  <p className="text-lg sm:text-xl text-gray-700 font-semibold">{study.client}</p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl border border-red-100">
                    <div className="flex items-center space-x-2 mb-3">
                      <Target className="w-5 h-5 text-red-600" />
                      <h4 className="text-lg font-bold text-red-800">Challenge</h4>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border border-green-100">
                    <div className="flex items-center space-x-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <h4 className="text-lg font-bold text-green-800">Solution</h4>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Premium Results */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="group text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-r ${study.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <result.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{result.metric}</div>
                      <div className="text-sm text-gray-600 leading-tight font-medium">{result.description}</div>
                    </div>
                  ))}
                </div>

                <a 
                  href="https://tidycal.com/team/deepiotics-team/call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center space-x-3 bg-gradient-to-r ${study.color} text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center space-x-3">
                    <span>Get Similar Results</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                </a>
              </div>

              {/* Premium Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${study.color} rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${study.color} rounded-3xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-500 opacity-50`}></div>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="relative rounded-3xl shadow-2xl w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
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
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl border border-white/20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full filter blur-2xl animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full filter blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="relative">
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Achieve Similar Results?
              </h3>
              
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
                Join <span className="font-bold text-white">500+ companies</span> that have achieved 
                <span className="font-bold text-yellow-300"> 300%+ ROI</span> with our custom AI development services. 
                Get your free strategy session and discover how AI can transform your business.
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
                <div className="flex items-center space-x-2 text-white/90">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-sm font-medium">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-sm font-medium">No Commitment</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-sm font-medium">ROI Guarantee</span>
                </div>
              </div>
              
              <a 
                href="https://tidycal.com/team/deepiotics-team/call"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center space-x-3">
                  <span>Get Free AI Strategy Session</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse flex items-center justify-center">
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