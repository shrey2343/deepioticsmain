import { FileText, ArrowRight, ExternalLink, Tag } from 'lucide-react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const publications = [
  // 2024
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80&fit=crop',
    category: 'Agricultural AI',
    date: 'October 1, 2025',
    author: 'Bhawna Nigam et al.',
    title: 'Innovative Approach to Enhancing Through Heterogeneous Context-Aware Graph Convolutional Networks for Accurate Ripeness Detection and Yield Estimation',
    description:
      'Presents WBRD-YE-HCAGCN — a novel deep learning framework using Heterogeneous Context-Aware Graph Convolutional Networks for wild blueberry ripeness detection and yield estimation. Achieved 97.5% accuracy, 98.2% recall, and 1.135s processing time, outperforming existing CNN-based methods.',
    tags: ['Graph Neural Networks', 'Yield Estimation', 'Deep Learning', 'Agriculture'],
    link: 'https://link.springer.com/chapter/10.1007/978-3-032-05373-2_40',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80&fit=crop',
    category: 'Sustainable Agriculture',
    date: 'June 3, 2024',
    author: 'Bhavna Nigam, Mangesh Vedpathak, Indra Jeet Chaudhary',
    title: 'Plasma Technology: An Emerging Tool for Sustainable Agriculture',
    description:
      'Explores how plasma technology can protect plants from pathogens and enhance seed germination, seedling vigour, and plant growth. Focuses on plasma treatment impacts on physiological processes and mitigation of environmental stressors such as drought, salinity, and pathogen infection. Published in CRC Press.',
    tags: ['Plasma Technology', 'Sustainable Agriculture', 'Plant Growth', 'Stress Management'],
    link: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003441175-13/plasma-technology-bhavna-nigam-mangesh-vedpathak-indra-jeet-chaudhary',
  },
  // 2023
  {
    id: 3,
    image: '/4.jpeg',
    category: 'Cancer Detection',
    date: 'March 15, 2023',
    title: 'Performance Analysis of Averaged Perceptron Machine Learning Classifier for Breast Cancer Detection',
    description:
      'Revolutionary approaches to computer vision problems, featuring novel algorithms and state-of-the-art performance metrics in image processing and analysis.',
    tags: ['Computer Vision', 'Image Processing', 'Innovation'],
    link: 'https://www.sciencedirect.com/science/article/pii/S1877050923001941',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&fit=crop',
    category: 'Cancer Detection',
    date: '2023',
    author: 'Vijay Birchha, Bhawna Nigam',
    title: 'Machine Learning Classifiers Performance Comparison for Breast Cancer Detection',
    description:
      'Assesses performance of ML classifiers — KNN, Naive Bayes, Random Forest, Neural Network, SVM, and Logistic Regression — on the Wisconsin Breast Cancer dataset. Logistic Regression achieved the best AUC of 0.9943 while Neural Network scored the highest accuracy of 0.989.',
    tags: ['Machine Learning', 'Breast Cancer', 'Classification', 'Wisconsin Dataset'],
    link: 'https://books.google.co.in/books?hl=en&lr=&id=6jTYEAAAQBAJ&oi=fnd&pg=PA20',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80&fit=crop',
    category: 'Environmental AI',
    date: '2023',
    author: 'Bhawna Nigam et al.',
    title: 'Maximising Net Zero in Energy-Intensive Industries: An Overview of AI Applications for Greenhouse Gas Reduction',
    description:
      'Comprehensive overview of AI applications targeting greenhouse gas reduction in energy-intensive industries. Reviews current AI-driven strategies, tools, and frameworks that support net-zero goals, covering emissions monitoring, process optimization, and predictive modelling for industrial decarbonization.',
    tags: ['AI', 'Net Zero', 'Greenhouse Gas', 'Energy Industry'],
    link: 'https://journals.sagepub.com/doi/abs/10.3233/JCC230003',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80&fit=crop',
    category: 'Cancer Detection',
    date: '2023',
    author: 'Bhawna Nigam et al.',
    title: 'Performance Analysis of Averaged Perceptron Machine Learning Classifier for Breast Cancer Detection',
    description:
      'Analyses the averaged perceptron classifier for breast cancer detection, evaluating its performance against standard ML benchmarks. Investigates feature selection, hyperparameter tuning, and classification accuracy on medical datasets to support computer-aided diagnosis systems.',
    tags: ['Perceptron', 'Breast Cancer', 'Feature Selection', 'Machine Learning'],
    link: 'https://www.sciencedirect.com/science/article/pii/S1877050923001941',
  },
  {
    id: 10,
    image: '/5.jpeg',
    category: 'Biomedical Engineering',
    date: 'March 2023',
    author: 'Bhawna Nigam et al.',
    title: 'A Systematic Analysis: Remote Monitoring of Heart Rate, Blood Pressure, Respiratory Rate, and Oxygen Saturation Based on Images and Without Physical Touch',
    description:
      'IEEE systematic analysis of non-contact vital sign monitoring using image-based techniques. Reviews methods for remotely measuring heart rate, blood pressure, respiratory rate, and SpO2 without physical contact, highlighting accuracy benchmarks and real-world clinical applicability.',
    tags: ['Remote Monitoring', 'Vital Signs', 'IEEE', 'Non-Contact Sensing'],
    link: 'https://ieeexplore.ieee.org/abstract/document/10074569',
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&fit=crop',
    category: 'Cancer Detection',
    date: '2023',
    author: 'Vijay Birchha, Bhawna Nigam',
    title: 'Machine Learning Classifiers Performance Comparison for Breast Cancer Detection',
    description:
      'Springer publication comparing ML classifier performance for breast cancer diagnosis using the Wisconsin dataset. Evaluates KNN, SVM, Random Forest, Neural Network, and Logistic Regression, proposing the best-performing classifier for computer-aided breast cancer detection systems.',
    tags: ['Springer', 'Breast Cancer', 'ML Classifiers', 'Neural Network'],
    link: 'https://link.springer.com/chapter/10.1007/978-981-99-1588-0_3',
  },
  {
    id: 13,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop',
    category: 'Cancer Detection',
    date: '2023',
    author: 'Bhawna Nigam et al.',
    title: 'Feature Selection Techniques and Hyper Parameter Tuning Impact on Classifier Performance for Breast Cancer Detection',
    description:
      'Investigates the combined impact of feature selection techniques and hyperparameter tuning on ML classifier performance for breast cancer detection. Demonstrates how optimized feature subsets and tuned parameters significantly improve classification accuracy, precision, and recall on medical datasets.',
    tags: ['Feature Selection', 'Hyperparameter Tuning', 'Breast Cancer', 'Classifier'],
    link: 'https://scholar.google.com/scholar?cluster=16939286792072881213&hl=en&oi=scholarr',
  },
  // 2022
  {
    id: 1,
    image: '/2.jpeg',
    category: 'Healthcare AI',
    date: 'March 15, 2022',
    title: 'Self-Diagnosis in Healthcare Systems Using AI Chatbots',
    description:
      'Research on IoT and AI technologies for sustainable living, focusing on self-diagnosis capabilities in healthcare through intelligent chatbot systems and AI-powered medical assistance.',
    tags: ['IoT', 'AI Technologies', 'Healthcare', 'Chatbots'],
    link: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003051022-5/self-diagnosis-healthcare-systems-using-ai-chatbots-bhawna-nigam-naman-mehra-niranjanamurthy',
  },
  {
    id: 4,
    image: '/5.jpeg',
    category: 'Biomedical Engineering',
    date: 'December 17, 2022',
    title: 'Remote Monitoring of Heart Rate, Blood Pressure, Respiratory Rate & SpO2 from Images - Without Physical Contact',
    description:
      'IEEE research on non-contact monitoring of vital signs including heart rate, blood pressure, respiratory rate and SpO2 using computer vision and image processing techniques.',
    tags: ['Remote Monitoring', 'Vital Signs', 'Computer Vision', 'Healthcare'],
    link: 'https://ieeexplore.ieee.org/abstract/document/10074569',
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80&fit=crop',
    category: 'Healthcare AI',
    date: '2022',
    author: 'Bhawna Nigam et al.',
    title: 'IoT and AI Technologies for Sustainable Living: Self-Diagnosis in Healthcare using AI Chatbots',
    description:
      'Explores IoT and AI technologies for sustainable living with a focus on self-diagnosis in healthcare. Covers intelligent chatbot systems, AI-powered medical assistance, and how connected devices enable proactive health monitoring.',
    tags: ['IoT', 'AI Technologies', 'Healthcare', 'Chatbots'],
    link: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003051022-5/self-diagnosis-healthcare-systems-using-ai-chatbots-bhawna-nigam-naman-mehra-niranjanamurthy',
  },
  {
    id: 14,
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=80&fit=crop',
    category: 'Assistive Technology',
    date: '2022',
    author: 'Bhawna Nigam et al.',
    title: 'Voice Enabled Application for the Visually-Impaired to Detect & Recognize Indian Currency in Hindi and English Using Deep Learning',
    description:
      'Presents a voice-enabled deep learning application that helps visually impaired users detect and recognize Indian currency notes in both Hindi and English. Combines computer vision with speech synthesis to provide real-time audio feedback, enhancing financial independence for the visually impaired.',
    tags: ['Deep Learning', 'Assistive Tech', 'Currency Detection', 'Voice UI'],
    link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4191843',
  },
  // 2021
  {
    id: 2,
    image: '/3.jpeg',
    category: 'Medical Imaging',
    date: 'November 28, 2021',
    title: 'Automatic Detection from X-ray Images by Utilizing Deep Learning Methods',
    description:
      'Deep learning and radiological imaging research focusing on automatic detection methods from X-ray images using advanced neural networks and computer vision techniques.',
    tags: ['Deep Learning', 'X-ray Detection', 'Medical Imaging', 'Computer Vision'],
    link: 'https://www.sciencedirect.com/science/article/pii/S0957417421003249',
  },
];

