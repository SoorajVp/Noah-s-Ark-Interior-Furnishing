import React from 'react';
import Image from '../../../components/AppImage';

const ServiceHero = ({ title, subtitle, backgroundImage, stats }) => {
  return (
    <div className="relative h-96 overflow-hidden rounded-2xl mb-12">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      <div className="relative h-full flex items-center px-8 lg:px-12">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-xl lg:text-2xl font-inter font-light mb-8 opacity-90">
            {subtitle}
          </p>
          
          {stats && (
            <div className="flex flex-wrap gap-8">
              {stats?.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-playfair font-bold text-accent">
                    {stat?.number}
                  </div>
                  <div className="text-sm font-inter opacity-80">
                    {stat?.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;