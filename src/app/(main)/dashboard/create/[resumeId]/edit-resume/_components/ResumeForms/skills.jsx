"use client";
import React from "react";
import { Plus, Minus, Star, Target } from "lucide-react";
import FormHeading from "@//app/(main)/_shared/form-heading";
import useResumeStore from "@//store/resumeStore";

function SkillsForm() {
  const { resume, setResume } = useResumeStore();

  // Add new skill
  const addSkill = () => {
    const newSkill = { id: Date.now(), name: "", rating: 0 };
    setResume({
      ...resume,
      skills: [...resume.skills, newSkill],
    });
  };

  // Remove skill
  const removeSkill = (id) => {
    if (resume.skills.length > 0) {
      setResume({
        ...resume,
        skills: resume.skills.filter((skill) => skill.id !== id),
      });
    }
  };

  // Update skill field
  const updateSkill = (id, field, value) => {
    setResume({
      ...resume,
      skills: resume.skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      ),
    });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <FormHeading
            Icon={Star}
            firstHeading="Skills"
            secondHeading="Assessment"
            subHeading="Rate your professional skills and expertise levels to showcase your capabilities."
          />

          {/* Form Card */}
          <div>
            <div className="space-y-8">
              {/* Skills List */}
              <div className="space-y-6">
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                  {resume.skills.map((skill, index) => (
                    <div
                      key={skill.id}
                      className="group bg-black/40 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:bg-black/60"
                    >
                      <div className="flex items-center space-x-4">
                        {/* Skill Number */}
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>

                        {/* Skill Name Input */}
                        <div className="flex-1">
                          <input
                            type="text"
                            placeholder="Enter skill name"
                            value={skill.name}
                            onChange={(e) =>
                              updateSkill(skill.id, "name", e.target.value)
                            }
                            className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-lg"
                          />
                        </div>

                        {/* Rating Input */}
                        <div className="flex-shrink-0 w-32">
                          <div className="relative">
                            <input
                              type="text"
                              inputMode="numeric"
                              pattern="[0-9]*"
                              min="0"
                              max="100"
                              placeholder="0"
                              value={skill.rating || ""}
                              onChange={(e) => {
                                const val = e.target.value.replace(/\D/g, "");
                                updateSkill(
                                  skill.id,
                                  "rating",
                                  parseInt(val) || 0
                                );
                              }}
                              className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-lg text-center"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
                              %
                            </div>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeSkill(skill.id)}
                          className="flex-shrink-0 w-10 h-10 bg-red-600/20 hover:bg-red-600/40 border border-red-500/30  rounded-xl flex items-center justify-center text-red-400  hover:text-red-300 transition-all duration-300 group-hover:scale-105 cursor-pointer"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Rating Visual Bar */}
                      {skill.rating > 0 && (
                        <div className="mt-4 ml-14">
                          <div className="flex items-center space-x-3">
                            <div className="flex-1 bg-gray-700/50 rounded-full h-2 overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500 ease-out"
                                style={{
                                  width: `${Math.min(skill.rating, 100)}%`,
                                }}
                              ></div>
                            </div>
                            <span className="text-blue-400 font-medium text-sm min-w-[3rem]">
                              {skill.rating}%
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Add Skill Button */}
                <button
                  type="button"
                  onClick={addSkill}
                  className="w-full bg-gray-800/50 hover:bg-gray-700/50 border-2 border-dashed border-gray-600/50 hover:border-blue-500/50 rounded-2xl py-6 px-6 text-gray-400 hover:text-blue-400 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 group-hover:bg-blue-500/30 rounded-full flex items-center justify-center transition-all duration-300">
                      <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                    </div>
                    <span className="text-lg font-medium">
                      Add {resume.skills.length > 0 && "Another"} Skill
                    </span>
                  </div>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-800/50">
                <div className="text-center p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {resume.skills.length}
                  </div>
                  <p className="text-gray-400 text-sm">Total Skills</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    {resume.skills.filter((s) => s.rating >= 80).length}
                  </div>
                  <p className="text-gray-400 text-sm">Expert Level (80%+)</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    {Math.round(
                      resume.skills.reduce((acc, s) => acc + s.rating, 0) /
                        resume.skills.length
                    ) || 0}
                    %
                  </div>
                  <p className="text-gray-400 text-sm">Average Rating</p>
                </div>
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

export default SkillsForm;
