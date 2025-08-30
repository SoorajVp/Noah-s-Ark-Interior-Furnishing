import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const StorySection = () => {
  const milestones = [
    {
      year: "2009",
      title: "The Beginning",
      description: "Founded with a vision to create sanctuaries that nurture the soul",
      icon: "Compass"
    },
    {
      year: "2012",
      title: "First Award",
      description: "Recognized for innovative sustainable design practices",
      icon: "Award"
    },
    {
      year: "2016",
      title: "Team Expansion",
      description: "Grew to a team of 12 certified interior designers",
      icon: "Users"
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Launched virtual design services during global changes",
      icon: "Monitor"
    },
    {
      year: "2024",
      title: "Sustainability Leader",
      description: "Achieved carbon-neutral certification for all projects",
      icon: "Leaf"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="BookOpen" size={16} className="text-white" />
            </div>
            <span className="text-accent font-inter font-medium tracking-wide">Our Story</span>
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            A Journey of Creating
            <span className="text-accent block">Beautiful Sanctuaries</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-3xl mx-auto">
            What started as a passion for transforming spaces has evolved into a mission to create personal arks of comfort, style, and functionality for families and businesses across the region.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl font-semibold text-primary">
                The Philosophy Behind Noah's Ark
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed">
                Just as Noah gathered the finest creatures to preserve life, we gather life's finest design elements to create spaces that preserve and nurture the human spirit. Every project begins with understanding not just what you need, but who you are and how you live.
              </p>
              <p className="text-muted-foreground font-inter leading-relaxed">
                Our founder, Sarah Mitchell, started this journey after experiencing firsthand how thoughtful design could transform not just a space, but an entire family's daily experience. What began in a small studio has grown into a team of passionate designers, each bringing their unique expertise to create your perfect sanctuary.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <h4 className="font-playfair text-xl font-semibold text-primary">Our Core Values</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="Heart" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-inter font-medium text-primary">Authentic Connection:</span>
                    <span className="text-muted-foreground ml-2">We listen deeply to understand your unique story and lifestyle.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Leaf" size={20} className="text-forest-green mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-inter font-medium text-primary">Sustainable Beauty:</span>
                    <span className="text-muted-foreground ml-2">Every choice considers both aesthetic impact and environmental responsibility.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Crown" size={20} className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-inter font-medium text-primary">Timeless Excellence:</span>
                    <span className="text-muted-foreground ml-2">We create designs that endure beyond trends, growing more beautiful with time.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl sanctuary-hover">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop"
                alt="Sarah Mitchell, Founder of Noah's Ark Interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="font-playfair text-xl font-semibold text-white mb-1">Sarah Mitchell</h4>
                <p className="text-white/90 text-sm">Founder & Lead Designer</p>
                <p className="text-white/80 text-sm mt-2">"Every space has the potential to become a sanctuary."</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <h3 className="font-playfair text-3xl font-semibold text-primary text-center mb-12">
            Our Journey Through the Years
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>
            
            <div className="space-y-8">
              {milestones?.map((milestone, index) => (
                <div key={milestone?.year} className="relative flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-16 h-16 bg-white border-4 border-accent rounded-full items-center justify-center shadow-lg flex-shrink-0 z-10">
                    <Icon name={milestone?.icon} size={20} className="text-accent" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-md sanctuary-hover">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="md:hidden w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                        <Icon name={milestone?.icon} size={16} className="text-white" />
                      </div>
                      <span className="text-2xl font-playfair font-bold text-accent">{milestone?.year}</span>
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-primary mb-2">{milestone?.title}</h4>
                    <p className="text-muted-foreground font-inter">{milestone?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;