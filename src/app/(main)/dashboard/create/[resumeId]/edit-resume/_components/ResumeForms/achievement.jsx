import React, { useState } from "react";
import { Plus, Minus, Award, Calendar, FileText } from "lucide-react";
import RichTextEditor from "@/app/(main)/_shared/rich-text-editor";
import FormHeading from "@/app/(main)/_shared/form-heading";
import useResumeStore from "@/store/resumeStore";

function AchievementsForm() {
  const { resume, setResume } = useResumeStore();
  const addAchievement = () => {
    const newAchievement = {
      id: Date.now(),
      title: "",
      description: "",
      date: "",
    };
    setResume({
      ...resume,
      achievements: [...resume.achievements, newAchievement],
    });
  };

  const removeAchievement = (id) => {
    if (resume.achievements.length > 0) {
      setResume({
        ...resume,
        achievements: resume.achievements.filter(
          (achievement) => achievement.id !== id
        ),
      });
    }
  };

  const updateAchievement = (id, field, value) => {
    setResume((prev) => ({
      ...prev,
      achievements: prev.achievements.map((achievement) =>
        achievement.id === id ? { ...achievement, [field]: value } : achievement
      ),
    }));
  };

  const getRecentAchievements = () => {
    return resume.achievements.filter((achievement) => {
      if (achievement.date) {
        const achievementDate = new Date(achievement.date);
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        return achievementDate >= oneYearAgo;
      }
      return false;
    }).length;
  };

  return (
    <div className="relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl">
          {/* Header */}

          <FormHeading
            Icon={Award}
            firstHeading={"Your"}
            secondHeading={"Achievements"}
            subHeading={`Showcase your accomplishments, awards, and milestones that
              highlight your success.`}
          />

          {/* Form Card */}
          <div>
            <div className="space-y-8">
              {/* Achievements List */}
              <div className="space-y-8">
                <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                  {resume.achievements.map((achievement, index) => (
                    <div
                      key={achievement.id}
                      className="group bg-black/40 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:bg-black/60"
                    >
                      {/* Header with number and remove button */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          <h3 className="text-white font-semibold text-lg">
                            Achievement {index + 1}
                          </h3>
                        </div>
                        <button
                          onClick={() => removeAchievement(achievement.id)}
                          className="flex-shrink-0 w-10 h-10 bg-red-600/20 hover:bg-red-600/40 border border-red-500/30  rounded-xl flex items-center justify-center text-red-400  hover:text-red-300 transition-all duration-300 group-hover:scale-105 cursor-pointer"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Form Fields Grid */}
                      <div className="grid grid-cols-1 gap-6">
                        {/* Achievement Title */}
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Achievement Title *
                          </label>
                          <input
                            type="text"
                            placeholder="e.g., Employee of the Year 2023"
                            value={achievement.title}
                            onChange={(e) =>
                              updateAchievement(
                                achievement.id,
                                "title",
                                e.target.value
                              )
                            }
                            className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                          />
                        </div>

                        {/* Date */}
                        <div>
                          <label className="text-gray-300 text-sm font-medium mb-2 flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            Achievement Date
                          </label>
                          <input
                            type="date"
                            value={achievement.date}
                            onChange={(e) =>
                              updateAchievement(
                                achievement.id,
                                "date",
                                e.target.value
                              )
                            }
                            className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                          />
                        </div>

                        {/* Achievement Description */}
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Description *
                          </label>
                          <RichTextEditor
                            content={achievement.description}
                            onChange={(val) =>
                              updateAchievement(
                                achievement.id,
                                "description",
                                val
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Achievement Button */}
                <button
                  onClick={addAchievement}
                  className="w-full bg-gray-800/50 hover:bg-gray-700/50 border-2 border-dashed border-gray-600/50 hover:border-blue-500/50 rounded-2xl py-6 px-6 text-gray-400 hover:text-blue-400 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 group-hover:bg-blue-500/30 rounded-full flex items-center justify-center transition-all duration-300">
                      <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                    </div>
                    <span className="text-lg font-medium">
                      Add {resume.achievements.length > 0 && " Another "}{" "}
                      Achievement
                    </span>
                  </div>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-800/50">
                <div className="text-center p-4 rounded-xl bg-blue-500/5 border border-amber-500/10">
                  <div className="text-2xl font-bold text-amber-400 mb-1">
                    {resume.achievements.length}
                  </div>
                  <p className="text-gray-400 text-sm">Total Achievements</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {getRecentAchievements()}
                  </div>
                  <p className="text-gray-400 text-sm">Recent (Last Year)</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    {
                      resume.achievements.filter(
                        (achievement) =>
                          achievement.title.trim() &&
                          achievement.description.trim()
                      ).length
                    }
                  </div>
                  <p className="text-gray-400 text-sm">Completed Entries</p>
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

export default AchievementsForm;
