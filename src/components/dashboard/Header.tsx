import React from "react";
import { 
  Bell, 
  MagnifyingGlass, 
  List
} from "@phosphor-icons/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  onMenuClick?: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="h-20 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40 backdrop-blur-lg bg-white/5 transition-all duration-300">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg lg:hidden transition-colors"
        >
          <List size={24} weight="bold" />
        </button>
        
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 line-clamp-1">
            Welcome, Rajesh! 👋
          </h2>
          <div className="mt-0.5">
            <span className="px-2 py-0.5 bg-green-500 text-white text-[8px] md:text-[10px] font-bold rounded-full uppercase tracking-wider">
              Admin
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-6">
        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors hidden sm:block">
          <MagnifyingGlass size={24} weight="bold" />
        </button>
        <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <Bell size={24} weight="bold" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-slate-800 rounded-full border-2 border-white"></span>
        </button>

        <Avatar className="h-8 w-8 md:h-10 md:w-10 border-2 border-white shadow-sm">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh" />
          <AvatarFallback className="bg-blue-100 text-blue-600 font-bold">RK</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
