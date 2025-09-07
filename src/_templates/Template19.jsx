import useResumeStore from "../store/resumeStore";

const Template19 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume;

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white font-serif text-black">
      {/* Header */}
      <header className="mb-12">
        <div className="text-center border-t-4 border-b-4 border-black py-6 px-4 md:px-10">
          <h1 className="text-5xl font-extrabold mb-2 tracking-wide">
            {resumeInfo.firstName} {resumeInfo.lastName}
          </h1>
          <p className="text-2xl font-semibold tracking-wide">
            {resumeInfo.jobTitle}
          </p>
        </div>
        <div className="mt-6 text-center text-sm font-medium tracking-wide space-y-1">
          <p>
            {resumeInfo.address} &bull; {resumeInfo.phone} &bull;{" "}
            {resumeInfo.email}
          </p>
          <p className="mt-1 space-x-4">
            {resumeInfo.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 transition"
              >
                {link.name}
              </a>
            ))}
          </p>
        </div>
      </header>

      {/* Summary */}
      <Section title="SUMMARY OF QUALIFICATIONS">
        <p className="text-base leading-relaxed max-w-3xl mx-auto text-center">
          {resumeInfo.summery}
        </p>
      </Section>

      {/* Skills with Circular Rating */}
      <Section title="TECHNICAL EXPERTISE">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-10">
          {resumeInfo.skills.map((skill) => (
            <div key={skill.id} className="flex-shrink-0">
              <CircularSkill skill={skill} />
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section title="PROFESSIONAL EXPERIENCE">
        {resumeInfo.experience.map((exp) => (
          <div key={exp.id} className="mb-10 max-w-3xl mx-auto">
            <div className="text-center mb-4">
              <h3 className="text-3xl font-bold tracking-tight">{exp.title}</h3>
              <p className="text-xl font-extrabold text-gray-900 mt-1">
                {exp.companyName}
              </p>
              <p className="text-lg font-semibold text-gray-700 mt-1">
                {exp.city}, {exp.state}
              </p>
              <p className="text-lg italic text-gray-600 mt-1">
                {exp.startDate} -{" "}
                {exp.currentlyWorking ? "Present" : exp.endDate}
              </p>
            </div>
            <div
              className="ml-8 text-base leading-relaxed text-justify text-gray-800"
              dangerouslySetInnerHTML={{ __html: exp.workSummery }}
            />
          </div>
        ))}
      </Section>

      {/* Education */}
      <Section title="EDUCATION">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {resumeInfo.education.map((edu) => (
            <div key={edu.id} className="text-center">
              <h3 className="text-3xl font-bold tracking-tight">
                {edu.degree}
              </h3>
              <p className="text-xl font-extrabold mt-1">{edu.major}</p>
              <p className="text-lg font-semibold mt-1 text-gray-900">
                {edu.universityName}
              </p>
              <p className="text-lg italic mt-1 text-gray-700">
                {edu.startDate} - {edu.endDate}
              </p>
              <p className="text-lg mt-3 text-gray-800">{edu.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section title="NOTABLE PROJECTS">
        <div className="max-w-3xl mx-auto space-y-10">
          {resumeInfo.projects.map((project, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-bold tracking-wide">
                {project.name}
              </h3>
              <p className="text-lg mt-3 text-justify text-gray-800 max-w-xl mx-auto">
                {project.description}
              </p>
              {project.liveUrl && (
                <p className="text-lg font-semibold mt-4">
                  Live Demo:{" "}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 transition"
                  >
                    Live Demo
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-16">
    <h2 className="text-4xl font-bold text-center mb-8 border-b-4 border-black pb-3 tracking-wide uppercase">
      {title}
    </h2>
    {children}
  </section>
);

const CircularSkill = ({ skill }) => {
  const radius = 50; // radius of the circle
  const stroke = 8; // thickness of the circle border
  const normalizedRadius = radius - stroke * 2; // adjusted radius to fit stroke
  const circumference = normalizedRadius * 2 * Math.PI; // circle circumference

  // Calculate how much of the circumference should be filled based on skill rating (0-100)
  const strokeDashoffset = circumference - (skill.rating / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-center">
      <svg height={radius * 2} width={radius * 2}>
        {/* Background circle */}
        <circle
          stroke="#ddd"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Foreground progress circle */}
        <circle
          stroke="black"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{
            strokeDashoffset,
            transition: "stroke-dashoffset 0.7s ease",
          }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Text percentage inside circle */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="14" // smaller font size
          fontWeight="bold"
          fill="black"
        >
          {skill.rating}%
        </text>
      </svg>
      <p className="mt-2 font-semibold text-md">{skill.name}</p>{" "}
      {/* smaller font size */}
    </div>
  );
};

export default Template19;
