import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "News", path: "/news" },
    { name: "FAQ", path: "/faq" },
    { name: "Refer Friend", path: "/refer-friend" },
  ];

  const portfolioCategories = [
    { name: "All Projects", path: "/portfolio" },
    { name: "Residential", path: "/portfolio?filter=Residential" },
    { name: "Commercial", path: "/portfolio?filter=Commercial" },
    { name: "Mixed-Use", path: "/portfolio?filter=Mixed-Use" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/images/unnamed.jpg" 
              alt="Brian Church Architecture" 
              className="h-10 w-auto object-contain"
            />
            <span className="font-bold text-xl text-foreground hidden sm:inline">Brian Church Architecture</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home Link */}
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/")
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            
            {/* Portfolio Link - Simple */}
            <Link
              to="/portfolio"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname.includes('/portfolio')
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-muted-foreground"
              }`}
            >
              Portfolio
            </Link>
            
            {/* Other Navigation Items */}
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Contact Button - Bold and Obvious */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-2 shadow-lg border-2 border-primary hover:border-primary/90">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  to="/"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                
                {/* Portfolio Section in Mobile */}
                <div className="space-y-2">
                  <div className="text-lg font-medium text-foreground">Portfolio</div>
                  {portfolioCategories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      className="block pl-4 text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
                
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <Link
                  to="/contact"
                  className="mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;