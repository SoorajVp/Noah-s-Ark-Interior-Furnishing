import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const VirtualShowroom = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const showroomRooms = [
    {
      id: 1,
      name: 'Modern Living Sanctuary',
      style: 'Contemporary Minimalist',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      description: 'A serene living space that balances clean lines with warm textures, featuring our signature neutral palette and carefully curated furnishings.',
      features: [
        'Custom sectional sofa in performance fabric',
        'Live-edge walnut coffee table',
        'Integrated LED lighting system',
        'Curated art collection',
        'Smart home integration'
      ],
      dimensions: '24\' × 16\' × 10\'',
      keyPieces: [
        { name: 'Modular Sectional', price: '$4,200' },
        { name: 'Walnut Coffee Table', price: '$1,800' },
        { name: 'Designer Floor Lamp', price: '$650' },
        { name: 'Abstract Wall Art', price: '$1,200' }
      ],
      totalInvestment: '$18,500',
      featured: true
    },
    {
      id: 2,
      name: 'Cozy Reading Retreat',
      style: 'Traditional Comfort',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800&h=600&fit=crop',
      thumbnail: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=400&h=300&fit=crop',
      description: 'An intimate space designed for relaxation and contemplation, featuring rich textures, warm lighting, and timeless furniture pieces.',
      features: [
        'Leather wingback reading chair',
        'Built-in bookshelf styling',
        'Layered lighting design',
        'Vintage Persian rug',
        'Custom window treatments'
      ],
      dimensions: '12\' × 14\' × 9\'',
      keyPieces: [
        { name: 'Leather Reading Chair', price: '$2,400' },
        { name: 'Antique Side Table', price: '$850' },
        { name: 'Table Lamp Set', price: '$420' },
        { name: 'Persian Area Rug', price: '$1,600' }
      ],
      totalInvestment: '$12,800',
      featured: false
    },
    {
      id: 3,
      name: 'Elegant Dining Experience',
      style: 'Transitional Luxury',
      image: 'https://images.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg?w=800&h=600&fit=crop',
      thumbnail: 'https://images.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg?w=400&h=300&fit=crop',
      description: 'A sophisticated dining room that seamlessly blends classic elegance with contemporary functionality, perfect for both intimate dinners and entertaining.',
      features: [
        'Extendable dining table for 8',
        'Upholstered dining chairs',
        'Statement chandelier',
        'Built-in wine storage',
        'Accent wall treatment'
      ],
      dimensions: '16\' × 20\' × 10\'',
      keyPieces: [
        { name: 'Extendable Dining Table', price: '$3,200' },
        { name: 'Dining Chair Set (8)', price: '$2,800' },
        { name: 'Crystal Chandelier', price: '$1,500' },
        { name: 'Sideboard Cabinet', price: '$2,100' }
      ],
      totalInvestment: '$22,400',
      featured: true
    },
    {
      id: 4,
      name: 'Serene Master Bedroom',
      style: 'Organic Modern',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      description: 'A tranquil bedroom retreat that promotes rest and relaxation through natural materials, soothing colors, and thoughtful design details.',
      features: [
        'Platform bed with integrated nightstands',
        'Natural fiber textiles',
        'Blackout window treatments',
        'Ambient lighting system',
        'Walk-in closet organization'
      ],
      dimensions: '18\' × 16\' × 9\'',
      keyPieces: [
        { name: 'Platform Bed Frame', price: '$2,800' },
        { name: 'Organic Cotton Bedding', price: '$650' },
        { name: 'Bedside Pendant Lights', price: '$480' },
        { name: 'Area Rug', price: '$1,200' }
      ],
      totalInvestment: '$16,200',
      featured: false
    },
    {
      id: 5,
      name: 'Creative Home Office',
      style: 'Industrial Chic',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      description: 'An inspiring workspace that combines industrial elements with warm touches, designed to boost productivity and creativity.',
      features: [
        'Standing desk with storage',
        'Ergonomic task seating',
        'Industrial shelving system',
        'Task and ambient lighting',
        'Acoustic panel treatments'
      ],
      dimensions: '14\' × 12\' × 9\'',
      keyPieces: [
        { name: 'Adjustable Standing Desk', price: '$1,400' },
        { name: 'Ergonomic Office Chair', price: '$850' },
        { name: 'Industrial Shelving', price: '$680' },
        { name: 'Task Lighting Set', price: '$320' }
      ],
      totalInvestment: '$9,800',
      featured: false
    },
    {
      id: 6,
      name: 'Spa-Inspired Bathroom',
      style: 'Wellness Luxury',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800&h=600&fit=crop',
      thumbnail: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=400&h=300&fit=crop',
      description: 'A luxurious bathroom retreat that transforms daily routines into spa-like experiences through premium materials and thoughtful design.',
      features: [
        'Freestanding soaking tub',
        'Walk-in rainfall shower',
        'Natural stone surfaces',
        'Heated flooring system',
        'Smart mirror technology'
      ],
      dimensions: '12\' × 10\' × 9\'',
      keyPieces: [
        { name: 'Freestanding Tub', price: '$3,200' },
        { name: 'Rainfall Shower System', price: '$1,800' },
        { name: 'Vanity with Storage', price: '$2,400' },
        { name: 'Smart Mirror', price: '$1,100' }
      ],
      totalInvestment: '$28,500',
      featured: true
    }
  ];

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (selectedRoom) {
    return (
      <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-white' : 'bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden'}`}>
        <div className="relative h-96 lg:h-[500px] overflow-hidden">
          <Image
            src={selectedRoom?.image}
            alt={selectedRoom?.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Controls */}
          <div className="absolute top-6 left-6 flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedRoom(null)}
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Back to Showroom
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              iconName={isFullscreen ? "Minimize2" : "Maximize2"}
            >
              {isFullscreen ? 'Exit' : 'Fullscreen'}
            </Button>
          </div>

          {/* Room Info */}
          <div className="absolute bottom-6 left-6 text-white">
            <div className="flex items-center space-x-3 mb-2">
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-inter font-medium">
                {selectedRoom?.style}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                {selectedRoom?.dimensions}
              </span>
            </div>
            <h2 className="text-3xl font-playfair font-semibold mb-2">
              {selectedRoom?.name}
            </h2>
            <p className="text-white/90 max-w-2xl">
              {selectedRoom?.description}
            </p>
          </div>
        </div>
        <div className="p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Features */}
            <div>
              <h3 className="font-playfair font-semibold text-xl mb-4 flex items-center">
                <Icon name="Star" size={20} className="mr-2 text-accent" />
                Design Features
              </h3>
              <ul className="space-y-3 mb-6">
                {selectedRoom?.features?.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-muted rounded-xl p-6">
                <h4 className="font-playfair font-semibold text-lg mb-4">
                  Total Investment
                </h4>
                <div className="text-3xl font-playfair font-bold text-accent mb-2">
                  {selectedRoom?.totalInvestment}
                </div>
                <p className="text-sm text-muted-foreground">
                  Including design services, furniture, and installation
                </p>
              </div>
            </div>

            {/* Key Pieces */}
            <div>
              <h3 className="font-playfair font-semibold text-xl mb-4 flex items-center">
                <Icon name="Package" size={20} className="mr-2 text-accent" />
                Key Furniture Pieces
              </h3>
              <div className="space-y-4 mb-6">
                {selectedRoom?.keyPieces?.map((piece, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <span className="font-inter font-medium text-foreground">
                      {piece?.name}
                    </span>
                    <span className="font-inter font-semibold text-accent">
                      {piece?.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Button
                  variant="default"
                  fullWidth
                  className="bg-forest-green hover:bg-forest-green/90 text-white"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Schedule Design Consultation
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  iconName="Download"
                  iconPosition="left"
                >
                  Download Room Details
                </Button>
              </div>
            </div>
          </div>

          {/* Virtual Tour CTA */}
          <div className="mt-8 p-6 bg-gradient-to-r from-forest-green/10 to-deep-sage/10 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-playfair font-semibold text-lg text-foreground mb-2">
                  Want a Virtual Tour?
                </h4>
                <p className="text-muted-foreground">
                  Experience this room in 360° with our virtual reality tour technology.
                </p>
              </div>
              <Button
                variant="default"
                className="bg-forest-green hover:bg-forest-green/90 text-white"
                iconName="Eye"
                iconPosition="left"
              >
                Start VR Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-playfair font-semibold text-foreground mb-4">
          Virtual Showroom
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our signature room designs in stunning detail. Each space showcases 
          our design philosophy and demonstrates how we create beautiful, functional environments.
        </p>
      </div>
      {/* Featured Rooms */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {showroomRooms?.filter(room => room?.featured)?.map((room) => (
          <div
            key={room?.id}
            className="bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden sanctuary-hover group cursor-pointer"
            onClick={() => handleRoomSelect(room)}
          >
            <div className="relative overflow-hidden">
              <Image
                src={room?.thumbnail}
                alt={room?.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-inter font-medium">
                  Featured
                </span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Icon name="Eye" size={32} className="text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-accent font-inter font-medium uppercase tracking-wide">
                  {room?.style}
                </span>
                <span className="text-xs text-muted-foreground">
                  {room?.dimensions}
                </span>
              </div>

              <h3 className="text-xl font-playfair font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {room?.name}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {room?.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="text-muted-foreground">Starting at </span>
                  <span className="font-playfair font-semibold text-accent">
                    {room?.totalInvestment}
                  </span>
                </div>
                <Icon name="ArrowRight" size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* All Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {showroomRooms?.filter(room => !room?.featured)?.map((room) => (
          <div
            key={room?.id}
            className="bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden sanctuary-hover group cursor-pointer"
            onClick={() => handleRoomSelect(room)}
          >
            <div className="relative overflow-hidden">
              <Image
                src={room?.thumbnail}
                alt={room?.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Icon name="Eye" size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-accent font-inter font-medium uppercase tracking-wide">
                  {room?.style}
                </span>
              </div>

              <h3 className="text-lg font-playfair font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {room?.name}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                {room?.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {room?.dimensions}
                </span>
                <Icon name="ArrowRight" size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-forest-green to-deep-sage rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-playfair font-semibold mb-4">
          Ready to Create Your Own Sanctuary?
        </h3>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          Let our expert designers help you transform your space into a personalized sanctuary 
          that reflects your style and enhances your daily life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            className="bg-white text-forest-green hover:bg-white/90"
            iconName="Calendar"
            iconPosition="left"
          >
            Schedule Consultation
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:bg-white/20 border border-white/30"
            iconName="Phone"
            iconPosition="left"
          >
            Call Us Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VirtualShowroom;