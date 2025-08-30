import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Luxury Living Redefined",
      subtitle: "Modern Penthouse Transformation",
      description: "A complete sanctuary makeover featuring custom furnishings and sophisticated color palettes that reflect contemporary elegance.",
      category: "Residential"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80",
      title: "Corporate Excellence",
      subtitle: "Executive Office Redesign",
      description: "Professional workspace transformation that balances productivity with comfort, creating an inspiring environment for business success.",
      category: "Commercial"
    },
    {
      id: 3,
      image: "https://images.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg",
      title: "Timeless Elegance",
      subtitle: "Classic Home Revival",
      description: "Restoration and modernization of a traditional home, preserving character while introducing contemporary comfort and functionality.",
      category: "Residential"
    }
  ];

  const contextualEntries = [
    {
      title: "Residential Sanctuaries",
      description: "Transform your home into a personal haven",
      icon: "Home",
      path: "/services",
      color: "bg-forest-green"
    },
    {
      title: "Commercial Spaces",
      description: "Elevate your business environment",
      icon: "Building",
      path: "/services",
      color: "bg-warm-gold"
    },
    {
      title: "Virtual Consultations",
      description: "Expert guidance from anywhere",
      icon: "Video",
      path: "/contact",
      color: "bg-deep-sage"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides?.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides?.length) % heroSlides?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-sanctuary-white">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {heroSlides?.map((slide, index) => (
          <div
            key={slide?.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Parallax Effect */}
            <div className="absolute inset-0 transform scale-105">
              <Image
                src={slide?.image}
                alt={slide?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-2xl">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full backdrop-blur-sm">
                      {slide?.category}
                    </span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-white mb-4 leading-tight">
                    {slide?.title}
                  </h1>
                  
                  <h2 className="text-xl lg:text-2xl text-sanctuary-white/90 mb-6 font-inter font-light">
                    {slide?.subtitle}
                  </h2>
                  
                  <p className="text-lg text-sanctuary-white/80 mb-8 max-w-lg leading-relaxed">
                    {slide?.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="default"
                      className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-3"
                      iconName="ArrowRight"
                      iconPosition="right"
                    >
                      View This Project
                    </Button>
                    
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
                      iconName="Calendar"
                      iconPosition="left"
                    >
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroSlides?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-accent scale-125' :'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 sanctuary-hover"
        aria-label="Previous slide"
      >
        <Icon name="ChevronLeft" size={24} color="white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 sanctuary-hover"
        aria-label="Next slide"
      >
        <Icon name="ChevronRight" size={24} color="white" />
      </button>
      {/* Contextual Entry Points */}
      <div className="absolute bottom-20 right-8 z-20 hidden lg:block">
        <div className="space-y-3">
          {contextualEntries?.map((entry, index) => (
            <Link
              key={index}
              to={entry?.path}
              className="group flex items-center space-x-3 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 sanctuary-transition hover:bg-white hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className={`w-10 h-10 ${entry?.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={entry?.icon} size={20} color="white" />
              </div>
              <div>
                <h3 className="font-inter font-semibold text-primary text-sm">
                  {entry?.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {entry?.description}
                </p>
              </div>
              <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-accent transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile Contextual Entries */}
      <div className="absolute bottom-20 left-0 right-0 z-20 lg:hidden px-6">
        <div className="grid grid-cols-1 gap-3">
          {contextualEntries?.map((entry, index) => (
            <Link
              key={index}
              to={entry?.path}
              className="flex items-center space-x-3 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 sanctuary-transition hover:bg-white"
            >
              <div className={`w-8 h-8 ${entry?.color} rounded-lg flex items-center justify-center`}>
                <Icon name={entry?.icon} size={16} color="white" />
              </div>
              <div className="flex-1">
                <h3 className="font-inter font-semibold text-primary text-sm">
                  {entry?.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {entry?.description}
                </p>
              </div>
              <Icon name="ArrowRight" size={14} className="text-muted-foreground" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;