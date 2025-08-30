import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PhilosophyPreview = () => {
  const signatureProject = {
    id: 1,
    title: "The Sanctuary Suite",
    location: "Manhattan Penthouse",
    description: `A transformative journey that turned a sterile corporate apartment into a warm, sophisticated sanctuary. Every element was carefully curated to reflect the client's personality while creating spaces that nurture both productivity and relaxation.\n\nThe result is a harmonious blend of luxury and comfort that truly embodies our philosophy of creating personal arks of tranquility.`,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    beforeImage: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&q=80",
    stats: [
      { label: "Project Duration", value: "8 weeks" },
      { label: "Rooms Transformed", value: "6" },
      { label: "Custom Pieces", value: "12" },
      { label: "Client Satisfaction", value: "100%" }
    ]
  };

  return (
    <section className="py-20 lg:py-32 bg-sanctuary-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-warm-gold rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-forest-green rounded-full"></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Philosophy Introduction */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full">
              Our Philosophy
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-primary mb-8 max-w-4xl mx-auto leading-tight">
            Creating Sanctuaries That 
            <span className="text-accent"> Shelter & Nurture</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Noah's Ark Interior Furnishing, we believe every space should be a personal ark of comfort, 
            style, and functionality. We gather life's finest elements to create harmonious environments 
            that tell your unique story.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: "Shield",
              title: "Sanctuary Creation",
              description: "Every project becomes a safe haven that reflects your personality and nurtures your lifestyle."
            },
            {
              icon: "Leaf",
              title: "Sustainable Luxury",
              description: "We curate premium materials and furnishings with environmental consciousness and lasting quality."
            },
            {
              icon: "Heart",
              title: "Timeless Design",
              description: "Our approach balances contemporary trends with enduring principles that stand the test of time."
            }
          ]?.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-warm-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name={value?.icon} size={28} color="white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-primary mb-4">
                {value?.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Signature Project Highlight */}
        <div className="bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Project Images */}
            <div className="relative">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden">
                <Image
                  src={signatureProject?.image}
                  alt={signatureProject?.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Before/After Toggle */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-sm font-medium text-primary">After</span>
                  </div>
                </div>

                {/* Before Image Overlay */}
                <div className="absolute bottom-4 right-4">
                  <div className="w-24 h-16 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                    <Image
                      src={signatureProject?.beforeImage}
                      alt="Before transformation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <span className="text-xs font-medium text-white bg-black/50 px-2 py-1 rounded">
                      Before
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-forest-green/10 text-forest-green text-sm font-medium rounded-full mb-4">
                  Signature Project
                </span>
                <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-2">
                  {signatureProject?.title}
                </h3>
                <p className="text-lg text-accent font-medium mb-6">
                  {signatureProject?.location}
                </p>
              </div>

              <div className="prose prose-lg text-muted-foreground mb-8">
                {signatureProject?.description?.split('\n\n')?.map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {signatureProject?.stats?.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-playfair font-bold text-accent mb-1">
                      {stat?.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat?.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  className="bg-forest-green hover:bg-forest-green/90 text-white"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  View Full Portfolio
                </Button>
                
                <Link to="/about" className="group">
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white group-hover:border-accent"
                    iconName="Users"
                    iconPosition="left"
                  >
                    Meet Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to transform your space into a personal sanctuary? Let's begin your journey 
            toward creating a home that truly reflects who you are.
          </p>
          
          <Link to="/contact">
            <Button
              variant="default"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-3"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Start Your Transformation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyPreview;