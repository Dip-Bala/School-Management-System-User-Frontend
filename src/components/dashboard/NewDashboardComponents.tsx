import React from "react";
import { 
  MagnifyingGlass, 
  SlidersHorizontal,
  CalendarBlank,
  ArrowSquareOut,
  CaretLeft,
  CaretRight
} from "@phosphor-icons/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export const ClassCard = ({ subject, professor, date, description, isNew }: any) => (
  <div className="bg-white/60 p-6 rounded-[2rem] border border-white shadow-sm hover:shadow-md transition-all mb-4 last:mb-0">
    <div className="flex justify-between items-start mb-2">
      <h4 className="text-xl font-bold text-slate-800">{subject}</h4>
      <div className="flex items-center gap-2 text-slate-400">
        <CalendarBlank size={16} />
        <span className="text-xs">{date}</span>
      </div>
    </div>
    <div className="flex items-center gap-2 mb-3">
      <Avatar className="h-6 w-6">
        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${professor}`} />
        <AvatarFallback>P</AvatarFallback>
      </Avatar>
      <span className="text-xs text-slate-500 font-medium">Professor {professor}</span>
    </div>
    <p className="text-xs text-slate-400 leading-relaxed mb-4">{description}</p>
    {isNew && (
      <div className="flex justify-end">
        <Badge className="bg-blue-500 hover:bg-blue-600 rounded-lg px-3 py-0.5 text-[10px]">New</Badge>
      </div>
    )}
  </div>
);

export const ClassesSection = () => (
  <Card className="bg-white/80 rounded-[2.5rem] border-none shadow-sm p-4 h-full">
    <CardHeader className="flex flex-row items-center justify-between p-4 mb-4">
      <CardTitle className="text-xl font-bold text-slate-800">Classes for the day</CardTitle>
      <div className="flex gap-2">
        <button className="p-2 text-blue-500 bg-blue-50 rounded-xl"><MagnifyingGlass size={20} weight="bold" /></button>
        <button className="p-2 text-blue-500 bg-blue-50 rounded-xl"><SlidersHorizontal size={20} weight="bold" /></button>
      </div>
    </CardHeader>
    <CardContent className="p-2 overflow-y-auto max-h-[600px] scrollbar-hide">
      <ClassCard 
        subject="Mathematics" 
        professor="Joe" 
        date="5/2/22" 
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et" 
      />
      <ClassCard 
        subject="Physics" 
        professor="John" 
        date="5/2/22" 
        description="Lorem ipsum dolor sit amet, consetetur" 
      />
      <ClassCard 
        subject="Chemistry" 
        professor="Matt" 
        date="5/2/22" 
        description="Lorem ipsum dolor sit amet," 
        isNew 
      />
    </CardContent>
  </Card>
);

export const AttendanceCard = () => (
  <Card className="bg-white/80 rounded-[2.5rem] border-none shadow-sm p-6 mb-8">
    <CardHeader className="flex flex-row items-center justify-between p-0 mb-6">
      <CardTitle className="text-xl font-bold text-slate-800">Mark attendance</CardTitle>
      <button className="p-2 text-blue-500 bg-blue-50 rounded-xl"><ArrowSquareOut size={20} weight="bold" /></button>
    </CardHeader>
    <CardContent className="p-0 flex flex-col items-center">
      <div className="w-full max-w-xs border border-blue-100 rounded-full py-2 px-6 flex justify-between items-center mb-6">
        <span className="text-blue-900 font-semibold text-sm">Mathematics</span>
        <span className="text-slate-400 text-xs">09:00 AM</span>
      </div>
      <div className="flex gap-2 mb-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <button 
            key={i} 
            className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all",
              i === 1 ? "bg-blue-500 text-white shadow-lg shadow-blue-100" : "text-slate-300 border border-slate-100"
            )}
          >
            {i}
          </button>
        ))}
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-300 border border-slate-100"><CaretRight size={14} /></button>
      </div>
      <button className="w-full py-4 bg-blue-500 text-white rounded-2xl font-bold shadow-xl shadow-blue-100 hover:bg-blue-600 transition-all">
        Present
      </button>
    </CardContent>
  </Card>
);

export const CalendarWidget = () => (
  <Card className="bg-white/80 rounded-[2.5rem] border-none shadow-sm p-6">
    <CardHeader className="flex flex-row items-center justify-between p-0 mb-6">
      <CardTitle className="text-xl font-bold text-slate-800">My Calendar</CardTitle>
      <button className="p-2 text-blue-500 bg-blue-50 rounded-xl"><ArrowSquareOut size={20} weight="bold" /></button>
    </CardHeader>
    <CardContent className="p-0">
      <div className="flex justify-between items-center mb-6">
        <button className="p-1 text-blue-500 bg-blue-50 rounded-lg"><CaretLeft size={16} weight="bold" /></button>
        <span className="text-blue-500 font-bold">March 2022</span>
        <button className="p-1 text-blue-500 bg-blue-50 rounded-lg"><CaretRight size={16} weight="bold" /></button>
      </div>
      <div className="grid grid-cols-7 gap-y-4 text-center">
        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(d => (
          <span key={d} className="text-[10px] font-bold text-slate-300 uppercase">{d}</span>
        ))}
        {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
          <button 
            key={day} 
            className={cn(
              "text-xs font-semibold py-1 rounded-lg transition-all",
              day === 15 ? "bg-blue-500 text-white shadow-lg shadow-blue-100" : "text-slate-500 hover:bg-blue-50"
            )}
          >
            {day}
          </button>
        ))}
      </div>
    </CardContent>
  </Card>
);

export const NewsSection = () => (
  <Card className="bg-white/80 rounded-[2.5rem] border-none shadow-sm p-6 h-full">
    <CardHeader className="p-0 mb-6">
      <CardTitle className="text-xl font-bold text-slate-800">News & Updates</CardTitle>
    </CardHeader>
    <CardContent className="p-0">
      <div className="relative rounded-3xl overflow-hidden mb-6 aspect-square group cursor-pointer">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop" 
          alt="News" 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-4 left-0">
          <Badge className="bg-orange-500 rounded-r-lg rounded-l-none px-4 py-1 text-[10px] uppercase font-bold border-none">News</Badge>
        </div>
      </div>
      <div className="mb-6">
        <h5 className="text-xs font-bold text-slate-800 mb-2">Universities to announce exams</h5>
        <p className="text-[10px] text-slate-400 leading-relaxed mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </p>
        <button className="w-full py-2 bg-blue-500 text-white rounded-xl text-[10px] font-bold shadow-lg shadow-blue-100 hover:bg-blue-600 transition-all">
          Read more &gt;
        </button>
      </div>
      <div className="space-y-4">
        {[1, 2].map(i => (
          <div key={i} className="flex items-center gap-4 group cursor-pointer">
            <Avatar className="h-10 w-10 rounded-2xl">
              <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=News${i}`} />
              <AvatarFallback>N</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-[10px] font-bold text-slate-800 group-hover:text-blue-500 transition-colors">Universities to announce</p>
              <p className="text-[10px] text-slate-400 truncate w-32">Lorem ipsum dolor </p>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);
