import { useState } from 'react';
import { FileText, Calendar, Download, ExternalLink, Search, Filter, BookOpen, Award, Users, Eye } from 'lucide-react';

const PublicationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const publications = [
    {
      id: 1,
      type: 'research-paper',
      title: 'Deep Learning Approaches for Automated Dental X-ray Analysis: A Comprehensive Study',
      authors: ['Dr. Rajesh Kumar', 'Priya Sharma', 'Deepiotics Research Team'],
      journal: 'Journal of Medical AI',
      date: '2024-03-15',
      abstract: 'This paper presents a novel approach to automated dental X-ray analysis using Detectron2 framework with Mask-RCNN for tooth detection and classification. Our system achieves 95% accuracy in identifying 32 tooth classes and diagnosing various dental conditions.',
      category: 'healthcare',
      status: 'published',
      citations: 45,
      downloads: 1250,
      doi: '10.1234/jmai.2024.001',
      pdfUrl: '#',
      tags: ['Deep Learning', 'Medical AI', 'Computer Vision', 'Dental Imaging']
    },
    {
      id: 2,
      type: 'conference-paper',
      title: 'NOx Emission Prediction Using IoT Sensors and Deep Neural Networks',
      authors: ['Amit Patel', 'Sarah Johnson', 'Environmental AI Lab'],
      journal: 'IEEE Conference on Environmental Monitoring',
      date: '2024-02-28',
      abstract: 'We propose a deep neural network architecture for predicting NOx emissions from IoT sensor data. Our model achieves 81% accuracy through comprehensive EDA, noise removal, and hyperparameter optimization.',
      category: 'environment',
      status: 'published',
      citations: 32,
      downloads: 890,
      doi: '10.1109/iem.2024.002',
      pdfUrl: '#',
      tags: ['IoT', 'Environmental Monitoring', 'Deep Learning', 'Emission Prediction']
    },
    {
      id: 3,
      type: 'white-paper',
      title: 'The Future of AI in Healthcare: Transforming Diagnostic Accuracy',
      authors: ['Deepiotics Research Team'],
      journal: 'Deepiotics Publications',
      date: '2024-02-15',
      abstract: 'A comprehensive analysis of AI applications in healthcare, focusing on diagnostic accuracy improvements, cost reduction, and patient outcome enhancement through machine learning technologies.',
      category: 'healthcare',
      status: 'published',
      citations: 78,
      downloads: 2340,
      doi: 'deepiotics.wp.2024.001',
      pdfUrl: '#',
      tags: ['Healthcare AI', 'Diagnostics', 'Machine Learning', 'Medical Technology']
    },
    {
      id: 4,
      type: 'case-study',
      title: 'Vyuh Gaming Platform: Reviving Ancient Strategies Through Modern AI',
      authors: ['Game Development Team', 'Cultural Heritage Experts'],
      journal: 'AI in Gaming Quarterly',
      date: '2024-01-30',
      abstract: 'This case study explores the development of Vyuh, a strategic gaming platform that combines ancient Indian warfare tactics with modern AI algorithms to create an engaging educational experience.',
      category: 'gaming',
      status: 'published',
      citations: 23,
      downloads: 567,
      doi: '10.1234/aig.2024.003',
      pdfUrl: '#',
      tags: ['Gaming AI', 'Cultural Heritage', 'Strategic Gaming', 'Educational Technology']
    },
    {
      id: 5,
      type: 'technical-report',
      title: 'Voice UI Assessment Systems: Psychological Evaluation Through AI',
      authors: ['Psychology AI Team', 'Voice Technology Lab'],
      journal: 'Technical Reports in AI Psychology',
      date: '2024-01-15',
      abstract: 'Technical documentation of voice-based psychological assessment systems, including intent recognition, dialogue flow control, and multi-language support for enhanced accessibility.',
      category: 'psychology',
      status: 'published',
      citations: 19,
      downloads: 445,
      doi: 'tr.aip.2024.001',
      pdfUrl: '#',
      tags: ['Voice AI', 'Psychology', 'Assessment Systems', 'Natural Language Processing']
    },
    {
      id: 6,
      type: 'research-paper',
      title: 'COVID-19 Detection from Chest X-rays: A Deep Learning Approach',
      authors: ['Medical AI Research Team', 'Radiology Experts'],
      journal: 'International Journal of Medical Imaging',
      date: '2023-12-20',
      abstract: 'We present CovidXTrail, an AI system for rapid COVID-19 and pneumonia detection from chest X-rays. The system demonstrates high accuracy and significantly reduces diagnosis time for healthcare professionals.',
      category: 'healthcare',
      status: 'published',
      citations: 156,
      downloads: 3420,
      doi: '10.1234/ijmi.2023.045',
      pdfUrl: '#',
      tags: ['COVID-19', 'Medical Imaging', 'Deep Learning', 'Radiology AI']
    },
    {
      id: 7,
      type: 'book-chapter',
      title: 'AI-Powered Consumer Behavior Analysis in E-commerce',
      authors: ['E-commerce AI Team'],
      journal: 'Advances in AI for Business Applications',
      date: '2023-11-10',
      abstract: 'A comprehensive chapter on using machine learning for consumer cognitive profiling, behavioral analysis, and personalized shopping experiences in e-commerce platforms.',
      category: 'business',
      status: 'published',
      citations: 67,
      downloads: 1890,
      doi: '10.1234/aiba.2023.ch12',
      pdfUrl: '#',
      tags: ['E-commerce AI', 'Consumer Behavior', 'Personalization', 'Business Intelligence']
    },
    {
      id: 8,
      type: 'preprint',
      title: 'Multi-Agent Systems for Collaborative Research Platforms',
      authors: ['Research Platform Team', 'Collaboration AI Lab'],
      journal: 'arXiv Preprint',
      date: '2024-03-01',
      abstract: 'This preprint discusses the architecture and implementation of multi-agent systems for facilitating collaborative research, focusing on the ResearchHub platform and its 20,000+ verified researchers.',
      category: 'research',
      status: 'preprint',
      citations: 8,
      downloads: 234,
      doi: 'arxiv:2024.001234',
      pdfUrl: '#',
      tags: ['Multi-Agent Systems', 'Research Collaboration', 'Platform Architecture', 'Academic Networks']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Publications', count: publications.length },
    { id: 'healthcare', name: 'Healthcare', count: publications.filter(p => p.category === 'healthcare').length },
    { id: 'environment', name: 'Environment', count: publications.filter(p => p.category === 'environment').length },
    { id: 'gaming', name: 'Gaming', count: publications.filter(p => p.category === 'gaming').length },
    { id: 'psychology', name: 'Psychology', count: publications.filter(p => p.category === 'psychology').length },
    { id: 'business', name: 'Business', count: publications.filter(p => p.category === 'business').length },
    { id: 'research', name: 'Research', count: publications.filter(p => p.category === 'research').length }
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory;
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'research-paper': return '📄';
      case 'conference-paper': return '🎓';
      case 'white-paper': return '📋';
      case 'case-study': return '📊';
      case 'technical-report': return '🔧';
      case 'book-chapter': return '📚';
      case 'preprint': return '📝';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'research-paper': return 'bg-blue-100 text-blue-800';
      case 'conference-paper': return 'bg-purple-100 text-purple-800';
      case 'white-paper': return 'bg-green-100 text-green-800';
      case 'case-study': return 'bg-orange-100 text-orange-800';
      case 'technical-report': return 'bg-red-100 text-red-800';
      case 'book-chapter': return 'bg-indigo-100 text-indigo-800';
      case 'preprint': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'preprint': return 'bg-yellow-100 text-yellow-800';
      case 'under-review': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200/60">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {publications.length}
            </div>
            <div className="text-sm text-gray-600">Publications</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200/60">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {publications.reduce((sum, pub) => sum + pub.citations, 0)}
            </div>
            <div className="text-sm text-gray-600">Citations</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200/60">
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {publications.reduce((sum, pub) => sum + pub.downloads, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Downloads</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200/60">
            <div className="text-2xl font-bold text-orange-600 mb-1">
              {new Set(publications.flatMap(pub => pub.authors)).size}
            </div>
            <div className="text-sm text-gray-600">Authors</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/60 p-6">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search publications, authors, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((publication) => (
            <div
              key={publication.id}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200/60 hover:border-blue-300/80 hover:-translate-y-1"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${getTypeColor(publication.type)}`}>
                        {getTypeIcon(publication.type)} {publication.type.replace('-', ' ').toUpperCase()}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(publication.status)}`}>
                        {publication.status.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {publication.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{publication.authors.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(publication.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {publication.abstract}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {publication.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>{publication.citations} citations</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{publication.downloads.toLocaleString()} downloads</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{publication.journal}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <a
                      href={publication.pdfUrl}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-300">
                      <ExternalLink className="w-4 h-4" />
                      DOI: {publication.doi}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPublications.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No publications found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

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
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationPage;