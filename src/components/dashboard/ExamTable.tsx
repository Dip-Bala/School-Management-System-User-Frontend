import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { upcomingExams } from "@/data/dashboardData";

export const ExamTable = () => {
  return (
    <Card className="border-none shadow-sm rounded-[2.5rem] bg-white/80 overflow-hidden">
      <CardHeader className="p-4 md:p-6">
        <CardTitle className="text-base md:text-lg font-bold text-slate-800">Upcoming Examinations</CardTitle>
      </CardHeader>
      <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
        <div className="rounded-3xl border border-slate-50 overflow-hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow className="border-none">
                  <TableHead className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">Exam Name</TableHead>
                  <TableHead className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">Class</TableHead>
                  <TableHead className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">Subject</TableHead>
                  <TableHead className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">Date</TableHead>
                  <TableHead className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingExams.map((exam) => (
                  <TableRow key={exam.id} className="border-slate-50 hover:bg-slate-50/30 transition-colors">
                    <TableCell className="font-bold text-slate-700 px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm whitespace-nowrap">{exam.name}</TableCell>
                    <TableCell className="text-slate-500 font-medium px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm whitespace-nowrap">{exam.class}</TableCell>
                    <TableCell className="text-slate-500 font-medium px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm whitespace-nowrap">{exam.subject}</TableCell>
                    <TableCell className="text-slate-500 font-medium px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm whitespace-nowrap">{exam.date}</TableCell>
                    <TableCell className="px-4 md:px-6 py-3 md:py-4">
                      <Badge 
                        className={
                          exam.status === "Upcoming" 
                            ? "bg-blue-50 text-blue-600 hover:bg-blue-50 border-none px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[9px] md:text-[10px] font-bold whitespace-nowrap" 
                            : "bg-green-50 text-green-600 hover:bg-green-50 border-none px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[9px] md:text-[10px] font-bold whitespace-nowrap"
                        }
                      >
                        {exam.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
