import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import InteractiveMap from "@/components/InteractiveMap";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Award,
  Users,
  Building,
  Loader2
} from "lucide-react";

const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: [
        "507 S. Cedros Ave",
        "Solana Beach, CA 92075"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "(858) 793-3437"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@brianchurcharchitecture.com",
        "brian@brianchurcharchitecture.com"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: By appointment",
        "Sunday: Closed"
      ]
    }
  ];

  const projectTypes = [
    {
      icon: Building,
      title: "Custom Homes",
      description: "New construction coastal residences"
    },
    {
      icon: Users,
      title: "Remodels",
      description: "Renovations and additions"
    },
    {
      icon: Award,
      title: "Commercial",
      description: "Restaurants, wineries, retail spaces"
    }
  ];

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    budget: '',
    timeline: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email address.",
        variant: "destructive"
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Call the Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('contact_form_handler_2025_11_25_18_15', {
        body: formData
      });

      if (error) {
        throw error;
      }

      // Success!
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        projectType: '',
        location: '',
        budget: '',
        timeline: '',
        message: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Let's Create Together</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your architectural journey? We'd love to hear about your vision 
              and discuss how we can bring it to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Start Your Project</h2>
                <p className="text-muted-foreground mb-8">
                  Tell us about your project and we'll get back to you within 24 hours to schedule 
                  an initial consultation.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John" 
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(858) 793-3437"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="projectType">Project Type</Label>
                    <select 
                      id="projectType" 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select project type</option>
                      <option value="Custom Home">Custom Home</option>
                      <option value="Remodel/Addition">Remodel/Addition</option>
                      <option value="Commercial Project">Commercial Project</option>
                      <option value="Mixed-Use Development">Mixed-Use Development</option>
                      <option value="Design Consultation">Design Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="location">Project Location</Label>
                    <Input 
                      id="location" 
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Del Mar, CA" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="budget">Estimated Budget Range</Label>
                    <select 
                      id="budget" 
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $500K">Under $500K</option>
                      <option value="$500K - $1M">$500K - $1M</option>
                      <option value="$1M - $2M">$1M - $2M</option>
                      <option value="$2M - $5M">$2M - $5M</option>
                      <option value="Over $5M">Over $5M</option>
                      <option value="Just exploring options">Just exploring options</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="timeline">Desired Timeline</Label>
                    <Input 
                      id="timeline" 
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      placeholder="e.g., Start construction in 2025" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Project Description</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your vision, site details, and any specific requirements..."
                      rows={5}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Get In Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Located in the heart of Solana Beach, we're perfectly positioned to serve 
                  San Diego County's coastal communities. Our studio, affectionately known as 
                  "The Shack," reflects our casual coastal vibe and creative approach.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2 text-foreground">{info.title}</h3>
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Project Types */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">We Specialize In</h3>
                <div className="space-y-4">
                  {projectTypes.map((type, index) => {
                    const Icon = type.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-primary" />
                        <div>
                          <span className="font-medium text-foreground">{type.title}</span>
                          <span className="text-muted-foreground ml-2">- {type.description}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about working with Brian Church Architecture
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on scope and complexity. A custom home typically takes 12-18 months from initial design through construction completion. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you handle permit processing?",
                answer: "Yes, we have extensive experience with coastal development regulations and handle all permit processing. Our knowledge of local design review boards helps ensure smooth approvals."
              },
              {
                question: "What are your design fees?",
                answer: "Design fees typically range from 10-15% of construction cost, depending on project scope and complexity. We provide detailed fee proposals after our initial consultation."
              },
              {
                question: "Do you work outside of San Diego County?",
                answer: "While we primarily serve San Diego County's coastal communities, we occasionally take on select projects in other locations. Contact us to discuss your specific project."
              },
              {
                question: "What makes your firm different?",
                answer: "Our unique combination of architectural design expertise and development experience, plus our deep knowledge of coastal regulations, sets us apart. We provide personalized service with principal involvement in every project."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Every great project starts with a conversation. Let's discuss your vision 
            and explore how we can create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Call (858) 793-3437
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Visit Our Studio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Solana Beach, our studio is easily accessible and surrounded 
              by examples of our coastal architecture work.
            </p>
          </div>
          
          <InteractiveMap />
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

export default Contact;