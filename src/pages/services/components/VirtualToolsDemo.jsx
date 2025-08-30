import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VirtualToolsDemo = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demoTools = [
    {
      name: "3D Room Visualizer",
      icon: "Box",
      description: "See your space transformed in real-time 3D",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      features: ["360° room views", "Furniture placement", "Lighting simulation", "Material swatches"]
    },
    {
      name: "Mood Board Creator",
      icon: "Palette",
      description: "Collaborate on design concepts visually",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      features: ["Drag & drop interface", "Color palette tools", "Texture library", "Client feedback system"]
    },
    {
      name: "Virtual Consultation",
      icon: "Video",
      description: "Face-to-face design sessions from anywhere",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      features: ["HD video calls", "Screen sharing", "Digital measuring", "Recording sessions"]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
            Experience Our Virtual Design Tools
          </h3>
          <p className="text-muted-foreground font-inter">
            Cutting-edge technology meets timeless design expertise
          </p>
        </div>

        {/* Tool Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {demoTools?.map((tool, index) => (
            <button
              key={index}
              onClick={() => setActiveDemo(index)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg sanctuary-transition ${
                activeDemo === index
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-muted text-foreground hover:bg-accent/10'
              }`}
            >
              <Icon name={tool?.icon} size={18} />
              <span className="font-inter font-medium text-sm">
                {tool?.name}
              </span>
            </button>
          ))}
        </div>

        {/* Active Demo */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
            <Image
              src={demoTools?.[activeDemo]?.image}
              alt={demoTools?.[activeDemo]?.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name={demoTools?.[activeDemo]?.icon} size={20} />
                <span className="font-inter font-medium">
                  {demoTools?.[activeDemo]?.name}
                </span>
              </div>
            </div>
            
            {/* Interactive Overlay */}
            <div className="absolute top-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                <Icon name="Play" size={20} className="text-accent" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-playfair font-bold text-primary mb-4">
              {demoTools?.[activeDemo]?.name}
            </h4>
            <p className="text-muted-foreground font-inter mb-6">
              {demoTools?.[activeDemo]?.description}
            </p>

            <div className="space-y-3 mb-8">
              {demoTools?.[activeDemo]?.features?.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-accent flex-shrink-0" />
                  <span className="font-inter text-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button
              variant="default"
              className="bg-accent hover:bg-accent/90 text-white"
              iconName="ExternalLink"
              iconPosition="right"
            >
              Try Interactive Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualToolsDemo;