import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const StyleCollectionCard = ({ collection, onClick }) => {
  return (
    <div 
      className="group relative bg-card rounded-xl overflow-hidden shadow-sanctuary-md sanctuary-hover cursor-pointer"
      onClick={() => onClick(collection)}
    >
      {/* Main Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={collection?.coverImage}
          alt={collection?.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {/* Project Count Badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground">
            <Icon name="Image" size={12} className="mr-1" />
            {collection?.projectCount} Projects
          </span>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-playfair font-bold text-xl text-white mb-2">
            {collection?.name}
          </h3>
          <p className="text-white/90 text-sm mb-4 line-clamp-2">
            {collection?.description}
          </p>
          
          {/* Style Characteristics */}
          <div className="flex flex-wrap gap-2">
            {collection?.characteristics?.slice(0, 3)?.map((char, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md bg-white/20 backdrop-blur-sm text-white text-xs font-medium"
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Hover Effect - Sample Images */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-4 left-4 grid grid-cols-2 gap-2">
          {collection?.sampleImages?.slice(0, 4)?.map((img, index) => (
            <div key={index} className="w-16 h-16 rounded-lg overflow-hidden">
              <Image
                src={img}
                alt={`${collection?.name} sample ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyleCollectionCard;