import useResumeStore from "../store/resumeStore";
import DOMPurify from "dompurify";

const Template12 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume || {};

  const safeHTML = (html) => ({
    __html: DOMPurify.sanitize(html || ""),
  });

  return (
    <div className="max-w-[794px] mx-auto p-8 bg-white font-serif text-gray-900 text-sm leading-relaxed">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold tracking-wide">
          {resumeInfo.firstName || ""} {resumeInfo.lastName || ""}
        </h1>
        <p className="mt-1 text-base font-semibold">
          {resumeInfo.jobTitle || ""}
        </p>
        <address className="not-italic mt-1 text-xs text-gray-700">
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
          <p className="text-xs text-blue-700 mt-1">
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

      {/* Divider */}
      <hr className="border-gray-400 mb-6" />

      {/* Summary */}
      {resumeInfo.summary && (
        <section className="mb-6">
          <h2 className="text-gray-800 font-semibold uppercase border-l-4 border-blue-600 pl-2 mb-2 tracking-wide">
            Professional Summary
          </h2>
          <div
            className=" prose prose-gray"
            dangerouslySetInnerHTML={safeHTML(resumeInfo.summary)}
          />
        </section>
      )}

      {/* Skills Grid */}
      {resumeInfo.skills?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-gray-800 font-semibold uppercase border-l-4 border-blue-600 pl-2 mb-3 tracking-wide">
            Technical Skills
          </h2>
          <div className="grid grid-cols-3 gap-x-6 gap-y-1 text-sm">
            {resumeInfo.skills.map((skill, i) => (
              <div key={skill.id || i} className="flex items-center space-x-2">
                <span className="font-medium">{skill.name}</span>
                {skill.rating !== 0 && (
                  <span className="text-gray-600 text-xs italic">
                    ({skill.rating || 0}%)
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {resumeInfo.experience?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-gray-800 font-semibold uppercase border-l-4 border-blue-600 pl-2 mb-4 tracking-wide">
            Professional Experience
          </h2>
          {resumeInfo.experience.map((exp) => (
            <article key={exp.id || exp.companyName} className="mb-5 ml-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-base">
                  {exp.companyName || ""}
                </h3>
                <p className="text-xs text-gray-600 whitespace-nowrap">
                  {exp.startDate || ""} -{" "}
                  {exp.currentlyWorking ? "Present" : exp.endDate || ""}
                </p>
              </div>
              <p className="italic text-xs text-gray-700 mb-1">
                {exp.title || ""}
              </p>
              <p className="text-xs text-gray-600 mb-1">
                {[exp.city, exp.state].filter(Boolean).join(", ")}
              </p>
              <div
                dangerouslySetInnerHTML={safeHTML(exp.workSummary)}
                className="text-sm prose prose-gray"
              />
            </article>
          ))}
        </section>
      )}

      {/* Education */}
      {resumeInfo.education?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-gray-800 font-semibold uppercase border-l-4 border-blue-600 pl-2 mb-4 tracking-wide">
            Education
          </h2>
          {resumeInfo.education.map((edu) => (
            <article key={edu.id || edu.universityName} className="mb-5 ml-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-base">
                  {edu.universityName || ""}
                </h3>
                <p className="text-xs text-gray-600 whitespace-nowrap">
                  {edu.startDate || ""} - {edu.endDate || ""}
                </p>
              </div>
              <p className="italic text-xs text-gray-700 mb-1">
                {edu.degree || ""}
                {edu.major && ` in ${edu.major}`}
              </p>
              <div
                dangerouslySetInnerHTML={safeHTML(edu.description)}
                className="text-sm prose prose-gray"
              />
            </article>
          ))}
        </section>
      )}

      {/* Certifications */}
      {resumeInfo.certifications?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-gray-800 font-semibold uppercase border-l-4 border-blue-600 pl-2 mb-3 tracking-wide">
            Certifications
          </h2>
          <ul className="list-disc list-inside ml-6 space-y-1 text-sm">
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
        <section className="mb-6">
          <h2 className="text-gray-800 font-semibold uppercase border-l-4 border-blue-600 pl-2 mb-3 tracking-wide">
            Key Projects
          </h2>
          {resumeInfo.projects.map((project, i) => (
            <article key={project.id || i} className="mb-3 ml-4">
              <h3 className="font-semibold text-base mb-1">
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
            </article>
          ))}
        </section>
      )}

      {/* Achievements */}
      {resumeInfo.achievements?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-gray-800 font-semibold uppercase border-l-4 border-blue-600 pl-2 mb-3 tracking-wide">
            Achievements
          </h2>
          {resumeInfo.achievements.map((ach) => (
            <article key={ach.id || ach.title} className="mb-3 ml-4">
              <h3 className="font-semibold text-base mb-1">
                {ach.title || ""}
              </h3>
              <p className="text-xs text-gray-600 mb-1">{ach.date || ""}</p>
              <p
                className="italic text-sm prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(ach.description)}
              />
            </article>
          ))}
        </section>
      )}

      {/* Languages */}
      {resumeInfo.languages?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-gray-800 font-semibold uppercase border-l-4 border-blue-600 pl-2 mb-3 tracking-wide">
            Languages
          </h2>
          <ul className="list-disc list-inside ml-6 space-y-1 text-sm">
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
        <section className="mb-6">
          <h2 className="text-gray-800 font-semibold uppercase border-l-4 border-blue-600 pl-2 mb-3 tracking-wide">
            Job Preferences
          </h2>
          <dl className="ml-6 text-sm space-y-1">
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

export default Template12;
