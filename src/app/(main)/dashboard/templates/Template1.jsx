import useResumeStore from "../../../../store/resumeStore";
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
      <header className="mb-10 border-b-2 border-gray-300 pb-6 text-center">
        <h1 className="text-4xl font-serif font-bold mb-2 tracking-wide">
          {resumeInfo.firstName || ""} {resumeInfo.lastName || ""}
        </h1>
        <p className="text-lg font-medium text-gray-700">
          {resumeInfo.jobTitle || ""}
        </p>
        <p className="text-gray-600 text-base mt-1">
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
          <p className="mt-2 text-blue-600 text-sm">
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
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-4 text-gray-800">
            PROFESSIONAL SUMMARY
          </h2>
          <div
            className="prose prose-gray max-w-none text-sm"
            dangerouslySetInnerHTML={safeHTML(resumeInfo.summary)}
          />
        </section>
      )}

      {/* Technical Competencies */}
      {(resumeInfo.skills || []).length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6 text-gray-800">
            TECHNICAL COMPETENCIES
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-8 text-sm">
            {resumeInfo.skills.map((skill, index) => {
              const radius = 20;
              const circumference = 2 * Math.PI * radius;
              const rating = skill.rating || 0;
              const progress = (rating / 100) * circumference;
              const dashOffset = circumference - progress;

              return (
                <div
                  key={skill.id || index}
                  className="flex items-center gap-4"
                >
                  <svg className="w-12 h-12" viewBox="0 0 50 50">
                    <circle
                      cx="25"
                      cy="25"
                      r={radius}
                      stroke="#e5e7eb"
                      strokeWidth="5"
                      fill="none"
                    />
                    <circle
                      cx="25"
                      cy="25"
                      r={radius}
                      stroke="#2563eb"
                      strokeWidth="5"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={dashOffset}
                      strokeLinecap="round"
                      transform="rotate(-90 25 25)"
                    />
                    <text
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fontSize="14"
                      fill="#1e3a8a"
                      fontWeight="600"
                    >
                      {rating}
                    </text>
                  </svg>
                  <span className="font-medium text-gray-800">
                    {skill.name || ""}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Professional Experience */}
      {(resumeInfo.experience || []).length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6 text-gray-800">
            PROFESSIONAL EXPERIENCE
          </h2>
          {resumeInfo.experience.map((exp) => (
            <div key={exp.id || exp.companyName} className="mb-6">
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg">
                    {exp.companyName || ""}
                  </h3>
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
                className="prose prose-gray max-w-none text-sm"
                dangerouslySetInnerHTML={safeHTML(exp.workSummary)}
              />
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {(resumeInfo.education || []).length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6 text-gray-800">
            EDUCATION
          </h2>
          {resumeInfo.education.map((edu) => (
            <div
              key={edu.id || edu.universityName}
              className="mb-5 flex justify-between items-start"
            >
              <div>
                <h3 className="font-semibold text-lg">
                  {edu.universityName || ""}
                </h3>
                <p className="italic text-gray-600 text-sm">
                  {edu.degree || ""} {edu.major && `in ${edu.major}`}
                </p>
                <div
                  className="prose prose-gray max-w-none text-sm"
                  dangerouslySetInnerHTML={safeHTML(edu.description)}
                />
              </div>
              <p className="text-xs text-gray-600 whitespace-nowrap">
                {edu.startDate || ""} - {edu.endDate || ""}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {(resumeInfo.certifications || []).length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6 text-gray-800">
            CERTIFICATIONS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resumeInfo.certifications.map((cert) => (
              <div key={cert.id || cert.name}>
                <h3 className="font-semibold text-base">{cert.name || ""}</h3>
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
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6 text-gray-800">
            KEY PROJECTS
          </h2>
          {resumeInfo.projects.map((project, index) => (
            <div key={project.id || index} className="mb-5">
              <h3 className="font-semibold text-base">{project.name || ""}</h3>
              <p className="text-gray-700 text-sm italic">
                {project.description || ""}
              </p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-xs"
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
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6 text-gray-800">
            ACHIEVEMENTS
          </h2>
          {resumeInfo.achievements.map((ach) => (
            <div key={ach.id || ach.title} className="mb-4">
              <h3 className="font-semibold text-sm">{ach.title || ""}</h3>
              <p className="text-xs text-gray-600">{ach.date || ""}</p>
              <div
                className="prose prose-gray max-w-none text-sm"
                dangerouslySetInnerHTML={safeHTML(ach.description)}
              />
            </div>
          ))}
        </section>
      )}

      {/* Languages */}
      {(resumeInfo.languages || []).length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6 text-gray-800">
            LANGUAGES
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {resumeInfo.languages.map((lang, i) => (
              <div key={lang.id || i} className="flex items-center">
                <span className="font-medium">{lang.name || ""}</span>
                {lang.proficiency && (
                  <span className="ml-2 text-gray-600 italic text-xs">
                    ({lang.proficiency})
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Preferences */}
      {resumeInfo.preferences?.jobType && (
        <section className="mb-6">
          <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-4 text-gray-800">
            JOB PREFERENCES
          </h2>
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
        </section>
      )}
    </div>
  );
};

export default Template1;
