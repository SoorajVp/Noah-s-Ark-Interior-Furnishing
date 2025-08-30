import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose, onNext, onPrevious }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const allImages = [
    { src: project?.afterImage, type: 'after', title: 'After Transformation' },
    { src: project?.beforeImage, type: 'before', title: 'Before Renovation' },
    ...project?.gallery?.map((img, index) => ({ 
      src: img, 
      type: 'gallery', 
      title: `Gallery Image ${index + 1}` 
    }))
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages?.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages?.length) % allImages?.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal Content */}
      <div className="relative w-full h-full max-w-7xl mx-auto flex flex-col lg:flex-row bg-background">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          iconName="X"
          iconSize={24}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-background/90 backdrop-blur-sm hover:bg-background"
        />

        {/* Image Section */}
        <div className="flex-1 relative bg-black">
          <div className="relative w-full h-full min-h-[50vh] lg:min-h-screen">
            <Image
              src={allImages?.[currentImageIndex]?.src}
              alt={allImages?.[currentImageIndex]?.title}
              className="w-full h-full object-cover"
            />

            {/* Image Navigation */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                iconName="ChevronLeft"
                iconSize={24}
                onClick={previousImage}
                className="ml-4 bg-background/90 backdrop-blur-sm hover:bg-background text-foreground"
              />
            </div>
            
            <div className="absolute inset-y-0 right-0 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                iconName="ChevronRight"
                iconSize={24}
                onClick={nextImage}
                className="mr-4 bg-background/90 backdrop-blur-sm hover:bg-background text-foreground"
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                {currentImageIndex + 1} / {allImages?.length}
              </div>
            </div>

            {/* Before/After Toggle for main images */}
            {allImages?.[currentImageIndex]?.type !== 'gallery' && (
              <div className="absolute top-4 left-4 flex bg-background/90 backdrop-blur-sm rounded-lg overflow-hidden">
                <button
                  onClick={() => setCurrentImageIndex(0)}
                  className={`px-3 py-1 text-xs font-medium transition-colors ${
                    currentImageIndex === 0 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  After
                </button>
                <button
                  onClick={() => setCurrentImageIndex(1)}
                  className={`px-3 py-1 text-xs font-medium transition-colors ${
                    currentImageIndex === 1 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Before
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-96 bg-background overflow-y-auto">
          <div className="p-6 lg:p-8">
            {/* Project Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  project?.type === 'residential' ?'bg-forest-green/10 text-forest-green' :'bg-accent/10 text-accent'
                }`}>
                  <Icon 
                    name={project?.type === 'residential' ? 'Home' : 'Building'} 
                    size={12} 
                    className="mr-1" 
                  />
                  {project?.type === 'residential' ? 'Residential' : 'Commercial'}
                </span>
                
                {project?.featured && (
                  <Icon name="Star" size={16} className="text-accent fill-current" />
                )}
              </div>
              
              <h1 className="font-playfair font-bold text-2xl text-foreground mb-2">
                {project?.title}
              </h1>
              
              <p className="text-muted-foreground mb-4">
                {project?.location} • {project?.year}
              </p>
              
              <p className="text-foreground leading-relaxed">
                {project?.fullDescription}
              </p>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Icon name="Clock" size={16} className="text-muted-foreground mr-2" />
                    <span className="text-sm font-medium text-muted-foreground">Duration</span>
                  </div>
                  <p className="font-semibold text-foreground">{project?.duration}</p>
                </div>
                
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Icon name="DollarSign" size={16} className="text-muted-foreground mr-2" />
                    <span className="text-sm font-medium text-muted-foreground">Budget</span>
                  </div>
                  <p className="font-semibold text-foreground">{project?.budgetRange}</p>
                </div>
              </div>

              {/* Styles */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Design Styles</h3>
                <div className="flex flex-wrap gap-2">
                  {project?.styles?.map((style, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Testimonial */}
              {project?.testimonial && (
                <div className="bg-muted rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={project?.testimonial?.avatar}
                      alt={project?.testimonial?.client}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{project?.testimonial?.client}</p>
                      <p className="text-sm text-muted-foreground">{project?.testimonial?.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-foreground italic leading-relaxed">
                    "{project?.testimonial?.quote}"
                  </blockquote>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-border">
                <Button
                  variant="default"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={18}
                  className="bg-forest-green hover:bg-forest-green/90 text-white"
                >
                  Start Your Transformation
                </Button>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    iconName="Heart"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Save ({project?.likes})
                  </Button>
                  
                  <Button
                    variant="outline"
                    iconName="Share"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Share
                  </Button>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  iconName="ChevronLeft"
                  iconPosition="left"
                  iconSize={16}
                  onClick={onPrevious}
                >
                  Previous Project
                </Button>
                
                <Button
                  variant="ghost"
                  iconName="ChevronRight"
                  iconPosition="right"
                  iconSize={16}
                  onClick={onNext}
                >
                  Next Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;