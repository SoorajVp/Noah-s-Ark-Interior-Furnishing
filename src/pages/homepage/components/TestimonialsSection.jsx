import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Homeowner",
      location: "Manhattan, NY",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      spaceImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      quote: `Noah's Ark transformed our apartment into a sanctuary we never want to leave. Every detail was thoughtfully considered, from the custom lighting that creates the perfect ambiance to the furniture pieces that tell our story.\n\nThe team didn't just design our space – they understood our lifestyle and created a home that truly reflects who we are.`,
      rating: 5,
      project: "Luxury Apartment Renovation",
      timeline: "8 weeks",
      rooms: "4 rooms"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      location: "Brooklyn, NY",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      spaceImage: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      quote: `Our office redesign exceeded every expectation. The space now inspires creativity and productivity in ways I never imagined possible. Client meetings have become showcases of our company's vision and values.\n\nThe investment in professional design has already paid dividends in employee satisfaction and client impressions.`,
      rating: 5,
      project: "Corporate Office Design",
      timeline: "12 weeks",
      rooms: "6 spaces"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Interior Design Enthusiast",
      location: "Queens, NY",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      spaceImage: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
      quote: `Working with Noah's Ark was like having a design fairy godmother. They took my Pinterest dreams and made them reality, but better. The virtual consultation process was seamless, and the final result feels both aspirational and livable.\n\nEvery guest asks for their contact information – that's the highest compliment I can give.`,
      rating: 5,
      project: "Virtual Design Service",
      timeline: "4 weeks",
      rooms: "3 rooms"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Real Estate Developer",
      location: "Manhattan, NY",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      spaceImage: "https://images.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg",
      quote: `As a developer, I've worked with many design firms, but Noah's Ark stands apart. Their ability to create spaces that sell themselves is remarkable. The staging and design work they did for our luxury condos resulted in 40% faster sales.\n\nThey understand both aesthetics and market psychology – a rare combination in this industry.`,
      rating: 5,
      project: "Luxury Condo Staging",
      timeline: "16 weeks",
      rooms: "12 units"
    }
  ];

  const floatingQuotes = [
    {
      text: "They turned our house into a home",
      author: "Jennifer K.",
      position: { top: "20%", left: "10%" }
    },
    {
      text: "Exceeded every expectation",
      author: "Robert M.",
      position: { top: "60%", right: "15%" }
    },
    {
      text: "Pure design magic",
      author: "Lisa T.",
      position: { bottom: "25%", left: "20%" }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const currentTestimonialData = testimonials?.[currentTestimonial];

  return (
    <section className="py-20 lg:py-32 bg-sanctuary-white relative overflow-hidden">
      {/* Floating Quotes Background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingQuotes?.map((quote, index) => (
          <div
            key={index}
            className="absolute opacity-10 floating-element"
            style={quote?.position}
          >
            <div className="bg-accent/20 rounded-full p-4 max-w-xs">
              <p className="text-sm font-medium text-primary mb-1">"{quote?.text}"</p>
              <p className="text-xs text-muted-foreground">- {quote?.author}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full">
              Client Stories
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-primary mb-8 max-w-4xl mx-auto leading-tight">
            Transformations That 
            <span className="text-accent"> Speak Volumes</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from clients who've experienced 
            the magic of living in their perfectly designed sanctuaries.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-sanctuary-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Client Space Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
                <Image
                  src={currentTestimonialData?.spaceImage}
                  alt={`${currentTestimonialData?.name}'s transformed space`}
                  className="w-full h-full object-cover"
                />
                
                {/* Project Badge */}
                <div className="absolute top-6 left-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2">
                    <p className="text-sm font-medium text-primary">
                      {currentTestimonialData?.project}
                    </p>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Timeline</p>
                        <p className="font-semibold text-primary">{currentTestimonialData?.timeline}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Scope</p>
                        <p className="font-semibold text-primary">{currentTestimonialData?.rooms}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(currentTestimonialData?.rating)]?.map((_, index) => (
                    <Icon key={index} name="Star" size={20} className="text-accent fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <div className="mb-8">
                  <Icon name="Quote" size={32} className="text-accent/30 mb-4" />
                  <div className="prose prose-lg text-muted-foreground">
                    {currentTestimonialData?.quote?.split('\n\n')?.map((paragraph, index) => (
                      <p key={index} className="mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/20">
                    <Image
                      src={currentTestimonialData?.image}
                      alt={currentTestimonialData?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-playfair font-semibold text-primary">
                      {currentTestimonialData?.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {currentTestimonialData?.role}
                    </p>
                    <p className="text-sm text-accent">
                      {currentTestimonialData?.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center items-center space-x-8 mb-16">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white shadow-sanctuary-md rounded-full flex items-center justify-center sanctuary-transition hover:shadow-sanctuary-lg hover:-translate-y-1"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={20} className="text-primary" />
          </button>

          <div className="flex space-x-3">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-accent scale-125' :'bg-muted hover:bg-accent/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white shadow-sanctuary-md rounded-full flex items-center justify-center sanctuary-transition hover:shadow-sanctuary-lg hover:-translate-y-1"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={20} className="text-primary" />
          </button>
        </div>

        {/* Client Showcase Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {testimonials?.map((testimonial, index) => (
            <button
              key={testimonial?.id}
              onClick={() => goToTestimonial(index)}
              className={`group relative aspect-square rounded-xl overflow-hidden sanctuary-transition ${
                index === currentTestimonial 
                  ? 'ring-2 ring-accent shadow-sanctuary-lg' 
                  : 'hover:shadow-sanctuary-md hover:-translate-y-1'
              }`}
            >
              <Image
                src={testimonial?.spaceImage}
                alt={`${testimonial?.name}'s space`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-sm font-medium truncate">{testimonial?.name}</p>
                <p className="text-xs opacity-80">{testimonial?.location}</p>
              </div>
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-sanctuary-gray rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-playfair font-semibold text-primary mb-4">
            Ready to create your own success story?
          </h3>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who've transformed their spaces into personal sanctuaries. 
            Your dream home is just a consultation away.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                variant="default"
                className="bg-forest-green hover:bg-forest-green/90 text-white px-8 py-3"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Your Consultation
              </Button>
            </Link>
            
            <Link to="/portfolio">
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3"
                iconName="ArrowRight"
                iconPosition="right"
              >
                View More Transformations
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;