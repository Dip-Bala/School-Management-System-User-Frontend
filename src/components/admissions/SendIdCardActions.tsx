
import React from "react";
import { Button } from "@/components/ui/button";
import { DownloadSimple, Printer, PaperPlaneTilt } from "@phosphor-icons/react";
import { toast } from "react-toastify";

interface SendIdCardActionsProps {
  student: any;
}

export const SendIdCardActions = ({ student }: SendIdCardActionsProps) => {
  const handleDownload = () => {
    toast.info(`Downloading ID card for ${student.name}...`);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSend = () => {
    toast.success(`ID card sent to ${student.email} successfully!`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button 
        variant="outline" 
        className="flex gap-2 items-center border-blue-200 text-blue-600 hover:bg-blue-50 rounded-2xl h-11 px-6 font-bold transition-all"
        onClick={handleDownload}
      >
        <DownloadSimple size={18} weight="bold" />
        Download
      </Button>
      <Button 
        variant="outline" 
        className="flex gap-2 items-center border-blue-200 text-blue-600 hover:bg-blue-50 rounded-2xl h-11 px-6 font-bold transition-all"
        onClick={handlePrint}
      >
        <Printer size={18} weight="bold" />
        Print
      </Button>
      <Button 
        className="flex gap-2 items-center bg-blue-600 hover:bg-blue-700 rounded-2xl h-11 px-8 font-bold shadow-sm shadow-blue-200 transition-all"
        onClick={handleSend}
      >
        <PaperPlaneTilt size={18} weight="bold" />
        Send via Email
      </Button>
    </div>
  );
};
