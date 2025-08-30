import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Input from '../../../components/ui/Input';

const DownloadableResources = () => {
  const [showDownloadForm, setShowDownloadForm] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });

  const resources = [
    {
      id: 1,
      title: 'Room Planning Template Collection',
      description: 'Professional templates for measuring and planning any room in your home, including furniture placement guides.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      type: 'PDF Templates',
      fileSize: '2.4 MB',
      pages: '12 pages',
      category: 'Planning',
      icon: 'Layout',
      downloads: 1247,
      featured: true,
      preview: 'Includes living room, bedroom, kitchen, and bathroom planning templates with measurement guides.'
    },
    {
      id: 2,
      title: 'Color Palette Guide 2025',
      description: 'Curated color combinations and palettes trending in interior design, with hex codes and application tips.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=400&h=300&fit=crop',
      type: 'Digital Guide',
      fileSize: '5.1 MB',
      pages: '24 pages',
      category: 'Color',
      icon: 'Palette',
      downloads: 892,
      featured: true,
      preview: 'Features 50+ color combinations with mood boards and real room applications.'
    },
    {
      id: 3,
      title: 'Furniture Measurement Worksheet',
      description: 'Essential measurements for common furniture pieces to ensure perfect fit and proportion in your space.',
      image: 'https://images.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg?w=400&h=300&fit=crop',
      type: 'Printable PDF',
      fileSize: '1.8 MB',
      pages: '8 pages',
      category: 'Planning',
      icon: 'Ruler',
      downloads: 634,
      featured: false,
      preview: 'Standard dimensions for sofas, tables, beds, and storage solutions.'
    },
    {
      id: 4,
      title: 'Lighting Design Checklist',
      description: 'Comprehensive checklist for planning ambient, task, and accent lighting in every room of your home.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      type: 'Interactive PDF',
      fileSize: '3.2 MB',
      pages: '16 pages',
      category: 'Lighting',
      icon: 'Lightbulb',
      downloads: 756,
      featured: false,
      preview: 'Room-by-room lighting requirements with fixture recommendations and placement tips.'
    },
    {
      id: 5,
      title: 'Budget Planning Spreadsheet',
      description: 'Track your interior design budget with our comprehensive spreadsheet template, including cost categories and tips.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      type: 'Excel Template',
      fileSize: '0.9 MB',
      pages: '4 sheets',
      category: 'Planning',
      icon: 'Calculator',
      downloads: 423,
      featured: false,
      preview: 'Pre-built formulas for tracking expenses, comparing quotes, and managing project costs.'
    },
    {
      id: 6,
      title: 'Style Quiz Results Guide',
      description: 'Detailed explanations of interior design styles with characteristics, key elements, and shopping guides.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=400&h=300&fit=crop',
      type: 'Digital Guide',
      fileSize: '4.7 MB',
      pages: '32 pages',
      category: 'Style',
      icon: 'Star',
      downloads: 1089,
      featured: true,
      preview: 'Covers 12 popular design styles with mood boards, color palettes, and furniture recommendations.'
    }
  ];

  const categories = ['All', 'Planning', 'Color', 'Lighting', 'Style'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources?.filter(resource => resource?.category === selectedCategory);

  const handleDownload = (resource) => {
    setSelectedResource(resource);
    setShowDownloadForm(true);
  };

  const handleFormSubmit = (e) => {
    e?.preventDefault();
    // Simulate download process
    console.log('Downloading resource:', selectedResource?.title);
    console.log('User data:', formData);
    
    // Reset form and close modal
    setFormData({ name: '', email: '', company: '' });
    setShowDownloadForm(false);
    setSelectedResource(null);
    
    // Show success message (in real app, this would trigger actual download)
    alert(`Thank you! Your download of "${selectedResource?.title}" will begin shortly.`);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (showDownloadForm && selectedResource) {
    return (
      <div className="bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden max-w-2xl mx-auto">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={selectedResource?.image}
            alt={selectedResource?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-6 left-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowDownloadForm(false)}
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Back to Resources
            </Button>
          </div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-playfair font-semibold mb-2">
              {selectedResource?.title}
            </h3>
            <div className="flex items-center space-x-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                {selectedResource?.type}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                {selectedResource?.fileSize}
              </span>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="mb-6">
            <h4 className="font-playfair font-semibold text-lg mb-2">What's Included</h4>
            <p className="text-muted-foreground">{selectedResource?.preview}</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              value={formData?.name}
              onChange={(e) => handleInputChange('name', e?.target?.value)}
              required
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email address"
              description="We'll send you the download link and occasional design tips"
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              required
            />

            <Input
              label="Company (Optional)"
              type="text"
              placeholder="Your company or organization"
              value={formData?.company}
              onChange={(e) => handleInputChange('company', e?.target?.value)}
            />

            <div className="pt-4">
              <Button
                type="submit"
                variant="default"
                fullWidth
                className="bg-forest-green hover:bg-forest-green/90 text-white"
                iconName="Download"
                iconPosition="left"
              >
                Download {selectedResource?.title}
              </Button>
            </div>
          </form>

          <div className="mt-6 p-4 bg-muted rounded-xl">
            <div className="flex items-start space-x-3">
              <Icon name="Shield" size={20} className="text-accent mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground mb-1">
                  Your Privacy Matters
                </p>
                <p className="text-xs text-muted-foreground">
                  We respect your privacy and will never share your information. 
                  You can unsubscribe from our emails at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-playfair font-semibold text-foreground mb-4">
          Free Design Resources
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Download our professional templates, guides, and tools to help you plan 
          and execute your interior design projects with confidence.
        </p>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories?.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-accent text-accent-foreground shadow-sanctuary-md'
                : 'bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent'
            }`}
          >
            <span className="font-inter font-medium text-sm">{category}</span>
          </button>
        ))}
      </div>
      {/* Featured Resources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredResources?.filter(resource => resource?.featured)?.map((resource) => (
          <div
            key={resource?.id}
            className="bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden sanctuary-hover group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={resource?.image}
                alt={resource?.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-inter font-medium">
                  Featured
                </span>
              </div>
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <span className="bg-black/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                  {resource?.fileSize}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Icon name={resource?.icon} size={16} className="text-accent" />
                  <span className="text-xs text-accent font-inter font-medium uppercase tracking-wide">
                    {resource?.category}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {resource?.downloads?.toLocaleString()} downloads
                </span>
              </div>

              <h3 className="text-lg font-playfair font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {resource?.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {resource?.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span>{resource?.type}</span>
                  <span>•</span>
                  <span>{resource?.pages}</span>
                </div>
              </div>

              <Button
                variant="default"
                fullWidth
                onClick={() => handleDownload(resource)}
                className="bg-forest-green hover:bg-forest-green/90 text-white"
                iconName="Download"
                iconPosition="left"
              >
                Free Download
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* Regular Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources?.filter(resource => !resource?.featured)?.map((resource) => (
          <div
            key={resource?.id}
            className="bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden sanctuary-hover group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={resource?.image}
                alt={resource?.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-black/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                  {resource?.fileSize}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Icon name={resource?.icon} size={16} className="text-accent" />
                  <span className="text-xs text-accent font-inter font-medium uppercase tracking-wide">
                    {resource?.category}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-playfair font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {resource?.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                {resource?.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-muted-foreground">
                  {resource?.downloads?.toLocaleString()} downloads
                </span>
                <span className="text-xs text-muted-foreground">
                  {resource?.pages}
                </span>
              </div>

              <Button
                variant="outline"
                fullWidth
                onClick={() => handleDownload(resource)}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                iconName="Download"
                iconPosition="left"
              >
                Download
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadableResources;