import useResumeStore from "../../../../store/resumeStore";
const Template5 = () => {
     const { resume } = useResumeStore();
     const resumeInfo = resume;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-black shadow-sm border border-gray-200">
      {/* Header */}
      <header className="mb-6 border-b-2 border-gray-800 pb-4">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          {resumeInfo.firstName} {resumeInfo.lastName}
        </h1>
        <p className="text-lg font-medium text-gray-700 mb-3">
          {resumeInfo.jobTitle}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <span>{resumeInfo.address}</span>
          <span>•</span>
          <span>{resumeInfo.phone}</span>
          <span>•</span>
          <span>{resumeInfo.email}</span>
          {resumeInfo.socialLinks.map((link, index) => (
            <span key={link.id || index} className="flex items-center">
              <span>•</span>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-blue-600 hover:underline"
              >
                {link.name || link.url}
              </a>
            </span>
          ))}
        </div>
      </header>

      {/* Professional Summary */}
      {resumeInfo.summery && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3 text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{resumeInfo.summery}</p>
        </section>
      )}

      {/* Professional Experience */}
      {resumeInfo.experience && resumeInfo.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-4 text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
            Professional Experience
          </h2>
          {resumeInfo.experience.map((exp) => (
            <div key={exp.id} className="mb-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-base text-gray-900">
                    {exp.title}
                  </h3>
                  <p className="font-medium text-gray-700">
                    {exp.companyName} | {exp.city}, {exp.state}
                  </p>
                </div>
                <div className="text-sm text-gray-600 text-right">
                  {exp.startDate} -{" "}
                  {exp.currentlyWorking ? "Present" : exp.endDate}
                </div>
              </div>
              <div
                className="text-gray-700 text-sm leading-relaxed ml-0"
                dangerouslySetInnerHTML={{ __html: exp.workSummery }}
              />
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {resumeInfo.education && resumeInfo.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-4 text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
            Education
          </h2>
          {resumeInfo.education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-bold text-base text-gray-900">
                    {edu.degree} in {edu.major}
                  </h3>
                  <p className="font-medium text-gray-700">
                    {edu.universityName}
                  </p>
                </div>
                <div className="text-sm text-gray-600">
                  {edu.startDate} - {edu.endDate}
                </div>
              </div>
              {edu.description && (
                <p className="text-sm text-gray-700 leading-relaxed">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Technical Skills */}
      {resumeInfo.skills && resumeInfo.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-4 text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeInfo.skills.map((skill) => (
              <div key={skill.id} className="flex justify-between items-center">
                <span className="font-medium text-gray-800">{skill.name}</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                      style={{ width: `${skill.rating}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600 w-8 text-right">
                    {skill.rating}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {resumeInfo.projects && resumeInfo.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-4 text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
            Projects
          </h2>
          {resumeInfo.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-base text-gray-900">
                  {project.name}
                </h3>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View Project
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Template5;
