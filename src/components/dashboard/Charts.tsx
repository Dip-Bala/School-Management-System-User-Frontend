import React from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  feeCollectionData, 
  attendanceTrendData, 
  classStrengthData, 
  genderDistributionData 
} from "@/data/dashboardData";

const COLORS = ["#3b82f6", "#f472b6"];

export const FeeCollectionChart = () => (
  <Card className="border-none shadow-sm rounded-[2.5rem] bg-white/80 overflow-hidden">
    <CardHeader className="p-4 md:p-6">
      <CardTitle className="text-base md:text-lg font-bold text-slate-800">Monthly Fee Collection</CardTitle>
    </CardHeader>
    <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
      <div className="h-[250px] md:h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={feeCollectionData}>
            <defs>
              <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 9, fontWeight: 600}}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 9, fontWeight: 600}}
              tickFormatter={(value) => `₹${value}K`}
              width={35}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', fontSize: '12px' }}
              formatter={(value) => [`₹${value}K`, 'Collection']}
            />
            <Area 
              type="monotone" 
              dataKey="amount" 
              stroke="#3b82f6" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorAmount)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

export const AttendanceTrendChart = () => (
  <Card className="border-none shadow-sm rounded-[2.5rem] bg-white/80 overflow-hidden">
    <CardHeader className="p-4 md:p-6">
      <CardTitle className="text-base md:text-lg font-bold text-slate-800">Weekly Attendance</CardTitle>
    </CardHeader>
    <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
      <div className="h-[200px] md:h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={attendanceTrendData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 9, fontWeight: 600}}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 9, fontWeight: 600}}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
              width={35}
            />
            <Tooltip 
              cursor={{fill: '#f8fafc'}}
              contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', fontSize: '12px' }}
              formatter={(value) => [`${value}%`, 'Attendance']}
            />
            <Bar 
              dataKey="attendance" 
              fill="#3b82f6" 
              radius={[4, 4, 4, 4]} 
              barSize={window.innerWidth < 768 ? 12 : 20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

export const ClassStrengthChart = () => (
  <Card className="border-none shadow-sm rounded-[2.5rem] bg-white/80 overflow-hidden">
    <CardHeader className="p-4 md:p-6">
      <CardTitle className="text-base md:text-lg font-bold text-slate-800">Class Strength</CardTitle>
    </CardHeader>
    <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
      <div className="h-[200px] md:h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={classStrengthData}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
            <XAxis 
              type="number"
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 9, fontWeight: 600}}
            />
            <YAxis 
              type="category"
              dataKey="class" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 9, fontWeight: 600}}
              width={40}
            />
            <Tooltip 
              cursor={{fill: '#f8fafc'}}
              contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', fontSize: '12px' }}
            />
            <Bar 
              dataKey="strength" 
              fill="#8b5cf6" 
              radius={[0, 4, 4, 0]} 
              barSize={window.innerWidth < 768 ? 8 : 12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

export const GenderDistributionChart = () => (
  <Card className="border-none shadow-sm rounded-[2.5rem] bg-white/80 overflow-hidden">
    <CardHeader className="p-4 md:p-6">
      <CardTitle className="text-base md:text-lg font-bold text-slate-800">Distribution</CardTitle>
    </CardHeader>
    <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
      <div className="h-[180px] md:h-[200px] w-full flex flex-col items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={genderDistributionData}
              cx="50%"
              cy="50%"
              innerRadius={window.innerWidth < 768 ? 40 : 50}
              outerRadius={window.innerWidth < 768 ? 60 : 70}
              paddingAngle={8}
              dataKey="value"
            >
              {genderDistributionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} cornerRadius={8} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', fontSize: '12px' }} />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex gap-4 mt-2">
          {genderDistributionData.map((entry, index) => (
            <div key={entry.name} className="flex items-center gap-1.5">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full" style={{backgroundColor: COLORS[index]}}></div>
              <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-tight">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);
