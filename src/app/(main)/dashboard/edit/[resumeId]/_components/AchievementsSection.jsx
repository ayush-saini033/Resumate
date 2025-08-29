import React from "react";
import { Plus, Trash2, Trophy } from "lucide-react";
import useResumeStore from "@/store/resumeStore";
import RichTextEditor from "@/app/(main)/_shared/rich-text-editor";


const AchievementsSection = () => {
 const { resume, setResume } = useResumeStore();

 console.log(resume)

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

  return (
    <div className="space-y-6">
      <div className="border-b border-blue-800/30 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-300 mb-2">
              Achievements
            </h2>
            <p className="text-blue-200/70">
              Highlight your notable achievements
            </p>
          </div>
          <button
            onClick={addAchievement}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-200"
          >
            <Plus size={18} />
            Add Achievement
          </button>
        </div>
      </div>

      {resume.achievements.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-blue-800/30 rounded-lg">
          <Trophy size={48} className="mx-auto text-blue-400/50 mb-4" />
          <p className="text-blue-200/70 mb-4">No achievements added yet</p>
          <button
            onClick={addAchievement}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-200"
          >
            Add Your First Achievement
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {resume.achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="bg-black/20 border border-blue-800/30 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-blue-300">
                  Achievement #{index + 1}
                </h3>
                <button
                  onClick={() => removeAchievement(achievement.id)}
                  className="p-2 text-red-400 hover:bg-red-400/20 rounded-lg transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Achievement Title
                  </label>
                  <input
                    type="text"
                    value={achievement.title}
                    onChange={(e) =>
                      updateAchievement(achievement.id, "title", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-blue-200/40"
                    placeholder="e.g., Employee of the Month"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Date Achieved
                  </label>
                  <input
                    type="date"
                    value={achievement.date}
                    onChange={(e) =>
                      updateAchievement(achievement.id, "date", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-300 mb-2">
                  Description
                </label>
                <RichTextEditor
                  content={achievement.description}
                  onChange={(val) =>
                    updateAchievement(achievement.id, "description", val)
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

export default AchievementsSection;
