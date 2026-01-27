import React from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { StatCard } from "@/components/dashboard/StatCard";
import { 
  FeeCollectionChart, 
  AttendanceTrendChart, 
  ClassStrengthChart, 
  GenderDistributionChart 
} from "@/components/dashboard/Charts";
import { NoticeList } from "@/components/dashboard/NoticeList";
import { ExamTable } from "@/components/dashboard/ExamTable";
import { statsData } from "@/data/dashboardData";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-[#e8f1ff] overflow-hidden">
      {/* Background circles for decorative effect like in image */}
      <div className="fixed top-[-10%] left-[-5%] w-[40%] h-[60%] bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-300/20 rounded-full blur-3xl -z-10"></div>
      
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden pr-2">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6 pt-2 scrollbar-hide">
          <div className="space-y-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {statsData.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Charts */}
              <div className="lg:col-span-8 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <AttendanceTrendChart />
                  <ClassStrengthChart />
                </div>
                <FeeCollectionChart />
                <ExamTable />
              </div>

              {/* Right Column: Notices and Distribution */}
              <div className="lg:col-span-4 space-y-10">
                <NoticeList />
                <GenderDistributionChart />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
