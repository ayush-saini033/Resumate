import React from "react";
import { Plus, Trash2, Trophy, ExternalLink } from "lucide-react";
import useResumeStore from "@/store/resumeStore";

const ProjectsSection = () => {
  const { resume, setResume } = useResumeStore();
  // ✅ Add new project
  const addProject = () => {
    const newProject = {
      id: Date.now(), // safer unique IDs
      name: "",
      description: "",
      liveUrl: "",
    };
    setResume((prev) => ({
      ...prev,
      projects: [...(prev.projects ?? []), newProject],
    }));
  };

  // ✅ Remove project
  const removeProject = (id) => {
    setResume((prev) => ({
      ...prev,
      projects: (prev.projects ?? []).filter((project) => project.id !== id),
    }));
  };

  // ✅ Update project field
  const updateProject = (id, field, value) => {
    setResume((prev) => ({
      ...prev,
      projects: (prev.projects ?? []).map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      ),
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-blue-800/30 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-300 mb-2">Projects</h2>
            <p className="text-blue-200/70">Showcase your notable projects</p>
          </div>
          <button
            onClick={addProject}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-200"
          >
            <Plus size={18} />
            Add Project
          </button>
        </div>
      </div>

      {/* Empty State */}
      {(resume.projects ?? []).length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-blue-800/30 rounded-lg">
          <Trophy size={48} className="mx-auto text-blue-400/50 mb-4" />
          <p className="text-blue-200/70 mb-4">No projects added yet</p>
          <button
            onClick={addProject}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-200"
          >
            Add Your First Project
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {(resume.projects ?? []).map((project, index) => (
            <div
              key={project.id}
              className="bg-black/20 border border-blue-800/30 rounded-lg p-6"
            >
              {/* Project header with delete */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-blue-300">
                  Project #{index + 1}
                </h3>
                <button
                  onClick={() => removeProject(project.id)}
                  className="p-2 text-red-400 hover:bg-red-400/20 rounded-lg transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Project Name */}
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Project Name
                  </label>
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) =>
                      updateProject(project.id, "name", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-blue-200/40"
                    placeholder="Project name"
                  />
                </div>

                {/* Project URL */}
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Project URL (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      value={project.liveUrl}
                      onChange={(e) =>
                        updateProject(project.id, "liveUrl", e.target.value)
                      }
                      className="w-full px-4 py-3 pr-10 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-blue-200/40"
                      placeholder="https://project-url.com"
                    />
                    <ExternalLink
                      size={18}
                      className="absolute right-3 top-3 text-blue-400/50"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-blue-300 mb-2">
                  Project Description
                </label>
                <textarea
                  value={project.description}
                  onChange={(e) =>
                    updateProject(project.id, "description", e.target.value)
                  }
                  rows={4}
                  className="w-full px-4 py-3 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-blue-200/40 resize-none"
                  placeholder="Describe what the project does and your contributions..."
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
