import React from "react";
import { Plus, Minus, Folder, Globe } from "lucide-react";
import FormHeading from "@//app/(main)/_shared/form-heading";
import useResumeStore from "@//store/resumeStore";

function ProjectsForm() {
  const { resume, setResume } = useResumeStore();

  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      name: "",
      description: "",
      liveUrl: "",
    };
    setResume({ ...resume, projects: [...resume.projects, newProject] });
  };

  const removeProject = (id) => {
    if (resume.projects.length > 0) {
      setResume({
        ...resume,
        projects: resume.projects.filter((project) => project.id !== id),
      });
    }
  };

  const updateProject = (id, field, value) => {
    setResume({
      ...resume,
      projects: resume.projects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      ),
    });
  };

  const validProjects = resume.projects?.filter(
    (p) => p.name.trim() && p.description.trim()
  );
  const projectsWithLiveUrl = resume.projects.filter((p) => p.liveUrl.trim());

  return (
    <div className="relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          {/* Header */}

          <FormHeading
            Icon={Folder}
            firstHeading={"Project"}
            secondHeading={"Portfolio"}
            subHeading={`Showcase your amazing projects and share them with the world.`}
          />

          {/* Form Card */}
          <div>
            <div className="space-y-8">
              {/* Projects List */}
              <div className="space-y-6">
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                  {resume.projects.map((project, index) => (
                    <div
                      key={project.id}
                      className="group bg-black/40 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:bg-black/60"
                    >
                      <div className="space-y-4">
                        {/* Project Header */}
                        <div className="flex items-center space-x-4">
                          {/* Project Number */}
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>

                          {/* Project Name Input */}
                          <div className="flex-1">
                            <input
                              type="text"
                              placeholder="Enter project name (e.g., E-commerce Website, Mobile App)"
                              value={project.name}
                              onChange={(e) =>
                                updateProject(
                                  project.id,
                                  "name",
                                  e.target.value
                                )
                              }
                              className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-lg"
                            />
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeProject(project.id)}
                            className="flex-shrink-0 w-10 h-10 bg-red-600/20 hover:bg-red-600/40 border border-red-500/30  rounded-xl flex items-center justify-center text-red-400  hover:text-red-300 transition-all duration-300 group-hover:scale-105 cursor-pointer"
                          >
                            <Minus className="w-5 h-5" />
                          </button>
                        </div>
                        {/* Live URL */}
                        <div className="ml-14">
                          <div className="relative">
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                              <Globe className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                              type="url"
                              placeholder="https://your-project-url.com (optional)"
                              value={project.liveUrl}
                              onChange={(e) =>
                                updateProject(
                                  project.id,
                                  "liveUrl",
                                  e.target.value
                                )
                              }
                              className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                            />
                          </div>
                        </div>
                        {/* Project Description */}
                        <div className="ml-14">
                          <textarea
                            placeholder="Describe your project, technologies used, key features, and your role..."
                            value={project.description}
                            onChange={(e) =>
                              updateProject(
                                project.id,
                                "description",
                                e.target.value
                              )
                            }
                            rows={3}
                            className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 resize-none"
                          />
                        </div>

                        {/* Project Status Indicator */}
                        {project.name.trim() && project.description.trim() && (
                          <div className="ml-14">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="text-green-400 text-sm font-medium">
                                Project ready
                              </span>
                              {project.liveUrl.trim() && (
                                <>
                                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                                  <span className="text-blue-400 text-sm">
                                    Live URL provided
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Project Button */}
                <button
                  onClick={addProject}
                  className="w-full bg-gray-800/50 hover:bg-gray-700/50 border-2 border-dashed border-gray-600/50 hover:border-blue-500/50 rounded-2xl py-6 px-6 text-gray-400 hover:text-blue-400 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 group-hover:bg-blue-500/30 rounded-full flex items-center justify-center transition-all duration-300">
                      <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                    </div>
                    <span className="text-lg font-medium">
                      Add {resume.projects.length > 0 && "Another"} Project
                    </span>
                  </div>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-800/50">
                <div className="text-center p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {resume.projects.length}
                  </div>
                  <p className="text-gray-400 text-sm">Total Projects</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {validProjects.length}
                  </div>
                  <p className="text-gray-400 text-sm">Complete Projects</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {projectsWithLiveUrl.length}
                  </div>
                  <p className="text-gray-400 text-sm">Live Projects</p>
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

export default ProjectsForm;
