"use client";

import React, { useState, useEffect } from "react";
import { FileText, Clock, Star, Download, Edit3, FilePlus2, Loader2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { CREATE_RESUME } from "@/app/(main)/_routes/create-resume.routes";
import { Macondo } from "next/font/google";
import axios from "axios";

import { ShowToast } from "@/app/(main)/_shared/show-toast";
import { useRouter } from "next/navigation";

const macondo = Macondo({
  subsets: ["latin"],
  weight: ["400"],
});

const CreateResumeButton = () => {
  const [title, setTitle] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  const router = useRouter();

  const handleEdit = async () => {
    try {
      setIsLoading(true)
      const res = await axios.post(CREATE_RESUME, {
        title,
      });

      console.log(res.data);
      if (res.data.success) {
        ShowToast(true, res.data.message);
        router.push(`/dashboard/create/${res.data.resumeId}/edit-resume`)
      }
    } catch (error) {
      console.log(error);
      ShowToast(
        false,
        error.response?.data?.message || "Something went wrong !!"
      );
    } finally{
      setIsLoading(false)
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold  rounded-xl shadow-2xl px-5 py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-pink-500/25 focus:outline-none cursor-pointer">
        <div className="relative flex items-center space-x-3">
          <FileText className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />
          <span>Create Resume</span>
        </div>
        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] skew-x-12 transition-transform duration-700"></div>
      </DialogTrigger>
      <DialogContent className="bg-transparent backdrop-blur-md text-white border border-blue-500">
        <DialogHeader>
          <DialogTitle>
            <div className="mb-8 text-center">
              <h1
                className={`text-6xl font-bold ${macondo.className} bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent`}
              >
                Resumate
              </h1>
              <p className="text-gray-200 text-sm">
                Build your dream resume in minutes, get noticed in seconds
              </p>
            </div>
          </DialogTitle>
          <DialogDescription></DialogDescription>
          <div className="space-y-6">
            {/* Title Input */}
            <div>
              <label
                htmlFor="title"
                className="block font-medium text-gray-200 mb-2"
              >
                Resume Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Frontend Developer Resume"
                className="w-full px-4 py-3 bg-blue-950/40 border border-blue-800/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500/60 transition-all duration-200"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-4">
              {/* Edit Button */}
              <button
                onClick={handleEdit}
                disabled={!title.trim()}
                className="flex-1 group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="relative flex items-center justify-center space-x-2">
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Creating...</span>
                    </>
                  ) : (
                    <>
                      <FilePlus2 className="w-5 h-5" />
                      <span>Create Resume</span>
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const CreditsDisplay = ({ credits = 15 }) => {
  return (
    <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Credits Remaining</h3>
        <Star className="w-6 h-6 text-yellow-400" />
      </div>
      <div className="relative">
        <div className="text-4xl font-bold text-blue-400 mb-2">{credits}</div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-500"
            style={{ width: `${Math.min((credits / 20) * 100, 100)}%` }}
          ></div>
        </div>
        <p className="text-slate-400 text-sm mt-2">Credits refresh monthly</p>
      </div>
    </div>
  );
};

const RecentResumeCard = ({ resume, index }) => {
  return (
    <div
      className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer transform hover:scale-105"
      style={{
        animationDelay: `${index * 0.1}s`,
        animation: "slideInUp 0.6s ease-out forwards",
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
              {resume.title}
            </h4>
            <p className="text-slate-400 text-sm">{resume.type}</p>
          </div>
        </div>
        <Download className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-slate-400">
          <Clock className="w-4 h-4" />
          <span>Modified {resume.lastModified}</span>
        </div>
        <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
          {resume.status}
        </div>
      </div>
    </div>
  );
};

const CreateResumePage = () => {
  const [mounted, setMounted] = useState(false);

  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
    }));
    setParticles(generated);
  }, []);

  const recentResumes = [
    {
      id: 1,
      title: "Software Engineer Resume",
      type: "Technical",
      lastModified: "2 days ago",
      status: "Complete",
    },
    {
      id: 2,
      title: "Marketing Manager CV",
      type: "Business",
      lastModified: "1 week ago",
      status: "Draft",
    },
    {
      id: 3,
      title: "Designer Portfolio",
      type: "Creative",
      lastModified: "3 days ago",
      status: "Complete",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="wave-gradient-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="rgb(59, 130, 246)"
                stopOpacity="0.1"
              />
              <stop
                offset="50%"
                stopColor="rgb(147, 197, 253)"
                stopOpacity="0.2"
              />
              <stop
                offset="100%"
                stopColor="rgb(59, 130, 246)"
                stopOpacity="0.1"
              />
            </linearGradient>
            <linearGradient
              id="wave-gradient-2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="rgb(147, 197, 253)"
                stopOpacity="0.15"
              />
              <stop
                offset="50%"
                stopColor="rgb(59, 130, 246)"
                stopOpacity="0.25"
              />
              <stop
                offset="100%"
                stopColor="rgb(147, 197, 253)"
                stopOpacity="0.15"
              />
            </linearGradient>
            <linearGradient
              id="wave-gradient-3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="rgb(59, 130, 246)"
                stopOpacity="0.08"
              />
              <stop
                offset="50%"
                stopColor="rgb(147, 197, 253)"
                stopOpacity="0.18"
              />
              <stop
                offset="100%"
                stopColor="rgb(59, 130, 246)"
                stopOpacity="0.08"
              />
            </linearGradient>
          </defs>

          <path
            d="M0,400 C300,350 600,450 900,400 C1050,375 1150,425 1200,400 L1200,800 L0,800 Z"
            fill="url(#wave-gradient-1)"
            className="wave-animation-1"
          />
          <path
            d="M0,450 C250,400 550,500 850,450 C1000,425 1100,475 1200,450 L1200,800 L0,800 Z"
            fill="url(#wave-gradient-2)"
            className="wave-animation-2"
          />
          <path
            d="M0,500 C200,450 500,550 800,500 C950,475 1050,525 1200,500 L1200,800 L0,800 Z"
            fill="url(#wave-gradient-3)"
            className="wave-animation-3"
          />
        </svg>
      </div>
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Hero Section */}
          <div className="lg:col-span-2">
            <div
              className={`mb-12 transition-all duration-1000 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                  Create Your Perfect
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Professional Resume
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                Stand out from the crowd with our AI-powered resume builder.
                Create stunning, ATS-friendly resumes that get you noticed by
                top employers.
              </p>
            </div>

            <div
              className={`mb-12 transition-all duration-1000 delay-300 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <CreateResumeButton />
            </div>

            {/* Features */}
            <div
              className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-500 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">ATS Optimized</h3>
                <p className="text-slate-400 text-sm">
                  Resume formats that pass through applicant tracking systems
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Enhanced</h3>
                <p className="text-slate-400 text-sm">
                  Smart suggestions and content optimization powered by AI
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Multiple Formats</h3>
                <p className="text-slate-400 text-sm">
                  Export to PDF, Word, or share with a custom link
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Credits */}
            <div
              className={`transition-all duration-1000 delay-700 ${
                mounted
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <CreditsDisplay />
            </div>

            {/* Recent Resumes */}
            <div
              className={`transition-all duration-1000 delay-900 ${
                mounted
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <h2 className="text-2xl font-bold mb-6 text-white">
                Recent Resumes
              </h2>
              <div className="space-y-4">
                {recentResumes.map((resume, index) => (
                  <RecentResumeCard
                    key={resume.id}
                    resume={resume}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes wave1 {
          0%,
          100% {
            d: path(
              "M0,400 C300,350 600,450 900,400 C1050,375 1150,425 1200,400 L1200,800 L0,800 Z"
            );
          }

          50% {
            d: path(
              "M0,420 C300,370 600,470 900,420 C1050,395 1150,445 1200,420 L1200,800 L0,800 Z"
            );
          }
        }

        @keyframes wave2 {
          0%,
          100% {
            d: path(
              "M0,450 C250,400 550,500 850,450 C1000,425 1100,475 1200,450 L1200,800 L0,800 Z"
            );
          }

          50% {
            d: path(
              "M0,470 C250,420 550,520 850,470 C1000,445 1100,495 1200,470 L1200,800 L0,800 Z"
            );
          }
        }

        @keyframes wave3 {
          0%,
          100% {
            d: path(
              "M0,500 C200,450 500,550 800,500 C950,475 1050,525 1200,500 L1200,800 L0,800 Z"
            );
          }

          50% {
            d: path(
              "M0,520 C200,470 500,570 800,520 C950,495 1050,545 1200,520 L1200,800 L0,800 Z"
            );
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.3;
          }

          25% {
            transform: translateY(-10px) translateX(5px) rotate(90deg);
            opacity: 0.6;
          }

          50% {
            transform: translateY(-20px) translateX(-5px) rotate(180deg);
            opacity: 0.9;
          }

          75% {
            transform: translateY(-10px) translateX(10px) rotate(270deg);
            opacity: 0.6;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .wave-animation-1 {
          animation: wave1 8s ease-in-out infinite;
        }

        .wave-animation-2 {
          animation: wave2 10s ease-in-out infinite reverse;
        }

        .wave-animation-3 {
          animation: wave3 12s ease-in-out infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.5);
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Custom gradient text animation */
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        .gradient-animate {
          background: linear-gradient(
            -45deg,
            #3b82f6,
            #93c5fd,
            #60a5fa,
            #2563eb
          );
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
};

export default CreateResumePage;
