
import React from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IdentificationCard, MagnifyingGlass } from "@phosphor-icons/react";
import { Input } from "@/components/ui/input";
import { IdCardPreviewModal } from "@/components/admissions/IdCardPreviewModal";

const mockStudents = [
  { id: "1", name: "Alice Johnson", class: "Grade 10", email: "alice@example.com", dob: "12 May 2008", phone: "+91 98765 43210" },
  { id: "2", name: "Bob Smith", class: "Grade 11", email: "bob@example.com", dob: "05 Aug 2007", phone: "+91 87654 32109" },
  { id: "3", name: "Charlie Brown", class: "Grade 9", email: "charlie@example.com", dob: "22 Nov 2009", phone: "+91 76543 21098" },
  { id: "4", name: "Diana Prince", class: "Grade 12", email: "diana@example.com", dob: "14 Feb 2006", phone: "+91 65432 10987" },
  { id: "5", name: "Ethan Hunt", class: "Grade 10", email: "ethan@example.com", dob: "30 Sep 2008", phone: "+91 54321 09876" },
  { id: "6", name: "Fiona Gallagher", class: "Grade 11", email: "fiona@example.com", dob: "18 Jul 2007", phone: "+91 43210 98765" },
];

const IdCards = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedStudent, setSelectedStudent] = React.useState<any>(null);
  const [isPreviewOpen, setIsPreviewOpen] = React.useState(false);

  const filteredStudents = mockStudents.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.id.includes(searchQuery)
  );

  const handlePreview = (student: any) => {
    setSelectedStudent(student);
    setIsPreviewOpen(true);
  };

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
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Student ID Cards</h1>
                <p className="text-sm font-medium text-slate-400">Generate and distribute digital ID cards</p>
              </div>
              <div className="relative w-full md:w-80">
                <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <Input 
                  placeholder="Search by name or ID..." 
                  className="pl-12 bg-white/80 border-none rounded-2xl h-12 shadow-sm focus-visible:ring-blue-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2">
              {filteredStudents.map((student) => (
                <Card key={student.id} className="group hover:shadow-xl transition-all duration-500 border-none rounded-[2.5rem] bg-white/80 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Avatar className="h-24 w-24 border-4 border-white shadow-md relative z-10">
                          <AvatarFallback className="bg-blue-50 text-blue-600 font-bold text-2xl">
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors">{student.name}</h3>
                        <p className="text-sm font-medium text-slate-400">{student.class}</p>
                        <div className="pt-2">
                          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                            ID: #{student.id.padStart(4, '0')}
                          </span>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full flex gap-2 border-slate-100 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 rounded-2xl h-11 transition-all duration-300 font-bold"
                        onClick={() => handlePreview(student)}
                      >
                        <IdentificationCard size={20} weight="bold" />
                        View ID Card
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredStudents.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-500">No students found matching your search.</p>
              </div>
            )}
          </div>
        </main>
      </div>

      <IdCardPreviewModal 
        student={selectedStudent} 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
      />
    </div>
  );
};

export default IdCards;
