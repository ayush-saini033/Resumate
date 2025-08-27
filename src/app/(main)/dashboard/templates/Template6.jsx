import useResumeStore from "../../../../store/resumeStore";

const Template6 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-black shadow-sm border border-gray-200">
      {/* Header - Centered for visual impact */}
      <header className="text-center mb-8 pb-6 border-b-2 border-gray-800">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 tracking-wide">
          {resumeInfo.firstName} {resumeInfo.lastName}
        </h1>
        <h2 className="text-xl font-medium text-gray-700 mb-4 uppercase tracking-widest">
          {resumeInfo.jobTitle}
        </h2>

        {/* Contact Information - Horizontally centered */}
        <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-gray-600 mb-4">
          <span className="flex items-center">
            <span className="font-medium">📧</span>
            <span className="ml-1">{resumeInfo.email}</span>
          </span>
          <span className="text-gray-400">|</span>
          <span className="flex items-center">
            <span className="font-medium">📱</span>
            <span className="ml-1">{resumeInfo.phone}</span>
          </span>
          <span className="text-gray-400">|</span>
          <span className="flex items-center">
            <span className="font-medium">📍</span>
            <span className="ml-1">{resumeInfo.address}</span>
          </span>
          {resumeInfo.socialLinks.map((link, index) => (
            <span key={link.id || index} className="flex items-center">
              <span className="text-gray-400">|</span>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                {link.name || link.url}
              </a>
            </span>
          ))}
        </div>
      </header>

      {/* Professional Summary */}
      {resumeInfo.summery && (
        <section className="mb-8">
          <h3 className="text-lg font-bold mb-4 text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-2">
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            {resumeInfo.summery}
          </p>
        </section>
      )}

      {/* Two-column layout for main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2">
          {/* Professional Experience */}
          {resumeInfo.experience && resumeInfo.experience.length > 0 && (
            <section className="mb-8">
              <h3 className="text-lg font-bold mb-6 text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-2">
                Professional Experience
              </h3>
              {resumeInfo.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="mb-6 pb-6 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-base font-semibold text-blue-600 mb-1">
                        {exp.companyName}
                      </p>
                      <p className="text-sm text-gray-600">
                        {exp.city}, {exp.state}
                      </p>
                    </div>
                    <div className="text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1 rounded-md mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">
                      {exp.startDate} -{" "}
                      {exp.currentlyWorking ? "Present" : exp.endDate}
                    </div>
                  </div>
                  <div
                    className="text-gray-700 leading-relaxed text-sm"
                    dangerouslySetInnerHTML={{ __html: exp.workSummery }}
                  />
                </div>
              ))}
            </section>
          )}

          {/* Projects */}
          {resumeInfo.projects && resumeInfo.projects.length > 0 && (
            <section className="mb-8">
              <h3 className="text-lg font-bold mb-6 text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-2">
                Key Projects
              </h3>
              {resumeInfo.projects.map((project, index) => (
                <div
                  key={index}
                  className="mb-5 pb-5 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-900 flex-1">
                      {project.name}
                    </h4>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors mt-1 sm:mt-0 sm:ml-4"
                      >
                        🔗 View Project
                      </a>
                    )}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-1">
          {/* Technical Skills */}
          {resumeInfo.skills && resumeInfo.skills.length > 0 && (
            <section className="mb-8">
              <h3 className="text-lg font-bold mb-6 text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-2">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {resumeInfo.skills.map((skill) => (
                  <div key={skill.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-blue-600">
                        {skill.rating}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.rating}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {resumeInfo.education && resumeInfo.education.length > 0 && (
            <section className="mb-8">
              <h3 className="text-lg font-bold mb-6 text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-2">
                Education
              </h3>
              {resumeInfo.education.map((edu) => (
                <div key={edu.id} className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-base font-bold text-gray-900 mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-medium text-blue-600 mb-1">
                    {edu.major}
                  </p>
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    {edu.universityName}
                  </p>
                  <p className="text-xs text-gray-600 bg-white px-2 py-1 rounded inline-block mb-2">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  {edu.description && (
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template6;
