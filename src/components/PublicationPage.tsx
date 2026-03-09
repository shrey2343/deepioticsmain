import { useState } from 'react';
import { FileText, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PublicationPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Featured Publications with Images
  const featuredPublications = [
    {
      id: 'fp1',
      image: '/2.jpeg',
      title: 'IoT and AI Technologies for Sustainable Living: Self-Diagnosis in Healthcare using AI Chatbots',
      description: 'Research on IoT and AI technologies for sustainable living, focusing on self-diagnosis capabilities in healthcare through intelligent chatbot systems and AI-powered medical assistance.',
      category: 'Healthcare AI',
      date: '2022-03-15',
      link: '#', // You can provide the actual link here
      tags: ['IoT', 'AI Technologies', 'Healthcare', 'Chatbots']
    },
    {
      id: 'fp2',
      image: '/3.jpeg',
      title: 'Automatic Detection from X-ray using Deep Learning Methods',
      description: 'Deep learning and radiological imaging research focusing on automatic detection methods from X-ray images using advanced neural networks and computer vision techniques.',
      category: 'Medical Imaging',
      date: '2021-11-28',
      link: '#', // You can provide the actual link here
      tags: ['Deep Learning', 'X-ray Detection', 'Medical Imaging', 'Computer Vision']
    },
    {
      id: 'fp3',
      image: '/4.jpeg',
      title: 'Computer Vision Innovation Paper',
      description: 'Revolutionary approaches to computer vision problems, featuring novel algorithms and state-of-the-art performance metrics in image processing and analysis.',
      category: 'Computer Vision',
      date: '2024-03-15',
      link: '#', // You can provide the actual link here
      tags: ['Computer Vision', 'Image Processing', 'Innovation']
    },
    {
      id: 'fp4',
      image: '/5.jpeg',
      title: 'Remote Monitoring of Heart Rate, Blood Pressure, Respiratory Rate & SpO2 from Images - Without Physical Contact',
      description: 'IEEE research on non-contact monitoring of vital signs including heart rate, blood pressure, respiratory rate and SpO2 using computer vision and image processing techniques.',
      category: 'Biomedical Engineering',
      date: '2022-12-17',
      link: '#', // You can provide the actual link here
      tags: ['Remote Monitoring', 'Vital Signs', 'Computer Vision', 'Healthcare']
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredPublications.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredPublications.length) % featuredPublications.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="pt-20 sm:pt-28 md:pt-32 lg:pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/8 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/8 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Research <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Publications</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our latest research papers, technical reports, and publications advancing the field of artificial intelligence
          </p>
        </div>

        {/* Featured Publications Carousel */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Publications</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore our latest research highlights and breakthrough publications
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto px-20">
            {/* Navigation Buttons - Outside the card for desktop, inside for mobile */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-8 w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-gray-50 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-20 border border-gray-200"
              aria-label="Previous publication"
            >
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-gray-700" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-8 w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-gray-50 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-20 border border-gray-200"
              aria-label="Next publication"
            >
              <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-gray-700" />
            </button>

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white border border-gray-200/60 carousel-card">
              <div className="grid md:grid-cols-2 gap-0 min-h-[600px]">
                {/* Image Section */}
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 flex items-center justify-center">
                  {/* Animated Starry Background */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Animated Stars/Dots */}
                    {[...Array(50)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          opacity: [0.3, 0.8, 0.3],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 3,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                    
                    {/* Larger glowing dots */}
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={`large-${i}`}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-40"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          opacity: [0.2, 0.6, 0.2],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 3,
                        }}
                      />
                    ))}

                    {/* Floating gradient orbs */}
                    <motion.div
                      className="absolute w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"
                      animate={{ 
                        x: [0, 30, 0], 
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      style={{ top: '20%', left: '10%' }}
                    />
                    
                    <motion.div
                      className="absolute w-24 h-24 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-xl"
                      animate={{ 
                        x: [0, -25, 0], 
                        y: [0, 15, 0],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      style={{ bottom: '30%', right: '15%' }}
                    />
                  </div>
                  
                  <img
                    key={currentIndex} // Force re-render for animation
                    src={featuredPublications[currentIndex].image}
                    alt={featuredPublications[currentIndex].title}
                    className="w-full h-auto max-h-full object-contain carousel-image transform hover:scale-105 animate-fade-in-up relative z-10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/svg.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20"></div>
                  <div className="absolute top-6 right-6 animate-slide-in-right z-30">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {featuredPublications[currentIndex].category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center carousel-content">
                  <div className="flex items-center gap-3 mb-4 animate-slide-in-left" style={{animationDelay: '0.1s'}}>
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <span className="text-sm text-gray-600 font-medium">
                      {new Date(featuredPublications[currentIndex].date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                    {featuredPublications[currentIndex].title}
                  </h3>
                  
                  <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed animate-slide-in-left" style={{animationDelay: '0.3s'}}>
                    {featuredPublications[currentIndex].description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8 animate-slide-in-left" style={{animationDelay: '0.4s'}}>
                    {featuredPublications[currentIndex].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <a
                    href={featuredPublications[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-base hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-fit animate-slide-in-left"
                    style={{animationDelay: '0.5s'}}
                  >
                    <span>Read Publication</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-3">
              {featuredPublications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to publication ${index + 1}`}
                />
              ))}
            </div>

            {/* Publication Counter */}
            <div className="text-center mt-4">
              <span className="text-sm text-gray-500 font-medium">
                {currentIndex + 1} of {featuredPublications.length}
              </span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center relative overflow-hidden border border-white/10">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Collaborate on <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Research</span>
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Interested in collaborating on research or have a paper to publish? Join our research community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-bold text-base hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Submit Research</span>
                <FileText className="w-5 h-5" />
              </a>
              <a
                href="https://researchhub-frontend.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-3 rounded-xl font-bold text-base hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <span>Join ResearchHub</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationPage;