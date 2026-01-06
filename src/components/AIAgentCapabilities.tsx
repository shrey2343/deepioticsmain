import React, { useState } from 'react';
import { Bot, Target, TrendingUp, Users, MessageSquare, BarChart3, Zap, Brain, ArrowRight, CheckCircle, Download, LucideIcon } from 'lucide-react';
import ServiceModal from './ServiceModal';

interface Capability {
  icon: LucideIcon;
  title: any; 
  description: string;
  features: string[];
  color: string;
}

const AIAgentCapabilities = () => {
  const [selectedService, setSelectedService] = useState<Capability | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (capability: Capability) => {
    setSelectedService(capability);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  const capabilities = [
    {
      icon: BarChart3,
      title: (
        <>
          AI Business{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-pink-600 font-extrabold">
            Growth
          </span>{" "}
          Suite
        </>
      ),
      description:
        "Grow Your Business Smarter with AI That Works for You. From strategy to execution, our AI Business Growth Suite helps small and medium businesses automate marketing, capture more leads, and scale faster without the tech overwhelm",
      features: [
        "Done-for-you AI Website & Ads Setup",
        "24/7 AI Chatbots & Voice Agents",
        "Data-Driven Analytics & Tracking",
        "Fast ROI through Smart Automation",
      ],
      color: "from-green-500 to-teal-500",
    },

    {
      icon: Zap,
      title: (
        <>
          AI-Powered LinkedIn Lead Generation for Business{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-pink-600 font-extrabold">
            Growth
          </span>
        </>
      ),
      description:
        "Stop Scrolling, Stop Pitching Turn Your LinkedIn Into a 24/7 Lead Generation Machine.",
      features: [
        "Profile Optimization",
        "AI-Generated Content & Posting",
        "Smart AI Outreach Campaigns",
        "Lead Qualification & Call Booking",
      ],
      color: "from-pink-500 to-rose-500",
    },

    {
      icon: Target,
      title: "AI Agent Development - Agentic AI Chatbots",
      description:
        "Deploy intelligent AI agents that autonomously handle complex business tasks. Our agentic AI chatbots work 24/7 to qualify leads, provide customer support, and drive conversions with human-like interactions.",
      features: [
        "Autonomous Task Execution",
        "Lead Qualification Automation",
        "Multi-Channel Integration",
        "Natural Language Understanding",
      ],
      color: "from-purple-500 to-pink-500",
    },

    {
      icon: TrendingUp,
      title: "Fast MVP & Prototype Delivery",
      description:
        "Launch your AI product in 30 days with our rapid MVP development. We help startups and enterprises validate ideas quickly, iterate fast, and get to market before the competition.",
      features: [
        "30-Day Deployment",
        "Agile Development",
        "Quick Iterations",
        "Market Validation",
      ],
      color: "from-indigo-500 to-purple-500",
    },

    {
      icon: Users,
      title: "Generative AI Model Development",
      description:
        "Harness the power of generative AI with custom models tailored to your business needs. From content generation to creative design, unlock new possibilities with cutting-edge AI technology.",
      features: [
        "Custom LLM Development",
        "Content Generation AI",
        "Image & Video Synthesis",
        "AI-Powered Creativity",
      ],
      color: "from-orange-500 to-red-500",
    },

    {
      icon: MessageSquare,
      title: "Web & App Development",
      description:
        "Build scalable, high-performance web and mobile applications with cutting-edge technologies. From responsive websites to complex enterprise applications, we deliver solutions that drive business growth.",
      features: [
        "Responsive Web Design",
        "Mobile App Development",
        "Progressive Web Apps",
        "E-commerce Solutions",
      ],
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const benefits = [
    { metric: "300%", description: "Increase in qualified leads" },
    { metric: "85%", description: "Reduction in customer acquisition cost" },
    { metric: "250%", description: "Improvement in conversion rates" },
    { metric: "90%", description: "Time saved on manual tasks" },
  ];

  const handleDownloadGuide = () => {
    const guideContent = `AI CAPABILITIES GUIDE
Deepiotics — Custom AI Solutions Deployed in 30 Days with Guaranteed ROI

... (same as your guide text)
`;

    const blob = new Blob([guideContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Deepiotics-AI-Capabilities-Guide.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-8 sm:py-12 md:py-14 bg-gradient-to-br from-gray-50 to-blue-50 border-t border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
            Enterprise AI Development Services{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              That Transform Industries
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            From custom machine learning models to enterprise AI automation...
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20"
            >
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {benefit.metric}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                {benefit.description}
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${capability.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <capability.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {capability.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {capability.description}
              </p>

              <ul className="space-y-2 mb-6">
                {capability.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-2 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {capability.title.props ? (
                capability.title.props.children?.toString().includes("AI Business") ? (
                  <a
                    href="/AI-business-growth"
                    className="group/btn flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                ) : capability.title.props.children?.toString().includes("LinkedIn") ? (
                  <a
                    href="https://grow.deepiotics.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <button
                    onClick={() => handleLearnMore(capability)}
                    className="group/btn flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                )
              ) : (
                <button
                  onClick={() => handleLearnMore(capability)}
                  className="group/btn flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section (same as your code) */}

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Deploy AI Agents for Your Sales & Marketing?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join 200+ companies that have revolutionized...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://tidycal.com/team/deepiotics-team/call"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-block"
              >
                Get Free AI Agent Demo
              </a>

              <button
                onClick={handleDownloadGuide}
                className="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download AI Capabilities Guide</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </section>
  );
};

export default AIAgentCapabilities;
