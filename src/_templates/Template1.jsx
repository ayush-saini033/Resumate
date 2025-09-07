import useResumeStore from "../store/resumeStore";
import DOMPurify from "dompurify";
const Template1 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume || {};

  // Helper for safe HTML
  const safeHTML = (html) => ({
    __html: DOMPurify.sanitize(html || ""),
  });

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white font-sans text-gray-900 leading-relaxed">
      {/* Header */}
      <header className=" mb-2 border-b-2 border-gray-300 pb-6 text-center">
        <h1 className="text-2xl font-serif font-bold tracking-wide">
          {resumeInfo.firstName || ""} {resumeInfo.lastName || ""}
        </h1>
        <p className="font-medium text-gray-700">{resumeInfo.jobTitle || ""}</p>
        <p className="text-gray-600 text-sm">
          {resumeInfo.address || ""}{" "}
          {resumeInfo.phone && (
            <>
              |{" "}
              <a href={`tel:${resumeInfo.phone}`} className="hover:underline">
                {resumeInfo.phone}
              </a>
            </>
          )}
          {resumeInfo.email && (
            <>
              {" "}
              |{" "}
              <a
                href={`mailto:${resumeInfo.email}`}
                className="hover:underline"
              >
                {resumeInfo.email}
              </a>
            </>
          )}
        </p>
        {(resumeInfo.socialLinks || []).length > 0 && (
          <p className="text-blue-600 text-sm">
            {resumeInfo.socialLinks.map((link, i) => (
              <span key={link.id || i}>
                <a
                  href={link.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {link.name || "Link"}
                </a>
                {i < resumeInfo.socialLinks.length - 1 && " • "}
              </span>
            ))}
          </p>
        )}
      </header>

      {/* Professional Summary */}
      {resumeInfo.summary && (
        <section className="mb-2">
          <h2 className="text-lg font-serif font-semibold border-b border-gray-300 pb-2 mb-1 text-gray-800">
            PROFESSIONAL SUMMARY
          </h2>
          <div
            className="prose prose-gray max-w-none text-sm ml-6"
            dangerouslySetInnerHTML={safeHTML(resumeInfo.summary)}
          />
        </section>
      )}

      {/* Technical Competencies */}
      {(resumeInfo.skills || []).length > 0 && (
        <section className="mb-2">
          <h2 className="font-serif font-semibold text-gray-800 mb-2">
            TECHNICAL COMPETENCIES
          </h2>
          <div className="flex flex-wrap gap-2 text-sm ml-6">
            {resumeInfo.skills.map((skill, index) => (
              <span
                key={skill.id || index}
                className="flex items-center px-2 py-1 bg-gray-200 text-gray-800 rounded-full"
              >
                <span className="mr-3 font-medium">{skill.name}</span>
                {skill.rating !== 0 && (
                  <span className="text-gray-600">({skill.rating || 0}%)</span>
                )}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Professional Experience */}
      {(resumeInfo.experience || []).length > 0 && (
        <section className="mb-2">
          <h2 className="font-serif font-semibold border-b border-gray-300 pb-2 mb-2 text-gray-800">
            PROFESSIONAL EXPERIENCE
          </h2>
          {resumeInfo.experience.map((exp) => (
            <div key={exp.id || exp.companyName} className="mb-2 ml-6">
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="font-semibold">{exp.companyName || ""}</h3>
                  <p className="italic text-gray-600 text-sm">
                    {exp.title || ""}
                  </p>
                </div>
                <div className="text-right text-xs text-gray-600">
                  <p>{[exp.city, exp.state].filter(Boolean).join(", ")}</p>
                  <p>
                    {exp.startDate || ""} -{" "}
                    {exp.currentlyWorking ? "Present" : exp.endDate || ""}
                  </p>
                </div>
              </div>
              <div
                className="prose prose-gray max-w-none text-sm ml-3"
                dangerouslySetInnerHTML={safeHTML(exp.workSummary)}
              />
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {(resumeInfo.education || []).length > 0 && (
        <section className="mb-2">
          <h2 className="font-serif font-semibold border-b border-gray-300 pb-1 mb-2 text-gray-800">
            EDUCATION
          </h2>
          {resumeInfo.education.map((edu) => (
            <div key={edu.id || edu.universityName} className="mb-2  ml-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{edu.universityName || ""}</h3>
                  <p className="italic text-gray-600 text-sm">
                    {edu.degree || ""} {edu.major && `in ${edu.major}`}
                  </p>
                </div>
                <p className="text-xs text-gray-600 whitespace-nowrap">
                  {edu.startDate || ""} - {edu.endDate || ""}
                </p>
              </div>
              <div
                className="prose prose-gray max-w-none text-sm ml-3"
                dangerouslySetInnerHTML={safeHTML(edu.description)}
              />
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {(resumeInfo.certifications || []).length > 0 && (
        <section className="mb-2">
          <h2 className="font-serif font-semibold border-b border-gray-300 pb-2 mb-2 text-gray-800">
            CERTIFICATIONS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ml-6">
            {resumeInfo.certifications.map((cert) => (
              <div key={cert.id || cert.name}>
                <h3 className="font-semibold">{cert.name || ""}</h3>
                <p className="text-sm text-gray-600">
                  {cert.authority || ""} | {cert.issueDate || ""}{" "}
                  {cert.expiryDate && `- ${cert.expiryDate}`}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-xs"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {(resumeInfo.projects || []).length > 0 && (
        <section className="mb-2">
          <h2 className="font-serif font-semibold border-b border-gray-300 pb-2 mb-2 text-gray-800">
            KEY PROJECTS
          </h2>
          {resumeInfo.projects.map((project, index) => (
            <div key={project.id || index} className="mb-2 ml-6">
              <h3 className="font-semibold text-base">{project.name || ""}</h3>
              <p className="text-gray-700 text-sm italic ml-3">
                {project.description || ""}
              </p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-xs ml-3"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Achievements */}
      {(resumeInfo.achievements || []).length > 0 && (
        <section className="mb-2">
          <h2 className="font-serif font-semibold border-b border-gray-300 pb-2 mb-2 text-gray-800">
            ACHIEVEMENTS
          </h2>
          {resumeInfo.achievements.map((ach) => (
            <div key={ach.id || ach.title} className="mb-2 ml-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{ach.title || ""}</h3>
                <p className="text-xs text-gray-600 ">{ach.date || ""}</p>
              </div>
              <div
                className="prose prose-gray max-w-none text-sm ml-3 italic"
                dangerouslySetInnerHTML={safeHTML(ach.description)}
              />
            </div>
          ))}
        </section>
      )}

      {/* Languages */}
      {(resumeInfo.languages || []).length > 0 && (
        <section className="mb-4">
          <h2 className="font-serif font-semibold text-gray-800 mb-1 border-b border-gray-300 pb-1">
            LANGUAGES
          </h2>
          <p className="text-sm flex flex-wrap gap-x-4 gap-y-1 ml-6">
            {resumeInfo.languages.map((lang, i) => (
              <span key={lang.id || i}>
                <span className="font-medium">{lang.name}</span>
                {lang.proficiency && (
                  <span className="text-gray-600 italic text-xs ml-1">
                    ({lang.proficiency})
                  </span>
                )}
              </span>
            ))}
          </p>
        </section>
      )}

      {/* Preferences */}
      {resumeInfo.preferences?.jobType && (
        <section className="">
          <h2 className="font-serif font-semibold border-b border-gray-300 pb-2 mb-2 text-gray-800">
            JOB PREFERENCES
          </h2>
          <div className="flex items-center justify-between ml-6">
            <p className="text-sm">
              <span className="font-semibold">Job Type:</span>{" "}
              {resumeInfo.preferences.jobType}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Preferred Location:</span>{" "}
              {resumeInfo.preferences.location || ""}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Willing to Relocate:</span>{" "}
              {resumeInfo.preferences.relocation ? "Yes" : "No"}
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Template1;
