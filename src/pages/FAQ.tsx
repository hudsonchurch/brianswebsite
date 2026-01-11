import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  MessageCircle,
  Phone,
  Mail
} from "lucide-react";

const FAQ = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "How do I begin the architectural design process?",
          answer: "The process begins with an initial consultation where we discuss your vision, budget, timeline, and site requirements. We'll visit your property, understand your lifestyle needs, and explain our design process. This meeting helps us determine if we're a good fit for your project and allows you to ask any questions about our approach."
        },
        {
          question: "What should I prepare for our first meeting?",
          answer: "Bring any inspiration images, sketches, or ideas you have for your project. If you have a survey of your property, existing plans, or any relevant documents, those are helpful too. Most importantly, come prepared to discuss your budget range, timeline, and how you envision using the space."
        },
        {
          question: "Do you work on projects outside of San Diego County?",
          answer: "While our primary focus is San Diego County's coastal communities, we do take on select projects throughout Southern California. For projects outside our immediate area, we evaluate each opportunity based on the project scope, our availability, and the client's commitment to our design process."
        }
      ]
    },
    {
      title: "Design Process",
      faqs: [
        {
          question: "How long does the design process typically take?",
          answer: "The design process varies depending on project complexity, but typically takes 3-6 months for residential projects. This includes schematic design (4-6 weeks), design development (4-6 weeks), and construction documents (6-10 weeks). Commercial projects may take longer depending on their complexity and regulatory requirements."
        },
        {
          question: "How involved will I be in the design process?",
          answer: "We believe in collaborative design and will involve you at every major milestone. You'll review and approve each phase before we proceed to the next. We schedule regular meetings and provide multiple opportunities for feedback and refinement throughout the process."
        },
        {
          question: "Can you work with my existing contractor?",
          answer: "Absolutely! We're happy to work with contractors you trust. We do recommend that your contractor has experience with custom residential or commercial construction and is comfortable working from detailed architectural drawings. We can also recommend contractors from our network of trusted partners."
        },
        {
          question: "What if I want to make changes during design?",
          answer: "Changes are a normal part of the design process, especially in the early phases. We build in time for revisions at each phase. However, significant changes late in the process may affect timeline and fees, which we'll discuss with you before proceeding."
        }
      ]
    },
    {
      title: "Costs & Fees",
      faqs: [
        {
          question: "How do you structure your fees?",
          answer: "Our fees are typically structured as a percentage of construction cost, ranging from 10-15% depending on project complexity and scope of services. For smaller projects or specific services, we may propose a fixed fee. We provide detailed fee proposals after our initial consultation."
        },
        {
          question: "What's included in your architectural services?",
          answer: "Our full service includes programming, schematic design, design development, construction documents, permit assistance, and construction administration. We also coordinate with structural engineers, landscape architects, and other consultants as needed for your project."
        },
        {
          question: "Do you help with construction budgeting?",
          answer: "Yes, we provide construction cost estimates at each design phase and work closely with contractors to ensure your project stays within budget. Our experience with local construction costs helps us design efficiently and avoid costly surprises during construction."
        },
        {
          question: "What are typical construction costs for coastal homes?",
          answer: "Construction costs vary widely based on size, complexity, finishes, and site conditions. In our coastal markets, custom homes typically range from $400-800+ per square foot. We'll discuss realistic budget expectations during our initial consultation based on your specific goals."
        }
      ]
    },
    {
      title: "Permits & Regulations",
      faqs: [
        {
          question: "Do you handle the permit process?",
          answer: "Yes, we prepare all necessary drawings for permit submission and can assist with the permit application process. We're familiar with local building departments and can help navigate any issues that arise during plan review."
        },
        {
          question: "How long does it take to get permits?",
          answer: "Permit timelines vary by jurisdiction and project complexity. Simple residential projects may take 6-12 weeks, while more complex projects or those requiring Coastal Commission review can take 6-12 months or longer. We'll provide realistic timeline expectations based on your specific project and location."
        },
        {
          question: "What about Coastal Commission requirements?",
          answer: "Many coastal projects require Coastal Development Permits. We're experienced in working with the California Coastal Commission and local coastal programs. We'll identify these requirements early in the process and help navigate the approval process."
        },
        {
          question: "Can you help with HOA or design review approvals?",
          answer: "Yes, we regularly work with homeowners associations and design review boards. We understand their requirements and can prepare presentations and materials needed for approval. Our experience helps streamline this process."
        }
      ]
    },
    {
      title: "Construction",
      faqs: [
        {
          question: "Do you provide construction services?",
          answer: "We are an architectural firm and do not provide construction services. However, we offer construction administration services, which include reviewing contractor submittals, answering questions during construction, and conducting site visits to ensure the work matches our design intent."
        },
        {
          question: "How do you ensure quality during construction?",
          answer: "Through our construction administration services, we review contractor submittals, respond to questions, and conduct regular site visits. We work closely with your contractor to resolve any issues and ensure the finished project meets our design standards and your expectations."
        },
        {
          question: "What if problems arise during construction?",
          answer: "Construction challenges are not uncommon, especially in coastal environments. We're available to help resolve issues, provide clarifications, and make necessary adjustments to ensure successful project completion. Our experience helps anticipate and avoid many common problems."
        },
        {
          question: "How long does construction typically take?",
          answer: "Construction timelines depend on project size and complexity. Custom homes typically take 12-18 months, while major remodels may take 6-12 months. Weather, permit modifications, and change orders can affect these timelines. We work with contractors to establish realistic schedules."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <HelpCircle className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-foreground">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our architectural services, design process, 
              and what to expect when working with Brian Church Architecture.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-foreground">{category.title}</h2>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <Card key={faqIndex} className="overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full text-left p-6 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-foreground pr-4">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <CardContent className="px-6 pb-6 pt-0">
                          <div className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Still Have Questions?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're here to help! Reach out to us directly and we'll be happy to discuss your project.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground text-sm">(858) 793-3437</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm">info@brianchurcharchitecture.com</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Schedule Consultation</h3>
              <p className="text-muted-foreground text-sm">Free initial meeting</p>
            </Card>
          </div>
          
          <Link to="/contact">
            <Button size="lg" className="px-8">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;