import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Users, 
  Award,
  Building,
  Coffee,
  Lightbulb,
  Palette,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const OurOffice = () => {
  const officeFeatures = [
    {
      icon: Building,
      title: "Historic Building",
      description: "Located in a beautifully restored 1920s building in the heart of Solana Beach"
    },
    {
      icon: Coffee,
      title: "Client Lounge",
      description: "Comfortable meeting spaces for design consultations and project reviews"
    },
    {
      icon: Lightbulb,
      title: "Design Studio",
      description: "State-of-the-art drafting and 3D modeling facilities for project development"
    },
    {
      icon: Palette,
      title: "Material Library",
      description: "Extensive collection of coastal-appropriate materials and finishes"
    }
  ];

  const teamMembers = [
    {
      name: "Brian Lee Church, AIA",
      title: "Principal Architect",
      image: "/images/brian.jpg",
      credentials: [
        "AIA Principal Architect",
        "35+ Years Experience", 
        "Coastal & Mixed-Use Specialist"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-sand to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold mb-6 text-navy">Our Office</h1>
            <p className="text-2xl text-gold font-semibold mb-4">
              Where Coastal Architecture Comes to Life
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit our Solana Beach studio where we've been creating award-winning coastal architecture for over 35 years.
            </p>
          </div>
        </div>
      </section>

      {/* Office Images Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OfficeImageCarousel />
        </div>
      </section>

      {/* Office Features */}
      <section className="py-16 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">Our Studio</h2>
            <p className="text-lg text-muted-foreground">
              A creative workspace designed to inspire exceptional architecture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {officeFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 bg-white border-gold/30">
                <feature.icon className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="font-bold text-navy mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Dedicated professionals committed to architectural excellence
            </p>
          </div>
          
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <Card key={index} className="max-w-md bg-sand border-gold/30">
                <CardContent className="p-8 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-gold"
                  />
                  <h3 className="text-2xl font-serif font-bold mb-4 text-navy">{member.name}</h3>
                  <div className="space-y-2">
                    {member.credentials.map((credential, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                        <p className="text-muted-foreground font-medium">{credential}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">Visit Our Studio</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-white/90">
                      507 S. Cedros Ave<br />
                      Solana Beach, CA 92075
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-white/90">(858) 793-3437</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-white/90">info@brianchurcharchitecture.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Office Hours</h3>
                    <p className="text-white/90">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: By Appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="btn-gold h-12 px-8">
                    Schedule a Visit
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-white/10 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
                <p className="text-white/70">
                  Located in the heart of Solana Beach's design district
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">Awards & Recognition</h2>
            <p className="text-muted-foreground">Celebrating 35+ years of architectural excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-white border-gold/30">
              <Award className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="font-bold text-navy mb-2">AIA San Diego Honor Award</h3>
              <p className="text-sm text-muted-foreground">SEMA4 Live-Work Development</p>
            </Card>
            
            <Card className="text-center p-6 bg-white border-gold/30">
              <Award className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="font-bold text-navy mb-2">Concrete Masonry Award</h3>
              <p className="text-sm text-muted-foreground">Solterra Winery</p>
            </Card>
            
            <Card className="text-center p-6 bg-white border-gold/30">
              <Award className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="font-bold text-navy mb-2">Western Red Cedar Merit Award</h3>
              <p className="text-sm text-muted-foreground">Innovative Material Application</p>
            </Card>
          </div>
        </div>
      </section>
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

export default OurOffice;