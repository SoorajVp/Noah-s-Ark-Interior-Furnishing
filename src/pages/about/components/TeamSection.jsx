import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Founder & Lead Designer",
      specialty: "Luxury Residential Design",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      philosophy: "Every space should tell a story that resonates with the soul of its inhabitants.",
      signature: "Sustainable luxury with timeless elegance",
      certifications: ["NCIDQ Certified", "LEED AP", "Sustainable Design Specialist"],
      projects: "200+ completed projects",
      bio: `Sarah founded Noah's Ark Interior with a vision to create spaces that nurture both people and planet. Her approach combines luxury aesthetics with sustainable practices, creating timeless designs that grow more beautiful with age. She believes that true luxury lies in the harmony between beauty, functionality, and environmental responsibility.`
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Senior Interior Designer",
      specialty: "Commercial & Office Design",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      philosophy: "Great design should enhance productivity while inspiring creativity.",
      signature: "Modern minimalism with functional innovation",
      certifications: ["NCIDQ Certified", "WELL AP", "Commercial Design Expert"],
      projects: "150+ commercial spaces",
      bio: `Michael specializes in creating productive work environments that inspire teams to do their best work. His designs seamlessly blend functionality with aesthetic appeal, incorporating biophilic elements and wellness principles to create spaces that support both business success and employee wellbeing.`
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Color & Materials Specialist",
      specialty: "Color Psychology & Textile Design",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      philosophy: "Color has the power to transform not just spaces, but emotions and experiences.",
      signature: "Emotional color palettes with tactile richness",
      certifications: ["Color Marketing Group", "Textile Design Certificate", "Psychology of Color"],
      projects: "300+ color consultations",
      bio: `Elena brings a deep understanding of color psychology and material science to every project. Her expertise in how colors and textures affect mood and behavior helps create environments that not only look beautiful but feel emotionally supportive and energizing.`
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Sustainable Design Director",
      specialty: "Eco-Friendly & Green Design",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      philosophy: "Beautiful design should never come at the expense of our planet's future.",signature: "Zero-waste luxury with renewable materials",
      certifications: ["LEED AP BD+C", "Living Building Challenge", "Cradle to Cradle"],
      projects: "100+ sustainable projects",
      bio: `David leads our sustainability initiatives, ensuring every project meets the highest environmental standards without compromising on beauty or functionality. His innovative approach to eco-friendly design has helped Noah's Ark become a leader in sustainable luxury interiors.`
    },
    {
      id: 5,
      name: "Amanda Foster",role: "Project Manager & Client Relations",specialty: "Project Coordination & Client Experience",experience: "7+ years",image: "https://images.unsplash.com/photo-1494790108755-2616c6d4c2d0?w=400&h=400&fit=crop",philosophy: "Exceptional design deserves exceptional service and seamless execution.",signature: "White-glove project management with personal touch",
      certifications: ["PMP Certified", "Client Relations Expert", "Interior Design Coordination"],
      projects: "250+ managed projects",
      bio: `Amanda ensures every project runs smoothly from concept to completion. Her attention to detail and commitment to client satisfaction has earned her recognition as one of the industry's top project managers, making the design process enjoyable and stress-free for our clients.`
    },
    {
      id: 6,
      name: "James Wilson",role: "3D Visualization Specialist",specialty: "Virtual Reality & 3D Rendering",experience: "6+ years",image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",philosophy: "Visualization bridges the gap between imagination and reality.",signature: "Photorealistic renderings with immersive VR experiences",
      certifications: ["3D Studio Max Expert", "VR Design Specialist", "Architectural Visualization"],
      projects: "400+ visualizations created",
      bio: `James brings designs to life through cutting-edge 3D visualization and virtual reality technology. His photorealistic renderings help clients fully understand and experience their future spaces before construction begins, ensuring complete satisfaction with the final result.`
    }
  ];

  return (
    <section className="py-20 bg-sanctuary-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-forest-green rounded-lg flex items-center justify-center">
              <Icon name="Users" size={16} className="text-white" />
            </div>
            <span className="text-forest-green font-inter font-medium tracking-wide">Team Sanctuary</span>
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-6">
            Meet Our Expert
            <span className="text-accent block">Design Team</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-3xl mx-auto">
            Our diverse team of certified designers brings together decades of experience, unique specialties, and a shared passion for creating extraordinary spaces that nurture and inspire.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers?.map((member) => (
            <div
              key={member?.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg sanctuary-hover cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative">
                <Image
                  src={member?.image}
                  alt={member?.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair text-xl font-semibold text-white mb-1">{member?.name}</h3>
                  <p className="text-white/90 text-sm mb-2">{member?.role}</p>
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={14} className="text-accent" />
                    <span className="text-white/80 text-xs">{member?.experience}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-inter font-semibold text-primary mb-2">Specialty</h4>
                  <p className="text-sm text-muted-foreground">{member?.specialty}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-inter font-semibold text-primary mb-2">Design Philosophy</h4>
                  <p className="text-sm text-muted-foreground italic">"{member?.philosophy}"</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-accent font-medium">{member?.projects}</span>
                  <Icon name="ArrowRight" size={16} className="text-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-md sanctuary-hover">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-white" />
            </div>
            <div className="text-3xl font-playfair font-bold text-primary mb-2">12</div>
            <div className="text-muted-foreground font-inter">Team Members</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md sanctuary-hover">
            <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={24} className="text-white" />
            </div>
            <div className="text-3xl font-playfair font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground font-inter">Certifications</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md sanctuary-hover">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={24} className="text-white" />
            </div>
            <div className="text-3xl font-playfair font-bold text-primary mb-2">80+</div>
            <div className="text-muted-foreground font-inter">Years Combined Experience</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md sanctuary-hover">
            <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Star" size={24} className="text-white" />
            </div>
            <div className="text-3xl font-playfair font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground font-inter">Client Satisfaction</div>
          </div>
        </div>
      </div>
      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center sanctuary-hover"
              >
                <Icon name="X" size={20} className="text-primary" />
              </button>
              
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Image Side */}
                <div className="space-y-6">
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src={selectedMember?.image}
                      alt={selectedMember?.name}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-playfair text-lg font-semibold text-primary">Certifications</h4>
                    <div className="space-y-2">
                      {selectedMember?.certifications?.map((cert, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-forest-green" />
                          <span className="text-sm text-muted-foreground">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-playfair text-3xl font-bold text-primary mb-2">{selectedMember?.name}</h3>
                    <p className="text-accent font-inter font-medium mb-1">{selectedMember?.role}</p>
                    <p className="text-muted-foreground text-sm">{selectedMember?.specialty}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-sanctuary-gray p-4 rounded-lg">
                      <div className="text-2xl font-playfair font-bold text-primary">{selectedMember?.experience}</div>
                      <div className="text-sm text-muted-foreground">Experience</div>
                    </div>
                    <div className="bg-sanctuary-gray p-4 rounded-lg">
                      <div className="text-lg font-playfair font-bold text-primary">{selectedMember?.projects}</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-playfair text-lg font-semibold text-primary mb-3">Design Philosophy</h4>
                    <p className="text-muted-foreground italic mb-4">"{selectedMember?.philosophy}"</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{selectedMember?.bio}</p>
                  </div>
                  
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <h4 className="font-inter font-semibold text-primary mb-2">Signature Style</h4>
                    <p className="text-sm text-muted-foreground">{selectedMember?.signature}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;