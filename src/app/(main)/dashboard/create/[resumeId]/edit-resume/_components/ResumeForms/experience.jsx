import React from "react";
import { Plus, Minus, Briefcase, MapPin, Calendar } from "lucide-react";
import RichTextEditor from "../../../../../../_shared/rich-text-editor";
import FormHeading from "@//app/(main)/_shared/form-heading";
import useResumeStore from "@//store/resumeStore";

function ExperienceForm() {
  const { resume, setResume } = useResumeStore();
  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      title: "",
      companyName: "",
      city: "",
      state: "",
      startDate: "",
      endDate: "",
      currentlyWorking: true,
      workSummary: "",
    };
    setResume({ ...resume, experience: [...resume.experience, newExperience] });
  };

  console.log(resume);

  const removeExperience = (id) => {
    if (resume.experience.length > 0) {
      setResume({
        ...resume,
        experience: resume.experience.filter((exp) => exp.id !== id),
      });
    }
  };

  const updateExperience = (id, field, value) => {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const getTotalYears = () => {
    return resume.experience.reduce((total, exp) => {
      if (exp.startDate) {
        const start = new Date(exp.startDate);
        const end = exp.currentlyWorking
          ? new Date()
          : new Date(exp.endDate || new Date());
        const years =
          (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365);
        return total + Math.max(0, years);
      }
      return total;
    }, 0);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl">
          <FormHeading
            Icon={Briefcase}
            firstHeading={"Work"}
            secondHeading={"Experience"}
            subHeading={`  Add your professional work experience to showcase your career
                journey.`}
          />

          {/* Form Card */}
          <div className="space-y-8">
            {/* Experience List */}
            <div className="space-y-8">
              <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                {resume.experience.map((experience, index) => (
                  <div
                    key={experience.id}
                    className="group bg-black/40 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:bg-black/60"
                  >
                    {/* Header with number and remove button */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <h3 className="text-white font-semibold text-lg">
                          Experience {index + 1}
                        </h3>
                      </div>
                      <button
                        onClick={() => removeExperience(experience.id)}
                        className="flex-shrink-0 w-10 h-10 bg-red-600/20 hover:bg-red-600/40 border border-red-500/30  rounded-xl flex items-center justify-center text-red-400  hover:text-red-300 transition-all duration-300 group-hover:scale-105 cursor-pointer"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Form Fields Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Job Title */}
                      <div className="md:col-span-2">
                        <label className=" text-gray-300 text-sm font-medium mb-2">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Senior Software Engineer"
                          value={experience.title}
                          onChange={(e) =>
                            updateExperience(
                              experience.id,
                              "title",
                              e.target.value
                            )
                          }
                          className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                        />
                      </div>

                      {/* Company Name */}
                      <div className="md:col-span-2">
                        <label className=" text-gray-300 text-sm font-medium mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Google Inc."
                          value={experience.companyName}
                          onChange={(e) =>
                            updateExperience(
                              experience.id,
                              "companyName",
                              e.target.value
                            )
                          }
                          className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                        />
                      </div>

                      {/* Location */}
                      <div>
                        <label className=" text-gray-300 text-sm font-medium mb-2 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          City
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., San Francisco"
                          value={experience.city}
                          onChange={(e) =>
                            updateExperience(
                              experience.id,
                              "city",
                              e.target.value
                            )
                          }
                          className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                        />
                      </div>

                      <div>
                        <label className=" text-gray-300 text-sm font-medium mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., CA"
                          value={experience.state}
                          onChange={(e) =>
                            updateExperience(
                              experience.id,
                              "state",
                              e.target.value
                            )
                          }
                          className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                        />
                      </div>

                      {/* Dates */}
                      <div>
                        <label className=" text-gray-300 text-sm font-medium mb-2 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Start Date
                        </label>
                        <input
                          type="date"
                          value={experience.startDate}
                          onChange={(e) =>
                            updateExperience(
                              experience.id,
                              "startDate",
                              e.target.value
                            )
                          }
                          className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                        />
                      </div>

                      <div>
                        <label className=" text-gray-300 text-sm font-medium mb-2">
                          End Date
                        </label>
                        <input
                          type="date"
                          value={experience.endDate}
                          onChange={(e) =>
                            updateExperience(
                              experience.id,
                              "endDate",
                              e.target.value
                            )
                          }
                          disabled={experience.currentlyWorking}
                          className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      </div>

                      {/* Currently Working Yes/No Buttons */}
                      <div className="md:col-span-2">
                        <label className="block text-gray-300 mb-2">
                          Currently Working
                        </label>
                        <div className="flex space-x-4">
                          <button
                            type="button"
                            onClick={() => {
                              updateExperience(
                                experience.id,
                                "currentlyWorking",
                                true
                              );
                              updateExperience(experience.id, "endDate", ""); // clear end date if Yes
                            }}
                            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                              experience.currentlyWorking
                                ? "bg-blue-500 text-white"
                                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            }`}
                          >
                            Yes
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              updateExperience(
                                experience.id,
                                "currentlyWorking",
                                false
                              )
                            }
                            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                              !experience.currentlyWorking
                                ? "bg-blue-500 text-white"
                                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            }`}
                          >
                            No
                          </button>
                        </div>
                      </div>

                      {/* Work Summary */}
                      <div className="md:col-span-2">
                        <label className=" text-gray-300 text-sm font-medium mb-2">
                          Work Summary
                        </label>
                        <RichTextEditor
                          content={experience.workSummary}
                          onChange={(val) =>
                            updateExperience(experience.id, "workSummary", val)
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Experience Button */}
              <button
                onClick={addExperience}
                className="w-full bg-gray-800/50 hover:bg-gray-700/50 border-2 border-dashed border-gray-600/50 hover:border-blue-500/50 rounded-2xl py-6 px-6 text-gray-400 hover:text-blue-400 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500/20 group-hover:bg-blue-500/30 rounded-full flex items-center justify-center transition-all duration-300">
                    <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                  <span className="text-lg font-medium">
                    Add {resume.experience.length > 0 && "Another"} Experience
                  </span>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-800/50">
              <div className="text-center p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  {resume.experience.length}
                </div>
                <p className="text-gray-400 text-sm">Total Positions</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                <div className="text-2xl font-bold text-cyan-400 mb-1">
                  {
                    resume.experience.filter((exp) => exp.currentlyWorking)
                      .length
                  }
                </div>
                <p className="text-gray-400 text-sm">Current Roles</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  {Math.round(getTotalYears() * 10) / 10}
                </div>
                <p className="text-gray-400 text-sm">Years Experience</p>
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

export default ExperienceForm;
