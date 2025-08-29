import React from "react";
import { Plus, Trash2, Briefcase } from "lucide-react";
import useResumeStore from "@/store/resumeStore";
import RichTextEditor from "@/app/(main)/_shared/rich-text-editor";

const ExperienceSection = () => {
  const { resume, setResume } = useResumeStore();

  console.log(resume)

  if (!resume) return null;

  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      title: "",
      companyName: "",
      city: "",
      state: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      workSummary: "",
    };
   setResume({
     ...resume,
     experience: [...(resume.experience ?? []), newExperience],
   });

  };

  const updateExperience = (id, field, value) => {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const removeExperience = (id) => {
   setResume({
     ...resume,
     experience: (resume.experience ?? []).filter((exp) => exp.id !== id),
   });

  };

  return (
    <div className="space-y-6">
      <div className="border-b border-blue-500/20 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-300 mb-2">
              Work Experience
            </h2>
            <p className="text-blue-300/60">Add your professional experience</p>
          </div>
          <button
            onClick={addExperience}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <Plus size={18} />
            Add Experience
          </button>
        </div>
      </div>

      {(resume.experience ?? []).length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-blue-500/20 rounded-lg bg-black/20">
          <Briefcase size={48} className="mx-auto text-blue-400/60 mb-4" />
          <p className="text-blue-300/60 mb-4">No work experience added yet</p>
          <button
            onClick={addExperience}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
          >
            Add Your First Experience
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {resume.experience.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-black/40 border border-blue-500/20 rounded-lg p-6 hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-blue-300">
                  Experience #{index + 1}
                </h3>
                <button
                  onClick={() => removeExperience(exp.id)}
                  className="p-2 text-red-400 hover:bg-red-400/20 rounded-lg transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-blue-300/90 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={exp.companyName}
                    onChange={(e) =>
                      updateExperience(exp.id, "companyName", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-blue-300/40 transition-all duration-300 hover:border-blue-400/50"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-300/90 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    value={exp.title}
                    onChange={(e) =>
                      updateExperience(exp.id, "title", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-blue-300/40 transition-all duration-300 hover:border-blue-400/50"
                    placeholder="Job title"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-blue-300/90 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    value={exp.city}
                    onChange={(e) =>
                      updateExperience(exp.id, "city", e.target.value)
                    }
                    placeholder="Enter city name"
                    className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white transition-all duration-300 hover:border-blue-400/50 placeholder-blue-300/40"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-300/90 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    value={exp.state}
                    onChange={(e) =>
                      updateExperience(exp.id, "state", e.target.value)
                    }
                    placeholder="Enter state name"
                    className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:border-blue-400/50 placeholder-blue-300/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-blue-300/90 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={exp.startDate}
                    onChange={(e) =>
                      updateExperience(exp.id, "startDate", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white transition-all duration-300 hover:border-blue-400/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-300/90 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={exp.endDate}
                    onChange={(e) =>
                      updateExperience(exp.id, "endDate", e.target.value)
                    }
                    disabled={exp.currentlyWorking}
                    className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:border-blue-400/50"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="flex items-center text-sm text-blue-300/90">
                  <input
                    type="checkbox"
                    checked={exp.currentlyWorking}
                    onChange={(e) => {
                      updateExperience(
                        exp.id,
                        "currentlyWorking",
                        e.target.checked
                      );
                      if (e.target.checked) {
                        updateExperience(exp.id, "endDate", "");
                      }
                    }}
                    className="mr-2 rounded border-blue-500/50 text-blue-600 focus:ring-blue-400 focus:ring-2"
                  />
                  I currently work here
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-300/90 mb-2">
                  Job Description
                </label>
                <RichTextEditor
                  content={exp.workSummary}
                  onChange={(val) =>
                    updateExperience(exp.id, "workSummary", val)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceSection;
