import React from 'react';
import { Users, Award, Globe, TrendingUp, CheckCircle, Star, Shield, Zap, Target, Brain, Sparkles, ArrowRight, Briefcase, Trophy, Clock, Rocket } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '50+', label: 'Expert Team Members' },
    { icon: Award, value: '1000+', label: 'AI Solutions Deployed' },
    { icon: Globe, value: '25+', label: 'Countries Served' },
    { icon: TrendingUp, value: '$50M+', label: 'Client Cost Savings' }
  ];

  const values = [
  
    {
      title: 'Guaranteed ROI',
      description: 'We guarantee measurable results within 6 months or your money back. Average client ROI: 300%+'
    },
    {
      title: 'Enterprise-Grade Security',
      description: 'Bank-level security, GDPR compliance, and rigorous testing ensure your AI solutions are production-ready.'
    },
    {
      title: 'End-to-End Partnership',
      description: 'From strategy to deployment and beyond - we provide complete AI development lifecycle support.'
    }
  ];

  return (
    <section id="about" className="py-8 sm:py-12 md:py-14 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-100/60 relative overflow-hidden border-t border-yellow-400">
      {/* Enhanced Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-400/8 to-teal-400/8 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-orange-400/6 to-yellow-400/6 rounded-full filter blur-xl animate-pulse" style={{animationDelay: '6s'}}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-blue-500/20 rotate-45 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-6 h-6 bg-purple-500/20 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-green-500/20 rotate-12 animate-bounce" style={{animationDelay: '5s'}}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Premium Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 relative z-10">

          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-7 md:mb-8 leading-tight tracking-tight">
            Why 100+ Companies Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative">
              Deepiotics for AI Development
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-indigo-600/30 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto px-4 mb-12 leading-relaxed font-light">
            As a leading AI development company, we've helped over 
            <span className="font-bold text-blue-600 bg-blue-50/50 px-2 py-1 rounded-lg">500 enterprises</span> achieve 
            <span className="font-bold text-green-600 bg-green-50/50 px-2 py-1 rounded-lg">300% efficiency gains</span> and 
            <span className="font-bold text-purple-600 bg-purple-50/50 px-2 py-1 rounded-lg">$50M+ in cost savings</span> through custom machine learning solutions and intelligent automation.
          </p>
          
          {/* Enhanced Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-bold text-gray-800">Industry Leader</span>
              </div>
            </div>
            <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-bold text-gray-800">Proven Results</span>
              </div>
            </div>
            <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-bold text-gray-800">Enterprise Security</span>
              </div>
            </div>
            <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-bold text-gray-800">Fast Deployment</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 sm:mb-10 md:mb-12 relative z-10">
          {/* Enhanced Premium Content Section - Now Horizontal */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 lg:p-12 shadow-2xl border border-white/60 hover:shadow-3xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden mb-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full filter blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-full filter blur-xl"></div>
            
            <div className="relative">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                    Proven AI Development Expertise That Delivers Results
                  </h3>
                  <div className="w-30 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2"></div>
                </div>
              </div>
            
              <div className="space-y-8">
                <p className="text-xl text-gray-700 leading-relaxed font-light">
                  With over a decade of AI development experience, Deepiotics has become the trusted partner for enterprises seeking transformative artificial intelligence solutions. Our team of 
                  <span className="font-bold text-blue-600 bg-blue-50/70 px-2 py-1 rounded-lg">50+ AI specialists</span>, data scientists, and ML engineers has delivered over 
                  <span className="font-bold text-green-600 bg-green-50/70 px-2 py-1 rounded-lg">1,000 successful AI implementations</span> across 
                  <span className="font-bold text-purple-600 bg-purple-50/70 px-2 py-1 rounded-lg">25+ industries</span>.
                </p>
                
                <p className="text-xl text-gray-700 leading-relaxed font-light">
                  From <span className="font-bold text-blue-600 bg-blue-50/70 px-2 py-1 rounded-lg">100+ corporations</span> to innovative startups, we've consistently delivered custom AI solutions that generate 
                  <span className="font-bold text-green-600 bg-green-50/70 px-2 py-1 rounded-lg">measurable ROI within 6 months</span>. Our proven methodology combines cutting-edge machine learning techniques with deep industry expertise to solve your most complex business challenges.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-10">
                {values.map((value, index) => (
                  <div key={index} className="group flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-r from-white/50 to-blue-50/30 border border-white/60 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-purple-50/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg mb-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{value.title}</h4>
                      <p className="text-lg text-gray-700 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section - Now Below */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-green-500 to-teal-500', 
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500'
              ];
              const bgColors = [
                'from-blue-50/80 to-cyan-50/80',
                'from-green-50/80 to-teal-50/80',
                'from-purple-50/80 to-pink-50/80',
                'from-orange-50/80 to-red-50/80'
              ];
              return (
                <div
                  key={index}
                  className={`group bg-gradient-to-br ${bgColors[index]} backdrop-blur-md rounded-3xl p-8 sm:p-10 text-center border border-white/60 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden`}
                >
                  {/* Enhanced animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${colors[index]} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="relative text-4xl sm:text-5xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{stat.value}</div>
                  <div className="relative text-base sm:text-lg text-gray-700 font-bold">{stat.label}</div>
                  
                  {/* Enhanced floating elements */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
                  </div>
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Premium Team Section */}
        <div className="bg-gradient-to-br from-white/95 to-blue-50/60 backdrop-blur-md rounded-3xl p-12 sm:p-16 md:p-20 border border-white/60 shadow-2xl hover:shadow-3xl transition-all duration-500 relative z-10 overflow-hidden">
          {/* Enhanced animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/3 via-transparent to-purple-600/3"></div>
            <div className="absolute top-12 right-12 w-40 h-40 bg-gradient-to-r from-blue-400/8 to-cyan-400/8 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-12 left-12 w-32 h-32 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-green-400/6 to-teal-400/6 rounded-full filter blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
          </div>
          
          <div className="text-center mb-16 sm:mb-20 relative">

            
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our AI Development Experts
            </h3>
            
            <p className="text-xl sm:text-2xl text-gray-700 max-w-5xl mx-auto px-4 leading-relaxed font-light">
              Led by industry veterans with <span className="font-bold text-blue-600 bg-blue-50/70 px-3 py-1 rounded-lg">15+ years</span> in enterprise AI development, our leadership team has successfully delivered AI solutions for 
              <span className="font-bold text-green-600 bg-green-50/70 px-3 py-1 rounded-lg">Google, Microsoft</span>, and <span className="font-bold text-purple-600 bg-purple-50/70 px-3 py-1 rounded-lg">100+ global enterprises</span> across UK, US, and European markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                name: 'Ayan Nigam',
                role: 'Founder & Chief Executive Officer',
                description: 'With 20+ years of industry experience across enterprise AI solutions, Ayan drives strategic AI innovation and business transformation for Fortune 500 companies.',
                image: 'https://res.cloudinary.com/dq5v1ewpq/image/upload/v1754281036/ayan_g3mkvg.jpg',
                linkedin: 'https://www.linkedin.com/in/ayannigam/'
              },
              {
                name: 'Dr. Bhawna Nigam',
                role: 'Co-Founder & Chief AI Officer',
                description: 'Ph.D. in Artificial Intelligence with 50+ published research papers and 70+ successful enterprise AI implementations across global markets.',
                image: '/bhawna.png',
                linkedin: 'https://www.linkedin.com/in/dr-bhawna-nigam/'
              },
              {
                name: 'Dr. Madhu Jain',
                role: 'Head of Research & Data Science',
                description: 'Ph.D. in Data Science leading cutting-edge research initiatives and advanced analytics solutions for enterprise clients worldwide.',
                image: '/madhuji.png',
                linkedin: 'http://linkedin.com/in/dr-madhu-jain-5b5917376'
              },
              {
                name: 'Rajshri Nigam',
                role: 'Director of Business Development',
                description: 'Leads strategic business development and client partnerships, driving growth across UK, US, and European AI markets.',
                image: '/rajeshri.png',
                linkedin: 'https://www.linkedin.com/in/rajeshri-nigam-a4941337a/'
              },
              {
                name: 'Narendra Pipliwal',
                role: 'Head of Sales & Marketing',
                description: 'Manages enterprise sales strategy and marketing operations, specializing in AI solution deployment and client success.',
                image: '/Narendra.png',
                linkedin: 'https://www.linkedin.com/in/narendra-pipliwal'
              }
            ].map((member, index) => (
              <div key={index} className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-gray-200/60 hover:border-blue-300/80 relative overflow-hidden">
                {/* Premium background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative mb-6">
                  <div className="relative w-28 h-28 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full p-1 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="text-center relative">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">{member.name}</h4>
                  <div className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-md">
                    {member.role}
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed mb-6 font-light">{member.description}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-white/20"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span>LinkedIn Profile</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;