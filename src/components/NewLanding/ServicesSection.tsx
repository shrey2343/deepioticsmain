import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

interface Category {
  id: string;
  title: string;
  subtitle: string;
  services: string[];
  link: string;
}

const ServicesSection: React.FC = () => {
  const categories: Category[] = [
    {
      id: 'ai-growth',
      title: 'AI Business Growth Suite',
      subtitle: 'Most small and mid-sized businesses know AI can help — they just don\'t know where to start, or have a team to run it. Our AI Business Growth Suite handles everything: done-for-you websites, AI marketing agents, AI sales agents, chatbots, lead capture, and ad automation. You focus on running the business. The AI handles the growth.',
      services: [
        'AI Marketing Agent',
        'AI Sales Agent',
        'Done-for-you AI Website & Ads Setup',
        '24/7 AI Chatbots & Voice Agents',
        'Data-Driven Analytics & Tracking'
      ],
      link: '/AI-business-growth'
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      subtitle: 'We build AI that works in production — not just in demos. From AI agents and machine learning to QA testing and healthcare analytics, every solution is tailored to your business and built to perform at scale.',
      services: [
        'AI QA & Software Testing',
        'AI Agent Development',
        'Machine Learning Solutions',
        'Business Intelligence & Analytics',
        'Process Automation',
        'AI for Healthcare',
        'Data Engineering'
      ],
      link: '/ai-solutions'
    },
    {
      id: 'bioscience',
      title: 'Bioscience & Genomics AI',
      subtitle: 'We bring the same AI rigour we apply to enterprise software to the world of genomics. Deepiotics delivers end-to-end NGS data analysis — WGS, WES, RNA-Seq, oncology genomics, and reproductive genomics — for labs, hospitals, and diagnostic centers. White-label reports in 24–48 hours. No infrastructure required on your end.',
      services: [
        'NGS Data Analysis',
        'Oncology Genomics & Cancer Panel Analysis',
        'IVF & Reproductive Genomics — PGT-A, PGT-M, PGT-SR',
        'RNA-Seq, Metagenomics & Advanced Bioinformatics',
        'White-Label Reports Delivered in 24–48 Hours'
      ],
      link: '/bioscience-ngs'
    },
    {
      id: 'bioai-lab',
      title: 'BioAI Lab',
      subtitle: 'India\'s first no-code bioinformatics career program. In 8 weeks, Life Science and Biotechnology graduates go from FASTQ to job-ready — running real NGS pipelines with Galaxy, ChatGPT, and Claude, building a GitHub portfolio, and walking into Biocon and Syngene interviews prepared. No Python. No terminal. No prior experience needed.',
      services: [
        '8-Week, 100% Online Curriculum',
        'Run Real NGS Pipelines — No Coding Required',
        'Build a Professional GitHub Portfolio',
        '90-Question Interview Bank + AI Mock Interviews',
        'Job-Ready in 90 Days'
      ],
      link: '/bioai-lab'
    }
  ];

  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);

  return (
    <section id="services" className="s-white">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <span className="eyebrow">What We Build</span>
        <h2 className="sec-title">End-to-End AI Solutions</h2>
        <p className="sec-sub">
          From growth automation to bioscience AI — every solution starts with your specific challenge, not our service catalogue.
        </p>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-12">
          {/* LEFT – ENHANCED CATEGORY TABS */}
          <div className="lg:w-1/3">
            {/* Mobile: Horizontal Scrollable Tabs */}
            <div className="lg:hidden flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {categories.map((category, index) => {
                const isActive = activeCategory.id === category.id;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category)}
                    className="relative flex-shrink-0 snap-start"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className={`relative px-4 py-3 rounded-xl transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                          : "bg-white/80 text-slate-700 border border-slate-200"
                      }`}
                    >
                      <span className="font-semibold text-sm">{category.title}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Desktop: Vertical Tabs */}
            <div className="hidden lg:block space-y-4">
              {categories.map((category, index) => {
                const isActive = activeCategory.id === category.id;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category)}
                    className="relative w-full text-left group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    {/* Glow Effect on Active */}
                    {isActive && (
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-75 blur-lg"
                        layoutId="activeGlow"
                      />
                    )}

                    {/* Card Background */}
                    <div
                      className={`relative p-6 rounded-2xl transition-all duration-300 ${
                        isActive
                          ? "bg-white shadow-2xl border-2 border-blue-200"
                          : "bg-white/60 hover:bg-white/90 border-2 border-transparent hover:border-blue-100 shadow-md hover:shadow-lg"
                      }`}
                    >
                      {/* Animated Border */}
                      {isActive && (
                        <motion.span
                          layoutId="activeBlueBorder"
                          className="absolute inset-0 rounded-2xl border-2 border-blue-500/60 pointer-events-none"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}

                      {/* Corner Accent */}
                      <motion.div
                        className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl rounded-tr-2xl transition-opacity duration-300 ${
                          isActive ? 'from-blue-400/30 to-transparent opacity-100' : 'from-blue-300/20 to-transparent opacity-0 group-hover:opacity-100'
                        }`}
                        animate={isActive ? {
                          opacity: [0.3, 0.6, 0.3],
                        } : {}}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />

                      {/* Number Badge */}
                      <motion.div
                        className={`absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg ${
                          isActive ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white' : 'bg-slate-200 text-slate-600 group-hover:bg-blue-100'
                        }`}
                        animate={isActive ? {
                          scale: [1, 1.1, 1],
                        } : {}}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        {index + 1}
                      </motion.div>

                      <h3
                        className={`font-display text-xl font-extrabold tracking-tight mb-2 transition-colors duration-300 ${
                          isActive ? "text-blue-700" : "text-blue-600 group-hover:text-blue-700"
                        }`}
                      >
                        {category.title}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2 pr-4">
                        {category.subtitle}
                      </p>

                      {/* Arrow Indicator */}
                      <motion.div
                        className={`absolute right-4 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                        }`}
                        animate={isActive ? {
                          x: [0, 5, 0],
                        } : {}}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                      >
                        <ArrowRight className="w-5 h-5 text-blue-600" />
                      </motion.div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* RIGHT – ENHANCED SERVICES */}
          <div className="lg:w-2/3">
            <div className="relative">
              {/* Glow Background */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />

              <div className="relative bg-white/95 backdrop-blur-sm p-8 md:p-10 pb-12 rounded-3xl shadow-2xl border-2 border-blue-100 overflow-hidden">
                {/* Animated Corner Decorations */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/40 to-transparent rounded-tr-3xl"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-200/40 to-transparent rounded-bl-3xl"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                    className="relative z-10"
                  >
                    <div className="mb-8">
                      <motion.h2
                        className="font-display text-3xl md:text-4xl font-extrabold mb-3"
                        style={{
                          background: 'linear-gradient(to right, #2563eb, #7c3aed)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {activeCategory.title}
                      </motion.h2>
                      <motion.p
                        className="font-body text-blue-600 font-semibold text-lg"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {activeCategory.subtitle}
                      </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {activeCategory.services.map((service, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3 group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            className="mt-1 flex items-center justify-center w-6 h-6 rounded-full border-2 border-blue-500 bg-white group-hover:bg-blue-500 transition-all duration-300 flex-shrink-0"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className="w-4 h-6 text-blue-500 group-hover:text-white transition-colors duration-300" />
                          </motion.div>
                          <span className="text-[15px] leading-relaxed text-slate-700 group-hover:text-blue-800 transition-colors duration-300 font-medium">
                            {service}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <motion.div
                      className="mt-8 flex justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <a href={activeCategory.link}>
                        <motion.button
                          className="group relative px-8 py-3 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 overflow-hidden"
                          style={{
                            background: 'linear-gradient(to right, #2563eb, #9333ea)'
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          {/* Shine Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          />
                        </motion.button>
                      </a>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
