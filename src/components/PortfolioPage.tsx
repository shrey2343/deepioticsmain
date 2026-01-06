import { Gamepad2, Sparkles, Users, BarChart, CheckCircle, Award, Target, Zap, Globe, Shield, TrendingUp, Brain, Palette, Camera, Database, Lock, ShoppingCart, Heart, Building2, DollarSign } from 'lucide-react';

export default function PortfolioPage() {
  const caseStudies = [
    {
      icon: Gamepad2,
      company: 'Vyuh',
      industry: 'Gaming & EdTech',
      title: 'Vyuh The Game That Trains Modern Leaders Under Pressure',
      challenge: 'Creating an engaging multiplayer gaming platform that revives ancient Indian warfare strategies while providing modern gaming experience with real-time battles, tournaments, and cultural education.',
      solution: 'We developed Vyuh - a comprehensive gaming platform featuring ancient Indian tactical warfare based on Mahabharata formations. The platform includes real-time multiplayer battles, AI-powered opponent matching, tournament systems, offline practice modes, and educational content about Sanskrit terminology and historical battle strategies.',
      results: [
        '10,000+ active players globally',
        '500+ tournaments conducted',
        '4.8/5 user rating',
        'Available in 25 countries',
        '92% player retention rate'
      ],
      technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'AWS'],
      timeline: '6 months',
      team: '8 specialists',
      link: 'https://www.vyuh9.in/',
      metrics: [
        { label: 'Active Players', value: '10K+' },
        { label: 'Tournaments', value: '500+' },
        { label: 'Countries', value: '25' },
        { label: 'User Rating', value: '4.8' }
      ],
      features: [
        { title: 'Strategic Gameplay', desc: 'Reviving ancient Indian warfare strategies through modern gaming mechanics with Chakravyuha formations.' },
        { title: 'Cultural Heritage', desc: 'Educational platform teaching Mahabharata stories and ancient Indian tactical warfare systems.' },
        { title: 'Modern Features', desc: 'Cross-platform gaming with responsive design and offline practice against AI opponents.' }
      ],
      benefits: [
        { title: 'Decisive Leadership Under Pressure', desc: 'Trains leaders to make fast, confident decisions in high-stress situations. Outcome: Less hesitation, stronger ownership, faster execution.' },
        { title: 'Strategic Thinking in Complex Systems', desc: 'Players analyze multi-layered problems and think several moves ahead. Outcome: Better planning, fewer blind spots, smarter strategies.' },
        { title: 'Critical Thinking & Adaptive Mindset', desc: 'Develops ability to adapt strategy in real-time when conditions change. Outcome: Agile leaders who stay effective in chaos.' },
        { title: 'Resilience & Mental Discipline', desc: 'Builds mental resilience, focus, and emotional control under pressure. Outcome: Calm leadership in volatile situations.' }
      ]
    },
    {
      icon: Camera,
      company: 'FutureVision',
      industry: 'AI & Photography',
      title: 'An AI-powered app that helps parents visualize, inspire, and emotionally connect with their child’s future.',
      challenge: 'Parents wanted to visualize their children\'s future career possibilities in a meaningful way. Traditional photo editing was time-consuming and lacked emotional connection. Need for AI-powered solution that creates realistic future portraits.',
      solution: 'We created FutureVision - an advanced AI portrait generator using deep learning algorithms for age progression and facial feature analysis. The platform generates professional career visualizations with realistic clothing and backgrounds for multiple career paths including doctor, pilot, entrepreneur, and artist roles.',
      results: [
        '50,000+ portraits generated',
        '95% accuracy in age progression',
        '4.9/5 customer satisfaction',
        'Privacy-focused data handling',
        'Shareable social media results'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'OpenCV'],
      timeline: '5 months',
      team: '10 specialists',
      link: 'https://future-bloom-portraits.lovable.app',
      metrics: [
        { label: 'Portraits Generated', value: '50K+' },
        { label: 'AI Accuracy', value: '95%' },
        { label: 'User Rating', value: '4.9' },
        { label: 'Career Options', value: '12+' }
      ],
      features: [
        { title: 'Advanced AI Technology', desc: 'Deep learning algorithms for age progression and facial feature analysis with professional results.' },
        { title: 'Emotional Connection', desc: 'Personalized experience creating emotional bonds with future possibilities for families.' },
        { title: 'Privacy First', desc: 'Family-friendly interface with privacy-focused data handling and secure processing.' }
      ],
      benefits: [
        { title: 'Creates Emotional Connection', desc: 'Parents see their child\'s future, building hope and motivation. Emotion: "I can actually see my child becoming this."' },
        { title: 'Inspires Children at Young Age', desc: 'Visual representation boosts confidence and aspiration. Impact: Dreams feel possible, not distant.' },
        { title: 'Encourages Career Awareness', desc: 'Introduces children (5-15 years) to career possibilities. Outcome: Exploration without stress.' },
        { title: 'A Memory Parents Cherish', desc: 'Digital keepsakes parents save and revisit as their child grows. Emotion: Pride, attachment, joy.' }
      ]
    },
    {
      icon: Database,
      company: 'ResearchHub',
      industry: 'Research & Development',
      title: 'Global Research & Innovation Marketplace',
      challenge: 'Researchers and organizations struggled to find verified collaborators for R&D projects. Lack of secure communication channels and milestone tracking led to project failures. Need for a trusted global marketplace connecting researchers with organizations.',
      solution: 'We built ResearchHub - a comprehensive R&D marketplace platform connecting 20,000+ verified academic researchers with organizations across 200+ domains. The platform features credential verification, end-to-end encrypted communication, milestone tracking, secure payment systems, and real-time collaboration tools.',
      results: [
        '20,000+ verified researchers',
        '15,000+ active projects',
        '200+ research domains',
        '98% project completion rate',
        'End-to-end encryption'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
      timeline: '8 months',
      team: '12 specialists',
      link: 'https://researchhub-frontend.onrender.com/',
      metrics: [
        { label: 'Verified Researchers', value: '20K+' },
        { label: 'Active Projects', value: '15K+' },
        { label: 'Research Domains', value: '200+' },
        { label: 'Completion Rate', value: '98%' }
      ],
      features: [
        { title: 'Verified Network', desc: '20,000+ verified academic researchers across 200+ domains with credential verification system.' },
        { title: 'Secure Collaboration', desc: 'End-to-end encrypted communication with milestone tracking and secure payment systems.' },
        { title: 'Growth Metrics', desc: 'Platform showing 33% YoY growth in researchers and 87% increase in active projects.' }
      ]
    },
    {
      icon: ShoppingCart,
      company: 'Global Retail Chain',
      industry: 'E-commerce & Retail',
      title: 'AI-Powered Personalization Engine',
      challenge: 'A major retail chain was struggling with low conversion rates and high cart abandonment. Their generic product recommendations were not resonating with customers, leading to missed revenue opportunities.',
      solution: 'We developed a sophisticated AI personalization engine that analyzes customer behavior, purchase history, browsing patterns, and demographic data to deliver hyper-personalized product recommendations in real-time.',
      results: [
        '45% increase in conversion rates',
        '32% reduction in cart abandonment',
        '$12M additional annual revenue',
        '28% improvement in average order value',
        '65% increase in customer engagement'
      ],
      technologies: ['TensorFlow', 'Python', 'AWS', 'Redis', 'PostgreSQL'],
      timeline: '4 months',
      team: '8 specialists'
    },
    {
      icon: Heart,
      company: 'Regional Healthcare Network',
      industry: 'Healthcare',
      title: 'Predictive Patient Care Platform',
      challenge: 'The healthcare network faced challenges with patient readmission rates, inefficient resource allocation, and difficulty predicting patient deterioration.',
      solution: 'We built an AI-powered predictive analytics platform that monitors patient data in real-time, identifies high-risk patients, predicts potential complications, and recommends preventive interventions.',
      results: [
        '37% reduction in patient readmissions',
        '52% improvement in early detection',
        '$8M annual cost savings',
        '25% reduction in average length of stay',
        '89% clinician satisfaction rate'
      ],
      technologies: ['PyTorch', 'Python', 'Azure', 'FHIR', 'MongoDB'],
      timeline: '6 months',
      team: '12 specialists'
    },
    {
      icon: Building2,
      company: 'Manufacturing Enterprise',
      industry: 'Manufacturing',
      title: 'Predictive Maintenance System',
      challenge: 'Unexpected equipment failures were causing production downtime, costing millions in lost productivity. Traditional preventive maintenance was either too early or too late.',
      solution: 'We implemented an IoT-enabled predictive maintenance solution using machine learning to analyze sensor data from equipment, predict failures before they occur, and optimize maintenance schedules.',
      results: [
        '68% reduction in unplanned downtime',
        '43% decrease in maintenance costs',
        '$15M annual savings',
        '35% improvement in equipment lifespan',
        '92% prediction accuracy'
      ],
      technologies: ['Scikit-learn', 'Python', 'Azure IoT', 'Time Series DB', 'Power BI'],
      timeline: '5 months',
      team: '10 specialists'
    },
    {
      icon: DollarSign,
      company: 'Financial Services Firm',
      industry: 'Finance',
      title: 'AI Fraud Detection System',
      challenge: 'The firm was experiencing significant losses due to fraudulent transactions. Their rule-based system had high false positive rates, causing customer frustration.',
      solution: 'We developed a real-time AI fraud detection system using advanced machine learning algorithms that analyze transaction patterns, user behavior, and contextual data to identify fraudulent activities.',
      results: [
        '84% improvement in fraud detection',
        '76% reduction in false positives',
        '$22M prevented fraud losses annually',
        '3-second average detection time',
        '94% customer satisfaction improvement'
      ],
      technologies: ['XGBoost', 'Python', 'Kafka', 'Cassandra', 'Docker'],
      timeline: '7 months',
      team: '14 specialists'
    },
    {
      icon: TrendingUp,
      company: 'Supply Chain Logistics',
      industry: 'Logistics',
      title: 'AI-Driven Route Optimization',
      challenge: 'The logistics company faced challenges with inefficient routing, high fuel costs, delayed deliveries, and difficulty adapting to real-time changes.',
      solution: 'We developed an AI-powered route optimization system that uses machine learning, real-time data, and predictive analytics to determine the most efficient delivery routes.',
      results: [
        '34% reduction in fuel costs',
        '41% improvement in on-time deliveries',
        '$18M annual operational savings',
        '29% increase in daily deliveries',
        '82% driver satisfaction improvement'
      ],
      technologies: ['Google OR-Tools', 'Python', 'Google Cloud', 'Redis', 'GraphQL'],
      timeline: '5 months',
      team: '9 specialists'
    },
    {
      icon: BarChart,
      company: 'Marketing Technology Company',
      industry: 'MarTech',
      title: 'Predictive Customer Analytics',
      challenge: 'The company lacked insights into customer behavior and couldn\'t effectively predict churn or identify upsell opportunities.',
      solution: 'We built a comprehensive customer analytics platform that uses machine learning to segment customers, predict churn risk, identify upsell opportunities, and optimize marketing spend.',
      results: [
        '56% improvement in churn prediction',
        '47% increase in customer lifetime value',
        '$9M additional revenue from upsells',
        '38% improvement in marketing ROI',
        '71% reduction in customer acquisition cost'
      ],
      technologies: ['Pandas', 'Python', 'Snowflake', 'Tableau', 'Airflow'],
      timeline: '4 months',
      team: '7 specialists'
    }
  ];

  return (
    <div className="pt-20 sm:pt-28 md:pt-32 lg:pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/8 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/8 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/6 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Real-world AI solutions delivering measurable results
          </p>
        </div>

        <div className="mb-12 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl shadow-xl p-6 md:p-10 text-white relative overflow-hidden border border-white/10">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Target className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl sm:text-3xl font-bold">Innovation at Scale</h2>
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            <p className="text-base sm:text-lg opacity-90 mb-6 max-w-2xl mx-auto text-center">
              Cutting-edge projects in AI, gaming, and research platforms
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-3xl font-black mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">70+</div>
                  <div className="text-xs font-semibold opacity-90">AI Solutions</div>
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-3xl font-black mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">80%</div>
                  <div className="text-xs font-semibold opacity-90">Efficiency Gain</div>
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-3xl font-black mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">35%</div>
                  <div className="text-xs font-semibold opacity-90">Cost Reduction</div>
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-3xl font-black mb-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">100+</div>
                  <div className="text-xs font-semibold opacity-90">Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {caseStudies.map((study, index) => (
            <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200/60 hover:border-blue-300/80 relative">
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-5 sm:p-6 text-white relative overflow-hidden">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                
                <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg border border-white/30">
                    <study.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 leading-tight">{study.title}</h2>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">{study.company}</span>
                      <span className="text-xs opacity-80">•</span>
                      <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">{study.industry}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8 relative">
                {/* Metrics Cards - Only for first 3 projects */}
                {study.metrics && (
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-3 border border-blue-200/50 hover:border-blue-300/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                        <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">{metric.value}</div>
                        <div className="text-[10px] font-semibold text-gray-600 uppercase tracking-wide">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Features Grid - Only for first 3 projects */}
                {study.features && (
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {study.features.map((feature, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-xl p-4 border border-slate-200/50 hover:border-blue-300/60 hover:shadow-md transition-all duration-300">
                        <h4 className="text-sm font-bold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-xs text-gray-700 leading-relaxed">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Benefits Section - Only for first 2 projects */}
                {study.benefits && (
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-sm">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {study.company === 'Vyuh' ? 'Why Corporates Use Vyuh' : 'Why Parents Love This App'}
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {study.benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 rounded-xl p-4 border border-purple-200/50 hover:border-purple-300/80 hover:shadow-md transition-all duration-300">
                          <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-start">
                            <span className="text-purple-600 mr-2">{idx + 1}️⃣</span>
                            {benefit.title}
                          </h4>
                          <p className="text-xs text-gray-700 leading-relaxed">{benefit.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="group/item bg-gradient-to-br from-red-50/50 to-orange-50/50 rounded-xl p-4 border border-red-200/40 hover:border-red-300/60 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-sm">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900">Challenge</h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div className="group/item bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-xl p-4 border border-blue-200/40 hover:border-blue-300/60 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900">Solution</h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-sm">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Results</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="group/result bg-gradient-to-br from-green-50/80 to-emerald-50/80 p-3 rounded-xl border border-green-200/50 hover:border-green-300/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover/result:scale-110 transition-transform">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-xs text-gray-800 font-semibold leading-relaxed">{result}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl p-4 border border-gray-200/60">
                  <div className={`grid sm:grid-cols-2 ${study.link ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-3`}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 hover:shadow-md transition-all duration-300">
                      <h4 className="text-[10px] font-bold text-gray-600 mb-2 uppercase tracking-wider">Technologies</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-[10px] font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 hover:shadow-md transition-all duration-300">
                      <h4 className="text-[10px] font-bold text-gray-600 mb-2 uppercase tracking-wider">Timeline</h4>
                      <div className="flex items-center space-x-1.5">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                        <p className="text-gray-900 font-bold text-sm">{study.timeline}</p>
                      </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 hover:shadow-md transition-all duration-300">
                      <h4 className="text-[10px] font-bold text-gray-600 mb-2 uppercase tracking-wider">Team</h4>
                      <div className="flex items-center space-x-1.5">
                        <Users className="w-4 h-4 text-purple-600" />
                        <p className="text-gray-900 font-bold text-sm">{study.team}</p>
                      </div>
                    </div>
                    {study.link && (
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 hover:shadow-md transition-all duration-300">
                        <h4 className="text-[10px] font-bold text-gray-600 mb-2 uppercase tracking-wider">Live Project</h4>
                        <a
                          href={study.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-lg font-bold text-xs hover:shadow-md hover:scale-105 transition-all duration-300"
                        >
                          <Globe className="w-3 h-3" />
                          <span>Visit</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center relative overflow-hidden border border-white/10">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Ready to Create Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Success Story?</span>
            </h2>
            
            <p className="text-base sm:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results
            </p>
            
            <a
              href="https://tidycal.com/team/deepiotics-team/call"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <span>Schedule Free Consultation</span>
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
            
            <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-xs opacity-90">
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No Commitment</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Expert Consultation</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Tailored Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
