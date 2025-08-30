import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const NewsletterSignup = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    interests: {
      trends: false,
      tips: false,
      transformations: false,
      seasonal: false
    }
  });
  const [isSubscribed, setIsSubscribed] = useState(false);

  const previewContent = [
    {
      id: 1,
      title: 'Weekly Design Inspiration',
      description: 'Curated room reveals, trending styles, and seasonal decorating ideas delivered every Tuesday.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop',
      frequency: 'Weekly'
    },
    {
      id: 2,
      title: 'Expert Design Tips',
      description: 'Professional insights, DIY guides, and maintenance tips to keep your spaces looking their best.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=300&h=200&fit=crop',
      frequency: 'Bi-weekly'
    },
    {
      id: 3,
      title: 'Exclusive Project Access',
      description: 'Behind-the-scenes content, client transformations, and early access to new services.',
      image: 'https://images.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg?w=300&h=200&fit=crop',
      frequency: 'Monthly'
    }
  ];

  const benefits = [
    {
      icon: 'Sparkles',
      title: 'First Access',
      description: 'Be the first to see our latest projects and design reveals'
    },
    {
      icon: 'Gift',
      title: 'Exclusive Content',
      description: 'Subscriber-only design guides, templates, and resources'
    },
    {
      icon: 'Calendar',
      title: 'Event Invites',
      description: 'Priority access to design workshops and showroom events'
    },
    {
      icon: 'Percent',
      title: 'Special Offers',
      description: 'Exclusive discounts on consultations and design services'
    }
  ];

  const handleInputChange = (field, value) => {
    if (field?.includes('.')) {
      const [parent, child] = field?.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev?.[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Newsletter subscription:', formData);
    setIsSubscribed(true);
  };

  if (isSubscribed) {
    return (
      <div className="bg-white rounded-2xl shadow-sanctuary-lg overflow-hidden max-w-2xl mx-auto">
        <div className="relative h-48 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop"
            alt="Welcome to Noah's Ark Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="CheckCircle" size={24} className="text-accent" />
              <span className="text-lg font-playfair font-semibold">Welcome to Our Community!</span>
            </div>
          </div>
        </div>

        <div className="p-8 text-center">
          <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4">
            Thank You for Subscribing!
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            You've successfully joined our design community. Check your email for a welcome message 
            with your first dose of design inspiration and exclusive subscriber resources.
          </p>

          <div className="bg-muted rounded-xl p-6 mb-6">
            <h4 className="font-playfair font-semibold text-lg mb-4">What's Next?</h4>
            <div className="space-y-3 text-sm text-left">
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-accent" />
                <span>Welcome email with design resources (arriving within 5 minutes)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Calendar" size={16} className="text-accent" />
                <span>Weekly design inspiration every Tuesday</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Gift" size={16} className="text-accent" />
                <span>Exclusive subscriber-only content and offers</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
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
              iconName="ArrowLeft"
              iconPosition="left"
              onClick={() => setIsSubscribed(false)}
            >
              Back to Resources
            </Button>
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
          Join Our Design Community
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get exclusive access to design inspiration, expert tips, and behind-the-scenes content 
          delivered directly to your inbox.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Newsletter Preview */}
        <div className="space-y-6">
          <h3 className="text-xl font-playfair font-semibold text-foreground mb-4">
            What You'll Receive
          </h3>
          
          {previewContent?.map((content) => (
            <div key={content?.id} className="bg-white rounded-xl shadow-sanctuary-md overflow-hidden">
              <div className="flex">
                <div className="w-24 h-20 flex-shrink-0">
                  <Image
                    src={content?.image}
                    alt={content?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-inter font-semibold text-foreground text-sm">
                      {content?.title}
                    </h4>
                    <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                      {content?.frequency}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {content?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Benefits */}
          <div className="bg-muted rounded-xl p-6">
            <h4 className="font-playfair font-semibold text-lg mb-4">Subscriber Benefits</h4>
            <div className="grid grid-cols-2 gap-4">
              {benefits?.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon name={benefit?.icon} size={20} className="text-accent" />
                  </div>
                  <h5 className="font-inter font-semibold text-sm text-foreground mb-1">
                    {benefit?.title}
                  </h5>
                  <p className="text-xs text-muted-foreground">
                    {benefit?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Signup Form */}
        <div className="bg-white rounded-2xl shadow-sanctuary-lg p-8">
          <h3 className="text-xl font-playfair font-semibold text-foreground mb-6">
            Subscribe Now
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="First Name"
              type="text"
              placeholder="Enter your first name"
              value={formData?.firstName}
              onChange={(e) => handleInputChange('firstName', e?.target?.value)}
              required
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email address"
              description="We respect your privacy and will never share your email"
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              required
            />

            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                What interests you most? (Optional)
              </label>
              <div className="space-y-3">
                <Checkbox
                  label="Design trends and color forecasts"
                  checked={formData?.interests?.trends}
                  onChange={(e) => handleInputChange('interests.trends', e?.target?.checked)}
                />
                <Checkbox
                  label="Practical design tips and DIY guides"
                  checked={formData?.interests?.tips}
                  onChange={(e) => handleInputChange('interests.tips', e?.target?.checked)}
                />
                <Checkbox
                  label="Before & after transformations"
                  checked={formData?.interests?.transformations}
                  onChange={(e) => handleInputChange('interests.transformations', e?.target?.checked)}
                />
                <Checkbox
                  label="Seasonal decorating ideas"
                  checked={formData?.interests?.seasonal}
                  onChange={(e) => handleInputChange('interests.seasonal', e?.target?.checked)}
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="default"
              fullWidth
              className="bg-forest-green hover:bg-forest-green/90 text-white"
              iconName="Mail"
              iconPosition="left"
            >
              Subscribe to Newsletter
            </Button>
          </form>

          <div className="mt-6 p-4 bg-muted rounded-xl">
            <div className="flex items-start space-x-3">
              <Icon name="Shield" size={20} className="text-accent mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground mb-1">
                  Privacy Promise
                </p>
                <p className="text-xs text-muted-foreground">
                  No spam, ever. Unsubscribe with one click. We send 2-3 emails per month 
                  with valuable design content only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Social Proof */}
      <div className="bg-gradient-to-r from-forest-green/10 to-deep-sage/10 rounded-2xl p-8 text-center">
        <div className="flex items-center justify-center space-x-8 mb-6">
          <div className="text-center">
            <div className="text-2xl font-playfair font-bold text-foreground">2,400+</div>
            <div className="text-sm text-muted-foreground">Subscribers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-playfair font-bold text-foreground">4.9★</div>
            <div className="text-sm text-muted-foreground">Content Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-playfair font-bold text-foreground">98%</div>
            <div className="text-sm text-muted-foreground">Stay Subscribed</div>
          </div>
        </div>
        <p className="text-muted-foreground italic">
          "The best interior design newsletter I've ever subscribed to. Every email is packed 
          with actionable tips and beautiful inspiration." - Sarah M., Subscriber
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;