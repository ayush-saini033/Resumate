import useResumeStore from "../store/resumeStore";
const Template3 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white font-mono text-black">
      {/* Header */}
      <div className="text-center mb-10">
        {/* Name */}
        <h1 className="text-3xl font-bold mb-1 tracking-wide">
          {resumeInfo.firstName.toUpperCase()}{" "}
          {resumeInfo.lastName.toUpperCase()}
        </h1>

        {/* Job Title */}
        <p className="text-base font-semibold text-gray-800 mb-3">
          {resumeInfo.jobTitle}
        </p>

        {/* Contact + Links */}
        <div className="flex flex-col items-center space-y-1 text-sm text-gray-700">
          {/* Address */}
          <p>{resumeInfo.address}</p>

          {/* Phone + Email */}
          <p>
            {resumeInfo.phone} |{" "}
            <a
              href={`mailto:${resumeInfo.email}`}
              className="text-blue-700 hover:underline transition-colors duration-200"
            >
              {resumeInfo.email}
            </a>
          </p>

          {/* Professional Links */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {resumeInfo.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <h2 className="text-sm font-bold mb-1 underline">
          Summary of Qualification
        </h2>
        <div
          className="prose prose-gray max-w-none text-sm"
          dangerouslySetInnerHTML={{ __html: resumeInfo.summary }}
        />
      </div>

      <hr className="border-gray-300 mb-8" />

      {/* Core Competencies */}
      <div className="mb-8">
        <h2 className="text-sm font-bold mb-3 underline">CORE COMPETENCIES</h2>
        <div className="grid grid-cols-3 gap-3 text-sm">
          {resumeInfo.skills.map((skill) => (
            <div key={skill.id} className="flex flex-col gap-1">
              <span>• {skill.name}</span>
              <div className="w-full h-2 bg-gray-300 rounded overflow-hidden">
                <div
                  className="h-3 rounded bg-gradient-to-r from-blue-600 to-blue-400"
                  style={{ width: `${skill.rating}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-300 mb-8" />

      {/* Professional Experience */}
      <div className="mb-8">
        <h2 className="text-sm font-bold mb-3 underline">
          PROFESSIONAL EXPERIENCE
        </h2>
        {resumeInfo.experience.map((exp) => (
          <div key={exp.id} className="mb-6">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-bold text-sm">{exp.title}</h3>
                <p className="text-sm text-gray-700">
                  {exp.companyName}, {exp.city}, {exp.state}
                </p>
              </div>
              <p className="text-sm text-gray-600">
                {exp.startDate} -{" "}
                {exp.currentlyWorking ? "Present" : exp.endDate}
              </p>
            </div>
            <div
              className="prose prose-gray max-w-none text-sm"
              dangerouslySetInnerHTML={{ __html: exp.workSummary }}
            />
          </div>
        ))}
      </div>

      <hr className="border-gray-300 mb-8" />

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-sm font-bold mb-3 underline">EDUCATION</h2>
        {resumeInfo.education.map((edu) => (
          <div key={edu.id} className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-sm">
                  {edu.degree} in {edu.major}
                </h3>
                <p className="text-sm text-gray-700">{edu.universityName}</p>
                <div
                  className="prose prose-gray max-w-none text-sm"
                  dangerouslySetInnerHTML={{ __html: edu.description }}
                />
              </div>
              <p className="text-sm text-gray-600">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-gray-300 mb-8" />

      {resumeInfo.certifications?.length > 0 && (
        <section className="mb-10">
          <h2 className="text-sm font-bold mb-3 underline">CERTIFICATIONS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resumeInfo.certifications.map((cert) => (
              <div key={cert.id}>
                <h3 className="font-semibold text-base">{cert.name}</h3>
                <p className="text-sm text-gray-600">
                  {cert.authority} | {cert.issueDate}{" "}
                  {cert.expiryDate && `- ${cert.expiryDate}`}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <hr className="border-gray-300 mb-8" />

      {/* Projects */}
      <div>
        <h2 className="text-sm font-bold mb-3 underline">
          Highlighted Projects
        </h2>
        {resumeInfo.projects.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold text-sm">{project.name}</h3>
            <p className="text-sm text-gray-800 mb-1">{project.description}</p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline text-sm font-medium transition-colors duration-200"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
      <hr className="border-gray-300 mb-8" />
      {resumeInfo.achievements?.length > 0 && (
        <section className="mb-10">
          <h2 className="text-sm font-bold mb-3 underline">ACHIEVEMENTS</h2>
          {resumeInfo.achievements.map((ach) => (
            <div key={ach.id} className="mb-4">
              <h3 className="font-semibold text-sm">{ach.title}</h3>
              <p className="text-xs text-gray-600">{ach.date}</p>
              <div
                className="prose prose-gray max-w-none text-sm"
                dangerouslySetInnerHTML={{ __html: ach.description }}
              />
            </div>
          ))}
        </section>
      )}

      <hr className="border-gray-300 my-8" />
      {/* Languages */}
      {resumeInfo.languages?.length > 0 && (
        <section className="mb-10">
          <h2 className="text-sm font-bold mb-3 underline">LANGUAGES</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {resumeInfo.languages.map((lang, i) => (
              <div key={i} className="flex items-center">
                <span className="font-medium">{lang.name}</span>
                <span className="ml-2 text-gray-600 italic text-xs">
                  ({lang.proficiency})
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
      <hr className="border-gray-300 my-8" />

      {/* Preferences */}
      {resumeInfo.preferences.jobType.length > 0 && (
        <section className="mb-6">
          <h2 className="text-sm font-bold mb-3 underline">JOB PREFERENCES</h2>
          <p className="text-sm">
            <span className="font-semibold">Job Type:</span>{" "}
            {resumeInfo.preferences.jobType}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Preferred Location:</span>{" "}
            {resumeInfo.preferences.location}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Willing to Relocate:</span>{" "}
            {resumeInfo.preferences.relocation ? "Yes" : "No"}
          </p>
        </section>
      )}
    </div>
  );
};

export default Template3;
