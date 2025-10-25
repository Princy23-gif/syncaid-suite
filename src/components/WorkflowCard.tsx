import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, MoreVertical, Clock, CheckCircle2 } from "lucide-react";

interface WorkflowCardProps {
  title: string;
  description: string;
  status: "active" | "paused";
  triggers: number;
  lastRun?: string;
  apps: string[];
}

const WorkflowCard = ({ title, description, status, triggers, lastRun, apps }: WorkflowCardProps) => {
  return (
    <Card className="gradient-card border-border/50 p-6 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-semibold text-lg">{title}</h3>
            <Badge variant={status === "active" ? "default" : "secondary"} className="text-xs">
              {status === "active" ? (
                <CheckCircle2 className="w-3 h-3 mr-1" />
              ) : (
                <Clock className="w-3 h-3 mr-1" />
              )}
              {status}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Button variant="ghost" size="icon" className="shrink-0">
          <MoreVertical className="w-4 h-4" />
        </Button>
      </div>

      {/* App Integration Icons */}
      <div className="flex items-center gap-2 mb-4">
        {apps.map((app, i) => (
          <div key={i} className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-semibold">
              {app.slice(0, 2).toUpperCase()}
            </div>
            {i < apps.length - 1 && (
              <div className="w-6 h-[2px] bg-border mx-1" />
            )}
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between pt-4 border-t border-border/50">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{triggers} triggers</span>
          {lastRun && <span>Last run: {lastRun}</span>}
        </div>
        <Button size="sm" className="bg-primary hover:bg-primary/90">
          <Play className="w-4 h-4 mr-2" />
          Run
        </Button>
      </div>
    </Card>
  );
};

export default WorkflowCard;
