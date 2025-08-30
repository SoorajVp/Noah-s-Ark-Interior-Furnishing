import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-sanctuary-white to-sanctuary-gray py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="MessageCircle" size={16} />
            <span>Let's Create Your Sanctuary</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Start Your Design
            <span className="text-accent block">Journey Today</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to transform your space into a personal sanctuary? We're here to guide you through every step of the design process, from initial consultation to final reveal.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-primary mb-2">24-Hour Response</h3>
              <p className="text-muted-foreground">Quick replies to all inquiries</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={24} className="text-accent" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-primary mb-2">Free Consultation</h3>
              <p className="text-muted-foreground">Complimentary initial meeting</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-secondary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-primary mb-2">Expert Team</h3>
              <p className="text-muted-foreground">Certified design professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;