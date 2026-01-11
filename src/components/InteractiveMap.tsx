import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState('office');

  const locations = {
    office: {
      name: "Brian Church Architecture Office",
      address: "507 S. Cedros Ave, Solana Beach, CA 92075",
      phone: "(858) 555-0123",
      hours: "Monday - Friday: 8:00 AM - 6:00 PM",
      description: "Our main office and design studio",
      coordinates: { lat: 32.9911, lng: -117.2712 }
    },
    projects: [
      {
        id: 'heather-lane',
        name: "Heather Lane Residence",
        address: "Del Mar, CA",
        type: "Residential",
        year: "2017",
        coordinates: { lat: 32.9595, lng: -117.2653 }
      },
      {
        id: 'solterra',
        name: "Solterra Winery", 
        address: "Leucadia, CA",
        type: "Commercial",
        year: "2013",
        coordinates: { lat: 33.0614, lng: -117.2931 }
      },
      {
        id: 'sema4',
        name: "SEMA4 Live-Work",
        address: "Encinitas, CA", 
        type: "Mixed-Use",
        year: "2012",
        coordinates: { lat: 33.0370, lng: -117.2920 }
      },
      {
        id: 'park101',
        name: "Park 101",
        address: "Carlsbad, CA",
        type: "Commercial", 
        year: "2017",
        coordinates: { lat: 33.1581, lng: -117.3506 }
      }
    ]
  };

  return (
    <div className="w-full">
      {/* Map Container */}
      <div className="relative bg-muted/30 rounded-lg overflow-hidden" style={{ height: '500px' }}>
        {/* Embedded Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.8234567890123!2d-117.2712!3d32.9911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDU5JzI4LjAiTiAxMTfCsDE2JzE2LjMiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&zoom=11"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Brian Church Architecture Locations"
        />
        
        {/* Map Overlay with Location Info */}
        <div className="absolute top-4 left-4 right-4 z-10">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">{locations.office.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{locations.office.address}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Phone className="h-3 w-3" />
                  <span>{locations.office.phone}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{locations.office.hours}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Project Locations */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-6 text-foreground">Our Project Locations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="text-xs">{project.type}</Badge>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h4 className="font-semibold text-sm mb-1">{project.name}</h4>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{project.address}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Directions */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Navigation className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Getting Here</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>From I-5 North:</strong> Take Via de la Valle exit, turn right on Cedros Ave</p>
              <p><strong>From I-5 South:</strong> Take Lomas Santa Fe exit, turn left on Cedros Ave</p>
              <p><strong>Parking:</strong> Street parking available on Cedros Ave and surrounding streets</p>
              <p><strong>Public Transit:</strong> Coaster train station within walking distance</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• <strong>Primary:</strong> Del Mar, Solana Beach, Encinitas, Carlsbad</p>
              <p>• <strong>Secondary:</strong> La Jolla, Rancho Santa Fe, Leucadia</p>
              <p>• <strong>Extended:</strong> Throughout San Diego County</p>
              <p>• <strong>Special Projects:</strong> Southern California coastal communities</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InteractiveMap;