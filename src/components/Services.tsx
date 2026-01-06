import React, { useState } from 'react';
import { Brain, Database, Cog, BarChart3, Zap, Shield, ArrowRight, Bot, Network, LucideIcon, CheckCircle } from 'lucide-react';
import ServiceModal from './ServiceModal';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetConsultation = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };
  const services = [
    {
      icon: Brain,
      title: 'Scattered Teams Create Confusion',
      description: 'Multiple vendors cause misalignment, delays, and endless rework.',
      features: ['Custom Machine Learning Models', 'AI-Powered Chatbots & Virtual Assistants', 'Intelligent Document Processing', ' Predictive Business Analytics'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Bot,
      title: 'Poor Planning Derails AI Projects',
      description: 'Lack of clear requirements leads to failed or stalled builds.',
      features: ['Autonomous Task Execution', 'Multi-Channel Customer Engagement', 'Intelligent Decision Making', 'Seamless System Integration'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Network,
      title: 'Slow Releases Kill Momentum',
      description: 'Inefficient workflows make delivery unpredictable and costly.',
      features: ['Multi-Agent Orchestration', 'Collaborative AI Networks', 'Adaptive Learning Systems', 'Enterprise-Scale Deployment'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: BarChart3,
      title: 'Bad Architecture Breaks at Scale',
      description: 'Weak foundations cause instability as your product grows.',
      features: ['Advanced Business Intelligence', 'Real-Time Data Processing', 'Predictive Market Analysis', 'Custom Analytics Dashboards'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'High Costs Burn Your Budget',
      description: 'Unnecessary complexity leads to overspending and slow ROI.',
      features: ['Custom API Development', 'Legacy System Integration', 'Cloud & On-Premise Deployment', 'Scalable AI Architecture'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Brain,
      title: 'Weak Communication Causes Chaos',
      description: 'Unclear updates and shifting expectations disrupt your roadmap.',
      features: ['Real-time Collaboration Tools', 'Automated Documentation', 'Predictive Analytics for Project', 'Cross-platform Compatibility'],
      color: 'from-yellow-500 to-blue-500'
    }
  ];

  return (
    <section id="services" className="py-8 sm:py-12 md:py-14 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden border-t border-yellow-400">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/8 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/8 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight">
            Remove the Roadblocks Slowing {' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Product
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto px-4 leading-relaxed">
            We eliminate the common failures that delay AI, web, and app builds so you can launch without chaos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {services.map((service, index) => (
            <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/50 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden">
              {/* Animated background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Icon */}
              <div className={`relative w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <service.icon className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{service.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 relative">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="group/item flex items-center space-x-3 text-base text-gray-700 p-2 rounded-lg hover:bg-blue-50/50 transition-all duration-300">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => handleGetConsultation(service)}
                className={`group/btn relative w-full bg-gradient-to-r ${service.color} text-white px-6 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500 flex items-center justify-center space-x-3 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center space-x-3">
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 sm:p-10 md:p-12 text-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>

            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                Ready to Scale Your Business with AI?
              </h3>

              <p className="text-xl text-blue-100 mb-6 sm:mb-7 md:mb-8 max-w-3xl mx-auto leading-relaxed">
                Join 500+ companies that have increased revenue by 200%+ with our custom AI development services. Get your free strategy session today.
              </p>
              <a
                href="https://tidycal.com/team/deepiotics-team/call"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-4 px-8 rounded-xl hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25"
              >
                <span>Get Free AI Strategy Session</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </section>
  );
};

export default Services;