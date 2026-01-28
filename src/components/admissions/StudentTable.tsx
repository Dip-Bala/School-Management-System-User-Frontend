
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, PencilSimple, Trash } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const mockStudents = [
  { id: "1", name: "Alice Johnson", class: "Grade 10", email: "alice@example.com", status: "Active", date: "2024-01-15" },
  { id: "2", name: "Bob Smith", class: "Grade 11", email: "bob@example.com", status: "Pending", date: "2024-01-20" },
  { id: "3", name: "Charlie Brown", class: "Grade 9", email: "charlie@example.com", status: "Active", date: "2024-01-10" },
  { id: "4", name: "Diana Prince", class: "Grade 12", email: "diana@example.com", status: "Active", date: "2024-01-25" },
  { id: "5", name: "Ethan Hunt", class: "Grade 10", email: "ethan@example.com", status: "Inactive", date: "2024-01-05" },
];

export const StudentTable = () => {
  return (
    <Card className="border-none shadow-sm rounded-[2.5rem] bg-white/80 overflow-hidden">
      <CardHeader className="p-6 md:p-8">
        <CardTitle className="text-lg md:text-xl font-bold text-slate-800">Student Enrollment Records</CardTitle>
      </CardHeader>
      <CardContent className="p-6 md:p-8 pt-0 md:pt-0">
        <div className="rounded-[2rem] border border-slate-50 overflow-hidden bg-white/50">
          <div className="overflow-x-auto scrollbar-hide">
            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow className="border-none">
                  <TableHead className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-6 py-4">Student ID</TableHead>
                  <TableHead className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-6 py-4">Name</TableHead>
                  <TableHead className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-6 py-4">Class</TableHead>
                  <TableHead className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-6 py-4">Email</TableHead>
                  <TableHead className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-6 py-4">Status</TableHead>
                  <TableHead className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-6 py-4">Admission Date</TableHead>
                  <TableHead className="text-right text-[10px] font-bold text-slate-400 uppercase tracking-wider px-6 py-4 whitespace-nowrap">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockStudents.map((student) => (
                  <TableRow key={student.id} className="border-slate-50 hover:bg-slate-50/30 transition-colors">
                    <TableCell className="font-bold text-blue-600 px-6 py-5 text-sm">#{student.id.padStart(4, '0')}</TableCell>
                    <TableCell className="font-bold text-slate-700 px-6 py-5 text-sm">{student.name}</TableCell>
                    <TableCell className="text-slate-500 font-medium px-6 py-5 text-sm">{student.class}</TableCell>
                    <TableCell className="text-slate-500 font-medium px-6 py-5 text-sm">{student.email}</TableCell>
                    <TableCell className="px-6 py-5">
                      <Badge 
                        className={cn(
                          "border-none px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                          student.status === "Active" ? "bg-emerald-50 text-emerald-600 hover:bg-emerald-50" :
                          student.status === "Pending" ? "bg-amber-50 text-amber-600 hover:bg-amber-50" :
                          "bg-rose-50 text-rose-600 hover:bg-rose-50"
                        )}
                      >
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-slate-500 font-medium px-6 py-5 text-sm">{student.date}</TableCell>
                    <TableCell className="px-6 py-5 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-blue-600 hover:bg-blue-50 transition-colors">
                          <Eye size={18} weight="bold" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-amber-600 hover:bg-amber-50 transition-colors">
                          <PencilSimple size={18} weight="bold" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-rose-600 hover:bg-rose-50 transition-colors">
                          <Trash size={18} weight="bold" />
                        </Button>
                      </div>
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
