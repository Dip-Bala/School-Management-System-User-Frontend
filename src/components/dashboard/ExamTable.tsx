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
      <CardHeader>
        <CardTitle className="text-lg font-bold text-slate-800">Upcoming Examinations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-3xl border border-slate-50 overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow className="border-none">
                <TableHead className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-6 py-4">Exam Name</TableHead>
                <TableHead className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-6 py-4">Class</TableHead>
                <TableHead className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-6 py-4">Subject</TableHead>
                <TableHead className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-6 py-4">Date</TableHead>
                <TableHead className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-6 py-4">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingExams.map((exam) => (
                <TableRow key={exam.id} className="border-slate-50 hover:bg-slate-50/30 transition-colors">
                  <TableCell className="font-bold text-slate-700 px-6 py-4 text-sm">{exam.name}</TableCell>
                  <TableCell className="text-slate-500 font-medium px-6 py-4 text-sm">{exam.class}</TableCell>
                  <TableCell className="text-slate-500 font-medium px-6 py-4 text-sm">{exam.subject}</TableCell>
                  <TableCell className="text-slate-500 font-medium px-6 py-4 text-sm">{exam.date}</TableCell>
                  <TableCell className="px-6 py-4">
                    <Badge 
                      className={
                        exam.status === "Upcoming" 
                          ? "bg-blue-50 text-blue-600 hover:bg-blue-50 border-none px-3 py-1 rounded-full text-[10px] font-bold" 
                          : "bg-green-50 text-green-600 hover:bg-green-50 border-none px-3 py-1 rounded-full text-[10px] font-bold"
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
      </CardContent>
    </Card>
  );
};
