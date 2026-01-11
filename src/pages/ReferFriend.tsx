import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  DollarSign, 
  Users, 
  Handshake, 
  Gift,
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react";

const ReferFriend = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    referrerPhone: '',
    friendName: '',
    friendEmail: '',
    friendPhone: '',
    projectDetails: '',
    howYouKnow: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.referrerName || !formData.referrerEmail || !formData.friendName || !formData.friendEmail) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('contact_form_handler_2025_11_25_18_15', {
        body: {
          firstName: formData.referrerName,
          lastName: 'Referral',
          email: formData.referrerEmail,
          phone: formData.referrerPhone,
          projectType: 'Friend Referral',
          location: 'Referral Program',
          budget: '$500 Referral Reward',
          timeline: 'Immediate',
          message: `FRIEND REFERRAL SUBMISSION:
          
Referrer Details:
Name: ${formData.referrerName}
Email: ${formData.referrerEmail}
Phone: ${formData.referrerPhone}

Friend Details:
Name: ${formData.friendName}
Email: ${formData.friendEmail}
Phone: ${formData.friendPhone}

Project Details: ${formData.projectDetails}
How they know each other: ${formData.howYouKnow}

REFERRAL REWARD: $500 total ($250 for meeting + $250 if they hire us)`
        }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Referral Submitted Successfully!",
        description: "Thank you for the referral! We'll contact your friend within 24 hours and keep you updated on your reward status.",
      });

      // Reset form
      setFormData({
        referrerName: '',
        referrerEmail: '',
        referrerPhone: '',
        friendName: '',
        friendEmail: '',
        friendPhone: '',
        projectDetails: '',
        howYouKnow: ''
      });

    } catch (error) {
      console.error('Referral submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your referral. Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      icon: Users,
      title: "Refer Your Friend",
      description: "Know someone planning an architectural project? Tell us about them!"
    },
    {
      icon: Handshake,
      title: "We Meet Them",
      description: "We'll schedule a consultation with your friend within 48 hours."
    },
    {
      icon: DollarSign,
      title: "You Get $250",
      description: "Earn $250 when your friend meets with us for their project consultation."
    },
    {
      icon: Gift,
      title: "Bonus $250",
      description: "Get an additional $250 when your friend hires us for their project!"
    }
  ];

  const benefits = [
    "Help friends get exceptional architectural design",
    "Earn up to $500 per successful referral",
    "No limit on the number of referrals",
    "Fast payment within 30 days of milestones",
    "Support local architectural excellence"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <DollarSign className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-foreground">Refer a Friend, Earn $500</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Know someone planning their dream home or commercial project? Refer them to Brian Church Architecture 
              and earn cash rewards while helping them get exceptional design.
            </p>
          </div>
          
          {/* Reward Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8 border-2 border-primary/20">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">$250</h3>
              <p className="text-muted-foreground">When your friend meets with us for a consultation</p>
            </Card>
            
            <Card className="text-center p-8 border-2 border-primary/20">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">$250</h3>
              <p className="text-muted-foreground">When your friend hires us for their project</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our referral process is simple and rewarding. Here's how you can start earning today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="bg-primary text-white w-8 h-8 rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Submit Your Referral</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below to refer your friend and start earning your reward.
            </p>
          </div>
          
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Your Information */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Your Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="referrerName">Your Name *</Label>
                      <Input 
                        id="referrerName" 
                        name="referrerName"
                        value={formData.referrerName}
                        onChange={handleInputChange}
                        placeholder="John Doe" 
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="referrerEmail">Your Email *</Label>
                      <Input 
                        id="referrerEmail" 
                        name="referrerEmail"
                        type="email" 
                        value={formData.referrerEmail}
                        onChange={handleInputChange}
                        placeholder="john@example.com" 
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="referrerPhone">Your Phone</Label>
                    <Input 
                      id="referrerPhone" 
                      name="referrerPhone"
                      type="tel" 
                      value={formData.referrerPhone}
                      onChange={handleInputChange}
                      placeholder="(858) 793-3437"
                    />
                  </div>
                </div>

                {/* Friend's Information */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Your Friend's Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="friendName">Friend's Name *</Label>
                      <Input 
                        id="friendName" 
                        name="friendName"
                        value={formData.friendName}
                        onChange={handleInputChange}
                        placeholder="Jane Smith" 
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="friendEmail">Friend's Email *</Label>
                      <Input 
                        id="friendEmail" 
                        name="friendEmail"
                        type="email" 
                        value={formData.friendEmail}
                        onChange={handleInputChange}
                        placeholder="jane@example.com" 
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="friendPhone">Friend's Phone</Label>
                    <Input 
                      id="friendPhone" 
                      name="friendPhone"
                      type="tel" 
                      value={formData.friendPhone}
                      onChange={handleInputChange}
                      placeholder="(858) 555-0456" 
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="projectDetails">Tell us about their project</Label>
                      <Textarea 
                        id="projectDetails" 
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        placeholder="What type of project are they planning? New home, remodel, commercial space, etc."
                        rows={4}
                      />
                    </div>
                    <div>
                      <Label htmlFor="howYouKnow">How do you know them?</Label>
                      <Input 
                        id="howYouKnow" 
                        name="howYouKnow"
                        value={formData.howYouKnow}
                        onChange={handleInputChange}
                        placeholder="Friend, family member, colleague, neighbor, etc." 
                      />
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting Referral...' : 'Submit Referral & Earn $500'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Why Refer to Brian Church Architecture?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Award-Winning Design</h3>
                <p className="text-muted-foreground mb-6">
                  Your friends will work with a firm that has won 15+ architectural awards and 
                  has 35+ years of experience creating exceptional coastal homes and commercial spaces.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Awards Won</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">35+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferFriend;