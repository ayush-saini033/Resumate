import React, { useState } from "react";
import { Settings, Briefcase, MapPin, Home } from "lucide-react";
import FormHeading from "@//app/(main)/_shared/form-heading";
import useResumeStore from "@//store/resumeStore";

function PreferencesForm() {
  const { resume, setResume } = useResumeStore();
  const updatePreference = (field, value) => {
    setResume({
      ...resume,
      preferences: { ...resume.preferences, [field]: value },
    });
  };

  const jobTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Freelance",
    "Internship",
    "Remote",
    "Hybrid",
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          {/* Header */}

          <FormHeading
            Icon={Settings}
            firstHeading={"Job"}
            secondHeading={"Preferences"}
            subHeading={`Set your job preferences to help employers find the perfect match
              for you.`}
          />

          {/* Form Card */}
          <div>
            <div className="space-y-8">
              {/* Preferences Form */}
              <div className="space-y-8">
                <div className="bg-black/40 border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:bg-black/60">
                  <div className="space-y-8">
                    {/* Job Type */}
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-4 flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        Preferred Job Type *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {jobTypes.map((type) => (
                          <button
                            key={type}
                            onClick={() => updatePreference("jobType", type)}
                            className={`p-3 rounded-xl border-2 transition-all duration-300 text-sm font-medium ${
                              resume.preferences?.jobType === type
                                ? "bg-blue-500/20 border-blue-500 text-blue-300"
                                : "bg-gray-800/50 border-gray-600/50 text-gray-400 hover:border-blue-500/50 hover:text-blue-400"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        Preferred Location *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., San Francisco, CA or Remote"
                        value={resume.preferences?.location ?? ""}
                        onChange={(e) =>
                          updatePreference("location", e.target.value)
                        }
                        className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                      />
                      <p className="text-gray-500 text-xs mt-2">
                        Enter your preferred work location or "Remote" for
                        remote work
                      </p>
                    </div>

                    {/* Relocation */}
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-4 flex items-center">
                        <Home className="w-4 h-4 mr-2" />
                        Relocation Preferences
                      </label>

                      <div className="flex space-x-4 mt-4">
                        {/* Yes Button */}
                        <button
                          type="button"
                          onClick={() => updatePreference("relocation", true)}
                          className={`px-6 py-3 rounded-xl font-medium backdrop-blur-md border transition-all duration-300 
        ${
          resume.preferences?.relocation
            ? "bg-blue-500/60 border-blue-400 text-white shadow-lg shadow-blue-500/40"
            : "bg-blue-200/10 border-blue-400/30 text-gray-300 hover:border-blue-400 hover:text-white"
        }`}
                        >
                          Yes
                        </button>

                        {/* No Button */}
                        <button
                          type="button"
                          onClick={() => updatePreference("relocation", false)}
                          className={`px-6 py-3 rounded-xl font-medium backdrop-blur-md border transition-all duration-300 
        ${
          !resume.preferences?.relocation
            ? "bg-blue-500/60 border-blue-400 text-white shadow-lg shadow-blue-500/40"
            : "bg-blue-200/10 border-blue-400/30 text-gray-300 hover:border-blue-400 hover:text-white"
        }`}
                        >
                          No
                        </button>
                      </div>

                      <p className="text-gray-500 text-sm mt-3">
                        Choose{" "}
                        <span className="text-blue-400 font-medium">Yes</span>{" "}
                        if you are willing to relocate for the right
                        opportunity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-800/50">
                <div className="text-center p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    {resume.preferences?.jobType ? "1" : "0"}
                  </div>
                  <p className="text-gray-400 text-sm">Job Type Selected</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {resume.preferences?.location ? "1" : "0"}
                  </div>
                  <p className="text-gray-400 text-sm">Location Set</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
                  <div className="text-2xl font-bold text-indigo-400 mb-1">
                    {resume.preferences?.relocation ? "Yes" : "No"}
                  </div>
                  <p className="text-gray-400 text-sm">Open to Relocate</p>
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
          background: rgba(147, 51, 234, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(147, 51, 234, 0.7);
        }
      `}</style>
    </div>
  );
}

export default PreferencesForm;
