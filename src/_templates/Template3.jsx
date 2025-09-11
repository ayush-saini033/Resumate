import useResumeStore from "../store/resumeStore";
import DOMPurify from "dompurify";

const Template3 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume || {};

  const safeHTML = (html) => ({
    __html: DOMPurify.sanitize(html || ""),
  });

  return (
    <div className="max-w-[794px] mx-auto px-6 py-4 bg-white text-gray-900 font-serif text-sm leading-snug">
      {/* Header */}
      <header className="text-center border-b pb-3 mb-3">
        <h1 className="text-xl font-bold">
          {resumeInfo.firstName} {resumeInfo.lastName}
        </h1>
        <p className="italic text-sm">{resumeInfo.jobTitle}</p>
        <p className="text-xs mt-1">
          {resumeInfo.address}{" "}
          {resumeInfo.phone && (
            <>
              | <a href={`tel:${resumeInfo.phone}`}>{resumeInfo.phone}</a>
            </>
          )}
          {resumeInfo.email && (
            <>
              {" "}
              | <a href={`mailto:${resumeInfo.email}`}>{resumeInfo.email}</a>
            </>
          )}
        </p>
        {resumeInfo.socialLinks?.length > 0 && (
          <p className="text-xs mt-1">
            {resumeInfo.socialLinks.map((link, i) => (
              <span key={link.id || i}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.name}
                </a>
                {i < resumeInfo.socialLinks.length - 1 && " • "}
              </span>
            ))}
          </p>
        )}
      </header>

      {/* Summary */}
      {resumeInfo.summary && (
        <section className="mb-3">
          <h2 className="font-semibold text-base border-b pb-1 mb-1">
            Professional Summary
          </h2>
          <div
            dangerouslySetInnerHTML={safeHTML(resumeInfo.summary)}
            className="ml-2 prose prose-gray"
          />
        </section>
      )}

      {/* Skills */}
      {resumeInfo.skills?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-base border-b pb-1 mb-1">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 gap-1 ml-2">
            {resumeInfo.skills.map((skill, idx) => (
              <div key={skill.id || idx}>
                {skill.name} {skill.rating ? `(${skill.rating}%)` : ""}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {resumeInfo.experience?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-base border-b pb-1 mb-1">
            Experience
          </h2>
          {resumeInfo.experience.map((exp) => (
            <div key={exp.id || exp.companyName} className="ml-2 mb-2">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">{exp.companyName}</p>
                  <p className="italic">{exp.title}</p>
                </div>
                <div className="text-right text-xs text-gray-600">
                  <p>{[exp.city, exp.state].filter(Boolean).join(", ")}</p>
                  <p>
                    {exp.startDate} –{" "}
                    {exp.currentlyWorking ? "Present" : exp.endDate}
                  </p>
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={safeHTML(exp.workSummary)}
                className="ml-3 mt-1 prose prose-gray"
              />
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {resumeInfo.education?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-base border-b pb-1 mb-1">
            Education
          </h2>
          {resumeInfo.education.map((edu) => (
            <div key={edu.id || edu.universityName} className="ml-2 mb-2">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">{edu.universityName}</p>
                  <p className="italic">
                    {edu.degree}
                    {edu.major && ` in ${edu.major}`}
                  </p>
                </div>
                <p className="text-xs text-gray-600">
                  {edu.startDate} – {edu.endDate}
                </p>
              </div>
              <div
                dangerouslySetInnerHTML={safeHTML(edu.description)}
                className="ml-3 mt-1 prose prose-gray"
              />
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {resumeInfo.certifications?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-base border-b pb-1 mb-1">
            Certifications
          </h2>
          <div className="grid grid-cols-2 gap-2 ml-2">
            {resumeInfo.certifications.map((cert) => (
              <div key={cert.id || cert.name}>
                <p className="font-medium">{cert.name}</p>
                <p className="text-xs text-gray-600">
                  {cert.authority} | {cert.issueDate}
                  {cert.expiryDate && ` – ${cert.expiryDate}`}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    className="text-xs text-blue-600 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {resumeInfo.projects?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-base border-b pb-1 mb-1">
            Projects
          </h2>
          {resumeInfo.projects.map((proj, idx) => (
            <div key={proj.id || idx} className="ml-2 mb-2">
              <p className="font-medium">{proj.name}</p>
              <p className="italic text-xs">{proj.description}</p>
              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  className="text-xs text-blue-600 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Achievements */}
      {resumeInfo.achievements?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-base border-b pb-1 mb-1">
            Achievements
          </h2>
          {resumeInfo.achievements.map((ach) => (
            <div key={ach.id || ach.title} className="ml-2 mb-2">
              <div className="flex justify-between">
                <p className="font-medium">{ach.title}</p>
                <p className="text-xs text-gray-600">{ach.date}</p>
              </div>
              <div
                className="prose prose-gray italic text-sm ml-3"
                dangerouslySetInnerHTML={safeHTML(ach.description)}
              />
            </div>
          ))}
        </section>
      )}

      {/* Languages */}
      {resumeInfo.languages?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-base border-b pb-1 mb-1">
            Languages
          </h2>
          <div className="grid grid-cols-2 ml-2 gap-y-1 text-sm">
            {resumeInfo.languages.map((lang, i) => (
              <div key={lang.id || i}>
                {lang.name} {lang.proficiency && `(${lang.proficiency})`}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Preferences */}
      {resumeInfo.preferences?.jobType && (
        <section className="mb-2">
          <h2 className="font-semibold text-base border-b pb-1 mb-1">
            Job Preferences
          </h2>
          <div className="ml-2 text-sm space-y-1">
            <p>
              <strong>Job Type:</strong> {resumeInfo.preferences.jobType}
            </p>
            <p>
              <strong>Location:</strong> {resumeInfo.preferences.location}
            </p>
            <p>
              <strong>Relocation:</strong>{" "}
              {resumeInfo.preferences.relocation ? "Yes" : "No"}
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Template3;
