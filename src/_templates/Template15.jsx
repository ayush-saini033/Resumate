import useResumeStore from "../store/resumeStore";
const Template15 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume;

  return (
    <div className="max-w-5xl mx-auto p-10 bg-white font-sans text-gray-900 shadow-lg rounded-md">
      <div className="grid grid-cols-5 gap-10">
        {/* Left Sidebar */}
        <div className="col-span-2 pr-6 border-r border-gray-300">
          {/* Contact */}
          <Section title="CONTACT">
            <div className="text-sm space-y-2">
              <InfoLabel label="Phone:" value={resumeInfo.phone} />
              <InfoLabel label="Email:" value={resumeInfo.email} />
              <InfoLabel label="Address:" value={resumeInfo.address} />
            </div>
          </Section>

          {/* Links */}
          <Section title="LINKS">
            <div className="text-sm space-y-3">
              {resumeInfo.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:underline"
                  title={link.url}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </Section>

          {/* Skills */}
          <Section title="SKILLS">
            <div className="space-y-4">
              {resumeInfo.skills.map((skill) => (
                <SkillBar key={skill.id} skill={skill} />
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section title="EDUCATION">
            {resumeInfo.education.map((edu) => (
              <div key={edu.id} className="mb-5">
                <h3 className="text-sm font-semibold">{edu.degree}</h3>
                <p className="text-xs font-medium">{edu.major}</p>
                <p className="text-xs">{edu.universityName}</p>
                <p className="text-xs text-gray-500">
                  {edu.startDate} - {edu.endDate}
                </p>
                <p className="text-xs mt-1 leading-tight text-gray-700">
                  {edu.description}
                </p>
              </div>
            ))}
          </Section>
        </div>

        {/* Right Main Content */}
        <div className="col-span-3">
          {/* Header */}
          <div className="mb-8 border-b border-gray-300 pb-5">
            <h1 className="text-4xl font-extrabold mb-1 tracking-wide">
              {resumeInfo.firstName} {resumeInfo.lastName}
            </h1>
            <h2 className="text-xl text-gray-600 font-light tracking-wide">
              {resumeInfo.jobTitle}
            </h2>
          </div>

          {/* Summary */}
          <Section title="SUMMARY">
            <p className="text-base leading-relaxed">{resumeInfo.summery}</p>
          </Section>

          {/* Experience */}
          <Section title="EXPERIENCE">
            {resumeInfo.experience.map((exp) => (
              <div key={exp.id} className="mb-8">
                <div className="mb-1">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <div className="flex justify-between text-sm text-gray-700 font-medium">
                    <span>{exp.companyName}</span>
                    <span>
                      {exp.startDate} -{" "}
                      {exp.currentlyWorking ? "Present" : exp.endDate}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 italic">
                    {exp.city}, {exp.state}
                  </p>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: exp.workSummery }}
                  className="ml-6 text-gray-700"
                />
              </div>
            ))}
          </Section>

          {/* Projects */}
          <Section title="PROJECTS">
            {resumeInfo.projects.map((project, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-sm leading-relaxed">{project.description}</p>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            ))}
          </Section>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold mb-4 border-b-2 border-indigo-600 inline-block pb-1 tracking-wide">
      {title}
    </h2>
    {children}
  </section>
);

const InfoLabel = ({ label, value }) => (
  <>
    <p className="font-semibold">{label}</p>
    <p>{value}</p>
  </>
);

const SkillBar = ({ skill }) => {
  const rating = Math.min(Math.max(skill.rating || 0, 0), 100);
  return (
    <div className="flex items-center space-x-3">
      <span className="w-28 text-sm font-semibold">{skill.name}</span>
      <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden shadow-inner">
        <div
          className="h-3 bg-indigo-600 rounded-full transition-all duration-700"
          style={{ width: `${rating}%` }}
        ></div>
      </div>
      <span className="w-10 text-right text-sm font-mono text-gray-700">
        {rating}%
      </span>
    </div>
  );
};

export default Template15;
