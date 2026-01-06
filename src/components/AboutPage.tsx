import { Target, Users, Award, TrendingUp, Globe, Lightbulb, Heart, Shield, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does Deepiotics offer?",
      answer: "Deepiotics provides comprehensive AI and machine learning solutions including AI strategy development, custom machine learning applications, computer vision systems, data analytics, predictive analytics, intelligent automation, web and mobile application development with AI integration, and ongoing AI consulting and optimization services. We tailor each solution to meet your specific business needs."
    },
    {
      question: "How can AI benefit my business?",
      answer: "AI can transform your business by automating repetitive tasks, providing data-driven insights for better decision-making, improving customer experience through personalization, reducing operational costs, predicting market trends and customer behavior, enhancing product quality through computer vision and quality control, and enabling you to scale operations efficiently. The specific benefits depend on your industry and business goals."
    },
    {
      question: "What is Deepiotics' approach to project engagement?",
      answer: "Our engagement process begins with a thorough consultation to understand your business challenges and objectives. We then develop a customized AI strategy and roadmap, followed by proof-of-concept development to validate the approach. After approval, we move to full-scale implementation with regular progress updates and transparent communication. Post-deployment, we provide comprehensive support, maintenance, and ongoing optimization to ensure sustained value."
    },
    {
      question: "How is pricing determined for AI projects?",
      answer: "Pricing is determined based on project scope, complexity, technology requirements, timeline, and resources needed. We offer flexible engagement models including fixed-price projects for well-defined scopes, time and material contracts for evolving requirements, and retainer-based models for ongoing support. We provide detailed proposals with transparent cost breakdowns and work with you to find cost-effective solutions that fit your budget while delivering maximum value."
    },
    {
      question: "Which industries does Deepiotics serve?",
      answer: "We serve clients across diverse industries including healthcare (diagnostic systems, patient care optimization), financial services (fraud detection, risk assessment, algorithmic trading), automotive (autonomous systems, predictive maintenance), retail and e-commerce (recommendation engines, demand forecasting), manufacturing (quality control, supply chain optimization), and many others. Our solutions are adaptable to startups, mid-size companies, and large enterprises across any sector seeking AI transformation."
    },
    {
      question: "What kind of support and maintenance do you provide?",
      answer: "We offer comprehensive post-deployment support including system monitoring and performance optimization, regular updates and improvements, bug fixes and technical troubleshooting, model retraining and fine-tuning as data evolves, scalability enhancements as your business grows, and dedicated support channels with SLA-based response times. Our goal is to ensure your AI solutions continue delivering value long after initial deployment."
    },
    {
      question: "How do I get started with a project at Deepiotics?",
      answer: "Getting started is simple. First, schedule a free consultation through our website or contact form to discuss your needs. We'll then conduct a discovery session to understand your business challenges and goals. Our team will prepare a customized proposal outlining the solution approach, timeline, and investment required. Once approved, we'll kick off the project with a detailed planning session and begin development. Throughout the process, you'll have full transparency and regular communication with our team."
    },
    {
      question: "What makes Deepiotics different from other AI development companies?",
      answer: "Deepiotics stands out through our transparent project delivery with regular updates and clear communication, deep technical expertise in AI, ML, and computer vision, cost-effective solutions without compromising quality, client-centric approach tailored to your specific needs, proven track record since 2018 serving startups to enterprises, end-to-end service from strategy to deployment and maintenance, and our commitment to building long-term partnerships focused on your sustained success rather than just one-time projects."
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-slide-up">
            About Deepiotics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
            Transforming businesses through intelligent AI solutions since 2018
          </p>
        </div>

        <div className="mb-20 animate-slide-up" style={{animationDelay: '0.2s'}}>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:scale-[1.02]">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">Who We Are</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="mb-4">
                Founded in 2018 and headquartered in Indore, India, Deepiotics is a leading technology company specializing in Artificial Intelligence and Machine Learning solutions that drive measurable business growth. We partner with organizations ranging from innovative startups to established enterprises, delivering custom AI solutions that transform operations and unlock new opportunities.
              </p>
              <p className="mb-4">
                Our expertise spans the full spectrum of AI technologies—including Machine Learning, Computer Vision, Data Analytics, and intelligent automation—enabling us to craft solutions precisely tailored to your unique business challenges. Whether you're looking to optimize operations, enhance customer experiences, or gain competitive advantages through data-driven insights, we have the technical depth and industry experience to deliver results.
              </p>
              <p>
                What sets us apart is our commitment to transparent collaboration and cost-effective innovation. We don't just build technology; we build partnerships. Our team works closely with yours to understand your goals, develop strategic roadmaps, and implement solutions that deliver tangible ROI while ensuring you have the support and knowledge to maximize long-term value.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white border-2 border-blue-400/30 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <Target className="w-16 h-16 mb-6 animate-bounce-slow" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg opacity-95 leading-relaxed">
              To empower businesses of all sizes with intelligent, custom AI solutions that drive operational efficiency, fuel innovation, and deliver measurable business growth—making advanced technology accessible, practical, and profitable for organizations across every industry.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 md:p-12 text-white border-2 border-purple-400/30 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Lightbulb className="w-16 h-16 mb-6 animate-pulse-slow" />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg opacity-95 leading-relaxed">
              To be recognized globally as the most trusted partner for AI transformation, known for our technical excellence, transparent collaboration, and commitment to delivering solutions that create lasting competitive advantages and sustainable business value.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-4 animate-slide-up" style={{animationDelay: '0.5s'}}>Our Core Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-blue-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Strategy & Consulting</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic AI roadmaps, feasibility analysis, and expert guidance to align technology with your business objectives.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-purple-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '0.7s'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Machine Learning Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom ML models, predictive analytics, and intelligent automation systems tailored to your specific use cases.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-green-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '0.8s'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Computer Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced image recognition, object detection, quality control systems, and visual intelligence applications.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-red-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '0.9s'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Transform raw data into actionable insights with advanced analytics, visualization, and business intelligence.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-indigo-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '1s'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Web & Mobile Development</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered web and mobile applications with intelligent features that enhance user experience and functionality.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-pink-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '1.1s'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Automation & Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligent process automation, workflow optimization, and seamless integration with your existing systems.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-4 animate-slide-up" style={{animationDelay: '0.5s'}}>Industries We Serve</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Delivering AI solutions across diverse sectors
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Healthcare', 'Financial Services', 'Automotive', 'Retail & E-commerce', 'Manufacturing', 'Technology', 'Education', 'Logistics'].map((industry, index) => (
              <div key={industry} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-center animate-slide-up" style={{animationDelay: `${0.6 + index * 0.1}s`}}>
                <h3 className="text-lg font-bold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20 border-2 border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-500 animate-slide-up" style={{animationDelay: '1s'}}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-4">Why Choose Deepiotics</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our commitment to excellence and your success
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Transparent Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular updates, clear communication, and full visibility into project progress. We believe in building trust through transparency at every stage.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💎 Proven Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Since 2018, we've delivered AI solutions across healthcare, fintech, automotive, and more—bringing deep technical knowledge and industry experience to every project.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 border border-green-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🤝 Client-Centric Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  We don't believe in one-size-fits-all. Every solution is custom-designed to address your unique challenges and align with your business goals.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 Cost-Effective Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional AI development without the enterprise price tag. We optimize for value, delivering high-quality solutions that fit your budget.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20 animate-slide-up" style={{animationDelay: '1.2s'}}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services, approach, and how we can help your business
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border-2 border-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '1.4s'}}>
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">2018</div>
            <div className="text-xl text-gray-600 font-semibold">Founded</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border-2 border-purple-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '1.5s'}}>
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">Global</div>
            <div className="text-xl text-gray-600 font-semibold">Client Reach</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border-2 border-pink-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '1.6s'}}>
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-xl text-gray-600 font-semibold">Support Available</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white text-center border-2 border-white/20 hover:shadow-3xl transition-all duration-500 animate-slide-up" style={{animationDelay: '1.7s'}}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-pulse-slow">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Let's discuss how Deepiotics can help you achieve your business goals with custom AI solutions
          </p>
          <a
            href="https://tidycal.com/team/deepiotics-team/call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-blue-200 hover:border-blue-400"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
