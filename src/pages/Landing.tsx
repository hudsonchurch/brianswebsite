import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Phone, 
  Star, 
  Award, 
  CheckCircle,
  ArrowRight,
  Menu,
  X
} from "lucide-react";

const Landing = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    service: '',
    address: '',
    name: '',
    email: '',
    phone: '',
    agreeToTerms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.service || !formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to our terms and conditions.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('contact_form_handler_2025_11_25_18_15', {
        body: {
          firstName: formData.name,
          lastName: 'Landing Page Lead',
          email: formData.email,
          phone: formData.phone,
          projectType: formData.service,
          location: formData.address || 'Not specified',
          budget: 'To be discussed',
          timeline: 'ASAP - Free Consultation',
          message: `FREE DESIGN CONSULTATION REQUEST:
          
Service Requested: ${formData.service}
Property Address: ${formData.address}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

This is a lead from the landing page requesting a free design consultation.`
        }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Consultation Scheduled!",
        description: "Thank you! We'll contact you within 24 hours to schedule your free design consultation.",
      });

      // Reset form
      setFormData({
        service: '',
        address: '',
        name: '',
        email: '',
        phone: '',
        agreeToTerms: false
      });

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please call us directly at (858) 793-3437.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const navItems = [
    { name: "Services", path: "/#/services" },
    { name: "Portfolio", path: "/#/portfolio" },
    { name: "About", path: "/#/about" },
    { name: "Press", path: "/#/news" },
    { name: "Awards", path: "/#/about" },
    { name: "Contact", path: "/#/contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="bg-slate-900 text-white relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">BRIAN CHURCH ARCHITECTURE</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-white hover:text-blue-300 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            
            {/* Phone CTA */}
            <div className="hidden md:flex">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="h-4 w-4 mr-2" />
                (858) 793-3437
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-blue-300"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="block px-3 py-2 text-white hover:text-blue-300 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-3 py-2">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    (858) 793-3437
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/Heather-Lane-1.jpg')`
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Left Content */}
            <div className="text-white">
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Award className="h-4 w-4 mr-2 text-yellow-400" />
                  <span className="text-sm font-medium">Award-Winning Coastal Architecture</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.9-Star Design Excellence</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">20+ Years of Experience</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">AIA Honor Awards</span>
                </div>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                #1 Choice for Custom<br />
                <span className="text-blue-400">Coastal Architecture</span><br />
                in San Diego
              </h1>
              
              {/* Supporting Text */}
              <p className="text-xl mb-8 text-white/90 max-w-2xl">
                With over 35 years in the architecture industry, our team is ready to bring your vision to life. 
                We know you will be thrilled with the finished design.
              </p>
              
              {/* Key Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-lg">Custom Homes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-lg">Remodels & Additions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-lg">Mixed-Use Development</span>
                </div>
              </div>
            </div>
            
            {/* Right Form */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Schedule your FREE Design Consultation Today!
              </h2>
              <p className="text-gray-600 mb-6">
                Get expert architectural guidance for your coastal project
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="service" className="text-gray-700">Choose Service *</Label>
                  <Select value={formData.service} onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="New Custom Home">New Custom Home</SelectItem>
                      <SelectItem value="Major Remodel">Major Remodel</SelectItem>
                      <SelectItem value="Addition/Extension">Addition/Extension</SelectItem>
                      <SelectItem value="Commercial Project">Commercial Project</SelectItem>
                      <SelectItem value="Site Evaluation">Site Evaluation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="address" className="text-gray-700">Enter Property Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Ocean View Dr, Del Mar, CA"
                    className="bg-white"
                  />
                </div>
                
                <div>
                  <Label htmlFor="name" className="text-gray-700">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="bg-white"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-700">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="bg-white"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-gray-700">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(858) 793-3437"
                    className="bg-white"
                    required
                  />
                </div>
                
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                  <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                    All design consultations are complimentary. By requesting a consultation, 
                    you agree to our terms and conditions and privacy policy.
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Scheduling...' : 'SCHEDULE FREE CONSULTATION'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              
              {/* Additional Trust Signals */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1 text-yellow-500" />
                    <span>AIA San Diego Honor Award</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex mr-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span>2023 Design Excellence</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1 text-yellow-500" />
                    <span>Western Red Cedar Merit Award</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* As Seen In Section */}
      <section className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-6">As seen in</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
              <span className="text-lg font-medium">San Diego Magazine</span>
              <span className="text-lg font-medium">Modern Luxury</span>
              <span className="text-lg font-medium">Riviera San Diego</span>
              <span className="text-lg font-medium">Ranch & Coast</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;