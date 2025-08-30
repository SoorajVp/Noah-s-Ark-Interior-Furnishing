import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceContent = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Service Header */}
      <div className="relative h-64 lg:h-80">
        <Image
          src={service?.heroImage}
          alt={service?.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold mb-2">
            {service?.name}
          </h2>
          <p className="text-lg font-inter opacity-90">
            {service?.tagline}
          </p>
        </div>
      </div>
      <div className="p-8 lg:p-12">
        {/* Service Description */}
        <div className="mb-12">
          <p className="text-lg text-muted-foreground font-inter leading-relaxed">
            {service?.description}
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-12">
          <h3 className="text-2xl font-playfair font-bold text-primary mb-8">
            Our Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service?.process?.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-inter font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-inter font-semibold text-primary mb-2">
                      {step?.title}
                    </h4>
                    <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                      {step?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-playfair font-bold text-primary mb-8">
            What's Included
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {service?.features?.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Icon name="Check" size={20} className="text-accent flex-shrink-0" />
                <span className="font-inter text-foreground">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing and Timeline */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-muted rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="DollarSign" size={24} className="text-accent" />
              <h4 className="text-xl font-playfair font-bold text-primary">
                Investment Range
              </h4>
            </div>
            <p className="text-2xl font-inter font-bold text-accent mb-2">
              {service?.pricing?.range}
            </p>
            <p className="text-sm text-muted-foreground font-inter">
              {service?.pricing?.note}
            </p>
          </div>

          <div className="bg-muted rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Clock" size={24} className="text-accent" />
              <h4 className="text-xl font-playfair font-bold text-primary">
                Timeline
              </h4>
            </div>
            <p className="text-2xl font-inter font-bold text-accent mb-2">
              {service?.timeline?.duration}
            </p>
            <p className="text-sm text-muted-foreground font-inter">
              {service?.timeline?.note}
            </p>
          </div>
        </div>

        {/* Case Study Preview */}
        {service?.caseStudy && (
          <div className="mb-12">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-6">
              Recent Success Story
            </h3>
            <div className="bg-sanctuary-gray rounded-xl p-6">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div>
                  <h4 className="text-xl font-playfair font-bold text-primary mb-3">
                    {service?.caseStudy?.title}
                  </h4>
                  <p className="text-muted-foreground font-inter mb-4">
                    {service?.caseStudy?.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {service?.caseStudy?.metrics?.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-inter font-bold text-accent">
                          {metric?.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric?.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={service?.caseStudy?.image}
                    alt={service?.caseStudy?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white">
          <h3 className="text-2xl font-playfair font-bold mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-lg font-inter opacity-90 mb-6">
            Let's discuss your vision and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="bg-white text-primary border-white hover:bg-white/90"
              iconName="Calculator"
              iconPosition="left"
            >
              Get Estimate
            </Button>
            <Button
              variant="default"
              className="bg-accent hover:bg-accent/90 text-white"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;