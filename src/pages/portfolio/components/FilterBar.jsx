import React from 'react';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';


const FilterBar = ({ 
  activeView, 
  setActiveView, 
  filters, 
  setFilters, 
  onClearFilters 
}) => {
  const viewOptions = [
    { id: 'all', label: 'All Projects', icon: 'Grid3X3' },
    { id: 'residential', label: 'Residential', icon: 'Home' },
    { id: 'commercial', label: 'Commercial', icon: 'Building' },
    { id: 'styles', label: 'Style Collections', icon: 'Palette' },
    { id: 'rooms', label: 'Room Types', icon: 'Layout' }
  ];

  const styleOptions = [
    { value: 'all', label: 'All Styles' },
    { value: 'modern', label: 'Modern Contemporary' },
    { value: 'traditional', label: 'Traditional Classic' },
    { value: 'transitional', label: 'Transitional' },
    { value: 'industrial', label: 'Industrial Chic' },
    { value: 'scandinavian', label: 'Scandinavian' },
    { value: 'bohemian', label: 'Bohemian Eclectic' },
    { value: 'minimalist', label: 'Minimalist' },
    { value: 'luxury', label: 'Luxury Contemporary' }
  ];

  const roomOptions = [
    { value: 'all', label: 'All Rooms' },
    { value: 'living', label: 'Living Room' },
    { value: 'bedroom', label: 'Bedroom' },
    { value: 'kitchen', label: 'Kitchen' },
    { value: 'bathroom', label: 'Bathroom' },
    { value: 'dining', label: 'Dining Room' },
    { value: 'office', label: 'Home Office' },
    { value: 'outdoor', label: 'Outdoor Space' }
  ];

  const budgetOptions = [
    { value: 'all', label: 'All Budgets' },
    { value: 'under-50k', label: 'Under $50K' },
    { value: '50k-100k', label: '$50K - $100K' },
    { value: '100k-250k', label: '$100K - $250K' },
    { value: '250k-plus', label: '$250K+' }
  ];

  const hasActiveFilters = filters?.style !== 'all' || filters?.room !== 'all' || filters?.budget !== 'all';

  return (
    <div className="bg-background border-b border-border sticky top-16 z-40 backdrop-sanctuary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        {/* View Toggle Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {viewOptions?.map((view) => (
            <Button
              key={view?.id}
              variant={activeView === view?.id ? "default" : "outline"}
              size="sm"
              iconName={view?.icon}
              iconPosition="left"
              iconSize={16}
              onClick={() => setActiveView(view?.id)}
              className="sanctuary-transition"
            >
              {view?.label}
            </Button>
          ))}
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <Select
            label="Style"
            options={styleOptions}
            value={filters?.style}
            onChange={(value) => setFilters(prev => ({ ...prev, style: value }))}
            className="w-full"
          />

          <Select
            label="Room Type"
            options={roomOptions}
            value={filters?.room}
            onChange={(value) => setFilters(prev => ({ ...prev, room: value }))}
            className="w-full"
          />

          <Select
            label="Budget Range"
            options={budgetOptions}
            value={filters?.budget}
            onChange={(value) => setFilters(prev => ({ ...prev, budget: value }))}
            className="w-full"
          />

          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                iconName="X"
                iconPosition="left"
                iconSize={16}
                onClick={onClearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                Clear Filters
              </Button>
            )}
            
            <Button
              variant="outline"
              size="sm"
              iconName="Search"
              iconPosition="left"
              iconSize={16}
              className="whitespace-nowrap"
            >
              Advanced Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;