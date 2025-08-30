import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceTabs = ({ services, activeTab, onTabChange }) => {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-2 lg:gap-4 justify-center lg:justify-start">
        {services?.map((service, index) => (
          <button
            key={index}
            onClick={() => onTabChange(index)}
            className={`flex items-center space-x-2 px-4 lg:px-6 py-3 rounded-full sanctuary-transition ${
              activeTab === index
                ? 'bg-accent text-white shadow-lg'
                : 'bg-white text-foreground hover:bg-accent/10 border border-border'
            }`}
          >
            <Icon name={service?.icon} size={18} />
            <span className="font-inter font-medium text-sm lg:text-base">
              {service?.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceTabs;