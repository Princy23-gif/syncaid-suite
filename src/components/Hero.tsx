import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, GitBranch, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full text-sm animate-glow">
            <Zap className="w-4 h-4 text-accent" />
            <span>Automate Everything, Effortlessly</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Connect Your Apps &{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Automate Workflows
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build powerful automation workflows without code. Connect your favorite apps, automate repetitive tasks, and focus on what matters most.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-lg px-8">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-muted hover:bg-card">
              Watch Demo
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Set up workflows in minutes" },
              { icon: GitBranch, title: "Multi-Step", desc: "Complex automation made simple" },
              { icon: Clock, title: "24/7 Active", desc: "Always running, never sleeping" },
            ].map((feature, i) => (
              <div key={i} className="glass-effect p-6 rounded-2xl hover:bg-card/50 transition-all duration-300 hover:scale-105">
                <feature.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
