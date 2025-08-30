import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PhilosophySection = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const philosophies = [
    {
      title: "Curated Excellence",
      icon: "Crown",
      description: "We believe in the power of thoughtful selection over overwhelming options.",
      details: `Every element in your space is carefully chosen for its quality, beauty, and purpose. We source from trusted artisans, sustainable manufacturers, and timeless brands that share our commitment to excellence. Our curation process ensures that each piece not only looks beautiful but serves a meaningful function in your daily life.`,
      principles: [
        "Quality over quantity in every selection",
        "Timeless pieces that transcend trends",
        "Artisan partnerships for unique elements",
        "Sustainable sourcing practices"
      ],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
    },
    {
      title: "Sustainable Luxury",
      icon: "Leaf",
      description: "True luxury considers the impact on future generations.",
      details: `Sustainable luxury isn't about compromise—it's about making conscious choices that enhance both beauty and environmental responsibility. We integrate eco-friendly materials, energy-efficient solutions, and locally-sourced elements without sacrificing the sophisticated aesthetics our clients expect.`,
      principles: [
        "Carbon-neutral project certification",
        "Locally-sourced materials when possible",
        "Energy-efficient lighting and systems",
        "Waste reduction and recycling programs"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    },
    {
      title: "Timeless Design",
      icon: "Clock",
      description: "We create spaces that grow more beautiful with time.",
      details: `Trends fade, but great design endures. Our approach focuses on classic proportions, quality materials, and flexible layouts that adapt to changing needs while maintaining their essential beauty. We design for the long term, creating spaces that feel fresh and relevant for decades.`,
      principles: [
        "Classic proportions and layouts",
        "Flexible spaces that adapt over time",
        "Investment in quality over trends",
        "Designs that age gracefully"
      ],
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop"
    },
    {
      title: "Personal Sanctuary",
      icon: "Home",
      description: "Every space should nurture and reflect its inhabitants.",
      details: `Your home is your sanctuary—a place where you can truly be yourself. We design spaces that support your lifestyle, reflect your personality, and provide the comfort and functionality you need to thrive. Each project is deeply personal and uniquely yours.`,
      principles: [
        "Deep understanding of client lifestyle",
        "Personalized design solutions",
        "Comfort and functionality balance",
        "Spaces that tell your story"
      ],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              <Icon name="Compass" size={16} className="text-white" />
            </div>
            <span className="text-secondary font-inter font-medium tracking-wide">Design Philosophy</span>
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Guiding
            <span className="text-accent block">Principles</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-3xl mx-auto">
            These four pillars guide every decision we make, ensuring that each project reflects our commitment to excellence, sustainability, and timeless beauty.
          </p>
        </div>

        {/* Philosophy Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {philosophies?.map((philosophy, index) => (
            <button
              key={index}
              onClick={() => setActivePhilosophy(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full sanctuary-transition ${
                activePhilosophy === index
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-white text-primary hover:bg-accent/10 shadow-md'
              }`}
            >
              <Icon name={philosophy?.icon} size={20} />
              <span className="font-inter font-medium">{philosophy?.title}</span>
            </button>
          ))}
        </div>

        {/* Active Philosophy Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-64 lg:h-auto">
              <Image
                src={philosophies?.[activePhilosophy]?.image}
                alt={philosophies?.[activePhilosophy]?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Icon name={philosophies?.[activePhilosophy]?.icon} size={24} className="text-accent" />
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="font-playfair text-3xl font-bold text-primary mb-4">
                    {philosophies?.[activePhilosophy]?.title}
                  </h3>
                  <p className="text-lg text-accent font-inter font-medium mb-4">
                    {philosophies?.[activePhilosophy]?.description}
                  </p>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {philosophies?.[activePhilosophy]?.details}
                  </p>
                </div>

                <div>
                  <h4 className="font-playfair text-xl font-semibold text-primary mb-4">
                    Key Principles
                  </h4>
                  <div className="space-y-3">
                    {philosophies?.[activePhilosophy]?.principles?.map((principle, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-forest-green mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground font-inter">{principle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-sanctuary-gray rounded-xl sanctuary-hover">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Crown" size={20} className="text-white" />
            </div>
            <div className="text-2xl font-playfair font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Curated Excellence</div>
          </div>
          
          <div className="text-center p-6 bg-sanctuary-gray rounded-xl sanctuary-hover">
            <div className="w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Leaf" size={20} className="text-white" />
            </div>
            <div className="text-2xl font-playfair font-bold text-primary mb-1">Carbon</div>
            <div className="text-sm text-muted-foreground">Neutral Certified</div>
          </div>
          
          <div className="text-center p-6 bg-sanctuary-gray rounded-xl sanctuary-hover">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={20} className="text-white" />
            </div>
            <div className="text-2xl font-playfair font-bold text-primary mb-1">25+</div>
            <div className="text-sm text-muted-foreground">Years Timeless Design</div>
          </div>
          
          <div className="text-center p-6 bg-sanctuary-gray rounded-xl sanctuary-hover">
            <div className="w-12 h-12 bg-warm-gold rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Home" size={20} className="text-white" />
            </div>
            <div className="text-2xl font-playfair font-bold text-primary mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Personal Sanctuaries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;