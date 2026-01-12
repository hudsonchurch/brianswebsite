import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ArrowRight, 
  MapPin, 
  Calendar, 
  Ruler, 
  Award,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectData {
  id: string;
  title: string;
  location: string;
  year: string;
  type: string;
  size: string;
  description: string;
  detailedDescription: string;
  images: ProjectImage[];
  awards: string[];
  features: string[];
  specifications?: {
    architect: string;
    contractor?: string;
    photographer?: string;
    completion: string;
  };
}

const projectsData: { [key: string]: ProjectData } = {
  'heather-lane': {
    id: 'heather-lane',
    title: 'Heather Lane Residence',
    location: 'Del Mar, CA',
    year: '2017',
    type: 'Residential',
    size: '7,100 sq ft',
    description: 'A ground-up cliffside luxury home with panoramic ocean vistas.',
    detailedDescription: 'This contemporary design features expansive glass walls, horizontal rooflines, and seamless integration with landscape. The home maximizes panoramic ocean views while respecting the natural topography of the coastal bluff. Each level offers indoor-outdoor living spaces that capture the essence of Southern California coastal lifestyle.',
    images: [
      { src: '/images/Heather-Lane-1.jpg', alt: 'Heather Lane Residence Exterior' },
      { src: '/images/Heather-Lane-2.jpg', alt: 'Heather Lane Ocean View' },
      { src: '/images/Heather-Lane-3.jpg', alt: 'Heather Lane Interior Living' },
      { src: '/images/Heather-Lane-4.jpg', alt: 'Heather Lane Kitchen' },
      { src: '/images/Heather-Lane-5.jpg', alt: 'Heather Lane Master Suite' }
    ],
    awards: ['AIA Honor Award 2018'],
    features: ['5 bedrooms', 'Ocean views', 'Contemporary design', 'Infinity pool'],
    specifications: {
      architect: 'Brian Church Architecture',
      completion: '2017',
      photographer: 'Coastal Architecture Photography'
    }
  },
  'solterra-winery': {
    id: 'solterra-winery',
    title: 'Solterra Winery',
    location: 'Leucadia, CA',
    year: '2013',
    type: 'Commercial',
    size: '8,500 sq ft',
    description: 'A boutique winery and tasting room featuring sustainable design and local materials.',
    detailedDescription: 'Solterra Winery represents a perfect marriage of sustainable architecture and wine-making tradition. The design incorporates reclaimed materials, passive cooling systems, and drought-resistant landscaping. The tasting room opens to vineyard views while the production facility maintains optimal conditions for wine-making.',
    images: [
      { src: '/images/solterra_1.jpg', alt: 'Solterra Winery Exterior' },
      { src: '/images/solterra_2.jpg', alt: 'Solterra Tasting Room' },
      { src: '/images/solterra_3.jpg', alt: 'Solterra Production Area' },
      { src: '/images/solterra_4.jpg', alt: 'Solterra Vineyard Views' },
      { src: '/images/solterra_5.jpg', alt: 'Solterra Outdoor Terrace' }
    ],
    awards: [],
    features: ['Tasting room', 'Production facility', 'Sustainable design', 'Vineyard views'],
    specifications: {
      architect: 'Brian Church Architecture',
      completion: '2013',
      photographer: 'Wine Country Photography'
    }
  },
  'sema4-live-work': {
    id: 'sema4-live-work',
    title: 'SEMA4 Live-Work',
    location: 'Encinitas, CA',
    year: '2012',
    type: 'Mixed-Use',
    size: '12,000 sq ft',
    description: 'An innovative mixed-use development combining residential and commercial spaces.',
    detailedDescription: 'SEMA4 represents the future of live-work environments, combining residential comfort with commercial functionality. The design creates flexible spaces that can adapt to changing needs, from quiet residential areas to active commercial zones. Sustainable features and community-focused design make this a model for urban infill development.',
    images: [
      { src: '/images/SEMA4-hero-03.jpg', alt: 'SEMA4 Exterior' },
      { src: '/images/SEMA4-2.jpg', alt: 'SEMA4 Live-Work Interior' },
      { src: '/images/SEMA4-3.jpg', alt: 'SEMA4 Commercial Space' },
      { src: '/images/SEMA4-4.jpg', alt: 'SEMA4 Residential Area' }
    ],
    awards: ['Concrete Masonry Design Award'],
    features: ['Live-work units', 'Mixed-use', 'Sustainable design', 'Community spaces'],
    specifications: {
      architect: 'Brian Church Architecture',
      completion: '2012',
      photographer: 'Urban Architecture Photography'
    }
  },
  'park-101': {
    id: 'park-101',
    title: 'Park 101',
    location: 'Carlsbad, CA',
    year: '2017',
    type: 'Commercial',
    size: '15,000 sq ft',
    description: 'A vibrant mixed-use development featuring retail and dining spaces.',
    detailedDescription: 'Park 101 creates a vibrant community hub that brings together retail, dining, and public spaces. The design emphasizes pedestrian-friendly environments with outdoor dining areas, retail storefronts, and community gathering spaces. The architecture reflects the casual coastal lifestyle while providing modern amenities and sustainable features.',
    images: [
      { src: '/images/Park1.jpg', alt: 'Park 101 Exterior' },
      { src: '/images/Park2.jpg', alt: 'Park 101 Retail Spaces' },
      { src: '/images/Park3.jpg', alt: 'Park 101 Dining Area' },
      { src: '/images/Park4.jpg', alt: 'Park 101 Community Space' }
    ],
    awards: [],
    features: ['Retail spaces', 'Dining areas', 'Community hub', 'Pedestrian-friendly'],
    specifications: {
      architect: 'Brian Church Architecture',
      completion: '2017',
      photographer: 'Commercial Architecture Photography'
    }
  },
  'church-house': {
    id: 'church-house',
    title: 'Church House',
    location: 'Del Mar, CA',
    year: '2016',
    type: 'Residential',
    size: '4,200 sq ft',
    description: 'A modern family home designed for indoor-outdoor coastal living.',
    detailedDescription: 'The Church House exemplifies modern coastal living with its emphasis on indoor-outdoor connections and natural light. Large sliding doors open completely to blur the boundaries between interior and exterior spaces. The design incorporates sustainable materials and energy-efficient systems while maintaining the comfort and functionality needed for family life.',
    images: [
      { src: '/images/church_1.jpg', alt: 'Church House Exterior' },
      { src: '/images/church_2.jpg', alt: 'Church House Interior' },
      { src: '/images/church_3.jpg', alt: 'Church House Living Area' }
    ],
    awards: [],
    features: ['4 bedrooms', 'Indoor-outdoor living', 'Modern design', 'Family-friendly'],
    specifications: {
      architect: 'Brian Church Architecture',
      completion: '2016',
      photographer: 'Residential Photography'
    }
  },
  'santa-fe-drive': {
    id: 'santa-fe-drive',
    title: 'Santa Fe Drive Residence',
    location: 'Encinitas, CA',
    year: '2015',
    type: 'Residential',
    size: '5,800 sq ft',
    description: 'A contemporary coastal home featuring clean lines and natural materials.',
    detailedDescription: 'The Santa Fe Drive Residence showcases contemporary coastal architecture with its clean lines, natural materials, and emphasis on outdoor living. The design creates multiple outdoor spaces for different activities while maintaining privacy and connection to the surrounding landscape. Interior spaces flow seamlessly from public to private areas.',
    images: [
      { src: '/images/santa_fe_1.jpg', alt: 'Santa Fe Drive Exterior' },
      { src: '/images/santa_fe_2.jpg', alt: 'Santa Fe Drive Pool Area' },
      { src: '/images/santa_fe_3.jpg', alt: 'Santa Fe Drive Interior' },
      { src: '/images/santa_fe_4.jpg', alt: 'Santa Fe Drive Kitchen' },
      { src: '/images/santa_fe_5.jpg', alt: 'Santa Fe Drive Outdoor Living' }
    ],
    awards: [],
    features: ['4 bedrooms', 'Pool', 'Contemporary design', 'Natural materials'],
    specifications: {
      architect: 'Brian Church Architecture',
      completion: '2015',
      photographer: 'Contemporary Architecture Photography'
    }
  },
  'coast-blvd': {
    id: 'coast-blvd',
    title: 'Coast Boulevard Residence',
    location: 'La Jolla, CA',
    year: '2014',
    type: 'Mixed-Use',
    size: '6,500 sq ft',
    description: 'A sophisticated mixed-use project combining residential and commercial elements.',
    detailedDescription: 'Coast Boulevard represents sophisticated urban living with its combination of residential and commercial spaces. The design maximizes the narrow urban lot while creating privacy and outdoor space. Ground-floor commercial space activates the street while upper-level residential areas provide quiet retreat from city life.',
    images: [
      { src: '/images/Coast1.jpg', alt: 'Coast Boulevard Exterior' },
      { src: '/images/Coast2.jpg', alt: 'Coast Boulevard Commercial' },
      { src: '/images/Coast3.jpg', alt: 'Coast Boulevard Residential' },
      { src: '/images/Coast4.jpg', alt: 'Coast Boulevard Interior' },
      { src: '/images/Coast5.jpg', alt: 'Coast Boulevard Rooftop' }
    ],
    awards: [],
    features: ['Mixed-use', 'Urban design', 'Commercial space', 'Residential units'],
    specifications: {
      architect: 'Brian Church Architecture',
      completion: '2014',
      photographer: 'Urban Architecture Photography'
    }
  },
  'moonlight-beach': {
    id: 'moonlight-beach',
    title: 'Moonlight Beach House',
    location: 'Encinitas, CA',
    year: '2014',
    type: 'Residential',
    size: '3,800 sq ft',
    description: 'A charming beach cottage featuring modern craftsman architecture.',
    detailedDescription: 'The Moonlight Beach House captures the essence of coastal cottage living with modern amenities and craftsman details. The design emphasizes natural materials, covered porches, and indoor-outdoor living spaces. Large family areas accommodate gatherings while private spaces provide quiet retreat.',
    images: [
      { src: '/images/moonlight (1).jpg', alt: 'Moonlight Beach House Exterior' },
      { src: '/images/moonlight (2).jpg', alt: 'Moonlight Beach House Interior' },
      { src: '/images/moonlight (3).jpg', alt: 'Moonlight Beach House Living' }
    ],
    awards: [],
    features: ['5 bedrooms', 'Modern craftsman', 'Beach cottage style', 'Large family home'],
    specifications: {
      architect: 'Brian Church Architecture',
      completion: '2014',
      photographer: 'Coastal Photography'
    }
  },
  'the-shack': {
    id: 'the-shack',
    title: 'The Shack',
    location: 'Solana Beach, CA',
    year: '2018',
    type: 'Commercial',
    size: '2,400 sq ft',
    description: 'Brian Church Architecture\'s office space featuring rustic coastal architecture.',
    detailedDescription: 'The Shack serves as Brian Church Architecture\'s office space, representing a perfect blend of casual coastal work environment and thoughtful architectural design. Located in Solana Beach, this project transformed a simple structure into an inspiring creative workspace. The design emphasizes indoor-outdoor work environments with large sliding doors that open completely to blur the boundaries between interior and exterior spaces.',
    images: [
      { src: '/images/shack1.jpg', alt: 'The Shack Office Exterior' },
      { src: '/images/shack2.jpg', alt: 'The Shack Office Interior' },
      { src: '/images/shack3.jpg', alt: 'The Shack Office Deck' },
      { src: '/images/shack4.jpg', alt: 'The Shack Office Workspace' },
      { src: '/images/shack5.jpg', alt: 'The Shack Office Meeting Area' }
    ],
    awards: [],
    features: ['Solana Beach location', 'Reclaimed materials', 'Indoor-outdoor workspace', 'Wraparound deck'],
    specifications: {
      architect: 'Brian Church Architecture',
      completion: '2018',
      photographer: 'Coastal Photography'
    }
  },
  'crest': {
    id: 'crest',
    title: 'Crest Residence',
    location: 'La Jolla, CA',
    year: '2023',
    type: 'Residential',
    size: '5,200 sq ft',
    description: 'A contemporary hillside residence featuring clean lines and expansive glass walls.',
    detailedDescription: 'The Crest Residence exemplifies modern coastal living with its dramatic hillside setting and contemporary design. Positioned to maximize canyon views while maintaining privacy, the home features floor-to-ceiling glass walls that create seamless connections between interior and exterior spaces.',
    images: [
      { src: '/images/crest mitgang  (1).jpg', alt: 'Crest Residence Exterior' },
      { src: '/images/crest mitgang  (2).jpg', alt: 'Crest Residence Pool' },
      { src: '/images/crest mitgang  (3).jpg', alt: 'Crest Residence Interior' },
      { src: '/images/crest mitgang  (4).jpg', alt: 'Crest Residence Kitchen' },
      { src: '/images/crest mitgang  (5).jpg', alt: 'Crest Residence Terrace' }
    ],
    awards: [],
    features: ['4 bedrooms', 'Infinity pool', 'Canyon views', 'Contemporary design'],
    specifications: {
      architect: 'Brian Church Architecture',
      completion: '2023',
      photographer: 'Modern Architecture Photography'
    }
  },
  'app': {
    id: 'app',
    title: 'App Residence',
    location: 'Solana Beach, CA',
    year: '2022',
    type: 'Residential',
    size: '4,800 sq ft',
    description: 'A modern coastal home designed for a tech entrepreneur.',
    detailedDescription: 'Designed for a technology entrepreneur, the App Residence seamlessly integrates cutting-edge smart home technology with coastal living. The home features flexible work spaces that can adapt to changing needs, from private offices to collaborative areas for team meetings.',
    images: [
      { src: '/images/app1.jpg', alt: 'App Residence Exterior' },
      { src: '/images/app2.jpg', alt: 'App Residence Office' },
      { src: '/images/app3.jpg', alt: 'App Residence Living Room' },
      { src: '/images/app4.jpg', alt: 'App Residence Kitchen' },
      { src: '/images/app5.jpg', alt: 'App Residence Deck' }
    ],
    awards: [],
    features: ['3 bedrooms', 'Home office', 'Smart home tech', 'Ocean views'],
    specifications: {
      architect: 'Brian Church Architecture',
      completion: '2022',
      photographer: 'Tech Architecture Photography'
    }
  },
  'stratford-sweeney': {
    id: 'stratford-sweeney',
    title: 'Stratford Sweeney Residence',
    location: 'Cardiff, CA',
    year: '2021',
    type: 'Residential',
    size: '6,400 sq ft',
    description: 'An elegant family compound featuring traditional coastal architecture.',
    detailedDescription: 'The Stratford Sweeney Residence creates a family compound that honors traditional coastal architecture while incorporating modern amenities and lifestyle needs. The design includes a main house and separate guest cottage, connected by beautifully landscaped courtyards.',
    images: [
      { src: '/images/stratford1.jpg', alt: 'Stratford Sweeney Main House' },
      { src: '/images/stratford2.jpg', alt: 'Stratford Sweeney Courtyard' },
      { src: '/images/stratford3.jpg', alt: 'Stratford Sweeney Guest Cottage' },
      { src: '/images/stratford4.jpg', alt: 'Stratford Sweeney Interior' },
      { src: '/images/stratford5.jpg', alt: 'Stratford Sweeney Garden' }
    ],
    awards: [],
    features: ['5 bedrooms', 'Guest cottage', 'Courtyards', 'Traditional coastal'],
    specifications: {
      architect: 'Brian Church Architecture',
      completion: '2021',
      photographer: 'Traditional Architecture Photography'
    }
  },
  'ocean-view': {
    id: 'ocean-view',
    title: 'Ocean View Residence',
    location: 'Encinitas, CA',
    year: '2020',
    type: 'Residential',
    size: '3,600 sq ft',
    description: 'A compact yet luxurious home maximizing ocean views from a narrow lot.',
    detailedDescription: 'The Ocean View Residence demonstrates how thoughtful design can maximize both space and views on a challenging narrow lot. The three-story design stacks living spaces vertically, with each level capturing different aspects of the ocean view.',
    images: [
      { src: '/images/oceanview1 (1).jpg', alt: 'Ocean View Residence Exterior' },
      { src: '/images/oceanview3.jpg', alt: 'Ocean View Residence Rooftop' },
      { src: '/images/oceanview4 (1).jpg', alt: 'Ocean View Residence Living' },
      { src: '/images/oceanview5.jpg', alt: 'Ocean View Residence Bedroom' },
      { src: '/images/oceanview6.jpg', alt: 'Ocean View Residence Kitchen' }
    ],
    awards: [],
    features: ['3 bedrooms', 'Rooftop deck', 'Ocean views', 'Narrow lot design'],
    specifications: {
      architect: 'Brian Church Architecture',
      completion: '2020',
      photographer: 'Coastal Views Photography'
    }
  },
  'varano': {
    id: 'varano',
    title: 'Varano Residence',
    location: 'Del Mar, CA',
    year: '2019',
    type: 'Residential',
    size: '7,800 sq ft',
    description: 'A grand coastal estate featuring Mediterranean-inspired architecture.',
    detailedDescription: 'The Varano Residence represents the pinnacle of coastal estate living, combining Mediterranean-inspired architecture with contemporary interior design. The grand scale of the home is balanced by intimate spaces and carefully planned sight lines that maintain connection to the landscape.',
    images: [
      { src: '/images/2004 Ocean Front exterior.jpg', alt: 'Varano Residence Exterior' },
      { src: '/images/2004 Ocean Front-interior.jpg', alt: 'Varano Residence Interior' }
    ],
    awards: [],
    features: ['6 bedrooms', 'Resort-style pool', 'Mediterranean style', 'Grand estate'],
    specifications: {
      architect: 'Brian Church Architecture',
      completion: '2019',
      photographer: 'Luxury Estate Photography'
    }
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [project, setProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (projectId && projectsData[projectId]) {
      setProject(projectsData[projectId]);
    }
  }, [projectId]);

  // Auto-scroll images every 5 seconds
  useEffect(() => {
    if (project && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [project]);

  const nextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 text-center">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Link to="/portfolio" className="text-primary hover:underline">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Floating Back Buttons */}
      <div className="fixed top-24 left-4 z-50 flex flex-col gap-2">
        <Link 
          to="/portfolio" 
          className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 flex items-center gap-2 text-sm font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Back to Portfolio</span>
        </Link>
        <Link 
          to="/" 
          className="bg-navy/90 backdrop-blur-sm hover:bg-navy text-white shadow-lg rounded-full p-3 transition-all duration-200 flex items-center gap-2 text-sm font-medium"
        >
          <MapPin className="h-4 w-4" />
          <span className="hidden sm:inline">Back to Map</span>
        </Link>
      </div>
      
      {/* Hero Section with Image Carousel */}
      <section className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8">
            <img 
              src={project.images[currentImageIndex]?.src} 
              alt={project.images[currentImageIndex]?.alt}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </div>
          
          {/* Project Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-gold text-navy">{project.type}</Badge>
                  <Badge variant="outline">{project.year}</Badge>
                  {project.awards.length > 0 && (
                    <Badge className="bg-navy text-white">
                      <Award className="h-3 w-3 mr-1" />
                      Award Winner
                    </Badge>
                  )}
                </div>
                <h1 className="text-4xl font-serif font-bold text-navy mb-4">{project.title}</h1>
                <div className="flex items-center text-muted-foreground mb-6">
                  <MapPin className="h-4 w-4 mr-2" />
                  {project.location}
                  <Calendar className="h-4 w-4 ml-6 mr-2" />
                  {project.year}
                  <Ruler className="h-4 w-4 ml-6 mr-2" />
                  {project.size}
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
                <p className="text-muted-foreground">{project.detailedDescription}</p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>
                  
                  {project.specifications && (
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="font-medium">Architect:</span>
                        <span className="ml-2 text-muted-foreground">{project.specifications.architect}</span>
                      </div>
                      <div>
                        <span className="font-medium">Completion:</span>
                        <span className="ml-2 text-muted-foreground">{project.specifications.completion}</span>
                      </div>
                      {project.specifications.photographer && (
                        <div>
                          <span className="font-medium">Photography:</span>
                          <span className="ml-2 text-muted-foreground">{project.specifications.photographer}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {project.features.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, index) => (
                          <Badge key={index} variant="secondary">{feature}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.awards.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-3">Awards</h4>
                      <div className="space-y-2">
                        {project.awards.map((award, index) => (
                          <div key={index} className="flex items-center">
                            <Award className="h-4 w-4 text-gold mr-2" />
                            <span className="text-sm">{award}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;