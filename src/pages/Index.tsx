import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { ArrowRight, Award, Users, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const allProjects = [
    {
      id: 'heather-lane',
      title: "Heather Lane Residence",
      description: "7,100 sq ft cliffside luxury home with panoramic ocean vistas",
      image: "/images/Heather-Lane-1.jpg",
      award: "Featured Project",
      year: "2017",
      location: "Del Mar, CA"
    },
    {
      id: 'solterra-winery',
      title: "Solterra Winery",
      description: "Urban winery and tasting room with adaptive reuse",
      image: "/images/solterra_1.jpg",
      award: "2015 Honor Award",
      year: "2013",
      location: "Leucadia, CA"
    },
    {
      id: 'sema4-live-work',
      title: "Sema 4 Live-Work",
      description: "Award-winning mixed-use development on Highway 101",
      image: "/images/SEMA4-hero-03.jpg",
      award: "AIA Honor Award",
      year: "2012",
      location: "Encinitas, CA"
    },
    {
      id: 'park-101',
      title: "Park 101",
      description: "Vibrant indoor-outdoor dining complex with beer garden",
      image: "/images/Park1.jpg",
      award: "",
      year: "2017",
      location: "Carlsbad, CA"
    },
    {
      id: 'church-house',
      title: "Church House",
      description: "Modern Craftsman residence in Del Mar's Beach Colony",
      image: "/images/church_1.jpg",
      award: "",
      year: "2005",
      location: "Del Mar, CA"
    },
    {
      id: 'santa-fe-drive',
      title: "Santa Fe Drive Residence",
      description: "Craftsman style home capturing Encinitas beach lifestyle",
      image: "/images/SantaFe1.jpg",
      award: "",
      year: "2015",
      location: "Encinitas, CA"
    },
    {
      id: 'coast-blvd',
      title: "Coast Blvd Remodel",
      description: "Beach duplex conversion with green roof and bi-fold doors",
      image: "/images/coast blvd hero.jpg",
      award: "",
      year: "2017",
      location: "Del Mar, CA"
    },
    {
      id: 'moonlight-beach',
      title: "Moonlight Beach House",
      description: "Beach cottage charm with modern craftsman elements",
      image: "/images/moonlight (1).jpg",
      award: "",
      year: "2014",
      location: "Encinitas, CA"
    }
  ];

  const stats = [
    { icon: Award, label: "Awards Won", value: "15+" },
    { icon: Users, label: "Years Experience", value: "35+" },
    { icon: MapPin, label: "Projects Completed", value: "100+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/SEMA4-hero-03.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Coastal Modern
            <span className="block text-primary-glow">Architecture</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Creating award-winning custom homes and commercial spaces that celebrate 
            Southern California's coastal lifestyle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/portfolio">
                View Our Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Design-Driven Architecture
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2005 by Brian Lee Church, our boutique firm specializes in 
                custom coastal residences and innovative mixed-use projects. We blend 
                contemporary modernism with regional context, creating spaces that 
                celebrate indoor-outdoor living.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With over 35 years of experience and multiple AIA awards, we bring 
                both creative vision and development expertise to every project.
              </p>
              <Button asChild variant="outline">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/images/brian.jpg"
                alt="Brian Church, Principal Architect"
                className="rounded-lg shadow-lg w-64 h-64 object-cover mx-auto"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-foreground">Brian Lee Church, AIA</h3>
                <p className="text-sm text-muted-foreground">Principal Architect</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <ProjectCarousel projects={allProjects} />

      {/* San Diego Projects Map */}
      <SanDiegoProjectsMap />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Dream Space?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss your vision for a custom coastal home or commercial project. 
            We bring decades of experience to every design challenge.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Brian Church Architecture</h3>
              <p className="text-white/80 mb-4">
                Award-winning coastal architecture in San Diego County since 2005.
              </p>
              <p className="text-white/80">
                507 S. Cedros Ave<br />
                Solana Beach, CA 92075
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/80">
                <li>Custom Residential Design</li>
                <li>Commercial Architecture</li>
                <li>Mixed-Use Development</li>
                <li>Adaptive Reuse</li>
                <li>Development Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Recognition</h4>
              <ul className="space-y-2 text-white/80">
                <li>AIA San Diego Member</li>
                <li>Multiple Design Awards</li>
                <li>Featured in San Diego Magazine</li>
                <li>Modern Luxury Recognition</li>
                <li>Western Red Cedar Association</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Brian Church Architecture. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Flowing River Carousel Component
const ProjectCarousel = ({ projects }: { projects: any[] }) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [hoverImageIndex, setHoverImageIndex] = useState<{ [key: string]: number }>({});

  // Add multiple images to each project
  const projectsWithImages = projects.map(project => ({
    ...project,
    images: getProjectImages(project)
  }));

  function getProjectImages(project: any) {
    const imageMap: { [key: string]: string[] } = {
      'heather-lane': [
        '/images/Heather-Lane-1.jpg',
        '/images/Heather-Lane-2.jpg', 
        '/images/Heather-Lane-3.jpg',
        '/images/Heather-Lane-4.jpg'
      ],
      'solterra-winery': [
        '/images/solterra_1.jpg',
        '/images/solterra_2.jpg',
        '/images/solterra_3.jpg',
        '/images/solterra_4.jpg'
      ],
      'sema4-live-work': [
        '/images/SEMA4-hero-03.jpg',
        '/images/sema4_1.jpg',
        '/images/sema4_4.jpg',
        '/images/sema4_5.jpg'
      ],
      'park-101': [
        '/images/Park1.jpg',
        '/images/PARK6.jpg',
        '/images/PARK22.jpg',
        '/images/PARK51.jpg'
      ],
      'church-house': [
        '/images/church_1.jpg',
        '/images/church_2.jpg',
        '/images/church_4.jpg'
      ],
      'santa-fe-drive': [
        '/images/SantaFe1.jpg',
        '/images/SantaFe2.jpg',
        '/images/SantaFe3.jpg',
        '/images/SantaFe4.jpg',
        '/images/SantaFe5.jpg'
      ],
      'coast-blvd': [
        '/images/coast blvd hero.jpg',
        '/images/coast blvd (1).jpg',
        '/images/coast blvd (2).jpg',
        '/images/coast blvd (4).jpg'
      ],
      'moonlight-beach': [
        '/images/moonlight (1).jpg',
        '/images/moonlight (2).jpg',
        '/images/moonlight (3).jpg'
      ]
    };
    return imageMap[project.id] || [project.image];
  }

  // Create extended project list for seamless loop (triple the array)
  const extendedProjects = [...projectsWithImages, ...projectsWithImages, ...projectsWithImages];

  // Hover image cycling effect
  useEffect(() => {
    if (hoveredProject) {
      const project = projectsWithImages.find(p => p.id === hoveredProject);
      if (project && project.images.length > 1) {
        const interval = setInterval(() => {
          setHoverImageIndex(prev => ({
            ...prev,
            [hoveredProject]: ((prev[hoveredProject] || 0) + 1) % project.images.length
          }));
        }, 800); // Change image every 800ms

        return () => clearInterval(interval);
      }
    }
  }, [hoveredProject, projectsWithImages]);

  const handleMouseEnter = (projectId: string) => {
    setHoveredProject(projectId);
    setHoverImageIndex(prev => ({ ...prev, [projectId]: 0 }));
  };

  const handleMouseLeave = (projectId: string) => {
    setHoveredProject(null);
    setHoverImageIndex(prev => ({ ...prev, [projectId]: 0 }));
  };

  const getCurrentImage = (project: any) => {
    const currentIndex = hoverImageIndex[project.id] || 0;
    return project.images[currentIndex] || project.image;
  };

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our award-winning portfolio of coastal homes, wineries, and mixed-use developments
          </p>
        </div>
        
        {/* Flowing River Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-flow-right space-x-8" style={{
            animation: 'flowRight 60s linear infinite'
          }}>
            {extendedProjects.map((project, index) => {
              const currentImage = getCurrentImage(project);
              return (
                <Link 
                  key={`${project.id}-${index}`} 
                  to={`/project/${project.id}`}
                  className="flex-shrink-0 w-80"
                >
                  <Card 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(project.id)}
                    onMouseLeave={() => handleMouseLeave(project.id)}
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img 
                        src={currentImage} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                      {/* Image counter for multi-image projects */}
                      {project.images.length > 1 && hoveredProject === project.id && (
                        <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                          {(hoverImageIndex[project.id] || 0) + 1} / {project.images.length}
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{project.year}</Badge>
                        {project.award && (
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                            {project.award}
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{project.location}</p>
                      <p className="text-muted-foreground line-clamp-2">{project.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/portfolio">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah & Michael Chen",
      project: "Heather Lane Residence",
      location: "Del Mar, CA",
      rating: 5,
      text: "Brian Church Architecture exceeded our expectations in every way. Their attention to detail and understanding of coastal living created our dream home. The design perfectly captures ocean views while providing the privacy and functionality our family needed.",
      image: "/images/Heather-Lane-1.jpg"
    },
    {
      name: "David Rodriguez",
      project: "Solterra Winery",
      location: "Leucadia, CA", 
      rating: 5,
      text: "Working with Brian's team on our winery was an incredible experience. They transformed our vision into a space that perfectly balances functionality for wine production with an inviting atmosphere for our guests. The design has become a cornerstone of our community.",
      image: "/images/solterra_1.jpg"
    },
    {
      name: "Jennifer & Mark Thompson",
      project: "Santa Fe Drive Residence",
      location: "Encinitas, CA",
      rating: 5,
      text: "From our first meeting to move-in day, Brian Church Architecture demonstrated professionalism, creativity, and genuine care for our project. They listened to our needs and created a home that reflects our lifestyle while respecting the neighborhood character.",
      image: "/images/SantaFe1.jpg"
    },
    {
      name: "Robert & Lisa Park",
      project: "Coast Blvd Remodel", 
      location: "Del Mar, CA",
      rating: 5,
      text: "The transformation of our 1970s duplex into a modern beach house was nothing short of miraculous. Brian's innovative design solutions maximized our ocean views and created seamless indoor-outdoor living. We couldn't be happier with the result.",
      image: "/images/coast blvd hero.jpg"
    },
    {
      name: "Amanda Foster",
      project: "SEMA4 Live-Work Unit",
      location: "Encinitas, CA",
      rating: 5,
      text: "As a graphic designer, I needed a space that could function as both home and studio. The SEMA4 development perfectly meets those needs with flexible layouts and beautiful natural light. The cedar exterior ages beautifully and creates a unique coastal aesthetic.",
      image: "/images/SEMA4-hero-03.jpg"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from homeowners and business owners who have worked with us to create exceptional spaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial Content */}
          <div className="order-2 lg:order-1">
            <Card className="p-8 relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-primary text-white p-3 rounded-full">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(currentTest.rating)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "{currentTest.text}"
              </blockquote>
              
              <div className="border-t pt-6">
                <div className="font-semibold text-foreground">{currentTest.name}</div>
                <div className="text-sm text-muted-foreground">{currentTest.project}</div>
                <div className="text-sm text-muted-foreground">{currentTest.location}</div>
              </div>
            </Card>
            
            {/* Navigation Controls */}
            <div className="flex items-center justify-center mt-8 space-x-6">
              {/* Previous Button */}
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-primary" />
              </button>
              
              {/* Navigation Dots */}
              <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-primary/30'
                  }`}
                />
              ))}
              </div>
              
              {/* Next Button */}
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-primary" />
              </button>
            </div>
          </div>
          
          {/* Project Image */}
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img 
                src={currentTest.image} 
                alt={currentTest.project}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SanDiegoProjectsMap = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  // Project locations with approximate coordinates
  const projectLocations = [
    {
      id: 'heather-lane',
      title: 'Heather Lane Residence',
      location: 'Del Mar, CA',
      coordinates: { lat: 32.9595, lng: -117.2653 },
      image: '/images/Heather-Lane-1.jpg',
      year: '2017',
      type: 'Residential'
    },
    {
      id: 'solterra-winery',
      title: 'Solterra Winery',
      location: 'Leucadia, CA',
      coordinates: { lat: 33.0614, lng: -117.2931 },
      image: '/images/solterra_1.jpg',
      year: '2013',
      type: 'Commercial'
    },
    {
      id: 'sema4-live-work',
      title: 'SEMA4 Live-Work',
      location: 'Encinitas, CA',
      coordinates: { lat: 33.0370, lng: -117.2920 },
      image: '/images/SEMA4-hero-03.jpg',
      year: '2012',
      type: 'Mixed-Use'
    },
    {
      id: 'park-101',
      title: 'Park 101',
      location: 'Carlsbad, CA',
      coordinates: { lat: 33.1581, lng: -117.3506 },
      image: '/images/Park1.jpg',
      year: '2017',
      type: 'Commercial'
    },
    {
      id: 'church-house',
      title: 'Church House',
      location: 'Del Mar, CA',
      coordinates: { lat: 32.9595, lng: -117.2653 },
      image: '/images/church_1.jpg',
      year: '2016',
      type: 'Residential'
    },
    {
      id: 'the-shack',
      title: 'The Shack',
      location: 'Encinitas, CA',
      coordinates: { lat: 33.0370, lng: -117.2920 },
      image: '/images/shack1.jpg',
      year: '2018',
      type: 'Commercial'
    },
    {
      id: 'app',
      title: 'App Residence',
      location: 'Solana Beach, CA',
      coordinates: { lat: 32.9911, lng: -117.2712 },
      image: '/images/app1.jpg',
      year: '2022',
      type: 'Residential'
    },
    {
      id: 'stratford-sweeney',
      title: 'Stratford Sweeney Residence',
      location: 'Cardiff, CA',
      coordinates: { lat: 33.0142, lng: -117.2803 },
      image: '/images/stratford1.jpg',
      year: '2021',
      type: 'Residential'
    },
    {
      id: 'ocean-view',
      title: 'Ocean View Residence',
      location: 'Encinitas, CA',
      coordinates: { lat: 33.0370, lng: -117.2920 },
      image: '/images/oceanview1 (1).jpg',
      year: '2020',
      type: 'Residential'
    },
    {
      id: 'varano',
      title: 'Varano Residence',
      location: 'Del Mar, CA',
      coordinates: { lat: 32.9595, lng: -117.2653 },
      image: '/images/2004 Ocean Front exterior.jpg',
      year: '2019',
      type: 'Residential'
    }
  ];

  return (
    <section id="projects-map" className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">Our Projects Across San Diego</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of completed projects throughout San Diego County. Click on any pin to learn more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Google Maps Integration */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-[4/3] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429155.3198302891!2d-117.53872284999999!3d32.8245525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
                
                {/* Map Overlay with Instructions */}
                <div className="absolute top-4 left-4 bg-white/95 rounded-lg p-3 shadow-lg">
                  <h3 className="font-bold text-navy text-sm mb-1">San Diego County Projects</h3>
                  <p className="text-xs text-muted-foreground">Red pins show our completed projects</p>
                  <p className="text-xs text-muted-foreground">Click projects below to learn more</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Details Panel */}
          <div className="lg:col-span-1">
            {selectedProject ? (
              <Card className="bg-white border-gold/30">
                <CardContent className="p-6">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <img 
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Badge className="bg-gold text-navy mb-2">{selectedProject.type}</Badge>
                  <h3 className="text-xl font-serif font-bold text-navy mb-2">{selectedProject.title}</h3>
                  <p className="text-muted-foreground mb-2">{selectedProject.location}</p>
                  <p className="text-sm text-muted-foreground mb-4">Completed: {selectedProject.year}</p>
                  <Link to={`/project/${selectedProject.id}`}>
                    <Button className="btn-navy w-full">
                      View Project Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white border-gold/30">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-navy mb-2">Select a Project</h3>
                  <p className="text-muted-foreground">Click on any red pin on the map to view project details and images.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
        
        {/* Project List */}
        <div className="mt-12">
          <h3 className="text-2xl font-serif font-bold text-navy mb-6 text-center">All Projects</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {projectLocations.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                  selectedProject?.id === project.id 
                    ? 'border-gold bg-gold/10' 
                    : 'border-gray-200 hover:border-gold/50'
                }`}
              >
                <div className="text-sm font-semibold text-navy">{project.title}</div>
                <div className="text-xs text-muted-foreground">{project.location}</div>
                <div className="text-xs text-gold">{project.year}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
