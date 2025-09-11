import useResumeStore from "../store/resumeStore";
import DOMPurify from "dompurify";

const Template14 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume || {};

  const safeHTML = (html) => ({
    __html: DOMPurify.sanitize(html || ""),
  });

  return (
    <div className="max-w-[794px] mx-auto p-8 bg-white font-sans text-gray-900 text-sm leading-relaxed">
      {/* Header: Name and Contact */}
      <header className="mb-6 border-b border-gray-300 pb-4">
        <h1 className="text-3xl font-bold">
          {resumeInfo.firstName} {resumeInfo.lastName}
        </h1>
        <p className="text-lg font-semibold text-gray-700">
          {resumeInfo.jobTitle}
        </p>
        <p className="text-xs text-gray-600 mt-1">
          {resumeInfo.address && <span>{resumeInfo.address} | </span>}
          {resumeInfo.phone && (
            <a href={`tel:${resumeInfo.phone}`} className="hover:underline">
              {resumeInfo.phone}
            </a>
          )}
          {resumeInfo.email && (
            <>
              {" | "}
              <a
                href={`mailto:${resumeInfo.email}`}
                className="hover:underline"
              >
                {resumeInfo.email}
              </a>
            </>
          )}
        </p>
      </header>

      {/* Summary */}
      {resumeInfo.summary && (
        <section className="mb-6">
          <h2 className="uppercase font-semibold border-b border-gray-300 pb-1 mb-3 text-gray-800">
            Professional Summary
          </h2>
          <div
            className=" prose prose-gray"
            dangerouslySetInnerHTML={safeHTML(resumeInfo.summary)}
          />
        </section>
      )}

      {/* Skills */}
      {resumeInfo.skills?.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase font-semibold border-b border-gray-300 pb-1 mb-3 text-gray-800">
            Skills
          </h2>
          <ul className="grid grid-cols-3 gap-3 text-xs">
            {resumeInfo.skills.map((skill, i) => (
              <li
                key={skill.id || i}
                className="font-medium text-gray-900 bg-gray-200 px-2 py-1 rounded"
              >
                {skill.name} {skill.rating ? `(${skill.rating}%)` : ""}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Experience */}
      {resumeInfo.experience?.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase font-semibold border-b border-gray-300 pb-1 mb-4 text-gray-800">
            Professional Experience
          </h2>
          {resumeInfo.experience.map((exp) => (
            <article key={exp.id || exp.companyName} className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-semibold text-base">{exp.companyName}</h3>
                <time className="text-xs text-gray-600 whitespace-nowrap">
                  {exp.startDate || ""} -{" "}
                  {exp.currentlyWorking ? "Present" : exp.endDate || ""}
                </time>
              </div>
              <p className="italic text-sm text-gray-700 mb-1">{exp.title}</p>
              <p className="text-xs text-gray-600 mb-2">
                {[exp.city, exp.state].filter(Boolean).join(", ")}
              </p>
              <div
                className="text-sm text-gray-700 prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(exp.workSummary)}
              />
            </article>
          ))}
        </section>
      )}

      {/* Education */}
      {resumeInfo.education?.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase font-semibold border-b border-gray-300 pb-1 mb-4 text-gray-800">
            Education
          </h2>
          {resumeInfo.education.map((edu) => (
            <article key={edu.id || edu.universityName} className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-semibold text-base">
                  {edu.universityName}
                </h3>
                <time className="text-xs text-gray-600 whitespace-nowrap">
                  {edu.startDate || ""} - {edu.endDate || ""}
                </time>
              </div>
              <p className="italic text-sm text-gray-700 mb-1">
                {edu.degree} {edu.major && `in ${edu.major}`}
              </p>
              <div
                className="text-sm text-gray-700 prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(edu.description)}
              />
            </article>
          ))}
        </section>
      )}

      {/* Certifications */}
      {resumeInfo.certifications?.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase font-semibold border-b border-gray-300 pb-1 mb-4 text-gray-800">
            Certifications
          </h2>
          <ul className="list-disc list-inside text-sm ml-4 space-y-1">
            {resumeInfo.certifications.map((cert) => (
              <li key={cert.id || cert.name}>
                <strong>{cert.name}</strong> - {cert.authority} |{" "}
                {cert.issueDate}
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
          <h2 className="uppercase font-semibold border-b border-gray-300 pb-1 mb-4 text-gray-800">
            Projects
          </h2>
          {resumeInfo.projects.map((project, i) => (
            <article key={project.id || i} className="mb-4">
              <h3 className="font-semibold text-base mb-1">{project.name}</h3>
              <p className="italic text-sm mb-1">{project.description}</p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline text-sm"
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
          <h2 className="uppercase font-semibold border-b border-gray-300 pb-1 mb-4 text-gray-800">
            Achievements
          </h2>
          {resumeInfo.achievements.map((ach) => (
            <article key={ach.id || ach.title} className="mb-4">
              <h3 className="font-semibold text-base mb-1">{ach.title}</h3>
              <p className="text-xs text-gray-600 mb-1">{ach.date}</p>
              <p
                className="italic text-sm  prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(ach.description)}
              />
            </article>
          ))}
        </section>
      )}

      {/* Languages */}
      {resumeInfo.languages?.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase font-semibold border-b border-gray-300 pb-1 mb-4 text-gray-800">
            Languages
          </h2>
          <ul className="list-disc list-inside text-sm ml-4 space-y-1">
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
          <h2 className="uppercase font-semibold border-b border-gray-300 pb-1 mb-4 text-gray-800">
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

export default Template14;
