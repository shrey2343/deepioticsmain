import { Target, Users, Award, TrendingUp, Globe, Lightbulb, Heart, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-slide-up">
            About Deepiotics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
            Pioneering the future of business through artificial intelligence and innovation
          </p>
        </div>

        <div className="mb-20 animate-slide-up" style={{animationDelay: '0.2s'}}>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:scale-[1.02]">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="mb-4">
                Founded with a vision to democratize artificial intelligence, Deepiotics has emerged as a leading force in
                AI-driven business transformation. We believe that every organization, regardless of size or industry,
                should have access to cutting-edge AI solutions that drive real business value.
              </p>
              <p className="mb-4">
                Our journey began when our founders recognized a critical gap in the market: businesses needed more than
                just AI tools they needed strategic partners who could understand their unique challenges and craft
                tailored solutions that deliver measurable results.
              </p>
              <p>
                Today, Deepiotics stands at the forefront of AI innovation, helping businesses across industries harness
                the power of artificial intelligence to optimize operations, enhance customer experiences, and unlock
                new opportunities for growth.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white border-2 border-blue-400/30 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <Target className="w-16 h-16 mb-6 animate-bounce-slow" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg opacity-95 leading-relaxed">
              To empower businesses worldwide with intelligent AI solutions that transform challenges into opportunities,
              driving innovation, efficiency, and sustainable growth in an increasingly digital world.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 md:p-12 text-white border-2 border-purple-400/30 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Lightbulb className="w-16 h-16 mb-6 animate-pulse-slow" />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg opacity-95 leading-relaxed">
              To be the world's most trusted AI partner, recognized for creating transformative solutions that shape
              the future of business, foster innovation, and make advanced technology accessible to all.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-12 animate-slide-up" style={{animationDelay: '0.5s'}}>Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-blue-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We operate with transparency, honesty, and ethical standards in everything we do, building trust with
                every interaction.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-purple-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '0.7s'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We constantly push boundaries, embrace new technologies, and create groundbreaking solutions that
                drive progress.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-green-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '0.8s'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of partnership, working closely with clients to achieve shared success and
                lasting impact.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-red-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '0.9s'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for excellence in every project, delivering solutions that exceed expectations and create
                measurable value.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20 border-2 border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-500 animate-slide-up" style={{animationDelay: '1s'}}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-12">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Deep Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team comprises world-class AI engineers, data scientists, and business strategists with decades
                  of combined experience in developing and deploying enterprise-grade AI solutions.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
                <p className="text-gray-600 leading-relaxed">
                  We've successfully delivered AI solutions for businesses across healthcare, finance, retail,
                  manufacturing, and more, driving measurable ROI and operational excellence.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 border border-green-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">End-to-End Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  From initial strategy and proof of concept to full-scale deployment and ongoing optimization, we
                  partner with you throughout your entire AI journey.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Client-Centric Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  We don't believe in one-size-fits-all solutions. Every engagement begins with understanding your
                  unique challenges, goals, and vision for success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border-2 border-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '1.1s'}}>
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-xl text-gray-600 font-semibold">Projects Completed</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border-2 border-purple-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '1.2s'}}>
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">200+</div>
            <div className="text-xl text-gray-600 font-semibold">Happy Clients</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg border-2 border-pink-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '1.3s'}}>
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent mb-2">98%</div>
            <div className="text-xl text-gray-600 font-semibold">Client Satisfaction</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white text-center border-2 border-white/20 hover:shadow-3xl transition-all duration-500 animate-slide-up" style={{animationDelay: '1.4s'}}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-pulse-slow">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Join hundreds of companies that trust Deepiotics to power their AI journey
          </p>
          <a
            href="https://tidycal.com/team/deepiotics-team/call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-blue-200 hover:border-blue-400"
          >
            Schedule Your Free AI Strategy Session
          </a>
        </div>
      </div>
    </div>
  );
}
