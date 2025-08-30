import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesGrid = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Residential Sanctuaries",
      description: "Transform your home into a personal haven of comfort and style",
      icon: "Home",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      portfolioImages: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
        "https://images.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_640.jpg"
      ],
      features: ["Custom Furniture Design", "Color Consultation", "Space Planning", "Lighting Design"],
      startingPrice: "From $5,000",
      timeline: "4-8 weeks",
      color: "bg-forest-green"
    },
    {
      id: 2,
      title: "Commercial Spaces",
      description: "Elevate your business environment to inspire success",
      icon: "Building",
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      portfolioImages: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=400&q=80"
      ],
      features: ["Office Design", "Retail Spaces", "Hospitality Design", "Brand Integration"],
      startingPrice: "From $10,000",
      timeline: "6-12 weeks",
      color: "bg-warm-gold"
    },
    {
      id: 3,
      title: "Luxury Consultations",
      description: "Bespoke design solutions for discerning clients",
      icon: "Crown",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      portfolioImages: [
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
        "https://images.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_640.jpg"
      ],
      features: ["Exclusive Materials", "Custom Artwork", "Concierge Service", "Global Sourcing"],
      startingPrice: "From $25,000",
      timeline: "8-16 weeks",
      color: "bg-deep-sage"
    },
    {
      id: 4,
      title: "Virtual Design Services",
      description: "Expert guidance from anywhere in the world",
      icon: "Video",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      portfolioImages: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&q=80"
      ],
      features: ["3D Renderings", "Shopping Lists", "Video Consultations", "Digital Mood Boards"],
      startingPrice: "From $1,500",
      timeline: "2-4 weeks",
      color: "bg-accent"
    },
    {
      id: 5,
      title: "Furniture Curation",
      description: "Handpicked pieces that perfectly complement your space",
      icon: "Sofa",
      image: "https://images.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg",
      portfolioImages: [
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      ],
      features: ["Vintage Finds", "Custom Upholstery", "Art Selection", "Accessory Styling"],
      startingPrice: "From $2,500",
      timeline: "3-6 weeks",
      color: "bg-secondary"
    },
    {
      id: 6,
      title: "Seasonal Refresh",
      description: "Keep your space current with seasonal updates",
      icon: "RefreshCw",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      portfolioImages: [
        "https://images.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg",
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400&q=80"
      ],
      features: ["Textile Updates", "Color Refreshes", "Seasonal Decor", "Quick Makeovers"],
      startingPrice: "From $800",
      timeline: "1-2 weeks",
      color: "bg-forest-green"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full">
              Our Services
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-primary mb-8 max-w-4xl mx-auto leading-tight">
            Services at a 
            <span className="text-accent"> Glance</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From intimate residential transformations to grand commercial projects, 
            we offer comprehensive design solutions tailored to your unique vision and lifestyle.
          </p>
        </div>

        {/* Interactive Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services?.map((service) => (
            <div
              key={service?.id}
              className="group relative bg-white rounded-2xl shadow-sanctuary-md overflow-hidden sanctuary-transition hover:shadow-sanctuary-xl hover:-translate-y-2"
              onMouseEnter={() => setHoveredService(service?.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service?.image}
                  alt={service?.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Service Icon */}
                <div className={`absolute top-4 left-4 w-12 h-12 ${service?.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={service?.icon} size={24} color="white" />
                </div>

                {/* Portfolio Preview */}
                {hoveredService === service?.id && (
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {service?.portfolioImages?.map((img, index) => (
                      <div key={index} className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                        <Image
                          src={img}
                          alt={`Portfolio ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {service?.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service?.description}
                </p>

                {/* Service Features */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    {service?.features?.slice(0, 4)?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={14} className="text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Details */}
                <div className="flex justify-between items-center mb-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Starting</span>
                    <div className="font-semibold text-primary">{service?.startingPrice}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-muted-foreground">Timeline</span>
                    <div className="font-semibold text-primary">{service?.timeline}</div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  fullWidth
                  className="border-accent text-accent hover:bg-accent hover:text-white group-hover:border-accent"
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={16}
                >
                  Learn More
                </Button>
              </div>

              {/* Hover Effect Overlay */}
              {hoveredService === service?.id && (
                <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Services CTA */}
        <div className="text-center bg-sanctuary-gray rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-playfair font-semibold text-primary mb-4">
            Not sure which service is right for you?
          </h3>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and find the perfect approach to transform your space. 
            Our consultation is always complimentary.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                variant="default"
                className="bg-forest-green hover:bg-forest-green/90 text-white px-8 py-3"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Free Consultation
              </Button>
            </Link>
            
            <Link to="/services">
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3"
                iconName="ArrowRight"
                iconPosition="right"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;