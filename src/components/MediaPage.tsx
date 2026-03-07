import { useState } from 'react';
import { Play, Calendar, Eye, Share2, ExternalLink, Filter, Search, Grid, List } from 'lucide-react';

const MediaPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const mediaItems = [
    {
      id: 1,
      type: 'video',
      title: 'AI Revolution in Healthcare: Deepiotics Case Study',
      description: 'Explore how our AI solutions are transforming healthcare diagnostics and patient care through innovative machine learning algorithms.',
      thumbnail: '/xray.png',
      date: '2024-03-15',
      views: '12.5K',
      duration: '8:45',
      category: 'healthcare',
      link: 'https://www.youtube.com/watch?v=example1'
    },
    {
      id: 2,
      type: 'video',
      title: 'Building the Future: Vyuh Gaming Platform',
      description: 'Behind the scenes look at developing Vyuh, the strategic gaming platform that teaches ancient Indian warfare tactics.',
      thumbnail: '/vy7.PNG',
      date: '2024-03-10',
      views: '8.2K',
      duration: '12:30',
      category: 'gaming',
      link: 'https://www.youtube.com/watch?v=example2'
    },
    {
      id: 3,
      type: 'podcast',
      title: 'AI Ethics and Future of Technology',
      description: 'Deep dive discussion on AI ethics, responsible development, and the future of artificial intelligence in business.',
      thumbnail: '/LogoDeepiotics.png',
      date: '2024-03-05',
      views: '15.8K',
      duration: '45:20',
      category: 'technology',
      link: 'https://open.spotify.com/episode/example'
    },
    {
      id: 4,
      type: 'interview',
      title: 'CEO Interview: Vision for AI-Driven Future',
      description: 'Exclusive interview with our CEO discussing Deepiotics vision, growth strategy, and impact on the AI industry.',
      thumbnail: '/Narendra.png',
      date: '2024-02-28',
      views: '22.1K',
      duration: '25:15',
      category: 'business',
      link: 'https://www.youtube.com/watch?v=example3'
    },
    {
      id: 5,
      type: 'webinar',
      title: 'Machine Learning in Environmental Monitoring',
      description: 'Technical webinar showcasing our NOx emission prediction system and IoT sensor integration.',
      thumbnail: 'https://elements-resized.envatousercontent.com/envato-dam-assets-production/cb47cb6e-0fe7-4e58-9605-76b75b4a9d19/9c3bbd01-789b-4603-90f4-e0bc522d60c2.jpg?w=1400&cf_fit=scale-down&q=85&format=auto&s=6560560c7ab6b4d30f186a32238c9dfcf169e02b8353caa1b865e8650ae60714',
      date: '2024-02-20',
      views: '6.7K',
      duration: '35:40',
      category: 'environment',
      link: 'https://zoom.us/webinar/example'
    },
    {
      id: 6,
      type: 'demo',
      title: 'FutureVision AI Portrait Generator Demo',
      description: 'Live demonstration of our AI-powered portrait generation technology for visualizing children\'s future careers.',
      thumbnail: '/a1.PNG',
      date: '2024-02-15',
      views: '18.9K',
      duration: '15:30',
      category: 'ai',
      link: 'https://future-bloom-portraits.lovable.app'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Media', count: mediaItems.length },
    { id: 'healthcare', name: 'Healthcare', count: mediaItems.filter(item => item.category === 'healthcare').length },
    { id: 'gaming', name: 'Gaming', count: mediaItems.filter(item => item.category === 'gaming').length },
    { id: 'technology', name: 'Technology', count: mediaItems.filter(item => item.category === 'technology').length },
    { id: 'business', name: 'Business', count: mediaItems.filter(item => item.category === 'business').length },
    { id: 'environment', name: 'Environment', count: mediaItems.filter(item => item.category === 'environment').length },
    { id: 'ai', name: 'AI & ML', count: mediaItems.filter(item => item.category === 'ai').length }
  ];

  const filteredItems = mediaItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return '🎥';
      case 'podcast': return '🎧';
      case 'interview': return '🎤';
      case 'webinar': return '💻';
      case 'demo': return '🚀';
      default: return '📺';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-800';
      case 'podcast': return 'bg-purple-100 text-purple-800';
      case 'interview': return 'bg-blue-100 text-blue-800';
      case 'webinar': return 'bg-green-100 text-green-800';
      case 'demo': return 'bg-orange-100 text-orange-800';
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
            Media <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our latest videos, podcasts, interviews, and demos showcasing AI innovations and industry insights
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/60 p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search media..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-6 flex flex-wrap gap-2">
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

        {/* Media Grid/List */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-6'
        }`}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200/60 hover:border-blue-300/80 hover:-translate-y-1 ${
                viewMode === 'list' ? 'flex gap-6 p-6' : ''
              }`}
            >
              {/* Thumbnail */}
              <div className={`relative overflow-hidden ${
                viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'aspect-video'
              } bg-gradient-to-br from-gray-100 to-gray-200`}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type.toUpperCase()}
                  </span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                  {item.duration}
                </div>
              </div>

              {/* Content */}
              <div className={`${viewMode === 'list' ? 'flex-1' : 'p-6'}`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{item.views} views</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Watch Now
                  </a>
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No media found</h3>
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
              Want to be <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Featured?</span>
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Have an interesting AI story or want to collaborate on content? Let's create something amazing together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-bold text-base hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Get in Touch</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPage;