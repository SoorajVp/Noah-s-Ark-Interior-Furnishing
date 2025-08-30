import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const RoomTypeCard = ({ room, onClick }) => {
  return (
    <div 
      className="group relative bg-card rounded-xl overflow-hidden shadow-sanctuary-md sanctuary-hover cursor-pointer"
      onClick={() => onClick(room)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={room?.featuredImage}
          alt={room?.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Project Count */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground">
            {room?.projectCount} Projects
          </span>
        </div>

        {/* Room Icon */}
        <div className="absolute top-4 left-4">
          <div className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <Icon name={room?.icon} size={20} className="text-foreground" />
          </div>
        </div>

        {/* Hover Content */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Popular Styles</h4>
            <div className="flex flex-wrap gap-1">
              {room?.popularStyles?.slice(0, 3)?.map((style, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs"
                >
                  {style}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        <h3 className="font-playfair font-semibold text-lg text-foreground mb-2">
          {room?.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {room?.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Icon name="TrendingUp" size={12} className="mr-1" />
              {room?.avgBudget}
            </span>
            <span className="flex items-center">
              <Icon name="Clock" size={12} className="mr-1" />
              {room?.avgDuration}
            </span>
          </div>
          
          <Icon name="ArrowRight" size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default RoomTypeCard;