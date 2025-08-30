import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ClientStoryCard = ({ story, onViewStory }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sanctuary-md sanctuary-hover">
      {/* Video/Image Section */}
      <div className="relative aspect-video bg-muted">
        <Image
          src={story?.thumbnail}
          alt={`${story?.client?.name}'s transformation story`}
          className="w-full h-full object-cover"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <Button
            variant="secondary"
            size="lg"
            iconName="Play"
            iconPosition="left"
            iconSize={24}
            onClick={() => onViewStory(story)}
            className="bg-background/90 backdrop-blur-sm hover:bg-background text-foreground shadow-lg"
          >
            Watch Story
          </Button>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-4 right-4">
          <span className="inline-flex items-center px-2 py-1 rounded-md bg-black/70 text-white text-xs font-medium">
            <Icon name="Clock" size={12} className="mr-1" />
            {story?.videoDuration}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        {/* Client Info */}
        <div className="flex items-center mb-4">
          <Image
            src={story?.client?.avatar}
            alt={story?.client?.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-semibold text-foreground">{story?.client?.name}</h3>
            <p className="text-sm text-muted-foreground">{story?.client?.location}</p>
          </div>
        </div>

        {/* Story Preview */}
        <blockquote className="text-foreground italic mb-4 line-clamp-3">
          "{story?.testimonialPreview}"
        </blockquote>

        {/* Project Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Project Type:</span>
            <span className="font-medium text-foreground">{story?.projectType}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Rooms Transformed:</span>
            <span className="font-medium text-foreground">{story?.roomsCount}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Timeline:</span>
            <span className="font-medium text-foreground">{story?.timeline}</span>
          </div>
        </div>

        {/* Before/After Preview */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={story?.beforePreview}
              alt="Before transformation"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-1 left-1 bg-black/70 text-white text-xs px-2 py-1 rounded">
              Before
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={story?.afterPreview}
              alt="After transformation"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-1 left-1 bg-forest-green text-white text-xs px-2 py-1 rounded">
              After
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {story?.tags?.slice(0, 3)?.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <Button
          variant="outline"
          fullWidth
          iconName="ExternalLink"
          iconPosition="right"
          iconSize={16}
          onClick={() => onViewStory(story)}
          className="sanctuary-transition"
        >
          View Full Story
        </Button>
      </div>
    </div>
  );
};

export default ClientStoryCard;