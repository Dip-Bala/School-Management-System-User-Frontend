
import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface StudentIdCardProps {
  student: {
    id: string;
    name: string;
    class: string;
    email: string;
    phone?: string;
    dob?: string;
    avatar?: string;
  };
}

export const StudentIdCard = ({ student }: StudentIdCardProps) => {
  return (
    <Card className="w-80 h-[460px] overflow-hidden relative border-none shadow-2xl bg-white flex flex-col items-center p-0 rounded-[2rem]">
      {/* Header Decoration */}
      <div className="w-full h-28 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-[-20px] left-[-20px] w-40 h-40 bg-blue-500 rounded-full opacity-20" />
        <div className="absolute bottom-[-10px] right-[-10px] w-20 h-20 bg-blue-400 rounded-full opacity-30" />
        <div className="h-full flex flex-col items-center justify-center text-white relative z-10 p-4 pt-6">
          <h3 className="font-black text-xl tracking-tighter">GURUKOOL<span className="text-blue-200">X</span></h3>
          <p className="text-[9px] font-bold opacity-70 uppercase tracking-[0.2em] mt-1">Student Identity Card</p>
        </div>
      </div>

      {/* Profile Image */}
      <div className="mt-[-45px] relative z-20">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500" />
          <Avatar className="h-28 w-28 border-4 border-white shadow-xl relative">
            <AvatarImage src={student.avatar} className="object-cover" />
            <AvatarFallback className="bg-blue-50 text-blue-600 text-2xl font-black">
              {student.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Student Details */}
      <div className="flex-1 w-full px-8 pt-6 pb-8 flex flex-col items-center space-y-5">
        <div className="text-center">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">{student.name}</h2>
          <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mt-1">{student.class}</p>
        </div>

        <div className="w-full space-y-3 pt-4 border-t border-slate-100">
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Student ID</span>
            <span className="text-sm text-slate-700 font-black">#{student.id.padStart(4, '0')}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Date of Birth</span>
            <span className="text-sm text-slate-700 font-bold">{student.dob || "01 Jan 2010"}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email</span>
            <span className="text-sm text-slate-700 font-bold truncate max-w-[140px]">{student.email}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Phone</span>
            <span className="text-sm text-slate-700 font-bold">{student.phone || "+91 98765 43210"}</span>
          </div>
        </div>

        {/* QR Code Placeholder */}
        <div className="mt-auto bg-slate-50 p-3 rounded-2xl border border-slate-100 group-hover:bg-white transition-colors duration-300">
          <div className="w-16 h-16 bg-white border border-slate-200 rounded-lg flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:4px_4px] opacity-20" />
            <div className="w-10 h-10 bg-slate-800 opacity-5 rounded-sm" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full py-3 bg-slate-50 border-t border-slate-100 text-center">
        <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">www.gurukoolx.com</p>
      </div>
    </Card>
  );
};
