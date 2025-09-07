import useResumeStore from "../store/resumeStore";

const Template17 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white font-serif text-black">
      {/* Header */}
      <header className="mb-10 border-b-4 border-black pb-6 text-center">
        <h1 className="text-4xl font-bold mb-1 tracking-wide">
          {resumeInfo.firstName} {resumeInfo.lastName}
        </h1>
        <p className="text-xl font-semibold">{resumeInfo.jobTitle}</p>
        <div className="grid grid-cols-3 gap-6 mt-6 text-sm">
          <ContactItem label="Phone" value={resumeInfo.phone} />
          <ContactItem label="Email" value={resumeInfo.email} />
          <ContactItem label="Location" value={resumeInfo.address} />
        </div>
        <div className="mt-4 text-sm space-x-5">
          {resumeInfo.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
              title={link.url}
            >
              {link.name}
            </a>
          ))}
        </div>
      </header>

      {/* Summary */}
      <Section title="PROFESSIONAL SUMMARY">
        <p className="text-base leading-relaxed text-justify">
          {resumeInfo.summery}
        </p>
      </Section>

      {/* Skills with Graphical Rating */}
      <Section title="TECHNICAL SKILLS">
        <div className="space-y-4 max-w-xl mx-auto">
          {resumeInfo.skills.map((skill) => (
            <SkillBar key={skill.id} skill={skill} />
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section title="PROFESSIONAL EXPERIENCE">
        <div className="space-y-6">
          {resumeInfo.experience.map((exp) => (
            <article key={exp.id} className="border-l-4 border-black pl-6">
              <header className="mb-2 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-sm font-semibold">{exp.companyName}</p>
                  <p className="text-sm text-gray-800">
                    {exp.city}, {exp.state}
                  </p>
                </div>
                <time className="text-sm italic">
                  {exp.startDate} –{" "}
                  {exp.currentlyWorking ? "Present" : exp.endDate}
                </time>
              </header>
              <section
                className="ml-4 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: exp.workSummery }}
              />
            </article>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section title="EDUCATION">
        <div className="space-y-6">
          {resumeInfo.education.map((edu) => (
            <article
              key={edu.id}
              className="flex justify-between items-start border-b border-black pb-4 last:border-0"
            >
              <div>
                <h3 className="text-lg font-semibold">
                  {edu.degree} in {edu.major}
                </h3>
                <p className="text-sm font-semibold">{edu.universityName}</p>
                <p className="text-sm mt-1">{edu.description}</p>
              </div>
              <time className="text-sm italic whitespace-nowrap ml-4">
                {edu.startDate} – {edu.endDate}
              </time>
            </article>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section title="KEY PROJECTS">
        <div className="space-y-6">
          {resumeInfo.projects.map((project, index) => (
            <article key={index} className="border border-black rounded p-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="mt-1">{project.description}</p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold mt-2 inline-block hover:underline"
                >
                  Live URL
                </a>
              )}
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold border-b-4 border-black pb-2 mb-6 tracking-wide">
      {title}
    </h2>
    {children}
  </section>
);

const ContactItem = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <p className="font-semibold">{label}</p>
    <p>{value}</p>
  </div>
);

const SkillBar = ({ skill }) => {
  const radius = 30; // radius of the circle
  const stroke = 6; // thickness of the circle stroke
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (skill.rating / 100) * circumference;

  return (
    <div className="inline-block m-4 text-center">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5e7eb" // light gray background circle (tail)
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#000000" // black progress stroke
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{
            strokeDashoffset,
            transition: "stroke-dashoffset 0.5s ease",
          }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
          fontSize="14px"
          fill="#000"
          fontWeight="bold"
        >
          {skill.rating}%
        </text>
      </svg>
      <div className="mt-2 font-semibold text-sm">{skill.name}</div>
    </div>
  );
};

export default Template17;
