import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import WorkflowCard from "./WorkflowCard";

const Dashboard = () => {
  const workflows = [
    {
      title: "New Email to Slack",
      description: "Send notifications to Slack when receiving important emails",
      status: "active" as const,
      triggers: 247,
      lastRun: "2 min ago",
      apps: ["Gmail", "Slack"],
    },
    {
      title: "Form to Sheets",
      description: "Automatically save form submissions to Google Sheets",
      status: "active" as const,
      triggers: 1043,
      lastRun: "5 min ago",
      apps: ["Forms", "Sheets"],
    },
    {
      title: "Social Media Scheduler",
      description: "Schedule posts across multiple social platforms",
      status: "paused" as const,
      triggers: 89,
      lastRun: "1 day ago",
      apps: ["Twitter", "LinkedIn", "Facebook"],
    },
  ];

  const handleWelcomeClick = () => {
    alert("Welcome to your workflow automation dashboard!");
  };

  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <div className="glass-effect p-8 rounded-2xl mb-8 gradient-card">
          <h1 className="text-4xl font-bold mb-3">Welcome, Vimalan 👋</h1>
          <p className="text-lg text-muted-foreground mb-4">
            This is your workflow automation dashboard running successfully!
          </p>
          <Button onClick={handleWelcomeClick} size="lg" className="bg-primary hover:bg-primary/90">
            Click Me
          </Button>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Workflows</h1>
            <p className="text-muted-foreground">Manage and monitor your automation workflows</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Create Workflow
          </Button>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search workflows..."
            className="pl-10 bg-card border-border/50"
          />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: "Active Workflows", value: "2", change: "+1 this week" },
            { label: "Total Runs", value: "1,379", change: "+247 today" },
            { label: "Success Rate", value: "99.2%", change: "+0.3% this month" },
          ].map((stat, i) => (
            <div key={i} className="glass-effect p-6 rounded-2xl">
              <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-xs text-accent">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Workflow Cards */}
        <div className="space-y-4">
          {workflows.map((workflow, i) => (
            <WorkflowCard key={i} {...workflow} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
