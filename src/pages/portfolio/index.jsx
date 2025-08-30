import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import FilterBar from './components/FilterBar';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import StyleCollectionCard from './components/StyleCollectionCard';
import RoomTypeCard from './components/RoomTypeCard';
import ClientStoryCard from './components/ClientStoryCard';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const Portfolio = () => {
  const [activeView, setActiveView] = useState('all');
  const [filters, setFilters] = useState({
    style: 'all',
    room: 'all',
    budget: 'all'
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Mock data for projects
  const projects = [
    {
      id: 1,
      title: "Modern Sanctuary Penthouse",
      location: "Manhattan, NY",
      year: "2024",
      type: "residential",
      description: "A complete transformation of a 3,500 sq ft penthouse into a modern sanctuary with panoramic city views.",
      fullDescription: `This stunning penthouse transformation represents the perfect marriage of contemporary design and urban sophistication. Working with a young executive couple, we completely reimagined their 3,500 square foot space to create a modern sanctuary that maximizes the breathtaking Manhattan skyline views.\n\nThe design philosophy centered around clean lines, natural materials, and an open-concept layout that flows seamlessly from entertaining spaces to private retreats. Custom millwork, Italian marble, and carefully curated art pieces create a gallery-like atmosphere while maintaining the warmth of home.\n\nSustainability was paramount, incorporating energy-efficient systems, reclaimed wood elements, and locally-sourced materials wherever possible.`,
      beforeImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
      ],
      styles: ["Modern Contemporary", "Minimalist", "Urban Luxury"],
      duration: "8 months",
      budgetRange: "$250K+",
      likes: 342,
      featured: true,
      testimonial: {
        client: "Sarah & Michael Chen",
        role: "Homeowners",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        quote: "Noah's Ark transformed our vision into reality beyond our wildest dreams. Every detail was thoughtfully considered, and the result is a space that truly feels like our personal sanctuary in the city."
      }
    },
    {
      id: 2,
      title: "Rustic Elegance Estate",
      location: "Hamptons, NY",
      year: "2024",
      type: "residential",
      description: "A 6,000 sq ft estate renovation blending rustic charm with contemporary elegance.",
      fullDescription: `This magnificent Hamptons estate renovation showcases our ability to honor architectural heritage while introducing contemporary luxury. The 6,000 square foot property required a delicate balance between preserving its rustic charm and creating spaces that meet modern lifestyle demands.\n\nOur approach focused on highlighting original architectural elements like exposed beams and stone fireplaces while introducing sophisticated color palettes, custom furnishings, and state-of-the-art amenities. Each room tells a story of refined country living.\n\nThe project included a complete kitchen renovation, master suite expansion, and the addition of a wine cellar and home theater, all seamlessly integrated into the home's original character.`,
      beforeImage: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566752229-450a5ba3c8b6?w=800&h=600&fit=crop"
      ],
      styles: ["Traditional Classic", "Rustic Elegance", "Country Luxury"],
      duration: "12 months",
      budgetRange: "$250K+",
      likes: 289,
      featured: false,
      testimonial: {
        client: "Robert & Elizabeth Morrison",
        role: "Estate Owners",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        quote: "The team perfectly captured our vision of sophisticated country living. They preserved what we loved about the original home while creating spaces that feel fresh and luxurious."
      }
    },
    {
      id: 3,
      title: "Tech Startup Headquarters",
      location: "Silicon Valley, CA",
      year: "2024",
      type: "commercial",
      description: "A 15,000 sq ft office space designed to inspire innovation and collaboration.",
      fullDescription: `This cutting-edge tech headquarters represents the future of workplace design, where innovation meets comfort. The 15,000 square foot space was designed for a rapidly growing startup that needed flexible, inspiring environments to attract top talent and foster creativity.\n\nOur design strategy incorporated biophilic elements, flexible workspaces, and technology integration throughout. The space features open collaboration areas, private focus pods, a state-of-the-art presentation theater, and wellness rooms designed to support employee well-being.\n\nSustainability was a core requirement, achieving LEED Gold certification through energy-efficient systems, sustainable materials, and innovative waste reduction strategies.`,
      beforeImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop"
      ],
      styles: ["Modern Contemporary", "Industrial Chic", "Biophilic Design"],
      duration: "6 months",
      budgetRange: "$100K - $250K",
      likes: 156,
      featured: false,
      testimonial: {
        client: "David Park",
        role: "CEO, InnovateTech",
        avatar: "https://randomuser.me/api/portraits/men/28.jpg",
        quote: "Our new headquarters has transformed our company culture. The space inspires creativity and collaboration while providing the flexibility we need as we continue to grow."
      }
    },
    {
      id: 4,
      title: "Scandinavian Minimalist Loft",
      location: "Brooklyn, NY",
      year: "2023",
      type: "residential",
      description: "A 2,200 sq ft industrial loft transformed into a serene Scandinavian-inspired home.",
      fullDescription: `This Brooklyn loft transformation demonstrates how industrial architecture can be softened with Scandinavian design principles. The 2,200 square foot space featured beautiful bones - exposed brick, high ceilings, and large windows - that we enhanced with a carefully curated palette of natural materials and minimalist furnishings.\n\nOur approach emphasized functionality, natural light, and the Danish concept of 'hygge' - creating cozy, comfortable spaces that promote well-being. Custom storage solutions maximize the open floor plan while maintaining clean lines and uncluttered aesthetics.\n\nSustainable materials including reclaimed wood, organic textiles, and energy-efficient lighting create an environmentally conscious home that feels both modern and timeless.`,
      beforeImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop"
      ],
      styles: ["Scandinavian", "Minimalist", "Industrial"],
      duration: "5 months",
      budgetRange: "$100K - $250K",
      likes: 198,
      featured: true,
      testimonial: {
        client: "Emma Larsson",
        role: "Graphic Designer",
        avatar: "https://randomuser.me/api/portraits/women/25.jpg",
        quote: "My loft has become my sanctuary. The clean, minimalist design helps me focus on my work while the cozy elements make it feel like home."
      }
    },
    {
      id: 5,
      title: "Luxury Boutique Hotel Suite",
      location: "Miami Beach, FL",
      year: "2023",
      type: "commercial",
      description: "A collection of 20 hotel suites designed to capture Miami\'s vibrant energy and coastal luxury.",
      fullDescription: `This boutique hotel project captures the essence of Miami Beach's vibrant culture and coastal luxury. Working with a boutique hotel group, we designed 20 unique suites that each tell a different story while maintaining a cohesive brand experience.\n\nThe design draws inspiration from Miami's Art Deco heritage, tropical landscape, and international flair. Rich textures, bold colors, and custom artwork create spaces that feel both luxurious and authentically Miami. Each suite features ocean or city views maximized through strategic furniture placement and window treatments.\n\nGuest experience was paramount, with thoughtful amenities, intuitive layouts, and Instagram-worthy moments that encourage social sharing and repeat visits.`,
      beforeImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
      ],
      styles: ["Luxury Contemporary", "Art Deco", "Tropical Modern"],
      duration: "10 months",
      budgetRange: "$250K+",
      likes: 267,
      featured: false,
      testimonial: {
        client: "Carlos Rodriguez",
        role: "Hotel General Manager",
        avatar: "https://randomuser.me/api/portraits/men/38.jpg",
        quote: "The suites have become our signature feature. Guests consistently comment on the design, and our booking rates have increased significantly since the renovation."
      }
    },
    {
      id: 6,
      title: "Family Transitional Home",
      location: "Westchester, NY",
      year: "2023",
      type: "residential",
      description: "A 4,500 sq ft family home renovation balancing sophistication with child-friendly functionality.",
      fullDescription: `This Westchester family home renovation proves that sophisticated design and family functionality can coexist beautifully. The 4,500 square foot colonial required a complete reimagining to accommodate a growing family's needs while maintaining the elegance the homeowners desired.\n\nOur transitional design approach blends classic architectural elements with contemporary furnishings and family-friendly materials. Durable yet beautiful finishes, clever storage solutions, and flexible spaces ensure the home can adapt as the children grow.\n\nSpecial attention was paid to creating both formal entertaining spaces and casual family zones, with seamless flow between indoor and outdoor living areas perfect for year-round enjoyment.`,
      beforeImage: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop"
      ],
      styles: ["Transitional", "Family-Friendly", "Classic Contemporary"],
      duration: "7 months",
      budgetRange: "$100K - $250K",
      likes: 145,
      featured: false,
      testimonial: {
        client: "Jennifer & Mark Thompson",
        role: "Homeowners",
        avatar: "https://randomuser.me/api/portraits/women/35.jpg",
        quote: "Noah's Ark created a home that works for our entire family. It's sophisticated enough for entertaining but practical enough for daily life with three kids."
      }
    }
  ];

  // Mock data for style collections
  const styleCollections = [
    {
      id: 1,
      name: "Modern Contemporary",
      description: "Clean lines, open spaces, and sophisticated materials define this timeless aesthetic.",
      coverImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=800&fit=crop",
      projectCount: 15,
      characteristics: ["Clean Lines", "Open Concept", "Natural Light", "Minimal Decor"],
      sampleImages: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=200&fit=crop"
      ]
    },
    {
      id: 2,
      name: "Traditional Classic",
      description: "Timeless elegance with rich materials, warm colors, and sophisticated details.",
      coverImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=800&fit=crop",
      projectCount: 12,
      characteristics: ["Rich Materials", "Warm Colors", "Classic Details", "Formal Layout"],
      sampleImages: [
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1600566752229-450a5ba3c8b6?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=200&h=200&fit=crop"
      ]
    },
    {
      id: 3,
      name: "Scandinavian",
      description: "Light, airy spaces with natural materials and cozy, functional design elements.",
      coverImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop",
      projectCount: 8,
      characteristics: ["Light Woods", "Neutral Palette", "Cozy Textures", "Functional Design"],
      sampleImages: [
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=200&h=200&fit=crop"
      ]
    },
    {
      id: 4,
      name: "Industrial Chic",
      description: "Raw materials, exposed elements, and urban sophistication create edgy elegance.",
      coverImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=800&fit=crop",
      projectCount: 6,
      characteristics: ["Exposed Brick", "Metal Accents", "Raw Materials", "Urban Edge"],
      sampleImages: [
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop"
      ]
    }
  ];

  // Mock data for room types
  const roomTypes = [
    {
      id: 1,
      name: "Living Rooms",
      description: "The heart of the home where families gather and memories are made.",
      featuredImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=450&fit=crop",
      projectCount: 25,
      icon: "Sofa",
      popularStyles: ["Modern Contemporary", "Traditional", "Transitional"],
      avgBudget: "$25K - $75K",
      avgDuration: "6-8 weeks"
    },
    {
      id: 2,
      name: "Kitchens",
      description: "Functional and beautiful spaces designed for cooking, entertaining, and daily life.",
      featuredImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=450&fit=crop",
      projectCount: 18,
      icon: "ChefHat",
      popularStyles: ["Modern", "Traditional", "Farmhouse"],
      avgBudget: "$50K - $150K",
      avgDuration: "8-12 weeks"
    },
    {
      id: 3,
      name: "Bedrooms",
      description: "Personal retreats designed for rest, relaxation, and rejuvenation.",
      featuredImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=450&fit=crop",
      projectCount: 22,
      icon: "Bed",
      popularStyles: ["Contemporary", "Traditional", "Bohemian"],
      avgBudget: "$15K - $50K",
      avgDuration: "4-6 weeks"
    },
    {
      id: 4,
      name: "Home Offices",
      description: "Productive workspaces that inspire creativity and support professional success.",
      featuredImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=450&fit=crop",
      projectCount: 14,
      icon: "Laptop",
      popularStyles: ["Modern", "Industrial", "Minimalist"],
      avgBudget: "$10K - $35K",
      avgDuration: "3-5 weeks"
    },
    {
      id: 5,
      name: "Bathrooms",
      description: "Spa-like sanctuaries that combine luxury with everyday functionality.",
      featuredImage: "https://images.unsplash.com/photo-1600566752229-450a5ba3c8b6?w=600&h=450&fit=crop",
      projectCount: 16,
      icon: "Bath",
      popularStyles: ["Modern", "Traditional", "Spa-Inspired"],
      avgBudget: "$30K - $100K",
      avgDuration: "6-10 weeks"
    },
    {
      id: 6,
      name: "Dining Rooms",
      description: "Elegant spaces designed for memorable meals and special occasions.",
      featuredImage: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=450&fit=crop",
      projectCount: 12,
      icon: "UtensilsCrossed",
      popularStyles: ["Traditional", "Contemporary", "Formal"],
      avgBudget: "$20K - $60K",
      avgDuration: "4-6 weeks"
    }
  ];

  // Mock data for client stories
  const clientStories = [
    {
      id: 1,
      client: {
        name: "Sarah & Michael Chen",
        location: "Manhattan, NY",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      },
      projectType: "Penthouse Renovation",
      roomsCount: "5 Rooms",
      timeline: "8 Months",
      thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop",
      videoDuration: "3:45",
      testimonialPreview: "Noah's Ark transformed our vision into reality beyond our wildest dreams. Every detail was thoughtfully considered, and the result is a space that truly feels like our personal sanctuary in the city.",
      beforePreview: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop",
      afterPreview: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=200&h=200&fit=crop",
      tags: ["Modern", "Luxury", "City Living"]
    },
    {
      id: 2,
      client: {
        name: "Robert & Elizabeth Morrison",
        location: "Hamptons, NY",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      projectType: "Estate Renovation",
      roomsCount: "8 Rooms",
      timeline: "12 Months",
      thumbnail: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=400&fit=crop",
      videoDuration: "4:20",
      testimonialPreview: "The team perfectly captured our vision of sophisticated country living. They preserved what we loved about the original home while creating spaces that feel fresh and luxurious.",
      beforePreview: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=200&h=200&fit=crop",
      afterPreview: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=200&h=200&fit=crop",
      tags: ["Traditional", "Estate", "Country Living"]
    },
    {
      id: 3,
      client: {
        name: "Emma Larsson",
        location: "Brooklyn, NY",
        avatar: "https://randomuser.me/api/portraits/women/25.jpg"
      },
      projectType: "Loft Transformation",
      roomsCount: "3 Rooms",
      timeline: "5 Months",
      thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      videoDuration: "2:55",
      testimonialPreview: "My loft has become my sanctuary. The clean, minimalist design helps me focus on my work while the cozy elements make it feel like home.",
      beforePreview: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop",
      afterPreview: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=200&h=200&fit=crop",
      tags: ["Scandinavian", "Minimalist", "Loft"]
    }
  ];

  // Filter projects based on active filters
  const filteredProjects = projects?.filter(project => {
    if (activeView === 'residential' && project?.type !== 'residential') return false;
    if (activeView === 'commercial' && project?.type !== 'commercial') return false;
    if (filters?.style !== 'all' && !project?.styles?.some(style => 
      style?.toLowerCase()?.includes(filters?.style?.toLowerCase())
    )) return false;
    if (filters?.budget !== 'all') {
      const budgetMap = {
        'under-50k': ['Under $50K'],
        '50k-100k': ['$50K - $100K'],
        '100k-250k': ['$100K - $250K'],
        '250k-plus': ['$250K+']
      };
      if (!budgetMap?.[filters?.budget]?.includes(project?.budgetRange)) return false;
    }
    return true;
  });

  const handleViewProject = (project) => {
    const index = filteredProjects?.findIndex(p => p?.id === project?.id);
    setCurrentProjectIndex(index);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleNextProject = () => {
    const nextIndex = (currentProjectIndex + 1) % filteredProjects?.length;
    setCurrentProjectIndex(nextIndex);
    setSelectedProject(filteredProjects?.[nextIndex]);
  };

  const handlePreviousProject = () => {
    const prevIndex = (currentProjectIndex - 1 + filteredProjects?.length) % filteredProjects?.length;
    setCurrentProjectIndex(prevIndex);
    setSelectedProject(filteredProjects?.[prevIndex]);
  };

  const clearFilters = () => {
    setFilters({
      style: 'all',
      room: 'all',
      budget: 'all'
    });
  };

  const handleViewCollection = (collection) => {
    setActiveView('all');
    setFilters(prev => ({ ...prev, style: collection?.name?.toLowerCase()?.replace(' ', '-') }));
  };

  const handleViewRoom = (room) => {
    setActiveView('all');
    setFilters(prev => ({ ...prev, room: room?.name?.toLowerCase()?.split(' ')?.[0] }));
  };

  const handleViewStory = (story) => {
    // In a real app, this would open a video modal or navigate to a story page
    console.log('Viewing story:', story);
  };

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  return (
    <>
      <Helmet>
        <title>Portfolio - Noah's Ark Interior Furnishing</title>
        <meta name="description" content="Explore Noah's Ark's transformation stories through our comprehensive portfolio of residential and commercial interior design projects. View before/after galleries, client testimonials, and design inspiration." />
        <meta name="keywords" content="interior design portfolio, home transformation, before after, residential design, commercial design, luxury interiors" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-16 pb-12 bg-gradient-to-br from-sanctuary-white to-sanctuary-gray">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-playfair font-bold text-4xl lg:text-6xl text-foreground mb-6">
                Transformation Stories
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover how we transform spaces into sanctuaries. Each project tells a unique story of vision, 
                craftsmanship, and the power of thoughtful design to enhance lives.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={20}
                  className="bg-forest-green hover:bg-forest-green/90 text-white"
                >
                  Start Your Transformation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  iconSize={20}
                >
                  Watch Our Process
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="font-playfair font-bold text-3xl text-accent mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair font-bold text-3xl text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair font-bold text-3xl text-accent mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Design Awards</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair font-bold text-3xl text-accent mb-2">8</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <FilterBar
          activeView={activeView}
          setActiveView={setActiveView}
          filters={filters}
          setFilters={setFilters}
          onClearFilters={clearFilters}
        />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          {/* All Projects View */}
          {(activeView === 'all' || activeView === 'residential' || activeView === 'commercial') && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-playfair font-semibold text-2xl text-foreground mb-2">
                    {activeView === 'all' ? 'All Projects' : 
                     activeView === 'residential' ? 'Residential Projects' : 'Commercial Projects'}
                  </h2>
                  <p className="text-muted-foreground">
                    {filteredProjects?.length} project{filteredProjects?.length !== 1 ? 's' : ''} found
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" iconName="Grid3X3" iconSize={16}>
                    Grid
                  </Button>
                  <Button variant="ghost" size="sm" iconName="List" iconSize={16}>
                    List
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects?.map((project) => (
                  <ProjectCard
                    key={project?.id}
                    project={project}
                    onViewProject={handleViewProject}
                  />
                ))}
              </div>

              {filteredProjects?.length === 0 && (
                <div className="text-center py-16">
                  <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-foreground mb-2">No projects found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters to see more results.
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Style Collections View */}
          {activeView === 'styles' && (
            <div>
              <div className="mb-8">
                <h2 className="font-playfair font-semibold text-2xl text-foreground mb-2">
                  Style Collections
                </h2>
                <p className="text-muted-foreground">
                  Explore our projects organized by design aesthetic and style preferences.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {styleCollections?.map((collection) => (
                  <StyleCollectionCard
                    key={collection?.id}
                    collection={collection}
                    onClick={handleViewCollection}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Room Types View */}
          {activeView === 'rooms' && (
            <div>
              <div className="mb-8">
                <h2 className="font-playfair font-semibold text-2xl text-foreground mb-2">
                  Room-by-Room Inspiration
                </h2>
                <p className="text-muted-foreground">
                  Browse our portfolio by specific room types and discover targeted design solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {roomTypes?.map((room) => (
                  <RoomTypeCard
                    key={room?.id}
                    room={room}
                    onClick={handleViewRoom}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Client Stories Section */}
          <section className="mt-20 pt-16 border-t border-border">
            <div className="text-center mb-12">
              <h2 className="font-playfair font-semibold text-3xl text-foreground mb-4">
                Client Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Hear directly from our clients about their transformation journey and how their new spaces 
                have enhanced their daily lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clientStories?.map((story) => (
                <ClientStoryCard
                  key={story?.id}
                  story={story}
                  onViewStory={handleViewStory}
                />
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-20 bg-gradient-to-r from-forest-green to-deep-sage rounded-2xl p-12 text-center text-white">
            <h2 className="font-playfair font-bold text-3xl mb-4">
              Ready to Create Your Own Story?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's transform your space into a sanctuary that reflects your unique style and enhances your daily life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
                className="bg-white text-forest-green hover:bg-white/90"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={20}
                className="border-white text-white hover:bg-white hover:text-forest-green"
              >
                Start Conversation
              </Button>
            </div>
          </section>
        </main>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onNext={handleNextProject}
          onPrevious={handlePreviousProject}
        />
      </div>
    </>
  );
};

export default Portfolio;