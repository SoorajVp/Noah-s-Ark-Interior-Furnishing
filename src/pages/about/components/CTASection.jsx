import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const consultationBenefits = [
    {
      title: "Personalized Design Vision",
      description: "Discover your unique style and create a roadmap for your dream space",
      icon: "Eye"
    },
    {
      title: "Expert Guidance",
      description: "Benefit from our 15+ years of experience and industry expertise",
      icon: "Users"
    },
    {
      title: "Sustainable Solutions",
      description: "Explore eco-friendly options that align with your values and budget",
      icon: "Leaf"
    },
    {
      title: "Project Planning",
      description: "Get a clear timeline, budget estimate, and next steps for your project",
      icon: "Calendar"
    }
  ];

  const contactMethods = [
    {
      method: "Schedule Online",
      description: "Book your consultation instantly",
      icon: "Calendar",
      action: "Book Now"
    },
    {
      method: "Call Direct",
      description: "(555) 123-4567",
      icon: "Phone",
      action: "Call Now"
    },
    {
      method: "Email Us",
      description: "hello@noahsarkinterior.com",
      icon: "Mail",
      action: "Send Email"
    },
    {
      method: "Visit Showroom",
      description: "123 Design District, City",
      icon: "MapPin",
      action: "Get Directions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-deep-sage to-forest-green text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-secondary rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-white rounded-full"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA Content */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center floating-element">
              <Icon name="MessageCircle" size={20} className="text-white" />
            </div>
            <span className="text-accent font-inter font-medium tracking-wide text-lg">Ready to Begin?</span>
          </div>
          
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold mb-6">
            Let's Create Your
            <span className="text-accent block">Perfect Sanctuary</span>
          </h2>
          
          <p className="text-xl text-white/90 font-inter leading-relaxed max-w-3xl mx-auto mb-8">
            Every great design journey begins with a conversation. Share your vision with us, and let's explore how we can transform your space into the sanctuary you've always dreamed of.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="default"
              className="bg-accent hover:bg-accent/90 text-primary font-inter font-semibold px-8 py-4 text-lg"
              iconName="Calendar"
              iconPosition="left"
              iconSize={20}
            >
              Schedule Free Consultation
            </Button>
            
            <Link
              to="/portfolio"
              className="flex items-center space-x-2 text-white hover:text-accent sanctuary-transition font-inter font-medium"
            >
              <span>View Our Portfolio</span>
              <Icon name="ArrowRight" size={18} />
            </Link>
          </div>
        </div>

        {/* Consultation Benefits */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-3xl font-semibold text-white mb-4">
                What to Expect in Your Consultation
              </h3>
              <p className="text-white/80 font-inter leading-relaxed">
                Our complimentary consultation is designed to understand your unique needs, lifestyle, and design aspirations. We'll explore possibilities, discuss your budget, and create a personalized roadmap for your project.
              </p>
            </div>
            
            <div className="space-y-6">
              {consultationBenefits?.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={benefit?.icon} size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-white mb-2">{benefit?.title}</h4>
                    <p className="text-white/70 font-inter text-sm">{benefit?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl sanctuary-hover">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=500&fit=crop"
                alt="Interior Design Consultation"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <div>
                      <div className="font-playfair font-semibold text-primary">60-Minute Session</div>
                      <div className="text-muted-foreground text-sm">Completely Complimentary</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-xl floating-element">
              <Icon name="Gift" size={28} className="text-white" />
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-semibold text-white mb-4">
              Multiple Ways to Connect
            </h3>
            <p className="text-white/80 font-inter">
              Choose the method that works best for you. We're here to help in whatever way is most convenient.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods?.map((contact, index) => (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl sanctuary-hover">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={contact?.icon} size={24} className="text-white" />
                </div>
                <h4 className="font-playfair font-semibold text-white mb-2">{contact?.method}</h4>
                <p className="text-white/70 text-sm mb-4">{contact?.description}</p>
                <button className="text-accent hover:text-white sanctuary-transition font-inter font-medium text-sm">
                  {contact?.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-accent" />
              <span className="font-inter text-sm">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} className="text-accent" />
              <span className="font-inter text-sm">Award-Winning Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} className="text-accent" />
              <span className="font-inter text-sm">500+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} className="text-accent" />
              <span className="font-inter text-sm">15+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;