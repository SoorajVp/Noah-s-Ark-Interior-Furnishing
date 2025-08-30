import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Call Us',
      primary: '(555) 123-4567',
      secondary: 'Mon-Fri 9AM-6PM EST',
      action: 'tel:+15551234567',
      actionText: 'Call Now'
    },
    {
      icon: 'Mail',
      title: 'Email Us',
      primary: 'hello@noahsarkinterior.com',
      secondary: 'We respond within 24 hours',
      action: 'mailto:hello@noahsarkinterior.com',
      actionText: 'Send Email'
    },
    {
      icon: 'MessageSquare',
      title: 'Live Chat',
      primary: 'Available Now',
      secondary: 'Instant responses during business hours',
      action: '#',
      actionText: 'Start Chat'
    }
  ];

  const socialLinks = [
    { icon: 'Instagram', url: 'https://instagram.com/noahsarkinterior', label: 'Instagram' },
    { icon: 'Facebook', url: 'https://facebook.com/noahsarkinterior', label: 'Facebook' },
    { icon: 'Linkedin', url: 'https://linkedin.com/company/noahsarkinterior', label: 'LinkedIn' },
    { icon: 'Youtube', url: 'https://youtube.com/noahsarkinterior', label: 'YouTube' }
  ];

  const quickAnswers = [
    {
      question: "How much does a consultation cost?",
      answer: "Initial consultations are complimentary for projects over $10,000. For smaller projects, we charge $150 which is credited toward your final invoice."
    },
    {
      question: "What\'s your typical project timeline?",
      answer: "Most residential projects take 8-16 weeks from concept to completion, depending on scope and custom elements. We'll provide a detailed timeline during consultation."
    },
    {
      question: "Do you work with existing furniture?",
      answer: "Absolutely! We love incorporating meaningful pieces into new designs. We\'ll assess what works and suggest updates or additions as needed."
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily serve the greater metropolitan area within 50 miles of our showroom, with virtual consultations available nationwide."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="bg-white rounded-2xl shadow-sanctuary-lg p-8">
        <h2 className="font-playfair text-2xl font-semibold text-primary mb-6">
          Get In Touch
        </h2>
        
        <div className="space-y-6">
          {contactMethods?.map((method, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 sanctuary-transition">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name={method?.icon} size={20} className="text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-primary mb-1">{method?.title}</h3>
                <p className="text-foreground font-medium mb-1">{method?.primary}</p>
                <p className="text-muted-foreground text-sm mb-3">{method?.secondary}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(method?.action, '_self')}
                >
                  {method?.actionText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Social Media */}
      <div className="bg-white rounded-2xl shadow-sanctuary-lg p-8">
        <h2 className="font-playfair text-2xl font-semibold text-primary mb-6">
          Follow Our Journey
        </h2>
        <p className="text-muted-foreground mb-6">
          Get daily inspiration and behind-the-scenes looks at our latest projects.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialLinks?.map((social, index) => (
            <a
              key={index}
              href={social?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 sanctuary-transition"
            >
              <Icon name={social?.icon} size={24} className="text-muted-foreground mb-2" />
              <span className="text-sm font-medium text-foreground">{social?.label}</span>
            </a>
          ))}
        </div>
      </div>
      {/* Quick Answers */}
      <div className="bg-white rounded-2xl shadow-sanctuary-lg p-8">
        <h2 className="font-playfair text-2xl font-semibold text-primary mb-6">
          Quick Answers
        </h2>
        
        <div className="space-y-6">
          {quickAnswers?.map((qa, index) => (
            <div key={index} className="border-b border-border last:border-b-0 pb-6 last:pb-0">
              <h3 className="font-semibold text-primary mb-2 flex items-start">
                <Icon name="HelpCircle" size={18} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                {qa?.question}
              </h3>
              <p className="text-muted-foreground ml-6">{qa?.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-muted-foreground text-center mb-4">
            Have a different question?
          </p>
          <Button
            variant="outline"
            fullWidth
            iconName="MessageCircle"
            iconPosition="left"
          >
            Ask Us Anything
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;