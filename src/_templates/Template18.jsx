import useResumeStore from "../store/resumeStore";
import DOMPurify from "dompurify";

const Template18 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume || {};

  const safeHTML = (html) => ({
    __html: DOMPurify.sanitize(html || ""),
  });

  return (
    <div className="max-w-[794px] mx-auto p-6 bg-white font-sans text-gray-900 text-xs leading-tight">
      {/* Header */}
      <header className="mb-4 border-b border-gray-400 pb-2">
        <h1 className="text-2xl font-bold">
          {resumeInfo.firstName} {resumeInfo.lastName}
        </h1>
        <p className="text-sm font-medium">{resumeInfo.jobTitle}</p>
        <p className="text-xs text-gray-600">
          {resumeInfo.address && <>{resumeInfo.address} | </>}
          {resumeInfo.phone && (
            <>
              <a href={`tel:${resumeInfo.phone}`} className="hover:underline">
                {resumeInfo.phone}
              </a>{" "}
              |{" "}
            </>
          )}
          {resumeInfo.email && (
            <a href={`mailto:${resumeInfo.email}`} className="hover:underline">
              {resumeInfo.email}
            </a>
          )}
        </p>
      </header>

      {/* Summary */}
      {resumeInfo.summary && (
        <section className="mb-3">
          <h2 className="text-sm font-semibold uppercase border-b border-gray-300 mb-1">
            Professional Summary
          </h2>
          <div
            className="pl-2  prose prose-gray"
            dangerouslySetInnerHTML={safeHTML(resumeInfo.summary)}
          />
        </section>
      )}

      {/* Skills */}
      {resumeInfo.skills?.length > 0 && (
        <section className="mb-3">
          <h2 className="text-sm font-semibold uppercase border-b border-gray-300 mb-1">
            Skills
          </h2>
          <ul className="pl-4 list-disc grid grid-cols-3 gap-x-3 gap-y-1">
            {resumeInfo.skills.map((skill, i) => (
              <li key={skill.id || i}>
                {skill.name} {skill.rating ? `(${skill.rating}%)` : ""}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Experience */}
      {resumeInfo.experience?.length > 0 && (
        <section className="mb-3">
          <h2 className="text-sm font-semibold uppercase border-b border-gray-300 mb-1">
            Experience
          </h2>
          {resumeInfo.experience.map((exp, i) => (
            <div key={exp.id || i} className="mb-2 pl-2">
              <div className="flex justify-between">
                <h3 className="font-semibold">{exp.companyName}</h3>
                <span className="text-gray-600 text-xs">
                  {exp.startDate} -{" "}
                  {exp.currentlyWorking ? "Present" : exp.endDate}
                </span>
              </div>
              <p className="italic text-xs">{exp.title}</p>
              {exp.city || exp.state ? (
                <p className="text-gray-600 text-xs mb-1">
                  {[exp.city, exp.state].filter(Boolean).join(", ")}
                </p>
              ) : null}
              <div
                className=" prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(exp.workSummary)}
              />
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {resumeInfo.education?.length > 0 && (
        <section className="mb-3">
          <h2 className="text-sm font-semibold uppercase border-b border-gray-300 mb-1">
            Education
          </h2>
          {resumeInfo.education.map((edu, i) => (
            <div key={edu.id || i} className="mb-2 pl-2">
              <div className="flex justify-between">
                <h3 className="font-semibold">{edu.universityName}</h3>
                <span className="text-gray-600 text-xs">
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
              <p className="italic text-xs">
                {edu.degree} {edu.major && `in ${edu.major}`}
              </p>
              <div
                className=" prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(edu.description)}
              />
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {resumeInfo.certifications?.length > 0 && (
        <section className="mb-3">
          <h2 className="text-sm font-semibold uppercase border-b border-gray-300 mb-1">
            Certifications
          </h2>
          <ul className="pl-2 list-disc list-inside text-xs">
            {resumeInfo.certifications.map((cert, i) => (
              <li key={cert.id || i}>
                {cert.name} — {cert.authority} | {cert.issueDate}
                {cert.expiryDate && ` - ${cert.expiryDate}`}
                {cert.credentialUrl && (
                  <>
                    {" "}
                    |{" "}
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
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
          <h2 className="text-sm font-semibold uppercase border-b border-gray-300 mb-1">
            Projects
          </h2>
          {resumeInfo.projects.map((project, i) => (
            <div key={project.id || i} className="mb-2 pl-2">
              <h3 className="font-semibold text-sm">{project.name}</h3>
              <p className="italic text-xs">{project.description}</p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-xs hover:underline"
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
          <h2 className="text-sm font-semibold uppercase border-b border-gray-300 mb-1">
            Achievements
          </h2>
          {resumeInfo.achievements.map((ach, i) => (
            <div key={ach.id || i} className="mb-2 pl-2">
              <h3 className="font-semibold text-sm">{ach.title}</h3>
              {ach.date && <p className="text-gray-600 text-xs">{ach.date}</p>}
              <div
                className="italic text-xs prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(ach.description)}
              />
            </div>
          ))}
        </section>
      )}

      {/* Languages */}
      {resumeInfo.languages?.length > 0 && (
        <section className="mb-3">
          <h2 className="text-sm font-semibold uppercase border-b border-gray-300 mb-1">
            Languages
          </h2>
          <ul className="pl-2 list-disc list-inside text-xs">
            {resumeInfo.languages.map((lang, i) => (
              <li key={lang.id || i}>
                {lang.name} {lang.proficiency ? `(${lang.proficiency})` : ""}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Preferences */}
      {resumeInfo.preferences?.jobType && (
        <section className="mb-1">
          <h2 className="text-sm font-semibold uppercase border-b border-gray-300 mb-1">
            Job Preferences
          </h2>
          <dl className="pl-2 text-xs">
            <div>
              <dt className="inline font-semibold">Job Type:</dt>{" "}
              <dd className="inline">{resumeInfo.preferences.jobType}</dd>
            </div>
            {resumeInfo.preferences.location && (
              <div>
                <dt className="inline font-semibold">Preferred Location:</dt>{" "}
                <dd className="inline">{resumeInfo.preferences.location}</dd>
              </div>
            )}
            <div>
              <dt className="inline font-semibold">Relocation:</dt>{" "}
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

export default Template18;
