import React, { useState } from "react";
import { Plus, Minus, GraduationCap, Calendar, BookOpen } from "lucide-react";
import RichTextEditor from "@//app/(main)/_shared/rich-text-editor";
import FormHeading from "@//app/(main)/_shared/form-heading";
import useResumeStore from "@//store/resumeStore";

function EducationForm() {
  const { resume, setResume } = useResumeStore();

  const addEducation = () => {
    const newEducation = {
      id: Date.now(),
      universityName: "",
      startDate: "",
      endDate: "",
      degree: "",
      major: "",
      description: "",
    };
    setResume({ ...resume, education: [...resume.education, newEducation] });
  };

  const removeEducation = (id) => {
    if (resume.education?.length > 0) {
      setResume({
        ...resume,
        education: resume.education?.filter((edu) => edu.id !== id),
      });
    }
  };

const updateEducation = (id, field, value) => {
  setResume((prev) => ({
    ...prev,
    education: (prev.education ?? []).map((edu) =>
      edu.id === id ? { ...edu, [field]: value } : edu
    ),
  }));
};

  const getTotalYears = () => {
    return resume.education?.reduce((total, edu) => {
      if (edu.startDate && edu.endDate) {
        const start = new Date(edu.startDate);
        const end = new Date(edu.endDate);
        const years =
          (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365);
        return total + Math.max(0, years);
      }
      return total;
    }, 0);
  };

  const getCompletedEducations = () => {
    return resume.education?.filter(
      (edu) => edu.endDate && new Date(edu.endDate) <= new Date()
    ).length;
  };

  return (
    <div className=" relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <FormHeading
            Icon={GraduationCap}
            firstHeading={"Educational"}
            secondHeading={"Background"}
            subHeading={`   Add your educational qualifications to showcase your academic
                achievements.`}
          />

          {/* Form Card */}
          <div className="space-y-8">
            {/* Education List */}
            <div className="space-y-8">
              <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                {resume.education?.map((education, index) => (
                  <div
                    key={education.id}
                    className="group bg-black/40 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:bg-black/60"
                  >
                    {/* Header with number and remove button */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Education {index + 1}
                        </h3>
                      </div>
                      <button
                        onClick={() => removeEducation(education.id)}
                        disabled={education.length === 1}
                        className="w-10 h-10 bg-red-600/20 hover:bg-red-600/40 disabled:bg-gray-600/20 border border-red-500/30 disabled:border-gray-600/30 rounded-xl flex items-center justify-center text-red-400 disabled:text-gray-500 hover:text-red-300 transition-all duration-300 disabled:cursor-not-allowed"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Form Fields Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* University Name */}
                      <div className="md:col-span-2">
                        <label className="text-gray-300 text-sm font-medium mb-2">
                          University/Institution Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Stanford University"
                          value={education.universityName}
                          onChange={(e) =>
                            updateEducation(
                              education.id,
                              "universityName",
                              e.target.value
                            )
                          }
                          className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                        />
                      </div>

                      {/* Degree */}
                      <div>
                        <label className="text-gray-300 text-sm font-medium mb-2 flex items-center">
                          <GraduationCap className="w-4 h-4 mr-1" />
                          Degree *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Bachelor of Science"
                          value={education.degree}
                          onChange={(e) =>
                            updateEducation(
                              education.id,
                              "degree",
                              e.target.value
                            )
                          }
                          className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                        />
                      </div>

                      {/* Major */}
                      <div>
                        <label className="text-gray-300 text-sm font-medium mb-2 flex items-center">
                          <BookOpen className="w-4 h-4 mr-1" />
                          Major/Field of Study
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Computer Science"
                          value={education.major}
                          onChange={(e) =>
                            updateEducation(
                              education.id,
                              "major",
                              e.target.value
                            )
                          }
                          className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                        />
                      </div>

                      {/* Dates */}
                      <div>
                        <label className="text-gray-300 text-sm font-medium mb-2 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Start Date
                        </label>
                        <input
                          type="date"
                          value={education.startDate}
                          onChange={(e) =>
                            updateEducation(
                              education.id,
                              "startDate",
                              e.target.value
                            )
                          }
                          className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                        />
                      </div>

                      <div>
                        <label className="text-gray-300 text-sm font-medium mb-2">
                          End Date (or Expected)
                        </label>
                        <input
                          type="date"
                          value={education.endDate}
                          onChange={(e) =>
                            updateEducation(
                              education.id,
                              "endDate",
                              e.target.value
                            )
                          }
                          className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                        />
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2">
                        <label className="text-gray-300 text-sm font-medium mb-2">
                          Description
                        </label>
                        <RichTextEditor
                          content={education.description}
                          onChange={(val) =>
                            updateEducation(education.id, "description", val)
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Education Button */}
              <button
                onClick={addEducation}
                className="w-full bg-gray-800/50 hover:bg-gray-700/50 border-2 border-dashed border-gray-600/50 hover:border-blue-500/50 rounded-2xl py-6 px-6 text-gray-400 hover:text-blue-400 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500/20 group-hover:bg-blue-500/30 rounded-full flex items-center justify-center transition-all duration-300">
                    <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                  <span className="text-lg font-medium">
                    Add{resume.education?.length > 0 ? " Another " : " "}
                    Education
                  </span>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-800/50">
              <div className="text-center p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  {resume.education?.length}
                </div>
                <p className="text-gray-400 text-sm">Total Qualifications</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                <div className="text-2xl font-bold text-cyan-400 mb-1">
                  {getCompletedEducations()}
                </div>
                <p className="text-gray-400 text-sm">Completed Degrees</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  {Math.round(getTotalYears() * 10) / 10}
                </div>
                <p className="text-gray-400 text-sm">Years of Study</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </div>
  );
}

export default EducationForm;
