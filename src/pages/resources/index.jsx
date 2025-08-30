import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import StyleQuiz from './components/StyleQuiz';
import TrendInsights from './components/TrendInsights';
import MaintenanceGuides from './components/MaintenanceGuides';
import DesignCalculator from './components/DesignCalculator';
import BlogSection from './components/BlogSection';
import DownloadableResources from './components/DownloadableResources';
import VirtualShowroom from './components/VirtualShowroom';
import NewsletterSignup from './components/NewsletterSignup';

const ResourcesPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const resourceSections = [
    {
      id: 'overview',
      name: 'Overview',
      icon: 'Home',
      description: 'Explore all our design resources and tools'
    },
    {
      id: 'style-quiz',
      name: 'Style Quiz',
      icon: 'HelpCircle',
      description: 'Discover your personal design style'
    },
    {
      id: 'trends',
      name: 'Trend Insights',
      icon: 'TrendingUp',
      description: 'Latest design trends and forecasts'
    },
    {
      id: 'maintenance',
      name: 'Maintenance Guides',
      icon: 'Tool',
      description: 'Care instructions for your furnishings'
    },
    {
      id: 'calculator',
      name: 'Design Calculator',
      icon: 'Calculator',
      description: 'Estimate your project costs'
    },
    {
      id: 'blog',
      name: 'Design Stories',
      icon: 'BookOpen',
      description: 'Transformations and expert insights'
    },
    {
      id: 'downloads',
      name: 'Free Resources',
      icon: 'Download',
      description: 'Templates, guides, and planning tools'
    },
    {
      id: 'showroom',
      name: 'Virtual Showroom',
      icon: 'Eye',
      description: '3D exploration of signature designs'
    },
    {
      id: 'newsletter',
      name: 'Newsletter',
      icon: 'Mail',
      description: 'Join our design community'
    }
  ];

  const featuredResources = [
    {
      id: 1,
      title: 'Discover Your Design Style',
      description: 'Take our interactive quiz to uncover your personal aesthetic preferences and get personalized recommendations.',
      icon: 'Sparkles',
      action: 'Take Quiz',
      sectionId: 'style-quiz',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Project Cost Calculator',
      description: 'Get instant estimates for your interior design project based on room type, style, and scope.',
      icon: 'Calculator',
      action: 'Calculate Now',
      sectionId: 'calculator',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Virtual Showroom Tour',
      description: 'Explore our signature room designs in stunning detail with our immersive virtual experience.',
      icon: 'Eye',
      action: 'Start Tour',
      sectionId: 'showroom',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'style-quiz':
        return <StyleQuiz />;
      case 'trends':
        return <TrendInsights />;
      case 'maintenance':
        return <MaintenanceGuides />;
      case 'calculator':
        return <DesignCalculator />;
      case 'blog':
        return <BlogSection />;
      case 'downloads':
        return <DownloadableResources />;
      case 'showroom':
        return <VirtualShowroom />;
      case 'newsletter':
        return <NewsletterSignup />;
      default:
        return renderOverview();
    }
  };

  const renderOverview = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-6">
          Design Resources & Tools
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Everything you need to plan, design, and maintain beautiful spaces. From style discovery 
          to project planning, our comprehensive resources support your design journey every step of the way.
        </p>
      </div>

      {/* Featured Resources */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {featuredResources?.map((resource) => (
          <div
            key={resource?.id}
            className="relative bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden sanctuary-hover group cursor-pointer"
            onClick={() => setActiveSection(resource?.sectionId)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${resource?.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
            <div className="relative p-8">
              <div className={`w-16 h-16 bg-gradient-to-br ${resource?.color} rounded-2xl flex items-center justify-center mb-6`}>
                <Icon name={resource?.icon} size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
                {resource?.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {resource?.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-accent font-inter font-medium">
                  {resource?.action}
                </span>
                <Icon name="ArrowRight" size={20} className="text-accent group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* All Resources Grid */}
      <div>
        <h2 className="text-3xl font-playfair font-semibold text-foreground mb-8 text-center">
          All Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceSections?.filter(section => section?.id !== 'overview')?.map((section) => (
            <div
              key={section?.id}
              className="bg-white rounded-xl shadow-sanctuary-md p-6 sanctuary-hover group cursor-pointer"
              onClick={() => setActiveSection(section?.id)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name={section?.icon} size={20} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-inter font-semibold text-foreground group-hover:text-accent transition-colors">
                    {section?.name}
                  </h3>
                </div>
                <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-sm text-muted-foreground">
                {section?.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-forest-green to-deep-sage rounded-2xl p-8 lg:p-12 text-white text-center">
        <h2 className="text-3xl font-playfair font-semibold mb-4">
          Ready to Transform Your Space?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Our resources are just the beginning. Let our expert team help you bring your vision to life 
          with personalized design services tailored to your unique style and needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            className="bg-white text-forest-green hover:bg-white/90"
            iconName="Calendar"
            iconPosition="left"
          >
            Schedule Free Consultation
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-white hover:bg-white/20 border border-white/30"
            iconName="Phone"
            iconPosition="left"
          >
            Call (555) 123-4567
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-sanctuary-white">
      <Header />
      <main className="pt-16">
        {/* Navigation Bar */}
        <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center space-x-1 py-4 overflow-x-auto">
              {resourceSections?.map((section) => (
                <button
                  key={section?.id}
                  onClick={() => setActiveSection(section?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                    activeSection === section?.id
                      ? 'bg-accent text-accent-foreground shadow-sanctuary-md'
                      : 'text-muted-foreground hover:text-accent hover:bg-accent/10'
                  }`}
                >
                  <Icon name={section?.icon} size={16} />
                  <span className="font-inter font-medium text-sm">{section?.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          {renderActiveSection()}
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div>
                  <div className="font-playfair font-semibold text-lg">Noah's Ark</div>
                  <div className="text-sm opacity-80">Interior Furnishing</div>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Creating sanctuaries that shelter and nurture through thoughtful interior design 
                and curated furnishing solutions.
              </p>
              <div className="flex items-center space-x-4">
                <Icon name="Phone" size={16} />
                <span className="text-sm">(555) 123-4567</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-playfair font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><button onClick={() => setActiveSection('style-quiz')} className="hover:text-accent transition-colors">Style Quiz</button></li>
                <li><button onClick={() => setActiveSection('calculator')} className="hover:text-accent transition-colors">Cost Calculator</button></li>
                <li><button onClick={() => setActiveSection('downloads')} className="hover:text-accent transition-colors">Free Downloads</button></li>
                <li><button onClick={() => setActiveSection('maintenance')} className="hover:text-accent transition-colors">Care Guides</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><button onClick={() => setActiveSection('newsletter')} className="hover:text-accent transition-colors">Newsletter</button></li>
                <li><button onClick={() => setActiveSection('blog')} className="hover:text-accent transition-colors">Design Blog</button></li>
                <li><button onClick={() => setActiveSection('showroom')} className="hover:text-accent transition-colors">Virtual Showroom</button></li>
                <li><a href="/contact" className="hover:text-accent transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-primary-foreground/60">
              © {new Date()?.getFullYear()} Noah's Ark Interior Furnishing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResourcesPage;