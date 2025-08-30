import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-sanctuary-white via-sanctuary-gray to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-secondary rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-primary rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center floating-element">
                  <Icon name="Home" size={24} className="text-white" />
                </div>
                <span className="text-accent font-inter font-medium tracking-wide">About Noah's Ark</span>
              </div>
              
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Creating Your
                <span className="text-accent block">Personal Sanctuary</span>
              </h1>
              
              <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-xl">
                Every space should be a personal ark of comfort, style, and functionality that shelters and nurtures its inhabitants. We believe in gathering life's finest elements to create harmonious environments that tell your unique story.
              </p>
            </div>

            {/* Key Values */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm sanctuary-hover">
                <div className="w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Leaf" size={20} className="text-white" />
                </div>
                <h3 className="font-playfair font-semibold text-primary mb-1">Sustainable</h3>
                <p className="text-sm text-muted-foreground">Eco-conscious practices</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm sanctuary-hover">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Crown" size={20} className="text-white" />
                </div>
                <h3 className="font-playfair font-semibold text-primary mb-1">Luxury</h3>
                <p className="text-sm text-muted-foreground">Curated excellence</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm sanctuary-hover">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Clock" size={20} className="text-white" />
                </div>
                <h3 className="font-playfair font-semibold text-primary mb-1">Timeless</h3>
                <p className="text-sm text-muted-foreground">Enduring design</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl sanctuary-hover">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=700&fit=crop"
                alt="Noah's Ark Interior Design Team at Work"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg floating-element">
              <Icon name="Award" size={32} className="text-white" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white rounded-2xl shadow-xl p-4 floating-element">
              <div className="text-center">
                <Icon name="Users" size={24} className="text-primary mx-auto mb-2" />
                <div className="text-sm font-inter font-semibold text-primary">Expert Team</div>
                <div className="text-xs text-muted-foreground">Certified Designers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;