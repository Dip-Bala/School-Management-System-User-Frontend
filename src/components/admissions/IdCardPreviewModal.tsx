
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { StudentIdCard } from "./StudentIdCard";
import { SendIdCardActions } from "./SendIdCardActions";

interface IdCardPreviewModalProps {
  student: any;
  isOpen: boolean;
  onClose: () => void;
}

export const IdCardPreviewModal = ({ student, isOpen, onClose }: IdCardPreviewModalProps) => {
  if (!student) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl bg-[#e8f1ff] border-none rounded-[3rem] p-8 shadow-2xl">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-2xl font-bold text-slate-800 text-center">Student ID Card</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-10">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-400/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <StudentIdCard student={student} />
          </div>
          <SendIdCardActions student={student} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
