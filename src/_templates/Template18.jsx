import useResumeStore from "../store/resumeStore";

const Template18 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white font-mono text-black text-sm select-none">
      {/* Header */}
      <header className="mb-10 text-center border-b-4 border-black pb-6">
        <div className="border-4 border-black px-6 py-4 rounded-xl">
          <h1 className="text-3xl font-bold tracking-widest uppercase">
            {resumeInfo.firstName} {resumeInfo.lastName}
          </h1>
          <p className="text-base font-semibold tracking-wide mt-1 uppercase">
            {resumeInfo.jobTitle}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-8 text-xs">
          <ContactItem label="PHONE" value={resumeInfo.phone} />
          <ContactItem label="EMAIL" value={resumeInfo.email} />
          <ContactItem label="ADDRESS" value={resumeInfo.address} />
        </div>
        <div className="mt-6 text-xs space-x-6">
          {resumeInfo.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-semibold"
              title={link.url}
            >
              {link.name}
            </a>
          ))}
        </div>
      </header>

      {/* Professional Summary */}
      <Section title="PROFESSIONAL SUMMARY">
        <p className="leading-relaxed text-justify">{resumeInfo.summery}</p>
      </Section>

      {/* Technical Competencies with Circular Skill Ratings */}
      <Section title="TECHNICAL COMPETENCIES">
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {resumeInfo.skills.map((skill) => (
            <CircularSkill key={skill.id} skill={skill} />
          ))}
        </div>
      </Section>

      {/* Professional Experience */}
      <Section title="PROFESSIONAL EXPERIENCE">
        <div className="space-y-8">
          {resumeInfo.experience.map((exp) => (
            <article key={exp.id} className="border-l-4 border-black pl-6">
              <header className="mb-2 flex justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-sm font-semibold">{exp.companyName}</p>
                  <p className="text-sm">
                    {exp.city}, {exp.state}
                  </p>
                </div>
                <time className="text-sm italic whitespace-nowrap">
                  {exp.startDate} -{" "}
                  {exp.currentlyWorking ? "Present" : exp.endDate}
                </time>
              </header>
              <section
                className="leading-relaxed ml-4"
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
                {edu.startDate} - {edu.endDate}
              </time>
            </article>
          ))}
        </div>
      </Section>

      {/* Key Projects */}
      <Section title="KEY PROJECTS">
        <div className="space-y-6">
          {resumeInfo.projects.map((project, idx) => (
            <article key={idx} className="border border-black rounded p-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="mt-2">{project.description}</p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold mt-3 inline-block hover:underline"
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
  <section className="mb-12">
    <h2 className="text-2xl font-bold border-b-4 border-black pb-2 mb-6 tracking-wide uppercase">
      {title}
    </h2>
    {children}
  </section>
);

const ContactItem = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <p className="font-bold tracking-wide">{label}</p>
    <p>{value}</p>
  </div>
);

// Circular Skill Visualization Component
const CircularSkill = ({ skill }) => {
  const radius = 40;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (skill.rating / 100) * circumference;

  return (
    <div className="flex flex-col items-center w-24">
      <svg height={radius * 2} width={radius * 2} className="transform">
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#000"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
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
      <div className="mt-2 text-center font-semibold uppercase text-xs">
        {skill.name}
      </div>
    </div>
  );
};

export default Template18;
