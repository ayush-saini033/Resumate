"use client";
import React, { useEffect, useState } from "react";
import { FETCH_ALL_RESUME } from "@/app/(main)/_routes/fetch-resume.routes";
import axios from "axios";
import ResumeCard from "./_components/ResumeCard";
import {
  Circle,
  Diamond,
  Edit3,
  Hexagon,
  PenSquareIcon,
  Square,
  Star,
  Triangle,
  Zap,
} from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { MdOutlineSupportAgent } from "react-icons/md";
import { useRouter } from "next/navigation";
import {DELETE_RESUME_BY_ID} from "../../_routes/delete-resume.route"
import { ShowToast } from "../../_shared/show-toast";

const FloatingDot = ({ className, delay = 0, animationType = "ping" }) => {
  const dotStyle = {
    animationDelay: `${delay}s`,
  };

  const animationClass = {
    ping: "animate-ping",
    pulse: "animate-pulse",
    bounce: "animate-bounce",
  };

  return (
    <div
      className={`absolute rounded-full ${animationClass[animationType]} ${className}`}
      style={dotStyle}
    />
  );
};

const EditPage = () => {
  const [resumesData, setResumesData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchAllResumes() {
      try {
        const res = await axios.get(FETCH_ALL_RESUME);
        if (res.data.success) {
          setResumesData(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllResumes();
  }, []);

  const onDelete = async (resumeId) => {
    try {
      const res = await axios.delete(DELETE_RESUME_BY_ID(resumeId))
      console.log(res)
      if(res.data.success) {
        ShowToast(true,res.data.message)
        setResumesData((prev) =>
          prev.filter((resume) => resume._id !== resumeId)
        );
      }else{
        ShowToast(false,"Something went wrong")
      }
    } catch (error) {
      console.log(error)
      ShowToast(false,"Internal server error")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden pl-22 md:pl-24 lg:pl-28">
      {/* Global CSS for animations */}
      <style jsx>{`
        @keyframes float-complex {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            opacity: 0.08;
          }
          25% {
            transform: translateY(-40px) translateX(20px) rotate(90deg)
              scale(1.1);
            opacity: 0.15;
          }
          50% {
            transform: translateY(-20px) translateX(-15px) rotate(180deg)
              scale(0.9);
            opacity: 0.2;
          }
          75% {
            transform: translateY(-60px) translateX(25px) rotate(270deg)
              scale(1.05);
            opacity: 0.12;
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(360deg) scale(1);
            opacity: 0.08;
          }
        }

        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.18;
          }
        }

        @keyframes float-slow {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.06;
          }
          33% {
            transform: translateY(-25px) translateX(15px) rotate(120deg);
            opacity: 0.12;
          }
          66% {
            transform: translateY(-10px) translateX(-10px) rotate(240deg);
            opacity: 0.15;
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(360deg);
            opacity: 0.06;
          }
        }

        .animate-float-complex {
          animation: float-complex 12s ease-in-out infinite;
        }

        .animate-float-gentle {
          animation: float-gentle 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
      `}</style>

      {/* Enhanced Animated Background Shapes */}
      <div className="fixed inset-0 pointer-events-none ml-22 md:ml-24 lg:ml-28">
        {/* Primary floating shapes with different animation types */}
        <div
          className="absolute text-blue-500 top-10 left-10 w-12 h-12 md:w-16 md:h-16 animate-float-complex"
          style={{ animationDelay: "0s" }}
        >
          <Circle className="w-full h-full" strokeWidth={1.5} />
        </div>

        <div
          className="absolute text-blue-400 top-32 right-10 md:right-20 w-10 h-10 md:w-12 md:h-12 animate-float-gentle"
          style={{ animationDelay: "2s" }}
        >
          <Triangle className="w-full h-full" strokeWidth={1.5} />
        </div>

        <div
          className="absolute text-blue-600 top-64 left-1/3 w-14 h-14 md:w-20 md:h-20 animate-float-slow"
          style={{ animationDelay: "1s" }}
        >
          <Square className="w-full h-full" strokeWidth={1.5} />
        </div>

        <div
          className="absolute text-blue-300 bottom-24 right-6 md:bottom-32 md:right-10 w-10 h-10 md:w-14 md:h-14 animate-float-complex"
          style={{ animationDelay: "3s" }}
        >
          <Hexagon className="w-full h-full" strokeWidth={1.5} />
        </div>

        <div
          className="absolute text-blue-500 bottom-8 left-10 md:bottom-10 md:left-20 w-12 h-12 md:w-18 md:h-18 animate-float-gentle"
          style={{ animationDelay: "1.5s" }}
        >
          <Star className="w-full h-full" strokeWidth={1.5} />
        </div>

        <div
          className="absolute text-blue-400 top-1/2 right-1/4 md:right-1/3 w-12 h-12 md:w-16 md:h-16 animate-float-slow"
          style={{ animationDelay: "2.5s" }}
        >
          <Diamond className="w-full h-full" strokeWidth={1.5} />
        </div>

        {/* Secondary floating shapes */}
        <div
          className="absolute text-blue-700 top-1/4 left-1/4 w-10 h-10 md:w-14 md:h-14 animate-float-complex"
          style={{ animationDelay: "4s" }}
        >
          <Hexagon className="w-full h-full" strokeWidth={1.5} />
        </div>

        <div
          className="absolute text-blue-500 bottom-1/4 right-1/4 w-12 h-12 md:w-16 md:h-16 animate-float-gentle"
          style={{ animationDelay: "0.8s" }}
        >
          <Star className="w-full h-full" strokeWidth={1.5} />
        </div>

        <div
          className="absolute text-blue-400 top-3/4 left-6 md:left-10 w-8 h-8 md:w-12 md:h-12 animate-float-slow"
          style={{ animationDelay: "3.2s" }}
        >
          <Diamond className="w-full h-full" strokeWidth={1.5} />
        </div>

        <div
          className="absolute text-blue-300 top-20 right-20 md:right-40 w-16 h-10 md:w-20 md:h-12 animate-float-complex"
          style={{ animationDelay: "2.8s" }}
        >
          <Circle className="w-full h-full" strokeWidth={1.5} />
        </div>

        <div
          className="absolute text-blue-600 bottom-16 left-1/2 w-14 h-14 md:w-18 md:h-18 animate-float-gentle"
          style={{ animationDelay: "1.7s" }}
        >
          <Triangle className="w-full h-full" strokeWidth={1.5} />
        </div>

        {/* Additional smaller shapes */}
        <div
          className="absolute text-blue-500 top-1/3 right-1/3 w-6 h-6 md:w-8 md:h-8 animate-float-slow"
          style={{ animationDelay: "4.5s" }}
        >
          <Square className="w-full h-full" strokeWidth={1.5} />
        </div>

        <div
          className="absolute text-blue-400 bottom-1/3 left-1/5 w-8 h-8 md:w-10 md:h-10 animate-float-complex"
          style={{ animationDelay: "0.5s" }}
        >
          <Hexagon className="w-full h-full" strokeWidth={1.5} />
        </div>

        <div
          className="absolute text-blue-600 top-2/3 right-1/5 w-10 h-10 md:w-12 md:h-12 animate-float-gentle"
          style={{ animationDelay: "3.8s" }}
        >
          <Star className="w-full h-full" strokeWidth={1.5} />
        </div>

        {/* Floating dots with different animations */}
        <FloatingDot
          className="top-20 right-1/2 w-2 h-2 bg-blue-400 opacity-20"
          delay={1}
          animationType="ping"
        />
        <FloatingDot
          className="bottom-40 left-1/2 w-1 h-1 bg-blue-300 opacity-30"
          delay={3}
          animationType="pulse"
        />
        <FloatingDot
          className="top-1/3 left-6 md:left-10 w-2 h-2 md:w-3 md:h-3 bg-blue-500 opacity-15"
          delay={2}
          animationType="bounce"
        />
        <FloatingDot
          className="top-3/4 right-1/3 w-1.5 h-1.5 bg-blue-400 opacity-25"
          delay={4}
          animationType="ping"
        />
        <FloatingDot
          className="bottom-20 right-20 w-2 h-2 bg-blue-300 opacity-20"
          delay={1.5}
          animationType="pulse"
        />
        <FloatingDot
          className="top-40 left-1/4 w-1 h-1 bg-blue-500 opacity-30"
          delay={2.8}
          animationType="bounce"
        />

        {/* Additional scattered micro dots */}
        <FloatingDot
          className="top-60 right-10 w-1 h-1 bg-blue-400 opacity-15"
          delay={0.5}
          animationType="pulse"
        />
        <FloatingDot
          className="bottom-60 left-20 w-1.5 h-1.5 bg-blue-500 opacity-20"
          delay={3.5}
          animationType="ping"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center py-12 px-4 sm:py-16 sm:px-6">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Edit3 className="text-white" size={22} />
            </div>
            <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
          </div>

          <h1
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent"
            style={{
              textShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
            }}
          >
            Edit Resume Page
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Craft Your Professional Story
          </p>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Transform your career narrative with our intelligent resume builder.
            Select from your existing resumes below or create something entirely
            new that captures your unique professional journey.
          </p>

          {/* Stats or Features */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mt-12">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1 flex items-center justify-center gap-2">
                <PenSquareIcon className="h-6 w-6" />
                {resumesData.length}
              </div>
              <div className="text-sm text-gray-500">Active Resumes</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1 flex items-center justify-center gap-1">
                <Zap size={18} /> AI
              </div>
              <div className="text-sm text-gray-500">Powered</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1 flex items-center justify-center gap-2">
                <MdOutlineSupportAgent className="text-3xl" />
                24/7
              </div>
              <div className="text-sm text-gray-500">Support</div>
            </div>
          </div>
        </div>

        {/* Resume Grid Section */}
        <div className="px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-1">
                  Your Resume Collection
                </h2>
                <p className="text-gray-400">
                  Choose a resume to edit or customize
                </p>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                + Create New Resume
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resumesData.length > 0
                ? resumesData?.map((resume, index) => (
                    <ResumeCard
                      key={index}
                      firstName={resume.firstName}
                      lastName={resume.lastName}
                      title={resume.title}
                      jobTitle={resume.jobTitle}
                      onEdit={() =>
                        router.push(
                          `/dashboard/edit/${resume._id}?title=${resume.title}`
                        )
                      }
                      onDelete={() => onDelete(resume._id)}
                    />
                  ))
                : // Skeleton placeholders
                  Array.from({ length: 6 }).map((_, index) => (
                    <Skeleton
                      key={index}
                      className="w-80 h-56 rounded-2xl bg-slate-800/40"
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Gradient Overlays */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-blue-900/5 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};

export default EditPage;
