import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-accent fill-current" : "text-muted"}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-full">
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={testimonial?.avatar}
            alt={testimonial?.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-inter font-semibold text-primary">
            {testimonial?.name}
          </h4>
          <p className="text-sm text-muted-foreground font-inter">
            {testimonial?.role}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-1 mb-4">
        {renderStars(testimonial?.rating)}
      </div>
      <blockquote className="text-muted-foreground font-inter leading-relaxed mb-4">
        "{testimonial?.content}"
      </blockquote>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span className="font-inter">{testimonial?.service}</span>
        <span className="font-inter">{testimonial?.date}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;