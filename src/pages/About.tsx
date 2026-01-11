import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Calendar, MapPin, Users, GraduationCap, Building, ChevronLeft, ChevronRight, Coffee, Lightbulb, Palette, Phone, Clock } from "lucide-react";

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const timeline = [
    {
      year: "2005",
      title: "Brian Church Architecture Founded",
      description: "Established boutique firm focusing on coastal residential and mixed-use projects"
    },
    {
      year: "2001",
      title: "Co-founded Urban Labs",
      description: "Partnership with Jack Illes specializing in urban infill and hospitality projects"
    },
    {
      year: "1990",
      title: "Licensed Architect",
      description: "Received California Architecture License (C22251)"
    },
    {
      year: "1988",
      title: "Cal Poly Graduate",
      description: "Bachelor's in Architecture from California Polytechnic State University, San Luis Obispo"
    }
  ];

  const awards = [
    {
      year: "2023",
      title: "AIA Award",
      project: "Del Mar Cliff House",
      description: "Recognition for innovative coastal design"
    },
    {
      year: "2015",
      title: "Concrete Masonry Design Award",
      project: "Solterra Winery",
      description: "Honor Award from Concrete Masonry Association of CA/NV"
    },
    {
      year: "2013",
      title: "AIA San Diego Honor Award",
      project: "Sema 4 Live-Work",
      description: "Best Mixed-Use Project recognition"
    },
    {
      year: "2012",
      title: "Western Red Cedar Merit Award",
      project: "Sema 4 Live-Work",
      description: "Innovative use of cedar in non-residential application"
    }
  ];

  const team = [
    {
      name: "Brian Lee Church, AIA",
      title: "Principal Architect",
      image: "/images/brian.jpg",
      description: "Over 35 years of experience in architecture and development. AIA Certified Development Strategist with a passion for coastal design excellence."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">About Our Firm</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Two decades of award-winning coastal architecture, blending modern design 
              with Southern California's unique lifestyle and environment.
            </p>
          </div>
        </div>
      </section>

      {/* Brian Church Profile */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/brian.jpg"
                alt="Brian Lee Church, AIA"
                className="rounded-lg shadow-lg w-48 h-48 object-cover mx-auto"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-primary/10 text-primary">Principal Architect</Badge>
                <Badge variant="outline">AIA Member</Badge>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Brian Lee Church, AIA</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Brian Church is a San Diego native architect with over 35 years in the field. 
                He earned his Bachelor's in Architecture from California Polytechnic State University, 
                San Luis Obispo in 1988, a program known for producing practical, well-rounded architects.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Early in his career, Church worked at several San Diego architecture firms and 
                also on the client side for TrizecHahn Development, a major commercial developer. 
                This dual experience gave him insight into both design and real estate development.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Beyond licensure, Church achieved certification as a "California Council AIA 
                Certified Development Strategist", indicating specialized training to guide 
                development projects from concept to completion.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Cal Poly SLO</div>
                    <div className="text-sm text-muted-foreground">B.Arch 1988</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Licensed 1990</div>
                    <div className="text-sm text-muted-foreground">CA License C22251</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Design Philosophy</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our approach marries modernism with regional context, creating spaces that 
              celebrate Southern California's unique coastal lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Modern Coastal Living</h3>
                <p className="text-muted-foreground">
                  Emphasizing clean modernist lines, open-plan layouts, and strong 
                  indoor-outdoor connections that celebrate Southern California's climate.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Context Sensitive</h3>
                <p className="text-muted-foreground">
                  Projects integrate local coastal vernacular and natural materials, 
                  respecting neighborhood character while pushing creative boundaries.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainable Materials</h3>
                <p className="text-muted-foreground">
                  Innovative use of Western Red Cedar, natural stone, and concrete 
                  that weather gracefully in coastal environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              From education to establishing one of San Diego's premier boutique architecture firms
            </p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {item.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <Badge variant="outline">{item.year}</Badge>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Awards & Recognition</h2>
            <p className="text-lg text-muted-foreground">
              Our work has been recognized by industry peers and featured in leading publications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-primary/10 text-primary">{award.year}</Badge>
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{award.title}</h3>
                  <p className="text-primary font-medium mb-2">{award.project}</p>
                  <p className="text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Team</h2>
            <p className="text-lg text-muted-foreground">
              A small, dedicated team providing personalized service and attention to every project
            </p>
          </div>
          
          <div className="flex justify-center">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.title}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Office Section */}
      <section className="py-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold mb-6 text-navy">Our Office</h2>
            <p className="text-2xl text-gold font-semibold mb-4">
              Where Coastal Architecture Comes to Life
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit our Solana Beach studio where we've been creating award-winning coastal architecture for over 35 years.
            </p>
          </div>
          
          <OfficeImageCarousel />
          
          {/* Office Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <Building className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Historic Building</h3>
              <p className="text-muted-foreground">Located in a beautifully restored 1920s building in the heart of Solana Beach</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Client Lounge</h3>
              <p className="text-muted-foreground">Comfortable meeting spaces for design consultations and project reviews</p>
            </div>
            <div className="text-center">
              <Coffee className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Design Studio</h3>
              <p className="text-muted-foreground">Open collaborative workspace where creativity and innovation flourish</p>
            </div>
            <div className="text-center">
              <Palette className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Material Library</h3>
              <p className="text-muted-foreground">Extensive collection of materials, finishes, and samples for project selection</p>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-gold mx-auto mb-3" />
                <h3 className="text-lg font-bold text-navy mb-2">Address</h3>
                <p className="text-muted-foreground">507 S. Cedros Ave<br />Solana Beach, CA 92075</p>
              </div>
              <div className="text-center">
                <Phone className="h-8 w-8 text-gold mx-auto mb-3" />
                <h3 className="text-lg font-bold text-navy mb-2">Phone</h3>
                <p className="text-muted-foreground">(858) 793-3437</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-gold mx-auto mb-3" />
                <h3 className="text-lg font-bold text-navy mb-2">Hours</h3>
                <p className="text-muted-foreground">Monday - Friday<br />8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Ready to discuss your coastal architecture project? We'd love to hear about your vision.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Brian Church Architecture</h3>
            <p className="text-white/80 mb-4">
              507 S. Cedros Ave, Solana Beach, CA 92075
            </p>
            <p className="text-white/60">
              &copy; 2024 Brian Church Architecture. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const OfficeImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const officeImages = [
    { src: '/images/shack1.jpg', alt: 'Brian Church Architecture Office - Exterior' },
    { src: '/images/shack2.jpg', alt: 'Office Interior Design Studio' },
    { src: '/images/shack3.jpg', alt: 'Office Client Meeting Area' },
    { src: '/images/shack4.jpg', alt: 'Office Work Space' },
    { src: '/images/shack5.jpg', alt: 'Office Creative Area' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % officeImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + officeImages.length) % officeImages.length);
  };

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % officeImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [officeImages.length]);

  return (
    <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-16">
      <img 
        src={officeImages[currentImageIndex].src}
        alt={officeImages[currentImageIndex].alt}
        className="w-full h-full object-cover transition-opacity duration-500"
      />
      
      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-navy/80 hover:bg-navy text-white p-3 rounded-full transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-navy/80 hover:bg-navy text-white p-3 rounded-full transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {officeImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImageIndex ? 'bg-gold' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default About;