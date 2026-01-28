
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";

export const AdmissionForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Admission Data:", data);
    toast.success("Student Admission successful!");
    reset();
  };

  return (
    <Card className="w-full max-w-4xl mx-auto border-none shadow-sm rounded-[2.5rem] bg-white/80 overflow-hidden">
      <CardHeader className="bg-white/40 pb-6 pt-8 px-8 border-b border-slate-50">
        <CardTitle className="text-xl font-bold text-slate-800">New Student Admission</CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label htmlFor="firstName" className="text-slate-500 font-bold text-xs uppercase tracking-wider ml-1">First Name</Label>
              <Input 
                id="firstName" 
                placeholder="John" 
                {...register("firstName", { required: "First name is required" })} 
                className={cn(
                  "rounded-2xl h-12 border-slate-100 bg-white/50 focus:bg-white transition-all",
                  errors.firstName ? "border-red-500 ring-red-100" : "focus:ring-blue-100"
                )}
              />
              {errors.firstName && <span className="text-[10px] font-bold text-red-500 ml-1 uppercase">{errors.firstName.message as string}</span>}
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="lastName" className="text-slate-500 font-bold text-xs uppercase tracking-wider ml-1">Last Name</Label>
              <Input 
                id="lastName" 
                placeholder="Doe" 
                {...register("lastName", { required: "Last name is required" })}
                className={cn(
                  "rounded-2xl h-12 border-slate-100 bg-white/50 focus:bg-white transition-all",
                  errors.lastName ? "border-red-500 ring-red-100" : "focus:ring-blue-100"
                )}
              />
              {errors.lastName && <span className="text-[10px] font-bold text-red-500 ml-1 uppercase">{errors.lastName.message as string}</span>}
            </div>

            <div className="space-y-3">
              <Label htmlFor="email" className="text-slate-500 font-bold text-xs uppercase tracking-wider ml-1">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john.doe@example.com" 
                {...register("email", { required: "Email is required" })}
                className={cn(
                  "rounded-2xl h-12 border-slate-100 bg-white/50 focus:bg-white transition-all",
                  errors.email ? "border-red-500 ring-red-100" : "focus:ring-blue-100"
                )}
              />
              {errors.email && <span className="text-[10px] font-bold text-red-500 ml-1 uppercase">{errors.email.message as string}</span>}
            </div>

            <div className="space-y-3">
              <Label htmlFor="phone" className="text-slate-500 font-bold text-xs uppercase tracking-wider ml-1">Phone Number</Label>
              <Input 
                id="phone" 
                placeholder="+1 234 567 890" 
                {...register("phone", { required: "Phone number is required" })}
                className={cn(
                  "rounded-2xl h-12 border-slate-100 bg-white/50 focus:bg-white transition-all",
                  errors.phone ? "border-red-500 ring-red-100" : "focus:ring-blue-100"
                )}
              />
              {errors.phone && <span className="text-[10px] font-bold text-red-500 ml-1 uppercase">{errors.phone.message as string}</span>}
            </div>

            <div className="space-y-3">
              <Label htmlFor="class" className="text-slate-500 font-bold text-xs uppercase tracking-wider ml-1">Class / Grade</Label>
              <Input 
                id="class" 
                placeholder="Grade 10" 
                {...register("class", { required: "Class is required" })}
                className={cn(
                  "rounded-2xl h-12 border-slate-100 bg-white/50 focus:bg-white transition-all",
                  errors.class ? "border-red-500 ring-red-100" : "focus:ring-blue-100"
                )}
              />
              {errors.class && <span className="text-[10px] font-bold text-red-500 ml-1 uppercase">{errors.class.message as string}</span>}
            </div>

            <div className="space-y-3">
              <Label htmlFor="dob" className="text-slate-500 font-bold text-xs uppercase tracking-wider ml-1">Date of Birth</Label>
              <Input 
                id="dob" 
                type="date" 
                {...register("dob", { required: "Date of birth is required" })}
                className={cn(
                  "rounded-2xl h-12 border-slate-100 bg-white/50 focus:bg-white transition-all",
                  errors.dob ? "border-red-500 ring-red-100" : "focus:ring-blue-100"
                )}
              />
              {errors.dob && <span className="text-[10px] font-bold text-red-500 ml-1 uppercase">{errors.dob.message as string}</span>}
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="address" className="text-slate-500 font-bold text-xs uppercase tracking-wider ml-1">Home Address</Label>
            <Input 
              id="address" 
              placeholder="123 Main St, City, Country" 
              {...register("address", { required: "Address is required" })}
              className={cn(
                "rounded-2xl h-12 border-slate-100 bg-white/50 focus:bg-white transition-all",
                errors.address ? "border-red-500 ring-red-100" : "focus:ring-blue-100"
              )}
            />
            {errors.address && <span className="text-[10px] font-bold text-red-500 ml-1 uppercase">{errors.address.message as string}</span>}
          </div>

          <div className="flex justify-end gap-4 pt-6 border-t border-slate-50">
            <Button 
              type="button" 
              variant="ghost" 
              onClick={() => reset()}
              className="rounded-2xl px-8 h-12 font-bold text-slate-400 hover:text-slate-600 hover:bg-slate-100/50"
            >
              Reset Form
            </Button>
            <Button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 rounded-2xl px-10 h-12 font-bold shadow-sm shadow-blue-200"
            >
              Register Student
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

import { cn } from "@/lib/utils";
