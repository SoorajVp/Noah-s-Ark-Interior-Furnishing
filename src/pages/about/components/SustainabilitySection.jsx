import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const SustainabilitySection = () => {
  const sustainabilityPractices = [
    {
      title: "Carbon-Neutral Certification",
      description: "All our projects achieve carbon-neutral status through careful material selection and offset programs.",
      icon: "Leaf",
      stats: "100% of projects since 2024",
      details: [
        "Renewable energy sources for all operations",
        "Carbon offset programs for unavoidable emissions",
        "Local sourcing to reduce transportation impact",
        "Energy-efficient design principles"
      ]
    },
    {
      title: "Sustainable Materials",
      description: "We prioritize eco-friendly, renewable, and recycled materials without compromising on quality or beauty.",
      icon: "Recycle",
      stats: "85% sustainable materials used",
      details: [
        "FSC-certified wood and bamboo products",
        "Recycled metal and glass elements",
        "Low-VOC paints and finishes",
        "Natural fiber textiles and carpets"
      ]
    },
    {
      title: "Waste Reduction",
      description: "Our zero-waste initiative ensures minimal environmental impact during construction and renovation.",
      icon: "Trash2",
      stats: "90% waste diverted from landfills",
      details: [
        "Comprehensive recycling programs",
        "Material reuse and repurposing",
        "Donation of usable items to local charities",
        "Composting of organic waste materials"
      ]
    },
    {
      title: "Local Partnerships",
      description: "Supporting local artisans and suppliers reduces our carbon footprint while strengthening communities.",
      icon: "MapPin",
      stats: "70% local supplier network",
      details: [
        "Regional furniture makers and craftspeople",
        "Local stone, tile, and textile suppliers",
        "Community-based installation teams",
        "Support for local environmental initiatives"
      ]
    }
  ];

  const certifications = [
    {
      name: "LEED Platinum",
      description: "Leadership in Energy and Environmental Design",
      icon: "Award"
    },
    {
      name: "Living Building Challenge",
      description: "Net-positive environmental impact certification",
      icon: "Building"
    },
    {
      name: "Cradle to Cradle",
      description: "Circular economy design principles",
      icon: "RotateCcw"
    },
    {
      name: "WELL Building Standard",
      description: "Health and wellness in built environments",
      icon: "Heart"
    }
  ];

  const impactStats = [
    {
      number: "2,500",
      unit: "tons",
      label: "CO2 Emissions Prevented",
      icon: "CloudSnow"
    },
    {
      number: "15,000",
      unit: "lbs",
      label: "Materials Recycled",
      icon: "Recycle"
    },
    {
      number: "50+",
      unit: "local",
      label: "Artisan Partners",
      icon: "Users"
    },
    {
      number: "100%",
      unit: "renewable",
      label: "Energy Sources",
      icon: "Zap"
    }
  ];

  return (
    <section className="py-20 bg-forest-green text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Leaf" size={16} className="text-white" />
            </div>
            <span className="text-accent font-inter font-medium tracking-wide">Sustainability Commitment</span>
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
            Designing for
            <span className="text-accent block">Tomorrow's World</span>
          </h2>
          <p className="text-xl text-white/90 font-inter leading-relaxed max-w-3xl mx-auto">
            Our commitment to environmental responsibility goes beyond trends—it's woven into every decision we make, from material selection to project completion and beyond.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats?.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl sanctuary-hover">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-white" />
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-playfair font-bold text-white">{stat?.number}</div>
                <div className="text-sm text-accent font-medium">{stat?.unit}</div>
                <div className="text-sm text-white/80">{stat?.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Sustainability Practices */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {sustainabilityPractices?.map((practice, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sanctuary-hover">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={practice?.icon} size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-xl font-semibold text-white mb-2">{practice?.title}</h3>
                  <p className="text-white/80 font-inter mb-3">{practice?.description}</p>
                  <div className="text-accent font-inter font-medium text-sm">{practice?.stats}</div>
                </div>
              </div>
              
              <div className="space-y-2">
                {practice?.details?.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-sm font-inter">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="font-playfair text-3xl font-semibold text-white mb-4">
              Industry Certifications
            </h3>
            <p className="text-white/80 font-inter max-w-2xl mx-auto">
              Our commitment to sustainability is validated by leading industry certifications and standards.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl sanctuary-hover">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={24} className="text-accent" />
                </div>
                <h4 className="font-playfair font-semibold text-white mb-2">{cert?.name}</h4>
                <p className="text-white/70 text-sm font-inter">{cert?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainability Showcase */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                alt="Sustainable Interior Design Materials"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-forest-green/20 to-transparent"></div>
            </div>
            
            <div className="p-8 lg:p-12">
              <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                Our Sustainability Promise
              </h3>
              <p className="text-white/80 font-inter leading-relaxed mb-6">
                We pledge to continue pushing the boundaries of sustainable design, proving that environmental responsibility and luxury aesthetics not only coexist but enhance each other. Every project is an opportunity to create positive impact for our clients and our planet.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Target" size={20} className="text-accent" />
                  <span className="text-white font-inter">Carbon negative by 2030</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Globe" size={20} className="text-accent" />
                  <span className="text-white font-inter">Global sustainability leadership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Heart" size={20} className="text-accent" />
                  <span className="text-white font-inter">Healthier spaces for all</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;