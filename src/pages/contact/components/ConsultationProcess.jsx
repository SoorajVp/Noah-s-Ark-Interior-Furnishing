import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConsultationProcess = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Initial Contact',
      description: 'Reach out through our contact form, phone, or schedule online. We\'ll respond within 24 hours to confirm your consultation.',
      icon: 'MessageSquare',
      duration: '5 minutes'
    },
    {
      step: '02',
      title: 'Consultation Call',
      description: 'We\'ll discuss your vision, needs, timeline, and budget. This helps us understand your project and determine the best approach.',
      icon: 'Phone',
      duration: '30-45 minutes'
    },
    {
      step: '03',
      title: 'Space Assessment',
      description: 'For local clients, we\'ll visit your space to take measurements and photos. Remote clients can provide virtual tours.',
      icon: 'Home',
      duration: '1-2 hours'
    },
    {
      step: '04',
      title: 'Proposal & Agreement',
      description: 'We\'ll create a detailed proposal outlining scope, timeline, and investment. Once approved, we\'ll begin your design journey.',
      icon: 'FileText',
      duration: '3-5 days'
    }
  ];

  const consultationTypes = [
    {
      type: 'In-Person',
      icon: 'Users',
      description: 'Visit our showroom or we come to you',
      benefits: ['See materials firsthand', 'Immediate feedback', 'Personal connection'],
      availability: 'Mon-Sat, 9AM-6PM'
    },
    {
      type: 'Virtual',
      icon: 'Video',
      description: 'Video call consultation from anywhere',
      benefits: ['Convenient scheduling', 'Screen sharing', 'Recorded session'],
      availability: '7 days a week, 8AM-8PM'
    },
    {
      type: 'Phone',
      icon: 'Phone',
      description: 'Traditional phone consultation',
      benefits: ['Quick and easy', 'No tech required', 'Flexible timing'],
      availability: 'Mon-Fri, 9AM-7PM'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Homeowner',
      content: `The consultation process was so smooth and professional. They listened to every detail and made me feel confident about the entire project from day one.`,
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'David Chen',
      role: 'Business Owner',
      content: `Their virtual consultation was incredibly thorough. Even though we couldn't meet in person, they captured exactly what we needed for our office redesign.`,
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const preparationTips = [
    'Gather inspiration photos or Pinterest boards',
    'List your must-haves and deal-breakers',
    'Measure your space dimensions',
    'Note any existing furniture you want to keep',
    'Consider your lifestyle and daily routines',
    'Set a realistic budget range'
  ];

  return (
    <div className="space-y-12">
      {/* Process Overview */}
      <div className="bg-white rounded-2xl shadow-sanctuary-lg p-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-semibold text-primary mb-4">
            What to Expect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our consultation process is designed to be thorough yet comfortable, ensuring we understand your vision completely before we begin designing your sanctuary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps?.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={step?.icon} size={24} className="text-accent" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step?.step}
                </div>
              </div>
              <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                {step?.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                {step?.description}
              </p>
              <div className="inline-flex items-center space-x-1 text-accent text-xs font-medium">
                <Icon name="Clock" size={12} />
                <span>{step?.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Consultation Types */}
      <div className="bg-white rounded-2xl shadow-sanctuary-lg p-8">
        <h2 className="font-playfair text-2xl font-semibold text-primary mb-8 text-center">
          Choose Your Consultation Style
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {consultationTypes?.map((consultation, index) => (
            <div key={index} className="border border-border rounded-xl p-6 hover:border-accent sanctuary-transition">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={consultation?.icon} size={24} className="text-accent" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                  {consultation?.type}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {consultation?.description}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {consultation?.benefits?.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={14} className="text-success" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                    <Icon name="Calendar" size={14} />
                    <span>{consultation?.availability}</span>
                  </div>
                  <Button variant="outline" size="sm" fullWidth>
                    Schedule {consultation?.type}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Preparation Tips */}
      <div className="bg-gradient-to-br from-sanctuary-white to-sanctuary-gray rounded-2xl p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">
              How to Prepare for Your Consultation
            </h2>
            <p className="text-muted-foreground">
              A little preparation goes a long way in making your consultation more productive and insightful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {preparationTips?.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="CheckCircle" size={14} className="text-accent" />
                </div>
                <span className="text-foreground">{tip}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="default"
              className="bg-forest-green hover:bg-forest-green/90"
              iconName="Download"
              iconPosition="left"
            >
              Download Preparation Checklist
            </Button>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="bg-white rounded-2xl shadow-sanctuary-lg p-8">
        <h2 className="font-playfair text-2xl font-semibold text-primary mb-8 text-center">
          What Our Clients Say About the Experience
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials?.map((testimonial, index) => (
            <div key={index} className="bg-muted/30 rounded-xl p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                ))}
              </div>
              
              <blockquote className="text-foreground mb-6 italic">
                "{testimonial?.content}"
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial?.avatar}
                  alt={testimonial?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-primary">{testimonial?.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial?.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultationProcess;