import React from "react";
import { Plus, Trash2, GraduationCap } from "lucide-react";
import useResumeStore from "@/store/resumeStore";
import RichTextEditor from "@/app/(main)/_shared/rich-text-editor";

const EducationSection = () => {
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
    setResume({
      ...resume,
      education: [...(resume.education ?? []), newEducation],
    });
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
  return (
    <div className="space-y-6">
      <div className="border-b border-blue-800/30 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-300 mb-2">Education</h2>
            <p className="text-blue-200/70">Add your educational background</p>
          </div>
          <button
            onClick={addEducation}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-200"
          >
            <Plus size={18} />
            Add Education
          </button>
        </div>
      </div>

      {resume.education.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-blue-800/30 rounded-lg">
          <GraduationCap size={48} className="mx-auto text-blue-400/50 mb-4" />
          <p className="text-blue-200/70 mb-4">No education added yet</p>
          <button
            onClick={addEducation}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-200"
          >
            Add Your Education
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {resume.education.map((edu, index) => (
            <div
              key={edu.id}
              className="bg-black/20 border border-blue-800/30 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-blue-300">
                  Education #{index + 1}
                </h3>
                <button
                  onClick={() => removeEducation(edu.id)}
                  className="p-2 text-red-400 hover:bg-red-400/20 rounded-lg transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    University/Institution Name
                  </label>
                  <input
                    type="text"
                    value={edu.universityName}
                    onChange={(e) =>
                      updateEducation(edu.id, "universityName", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-blue-200/40"
                    placeholder="University/School name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Degree
                  </label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) =>
                      updateEducation(edu.id, "degree", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-blue-200/40"
                    placeholder="e.g., Bachelor's, Master's, PhD"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-blue-300 mb-2">
                  Major/Field of Study
                </label>
                <input
                  type="text"
                  value={edu.major}
                  onChange={(e) =>
                    updateEducation(edu.id, "major", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-blue-200/40"
                  placeholder="e.g., Computer Science, Business Administration"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={edu.startDate}
                    onChange={(e) =>
                      updateEducation(edu.id, "startDate", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={edu.endDate}
                    onChange={(e) =>
                      updateEducation(edu.id, "endDate", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="text-gray-300 text-sm font-medium mb-2">
                    Description
                  </label>
                  <RichTextEditor
                    content={edu.description}
                    onChange={(val) =>
                      updateEducation(edu.id, "description", val)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationSection;
