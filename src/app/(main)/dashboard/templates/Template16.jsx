import useResumeStore from "../../../../store/resumeStore";

const Template16 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume;

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white font-serif text-gray-900 shadow-lg rounded-lg">
      {/* Header */}
      <header className="text-center mb-10 border-4 border-double border-gray-700 rounded-lg p-6 shadow-md">
        <h1 className="text-4xl font-extrabold mb-2 tracking-wider">
          {resumeInfo.firstName} {resumeInfo.lastName}
        </h1>
        <p className="text-xl font-semibold mb-4 tracking-wide">
          {resumeInfo.jobTitle}
        </p>
        <address className="not-italic text-sm space-y-1">
          <p>{resumeInfo.address}</p>
          <p>
            {resumeInfo.phone} • {resumeInfo.email}
          </p>
          <p className="mt-2 space-x-3">
            {resumeInfo.socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-700 hover:underline font-semibold text-xs"
                title={link.url}
              >
                {link.name}
              </a>
            ))}
          </p>
        </address>
      </header>

      {/* Professional Summary */}
      <Section title="PROFESSIONAL SUMMARY">
        <p className="text-base leading-relaxed text-justify">
          {resumeInfo.summery}
        </p>
      </Section>

      {/* Core Competencies with rating bars */}
      <Section title="CORE COMPETENCIES">
        <div className="space-y-4">
          {resumeInfo.skills.map((skill) => (
            <SkillRating key={skill.id} skill={skill} />
          ))}
        </div>
      </Section>

      {/* Professional Experience */}
      <Section title="PROFESSIONAL EXPERIENCE">
        {resumeInfo.experience.map((exp) => (
          <article
            key={exp.id}
            className="mb-8 border-l-4 border-indigo-700 pl-6"
          >
            <header className="mb-1">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="flex justify-between text-gray-700 text-sm font-medium mb-1">
                <span>
                  {exp.companyName}, {exp.city}, {exp.state}
                </span>
                <span className="italic">
                  {exp.startDate} -{" "}
                  {exp.currentlyWorking ? "Present" : exp.endDate}
                </span>
              </p>
            </header>
            <section
              className="text-gray-800 leading-relaxed ml-4"
              dangerouslySetInnerHTML={{ __html: exp.workSummery }}
            />
          </article>
        ))}
      </Section>

      {/* Education */}
      <Section title="EDUCATION">
        {resumeInfo.education.map((edu) => (
          <div key={edu.id} className="mb-6 text-center">
            <h3 className="text-lg font-semibold">
              {edu.degree} in {edu.major}
            </h3>
            <p className="text-sm font-semibold">{edu.universityName}</p>
            <p className="text-sm italic">
              {edu.startDate} - {edu.endDate}
            </p>
            <p className="text-sm mt-1">{edu.description}</p>
          </div>
        ))}
      </Section>

      {/* Projects */}
      <Section title="KEY PROJECTS">
        {resumeInfo.projects.map((project, index) => (
          <div key={index} className="mb-6 text-center">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="text-sm mt-1 mb-1">{project.description}</p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-700 hover:underline font-semibold text-sm"
              >
                Live URL
              </a>
            )}
          </div>
        ))}
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold mb-6 border-b-4 border-indigo-700 pb-2 tracking-wide">
      {title}
    </h2>
    {children}
  </section>
);

const SkillRating = ({ skill }) => {
  const rating = Math.min(Math.max(skill.rating || 0, 0), 100);
  return (
    <div className="flex items-center space-x-4">
      <span className="w-36 font-semibold text-indigo-800">{skill.name}</span>
      <div className="flex-1 bg-gray-200 rounded-full h-5 overflow-hidden shadow-inner">
        <div
          className="h-5 bg-indigo-600 rounded-full transition-all duration-700"
          style={{ width: `${rating}%` }}
        />
      </div>
      <span className="w-12 font-mono text-indigo-700 font-semibold text-right">
        {rating}%
      </span>
    </div>
  );
};

export default Template16;
