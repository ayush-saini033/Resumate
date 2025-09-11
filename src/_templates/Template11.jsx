import useResumeStore from "../store/resumeStore";
import DOMPurify from "dompurify";

const Template11 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume || {};

  const safeHTML = (html) => ({
    __html: DOMPurify.sanitize(html || ""),
  });

  return (
    <div className="max-w-[794px] mx-auto p-10 bg-white font-sans text-black text-[13px] leading-snug">
      {/* Header */}
      <header className="mb-6 pb-4 border-b border-gray-400">
        <h1 className="text-2xl font-bold">
          {resumeInfo.firstName} {resumeInfo.lastName}
        </h1>
        <p className="text-sm font-medium text-gray-800">
          {resumeInfo.jobTitle}
        </p>
        <p className="text-sm text-gray-700 mt-1">
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
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase mb-1">
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
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase mb-1">Skills</h2>
          <ul className="pl-5 list-disc grid grid-cols-2 gap-x-8 gap-y-1">
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
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase mb-1">Work Experience</h2>
          {resumeInfo.experience.map((exp, i) => (
            <div key={exp.id || i} className="mb-3 pl-2">
              <div className="flex justify-between items-center">
                <strong>{exp.title}</strong>
                <span className="text-xs text-gray-700">
                  {exp.startDate} -{" "}
                  {exp.currentlyWorking ? "Present" : exp.endDate}
                </span>
              </div>
              <p className="text-sm italic">{exp.companyName}</p>
              {exp.city || exp.state ? (
                <p className="text-xs text-gray-600">
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
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase mb-1">Education</h2>
          {resumeInfo.education.map((edu, i) => (
            <div key={edu.id || i} className="mb-3 pl-2">
              <div className="flex justify-between items-center">
                <strong>{edu.degree}</strong>
                <span className="text-xs text-gray-700">
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
              <p className="text-sm italic">{edu.universityName}</p>
              {edu.major && (
                <p className="text-xs text-gray-600">Major: {edu.major}</p>
              )}
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
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase mb-1">Certifications</h2>
          <ul className="list-disc list-inside pl-2">
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
                      View
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
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase mb-1">Projects</h2>
          {resumeInfo.projects.map((project, i) => (
            <div key={project.id || i} className="mb-2 pl-2">
              <p className="font-semibold">{project.name}</p>
              <p className="text-sm">{project.description}</p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm hover:underline"
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
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase mb-1">Achievements</h2>
          {resumeInfo.achievements.map((ach, i) => (
            <div key={ach.id || i} className="mb-2 pl-2">
              <p className="font-semibold">{ach.title}</p>
              {ach.date && <p className="text-xs text-gray-700">{ach.date}</p>}
              <div
                className="text-sm italic  prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(ach.description)}
              />
            </div>
          ))}
        </section>
      )}

      {/* Languages */}
      {resumeInfo.languages?.length > 0 && (
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase mb-1">Languages</h2>
          <ul className="pl-4 list-disc list-inside">
            {resumeInfo.languages.map((lang, i) => (
              <li key={lang.id || i}>
                {lang.name} {lang.proficiency && `(${lang.proficiency})`}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Preferences */}
      {resumeInfo.preferences?.jobType && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase mb-1">Job Preferences</h2>
          <dl className="pl-2 text-sm">
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

export default Template11;
