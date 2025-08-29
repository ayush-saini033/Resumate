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

// Animated Shape Components
const AnimatedShape = ({ type, className, delay = 0 }) => {
  const baseClasses = "absolute opacity-10 animate-float";
  const delayStyle = { animationDelay: `${delay}s` };

  const shapes = {
    circle: (
      <Circle className={`${baseClasses} ${className}`} style={delayStyle} />
    ),
    square: (
      <Square className={`${baseClasses} ${className}`} style={delayStyle} />
    ),
    triangle: (
      <Triangle className={`${baseClasses} ${className}`} style={delayStyle} />
    ),
    star: <Star className={`${baseClasses} ${className}`} style={delayStyle} />,
    diamond: (
      <Diamond className={`${baseClasses} ${className}`} style={delayStyle} />
    ),
    hexagon: (
      <Hexagon className={`${baseClasses} ${className}`} style={delayStyle} />
    ),
    oval: (
      <div
        className={`${baseClasses} ${className} rounded-full`}
        style={{
          ...delayStyle,
          transform: "scaleX(1.6)", // stretch circle → oval
        }}
      ></div>
    ),
    wave: (
      <div className={`${baseClasses} ${className}`} style={delayStyle}>
        <svg viewBox="0 0 1440 320" className="w-full h-full fill-current">
          <path d="M0,96L40,112C80,128,160,160,240,186.7C320,213,400,235,480,245.3C560,256,640,256,720,245.3C800,235,880,213,960,186.7C1040,160,1120,128,1200,138.7C1280,149,1360,203,1400,229.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>
      </div>
    ),
  };

  return shapes[type];
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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden pl-22 md:pl-24 lg:pl-28">
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 pointer-events-none ml-22 md:ml-24 lg:ml-28">
        <AnimatedShape
          type="circle"
          className="text-blue-500 top-10 left-10 w-12 h-12 md:w-16 md:h-16"
          delay={0}
        />
        <AnimatedShape
          type="triangle"
          className="text-blue-400 top-32 right-10 md:right-20 w-10 h-10 md:w-12 md:h-12"
          delay={2}
        />
        <AnimatedShape
          type="square"
          className="text-blue-600 top-64 left-1/3 w-14 h-14 md:w-20 md:h-20"
          delay={1}
        />
        <AnimatedShape
          type="circle"
          className="text-blue-300 bottom-24 right-6 md:bottom-32 md:right-10 w-10 h-10 md:w-14 md:h-14"
          delay={3}
        />
        <AnimatedShape
          type="triangle"
          className="text-blue-500 bottom-8 left-10 md:bottom-10 md:left-20 w-12 h-12 md:w-18 md:h-18"
          delay={1.5}
        />
        <AnimatedShape
          type="square"
          className="text-blue-400 top-1/2 right-1/4 md:right-1/3 w-12 h-12 md:w-16 md:h-16"
          delay={2.5}
        />

        {/* New Shapes */}
        <AnimatedShape
          type="hexagon"
          className="text-blue-700 top-1/4 left-1/4 w-10 h-10 md:w-14 md:h-14"
          delay={1}
        />
        <AnimatedShape
          type="star"
          className="text-blue-500 bottom-1/4 right-1/4 w-12 h-12 md:w-16 md:h-16"
          delay={2.2}
        />
        <AnimatedShape
          type="diamond"
          className="text-blue-400 top-3/4 left-6 md:left-10 w-8 h-8 md:w-12 md:h-12"
          delay={0.8}
        />
        <AnimatedShape
          type="oval"
          className="text-blue-300 top-20 right-20 md:right-40 w-16 h-10 md:w-20 md:h-12"
          delay={2.8}
        />
        <AnimatedShape
          type="wave"
          className="text-blue-600 bottom-16 left-1/2 w-24 h-12 md:w-32 md:h-16"
          delay={1.7}
        />

        {/* Additional floating dots */}
        <div
          className="absolute top-20 right-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-20"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-30"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/3 left-6 md:left-10 w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full animate-bounce opacity-15"
          style={{ animationDelay: "2s" }}
        ></div>
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

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
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
                      onEdit={() => router.push(`/dashboard/edit/${resume._id}?title=${resume.title}`)}
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

      {/* Gradient Overlays */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-blue-900/5 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};

export default EditPage;
