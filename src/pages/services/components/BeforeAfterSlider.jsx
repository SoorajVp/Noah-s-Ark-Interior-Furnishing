import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const BeforeAfterSlider = ({ beforeImage, afterImage, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const rect = e?.currentTarget?.getBoundingClientRect();
    const x = e?.clientX - rect?.left;
    const percentage = (x / rect?.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
      <div className="p-6">
        <h3 className="text-xl font-playfair font-bold text-primary mb-4 text-center">
          {title}
        </h3>
        
        <div 
          className="relative h-64 lg:h-80 rounded-lg overflow-hidden cursor-col-resize select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0">
            <Image
              src={afterImage}
              alt="After transformation"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-inter font-medium">
              After
            </div>
          </div>

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src={beforeImage}
              alt="Before transformation"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-muted-foreground text-white px-3 py-1 rounded-full text-sm font-inter font-medium">
              Before
            </div>
          </div>

          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <Icon name="Move" size={16} className="text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground font-inter">
          <span>Drag to compare</span>
          <span>{Math.round(sliderPosition)}% revealed</span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;