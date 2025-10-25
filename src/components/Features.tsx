import { Zap, Shield, BarChart3, Globe, Code2, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "No-Code Builder",
      description: "Build powerful workflows with our intuitive drag-and-drop interface. No coding required.",
    },
    {
      icon: Globe,
      title: "500+ Integrations",
      description: "Connect with all your favorite apps and services. From CRM to social media.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and SOC 2 compliance. Your data is always protected.",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Monitor workflow performance with detailed analytics and insights.",
    },
    {
      icon: Code2,
      title: "Custom Code",
      description: "Need more power? Add custom JavaScript code to your workflows.",
    },
    {
      icon: Sparkles,
      title: "AI-Powered",
      description: "Smart suggestions and automation recommendations powered by AI.",
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Automate Smarter
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you build, deploy, and scale your workflows effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="glass-effect p-8 rounded-2xl hover:bg-card/50 transition-all duration-300 group hover:scale-105"
            >
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
