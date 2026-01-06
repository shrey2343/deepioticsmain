import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Star, Award, Users, TrendingUp, Shield, Clock, ArrowRight, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const googleSheetsData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        service: formData.service,
        project: formData.message
      };

      await fetch(import.meta.env.VITE_GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(googleSheetsData),
      });

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact-form`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: '',
          subject: formData.service || 'AI Service Consultation',
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to submit. Please try again.');
        return;
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-14 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden border-t border-yellow-400">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/10 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight">
            Get Your Free{" "}  
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
               AI Strategy Session
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto px-4 mb-8 leading-relaxed">
            Discover how custom AI development can 
            <span className="font-semibold text-green-600"> increase your revenue by 200%+</span> and 
            <span className="font-semibold text-blue-600"> reduce costs by 45%</span>. 
            Schedule your complimentary consultation with our AI experts today.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">500+ Clients Served</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">$50M+ Revenue Generated</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Shield className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium">Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-9 lg:gap-10 relative z-10">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Premium Contact Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Contact Our AI Experts</h3>
                  <p className="text-sm text-gray-600">Available 24/7 for enterprise clients</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Enterprise Email</h4>
                    <p className="text-base text-gray-700 font-medium">{import.meta.env.VITE_COMPANY_EMAIL}</p>
                    <p className="text-sm text-gray-500">Response within 2 hours</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-purple-50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <Phone className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Direct Line</h4>
                    <p className="text-base text-gray-700 font-medium">{import.meta.env.VITE_COMPANY_PHONE}</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-green-50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Global Headquarters</h4>
                    <p className="text-base text-gray-700">{import.meta.env.VITE_COMPANY_ADDRESS}</p>
                    <p className="text-sm text-gray-500">Visit by appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Why Choose Us Card */}
            <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-8 shadow-2xl border border-blue-100/50 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Why Choose Deepiotics?</h4>
              </div>
              
              <div className="space-y-4">
                <div className="group flex items-start space-x-4 p-3 rounded-xl hover:bg-white/70 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-base font-semibold text-gray-900">10+ Years AI Expertise</span>
                    <p className="text-sm text-gray-600">Proven track record with Fortune 500 companies</p>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-4 p-3 rounded-xl hover:bg-white/70 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-base font-semibold text-gray-900">Guaranteed ROI in 6 Months</span>
                    <p className="text-sm text-gray-600">Or we'll work for free until you see results</p>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-4 p-3 rounded-xl hover:bg-white/70 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-base font-semibold text-gray-900">500+ Trusted Partners</span>
                    <p className="text-sm text-gray-600">From startups to enterprise corporations</p>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-4 p-3 rounded-xl hover:bg-white/70 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-base font-semibold text-gray-900">1000+ AI Implementations</span>
                    <p className="text-sm text-gray-600">Across 50+ industries worldwide</p>
                  </div>
                </div>
              </div>
              
              {/* CTA in the card */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a 
                  href="https://tidycal.com/team/deepiotics-team/call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Schedule Free Strategy Call</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Premium Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your AI Transformation</h3>
              <p className="text-gray-600">Fill out the form below and our AI experts will contact you within 24 hours</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  AI Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select AI service of interest</option>
                  <option value="custom-ai-development">Custom AI Development</option>
                  <option value="machine-learning-services">Machine Learning Services</option>
                  <option value="ai-automation">AI Process Automation</option>
                  <option value="computer-vision">Computer Vision Solutions</option>
                  <option value="nlp-services">Natural Language Processing</option>
                  <option value="ai-integration">Enterprise AI Integration</option>
                  <option value="ai-consulting">AI Strategy Consulting</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Describe your AI project goals, current challenges, and how we can help transform your business..."
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitted || isSubmitting}
                className="group w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center space-x-3">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      <span>Request Submitted Successfully!</span>
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Your Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                      <span>Get Free AI Consultation</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </button>
              
              {/* Trust message */}
              <p className="text-center text-sm text-gray-500 mt-4">
                🔒 Your information is secure and will never be shared. 
                <span className="font-semibold">100% confidential consultation.</span>
              </p>
            </form>
            
            {/* Animated Elements Below Form */}
            <div className="mt-8 space-y-6">
              {/* Floating Trust Badges */}
              <div className="flex justify-center items-center space-x-4">
                <div className="group bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-gray-700">SSL Secured</span>
                  </div>
                </div>
                
                <div className="group bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-gray-700">24h Response</span>
                  </div>
                </div>
                
                <div className="group bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-gray-700">ISO Certified</span>
                  </div>
                </div>
              </div>
              
              {/* Animated Progress Steps */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <h4 className="text-center text-lg font-semibold text-gray-800 mb-4">What Happens Next?</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">AI Expert Reviews Your Requirements</p>
                      <p className="text-xs text-gray-600">Within 2 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse" style={{animationDelay: '1s'}}>
                      2
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">Free Strategy Session Scheduled</p>
                      <p className="text-xs text-gray-600">30-minute consultation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}