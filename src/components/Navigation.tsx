import { Button } from "@/components/ui/button";
import { Workflow, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Workflow className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">FlowHub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Features</a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Integrations</a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Pricing</a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Docs</a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost">Sign In</Button>
            <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border/50">
            <a href="#" className="block py-2 text-foreground/80 hover:text-foreground transition-colors">Features</a>
            <a href="#" className="block py-2 text-foreground/80 hover:text-foreground transition-colors">Integrations</a>
            <a href="#" className="block py-2 text-foreground/80 hover:text-foreground transition-colors">Pricing</a>
            <a href="#" className="block py-2 text-foreground/80 hover:text-foreground transition-colors">Docs</a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" className="w-full">Sign In</Button>
              <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
