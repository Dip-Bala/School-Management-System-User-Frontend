
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
  SignOut,
  X,
  CaretDown,
  IdentificationCard,
  UserList,
  PlusCircle
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const menuItems = [
  { icon: SquaresFour, label: "Dashboard", path: "/dashboard" },
  { 
    icon: UserPlus, 
    label: "Admissions", 
    path: "/admissions",
    subItems: [
      { icon: PlusCircle, label: "New Admission", path: "/admissions/new" },
      { icon: UserList, label: "Student List", path: "/admissions/students" },
      { icon: IdentificationCard, label: "ID Cards", path: "/admissions/id-cards" },
    ]
  },
  { icon: Users, label: "Staff", path: "/staff" },
  { icon: BookOpen, label: "Academics", path: "/academics" },
  { icon: CalendarCheck, label: "Attendance", path: "/attendance" },
  { icon: ClipboardText, label: "Examinations", path: "/examinations" },
  { icon: CurrencyInr, label: "Fees", path: "/fees" },
  { icon: Chats, label: "Communication", path: "/communication" },
  { icon: Package, label: "Inventory", path: "/inventory" },
  { icon: ChartBar, label: "Reports", path: "/reports" },
  { icon: Gear, label: "Settings", path: "/settings" },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedItem, setExpandedItem] = useState<string | null>(
    location.pathname.startsWith("/admissions") ? "Admissions" : null
  );

  const handleSignOut = () => {
    navigate("/login", { replace: true });
  };

  const isActive = (path: string) => location.pathname === path;
  const isSubItemActive = (path: string) => location.pathname === path;
  const isParentActive = (item: any) => {
    if (item.path === location.pathname) return true;
    if (item.subItems) {
      return item.subItems.some((sub: any) => location.pathname === sub.path);
    }
    return false;
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 transition-transform duration-300 transform lg:translate-x-0 lg:static lg:inset-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-full pl-4 py-6 pr-2 flex flex-col">
          <div className="bg-white rounded-[2.5rem] flex flex-col h-full shadow-sm border border-blue-50/50 overflow-hidden relative">
            {/* Mobile Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 lg:hidden"
            >
              <X size={20} weight="bold" />
            </button>

            <div className="p-8 flex flex-col items-center">
              <div className="mb-2">
                <img src="/logo.svg" alt="GurukoolX Logo" className="h-16 w-auto object-contain" />
              </div>
              <h1 className="font-bold text-blue-900/80 text-sm tracking-wide uppercase">GurukoolX</h1>
            </div>

            <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto scrollbar-hide">
              {menuItems.map((item) => {
                const active = isParentActive(item);
                const hasSubItems = !!item.subItems;
                const isExpanded = expandedItem === item.label;

                return (
                  <div key={item.label} className="space-y-1">
                    <button
                      onClick={() => {
                        if (hasSubItems) {
                          setExpandedItem(isExpanded ? null : item.label);
                        } else {
                          navigate(item.path);
                          if (window.innerWidth < 1024 && onClose) onClose();
                        }
                      }}
                      className={cn(
                        "flex items-center gap-4 w-full px-5 py-3 text-xs font-medium rounded-2xl transition-all duration-300",
                        active 
                          ? "bg-blue-50 text-blue-600 shadow-sm" 
                          : "text-slate-400 hover:text-blue-500 hover:bg-blue-50/30"
                      )}
                    >
                      <item.icon size={20} weight={active ? "fill" : "regular"} className="flex-shrink-0" />
                      <span className="flex-1 text-left">{item.label}</span>
                      {hasSubItems && (
                        <CaretDown 
                          size={14} 
                          weight="bold" 
                          className={cn("transition-transform duration-300", isExpanded && "rotate-180")} 
                        />
                      )}
                    </button>

                    {hasSubItems && isExpanded && (
                      <div className="ml-9 space-y-1 mt-1">
                        {item.subItems?.map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => {
                              navigate(subItem.path);
                              if (window.innerWidth < 1024 && onClose) onClose();
                            }}
                            className={cn(
                              "flex items-center gap-3 w-full px-4 py-2 text-[11px] font-medium rounded-xl transition-all duration-300",
                              isSubItemActive(subItem.path)
                                ? "text-blue-600 bg-blue-50/50"
                                : "text-slate-400 hover:text-blue-500 hover:bg-blue-50/20"
                            )}
                          >
                            <subItem.icon size={16} weight={isSubItemActive(subItem.path) ? "fill" : "regular"} />
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
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
        </div>
      </aside>
    </>
  );
};
