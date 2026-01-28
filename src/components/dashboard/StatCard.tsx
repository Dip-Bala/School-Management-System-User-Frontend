
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
      <CardContent className="p-4 md:p-6">
        <div className="flex items-start justify-between">
          <div className="min-w-0">
            <p className="text-[10px] md:text-sm font-medium text-slate-400 mb-1 truncate">{title}</p>
            <h3 className="text-lg md:text-2xl font-bold text-slate-800">{value}</h3>
          </div>
          <div className={cn("p-2 md:p-3 rounded-xl md:rounded-2xl shadow-sm flex-shrink-0", color)}>
            <Icon size={20} className="md:w-6 md:h-6" weight="duotone" />
          </div>
        </div>
        
        <div className="mt-3 md:mt-4 flex items-center justify-between gap-2">
          <p className="text-[9px] md:text-xs text-slate-400 font-medium line-clamp-1">{description}</p>
          {trend && (
            <div className="flex items-center gap-1 flex-shrink-0">
              <span className="text-[9px] md:text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                {trend}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
