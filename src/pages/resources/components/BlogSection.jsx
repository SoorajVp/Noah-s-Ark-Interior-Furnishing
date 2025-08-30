import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: 'BookOpen' },
    { id: 'transformations', name: 'Transformations', icon: 'RefreshCw' },
    { id: 'tips', name: 'Design Tips', icon: 'Lightbulb' },
    { id: 'seasonal', name: 'Seasonal', icon: 'Calendar' },
    { id: 'behind-scenes', name: 'Behind the Scenes', icon: 'Camera' }
  ];

  const blogPosts = [
    {
      id: 1,
      category: 'transformations',
      title: 'From Cramped to Cozy: A Studio Apartment Makeover',
      excerpt: 'See how we transformed a 450 sq ft studio into a functional and stylish sanctuary using clever space-saving solutions and strategic design choices.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      author: 'Sarah Mitchell',
      authorImage: 'https://randomuser.me/api/portraits/women/32.jpg',
      date: '2025-01-20',
      readTime: '8 min read',
      featured: true,
      tags: ['Small Spaces', 'Studio Design', 'Space Optimization']
    },
    {
      id: 2,
      category: 'tips',
      title: '10 Lighting Mistakes That Are Ruining Your Room',
      excerpt: 'Avoid these common lighting pitfalls that can make even the most beautifully designed space feel unwelcoming and poorly planned.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=600&h=400&fit=crop',
      author: 'Michael Chen',
      authorImage: 'https://randomuser.me/api/portraits/men/45.jpg',
      date: '2025-01-18',
      readTime: '6 min read',
      featured: false,
      tags: ['Lighting Design', 'Common Mistakes', 'Interior Tips']
    },
    {
      id: 3,
      category: 'seasonal',
      title: 'Spring Refresh: 5 Easy Ways to Update Your Home',
      excerpt: 'Welcome the new season with simple yet impactful changes that will breathe fresh life into your living spaces without breaking the budget.',
      image: 'https://images.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg?w=600&h=400&fit=crop',
      author: 'Emma Rodriguez',
      authorImage: 'https://randomuser.me/api/portraits/women/28.jpg',
      date: '2025-01-15',
      readTime: '5 min read',
      featured: true,
      tags: ['Spring Decor', 'Seasonal Updates', 'Budget-Friendly']
    },
    {
      id: 4,
      category: 'behind-scenes',
      title: 'A Day in the Life: Behind Our Design Process',
      excerpt: 'Take an exclusive look at how our team approaches each project, from initial consultation to final reveal, and the magic that happens in between.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
      author: 'David Thompson',
      authorImage: 'https://randomuser.me/api/portraits/men/38.jpg',
      date: '2025-01-12',
      readTime: '10 min read',
      featured: false,
      tags: ['Design Process', 'Team Insights', 'Project Management']
    },
    {
      id: 5,
      category: 'transformations',
      title: 'Victorian Charm Meets Modern Living',
      excerpt: 'Discover how we preserved the historic character of a 1890s Victorian home while creating spaces that work for contemporary family life.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      author: 'Lisa Park',
      authorImage: 'https://randomuser.me/api/portraits/women/42.jpg',
      date: '2025-01-10',
      readTime: '12 min read',
      featured: true,
      tags: ['Historic Homes', 'Victorian Style', 'Modern Updates']
    },
    {
      id: 6,
      category: 'tips',
      title: 'The Psychology of Color in Interior Design',
      excerpt: 'Learn how different colors affect mood and behavior, and how to use this knowledge to create spaces that support your lifestyle and well-being.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=600&h=400&fit=crop',
      author: 'Rachel Kim',
      authorImage: 'https://randomuser.me/api/portraits/women/35.jpg',
      date: '2025-01-08',
      readTime: '7 min read',
      featured: false,
      tags: ['Color Psychology', 'Wellness Design', 'Color Theory']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts?.filter(post => post?.category === selectedCategory);

  const featuredPost = blogPosts?.find(post => post?.featured);

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
          Design Stories & Insights
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our latest transformations, design tips, and behind-the-scenes stories 
          from the Noah's Ark Interior team.
        </p>
      </div>
      {/* Featured Post */}
      {featuredPost && (
        <div className="bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden sanctuary-hover group">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative overflow-hidden">
              <Image
                src={featuredPost?.image}
                alt={featuredPost?.title}
                className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-inter font-medium">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs text-accent font-inter font-medium uppercase tracking-wide">
                  {categories?.find(cat => cat?.id === featuredPost?.category)?.name}
                </span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{featuredPost?.readTime}</span>
              </div>
              
              <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
                {featuredPost?.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {featuredPost?.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    src={featuredPost?.authorImage}
                    alt={featuredPost?.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-inter font-medium text-foreground text-sm">
                      {featuredPost?.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(featuredPost?.date)}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-accent hover:text-accent hover:bg-accent/10"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
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
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts?.filter(post => !post?.featured || selectedCategory !== 'all')?.map((post) => (
          <article
            key={post?.id}
            className="bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden sanctuary-hover group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={post?.image}
                alt={post?.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-black/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                  {post?.readTime}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-accent font-inter font-medium uppercase tracking-wide">
                  {categories?.find(cat => cat?.id === post?.category)?.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {formatDate(post?.date)}
                </span>
              </div>

              <h3 className="text-lg font-playfair font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                {post?.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                {post?.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post?.tags?.slice(0, 2)?.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-inter"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Image
                    src={post?.authorImage}
                    alt={post?.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-xs text-muted-foreground font-inter">
                    {post?.author}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-accent hover:text-accent hover:bg-accent/10 p-0"
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={16}
                >
                  Read
                </Button>
              </div>
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
          Load More Posts
        </Button>
      </div>
    </div>
  );
};

export default BlogSection;