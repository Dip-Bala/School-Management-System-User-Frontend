
import React from "react";
import { StudentTable } from "@/components/admissions/StudentTable";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import { Plus } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const StudentList = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const navigate = useNavigate();

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
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-4">
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Student Directory</h1>
                <p className="text-sm font-medium text-slate-400">View and manage all enrolled students</p>
              </div>
              <Button 
                onClick={() => navigate("/admissions/new")}
                className="bg-blue-600 hover:bg-blue-700 flex gap-2 rounded-2xl px-6 h-12 shadow-sm shadow-blue-200"
              >
                <Plus size={20} weight="bold" />
                New Admission
              </Button>
            </div>
            <StudentTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentList;
