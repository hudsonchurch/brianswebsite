import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Calendar, MapPin, Square, ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  type: string;
  size: string;
  description: string;
  images: ProjectImage[];
  awards: string[];
  features: string[];
}

const Portfolio = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [imageIndices, setImageIndices] = useState<{ [key: string]: number }>({});
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [hoverImageIndex, setHoverImageIndex] = useState<{ [key: string]: number }>({});
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchParams, setSearchParams] = useSearchParams();

  // Handle URL filter parameter
  useEffect(() => {
    const filterParam = searchParams.get('filter');
    if (filterParam && categories.includes(filterParam)) {
      setSelectedCategory(filterParam);
    }
  }, [searchParams]);

  // Update URL when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ filter: category });
    }
  };

  const projects: Project[] = [
    {
      id: 'heather-lane',
      title: "Heather Lane Residence",
      location: "Del Mar, CA",
      year: "2017",
      type: "Residential",
      size: "7,100 sq ft",
      description: "A ground-up cliffside luxury home with panoramic ocean vistas. The contemporary design features expansive glass walls, horizontal rooflines, and seamless integration with landscape.",
      images: [
        { src: "/images/Heather-Lane-1.jpg", alt: "Heather Lane Residence Exterior" },
        { src: "/images/Heather-Lane-2.jpg", alt: "Heather Lane Ocean View" },
        { src: "/images/Heather-Lane-3.jpg", alt: "Heather Lane Interior Living" },
        { src: "/images/Heather-Lane-4.jpg", alt: "Heather Lane Kitchen" },
        { src: "/images/Heather-Lane-5.jpg", alt: "Heather Lane Bedroom" },
        { src: "/images/Heather-Lane-6.jpg", alt: "Heather Lane Outdoor Terrace" },
        { src: "/images/Heather-Lane-10.jpg", alt: "Heather Lane Pool Area" }
      ],
      awards: ["Featured Project"],
      features: ["4 bedrooms", "Media room", "Pool", "Cliffside location"]
    },
    {
      id: 'solterra-winery',
      title: "Solterra Winery",
      location: "Leucadia, CA",
      year: "2013",
      type: "Commercial",
      size: "4,600 sq ft",
      description: "An urban winery, restaurant, and tasting room created through adaptive reuse and new construction. The design blends wood and masonry with large windows showcasing wine barrels to engage the street.",
      images: [
        { src: "/images/solterra_1.jpg", alt: "Solterra Winery Exterior" },
        { src: "/images/solterra_2.jpg", alt: "Solterra Tasting Room" },
        { src: "/images/solterra_3.jpg", alt: "Solterra Wine Barrels" },
        { src: "/images/solterra_4.jpg", alt: "Solterra Interior Dining" }
      ],
      awards: ["2015 Honor Award - Concrete Masonry"],
      features: ["Adaptive reuse", "Barrel storage", "Tasting room", "Street engagement"]
    },
    {
      id: 'the-shack',
      title: "The Shack",
      location: "Encinitas, CA",
      year: "2018",
      type: "Commercial",
      size: "2,400 sq ft",
      description: "Brian Church Architecture's office space featuring rustic coastal architecture with reclaimed materials. The design emphasizes indoor-outdoor work environments with large sliding doors and a wraparound deck.",
      images: [
        { src: "/images/shack1.jpg", alt: "The Shack Office Exterior" },
        { src: "/images/shack2.jpg", alt: "The Shack Office Interior" },
        { src: "/images/shack3.jpg", alt: "The Shack Office Deck" },
        { src: "/images/shack4.jpg", alt: "The Shack Office Workspace" },
        { src: "/images/shack5.jpg", alt: "The Shack Office Meeting Area" }
      ],
      awards: [],
      features: ["Beachside location", "Reclaimed materials", "Indoor-outdoor workspace", "Wraparound deck"]
    },
    {
      id: 'sema4-live-work',
      title: "Sema 4 Live-Work",
      location: "Encinitas/Leucadia, CA",
      year: "2012",
      type: "Mixed-Use",
      size: "Four 1,800 sq ft units",
      description: "Award-winning mixed-use development consisting of four live-work townhomes along historic Highway 101. Each unit features a 'hull-like' cedar exterior structure and modern loft layouts.",
      images: [
        { src: "/images/SEMA4-hero-03.jpg", alt: "SEMA4 Exterior View" },
        { src: "/images/sema4_1.jpg", alt: "SEMA4 Cedar Cladding Detail" },
        { src: "/images/sema4_4.jpg", alt: "SEMA4 Interior Loft" },
        { src: "/images/sema4_5.jpg", alt: "SEMA4 Work Space" }
      ],
      awards: ["2013 AIA Honor Award", "2012 Western Red Cedar Merit Award"],
      features: ["Live-work units", "Cedar exterior", "Highway 101 location", "Modern lofts"]
    },
    {
      id: 'park-101',
      title: "Park 101",
      location: "Carlsbad, CA",
      year: "2017",
      type: "Commercial",
      size: "3,500 sq ft restaurant",
      description: "A vibrant indoor-outdoor dining complex created by repurposing a mid-century building. Features an expansive beer garden and roof deck, transforming a community landmark.",
      images: [
        { src: "/images/Park1.jpg", alt: "Park 101 Exterior" },
        { src: "/images/PARK6.jpg", alt: "Park 101 Beer Garden" },
        { src: "/images/PARK22.jpg", alt: "Park 101 Interior Dining" },
        { src: "/images/PARK51.jpg", alt: "Park 101 Roof Deck" }
      ],
      awards: [],
      features: ["Adaptive reuse", "Beer garden", "Roof deck", "Community landmark"]
    },
    {
      id: 'church-house',
      title: "Church House",
      location: "Del Mar, CA",
      year: "2005",
      type: "Residential",
      size: "3,800 sq ft",
      description: "A modern Craftsman style residence in Del Mar's Beach Colony. Living areas placed on upper floor as great room capturing ocean views over neighboring rooftops.",
      images: [
        { src: "/images/church_1.jpg", alt: "Church House Exterior" },
        { src: "/images/church_2.jpg", alt: "Church House Interior" },
        { src: "/images/church_4.jpg", alt: "Church House Great Room" }
      ],
      awards: [],
      features: ["3 bedrooms", "Ocean views", "Great room", "Beach Colony location"]
    },
    {
      id: 'santa-fe-drive',
      title: "Santa Fe Drive Residence",
      location: "Encinitas, CA",
      year: "2015",
      type: "Residential",
      size: "4,100 sq ft",
      description: "A new single-family home in Craftsman style that captures the beach lifestyle of Encinitas with a modern coastal interpretation of traditional architecture.",
      images: [
        { src: "/images/SantaFe1.jpg", alt: "Santa Fe Drive Exterior" },
        { src: "/images/SantaFe2.jpg", alt: "Santa Fe Drive Front Entry" },
        { src: "/images/SantaFe3.jpg", alt: "Santa Fe Drive Living Room" },
        { src: "/images/SantaFe4.jpg", alt: "Santa Fe Drive Kitchen" },
        { src: "/images/SantaFe5.jpg", alt: "Santa Fe Drive Outdoor Space" }
      ],
      awards: [],
      features: ["4 bedrooms", "Craftsman style", "800 sq ft basement", "Traditional details"]
    },
    {
      id: 'coast-blvd',
      title: "Coast Blvd Remodel",
      location: "Del Mar, CA",
      year: "2017",
      type: "Residential",
      size: "2,500 sq ft",
      description: "A dramatic remodel converting a dated 1970s beach duplex into a single-family modern beach house. Features bi-fold glass doors and a green roof with succulents.",
      images: [
        { src: "/images/coast blvd hero.jpg", alt: "Coast Blvd Exterior" },
        { src: "/images/coast blvd (1).jpg", alt: "Coast Blvd Ocean View" },
        { src: "/images/coast blvd (2).jpg", alt: "Coast Blvd Interior" },
        { src: "/images/coast blvd (4).jpg", alt: "Coast Blvd Living Space" },
        { src: "/images/coast blvd (5).jpg", alt: "Coast Blvd Green Roof" }
      ],
      awards: [],
      features: ["Duplex conversion", "Bi-fold doors", "Green roof", "Beach location"]
    },
    {
      id: 'moonlight-beach',
      title: "Moonlight Beach House",
      location: "Encinitas, CA",
      year: "2014",
      type: "Residential",
      size: "3,800 sq ft",
      description: "A custom home blending eclectic beach-cottage charm with modern craftsman elements. Features clapboard siding and bungalow proportions with contemporary comfort.",
      images: [
        { src: "/images/moonlight (1).jpg", alt: "Moonlight Beach House Exterior" },
        { src: "/images/moonlight (2).jpg", alt: "Moonlight Beach House Interior" },
        { src: "/images/moonlight (3).jpg", alt: "Moonlight Beach House Living" }
      ],
      awards: [],
      features: ["5 bedrooms", "Modern craftsman", "Beach cottage style", "Large family home"]
    },
    {
      id: 'crest',
      title: "Crest Residence",
      location: "La Jolla, CA",
      year: "2023",
      type: "Residential",
      size: "5,200 sq ft",
      description: "A contemporary hillside residence featuring clean lines and expansive glass walls that frame stunning canyon views. The design emphasizes indoor-outdoor living with multiple terraces and a dramatic infinity pool.",
      images: [
        { src: "/images/crest mitgang  (1).jpg", alt: "Crest Residence Exterior" },
        { src: "/images/crest mitgang  (2).jpg", alt: "Crest Residence Pool" },
        { src: "/images/crest mitgang  (3).jpg", alt: "Crest Residence Interior" },
        { src: "/images/crest mitgang  (4).jpg", alt: "Crest Residence Kitchen" },
        { src: "/images/crest mitgang  (5).jpg", alt: "Crest Residence Terrace" }
      ],
      awards: [],
      features: ["4 bedrooms", "Infinity pool", "Canyon views", "Contemporary design"]
    },
    {
      id: 'app',
      title: "App Residence",
      location: "Solana Beach, CA",
      year: "2022",
      type: "Residential",
      size: "4,800 sq ft",
      description: "A modern coastal home designed for a tech entrepreneur, featuring smart home integration and flexible work spaces. The design balances privacy with ocean views through strategic window placement.",
      images: [
        { src: "/images/app1.jpg", alt: "App Residence Exterior" },
        { src: "/images/app2.jpg", alt: "App Residence Office" },
        { src: "/images/app3.jpg", alt: "App Residence Living Room" },
        { src: "/images/app4.jpg", alt: "App Residence Kitchen" },
        { src: "/images/app5.jpg", alt: "App Residence Deck" }
      ],
      awards: [],
      features: ["3 bedrooms", "Home office", "Smart home tech", "Ocean views"]
    },
    {
      id: 'stratford-sweeney',
      title: "Stratford Sweeney Residence",
      location: "Cardiff, CA",
      year: "2021",
      type: "Residential",
      size: "6,400 sq ft",
      description: "An elegant family compound featuring traditional coastal architecture with modern amenities. The design includes a main house and guest cottage connected by landscaped courtyards.",
      images: [
        { src: "/images/stratford1.jpg", alt: "Stratford Sweeney Main House" },
        { src: "/images/stratford2.jpg", alt: "Stratford Sweeney Courtyard" },
        { src: "/images/stratford3.jpg", alt: "Stratford Sweeney Guest Cottage" },
        { src: "/images/stratford4.jpg", alt: "Stratford Sweeney Interior" },
        { src: "/images/stratford5.jpg", alt: "Stratford Sweeney Garden" }
      ],
      awards: [],
      features: ["5 bedrooms", "Guest cottage", "Courtyards", "Traditional coastal"]
    },
    {
      id: 'ocean-view',
      title: "Ocean View Residence",
      location: "Encinitas, CA",
      year: "2020",
      type: "Residential",
      size: "3,600 sq ft",
      description: "A compact yet luxurious home maximizing ocean views from a narrow lot. The three-story design features a rooftop deck and floor-to-ceiling windows throughout.",
      images: [
        { src: "/images/oceanview1 (1).jpg", alt: "Ocean View Residence Exterior" },
        { src: "/images/oceanview3.jpg", alt: "Ocean View Residence Rooftop" },
        { src: "/images/oceanview4 (1).jpg", alt: "Ocean View Residence Living" },
        { src: "/images/oceanview5.jpg", alt: "Ocean View Residence Bedroom" },
        { src: "/images/oceanview6.jpg", alt: "Ocean View Residence Kitchen" }
      ],
      awards: [],
      features: ["3 bedrooms", "Rooftop deck", "Ocean views", "Narrow lot design"]
    },
    {
      id: 'varano',
      title: "Varano Residence",
      location: "Del Mar, CA",
      year: "2019",
      type: "Residential",
      size: "7,800 sq ft",
      description: "A grand coastal estate featuring Mediterranean-inspired architecture with contemporary interiors. The design includes extensive outdoor entertaining areas and a resort-style pool complex.",
      images: [
        { src: "/images/2004 Ocean Front exterior.jpg", alt: "Varano Residence Exterior" },
        { src: "/images/2004 Ocean Front-interior.jpg", alt: "Varano Residence Interior" }
      ],
      awards: [],
      features: ["6 bedrooms", "Resort-style pool", "Mediterranean style", "Grand estate"]
    }
  ];

  const categories = ["All", "Residential", "Mixed-Use", "Commercial"];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.type === selectedCategory);

  const nextImage = (projectId: string, totalImages: number) => {
    setImageIndices(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectId: string, totalImages: number) => {
    setImageIndices(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const getCurrentImageIndex = (projectId: string) => {
    return imageIndices[projectId] || 0;
  };

  // Keyboard navigation for images
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const focusedElement = document.activeElement;
        const projectCard = focusedElement?.closest('[data-project-id]');
        if (projectCard) {
          const projectId = projectCard.getAttribute('data-project-id');
          const project = projects.find(p => p.id === projectId);
          if (project) {
            if (e.key === 'ArrowLeft') {
              prevImage(projectId, project.images.length);
            } else {
              nextImage(projectId, project.images.length);
            }
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [projects]);

  // Hover image cycling effect
  useEffect(() => {
    if (hoveredProject) {
      const project = projects.find(p => p.id === hoveredProject);
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
  }, [hoveredProject, projects]);

  const handleMouseEnter = (projectId: string) => {
    setHoveredProject(projectId);
    setHoverImageIndex(prev => ({ ...prev, [projectId]: 0 }));
  };

  const handleMouseLeave = (projectId: string) => {
    setHoveredProject(null);
    setHoverImageIndex(prev => ({ ...prev, [projectId]: 0 }));
  };

  const getCurrentDisplayImage = (project: Project) => {
    if (hoveredProject === project.id) {
      const hoverIndex = hoverImageIndex[project.id] || 0;
      return project.images[hoverIndex] || project.images[0];
    }
    const currentIndex = getCurrentImageIndex(project.id);
    return project.images[currentIndex] || project.images[0];
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of award-winning residential and commercial projects 
              that showcase innovative design and exceptional craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const currentImageIndex = getCurrentImageIndex(project.id);
              const displayImage = hoveredProject === project.id 
                ? (project.images[hoverImageIndex[project.id] || 0] || project.images[0])
                : (project.images[currentImageIndex] || project.images[0]);
              
              return (
                <div 
                  key={index} 
                  className="group cursor-pointer" 
                  data-project-id={project.id} 
                  tabIndex={0}
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={() => handleMouseLeave(project.id)}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                    <div className="relative aspect-[4/3] overflow-hidden" onClick={() => navigate(`/project/${project.id}`)}>
                    <img 
                      src={displayImage.src} 
                      alt={displayImage.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Image counter for hover cycling */}
                    {project.images.length > 1 && hoveredProject === project.id && (
                      <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                        {(hoverImageIndex[project.id] || 0) + 1} / {project.images.length}
                      </div>
                    )}
                    
                    {/* Image Navigation */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            prevImage(project.id, project.images.length);
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors opacity-0 group-hover:opacity-100 z-10"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            nextImage(project.id, project.images.length);
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors opacity-0 group-hover:opacity-100 z-10"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                        
                        {/* Image Counter */}
                        <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                          {currentImageIndex + 1} / {project.images.length}
                        </div>
                      </>
                    )}
                    
                    {/* Click indicator */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <div className="bg-white/90 text-black px-4 py-2 rounded-lg font-medium">
                        Click to view project
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6" onClick={() => navigate(`/project/${project.id}`)}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{project.year}</Badge>
                        <Badge variant="outline">{project.type}</Badge>
                      </div>
                      {project.awards.length > 0 && (
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="text-sm text-primary font-medium">Award Winner</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Square className="h-4 w-4" />
                        <span>{project.size}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 2).map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {project.features.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.features.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can bring your architectural vision to life with the same 
            attention to detail and innovative design approach showcased in our portfolio.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-8">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;