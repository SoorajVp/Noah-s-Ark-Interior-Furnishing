import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const MaintenanceGuides = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const maintenanceGuides = [
    {
      id: 1,
      title: 'Leather Furniture Care',
      category: 'Furniture',
      icon: 'Armchair',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      difficulty: 'Easy',
      timeRequired: '15 minutes',
      description: 'Keep your leather furniture looking luxurious with proper cleaning and conditioning techniques.',
      materials: ['Leather cleaner', 'Soft microfiber cloths', 'Leather conditioner', 'Vacuum with brush attachment'],
      steps: [
        'Vacuum the leather surface using a brush attachment to remove dust and debris',
        'Test the leather cleaner on an inconspicuous area first',
        'Apply leather cleaner to a microfiber cloth and gently wipe the surface',
        'Allow the leather to dry completely before applying conditioner',
        'Apply leather conditioner in circular motions and buff to a shine',
        'Repeat conditioning every 6-12 months depending on usage'
      ],
      tips: [
        'Keep leather furniture away from direct sunlight and heat sources',
        'Clean spills immediately to prevent staining',
        'Use only products specifically designed for leather'
      ]
    },
    {
      id: 2,
      title: 'Hardwood Floor Maintenance',
      category: 'Flooring',
      icon: 'Home',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=400&h=300&fit=crop',
      difficulty: 'Medium',
      timeRequired: '30 minutes',
      description: 'Preserve the beauty and longevity of your hardwood floors with regular maintenance.',
      materials: ['Hardwood floor cleaner', 'Microfiber mop', 'Vacuum cleaner', 'Wood polish (optional)'],
      steps: [
        'Sweep or vacuum the floor to remove loose dirt and debris',
        'Mix hardwood floor cleaner according to manufacturer instructions',
        'Damp mop the floor using a microfiber mop, working in sections',
        'Avoid using excessive water that could damage the wood',
        'Dry the floor immediately with a clean, dry mop',
        'Apply wood polish if desired for extra shine'
      ],
      tips: [
        'Use furniture pads to prevent scratches',
        'Maintain consistent humidity levels (30-50%)',
        'Clean spills immediately to prevent water damage'
      ]
    },
    {
      id: 3,
      title: 'Fabric Upholstery Cleaning',
      category: 'Furniture',
      icon: 'Sofa',
      image: 'https://images.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg?w=400&h=300&fit=crop',
      difficulty: 'Medium',
      timeRequired: '45 minutes',
      description: 'Remove stains and refresh fabric upholstery with professional cleaning techniques.',
      materials: ['Upholstery cleaner', 'Soft-bristled brush', 'Clean cloths', 'Vacuum with upholstery attachment'],
      steps: [
        'Check the manufacturer\'s cleaning code (W, S, WS, or X)',
        'Vacuum the upholstery thoroughly using appropriate attachment',
        'Pre-treat any visible stains with upholstery cleaner',
        'Test cleaning solution on a hidden area first',
        'Apply cleaner and work in with soft-bristled brush',
        'Blot with clean cloth and allow to air dry completely'
      ],
      tips: [
        'Rotate cushions regularly for even wear',
        'Professional cleaning every 12-18 months',
        'Address stains immediately for best results'
      ]
    },
    {
      id: 4,
      title: 'Natural Stone Countertop Care',
      category: 'Surfaces',
      icon: 'Square',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      difficulty: 'Easy',
      timeRequired: '20 minutes',
      description: 'Maintain the elegance of marble, granite, and other natural stone surfaces.',
      materials: ['pH-neutral stone cleaner', 'Soft cloths', 'Stone sealer (annual)', 'Razor blade (for stubborn spots)'],
      steps: [
        'Clear the countertop of all items and debris',
        'Spray pH-neutral stone cleaner across the surface',
        'Wipe clean with a soft, damp cloth in circular motions',
        'Dry immediately with a clean, dry cloth to prevent water spots',
        'For stubborn spots, gently scrape with a razor blade',
        'Apply stone sealer annually or as recommended'
      ],
      tips: [
        'Never use acidic cleaners (vinegar, lemon, etc.)',
        'Use cutting boards to prevent scratches',
        'Seal natural stone annually to prevent staining'
      ]
    },
    {
      id: 5,
      title: 'Window Treatment Maintenance',
      category: 'Textiles',
      icon: 'Sun',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      difficulty: 'Easy',
      timeRequired: '25 minutes',
      description: 'Keep curtains, blinds, and shades looking fresh and functioning properly.',
      materials: ['Vacuum with brush attachment', 'Lint roller', 'Mild detergent', 'Steamer (optional)'],
      steps: [
        'Dust blinds and shades with a microfiber cloth or vacuum brush',
        'For fabric curtains, vacuum using the brush attachment',
        'Remove lint and pet hair with a lint roller',
        'Steam curtains while hanging to remove wrinkles',
        'Check hardware for proper operation and tighten if needed',
        'Professional cleaning for delicate fabrics annually'
      ],
      tips: [
        'Rotate curtains periodically to prevent uneven fading',
        'Keep blinds slightly open to prevent warping',
        'Address mechanical issues promptly to prevent damage'
      ]
    },
    {
      id: 6,
      title: 'Metal Fixture Polishing',
      category: 'Hardware',
      icon: 'Lightbulb',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=400&h=300&fit=crop',
      difficulty: 'Easy',
      timeRequired: '15 minutes',
      description: 'Restore shine to brass, copper, chrome, and other metal fixtures and hardware.',
      materials: ['Metal-specific polish', 'Soft cloths', 'Toothbrush (for details)', 'Protective gloves'],
      steps: [
        'Identify the type of metal to choose appropriate polish',
        'Remove any loose dirt or debris with a dry cloth',
        'Apply metal polish to a soft cloth, not directly to the fixture',
        'Work the polish into the metal using circular motions',
        'Use a toothbrush for detailed areas and crevices',
        'Buff to a shine with a clean, dry cloth'
      ],
      tips: [
        'Test polish on an inconspicuous area first',
        'Work in small sections for best results',
        'Regular maintenance prevents heavy tarnishing'
      ]
    }
  ];

  const categories = ['All', 'Furniture', 'Flooring', 'Surfaces', 'Textiles', 'Hardware'];

  const filteredGuides = maintenanceGuides?.filter(guide => {
    const matchesSearch = guide?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         guide?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    return matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Hard': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  if (selectedGuide) {
    const guide = maintenanceGuides?.find(g => g?.id === selectedGuide);
    
    return (
      <div className="bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={guide?.image}
            alt={guide?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-6 left-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedGuide(null)}
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Back to Guides
            </Button>
          </div>
          <div className="absolute bottom-6 left-6 text-white">
            <div className="flex items-center space-x-4 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(guide?.difficulty)}`}>
                {guide?.difficulty}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                {guide?.timeRequired}
              </span>
            </div>
            <h2 className="text-3xl font-playfair font-semibold">{guide?.title}</h2>
          </div>
        </div>
        <div className="p-8">
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            {guide?.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-playfair font-semibold text-lg mb-4 flex items-center">
                <Icon name="Package" size={20} className="mr-2 text-accent" />
                Materials Needed
              </h3>
              <ul className="space-y-2">
                {guide?.materials?.map((material, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-foreground">{material}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-playfair font-semibold text-lg mb-4 flex items-center">
                <Icon name="Lightbulb" size={20} className="mr-2 text-accent" />
                Pro Tips
              </h3>
              <ul className="space-y-2">
                {guide?.tips?.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Star" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4 flex items-center">
              <Icon name="List" size={20} className="mr-2 text-accent" />
              Step-by-Step Instructions
            </h3>
            <div className="space-y-4">
              {guide?.steps?.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-inter font-semibold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-foreground leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-6 bg-muted rounded-xl">
            <div className="flex items-start space-x-3">
              <Icon name="AlertCircle" size={20} className="text-accent mt-0.5" />
              <div>
                <h4 className="font-inter font-semibold text-foreground mb-2">Need Professional Help?</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  If you're unsure about any step or dealing with valuable items, our team is here to help with professional maintenance services.
                </p>
                <Button
                  variant="default"
                  size="sm"
                  className="bg-forest-green hover:bg-forest-green/90 text-white"
                  iconName="Phone"
                  iconPosition="left"
                >
                  Contact Our Experts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-playfair font-semibold text-foreground mb-4">
          Maintenance Guides
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Expert care instructions to keep your furnishings and finishes looking beautiful for years to come.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search maintenance guides..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            className="w-full pl-10 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides?.map((guide) => (
          <div
            key={guide?.id}
            className="bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden sanctuary-hover group cursor-pointer"
            onClick={() => setSelectedGuide(guide?.id)}
          >
            <div className="relative overflow-hidden">
              <Image
                src={guide?.image}
                alt={guide?.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(guide?.difficulty)}`}>
                  {guide?.difficulty}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-black/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                  {guide?.timeRequired}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Icon name={guide?.icon} size={16} className="text-accent" />
                  <span className="text-xs text-accent font-inter font-medium uppercase tracking-wide">
                    {guide?.category}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-playfair font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {guide?.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {guide?.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span>{guide?.materials?.length} materials</span>
                  <span>{guide?.steps?.length} steps</span>
                </div>
                <Icon name="ArrowRight" size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceGuides;