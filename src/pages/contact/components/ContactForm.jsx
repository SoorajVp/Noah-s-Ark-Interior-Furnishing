import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: '',
    newsletter: false,
    consultation: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const projectTypeOptions = [
    { value: 'residential-full', label: 'Full Home Design' },
    { value: 'residential-room', label: 'Single Room Design' },
    { value: 'commercial-office', label: 'Office Space' },
    { value: 'commercial-retail', label: 'Retail Space' },
    { value: 'consultation', label: 'Design Consultation' },
    { value: 'furniture', label: 'Furniture Selection' },
    { value: 'other', label: 'Other' }
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'ASAP (Within 2 weeks)' },
    { value: '1-month', label: '1 Month' },
    { value: '2-3-months', label: '2-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: '6-months-plus', label: '6+ Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const budgetOptions = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-plus', label: '$100,000+' },
    { value: 'discuss', label: 'Prefer to Discuss' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        projectType: '',
        timeline: '',
        budget: '',
        message: '',
        newsletter: false,
        consultation: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-sanctuary-lg p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
          Thank You for Reaching Out!
        </h3>
        <p className="text-muted-foreground mb-6">
          We've received your message and will respond within 24 hours. Our team is excited to help create your perfect sanctuary.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setSubmitStatus(null)}
          iconName="RotateCcw"
          iconPosition="left"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sanctuary-lg p-8">
      <div className="mb-8">
        <h2 className="font-playfair text-3xl font-semibold text-primary mb-4">
          Tell Us About Your Project
        </h2>
        <p className="text-muted-foreground">
          Share your vision with us and we'll create a personalized design proposal just for you.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="First Name"
            type="text"
            name="firstName"
            value={formData?.firstName}
            onChange={handleInputChange}
            placeholder="Enter your first name"
            required
          />
          <Input
            label="Last Name"
            type="text"
            name="lastName"
            value={formData?.lastName}
            onChange={handleInputChange}
            placeholder="Enter your last name"
            required
          />
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Email Address"
            type="email"
            name="email"
            value={formData?.email}
            onChange={handleInputChange}
            placeholder="your@email.com"
            required
          />
          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData?.phone}
            onChange={handleInputChange}
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Project Details */}
        <Select
          label="Project Type"
          options={projectTypeOptions}
          value={formData?.projectType}
          onChange={(value) => handleSelectChange('projectType', value)}
          placeholder="Select your project type"
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Timeline"
            options={timelineOptions}
            value={formData?.timeline}
            onChange={(value) => handleSelectChange('timeline', value)}
            placeholder="When do you want to start?"
          />
          <Select
            label="Budget Range"
            options={budgetOptions}
            value={formData?.budget}
            onChange={(value) => handleSelectChange('budget', value)}
            placeholder="Select your budget range"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Project Details
          </label>
          <textarea
            name="message"
            value={formData?.message}
            onChange={handleInputChange}
            rows={5}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
            placeholder="Tell us about your space, style preferences, specific needs, or any questions you have..."
          />
        </div>

        {/* Checkboxes */}
        <div className="space-y-4">
          <Checkbox
            label="Schedule a free consultation call"
            description="We'll contact you to schedule a 30-minute consultation"
            checked={formData?.consultation}
            onChange={(e) => handleInputChange(e)}
            name="consultation"
          />
          <Checkbox
            label="Subscribe to design insights newsletter"
            description="Get monthly tips, trends, and inspiration delivered to your inbox"
            checked={formData?.newsletter}
            onChange={(e) => handleInputChange(e)}
            name="newsletter"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isSubmitting}
          className="bg-forest-green hover:bg-forest-green/90"
          iconName="Send"
          iconPosition="right"
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>

        {submitStatus === 'error' && (
          <div className="flex items-center space-x-2 text-error text-sm">
            <Icon name="AlertCircle" size={16} />
            <span>There was an error sending your message. Please try again.</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;