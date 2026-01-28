
import React from "react";
import { AdmissionForm } from "@/components/admissions/AdmissionForm";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";

const NewAdmission = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="flex h-screen bg-[#e8f1ff] overflow-hidden">
      {/* Background circles for decorative effect */}
      <div className="fixed top-[-10%] left-[-5%] w-[40%] h-[60%] bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-300/20 rounded-full blur-3xl -z-10"></div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden lg:pr-2">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8 pt-4 scrollbar-hide">
          <div className="max-w-7xl mx-auto space-y-6 md:space-y-10">
            <div className="flex flex-col gap-1 px-4">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Student Admission</h1>
              <p className="text-sm font-medium text-slate-400">Register a new student to the system</p>
            </div>
            <AdmissionForm />
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewAdmission;
