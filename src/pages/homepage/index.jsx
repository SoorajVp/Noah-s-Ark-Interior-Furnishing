import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroCarousel from './components/HeroCarousel';
import PhilosophyPreview from './components/PhilosophyPreview';
import ServicesGrid from './components/ServicesGrid';
import StyleQuiz from './components/StyleQuiz';
import TestimonialsSection from './components/TestimonialsSection';

const Homepage = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleSmoothScroll = (e) => {
      const target = e?.target?.getAttribute('href');
      if (target && target?.startsWith('#')) {
        e?.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Noah's Ark Interior Furnishing - Creating Personal Sanctuaries | Premium Interior Design</title>
        <meta 
          name="description" 
          content="Transform your space into a personal sanctuary with Noah's Ark Interior Furnishing. Premium residential and commercial interior design services in NYC. Schedule your free consultation today." 
        />
        <meta 
          name="keywords" 
          content="interior design, home furnishing, residential design, commercial design, NYC interior designer, luxury design, sanctuary creation" 
        />
        <meta property="og:title" content="Noah's Ark Interior Furnishing - Creating Personal Sanctuaries" />
        <meta 
          property="og:description" 
          content="Premium interior design services that transform spaces into personal sanctuaries. Discover your design style and create the home of your dreams." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.noahsarkinterior.in" />
        <meta 
          property="og:image" 
          content="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Noah's Ark Interior Furnishing - Creating Personal Sanctuaries" />
        <meta 
          name="twitter:description" 
          content="Premium interior design services that transform spaces into personal sanctuaries. Discover your design style and create the home of your dreams." 
        />
        <link rel="canonical" href="https://www.noahsarkinterior.in" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Noah's Ark Interior Furnishing",
            "description": "Premium interior design and furnishing consultancy creating personal sanctuaries",
            "url": "https://www.noahsarkinterior.in",
            "logo": "https://www.noahsarkinterior.in/noah-s-interior-logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-DESIGN",
              "contactType": "customer service"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "New York",
              "addressRegion": "NY",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://www.instagram.com/noahsarkinterior",
              "https://www.facebook.com/noahsarkinterior"
            ]
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section with Immersive Carousel */}
          <section id="hero" className="relative">
            <HeroCarousel />
          </section>

          {/* Philosophy Preview Section */}
          <section id="philosophy" className="relative">
            <PhilosophyPreview />
          </section>

          {/* Services at a Glance */}
          <section id="services" className="relative">
            <ServicesGrid />
          </section>

          {/* Style Quiz Section */}
          <section id="style-quiz" className="relative">
            <StyleQuiz />
          </section>

          {/* Client Testimonials */}
          <section id="testimonials" className="relative">
            <TestimonialsSection />
          </section>

          {/* Final CTA Section */}
          <section className="py-20 lg:py-32 bg-gradient-to-br from-forest-green to-deep-sage text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl lg:text-6xl font-playfair font-bold mb-8 leading-tight">
                  Your Sanctuary 
                  <span className="text-accent"> Awaits</span>
                </h2>
                
                <p className="text-xl mb-12 leading-relaxed opacity-90 max-w-3xl mx-auto">
                  Every great transformation begins with a single conversation. 
                  Let's discuss your vision and start creating the space you've always dreamed of.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {[
                    {
                      title: "Free Consultation",
                      description: "Complimentary 60-minute design consultation"
                    },
                    {
                      title: "Custom Proposal",
                      description: "Tailored design plan within 48 hours"
                    },
                    {
                      title: "Transform & Enjoy",
                      description: "Watch your space become your sanctuary"
                    }
                  ]?.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-xl">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-playfair font-semibold mb-2">
                        {step?.title}
                      </h3>
                      <p className="opacity-80">
                        {step?.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-block bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 rounded-lg sanctuary-transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    Start Your Transformation Today
                  </a>
                  
                  <a 
                    href="tel:+1-555-DESIGN" 
                    className="inline-block border-2 border-white text-white hover:bg-white hover:text-forest-green font-semibold px-8 py-4 rounded-lg sanctuary-transition hover:-translate-y-1"
                  >
                    Call (555) DESIGN
                  </a>
                </div>

                <div className="mt-12 pt-8 border-t border-white/20">
                  <p className="text-sm opacity-70">
                    Licensed & Insured • Serving NYC & Tri-State Area • Since 2018
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center justify-center">
                    <img src="/noah-s-interior-logo.png" alt="Noah's Ark Interior Furnishing Logo" width={50} height={50} />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl">Noah's Ark</h3>
                    <p className="text-sm opacity-80">Interior Furnishing</p>
                  </div>
                </div>
                <p className="text-sm opacity-80 leading-relaxed mb-4">
                  Creating personal sanctuaries through thoughtful design, curated furnishings, 
                  and transformative interior solutions that nurture and inspire.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <span className="sr-only">Instagram</span>
                    📷
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <span className="sr-only">Facebook</span>
                    📘
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <span className="sr-only">Pinterest</span>
                    📌
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-playfair font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/services" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Services</a></li>
                  <li><a href="/portfolio" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Portfolio</a></li>
                  <li><a href="/about" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">About Us</a></li>
                  <li><a href="/resources" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Resources</a></li>
                  <li><a href="/contact" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-playfair font-semibold mb-4">Get in Touch</h4>
                <div className="space-y-2 text-sm">
                  <p className="opacity-80">📞 (555) DESIGN</p>
                  <p className="opacity-80">✉️ hello@noahsarkinterior.com</p>
                  <p className="opacity-80">📍 New York, NY</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60">
              <p>&copy; {new Date()?.getFullYear()} Noah's Ark Interior Furnishing. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;