import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceTabs from './components/ServiceTabs';
import ServiceContent from './components/ServiceContent';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import VirtualToolsDemo from './components/VirtualToolsDemo';
import TestimonialCard from './components/TestimonialCard';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const heroStats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" }
  ];

  const services = [
    {
      name: "Residential Sanctuaries",
      icon: "Home",
      tagline: "Creating personalized havens that reflect your unique story",
      heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop",
      description: `Transform your house into a sanctuary that nurtures your soul and reflects your personal journey. Our residential design services focus on creating spaces that not only look beautiful but feel like home from the moment you walk through the door. We believe every room should tell your story while providing the comfort and functionality your lifestyle demands.`,
      process: [
        {
          title: "Discovery Session",
          description: "Deep dive into your lifestyle, preferences, and dreams for your space"
        },
        {
          title: "Space Analysis",
          description: "Comprehensive assessment of your home\'s potential and challenges"
        },
        {
          title: "Design Development",
          description: "Create detailed plans, mood boards, and 3D visualizations"
        },
        {
          title: "Material Selection",
          description: "Curate furniture, finishes, and accessories that match your vision"
        },
        {
          title: "Project Management",
          description: "Oversee installation and styling for a seamless transformation"
        },
        {
          title: "Final Reveal",
          description: "Walk through your completed sanctuary and celebrate the transformation"
        }
      ],
      features: [
        "Personalized design consultation",
        "3D visualization and mood boards",
        "Custom furniture selection",
        "Color palette development",
        "Lighting design and installation",
        "Project management and coordination",
        "Styling and final touches",
        "3-month post-completion support"
      ],
      pricing: {
        range: "$15,000 - $75,000",
        note: "Based on scope and square footage"
      },
      timeline: {
        duration: "8-16 weeks",
        note: "From concept to completion"
      },
      caseStudy: {
        title: "Modern Family Retreat",
        description: "Transformed a cramped 1960s ranch into an open, light-filled family sanctuary that perfectly balances style with everyday functionality.",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
        metrics: [
          { value: "40%", label: "Space Efficiency" },
          { value: "85%", label: "Natural Light" },
          { value: "100%", label: "Client Joy" }
        ]
      }
    },
    {
      name: "Commercial Spaces",
      icon: "Building",
      tagline: "Designing environments that inspire productivity and success",
      heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
      description: `Create commercial environments that not only impress clients but inspire your team to do their best work. From modern offices to retail spaces, we design commercial interiors that reflect your brand values while optimizing functionality and employee wellbeing. Every project is tailored to support your business goals and create memorable experiences for everyone who enters your space.`,
      process: [
        {
          title: "Brand Discovery",
          description: "Understand your company culture, values, and business objectives"
        },
        {
          title: "Space Planning",
          description: "Optimize layout for workflow, collaboration, and productivity"
        },
        {
          title: "Design Strategy",
          description: "Develop concepts that align with your brand and employee needs"
        },
        {
          title: "Material Sourcing",
          description: "Select commercial-grade materials that balance style and durability"
        },
        {
          title: "Implementation",
          description: "Coordinate installation with minimal disruption to operations"
        },
        {
          title: "Performance Review",
          description: "Assess space effectiveness and make adjustments as needed"
        }
      ],
      features: [
        "Brand-aligned design strategy",
        "Ergonomic workspace planning",
        "Commercial-grade materials",
        "Technology integration",
        "Acoustic design solutions",
        "Sustainable material options",
        "Phased implementation planning",
        "Post-occupancy evaluation"
      ],
      pricing: {
        range: "$25,000 - $150,000",
        note: "Varies by square footage and complexity"
      },
      timeline: {
        duration: "12-24 weeks",
        note: "Including planning and installation"
      },
      caseStudy: {
        title: "Tech Startup Headquarters",
        description: "Designed a collaborative workspace that increased employee satisfaction by 45% and became a powerful recruiting tool for attracting top talent.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
        metrics: [
          { value: "45%", label: "Employee Satisfaction" },
          { value: "30%", label: "Collaboration Increase" },
          { value: "60%", label: "Recruitment Success" }
        ]
      }
    },
    {
      name: "Luxury Consultations",
      icon: "Crown",
      tagline: "Bespoke design experiences for discerning clients",
      heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      description: `Experience the pinnacle of personalized design with our luxury consultation services. Reserved for clients who demand nothing but the finest, these bespoke projects feature exclusive materials, custom-crafted furniture, and unparalleled attention to detail. Every element is carefully curated to create spaces that are not just beautiful, but truly extraordinary and uniquely yours.`,
      process: [
        {
          title: "Private Consultation",
          description: "Exclusive one-on-one sessions to understand your vision and lifestyle"
        },
        {
          title: "Concept Creation",
          description: "Develop unique design concepts with custom sketches and renderings"
        },
        {
          title: "Artisan Collaboration",
          description: "Work with master craftspeople to create bespoke furniture and fixtures"
        },
        {
          title: "Global Sourcing",
          description: "Access exclusive materials and antiques from around the world"
        },
        {
          title: "White-Glove Installation",
          description: "Meticulous installation and styling by our expert team"
        },
        {
          title: "Lifetime Partnership",
          description: "Ongoing relationship for future updates and seasonal refreshes"
        }
      ],
      features: [
        "Dedicated senior designer",
        "Custom furniture design",
        "Exclusive material access",
        "Artisan craftspeople network",
        "Global sourcing capabilities",
        "White-glove service",
        "Concierge-level support",
        "Lifetime design partnership"
      ],
      pricing: {
        range: "$100,000+",
        note: "Investment varies by project scope"
      },
      timeline: {
        duration: "16-32 weeks",
        note: "Allowing time for custom creations"
      },
      caseStudy: {
        title: "Penthouse Sanctuary",
        description: "Created a one-of-a-kind luxury penthouse featuring custom Italian marble, bespoke furniture, and rare art pieces sourced from three continents.",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
        metrics: [
          { value: "12", label: "Custom Pieces" },
          { value: "3", label: "Continents Sourced" },
          { value: "∞", label: "Uniqueness Factor" }
        ]
      }
    },
    {
      name: "Virtual Design Services",
      icon: "Monitor",
      tagline: "Professional design expertise delivered digitally",
      heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop",
      description: `Experience professional interior design from anywhere in the world with our comprehensive virtual services. Perfect for remote professionals, busy executives, or anyone who prefers the convenience of digital collaboration. Using cutting-edge technology and proven design processes, we deliver the same quality results as our in-person services with added flexibility and efficiency.`,
      process: [
        {
          title: "Virtual Consultation",
          description: "HD video call to discuss your needs and tour your space remotely"
        },
        {
          title: "Digital Measurement",
          description: "Guide you through measuring your space using our mobile app"
        },
        {
          title: "3D Modeling",
          description: "Create accurate digital models of your space for design development"
        },
        {
          title: "Design Presentation",
          description: "Interactive virtual walkthrough of your proposed design"
        },
        {
          title: "Shopping Lists",
          description: "Detailed purchasing guides with links and specifications"
        },
        {
          title: "Implementation Support",
          description: "Ongoing virtual guidance during the installation process"
        }
      ],
      features: [
        "HD video consultations",
        "3D room visualization",
        "Interactive design presentations",
        "Detailed shopping lists",
        "Installation guidance",
        "Mobile app access",
        "Digital mood boards",
        "Virtual progress check-ins"
      ],
      pricing: {
        range: "$2,500 - $15,000",
        note: "Significantly lower than in-person services"
      },
      timeline: {
        duration: "4-8 weeks",
        note: "Faster turnaround with digital processes"
      },
      caseStudy: {
        title: "Remote Executive Office",
        description: "Transformed a home office for a Fortune 500 executive working remotely, creating a professional backdrop that impressed clients and boosted productivity.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop",
        metrics: [
          { value: "200%", label: "Productivity Boost" },
          { value: "90%", label: "Video Call Confidence" },
          { value: "4 weeks", label: "Project Timeline" }
        ]
      }
    },
    {
      name: "Furniture Curation",
      icon: "Armchair",
      tagline: "Expertly selected pieces that define your space",
      heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop",
      description: `Let our expert curators select the perfect furniture pieces that will transform your space and stand the test of time. Whether you're looking for statement pieces, complete room solutions, or need help mixing vintage finds with contemporary designs, our furniture curation service ensures every piece works harmoniously together while reflecting your personal style and meeting your functional needs.`,
      process: [
        {
          title: "Style Assessment",
          description: "Understand your aesthetic preferences and functional requirements"
        },
        {
          title: "Space Analysis",
          description: "Evaluate your room dimensions, traffic flow, and existing pieces"
        },
        {
          title: "Curation Process",
          description: "Hand-select pieces from our network of premium furniture sources"
        },
        {
          title: "Presentation",
          description: "Present curated selections with styling and placement recommendations"
        },
        {
          title: "Procurement",
          description: "Handle ordering, delivery coordination, and quality inspection"
        },
        {
          title: "Styling Service",
          description: "Professional placement and styling for maximum impact"
        }
      ],
      features: [
        "Personal style consultation",
        "Access to trade-only showrooms",
        "Vintage and antique sourcing",
        "Custom upholstery options",
        "Quality inspection service",
        "Delivery coordination",
        "Professional styling",
        "Furniture care guidance"
      ],
      pricing: {
        range: "$5,000 - $50,000",
        note: "Based on furniture selection and scope"
      },
      timeline: {
        duration: "6-12 weeks",
        note: "Depending on custom orders and availability"
      },
      caseStudy: {
        title: "Collector\'s Living Room",
        description: "Curated a stunning collection of mid-century modern pieces mixed with contemporary art, creating a sophisticated living space that tells a cohesive design story.",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop",
        metrics: [
          { value: "15", label: "Curated Pieces" },
          { value: "5", label: "Exclusive Sources" },
          { value: "100%", label: "Style Cohesion" }
        ]
      }
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Homeowner",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      content: "Noah's Ark transformed our house into a true sanctuary. Every detail was thoughtfully considered, and the result exceeded our wildest dreams.",
      service: "Residential Sanctuaries",
      date: "December 2024"
    },
    {
      name: "Michael Chen",
      role: "CEO, TechFlow",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      content: "Our new office space has become a powerful recruiting tool. The design perfectly captures our company culture and values.",
      service: "Commercial Spaces",
      date: "November 2024"
    },
    {
      name: "Isabella Rodriguez",
      role: "Art Collector",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      content: "The luxury consultation service was worth every penny. The attention to detail and access to exclusive pieces was incredible.",
      service: "Luxury Consultations",
      date: "October 2024"
    }
  ];

  const beforeAfterExamples = [
    {
      title: "Living Room Transformation",
      beforeImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&sat=-100",
      afterImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
    },
    {
      title: "Kitchen Renovation",
      beforeImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&sat=-100",
      afterImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-sanctuary-white">
      <Helmet>
        <title>Services - Noah's Ark Interior Furnishing</title>
        <meta name="description" content="Comprehensive interior design services including residential sanctuaries, commercial spaces, luxury consultations, virtual design services, and furniture curation." />
        <meta name="keywords" content="interior design services, residential design, commercial design, luxury consultation, virtual design, furniture curation" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <ServiceHero
              title="Transform Your Space Into a Sanctuary"
              subtitle="Comprehensive design services tailored to your unique vision and lifestyle"
              backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&h=800&fit=crop"
              stats={heroStats}
            />
          </div>
        </section>

        {/* Services Navigation */}
        <section className="px-6 lg:px-8 pb-12">
          <div className="max-w-7xl mx-auto">
            <ServiceTabs
              services={services}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        </section>

        {/* Active Service Content */}
        <section className="px-6 lg:px-8 pb-12">
          <div className="max-w-7xl mx-auto">
            <ServiceContent service={services?.[activeTab]} />
          </div>
        </section>

        {/* Before/After Showcase - Only for Residential */}
        {activeTab === 0 && (
          <section className="px-6 lg:px-8 pb-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-4">
                  Transformation Stories
                </h2>
                <p className="text-xl text-muted-foreground font-inter">
                  See the dramatic before and after results of our residential projects
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {beforeAfterExamples?.map((example, index) => (
                  <BeforeAfterSlider
                    key={index}
                    title={example?.title}
                    beforeImage={example?.beforeImage}
                    afterImage={example?.afterImage}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Virtual Tools Demo - Only for Virtual Services */}
        {activeTab === 3 && (
          <section className="px-6 lg:px-8 pb-12">
            <div className="max-w-7xl mx-auto">
              <VirtualToolsDemo />
            </div>
          </section>
        )}

        {/* Client Testimonials */}
        <section className="px-6 lg:px-8 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-primary mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground font-inter">
                Real stories from satisfied clients who found their perfect sanctuary
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials?.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6">
                Ready to Begin Your Transformation?
              </h2>
              <p className="text-xl font-inter opacity-90 mb-8 max-w-2xl mx-auto">
                Let's discuss your vision and create a personalized plan that brings your dream space to life. Every great transformation starts with a conversation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="bg-white text-primary border-white hover:bg-white/90"
                  iconName="Calculator"
                  iconPosition="left"
                  iconSize={20}
                >
                  Get Project Estimate
                </Button>
                <Button
                  variant="default"
                  className="bg-accent hover:bg-accent/90 text-white"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={20}
                >
                  Schedule Free Consultation
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-6 mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={18} />
                  <span className="font-inter">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={18} />
                  <span className="font-inter">hello@noahsarkinterior.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Shield" size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-playfair font-bold text-lg">Noah's Ark</div>
                  <div className="text-sm opacity-80">Interior Furnishing</div>
                </div>
              </div>
              <p className="text-sm opacity-80 font-inter leading-relaxed">
                Creating sanctuaries that nurture the soul and reflect your unique story through thoughtful interior design.
              </p>
            </div>

            <div>
              <h3 className="font-playfair font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-sm font-inter">
                <li><a href="#" className="opacity-80 hover:opacity-100 sanctuary-transition">Residential Design</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 sanctuary-transition">Commercial Spaces</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 sanctuary-transition">Luxury Consultations</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 sanctuary-transition">Virtual Services</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-playfair font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-sm font-inter">
                <li><a href="#" className="opacity-80 hover:opacity-100 sanctuary-transition">About Us</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 sanctuary-transition">Portfolio</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 sanctuary-transition">Resources</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 sanctuary-transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-playfair font-bold text-lg mb-4">Connect</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} />
                  <span className="text-sm font-inter">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} />
                  <span className="text-sm font-inter">hello@noahsarkinterior.com</span>
                </div>
                <div className="flex space-x-3 mt-4">
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 sanctuary-transition">
                    <Icon name="Instagram" size={16} />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 sanctuary-transition">
                    <Icon name="Facebook" size={16} />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 sanctuary-transition">
                    <Icon name="Linkedin" size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-sm font-inter opacity-80">
              © {new Date()?.getFullYear()} Noah's Ark Interior Furnishing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;