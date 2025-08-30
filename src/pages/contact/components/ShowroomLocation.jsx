import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ShowroomLocation = () => {
  const [selectedDay, setSelectedDay] = useState('today');

  const showroomHours = [
    { day: 'Monday', hours: '9:00 AM - 6:00 PM', isToday: false },
    { day: 'Tuesday', hours: '9:00 AM - 6:00 PM', isToday: true },
    { day: 'Wednesday', hours: '9:00 AM - 6:00 PM', isToday: false },
    { day: 'Thursday', hours: '9:00 AM - 7:00 PM', isToday: false },
    { day: 'Friday', hours: '9:00 AM - 6:00 PM', isToday: false },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM', isToday: false },
    { day: 'Sunday', hours: 'Closed', isToday: false }
  ];

  const amenities = [
    { icon: 'Car', text: 'Free Parking Available' },
    { icon: 'Coffee', text: 'Complimentary Refreshments' },
    { icon: 'Wifi', text: 'High-Speed WiFi' },
    { icon: 'Users', text: 'Private Consultation Rooms' },
    { icon: 'Package', text: 'Material Sample Library' },
    { icon: 'Palette', text: 'Color Matching Station' }
  ];

  const upcomingEvents = [
    {
      date: 'Dec 15',
      title: 'Holiday Design Workshop',
      time: '2:00 PM - 4:00 PM',
      type: 'Workshop'
    },
    {
      date: 'Dec 22',
      title: 'New Year, New Space Seminar',
      time: '6:00 PM - 8:00 PM',
      type: 'Seminar'
    },
    {
      date: 'Jan 5',
      title: 'Sustainable Design Trends',
      time: '1:00 PM - 3:00 PM',
      type: 'Presentation'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Showroom Info */}
      <div className="bg-white rounded-2xl shadow-sanctuary-lg p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="font-playfair text-2xl font-semibold text-primary mb-2">
              Visit Our Showroom
            </h2>
            <p className="text-muted-foreground">
              Experience our designs in person and meet with our expert team.
            </p>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Open Now</span>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Icon name="MapPin" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-1">Address</h3>
            <p className="text-foreground">123 Design District Avenue</p>
            <p className="text-foreground">Suite 200, Creative Quarter</p>
            <p className="text-foreground">New York, NY 10001</p>
          </div>
        </div>

        {/* Hours */}
        <div className="mb-8">
          <h3 className="font-semibold text-primary mb-4 flex items-center">
            <Icon name="Clock" size={18} className="mr-2" />
            Showroom Hours
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {showroomHours?.map((schedule, index) => (
              <div 
                key={index}
                className={`flex justify-between items-center py-2 px-3 rounded-lg ${
                  schedule?.isToday ? 'bg-accent/10 text-accent font-medium' : 'text-foreground'
                }`}
              >
                <span>{schedule?.day}</span>
                <span className={schedule?.hours === 'Closed' ? 'text-muted-foreground' : ''}>{schedule?.hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            variant="default"
            className="bg-forest-green hover:bg-forest-green/90"
            iconName="Calendar"
            iconPosition="left"
          >
            Schedule Visit
          </Button>
          <Button
            variant="outline"
            iconName="Navigation"
            iconPosition="left"
            onClick={() => window.open('https://maps.google.com/?q=40.7589,-73.9851', '_blank')}
          >
            Get Directions
          </Button>
        </div>
      </div>
      {/* Map */}
      <div className="bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden">
        <div className="h-80 relative">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="Noah's Ark Interior Showroom"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=40.7589,-73.9851&z=15&output=embed"
            className="border-0"
          />
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-sm font-medium text-primary">Noah's Ark Interior</span>
            </div>
          </div>
        </div>
      </div>
      {/* Amenities */}
      <div className="bg-white rounded-2xl shadow-sanctuary-lg p-8">
        <h3 className="font-playfair text-xl font-semibold text-primary mb-6">
          Showroom Amenities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {amenities?.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Icon name={amenity?.icon} size={18} className="text-accent" />
              <span className="text-foreground">{amenity?.text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Upcoming Events */}
      <div className="bg-white rounded-2xl shadow-sanctuary-lg p-8">
        <h3 className="font-playfair text-xl font-semibold text-primary mb-6">
          Upcoming Events
        </h3>
        <div className="space-y-4">
          {upcomingEvents?.map((event, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:border-accent sanctuary-transition">
              <div className="text-center flex-shrink-0">
                <div className="bg-accent/10 text-accent px-3 py-2 rounded-lg">
                  <div className="text-sm font-medium">{event?.date}</div>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-primary mb-1">{event?.title}</h4>
                <p className="text-muted-foreground text-sm mb-2">{event?.time}</p>
                <span className="inline-block bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-medium">
                  {event?.type}
                </span>
              </div>
              <Button variant="ghost" size="sm" iconName="ArrowRight">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowroomLocation;