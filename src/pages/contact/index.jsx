import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import ShowroomLocation from './components/ShowroomLocation';
import ConsultationProcess from './components/ConsultationProcess';
import EmergencyContact from './components/EmergencyContact';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
  return (

    <>
      <Helmet>
        <title>Contact Us - Noah's Ark Interior Furnishing | Get in Touch</title>
        <meta
          name="description"
          content="Connect with Noah's Ark Interior Furnishing today. Reach out to our expert design team for consultations, project inquiries, or customer support. Let's create your dream sanctuary together."
        />
        <meta
          name="keywords"
          content="contact Noah's Ark Interior, interior design consultation, get in touch, design inquiries, customer support, interior furnishing contact"
        />
        <meta property="og:title" content="Contact Noah's Ark Interior - Start Your Design Journey" />
        <meta property="og:description" content="Reach out to Noah's Ark Interior's expert team for consultations, inquiries, or support. We're here to help you design your timeless sanctuary." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <ContactHero />

        {/* Main Content */}
        <div className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Contact Form and Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {/* Contact Form - Takes up 2 columns */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              {/* Contact Info - Takes up 1 column */}
              <div className="lg:col-span-1">
                <ContactInfo />
              </div>
            </div>

            {/* Consultation Process Section */}
            <div className="mb-16">
              <ConsultationProcess />
            </div>

            {/* Location and Emergency Contact Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Showroom Location - Takes up 2 columns */}
              <div className="lg:col-span-2">
                <ShowroomLocation />
              </div>

              {/* Emergency Contact - Takes up 1 column */}
              <div className="lg:col-span-1">
                <EmergencyContact />
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA Section */}
        <section className="bg-gradient-to-br from-primary to-secondary py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Don't wait to create the sanctuary you deserve. Our team is ready to bring your vision to life with expert guidance and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/95 sanctuary-transition">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary sanctuary-transition">
                Call (555) 123-4567
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;