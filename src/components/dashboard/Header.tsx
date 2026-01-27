import React from "react";
import { 
  Bell, 
  MagnifyingGlass, 
} from "@phosphor-icons/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <header className="h-20 flex items-center justify-between px-6">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold text-slate-800">Welcome back, Rajesh! 👋</h2>
        <div className="mt-1">
          <span className="px-3 py-1 bg-green-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Admin</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <MagnifyingGlass size={24} weight="bold" />
        </button>
        <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <Bell size={24} weight="bold" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-slate-800 rounded-full border-2 border-white"></span>
        </button>

        <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh" />
          <AvatarFallback className="bg-blue-100 text-blue-600 font-bold">RK</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
