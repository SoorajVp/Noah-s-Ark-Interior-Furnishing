import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const RecognitionSection = () => {
  const awards = [
    {
      year: "2024",
      title: "Interior Design Firm of the Year",
      organization: "American Society of Interior Designers",
      category: "Sustainable Design Excellence",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
    {
      year: "2023",
      title: "Green Building Leadership Award",
      organization: "U.S. Green Building Council",
      category: "Residential Design Innovation",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop"
    },
    {
      year: "2023",
      title: "Best Luxury Interior Design",
      organization: "Architectural Digest",
      category: "Residential Projects",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
    },
    {
      year: "2022",
      title: "Innovation in Sustainable Materials",
      organization: "International Interior Design Association",
      category: "Material Excellence",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    }
  ];

  const mediaFeatures = [
    {
      publication: "Architectural Digest",
      title: "The Future of Sustainable Luxury Design",
      date: "March 2024",
      type: "Cover Story",
      icon: "BookOpen"
    },
    {
      publication: "Elle Decor",
      title: "Noah\'s Ark: Creating Modern Sanctuaries",
      date: "January 2024",
      type: "Feature Article",
      icon: "FileText"
    },
    {
      publication: "House Beautiful",
      title: "Top 10 Interior Designers to Watch",
      date: "November 2023",
      type: "Recognition",
      icon: "Star"
    },
    {
      publication: "Dezeen",
      title: "Sustainable Design Leaders",
      date: "September 2023",
      type: "Industry Profile",
      icon: "Award"
    },
    {
      publication: "Interior Design Magazine",
      title: "The Art of Eco-Luxury",
      date: "June 2023",
      type: "Editorial Feature",
      icon: "Camera"
    },
    {
      publication: "Wallpaper Magazine",
      title: "American Design Excellence",
      date: "April 2023",
      type: "International Feature",
      icon: "Globe"
    }
  ];

  const certifications = [
    {
      name: "NCIDQ Certified",
      description: "National Council for Interior Design Qualification",
      level: "Professional Certification",
      icon: "Shield"
    },
    {
      name: "LEED AP BD+C",
      description: "Leadership in Energy and Environmental Design",
      level: "Accredited Professional",
      icon: "Leaf"
    },
    {
      name: "WELL AP",
      description: "WELL Building Standard Accredited Professional",
      level: "Health & Wellness Expert",
      icon: "Heart"
    },
    {
      name: "Sustainable Design Specialist",
      description: "Advanced Certification in Eco-Friendly Design",
      level: "Specialty Certification",
      icon: "Recycle"
    }
  ];

  return (
    <section className="py-20 bg-sanctuary-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-warm-gold rounded-lg flex items-center justify-center">
              <Icon name="Award" size={16} className="text-white" />
            </div>
            <span className="text-warm-gold font-inter font-medium tracking-wide">Industry Recognition</span>
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            Celebrated for
            <span className="text-accent block">Design Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-3xl mx-auto">
            Our commitment to exceptional design and sustainable practices has earned recognition from leading industry organizations and publications worldwide.
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-20">
          <h3 className="font-playfair text-3xl font-semibold text-primary text-center mb-12">
            Recent Awards & Honors
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {awards?.map((award, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden sanctuary-hover">
                <div className="relative h-48">
                  <Image
                    src={award?.image}
                    alt={award?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-accent text-white px-3 py-1 rounded-full text-sm font-inter font-medium">
                      {award?.year}
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Icon name="Award" size={20} className="text-accent" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-playfair text-xl font-semibold text-primary mb-2">{award?.title}</h4>
                  <p className="text-accent font-inter font-medium mb-1">{award?.organization}</p>
                  <p className="text-muted-foreground text-sm">{award?.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Features */}
        <div className="mb-20">
          <h3 className="font-playfair text-3xl font-semibold text-primary text-center mb-12">
            Featured In Leading Publications
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaFeatures?.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md sanctuary-hover">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={feature?.icon} size={20} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-playfair font-semibold text-primary mb-1 truncate">{feature?.title}</h4>
                    <p className="text-accent font-inter font-medium text-sm mb-1">{feature?.publication}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground text-xs">{feature?.date}</span>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">{feature?.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-semibold text-primary mb-4">
              Professional Certifications
            </h3>
            <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
              Our team maintains the highest professional standards through continuous education and industry certifications.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-sanctuary-gray rounded-xl sanctuary-hover">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={24} className="text-white" />
                </div>
                <h4 className="font-playfair font-semibold text-primary mb-2">{cert?.name}</h4>
                <p className="text-muted-foreground text-sm mb-2">{cert?.description}</p>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">{cert?.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-accent/5 rounded-xl">
            <div className="text-3xl font-playfair font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground font-inter">Industry Awards</div>
          </div>
          
          <div className="text-center p-6 bg-forest-green/5 rounded-xl">
            <div className="text-3xl font-playfair font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground font-inter">Media Features</div>
          </div>
          
          <div className="text-center p-6 bg-secondary/5 rounded-xl">
            <div className="text-3xl font-playfair font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground font-inter">Professional Certifications</div>
          </div>
          
          <div className="text-center p-6 bg-warm-gold/5 rounded-xl">
            <div className="text-3xl font-playfair font-bold text-primary mb-2">5</div>
            <div className="text-muted-foreground font-inter">Years Running Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;