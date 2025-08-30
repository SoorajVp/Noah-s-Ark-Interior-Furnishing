import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrendInsights = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Trends', icon: 'Sparkles' },
    { id: 'color', name: 'Color Trends', icon: 'Palette' },
    { id: 'furniture', name: 'Furniture', icon: 'Armchair' },
    { id: 'seasonal', name: 'Seasonal', icon: 'Calendar' },
    { id: 'materials', name: 'Materials', icon: 'Layers' }
  ];

  const trendInsights = [
    {
      id: 1,
      category: 'color',
      title: 'Warm Minimalism: The New Neutral',
      excerpt: 'Discover how warm beiges and soft terracottas are replacing stark whites in modern interiors.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      readTime: '5 min read',
      date: '2025-01-15',
      trending: true,
      tags: ['Color Psychology', 'Modern Design', 'Minimalism']
    },
    {
      id: 2,
      category: 'furniture',
      title: 'Curved Furniture: Softening Modern Spaces',
      excerpt: 'Explore the rise of organic shapes and curved silhouettes in contemporary furniture design.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
      readTime: '7 min read',
      date: '2025-01-12',
      trending: false,
      tags: ['Furniture Design', 'Contemporary', 'Organic Shapes']
    },
    {
      id: 3,
      category: 'seasonal',
      title: 'Spring 2025: Biophilic Design Essentials',
      excerpt: 'Bring nature indoors with these essential biophilic design elements for the upcoming season.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      readTime: '6 min read',
      date: '2025-01-10',
      trending: true,
      tags: ['Biophilic Design', 'Spring Trends', 'Natural Elements']
    },
    {
      id: 4,
      category: 'materials',
      title: 'Sustainable Luxury: Eco-Friendly Materials',
      excerpt: 'Discover premium sustainable materials that don\'t compromise on luxury or style.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=600&h=400&fit=crop',
      readTime: '8 min read',
      date: '2025-01-08',
      trending: false,
      tags: ['Sustainability', 'Luxury Materials', 'Eco-Design']
    },
    {
      id: 5,
      category: 'color',
      title: 'Digital Detox: Calming Color Palettes',
      excerpt: 'Create serene spaces with color palettes designed to promote relaxation and well-being.',
      image: 'https://images.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg?w=600&h=400&fit=crop',
      readTime: '4 min read',
      date: '2025-01-05',
      trending: true,
      tags: ['Wellness Design', 'Color Therapy', 'Mindful Living']
    },
    {
      id: 6,
      category: 'furniture',
      title: 'Multi-Functional Furniture for Small Spaces',
      excerpt: 'Maximize your space with innovative furniture pieces that serve multiple purposes.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      readTime: '6 min read',
      date: '2025-01-03',
      trending: false,
      tags: ['Small Spaces', 'Functional Design', 'Space Optimization']
    }
  ];

  const filteredInsights = selectedCategory === 'all' 
    ? trendInsights 
    : trendInsights?.filter(insight => insight?.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-playfair font-semibold text-foreground mb-4">
          Design Trend Insights
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Stay ahead of the curve with our expert analysis of the latest interior design trends, 
          seasonal inspirations, and industry forecasts.
        </p>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setSelectedCategory(category?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category?.id
                ? 'bg-accent text-accent-foreground shadow-sanctuary-md'
                : 'bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span className="font-inter font-medium text-sm">{category?.name}</span>
          </button>
        ))}
      </div>
      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredInsights?.map((insight) => (
          <article
            key={insight?.id}
            className="bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden sanctuary-hover group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={insight?.image}
                alt={insight?.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                {insight?.trending && (
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-inter font-medium">
                    <Icon name="TrendingUp" size={12} className="inline mr-1" />
                    Trending
                  </span>
                )}
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-black/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-inter">
                  {insight?.readTime}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-accent font-inter font-medium uppercase tracking-wide">
                  {categories?.find(cat => cat?.id === insight?.category)?.name || 'Trend'}
                </span>
                <span className="text-xs text-muted-foreground">
                  {formatDate(insight?.date)}
                </span>
              </div>

              <h3 className="text-lg font-playfair font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {insight?.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {insight?.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {insight?.tags?.slice(0, 2)?.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-inter"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-accent hover:text-accent hover:bg-accent/10 p-0"
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={16}
              >
                Read More
              </Button>
            </div>
          </article>
        ))}
      </div>
      {/* Load More */}
      <div className="text-center">
        <Button
          variant="outline"
          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          iconName="Plus"
          iconPosition="left"
        >
          Load More Insights
        </Button>
      </div>
    </div>
  );
};

export default TrendInsights;