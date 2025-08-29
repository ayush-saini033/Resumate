"use client";

import React, { useEffect, useState } from "react";
import {
  User,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  ExternalLink,
  Trophy,
  Languages,
  Settings,
  Eye,
  PenToolIcon,
} from "lucide-react";
import PersonalInfoSection from "./_components/PersonalInfoSection";
import ExperienceSection from "./_components/ExperienceSection";
import EducationSection from "./_components/EducationSection";
import CertificationsSection from "./_components/CertificationsSection";
import SkillsSection from "./_components/SkillsSection";
import ProjectsSection from "./_components/ProjectsSection";
import AchievementsSection from "./_components/AchievementsSection";
import LanguagesSection from "./_components/LanguagesSection";
import SocialLinksSection from "./_components/SocialLinksSection";
import PreferencesSection from "./_components/PreferencesSection";
import AnimatedBackground from "./_components/AnimatedBackground";
import SummarySection from "./_components/SummarySection";
import { useParams, useSearchParams } from "next/navigation";
import axios from "axios";
import useResumeStore from "@/store/resumeStore";
import {
  UPDATE_RESUME,
} from "@/app/(main)/_routes/create-resume.routes";
import { CiSaveDown1 } from "react-icons/ci";
import {ShowToast} from "@/app/(main)/_shared/show-toast"
function EditResumePage() {
  const [activeTab, setActiveTab] = useState("personal");

  const { resume,setResume } = useResumeStore();
  const [isSaving, setIsSaving] = useState(false);
  const { resumeId } = useParams();

  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  const tabs = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "summary", label: "Summary", icon: PenToolIcon },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Trophy },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "languages", label: "Languages", icon: Languages },
    { id: "social", label: "Social Links", icon: ExternalLink },
    { id: "preferences", label: "Preferences", icon: Settings },
  ];

  useEffect(() => {
    async function fetchResume() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URI}/api/fetch-resume/${resumeId}`
        );
        if (res.data.success) {
          setResume(res.data.resume);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchResume();
  }, []);

  const renderActiveSection = () => {
    switch (activeTab) {
      case "personal":
        return <PersonalInfoSection />;
      case "summary":
        return <SummarySection />;
      case "experience":
        return <ExperienceSection />;
      case "education":
        return <EducationSection />;
      case "certifications":
        return <CertificationsSection />;
      case "skills":
        return <SkillsSection />;
      case "projects":
        return <ProjectsSection />;
      case "achievements":
        return <AchievementsSection />;
      case "languages":
        return <LanguagesSection />;
      case "social":
        return <SocialLinksSection />;
      case "preferences":
        return <PreferencesSection />;
      default:
        return <PersonalInfoSection />;
    }
  };

   async function handleSave() {
     if (isSaving) return; // ⛔ prevent spamming
     setIsSaving(true);
     try {
      console.log(resume)
       const res = await axios.post(UPDATE_RESUME(resumeId), { data: resume });
       if(res.data.success){
        ShowToast(true, res.data.message)
       }
     } catch (error) {
       console.log(error);
       ShowToast(false, error.response.data.message)
     } finally {
       setIsSaving(false);
     }
   }


  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden ml-20">
      <AnimatedBackground />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-blue-500/20 bg-black/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                  Resume Builder
                </h1>
                <p className="text-blue-300/60 mt-1">
                  Create your professional resume
                </p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-lg hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  <Eye size={18} />
                  Preview
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <CiSaveDown1 className="h-6 w-6" />
                  {isSaving ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8 h-[calc(100vh-8rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-full">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1 h-full overflow-y-auto">
              <nav className="sticky top-0">
                <div className="bg-black/60 backdrop-blur-md rounded-xl border border-blue-500/20 p-4 shadow-2xl">
                  <h2 className="text-lg font-semibold text-blue-300 mb-4">
                    {title || "Sections"}
                  </h2>
                  <div className="space-y-2">
                    {tabs.map((tab) => {
                      const IconComponent = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all  cursor-pointer duration-200 ${
                            activeTab === tab.id
                              ? "bg-blue-500/10 border border-blue-400/30 rounded-lg hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                              : "text-blue-300/70 hover:bg-blue-500/10 hover:text-blue-200 hover:border hover:border-blue-500/30 border border-hidden"
                          }`}
                        >
                          <IconComponent size={18} />
                          <span className="text-sm font-medium">
                            {tab.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 h-full overflow-y-auto">
              <div className="bg-black/60 backdrop-blur-md rounded-xl border border-blue-500/20 p-6 shadow-2xl">
                {renderActiveSection()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditResumePage;
