import { useState } from 'react';
import { MapPin, ExternalLink, Calendar, Users, Newspaper, Trophy, Lightbulb, Mic } from 'lucide-react';

const mediaHighlights = [
  {
    id: 1,
    image: '/AI Innovation in Pandemic Response.jpeg',
    title: 'AI Innovation in Pandemic Response',
    subtitle: 'Featured in City Bhaskar',
    description:
      'Our AI-driven COVID-19 detection software and automated sanitization solutions were featured in City Bhaskar for supporting communities during the pandemic.',
    date: 'April 2020',
    location: 'Multiple Cities',
    attendees: '1000+',
    category: 'Innovation',
  },
  {
    id: 2,
    image: '/My Eyes.jpeg',
    title: "AI-Based Hindi App 'My Eyes' for Visually Impaired",
    subtitle: 'Empowering the Visually Challenged with AI',
    description:
      'Dr. Bhavna Nigam developed an AI-powered Hindi mobile app called "My Eyes" for visually impaired individuals. The app uses a phone\'s camera to detect objects, surroundings, and currency, providing audio feedback in Hindi.',
    date: '',
    location: 'Indore',
    attendees: '',
    category: 'Innovation',
  },
  {
    id: 3,
    image: '/Start-up Awards.jpg',
    title: 'Start-up Awards — Indore Super Startups Event',
    subtitle: 'Recognizing Top 75 Startups of Indore',
    description:
      "Organized to recognize 75 top startups during India's 75th Independence year. 25 startups were specially awarded by Union Minister Dr. Bhagwat Karad. The event aimed to boost Indore's startup ecosystem with funding, mentorship, and networking.",
    date: '',
    location: 'Indore',
    attendees: '75 Startups',
    category: 'Awards',
  },
  {
    id: 4,
    image: '/VISWACON 2023 Technology Conference.jpeg',
    title: 'VISWACON 2023 Technology Conference',
    subtitle: 'Recognizing Innovation in Engineering & Technology',
    description:
      'At VISWACON 2023 organized by Vishwakarma Institute of Information Technology, industry professionals and academic leaders gathered to discuss emerging trends in AI and technological innovation.',
    date: 'November 2023',
    location: 'Vishwakarma Institute',
    attendees: '300+',
    category: 'Conference',
  },
  {
    id: 5,
    image: '/Nari Shakti Award Recognition 2026.jpeg',
    title: 'Nari Shakti Award Recognition 2026',
    subtitle: 'Honoring Women Leadership & Excellence',
    description:
      'Dr. Bhavana Nigam was invited as an honored guest at the prestigious Nari Shakti Award ceremony organized by the Malwa Journalist Forum in Indore, celebrating inspiring women in society, education, and innovation.',
    date: 'March 2026',
    location: 'Indore',
    attendees: '200+',
    category: 'Awards',
  },
  {
    id: 6,
    image: '/Media Recognition for Nari Shakti Awards.jpeg',
    title: 'Media Recognition for Nari Shakti Awards',
    subtitle: 'Featured in Leading Hindi News Coverage',
    description:
      'The Nari Shakti Award ceremony received wide media coverage highlighting achievements of distinguished personalities including Dr. Bhavana Nigam, prominently reported by Hindi daily Rashtriya Hindi Mail.',
    date: 'March 7, 2026',
    location: 'Indore',
    attendees: '150+',
    category: 'Media',
  },
];

const categoryConfig: Record<string, { color: string; bg: string; icon: React.ElementType; gradient: string }> = {
  Conference: { color: 'text-blue-700', bg: 'bg-blue-100', icon: Mic, gradient: 'from-blue-500 to-cyan-500' },
  Awards:     { color: 'text-purple-700', bg: 'bg-purple-100', icon: Trophy, gradient: 'from-purple-500 to-pink-500' },
  Media:      { color: 'text-green-700', bg: 'bg-green-100', icon: Newspaper, gradient: 'from-green-500 to-teal-500' },
  Innovation: { color: 'text-orange-700', bg: 'bg-orange-100', icon: Lightbulb, gradient: 'from-orange-500 to-red-500' },
};

const stats = [
  { value: '6+', label: 'Media Features' },
  { value: '4', label: 'Award Recognitions' },
  { value: '2K+', label: 'Lives Impacted' },
  { value: '5+', label: 'Years of Coverage' },
];

const MediaPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Innovation', 'Awards', 'Conference', 'Media'];

  const filtered = activeFilter === 'All'
    ? mediaHighlights
    : mediaHighlights.filter(m => m.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-10">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/8 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Media Journey
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Celebrating milestones of innovation, recognition, and impact — as featured across leading media platforms and prestigious award ceremonies.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{s.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item) => {
            const cfg = categoryConfig[item.category] ?? { color: 'text-gray-700', bg: 'bg-gray-100', icon: Newspaper, gradient: 'from-gray-500 to-gray-600' };
            const Icon = cfg.icon;
            return (
              <div
                key={item.id}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/60 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm ${cfg.bg} ${cfg.color}`}>
                      <Icon className="w-3 h-3" />
                      {item.category}
                    </span>
                  </div>

                  {/* Date badge */}
                  {item.date && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-lg">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>
                  )}

                  {/* Bottom info */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-white text-xs font-medium">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                    {item.attendees && (
                      <span className="inline-flex items-center gap-1 text-white text-xs font-medium">
                        <Users className="w-3 h-3" />
                        {item.attendees}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  {/* Number + gradient line */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-8 bg-gradient-to-r ${cfg.gradient} rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
                      <span className="text-white text-xs font-black">{String(item.id).padStart(2, '0')}</span>
                    </div>
                    <div className={`flex-1 h-0.5 bg-gradient-to-r ${cfg.gradient} rounded-full opacity-30`} />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className={`text-sm font-semibold mb-3 ${cfg.color}`}>
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <Newspaper className="w-12 h-12 mx-auto mb-4 opacity-40" />
            <p className="text-lg font-medium">No items in this category</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12">
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 sm:p-10 text-white text-center overflow-hidden border border-white/10 shadow-2xl">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Newspaper className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200">Media Collaboration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Want to be{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Featured?</span>
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Have an interesting AI story or want to collaborate on content? Let's create something amazing together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