const categoryColors: Record<string, string> = {
  'Healthcare AI': 'bg-green-100 text-green-700',
  'Medical Imaging': 'bg-blue-100 text-blue-700',
  'Computer Vision': 'bg-purple-100 text-purple-700',
  'Biomedical Engineering': 'bg-rose-100 text-rose-700',
  'Agricultural AI': 'bg-emerald-100 text-emerald-700',
  'Sustainable Agriculture': 'bg-lime-100 text-lime-700',
  'Cancer Detection': 'bg-pink-100 text-pink-700',
  'Environmental AI': 'bg-teal-100 text-teal-700',
  'Assistive Technology': 'bg-orange-100 text-orange-700',
};

const PublicationPage = () => {
  useEffect(() => {
    gsap.to('.publication-card', {
      opacity: 1,
      y: 0,
      stagger: 0.07,
      duration: 0.55,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.publications-grid',
        start: 'top 72%'
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-[rgba(2,13,42,1)] pt-12 pb-12">
    <div className="relative">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/8 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/8 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            
            <span style={{
              background: 'linear-gradient(to right, #60a5fa, #c084fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Our Research Publications
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Explore our latest research papers, technical reports, and publications advancing the field of artificial intelligence
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 publications-grid">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="publication-card group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              style={{ opacity: 0, transform: 'translateY(28px)' }}
            >
              {/* Title Panel with Navy Blue Background */}
              <div className="relative h-56 overflow-hidden flex items-center justify-center flex-shrink-0" style={{ background: '#1E1B4B' }}>
                {/* decorative blobs */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                
                {/* title */}
                <div className="relative z-10 px-6 text-center">
                  <p className="text-white font-bold text-base leading-snug line-clamp-5">
                    {pub.title}
                  </p>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${categoryColors[pub.category] ?? 'bg-gray-100 text-gray-700'}`}>
                  {pub.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {pub.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {pub.tags.map((tag, i) => (
                    <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA - pushed to bottom */}
                <div className="mt-auto">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span>Read Publication</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Collaborate on{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Research</span>
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Interested in collaborating on research or have a paper to publish? Join our research community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-bold text-base hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                <span>Submit Research</span>
              </a>
              <a
                href="https://xperthiring.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-xl font-bold text-base hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Join ResearchHub</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default PublicationPage;
