import React, { useState } from "react";
import { Plus, Minus, Globe, Zap, Languages, BookOpen } from "lucide-react";
import {
  popularLanguages,
  proficiencyLevels,
} from "../constants/languages-constant";
import FormHeading from "@//app/(main)/_shared/form-heading";
import useResumeStore from "@//store/resumeStore";

function LanguagesForm() {
  const { resume, setResume } = useResumeStore();
  console.log(resume.achievements);

  const addLanguage = () => {
    const newLanguage = {
      id: Date.now(),
      name: "",
      proficiency: "",
    };
    setResume({ ...resume, languages: [...resume.languages, newLanguage] });
  };

  const removeLanguage = (id) => {
    if (resume.languages.length > 0) {
      setResume({
        ...resume,
        languages: resume.languages.filter((language) => language.id !== id),
      });
    }
  };

  const updateLanguage = (id, field, value) => {
    setResume({
      ...resume,
      languages: resume.languages.map((language) =>
        language.id === id ? { ...language, [field]: value } : language
      ),
    });
  };

  const getProficiencyStyle = (proficiency) => {
    const level = proficiencyLevels.find(
      (level) => level.value === proficiency
    );
    return (
      level || {
        color: "text-gray-400",
        bgColor: "bg-gray-500/10",
        borderColor: "border-gray-500/20",
      }
    );
  };

  const getProficiencyLevel = (proficiency) => {
    const levels = [
      "Basic",
      "Beginner",
      "Intermediate",
      "Advanced",
      "Fluent",
      "Native",
    ];
    return levels.indexOf(proficiency) + 1;
  };

  return (
    <div className="relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          {/* Header */}

          <FormHeading
            Icon={Languages}
            firstHeading={"Language"}
            secondHeading={"Proficiency"}
            subHeading={`Showcase your multilingual abilities and communication skills
              across different languages.`}
          />

          {/* Form Card */}
          <div className="">
            <div className="space-y-8">
              {/* Languages List */}
              <div className="space-y-6">
                {/* Popular Languages Suggestions */}
                <div className="bg-black/20 border border-gray-700/30 rounded-xl p-4">
                  <p className="text-gray-300 text-sm mb-3 font-medium">
                    Popular Languages:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {popularLanguages.map((language) => (
                      <span
                        key={language}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs hover:bg-blue-500/20 transition-colors duration-200 cursor-default"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                  {resume.languages.map((language, index) => (
                    <div
                      key={language.id}
                      className="group bg-black/40 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:bg-black/60"
                    >
                      <div className="flex items-start space-x-4">
                        {/* Language Number */}
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>

                        {/* Form Fields */}
                        <div className="flex-1 space-y-4">
                          {/* Language Name Input */}
                          <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                              Language Name
                            </label>
                            <input
                              type="text"
                              placeholder="e.g., English, Spanish, French, Mandarin"
                              value={language.name}
                              onChange={(e) =>
                                updateLanguage(
                                  language.id,
                                  "name",
                                  e.target.value
                                )
                              }
                              className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                            />
                          </div>

                          {/* Proficiency Level Select */}
                          <div>
                            <label className="text-gray-300 text-sm font-medium mb-2 flex items-center">
                              <BookOpen className="w-4 h-4 mr-1" />
                              Proficiency Level
                            </label>
                            <select
                              value={language.proficiency}
                              onChange={(e) =>
                                updateLanguage(
                                  language.id,
                                  "proficiency",
                                  e.target.value
                                )
                              }
                              className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                            >
                              <option
                                value=""
                                className="bg-gray-800 text-gray-400"
                              >
                                Select proficiency level
                              </option>
                              {proficiencyLevels.map((level) => (
                                <option
                                  key={level.value}
                                  value={level.value}
                                  className="bg-gray-800 text-white"
                                >
                                  {level.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeLanguage(language.id)}
                          className="flex-shrink-0 w-10 h-10 bg-red-600/20 hover:bg-red-600/40 border border-red-500/30  rounded-xl flex items-center justify-center text-red-400  hover:text-red-300 transition-all duration-300 group-hover:scale-105 cursor-pointer"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Proficiency Visual Indicator */}
                      {language.name && language.proficiency && (
                        <div className="mt-4 ml-14">
                          <div
                            className={`flex items-center space-x-3 p-3 rounded-lg ${
                              getProficiencyStyle(language.proficiency).bgColor
                            } border ${
                              getProficiencyStyle(language.proficiency)
                                .borderColor
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <Globe
                                className={`w-5 h-5 ${
                                  getProficiencyStyle(language.proficiency)
                                    .color
                                }`}
                              />
                              <div className="flex-1">
                                <p className="text-white font-medium text-sm">
                                  {language.name}
                                </p>
                                <p
                                  className={`text-xs ${
                                    getProficiencyStyle(language.proficiency)
                                      .color
                                  }`}
                                >
                                  {language.proficiency} Level
                                </p>
                              </div>
                            </div>

                            {/* Proficiency Level Dots */}
                            <div className="flex space-x-1">
                              {[1, 2, 3, 4, 5, 6].map((dot) => (
                                <div
                                  key={dot}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    dot <=
                                    getProficiencyLevel(language.proficiency)
                                      ? getProficiencyStyle(
                                          language.proficiency
                                        ).color.replace("text-", "bg-")
                                      : "bg-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Add Language Button */}
                <button
                  onClick={addLanguage}
                  className="w-full bg-gray-800/50 hover:bg-gray-700/50 border-2 border-dashed border-gray-600/50 hover:border-blue-500/50 rounded-2xl py-6 px-6 text-gray-400 hover:text-blue-400 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 group-hover:bg-blue-500/30 rounded-full flex items-center justify-center transition-all duration-300">
                      <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                    </div>
                    <span className="text-lg font-medium">
                      Add {resume.languages.length > 0 && "Another"} Language
                    </span>
                  </div>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-800/50">
                <div className="text-center p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {resume.languages.length}
                  </div>
                  <p className="text-gray-400 text-sm">Total Languages</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">
                    {
                      resume.languages.filter(
                        (lang) =>
                          lang.proficiency === "Native" ||
                          lang.proficiency === "Fluent"
                      ).length
                    }
                  </div>
                  <p className="text-gray-400 text-sm">Fluent/Native</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    {
                      resume.languages.filter(
                        (lang) =>
                          lang.proficiency === "Advanced" ||
                          lang.proficiency === "Intermediate"
                      ).length
                    }
                  </div>
                  <p className="text-gray-400 text-sm">Advanced/Intermediate</p>
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

export default LanguagesForm;
