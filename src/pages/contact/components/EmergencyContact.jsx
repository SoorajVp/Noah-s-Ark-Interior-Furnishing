import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const EmergencyContact = () => {
  const emergencyScenarios = [
    {
      icon: 'Zap',
      title: 'Project Delays',
      description: 'Construction delays affecting your move-in date',
      response: 'Same-day consultation available'
    },
    {
      icon: 'Home',
      title: 'Last-Minute Events',
      description: 'Unexpected guests or important meetings at your space',
      response: '48-hour rapid styling service'
    },
    {
      icon: 'AlertTriangle',
      title: 'Design Disasters',
      description: 'Furniture delivery issues or color mismatches',
      response: 'Emergency design intervention'
    },
    {
      icon: 'Calendar',
      title: 'Tight Deadlines',
      description: 'Need space ready for specific date or event',
      response: 'Expedited project timeline'
    }
  ];

  const emergencyServices = [
    'Express consultation within 24 hours',
    'Weekend and evening appointments',
    'Rush delivery coordination',
    'Emergency styling and staging',
    'Quick-fix design solutions',
    'Vendor relationship leverage for priority service'
  ];

  return (
    <div className="bg-gradient-to-br from-error/5 to-warning/5 rounded-2xl border border-error/20 p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="AlertCircle" size={32} className="text-error" />
        </div>
        <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">
          Urgent Project Needs?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We understand that sometimes design needs can't wait. Our emergency consultation service is here for time-sensitive situations and urgent project requirements.
        </p>
      </div>
      {/* Emergency Scenarios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {emergencyScenarios?.map((scenario, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-border">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name={scenario?.icon} size={20} className="text-warning" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-primary mb-2">{scenario?.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{scenario?.description}</p>
                <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium">
                  <Icon name="Clock" size={12} />
                  <span>{scenario?.response}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Emergency Services */}
      <div className="bg-white rounded-lg p-6 mb-8">
        <h3 className="font-playfair text-xl font-semibold text-primary mb-6">
          Emergency Services Available
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyServices?.map((service, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
              <span className="text-foreground text-sm">{service}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Emergency Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Icon name="Phone" size={20} className="text-error" />
            <h3 className="font-semibold text-primary">Emergency Hotline</h3>
          </div>
          <p className="text-2xl font-bold text-error mb-2">(555) 911-DESIGN</p>
          <p className="text-muted-foreground text-sm mb-4">Available 24/7 for urgent situations</p>
          <Button
            variant="destructive"
            size="sm"
            fullWidth
            iconName="Phone"
            iconPosition="left"
            onClick={() => window.open('tel:+15559113374', '_self')}
          >
            Call Emergency Line
          </Button>
        </div>

        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Icon name="MessageSquare" size={20} className="text-warning" />
            <h3 className="font-semibold text-primary">Priority Text</h3>
          </div>
          <p className="text-2xl font-bold text-warning mb-2">(555) 123-RUSH</p>
          <p className="text-muted-foreground text-sm mb-4">Text for immediate response</p>
          <Button
            variant="warning"
            size="sm"
            fullWidth
            iconName="MessageSquare"
            iconPosition="left"
            onClick={() => window.open('sms:+15551237874', '_self')}
          >
            Send Priority Text
          </Button>
        </div>
      </div>
      {/* Additional Information */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-start space-x-4">
          <Icon name="Info" size={20} className="text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-primary mb-2">Important Notes</h3>
            <ul className="text-muted-foreground text-sm space-y-1">
              <li>• Emergency services may include additional fees for expedited timelines</li>
              <li>• Weekend and after-hours consultations available by appointment</li>
              <li>• We'll work with your existing contractors and vendors when possible</li>
              <li>• Rush orders may have limited material and furniture options</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContact;