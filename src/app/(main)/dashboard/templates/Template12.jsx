import useResumeStore from "../../../../store/resumeStore";
import {
  Briefcase,
  GraduationCap,
  Rocket,
  Award,
  Globe,
  Laptop,
  ClipboardList,
  BadgeEuroIcon,
  Phone,
  Mail,
  MapPin,
  Link as LinkIcon,
} from "lucide-react";

const Template12 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume;

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white shadow-lg rounded-2xl text-gray-900 font-sans">
      {/* Header */}
      <header className="mb-10 pb-6 border-b border-gray-300">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900">
              {resumeInfo.firstName} {resumeInfo.lastName}
            </h1>
            <h2 className="text-lg font-medium text-gray-600 mt-1">
              {resumeInfo.jobTitle}
            </h2>
          </div>

          {/* Contact */}
          <div className="text-sm text-gray-700">
            <div className="bg-gray-50 shadow-sm p-4 rounded-xl border border-gray-200 space-y-2">
              <p className="font-semibold text-gray-800 uppercase tracking-wide">
                Contact
              </p>
              <div className="flex items-center gap-2">
                <Phone size={16} /> {resumeInfo.phone}
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} /> {resumeInfo.email}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} /> {resumeInfo.address}
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        {resumeInfo.socialLinks && resumeInfo.socialLinks.length > 0 && (
          <div className="mt-5 pt-4 border-t border-gray-200 flex flex-wrap gap-4">
            {resumeInfo.socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                <LinkIcon size={14} /> {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Professional Summary */}
      <Section title="Professional Summary" icon={<ClipboardList />}>
        <p className="text-gray-700 leading-relaxed">{resumeInfo.summery}</p>
      </Section>

      {/* Technical Skills */}
      <Section title="Technical Skills" icon={<Laptop />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resumeInfo.skills.map((skill, index) => (
            <SkillItem key={skill.id || index} skill={skill} />
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section title="Professional Experience" icon={<Briefcase />}>
        {resumeInfo.experience.map((exp, index) => (
          <ExperienceItem key={exp.id || index} experience={exp} />
        ))}
      </Section>

      {/* Education */}
      <Section title="Education" icon={<GraduationCap />}>
        {resumeInfo.education.map((edu, index) => (
          <EducationItem key={edu.id || index} education={edu} />
        ))}
      </Section>

      {/* Projects */}
      {resumeInfo.projects?.length > 0 && (
        <Section title="Key Projects" icon={<Rocket />}>
          {resumeInfo.projects.map((project, idx) => (
            <ProjectItem key={idx} project={project} />
          ))}
        </Section>
      )}

      {/* Achievements */}
      {resumeInfo.achievements?.length > 0 && (
        <Section title="Achievements & Awards" icon={<Award />}>
          {resumeInfo.achievements.map((achievement, idx) => (
            <AchievementItem key={idx} achievement={achievement} />
          ))}
        </Section>
      )}

      {/* Languages */}
      {resumeInfo.languages?.length > 0 && (
        <Section title="Languages" icon={<Globe />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeInfo.languages.map((language, idx) => (
              <LanguageItem key={idx} language={language} />
            ))}
          </div>
        </Section>
      )}

      {/* Certifications */}
      <Section title="Certifications" icon={<BadgeEuroIcon />}>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-gray-600 italic text-sm">
          Add relevant professional certifications, licenses, or training
          programs here
        </div>
      </Section>
    </div>
  );
};

const Section = ({ title, icon, children }) => (
  <section className="mb-10">
    <div className="flex items-center mb-5">
      <span className="text-blue-600 mr-2">{icon}</span>
      <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide border-b-2 border-blue-600 pb-1 flex-1">
        {title}
      </h2>
    </div>
    <div>{children}</div>
  </section>
);

const SkillItem = ({ skill }) => {
  const getSkillLevel = (rating) => {
    if (!rating) return { level: "Proficient", color: "bg-blue-500" };
    if (rating >= 90) return { level: "Expert", color: "bg-green-600" };
    if (rating >= 75) return { level: "Advanced", color: "bg-blue-600" };
    if (rating >= 50) return { level: "Intermediate", color: "bg-yellow-500" };
    return { level: "Beginner", color: "bg-gray-500" };
  };
  const skillData = getSkillLevel(skill.rating);

  return (
    <div className="p-3 rounded-lg border border-gray-200 bg-gray-50 flex justify-between items-center hover:shadow-md transition">
      <span className="font-medium text-gray-800">{skill.name}</span>
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${skillData.color}`}></div>
        <span className="text-xs text-gray-600">{skillData.level}</span>
      </div>
    </div>
  );
};

const ExperienceItem = ({ experience }) => (
  <div className="mb-6 bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600 shadow-sm">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="text-lg font-bold text-gray-900">{experience.title}</h3>
        <p className="text-gray-700 font-medium">{experience.companyName}</p>
      </div>
      <div className="text-right text-sm text-gray-600">
        <p>
          {experience.city}, {experience.state}
        </p>
        <p>
          {experience.startDate} -{" "}
          {experience.currentlyWorking ? "Present" : experience.endDate}
        </p>
      </div>
    </div>
    <div
      className="text-gray-700 text-sm leading-relaxed"
      dangerouslySetInnerHTML={{ __html: experience.workSummery }}
    />
  </div>
);

const EducationItem = ({ education }) => (
  <div className="mb-4 bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
    <h3 className="font-bold text-gray-900">
      {education.degree} in {education.major}
    </h3>
    <p className="text-gray-700">{education.universityName}</p>
    {education.description && (
      <p className="text-sm text-gray-600 mt-1">{education.description}</p>
    )}
    <p className="text-sm text-gray-500 mt-2">
      {education.startDate} - {education.endDate}
    </p>
  </div>
);

const ProjectItem = ({ project }) => (
  <div className="mb-4 p-4 rounded-lg border border-gray-200 bg-gray-50 hover:shadow-md transition">
    <div className="flex justify-between items-center mb-2">
      <h3 className="font-bold text-gray-900">{project.name}</h3>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          View
        </a>
      )}
    </div>
    <p className="text-sm text-gray-700">{project.description}</p>
  </div>
);

const AchievementItem = ({ achievement }) => (
  <div className="p-3 rounded-lg bg-yellow-50 border-l-4 border-yellow-500 mb-3">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-bold text-gray-900">{achievement.title}</h3>
        {achievement.description && (
          <p className="text-sm text-gray-700 mt-1">
            {achievement.description}
          </p>
        )}
      </div>
      {achievement.date && (
        <span className="text-xs text-gray-500">{achievement.date}</span>
      )}
    </div>
  </div>
);

const LanguageItem = ({ language }) => {
  const getProficiencyLevel = (level) => {
    const levels = {
      native: { label: "Native", color: "bg-green-600" },
      fluent: { label: "Fluent", color: "bg-blue-600" },
      conversational: { label: "Conversational", color: "bg-yellow-500" },
      basic: { label: "Basic", color: "bg-gray-500" },
    };
    return (
      levels[level?.toLowerCase()] || {
        label: language.level || "Proficient",
        color: "bg-blue-500",
      }
    );
  };

  const proficiency = getProficiencyLevel(language.level);

  return (
    <div className="p-3 rounded-lg border border-gray-200 bg-gray-50 flex justify-between items-center">
      <span className="font-medium text-gray-800">{language.name}</span>
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${proficiency.color}`}></div>
        <span className="text-xs text-gray-600">{proficiency.label}</span>
      </div>
    </div>
  );
};

export default Template12;
