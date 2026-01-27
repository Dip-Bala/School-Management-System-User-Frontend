import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { recentNotices } from "@/data/dashboardData";

export const NoticeList = () => {
  return (
    <Card className="border-none shadow-sm rounded-[2.5rem] bg-white/80 overflow-hidden h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold text-slate-800">Recent Notices</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentNotices.map((notice) => (
            <div 
              key={notice.id} 
              className="group p-4 rounded-3xl border border-slate-50 bg-white/50 hover:bg-white hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <Badge 
                  className={
                    notice.priority === "High" 
                      ? "bg-red-50 text-red-600 hover:bg-red-50 border-none px-3 py-1 rounded-full text-[10px] font-bold" 
                      : "bg-blue-50 text-blue-600 hover:bg-blue-50 border-none px-3 py-1 rounded-full text-[10px] font-bold"
                  }
                >
                  {notice.priority}
                </Badge>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{notice.date}</span>
              </div>
              <h4 className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                {notice.title}
              </h4>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
