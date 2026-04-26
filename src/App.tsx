import React from 'react';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import AdminCareer from './components/AdminCareer';
import Careers from './components/Careers';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import BlogDetailPage from './components/BlogDetailPage';
import LinkedInServicePage from './components/LinkedInServicePage';
import AIBusinessGrowthPage from './components/AIBusinessGrowthPage';
import USAccountingPage from './components/USAccountingPage';
import TrucksLogisticsPage from './components/TrucksLogisticsPage';
import MediaPage from './components/MediaPage';
import PublicationPage from './components/PublicationPage';
import NewLanding from './components/NewLanding';
import ThemeWrapper from './components/ThemeWrapper';
import ThemedNavigation from './components/ThemedNavigation';
import ThemedFooter from './components/ThemedFooter';
import ChatbotWidget from './components/ChatbotWidget';

function App() {
  const path = window.location.pathname;

  if (path === '/admin') {
    return <AdminLogin />;
  }

  if (path === '/admin/dashboard') {
    return <AdminDashboard />;
  }

  if (path === '/admin/career') {
    return <AdminCareer />;
  }

  if (path === '/careers') {
    return (
      <ThemeWrapper>
        <ThemedNavigation />
        <div className="min-h-screen" style={{ paddingTop: '80px' }}>
          <Careers />
        </div>
        <ThemedFooter />
        <ChatbotWidget customerName="Guest" customerId="99aupairs" />
      </ThemeWrapper>
    );
  }

  if (path === '/about') {
    return (
      <ThemeWrapper>
        <ThemedNavigation />
        <div className="min-h-screen" style={{ paddingTop: '80px' }}>
          <AboutPage />
        </div>
        <ThemedFooter />
        <ChatbotWidget customerName="Guest" customerId="99aupairs" />
      </ThemeWrapper>
    );
  }

  if (path === '/services') {
    return (
      <ThemeWrapper>
        <ThemedNavigation />
        <div className="min-h-screen" style={{ paddingTop: '80px' }}>
          <ServicesPage />
        </div>
        <ThemedFooter />
        <ChatbotWidget customerName="Guest" customerId="99aupairs" />
      </ThemeWrapper>
    );
  }

  if (path === '/portfolio') {
    return (
      <ThemeWrapper>
        <ThemedNavigation />
        <div className="min-h-screen" style={{ paddingTop: '80px' }}>
          <PortfolioPage />
        </div>
        <ThemedFooter />
        <ChatbotWidget customerName="Guest" customerId="99aupairs" />
      </ThemeWrapper>
    );
  }
// ghghgh
  if (path === '/contact') {
    return (
      <ThemeWrapper>
        <ThemedNavigation />
        <div className="min-h-screen" style={{ paddingTop: '80px' }}>
          <ContactPage />
        </div>
        <ThemedFooter />
        <ChatbotWidget customerName="Guest" customerId="99aupairs" />
      </ThemeWrapper>
    );
  }

  if (path === '/blog') {
    return (
      <ThemeWrapper>
        <ThemedNavigation />
        <div className="min-h-screen" style={{ paddingTop: '80px' }}>
          <BlogPage />
        </div>
        <ThemedFooter />
        <ChatbotWidget customerName="Guest" customerId="99aupairs" />
      </ThemeWrapper>
    );
  }

  if (path === '/media') {
    return (
      <ThemeWrapper>
        <ThemedNavigation />
        <div className="min-h-screen" style={{ paddingTop: '80px' }}>
          <MediaPage />
        </div>
        <ThemedFooter />
        <ChatbotWidget customerName="Guest" customerId="99aupairs" />
      </ThemeWrapper>
    );
  }

  if (path === '/publication') {
    return (
      <ThemeWrapper>
        <ThemedNavigation />
        <div className="min-h-screen" style={{ paddingTop: '80px' }}>
          <PublicationPage />
        </div>
        <ThemedFooter />
        <ChatbotWidget customerName="Guest" customerId="99aupairs" />
      </ThemeWrapper>
    );
  }

  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '');
    return (
      <ThemeWrapper>
        <ThemedNavigation />
        <div className="min-h-screen" style={{ paddingTop: '80px' }}>
          <BlogDetailPage slug={slug} />
        </div>
        <ThemedFooter />
        <ChatbotWidget customerName="Guest" customerId="99aupairs" />
      </ThemeWrapper>
    );
  }

  if (path === '/linkedin-service') {
    return (
      <ThemeWrapper>
        <ThemedNavigation />
        <div className="min-h-screen" style={{ paddingTop: '80px' }}>
          <LinkedInServicePage />
        </div>
        <ThemedFooter />
        <ChatbotWidget customerName="Guest" customerId="99aupairs" />
      </ThemeWrapper>
    );
  }

  if (path === '/AI-business-growth') {
    return (
      <ThemeWrapper>
        <ThemedNavigation />
        <div className="min-h-screen" style={{ paddingTop: '80px' }}>
          <AIBusinessGrowthPage />
        </div>
        <ThemedFooter />
        <ChatbotWidget customerName="Guest" customerId="99aupairs" />
      </ThemeWrapper>
    );
  }

  if (path === '/accounting/us-accounting') {
    return (
      <ThemeWrapper>
        <ThemedNavigation />
        <div className="min-h-screen" style={{ paddingTop: '80px' }}>
          <USAccountingPage />
        </div>
        <ThemedFooter />
        <ChatbotWidget customerName="Guest" customerId="99aupairs" />
      </ThemeWrapper>
    );
  }

  if (path === '/accounting/truck-logistics') {
    return (
      <ThemeWrapper>
        <ThemedNavigation />
        <div className="min-h-screen" style={{ paddingTop: '80px' }}>
          <TrucksLogisticsPage />
        </div>
        <ThemedFooter />
        <ChatbotWidget customerName="Guest" customerId="99aupairs" />
      </ThemeWrapper>
    );
  }

  // Default: New Landing Page
  return <NewLanding />;
}

export default App;