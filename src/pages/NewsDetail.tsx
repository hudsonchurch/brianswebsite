import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  User
} from "lucide-react";

const NewsDetail = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { articleId } = useParams();

  // All blog posts with complete content
  const blogPosts = [
    {
      id: 'coastal-design-trends-2024',
      title: "Coastal Design Trends Shaping 2024",
      excerpt: "As we move through 2024, coastal architecture continues to evolve, reflecting our changing relationship with the ocean, sustainability concerns, and the way we live in these unique environments.",
      content: `As we move through 2024, coastal architecture continues to evolve, reflecting our changing relationship with the ocean, sustainability concerns, and the way we live in these unique environments. Having spent over two decades designing homes along various coastlines, I've witnessed firsthand how these trends aren't just aesthetic choices—they're responses to real challenges and opportunities that coastal living presents.

### The Rise of Adaptive Resilience

Climate change isn't a future concern for coastal homeowners—it's a present reality. This year, we're seeing a significant shift from simply building "to code" toward designing homes that can adapt to changing conditions. This means elevated foundations that exceed current flood zone requirements, breakaway walls in vulnerable areas, and landscaping that serves as both aesthetic enhancement and storm surge protection.

One of our recent projects in Carlsbad incorporated a tiered deck system that can be easily modified as sea levels change, while the home's mechanical systems are positioned well above projected flood levels for the next 50 years. This isn't fear-based design—it's intelligent, forward-thinking architecture that protects investments and provides peace of mind.

### Sustainable Materials Take Center Stage

The days of choosing materials purely for aesthetics are behind us. Today's coastal homeowners want to know where their materials come from, how they're produced, and how they'll perform in harsh marine environments. We're specifying more reclaimed wood, recycled composite decking, and locally-sourced stone than ever before.

Particularly exciting is the advancement in sustainable concrete alternatives and bio-based insulation materials that perform exceptionally well in humid, salt-laden air. These materials don't just reduce environmental impact—they often outperform traditional options in durability and maintenance requirements.

### Indoor-Outdoor Living Reaches New Heights

While indoor-outdoor living has been a coastal staple for years, 2024 has seen this concept mature into something far more sophisticated. We're designing pocket door systems that disappear entirely, creating 40-foot openings between living spaces and ocean-facing decks. Covered outdoor kitchens now rival their indoor counterparts in functionality, with weather-resistant appliances and smart technology integration.

The key is creating seamless transitions that make it feel as natural to be outside as inside. This includes matching floor levels precisely, using consistent flooring materials that transition from interior to exterior, and designing roof overhangs that protect outdoor spaces without blocking views or natural light.

### Minimalist Coastal Aesthetics

There's a notable shift away from the heavy, ornate "beach mansion" look toward cleaner, more minimalist designs that let the coastal environment take center stage. This doesn't mean cold or sterile—rather, it's about intentional design choices where every element serves a purpose.

We're seeing flat or low-slope roofs with dramatic overhangs, large expanses of glass with minimal framing, and restrained material palettes that highlight natural textures. White oak, concrete, steel, and glass dominate, often punctuated by a single bold accent material like weathered copper or blackened steel.

### Smart Home Integration

Coastal homes are increasingly incorporating intelligent systems that go beyond basic automation. We're installing weather monitoring systems that automatically close hurricane shutters or retract awnings when wind speeds increase. Moisture sensors alert homeowners to potential leaks before they become problems. Smart glass technology adjusts tinting based on sun position, reducing cooling loads while maintaining views.

The goal isn't technology for its own sake—it's using innovation to make coastal living more comfortable, secure, and efficient.

### Wellness-Focused Spaces

Perhaps the most significant trend is the intentional design of spaces that promote mental and physical well-being. This goes beyond yoga rooms or home gyms. We're creating meditation spaces with carefully framed ocean views, outdoor showers that connect residents to the elements, and circulation paths that encourage movement throughout the home.

Natural ventilation strategies that maximize ocean breezes, circadian lighting systems that align with natural rhythms, and biophilic design elements that strengthen our connection to nature—these aren't luxuries, they're fundamental to how we approach coastal residential design in 2024.

### Looking Forward

As I work with clients on their coastal homes, I'm energized by how these trends reflect a more thoughtful, responsible approach to building at the water's edge. We're not just creating beautiful spaces—we're designing homes that will serve families for generations while respecting and preserving the coastal environments we all treasure.

The most successful projects I've seen this year are those where clients and architects work together to balance these trends with personal needs and site-specific conditions. After all, the best coastal architecture isn't about following trends—it's about creating homes that enhance how you live while honoring the extraordinary privilege of calling the coast home.`,
      author: "Brian Church",
      date: "2024-11-19",
      readTime: "5 min read",
      category: "Design Trends",
      image: "/images/Heather-Lane-1.jpg"
    },
    {
      id: 'solterra-winery-award',
      title: "Solterra Winery Wins Concrete Masonry Award",
      excerpt: "Our Solterra Winery project in Leucadia has received the prestigious Concrete Masonry Award, recognizing innovative use of concrete masonry in commercial architecture.",
      content: `We're thrilled to announce that our Solterra Winery project in Leucadia has received the prestigious Concrete Masonry Award, recognizing innovative use of concrete masonry in commercial architecture. This project represents a significant milestone in our firm's exploration of adaptive reuse and sustainable design strategies for coastal communities.

### The Challenge

When Solterra Winery approached us about transforming a neglected 1970s warehouse into their flagship tasting room and production facility, many architects might have recommended demolition. The existing structure was unremarkable—a basic concrete block building that had housed various light industrial uses over the decades. But we saw opportunity where others saw limitation.

The challenge was clear: how do we honor the building's industrial heritage while creating a warm, inviting space that celebrates wine culture and showcases the coastal landscape? The answer lay in embracing, rather than disguising, the concrete masonry construction.

### Our Approach

We developed a design strategy that celebrated the existing concrete masonry as a primary architectural element. Rather than covering the walls with finishes, we treated and sealed the concrete blocks, allowing their texture and authentic weathered character to become a defining aesthetic feature.

New concrete masonry elements were added to create entries, frame views, and define spaces, but we used a contrasting lighter-colored unit that clearly distinguishes new from old. This honest approach to materiality creates a rich dialogue between past and present.

The exterior received the most dramatic transformation. We selectively removed sections of wall to create large openings, installed a new wood-clad upper volume that appears to float above the masonry base, and added strategic exterior lighting that transforms the textured concrete surfaces into a glowing lantern at night.

### Sustainability Through Adaptive Reuse

This project exemplifies our commitment to sustainable design. By preserving and repurposing the existing structure, we avoided the massive carbon footprint of demolition and new construction. The concrete masonry's thermal mass helps moderate interior temperatures in our Mediterranean climate, reducing cooling loads significantly.

We also incorporated:
- A green roof system on the new upper volume
- Reclaimed wood from local sources for interior finishes
- Passive ventilation strategies that take advantage of coastal breezes
- Native landscaping that requires minimal irrigation

### Creating Community Space

Beyond the technical achievement, what makes us most proud is how Solterra Winery has become a community gathering place. The outdoor courtyard, defined by the preserved concrete masonry walls, hosts concerts, art shows, and farmers markets. The building's industrial character provides an authentic backdrop that resonates with visitors seeking genuine experiences.

### Recognition and Impact

The Concrete Masonry Award judges particularly noted our project's demonstration that concrete masonry—often perceived as purely utilitarian—can be the foundation for sophisticated, beautiful design. Their comments highlighted how we "transformed a limitation into an asset" and "proved that sustainable design and architectural excellence are inseparable."

This recognition validates an approach we've advocated for years: that adaptive reuse isn't a compromise, it's an opportunity. The most sustainable building is often the one that already exists. Our role as architects is to see the potential in these structures and unlock their next chapter.

### A Model for Future Projects

As coastal communities grapple with development pressure and sustainability concerns, projects like Solterra Winery demonstrate a path forward. We don't always need to build new—sometimes the most innovative solution is breathing new life into what's already there.

We're grateful to the Concrete Masonry Association for this recognition, to our client for trusting our vision, and to the Leucadia community for embracing this project. This award belongs to everyone who believed that the old warehouse could become something special.`,
      author: "Brian Church",
      date: "2024-11-14",
      readTime: "3 min read",
      category: "Awards",
      image: "/images/solterra_1.jpg"
    },
    {
      id: 'sustainable-coastal-building',
      title: "Building Sustainably on the Coast: Challenges and Solutions",
      excerpt: "Coastal construction presents unique sustainability challenges that require architects to think differently about material selection, building systems, and long-term resilience.",
      content: `Coastal construction presents unique sustainability challenges that require architects to think differently about material selection, building systems, and long-term resilience. After three decades of designing buildings at the water's edge, I've learned that sustainable coastal architecture isn't just about reducing environmental impact—it's about creating buildings that can withstand harsh conditions while minimizing their ecological footprint over decades of use.

### The Unique Challenge of Coastal Environments

Building sustainably anywhere requires careful consideration, but coastal locations add layers of complexity that can make or break a project's long-term success. Salt-laden air corrodes standard materials at accelerated rates. High humidity promotes mold growth and wood rot. Storm events test structural systems to their limits. And increasingly, rising seas and intensifying weather patterns demand we design for conditions that exceed historical norms.

The irony is that many "green" building materials and strategies that work beautifully inland fail rapidly in coastal zones. That bamboo flooring? It'll warp within two years in high humidity. Those recycled paper-based insulation products? They'll become moldy and ineffective in damp coastal walls. The lesson: sustainability at the coast requires a different playbook.

### Material Selection: Durability Equals Sustainability

The most sustainable material is one you never have to replace. This principle guides all our coastal material selections. We prioritize:

**Stainless Steel and Specialized Alloys:** Standard galvanized fasteners and hardware fail rapidly in marine environments. We specify 316-grade stainless steel for all exterior applications, and increasingly for interior applications near openings. Yes, it costs more initially, but the lifecycle cost is dramatically lower.

**Fiber Cement and Masonry:** While wood siding has aesthetic appeal, it requires constant maintenance in coastal zones. Fiber cement products and masonry offer excellent durability with minimal maintenance. We've developed details that make these materials work in contemporary designs without looking institutional.

**Specialized Coatings and Sealants:** Every surface exposed to salt air needs protection. We use marine-grade coatings typically reserved for boats and offshore structures. These products cost 2-3 times more than standard paints, but they last 3-5 times longer with better performance throughout their lifespan.

**Aluminum Windows and Doors:** Properly specified aluminum window and door systems significantly outperform vinyl or wood in coastal zones. Modern thermally-broken aluminum systems rival wood in energy performance while offering superior longevity.

### Managing Water: The Make-or-Break Issue

Water management is perhaps the single most critical aspect of sustainable coastal construction. We're dealing with:
- Wind-driven rain that finds every weakness in the building envelope
- High humidity year-round that prevents materials from fully drying
- Occasional storm surge or flooding events
- Condensation issues from heavy air conditioning use

Our approach involves multiple defense layers:

**Proper Drainage Planes:** Every wall assembly includes a clear drainage plane behind the exterior finish. Water that penetrates the outer layer must have a path to drain out rather than accumulating in wall cavities.

**Vapor Management:** Coastal walls need to dry to the exterior, so we carefully specify vapor-permeable barriers on the exterior side while managing interior moisture sources. This is opposite of what works in cold climates, and getting it wrong leads to catastrophic wall failures.

**Elevated Construction:** We recommend elevating habitable spaces above projected flood levels, even when not required by code. This creates a buffer zone that protects the main structure while providing flexible utility and storage space below.

**Comprehensive Drainage Systems:** French drains, proper grading, and robust gutter systems aren't afterthoughts—they're primary building elements we design carefully from the start.

### Energy Efficiency with Humidity Control

Coastal buildings face a unique energy challenge: they need significant dehumidification along with cooling. Simply super-insulating a coastal building without addressing humidity can create conditions for mold growth and occupant discomfort.

Our solution is a balanced approach:

**Right-Sized, High-Efficiency HVAC:** Oversized air conditioning systems don't run long enough to remove humidity. We carefully calculate loads and specify systems that run longer cycles at lower capacities, removing more moisture while using less energy.

**Energy Recovery Ventilators:** These systems bring in fresh air while capturing the cooling energy (and importantly, dryness) from exhausted air. In humid climates, this dramatically reduces the energy penalty of proper ventilation.

**Strategic Insulation:** We insulate more than code requires, but not to extreme levels. Over-insulation without proper vapor management can trap moisture in wall assemblies. We've found that roughly 30% above code requirements provides the best balance.

**Solar Strategies:** Large overhangs and exterior shading devices reduce solar gain without sacrificing views. We're also incorporating photovoltaic systems on most projects, though salt air requires careful product selection and installation details to ensure long-term reliability.

### Storm Resilience

Climate change is making extreme weather events more frequent and severe. Sustainable design must account for these realities:

**Structural Systems:** We design for wind loads beyond code minimums, typically designing to withstand Category 4 hurricane winds even in zones where only Category 2-3 are historically common.

**Impact-Resistant Glazing:** All windows and doors in exposed locations receive impact-resistant glazing. This protects against flying debris and often provides insurance benefits that offset the added cost.

**Breakaway Walls:** For areas below flood levels, we use breakaway walls that allow water to pass through without damaging the structural system. These walls are designed to fail in a controlled manner during flooding, protecting the building's main structure.

**Backup Systems:** Redundant power systems, backup water supplies, and emergency drainage systems ensure the building can handle extended utility outages that often follow major storms.

### Landscape as Infrastructure

The landscape around coastal buildings is part of the sustainable strategy, not just decoration:

**Native Plantings:** Native plants require minimal water and maintenance while providing habitat for local wildlife. They're also adapted to salt spray and sandy soils.

**Bioswales and Rain Gardens:** These landscape features manage stormwater on-site, reducing runoff while creating attractive outdoor spaces.

**Dune Preservation:** Where possible, we work with existing dune systems rather than replacing them. Dunes provide natural storm protection while supporting unique ecosystems.

**Hardscape Strategy:** Permeable paving reduces runoff while reducing the urban heat island effect. We select materials that won't be degraded by salt exposure.

### The Long View

Sustainable coastal architecture requires thinking in decades, not years. Every material choice, every detail, every system must be evaluated for how it will perform not just initially, but 20, 30, or 50 years into the future.

This long-term thinking often means higher initial costs, which can be a difficult conversation with clients. But when we show lifecycle cost analyses, the math almost always favors durability. A building that needs minimal maintenance, doesn't require premature replacements, and resists storm damage will cost less to own over its lifetime while providing better performance and lower environmental impact.

The challenges of building sustainably on the coast are significant, but they're not insurmountable. With careful planning, appropriate material selection, and a commitment to proven building science principles, we can create coastal buildings that are both environmentally responsible and built to last.`,
      author: "Brian Church",
      date: "2024-11-09",
      readTime: "7 min read",
      category: "Sustainability",
      image: "/images/coast blvd hero.jpg"
    },
    {
      id: 'sema4-aia-honor-award',
      title: "SEMA4 Live-Work Development Receives AIA Honor Award",
      excerpt: "Our firm is honored to announce that the SEMA4 Live-Work Development has received an AIA Honor Award from the American Institute of Architects, recognizing design excellence in mixed-use architecture.",
      content: `Our firm is honored to announce that the SEMA4 Live-Work Development has received an AIA Honor Award from the American Institute of Architects, recognizing design excellence in mixed-use architecture. This project, located along Highway 101 in Encinitas, represents our vision for how coastal communities can accommodate growth while enhancing urban character and promoting sustainable living patterns.

### Rethinking Mixed-Use for Coastal Communities

The SEMA4 project emerged from a fundamental question: how do we create density in coastal communities without sacrificing the qualities that make these places special? The answer, we believed, lay in a new model for mixed-use development—one that creates true live-work integration rather than simply stacking residential above retail.

The site, a former auto repair facility, sits prominently on Highway 101, the iconic coastal highway that defines so much of Southern California's character. Rather than treating the highway as something to turn away from, we embraced it, creating an active street frontage that engages with this important corridor.

### Design Concept

The building's form is deliberately simple yet sophisticated—three stories of rich, wood-clad volumes arranged to create both street presence and intimate courtyard spaces. The wood rain screen system, crafted from sustainably-harvested cedar, creates a warm, natural aesthetic that contrasts beautifully with precise black steel window frames and balcony details.

What sets SEMA4 apart is how we organized the program. Rather than creating distinct residential and commercial zones, we developed 12 true live-work units. Each unit includes flexible ground-floor space that opens directly to the street or to shared courtyards, with living spaces above. This arrangement allows residents to operate businesses, studios, or workshops while living above their workplaces—a pattern that once defined urban neighborhoods but has been largely eliminated by conventional zoning.

### Sustainable Urban Design

The AIA jury specifically noted our project's contribution to sustainable urbanism. By creating housing and workspace in the same structure, SEMA4 eliminates commutes for its residents. The location, just blocks from the beach and surrounded by shops, restaurants, and services, supports car-free or car-light lifestyles.

The building's sustainable features include:

**Passive Design Strategies:** Deep roof overhangs and carefully positioned windows optimize natural light while controlling solar heat gain. Cross-ventilation strategies take advantage of coastal breezes, reducing cooling loads significantly.

**High-Performance Building Envelope:** We specified insulation levels 40% above code requirements and used high-performance windows throughout. The result is dramatically reduced energy consumption for both heating and cooling.

**Sustainable Materials:** Beyond the FSC-certified cedar rain screen, we used reclaimed wood for interior details, low-VOC finishes throughout, and locally-sourced materials wherever possible to reduce transportation impacts.

**Efficient Systems:** High-efficiency heat pump systems provide both heating and cooling, while solar panels on the roof offset a significant portion of the building's energy use.

**Water Conservation:** Low-flow fixtures, drought-tolerant native landscaping, and rainwater collection systems for irrigation reduce water consumption by approximately 40% compared to conventional development.

### Creating Community

What we're most proud of isn't the building itself, but the community that's formed within it. The shared courtyards have become active social spaces where residents gather, children play, and spontaneous conversations happen. The mix of businesses—a coffee roaster, an architecture studio, a ceramics workshop, and various creative professional offices—creates vitality throughout the day.

The street-level activation has transformed this stretch of Highway 101. Where there was once a blank wall and parking lot, there's now activity, transparency, and engagement with passersby. The wide sidewalk with integrated planters and seating creates a pedestrian-friendly zone that's become a popular gathering spot.

### Design Excellence Recognition

The AIA Honor Award jury's comments highlighted several aspects of the project:

"SEMA4 demonstrates how thoughtful design can create density that enhances rather than degrades community character. The project successfully balances contemporary architecture with coastal vernacular, creating a building that feels both fresh and contextually appropriate."

"The live-work typology is skillfully executed, creating flexible spaces that can adapt to changing needs over time. This isn't speculative development—it's architecture with a social mission."

"The material palette is refined and sophisticated, with the wood rain screen creating warmth and texture while also providing excellent durability in the marine environment. Details throughout demonstrate a high level of craft."

### Impact Beyond the Project

SEMA4's success has sparked conversation in Encinitas and surrounding communities about how coastal cities can accommodate growth. Local officials and developers have visited the project, asking questions about the live-work model and its economic viability.

We're currently working on two similar projects in other coastal communities, each adapting the lessons learned from SEMA4 to different sites and contexts. The model is scalable and replicable—requirements for any solution to coastal California's housing challenges.

### Gratitude

This recognition belongs to many people: our client, who trusted our vision and committed to quality throughout the construction process; the contractors and craftspeople who executed the work beautifully; the city planning staff who worked collaboratively to approve an unconventional project type; and most importantly, the residents who've made SEMA4 a thriving community.

As we accept this honor, we're reminded that the most meaningful recognition doesn't come from awards—it comes from creating places where people live better lives. The AIA Honor Award validates our design approach, but the true measure of success is the vibrant community that's formed within these walls.`,
      author: "Brian Church",
      date: "2024-11-04",
      readTime: "4 min read",
      category: "Awards",
      image: "/images/SEMA4-hero-03.jpg"
    },
    {
      id: 'choosing-architect-guide',
      title: "How to Choose the Right Architect for Your Coastal Home",
      excerpt: "Designing a coastal home is one of the most exciting projects you'll ever undertake. It's also one of the most complex, with unique challenges that require specialized knowledge and experience.",
      content: `Designing a coastal home is one of the most exciting projects you'll ever undertake. It's also one of the most complex, with unique challenges that require specialized knowledge and experience. Choosing the right architect can mean the difference between a home that thrives in the coastal environment for generations and one that requires constant maintenance and repairs. After three decades of coastal practice and countless conversations with prospective clients, here's what you should know about selecting an architect for your coastal project.

### Understand What an Architect Actually Does

Before beginning your search, it's important to understand the architect's role. We're not just drawing pretty pictures—we're problem-solvers who balance your vision, budget, site constraints, building codes, and environmental factors to create a comprehensive design solution.

For a coastal home, your architect will:
- Navigate complex coastal development regulations and permitting processes
- Design systems that resist salt corrosion, wind, and moisture
- Integrate the building with its landscape and views
- Coordinate with engineers, contractors, and specialty consultants
- Manage the project through construction to ensure design intent is realized

The right architect brings technical expertise, creative vision, and project management skills to every aspect of your home.

### Look for Demonstrated Coastal Experience

This is non-negotiable. Coastal construction has unique challenges that can't be learned from books or theoretical knowledge. You need an architect who has actually designed and built projects in marine environments and dealt with the consequences—good and bad—of their design decisions.

When evaluating architects, ask:
- How many coastal homes have you designed?
- Can I visit completed projects and speak with past clients?
- What failures or problems have you encountered in past coastal projects, and what did you learn?

That last question is particularly revealing. Every architect has made mistakes—what matters is whether they learned from them and changed their practice accordingly. An architect who claims they've never had problems is either lying or hasn't done enough work to encounter real-world challenges.

### Evaluate Their Design Approach

Look at the architect's portfolio, but look critically. Are you seeing the same solution repeated on different sites, or does each project respond to its unique context? Do the buildings appear well-crafted and detailed, or does the photography hide questionable construction?

Visit completed projects in person if possible. Photography can make anything look good. In person, you'll see:
- How materials are weathering over time
- Whether details are well-executed or sloppy
- How the building relates to its site and neighbors
- How well spaces actually function

Pay attention to buildings that are 5-10 years old. Early aging reveals a lot about material selection and detailing quality.

### Assess Communication Style

You'll be working closely with your architect for 1-2 years or more. Clear communication is essential. During initial meetings, notice:

**Do they listen?** Good architects ask questions and genuinely hear your answers. Be wary of architects who immediately start presenting their ideas before understanding your needs.

**Can they explain complex ideas clearly?** Architecture involves technical complexity, but good architects can make complicated issues understandable without talking down to you.

**Are they responsive?** If an architect is slow to respond during the courtship phase, they'll be even slower once you've hired them.

**Do they respect your budget?** Architects who dismiss budget concerns or promise impossibly low construction costs will create problems down the line.

### Understand Different Service Models

Architects offer different levels of service:

**Full Service:** The architect manages the entire project from initial concept through construction. This provides the best design control and typically results in the highest quality outcomes, but costs more in professional fees.

**Design-Only:** The architect creates the design and construction drawings, but you manage the contractor relationship. This saves money upfront but often leads to compromises during construction when the architect isn't involved in problem-solving.

**Design-Build:** Some contractors offer in-house design services. This can streamline the process but often limits design ambition and quality. The contractor's profit motive may conflict with design goals.

For complex coastal homes, full-service architectural engagement typically produces the best results. The architect's oversight during construction ensures details are executed properly—crucial for long-term performance in harsh marine environments.

### Discuss Their Sustainable Design Approach

Sustainability at the coast means different things than inland. Ask potential architects:
- How do you select materials for coastal durability?
- What's your approach to energy efficiency in humid climates?
- How do you address climate change and sea level rise?
- What's your philosophy on building resilience?

Be skeptical of architects who promise LEED certification or net-zero energy without discussing the unique challenges of achieving these goals in coastal locations. Meaningful sustainability requires nuanced thinking about material longevity, local conditions, and lifecycle costs.

### Check Qualifications and References

Verify that the architect is properly licensed in your state. Ask for references and actually call them. Good questions for references:

- Was the project completed on budget and on schedule?
- How did the architect handle problems or surprises?
- Would you hire them again?
- What surprised you (good or bad) about working with them?

Don't just talk to references the architect provides—look at their built work and try to contact other clients independently. Online reviews can provide additional perspective, though take extreme opinions (both positive and negative) with a grain of salt.

### Understand Fee Structures

Architectural fees typically range from 10-15% of construction cost for residential projects, though they can be higher for complex or small projects. Coastal homes often fall on the higher end due to added complexity.

Fee structures vary:

**Percentage of Construction Cost:** The architect's fee is a percentage of the final construction cost. This aligns the architect's interests with cost control.

**Hourly:** You pay for actual time spent. This works for small projects but can lead to cost uncertainty on larger ones.

**Fixed Fee:** An agreed-upon lump sum for defined services. This provides cost certainty but requires clearly defining the scope upfront.

Be wary of architects whose fees seem significantly lower than others. You generally get what you pay for, and cheap design services often cost more in the long run through construction problems, change orders, or poor long-term performance.

### Trust Your Instincts

After evaluating experience, reviewing portfolios, and checking references, trust your gut feeling. You need an architect who:
- Shares your aesthetic sensibility
- Understands your priorities
- Respects your input while providing expert guidance
- You genuinely like and feel comfortable working with

This is a long-term relationship. Chemistry matters.

### Red Flags to Watch For

Be cautious of architects who:
- Promise unrealistically low construction costs
- Dismiss your budget concerns
- Won't provide references
- Don't carry professional liability insurance
- Have numerous complaints with the state licensing board
- Claim they can get permits without following regulations
- Pressure you to sign contracts before you're ready

### Making Your Decision

After meeting with several architects, take time to reflect. Review proposals carefully, comparing not just fees but scope of services. The cheapest option rarely produces the best outcome.

Ask yourself:
- Who best understood my vision?
- Who demonstrated the strongest technical expertise?
- Who would I most enjoy working with?
- Who gave me the most confidence in their abilities?

Remember, you're not just hiring someone to draw plans—you're selecting a partner who will guide one of the most significant investments of your life. Take the time to choose wisely.

### Final Thoughts

Designing a coastal home is a complex undertaking that requires specialized expertise, but with the right architect, it's also an incredibly rewarding process. The best client-architect relationships are true collaborations where both parties bring expertise and enthusiasm to creating something exceptional.

Your coastal home should enhance your life, respond beautifully to its site, and stand strong against marine elements for generations. Choosing an architect with the right combination of experience, design sensibility, and communication skills puts you on the path to achieving that vision.

Take your time with this decision. Visit projects. Check references. Trust your instincts. And once you've found the right architect, commit fully to the collaborative process. The best projects emerge when clients and architects work together with mutual respect, clear communication, and shared commitment to excellence.`,
      author: "Brian Church",
      date: "2024-10-27",
      readTime: "6 min read",
      category: "Client Guide",
      image: "/images/church_1.jpg"
    }
  ];

  const article = blogPosts.find(post => post.id === articleId);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Link to="/news">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Article Header */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/news" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Link>
          
          <div className="mb-8">
            <Badge className="mb-4">{article.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{article.title}</h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="aspect-[16/9] rounded-lg overflow-hidden mb-12">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h4 key={index} className="text-lg font-semibold mt-6 mb-3 text-foreground">
                    {paragraph.replace(/\*\*/g, '')}
                  </h4>
                );
              }
              if (paragraph.startsWith('- ')) {
                const listItems = paragraph.split('\n- ').map(item => item.replace(/^- /, ''));
                return (
                  <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                    {listItems.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-muted-foreground mb-6 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Related Articles</h2>
            <p className="text-muted-foreground">Explore more insights from our architectural practice</p>
          </div>
          
          <div className="text-center">
            <Link to="/news">
              <Button size="lg">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;