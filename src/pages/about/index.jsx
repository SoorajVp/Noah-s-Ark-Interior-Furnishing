import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import TeamSection from './components/TeamSection';
import PhilosophySection from './components/PhilosophySection';
import SustainabilitySection from './components/SustainabilitySection';
import RecognitionSection from './components/RecognitionSection';
import CTASection from './components/CTASection';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Noah's Ark Interior Furnishing | Creating Personal Sanctuaries</title>
        <meta 
          name="description" 
          content="Discover Noah's Ark Interior's story, design philosophy, and expert team. Learn about our commitment to sustainable luxury and creating timeless sanctuaries that nurture and inspire." 
        />
        <meta name="keywords" content="interior design team, sustainable luxury design, design philosophy, Noah's Ark Interior, expert designers, eco-friendly interiors" />
        <meta property="og:title" content="About Noah's Ark Interior - Expert Design Team & Philosophy" />
        <meta property="og:description" content="Meet our award-winning team and discover the philosophy behind creating personal sanctuaries through sustainable luxury design." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section - Opening with sanctuary creation narrative */}
          <HeroSection />
          
          {/* Our Story Section - Heritage story and founder background */}
          <StorySection />
          
          {/* Team Sanctuary - Designer profiles with expertise and personalities */}
          <TeamSection />
          
          {/* Design Philosophy - Interactive approach to curated excellence */}
          <PhilosophySection />
          
          {/* Sustainability Commitment - Eco-conscious practices with examples */}
          <SustainabilitySection />
          
          {/* Industry Recognition - Awards, certifications, and media features */}
          <RecognitionSection />
          
          {/* CTA Section - Consultation encouragement after trust-building */}
          <CTASection />
        </main>
      </div>
    </>
  );
};

export default About;