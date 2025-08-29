import React from "react";
import { Plus, Trash2, Code } from "lucide-react";
import useResumeStore from "@/store/resumeStore";

const SkillsSection = () => {
  const { resume, setResume } = useResumeStore();

  console.log(resume)

  // Add new skill
  const addSkill = () => {
    const newSkill = { id: Date.now(), name: "", rating: 0 };
    setResume((prev) => ({
      ...prev,
      skills: [...(prev.skills ?? []), newSkill],
    }));
  };

  // Remove skill
  const removeSkill = (id) => {
    setResume((prev) => ({
      ...prev,
      skills: (prev.skills ?? []).filter((skill) => skill.id !== id),
    }));
  };

  // Update skill
  const updateSkill = (id, field, value) => {
    setResume((prev) => ({
      ...prev,
      skills: (prev.skills ?? []).map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      ),
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-blue-500/30 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-300 mb-1">Skills</h2>
            <p className="text-blue-300/60">
              Showcase your professional skills
            </p>
          </div>
          <button
            onClick={addSkill}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl shadow-md hover:shadow-blue-500/30 hover:scale-105 transition-all"
          >
            <Plus size={18} />
            Add Skill
          </button>
        </div>
      </div>

      {/* Empty State */}
      {(resume.skills ?? []).length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-blue-500/20 rounded-xl bg-black/20">
          <Code size={48} className="mx-auto text-blue-400/50 mb-4" />
          <p className="text-blue-300/60 mb-4">No skills added yet</p>
          <button
            onClick={addSkill}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl shadow-md hover:shadow-blue-500/30 hover:scale-105 transition-all"
          >
            Add Your First Skill
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resume.skills.map((skill, index) => (
            <div
              key={skill.id}
              className="bg-gradient-to-br from-black/40 to-blue-900/10 border border-blue-500/20 rounded-2xl p-6 shadow-md hover:shadow-blue-500/20 transition-all"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium text-blue-200">
                  Skill #{index + 1}
                </span>
                <button
                  onClick={() => removeSkill(skill.id)}
                  className="p-2 text-red-400 hover:bg-red-400/20 rounded-lg transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Inputs */}
              <div className="space-y-4">
                {/* Skill Name */}
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-1">
                    Skill Name
                  </label>
                  <input
                    type="text"
                    value={skill.name}
                    onChange={(e) =>
                      updateSkill(skill.id, "name", e.target.value)
                    }
                    placeholder="e.g., JavaScript, UI/UX Design"
                    className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-blue-300/40 text-sm transition-all"
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Proficiency ({skill.rating}%)
                  </label>
                  <div className="flex-shrink-0 w-full">
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
                          updateSkill(skill.id, "rating", parseInt(val) || 0);
                        }}
                        className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-lg text-center"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
                        %
                      </div>
                    </div>
                  </div>

                  {/* Progress bar preview */}
                  <div className="w-full h-2 bg-blue-900/30 rounded-full mt-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all"
                      style={{ width: `${skill.rating}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsSection;
