import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewProject }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showBefore, setShowBefore] = useState(false);

  return (
    <div 
      className="group relative bg-card rounded-xl overflow-hidden shadow-sanctuary-md sanctuary-hover cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewProject(project)}
    >
      {/* Image Container with Before/After Toggle */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={showBefore ? project?.beforeImage : project?.afterImage}
          alt={`${project?.title} - ${showBefore ? 'Before' : 'After'}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Before/After Toggle */}
        <div className="absolute top-4 right-4 flex bg-background/90 backdrop-blur-sm rounded-lg overflow-hidden">
          <button
            onClick={(e) => {
              e?.stopPropagation();
              setShowBefore(false);
            }}
            className={`px-3 py-1 text-xs font-medium transition-colors ${
              !showBefore 
                ? 'bg-primary text-primary-foreground' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            After
          </button>
          <button
            onClick={(e) => {
              e?.stopPropagation();
              setShowBefore(true);
            }}
            className={`px-3 py-1 text-xs font-medium transition-colors ${
              showBefore 
                ? 'bg-primary text-primary-foreground' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Before
          </button>
        </div>

        {/* Project Type Badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            project?.type === 'residential' ?'bg-forest-green/90 text-white' :'bg-accent/90 text-accent-foreground'
          }`}>
            <Icon 
              name={project?.type === 'residential' ? 'Home' : 'Building'} 
              size={12} 
              className="mr-1" 
            />
            {project?.type === 'residential' ? 'Residential' : 'Commercial'}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-4 right-4">
            <Button
              variant="secondary"
              size="sm"
              iconName="Eye"
              iconPosition="left"
              iconSize={16}
              className="w-full bg-background/90 backdrop-blur-sm hover:bg-background text-foreground"
              onClick={(e) => {
                e?.stopPropagation();
                onViewProject(project);
              }}
            >
              View Full Project
            </Button>
          </div>
        </div>
      </div>
      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-playfair font-semibold text-lg text-foreground mb-1 line-clamp-1">
              {project?.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {project?.location} • {project?.year}
            </p>
          </div>
          
          {project?.featured && (
            <div className="flex-shrink-0 ml-2">
              <Icon name="Star" size={16} className="text-accent fill-current" />
            </div>
          )}
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project?.description}
        </p>

        {/* Style Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.styles?.slice(0, 2)?.map((style, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
            >
              {style}
            </span>
          ))}
          {project?.styles?.length > 2 && (
            <span className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium">
              +{project?.styles?.length - 2} more
            </span>
          )}
        </div>

        {/* Project Stats */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Icon name="Clock" size={12} className="mr-1" />
              {project?.duration}
            </span>
            <span className="flex items-center">
              <Icon name="DollarSign" size={12} className="mr-1" />
              {project?.budgetRange}
            </span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Icon name="Heart" size={12} />
            <span>{project?.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;