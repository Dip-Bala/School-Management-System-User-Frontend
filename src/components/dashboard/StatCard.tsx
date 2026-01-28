
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  IdentificationBadge, 
  CheckCircle, 
  CurrencyInr, 
  BookOpen, 
  Megaphone 
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const icons = {
  Users: Users,
  IdentificationBadge: IdentificationBadge,
  CheckCircle: CheckCircle,
  CurrencyInr: CurrencyInr,
  BookOpen: BookOpen,
  Megaphone: Megaphone,
};

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  trend?: string;
  trendDescription?: string;
  icon: keyof typeof icons;
  color: string;
}

export const StatCard = ({ title, value, description, trend, trendDescription, icon, color }: StatCardProps) => {
  const Icon = icons[icon];

  return (
    <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow rounded-[2rem] bg-white/80">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-400 mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
          </div>
          <div className={cn("p-3 rounded-2xl shadow-sm", color)}>
            <Icon size={24} weight="duotone" />
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-slate-400 font-medium">{description}</p>
          {trend && (
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                {trend}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
