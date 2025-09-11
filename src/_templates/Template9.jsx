import useResumeStore from "../store/resumeStore";
import DOMPurify from "dompurify";

const Template9 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume || {};

  const safeHTML = (html) => ({
    __html: DOMPurify.sanitize(html || ""),
  });

  return (
    <div className="max-w-[794px] mx-auto p-8 bg-white font-serif text-gray-900 text-sm leading-tight">
      {/* Header */}
      <header className="text-center mb-4">
        <h1 className="text-3xl font-bold leading-none">
          {resumeInfo.firstName || ""} {resumeInfo.lastName || ""}
        </h1>
        <p className="text-base font-normal mt-0.5">
          {resumeInfo.jobTitle || ""}
        </p>
        <address className="not-italic text-xs mt-1 text-gray-700">
          {resumeInfo.address || ""}
          {(resumeInfo.phone || resumeInfo.email) && (
            <>
              {" "}
              | {resumeInfo.phone && <span>Phone: {resumeInfo.phone}</span>}
              {resumeInfo.email && (
                <span>
                  {resumeInfo.phone ? " | " : ""}Email: {resumeInfo.email}
                </span>
              )}
            </>
          )}
        </address>
        {resumeInfo.socialLinks?.length > 0 && (
          <p className="text-xs text-blue-700 grid grid-cols-3 mt-1">
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
                {i < resumeInfo.socialLinks.length - 1 && " | "}
              </span>
            ))}
          </p>
        )}
      </header>

      {/* Professional Summary */}
      {resumeInfo.summary && (
        <section className="mb-3">
          <h2 className="font-semibold border-b border-gray-600 pb-0.5 mb-1 uppercase tracking-wide">
            Professional Summary
          </h2>
          <div
            className="ml-4  prose prose-gray"
            dangerouslySetInnerHTML={safeHTML(resumeInfo.summary)}
          />
        </section>
      )}

      {/* Technical Skills */}
      {resumeInfo.skills?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold border-b border-gray-600 pb-0.5 mb-1 uppercase tracking-wide">
            Technical Skills
          </h2>
          <ul className="list-disc list-inside ml-4 space-y-0.5">
            {resumeInfo.skills.map((skill, i) => (
              <li key={skill.id || i}>
                {skill.name} {skill.rating ? `(${skill.rating}%)` : ""}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Professional Experience */}
      {resumeInfo.experience?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold border-b border-gray-600 pb-0.5 mb-1 uppercase tracking-wide">
            Professional Experience
          </h2>
          {resumeInfo.experience.map((exp) => (
            <div key={exp.id || exp.companyName} className="mb-2 ml-4">
              <h3 className="font-semibold text-base mb-0.5">
                {exp.companyName || ""}
              </h3>
              <p className="italic text-xs mb-0.5">{exp.title || ""}</p>
              <p className="text-xs text-gray-700 mb-1">
                {[exp.city, exp.state].filter(Boolean).join(", ")} |{" "}
                {exp.startDate || ""} -{" "}
                {exp.currentlyWorking ? "Present" : exp.endDate || ""}
              </p>
              <div
                className="text-sm prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(exp.workSummary)}
              />
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {resumeInfo.education?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold border-b border-gray-600 pb-0.5 mb-1 uppercase tracking-wide">
            Education
          </h2>
          {resumeInfo.education.map((edu) => (
            <div key={edu.id || edu.universityName} className="mb-2 ml-4">
              <h3 className="font-semibold text-base mb-0.5">
                {edu.universityName || ""}
              </h3>
              <p className="italic text-xs mb-0.5">
                {edu.degree || ""}
                {edu.major && ` in ${edu.major}`}
              </p>
              <p className="text-xs text-gray-700 mb-1">
                {edu.startDate || ""} - {edu.endDate || ""}
              </p>
              <div
                className="text-sm prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(edu.description)}
              />
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {resumeInfo.certifications?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold border-b border-gray-600 pb-0.5 mb-1 uppercase tracking-wide">
            Certifications
          </h2>
          <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
            {resumeInfo.certifications.map((cert) => (
              <li key={cert.id || cert.name}>
                <strong>{cert.name || ""}</strong> - {cert.authority || ""} |{" "}
                {cert.issueDate || ""}
                {cert.expiryDate && ` - ${cert.expiryDate}`}
                {cert.credentialUrl && (
                  <>
                    {" "}
                    |{" "}
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      View Certificate
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Projects */}
      {resumeInfo.projects?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold border-b border-gray-600 pb-0.5 mb-1 uppercase tracking-wide">
            Key Projects
          </h2>
          {resumeInfo.projects.map((project, i) => (
            <div key={project.id || i} className="mb-2 ml-4">
              <h3 className="font-semibold text-base mb-0.5">
                {project.name || ""}
              </h3>
              <p className="italic text-xs mb-1">{project.description || ""}</p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline text-xs"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Achievements */}
      {resumeInfo.achievements?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold border-b border-gray-600 pb-0.5 mb-1 uppercase tracking-wide">
            Achievements
          </h2>
          {resumeInfo.achievements.map((ach) => (
            <div key={ach.id || ach.title} className="mb-2 ml-4">
              <h3 className="font-semibold text-base mb-0.5">
                {ach.title || ""}
              </h3>
              <p className="text-xs text-gray-700 mb-1">{ach.date || ""}</p>
              <p
                className="italic text-sm prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(ach.description)}
              />
            </div>
          ))}
        </section>
      )}

      {/* Languages */}
      {resumeInfo.languages?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold border-b border-gray-600 pb-0.5 mb-1 uppercase tracking-wide">
            Languages
          </h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            {resumeInfo.languages.map((lang, i) => (
              <li key={lang.id || i}>
                {lang.name} {lang.proficiency ? `(${lang.proficiency})` : ""}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Job Preferences */}
      {resumeInfo.preferences?.jobType && (
        <section className="mb-3">
          <h2 className="font-semibold border-b border-gray-600 pb-0.5 mb-1 uppercase tracking-wide">
            Job Preferences
          </h2>
          <dl className="ml-4 text-sm space-y-1">
            <div>
              <dt className="font-semibold inline">Job Type:</dt>{" "}
              <dd className="inline">{resumeInfo.preferences.jobType}</dd>
            </div>
            {resumeInfo.preferences.location && (
              <div>
                <dt className="font-semibold inline">Preferred Location:</dt>{" "}
                <dd className="inline">{resumeInfo.preferences.location}</dd>
              </div>
            )}
            <div>
              <dt className="font-semibold inline">Willing to Relocate:</dt>{" "}
              <dd className="inline">
                {resumeInfo.preferences.relocation ? "Yes" : "No"}
              </dd>
            </div>
          </dl>
        </section>
      )}
    </div>
  );
};

export default Template9;
