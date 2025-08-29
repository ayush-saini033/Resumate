import React from "react";
import { Plus, Trash2, Languages } from "lucide-react";
import useResumeStore from "@/store/resumeStore";

const LanguagesSection = () => {
  const { resume, setResume } = useResumeStore();
  console.log(resume)
  const proficiencyLevels = [
    "Basic",
    "Beginner",
    "Intermediate",
    "Advanced",
    "Fluent",
    "Native",
  ];

  // ✅ Add new language
  const addLanguage = () => {
    const newLanguage = {
      id: Date.now(),
      name: "",
      proficiency: "",
    };
    setResume((prev) => ({
      ...prev,
      languages: [...(prev.languages ?? []), newLanguage],
    }));
  };

  // ✅ Remove language
  const removeLanguage = (id) => {
    setResume((prev) => ({
      ...prev,
      languages: (prev.languages ?? []).filter((lang) => lang.id !== id),
    }));
  };

  // ✅ Update language field
  const updateLanguage = (id, field, value) => {
    setResume((prev) => ({
      ...prev,
      languages: (prev.languages ?? []).map((lang) =>
        lang.id === id ? { ...lang, [field]: value } : lang
      ),
    }));
  };

  const languages = resume.languages ?? [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-blue-800/30 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-300 mb-2">Languages</h2>
            <p className="text-blue-200/70">Add languages you speak</p>
          </div>
          <button
            onClick={addLanguage}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-200"
          >
            <Plus size={18} />
            Add Language
          </button>
        </div>
      </div>

      {/* Empty State */}
      {languages.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-blue-800/30 rounded-lg">
          <Languages size={48} className="mx-auto text-blue-400/50 mb-4" />
          <p className="text-blue-200/70 mb-4">No languages added yet</p>
          <button
            onClick={addLanguage}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-200"
          >
            Add Your First Language
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {languages.map((language, index) => (
            <div
              key={language.id}
              className="bg-black/20 border border-blue-800/30 rounded-lg p-4"
            >
              {/* Header with delete */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-blue-300">
                  Language #{index + 1}
                </span>
                <button
                  onClick={() => removeLanguage(language.id)}
                  className="p-1 text-red-400 hover:bg-red-400/20 rounded transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Fields */}
              <div className="space-y-3">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-blue-300 mb-1">
                    Language
                  </label>
                  <input
                    type="text"
                    value={language.name}
                    onChange={(e) =>
                      updateLanguage(language.id, "name", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-blue-200/40 text-sm"
                    placeholder="e.g., English, Spanish, Mandarin"
                  />
                </div>

                {/* Proficiency */}
                <div>
                  <label className="block text-xs font-medium text-blue-300 mb-1">
                    Proficiency Level
                  </label>
                  <select
                    value={language.proficiency}
                    onChange={(e) =>
                      updateLanguage(language.id, "proficiency", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white text-sm"
                  >
                    <option value="" disabled className="bg-gray-800">
                      Select proficiency
                    </option>
                    {proficiencyLevels.map((level) => (
                      <option key={level} value={level} className="bg-gray-800">
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguagesSection;
