
import { useNavigate } from "react-router-dom";
import { 
  SquaresFour, 
  UserPlus, 
  Users, 
  BookOpen, 
  CalendarCheck, 
  ClipboardText, 
  CurrencyInr, 
  Chats, 
  Package, 
  ChartBar, 
  Gear,
  SignOut
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: SquaresFour, label: "Dashboard", active: true },
  { icon: UserPlus, label: "Admissions" },
  { icon: Users, label: "Staff" },
  { icon: BookOpen, label: "Academics" },
  { icon: CalendarCheck, label: "Attendance" },
  { icon: ClipboardText, label: "Examinations" },
  { icon: CurrencyInr, label: "Fees" },
  { icon: Chats, label: "Communication" },
  { icon: Package, label: "Inventory" },
  { icon: ChartBar, label: "Reports" },
  { icon: Gear, label: "Settings" },
];

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login", { replace: true });
  };

  return (
    <aside className="w-72 pl-4 py-6 pr-2 flex flex-col h-screen sticky top-0">
      <div className="bg-white rounded-[2.5rem] flex flex-col h-full shadow-sm border border-blue-50/50 overflow-hidden">
        <div className="p-8 flex flex-col items-center">
          <div className="mb-2">
            <img src="/logo.png" alt="GurukoolX Logo" className="h-16 w-auto object-contain" />
          </div>
          <h1 className="font-bold text-blue-900/80 text-sm tracking-wide uppercase"></h1>
        </div>

        <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto scrollbar-hide">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "flex items-center gap-4 w-full px-5 py-3 text-xs font-medium rounded-2xl transition-all duration-300",
                item.active 
                  ? "bg-blue-50 text-blue-600 shadow-sm" 
                  : "text-slate-400 hover:text-blue-500 hover:bg-blue-50/30"
              )}
            >
              <item.icon size={20} weight={item.active ? "fill" : "regular"} className="flex-shrink-0" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-6">
          <button 
            onClick={handleSignOut}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-blue-500 text-white rounded-full text-sm font-semibold shadow-lg shadow-blue-200 hover:bg-blue-600 transition-all duration-300">
            <SignOut size={18} weight="bold" />
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
};
