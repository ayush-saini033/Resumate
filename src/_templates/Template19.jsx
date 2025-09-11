import useResumeStore from "../store/resumeStore";
import DOMPurify from "dompurify";

const Template19 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume || {};

  const safeHTML = (html) => ({
    __html: DOMPurify.sanitize(html || ""),
  });

  return (
    <div className="max-w-[794px] mx-auto p-8 bg-white font-serif text-black text-sm leading-relaxed">
      {/* Header */}
      <header className="mb-6 border-b border-black pb-3">
        <h1 className="text-3xl font-bold tracking-tight">
          {resumeInfo.firstName} {resumeInfo.lastName}
        </h1>
        <p className="text-base font-medium">{resumeInfo.jobTitle}</p>
        <p className="text-sm mt-1">
          {resumeInfo.address && <span>{resumeInfo.address} | </span>}
          {resumeInfo.phone && (
            <span>
              <a href={`tel:${resumeInfo.phone}`}>{resumeInfo.phone}</a> |{" "}
            </span>
          )}
          {resumeInfo.email && (
            <a href={`mailto:${resumeInfo.email}`}>{resumeInfo.email}</a>
          )}
        </p>
      </header>

      {/* Summary */}
      {resumeInfo.summary && (
        <section className="mb-5">
          <h2 className="text-base font-bold uppercase underline mb-2">
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
        <section className="mb-5">
          <h2 className="text-base font-bold uppercase underline mb-2">
            Skills
          </h2>
          <ul className="list-disc list-inside">
            {resumeInfo.skills.map((skill, i) => (
              <li key={skill.id || i}>
                {skill.name}
                {skill.rating ? ` (${skill.rating}%)` : ""}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Experience */}
      {resumeInfo.experience?.length > 0 && (
        <section className="mb-5">
          <h2 className="text-base font-bold uppercase underline mb-2">
            Work Experience
          </h2>
          {resumeInfo.experience.map((exp, i) => (
            <div key={exp.id || i} className="mb-3">
              <p className="font-semibold">
                {exp.title} | {exp.companyName}
              </p>
              <p className="text-sm italic">
                {exp.startDate} -{" "}
                {exp.currentlyWorking ? "Present" : exp.endDate}
              </p>
              {exp.city || exp.state ? (
                <p className="text-sm">
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
          <h2 className="text-base font-bold uppercase underline mb-2">
            Education
          </h2>
          {resumeInfo.education.map((edu, i) => (
            <div key={edu.id || i} className="mb-3">
              <p className="font-semibold">
                {edu.degree}
                {edu.major ? ` in ${edu.major}` : ""} | {edu.universityName}
              </p>
              <p className="text-sm italic">
                {edu.startDate} - {edu.endDate}
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
        <section className="mb-5">
          <h2 className="text-base font-bold uppercase underline mb-2">
            Certifications
          </h2>
          <ul className="list-disc list-inside">
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
                      className="underline text-blue-700"
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
        <section className="mb-5">
          <h2 className="text-base font-bold uppercase underline mb-2">
            Projects
          </h2>
          {resumeInfo.projects.map((project, i) => (
            <div key={project.id || i} className="mb-2">
              <p className="font-semibold">{project.name}</p>
              <p className="text-sm">{project.description}</p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-700 text-sm"
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
          <h2 className="text-base font-bold uppercase underline mb-2">
            Achievements
          </h2>
          {resumeInfo.achievements.map((ach, i) => (
            <div key={ach.id || i} className="mb-2">
              <p className="font-semibold">{ach.title}</p>
              {ach.date && <p className="text-sm">{ach.date}</p>}
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
          <h2 className="text-base font-bold uppercase underline mb-2">
            Languages
          </h2>
          <ul className="list-disc list-inside">
            {resumeInfo.languages.map((lang, i) => (
              <li key={lang.id || i}>
                {lang.name}
                {lang.proficiency ? ` (${lang.proficiency})` : ""}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Job Preferences */}
      {resumeInfo.preferences?.jobType && (
        <section className="mb-5">
          <h2 className="text-base font-bold uppercase underline mb-2">
            Job Preferences
          </h2>
          <p>
            <strong>Job Type:</strong> {resumeInfo.preferences.jobType}
          </p>
          {resumeInfo.preferences.location && (
            <p>
              <strong>Preferred Location:</strong>{" "}
              {resumeInfo.preferences.location}
            </p>
          )}
          <p>
            <strong>Willing to Relocate:</strong>{" "}
            {resumeInfo.preferences.relocation ? "Yes" : "No"}
          </p>
        </section>
      )}
    </div>
  );
};

export default Template19;
