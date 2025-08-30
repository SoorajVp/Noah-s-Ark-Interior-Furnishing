import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';


const DesignCalculator = () => {
  const [formData, setFormData] = useState({
    roomType: '',
    roomSize: '',
    designStyle: '',
    projectScope: '',
    timeline: '',
    budget: ''
  });
  const [estimate, setEstimate] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const roomTypeOptions = [
    { value: 'living-room', label: 'Living Room' },
    { value: 'bedroom', label: 'Bedroom' },
    { value: 'kitchen', label: 'Kitchen' },
    { value: 'bathroom', label: 'Bathroom' },
    { value: 'dining-room', label: 'Dining Room' },
    { value: 'home-office', label: 'Home Office' },
    { value: 'whole-home', label: 'Whole Home' }
  ];

  const roomSizeOptions = [
    { value: 'small', label: 'Small (< 150 sq ft)' },
    { value: 'medium', label: 'Medium (150-300 sq ft)' },
    { value: 'large', label: 'Large (300-500 sq ft)' },
    { value: 'extra-large', label: 'Extra Large (> 500 sq ft)' }
  ];

  const designStyleOptions = [
    { value: 'modern', label: 'Modern/Contemporary' },
    { value: 'traditional', label: 'Traditional/Classic' },
    { value: 'transitional', label: 'Transitional' },
    { value: 'bohemian', label: 'Bohemian/Eclectic' },
    { value: 'minimalist', label: 'Minimalist' },
    { value: 'luxury', label: 'Luxury/High-End' }
  ];

  const projectScopeOptions = [
    { value: 'consultation', label: 'Design Consultation Only' },
    { value: 'design-plan', label: 'Complete Design Plan' },
    { value: 'partial-furnishing', label: 'Design + Partial Furnishing' },
    { value: 'full-service', label: 'Full-Service Design & Furnishing' },
    { value: 'renovation', label: 'Design + Renovation' }
  ];

  const timelineOptions = [
    { value: 'rush', label: 'Rush (2-4 weeks)' },
    { value: 'standard', label: 'Standard (1-2 months)' },
    { value: 'extended', label: 'Extended (3-4 months)' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const budgetOptions = [
    { value: 'budget', label: 'Budget-Friendly ($5K - $15K)' },
    { value: 'mid-range', label: 'Mid-Range ($15K - $35K)' },
    { value: 'premium', label: 'Premium ($35K - $75K)' },
    { value: 'luxury', label: 'Luxury ($75K+)' }
  ];

  const calculateEstimate = () => {
    let basePrice = 0;
    let designFee = 0;
    let furnishingBudget = 0;

    // Base price by room type
    const roomPricing = {
      'living-room': 8000,
      'bedroom': 6000,
      'kitchen': 15000,
      'bathroom': 12000,
      'dining-room': 7000,
      'home-office': 5000,
      'whole-home': 45000
    };

    basePrice = roomPricing?.[formData?.roomType] || 0;

    // Size multiplier
    const sizeMultipliers = {
      'small': 0.8,
      'medium': 1.0,
      'large': 1.3,
      'extra-large': 1.6
    };

    basePrice *= sizeMultipliers?.[formData?.roomSize] || 1;

    // Style multiplier
    const styleMultipliers = {
      'modern': 1.1,
      'traditional': 1.0,
      'transitional': 1.05,
      'bohemian': 0.95,
      'minimalist': 0.9,
      'luxury': 1.5
    };

    basePrice *= styleMultipliers?.[formData?.designStyle] || 1;

    // Project scope adjustments
    const scopeAdjustments = {
      'consultation': { designFee: 500, furnishingBudget: 0 },
      'design-plan': { designFee: 2500, furnishingBudget: 0 },
      'partial-furnishing': { designFee: 3500, furnishingBudget: basePrice * 0.6 },
      'full-service': { designFee: 5000, furnishingBudget: basePrice },
      'renovation': { designFee: 7500, furnishingBudget: basePrice * 1.2 }
    };

    const scopeData = scopeAdjustments?.[formData?.projectScope] || { designFee: 0, furnishingBudget: 0 };
    designFee = scopeData?.designFee;
    furnishingBudget = scopeData?.furnishingBudget;

    // Timeline adjustments
    const timelineMultipliers = {
      'rush': 1.3,
      'standard': 1.0,
      'extended': 0.95,
      'flexible': 0.9
    };

    const timelineMultiplier = timelineMultipliers?.[formData?.timeline] || 1;
    designFee *= timelineMultiplier;

    const totalEstimate = designFee + furnishingBudget;

    return {
      designFee: Math.round(designFee),
      furnishingBudget: Math.round(furnishingBudget),
      totalEstimate: Math.round(totalEstimate),
      timeline: getTimelineText(formData?.timeline),
      breakdown: getBreakdown(formData)
    };
  };

  const getTimelineText = (timeline) => {
    const timelines = {
      'rush': '2-4 weeks',
      'standard': '1-2 months',
      'extended': '3-4 months',
      'flexible': '2-6 months'
    };
    return timelines?.[timeline] || 'TBD';
  };

  const getBreakdown = (data) => {
    const breakdown = [];
    
    if (data?.projectScope === 'consultation') {
      breakdown?.push('Initial design consultation');
      breakdown?.push('Style assessment and recommendations');
      breakdown?.push('Basic room layout suggestions');
    } else if (data?.projectScope === 'design-plan') {
      breakdown?.push('Comprehensive design consultation');
      breakdown?.push('Detailed floor plan and layout');
      breakdown?.push('Color palette and material selections');
      breakdown?.push('Furniture and decor recommendations');
    } else if (data?.projectScope === 'partial-furnishing') {
      breakdown?.push('Complete design plan');
      breakdown?.push('Key furniture pieces');
      breakdown?.push('Lighting and accessories');
      breakdown?.push('Installation coordination');
    } else if (data?.projectScope === 'full-service') {
      breakdown?.push('End-to-end design service');
      breakdown?.push('All furniture and furnishings');
      breakdown?.push('Complete styling and installation');
      breakdown?.push('Project management');
    } else if (data?.projectScope === 'renovation') {
      breakdown?.push('Architectural planning');
      breakdown?.push('Construction coordination');
      breakdown?.push('Complete furnishing package');
      breakdown?.push('Full project management');
    }

    return breakdown;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCalculate = () => {
    const calculatedEstimate = calculateEstimate();
    setEstimate(calculatedEstimate);
    setShowResults(true);
  };

  const resetCalculator = () => {
    setFormData({
      roomType: '',
      roomSize: '',
      designStyle: '',
      projectScope: '',
      timeline: '',
      budget: ''
    });
    setEstimate(null);
    setShowResults(false);
  };

  const isFormComplete = Object.values(formData)?.every(value => value !== '');

  if (showResults && estimate) {
    return (
      <div className="bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden">
        <div className="bg-gradient-to-r from-forest-green to-deep-sage p-8 text-white">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-playfair font-semibold">Your Project Estimate</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={resetCalculator}
              className="text-white hover:bg-white/20"
              iconName="RotateCcw"
              iconPosition="left"
            >
              New Estimate
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold mb-2">
                ${estimate?.designFee?.toLocaleString()}
              </div>
              <div className="text-white/80">Design Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playfair font-bold mb-2">
                ${estimate?.furnishingBudget?.toLocaleString()}
              </div>
              <div className="text-white/80">Furnishing Budget</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-playfair font-bold mb-2 text-accent">
                ${estimate?.totalEstimate?.toLocaleString()}
              </div>
              <div className="text-white/80">Total Investment</div>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-playfair font-semibold text-lg mb-4 flex items-center">
                <Icon name="Clock" size={20} className="mr-2 text-accent" />
                Project Timeline
              </h4>
              <p className="text-muted-foreground mb-6">
                Estimated completion: <span className="font-semibold text-foreground">{estimate?.timeline}</span>
              </p>

              <h4 className="font-playfair font-semibold text-lg mb-4 flex items-center">
                <Icon name="CheckCircle" size={20} className="mr-2 text-accent" />
                What's Included
              </h4>
              <ul className="space-y-2">
                {estimate?.breakdown?.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-muted rounded-xl p-6">
              <h4 className="font-playfair font-semibold text-lg mb-4 flex items-center">
                <Icon name="Star" size={20} className="mr-2 text-accent" />
                Your Project Details
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Room Type:</span>
                  <span className="font-medium">{roomTypeOptions?.find(opt => opt?.value === formData?.roomType)?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Size:</span>
                  <span className="font-medium">{roomSizeOptions?.find(opt => opt?.value === formData?.roomSize)?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Style:</span>
                  <span className="font-medium">{designStyleOptions?.find(opt => opt?.value === formData?.designStyle)?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Scope:</span>
                  <span className="font-medium">{projectScopeOptions?.find(opt => opt?.value === formData?.projectScope)?.label}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Icon name="Info" size={20} className="text-accent mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground font-medium mb-1">
                      This is a preliminary estimate
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Final pricing may vary based on specific requirements, material selections, and site conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              className="bg-forest-green hover:bg-forest-green/90 text-white flex-1"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground flex-1"
              iconName="Download"
              iconPosition="left"
            >
              Download Estimate
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden">
      <div className="p-8 border-b border-border">
        <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4">
          Design Project Calculator
        </h3>
        <p className="text-muted-foreground">
          Get an instant estimate for your interior design project based on your specific needs and preferences.
        </p>
      </div>
      <div className="p-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Select
            label="Room Type"
            description="What space are you looking to design?"
            options={roomTypeOptions}
            value={formData?.roomType}
            onChange={(value) => handleInputChange('roomType', value)}
            required
          />

          <Select
            label="Room Size"
            description="Approximate square footage"
            options={roomSizeOptions}
            value={formData?.roomSize}
            onChange={(value) => handleInputChange('roomSize', value)}
            required
          />

          <Select
            label="Design Style"
            description="Your preferred aesthetic"
            options={designStyleOptions}
            value={formData?.designStyle}
            onChange={(value) => handleInputChange('designStyle', value)}
            required
          />

          <Select
            label="Project Scope"
            description="Level of service needed"
            options={projectScopeOptions}
            value={formData?.projectScope}
            onChange={(value) => handleInputChange('projectScope', value)}
            required
          />

          <Select
            label="Timeline"
            description="When do you need it completed?"
            options={timelineOptions}
            value={formData?.timeline}
            onChange={(value) => handleInputChange('timeline', value)}
            required
          />

          <Select
            label="Budget Range"
            description="Your investment comfort zone"
            options={budgetOptions}
            value={formData?.budget}
            onChange={(value) => handleInputChange('budget', value)}
            required
          />
        </div>

        <div className="mt-8">
          <Button
            variant="default"
            fullWidth
            disabled={!isFormComplete}
            onClick={handleCalculate}
            className="bg-forest-green hover:bg-forest-green/90 text-white disabled:bg-muted disabled:text-muted-foreground"
            iconName="Calculator"
            iconPosition="left"
          >
            Calculate My Estimate
          </Button>
        </div>

        <div className="mt-6 p-4 bg-muted rounded-xl">
          <div className="flex items-start space-x-3">
            <Icon name="Shield" size={20} className="text-accent mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">
                Accurate & Transparent Pricing
              </p>
              <p className="text-xs text-muted-foreground">
                Our estimates are based on years of experience and current market rates. 
                No hidden fees or surprise charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignCalculator;