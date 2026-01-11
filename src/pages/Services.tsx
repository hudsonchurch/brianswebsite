import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Home, 
  Building, 
  Layers, 
  RefreshCw, 
  FileText, 
  Users, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    {
      icon: Home,
      title: "Custom Residential Design",
      description: "Bespoke coastal homes that celebrate indoor-outdoor living with modern design sensibilities and regional context.",
      features: [
        "New custom home design",
        "Luxury coastal residences", 
        "Ocean view optimization",
        "Sustainable material selection",
        "Landscape integration"
      ],
      image: "/images/Heather-Lane-1.jpg"
    },
    {
      icon: Building,
      title: "Commercial Architecture",
      description: "Innovative commercial spaces including restaurants, wineries, and retail that enhance community character.",
      features: [
        "Restaurant & hospitality design",
        "Winery & tasting rooms",
        "Retail spaces",
        "Office buildings",
        "Community landmarks"
      ],
      image: "/images/solterra_1.jpg"
    },
    {
      icon: Layers,
      title: "Mixed-Use Development",
      description: "Smart urban infill projects that combine residential and commercial uses in thoughtful, award-winning designs.",
      features: [
        "Live-work developments",
        "Urban infill projects",
        "Transit-oriented design",
        "Community integration",
        "Zoning optimization"
      ],
      image: "/images/SEMA4-hero-03.jpg"
    },
    {
      icon: RefreshCw,
      title: "Adaptive Reuse",
      description: "Transforming existing structures into vibrant new spaces while preserving community character and history.",
      features: [
        "Historic building renovation",
        "Structural upgrades",
        "Code compliance",
        "Sustainable renovation",
        "Character preservation"
      ],
      image: "/images/Park1.jpg"
    }
  ];

  const processSteps = [
    {
      icon: Users,
      title: "Initial Consultation",
      description: "We begin with an in-depth discussion of your vision, needs, and site opportunities. This collaborative approach ensures we understand your lifestyle and goals."
    },
    {
      icon: FileText,
      title: "Design Development",
      description: "Through iterative design sessions, we develop concepts that balance your vision with site constraints, regulations, and budget considerations."
    },
    {
      icon: CheckCircle,
      title: "Permit & Documentation",
      description: "Our expertise in coastal development regulations ensures smooth permit processing. We prepare comprehensive construction documents."
    },
    {
      icon: Building,
      title: "Construction Support",
      description: "We provide construction administration services, working closely with contractors to ensure design intent is realized."
    }
  ];

  const specialties = [
    {
      title: "Coastal Development Expertise",
      description: "Deep knowledge of San Diego County coastal regulations, design review processes, and environmental considerations.",
      icon: "🌊"
    },
    {
      title: "Development Strategy",
      description: "Brian Church's certification as an AIA Development Strategist provides unique insight into the full development process.",
      icon: "📋"
    },
    {
      title: "Award-Winning Design",
      description: "Our portfolio includes multiple AIA awards and recognition from industry organizations for design excellence.",
      icon: "🏆"
    },
    {
      title: "Sustainable Practices",
      description: "Integration of sustainable materials, energy-efficient systems, and climate-responsive design strategies.",
      icon: "🌱"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive architectural services from initial concept through construction, 
              specializing in coastal California design and development.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A collaborative approach that ensures your vision is realized through 
              careful planning, design development, and construction oversight.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Unique expertise and capabilities that make Brian Church Architecture 
              the preferred choice for discerning clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{specialty.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{specialty.title}</h3>
                      <p className="text-muted-foreground">{specialty.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Additional Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive support for all aspects of your architectural project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "3D Rendering & Visualization",
                description: "Photorealistic renderings to help visualize your project before construction begins."
              },
              {
                title: "Interior Space Planning", 
                description: "Thoughtful interior layouts that maximize functionality and flow."
              },
              {
                title: "Kitchen & Bath Design",
                description: "Custom kitchen and bathroom designs integrated with overall architectural vision."
              },
              {
                title: "Permit Processing",
                description: "Expert navigation of local building codes and permit requirements."
              },
              {
                title: "Construction Administration",
                description: "Ongoing support during construction to ensure design intent is maintained."
              },
              {
                title: "Development Consulting",
                description: "Strategic guidance on development feasibility, zoning, and project planning."
              }
            ].map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Service Areas</h2>
            <p className="text-lg text-muted-foreground">
              Serving San Diego County's coastal communities with deep local knowledge
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              "Del Mar",
              "La Jolla", 
              "Solana Beach",
              "Encinitas",
              "Leucadia",
              "Carlsbad",
              "Cardiff",
              "Manhattan Beach",
              "Rancho Santa Fe",
              "Carmel Valley",
              "Pacific Beach",
              "Mission Beach"
            ].map((area, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg">
                <span className="font-medium text-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Whether you're planning a custom home, commercial space, or mixed-use development, 
            we're here to guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
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

export default Services;