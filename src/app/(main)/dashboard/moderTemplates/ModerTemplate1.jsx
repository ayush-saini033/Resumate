import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Calendar,
  Award,
  ExternalLink,
  User,
  Briefcase,
  GraduationCap,
  Code,
  Trophy,
  MessageCircle,
  Target,
} from "lucide-react";
import useResumeStore from "../../../../store/resumeStore";

const SkillCard = ({ skill }) => {
  const percentage = skill.rating;

  return (
    <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-gray-800 text-sm">
          {skill.name}
        </span>
        <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, title, accent = "blue" }) => {
  const accentClasses = {
    blue: "text-blue-600 border-blue-200 bg-blue-50",
    green: "text-green-600 border-green-200 bg-green-50",
    purple: "text-purple-600 border-purple-200 bg-purple-50",
    orange: "text-orange-600 border-orange-200 bg-orange-50",
  };

  return (
    <div className="flex items-center gap-3 mb-6">
      <div className={`p-2 rounded-lg ${accentClasses[accent]}`}>
        <Icon size={20} />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 flex-1">{title}</h2>
      <div className="h-px bg-gradient-to-r from-gray-300 to-transparent flex-1 ml-4" />
    </div>
  );
};

const Template1 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume;

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-2xl">
      {/* Header */}
      <header className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-10 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-y-48 translate-x-48" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full translate-y-32 -translate-x-32" />

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {resumeInfo.firstName} {resumeInfo.lastName}
              </h1>
              <p className="text-xl lg:text-2xl text-blue-200 mb-4 font-light">
                {resumeInfo.jobTitle}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-blue-100">
                {resumeInfo.address && (
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{resumeInfo.address}</span>
                  </div>
                )}
                {resumeInfo.phone && (
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>{resumeInfo.phone}</span>
                  </div>
                )}
                {resumeInfo.email && (
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>{resumeInfo.email}</span>
                  </div>
                )}
              </div>

              {resumeInfo.socialLinks?.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-4">
                  {resumeInfo.socialLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                    >
                      <Globe size={14} />
                      <span className="text-sm">{link.name}</span>
                      <ExternalLink
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="p-10 space-y-12">
        {/* Professional Summary */}
        {resumeInfo.summary && (
          <section>
            <SectionHeader icon={User} title="Professional Summary" />
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: resumeInfo.summary }}
            />
          </section>
        )}

        {/* Technical Skills */}
        {resumeInfo.skills?.length > 0 && (
          <section>
            <SectionHeader
              icon={Code}
              title="Technical Skills"
              accent="purple"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resumeInfo.skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </section>
        )}

        {/* Professional Experience */}
        {resumeInfo.experience?.length > 0 && (
          <section>
            <SectionHeader
              icon={Briefcase}
              title="Professional Experience"
              accent="green"
            />
            <div className="space-y-8">
              {resumeInfo.experience.map((exp) => (
                <div key={exp.id} className="group relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-green-600 rounded-full" />
                  <div className="pl-8 pb-8 border-b border-gray-100 last:border-b-0">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {exp.companyName}
                        </h3>
                        <p className="text-lg font-semibold text-green-600 mb-2">
                          {exp.title}
                        </p>
                      </div>
                      <div className="flex flex-col items-end text-sm text-gray-600">
                        <div className="flex items-center gap-1 mb-1">
                          <MapPin size={14} />
                          <span>
                            {exp.city}, {exp.state}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>
                            {exp.startDate} -{" "}
                            {exp.currentlyWorking ? "Present" : exp.endDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="prose prose-gray max-w-none text-gray-700"
                      dangerouslySetInnerHTML={{ __html: exp.workSummary }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {resumeInfo.education?.length > 0 && (
          <section>
            <SectionHeader
              icon={GraduationCap}
              title="Education"
              accent="orange"
            />
            <div className="grid gap-6">
              {resumeInfo.education.map((edu) => (
                <div
                  key={edu.id}
                  className="group bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-100 hover:border-orange-200 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {edu.universityName}
                      </h3>
                      <p className="text-lg font-semibold text-orange-600">
                        {edu.degree} in {edu.major}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                      <Calendar size={14} />
                      <span>
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                  </div>
                  {edu.description && (
                    <div
                      className="prose prose-gray max-w-none text-gray-700"
                      dangerouslySetInnerHTML={{ __html: edu.description }}
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {resumeInfo.certifications?.length > 0 && (
          <section>
            <SectionHeader icon={Award} title="Certifications" accent="blue" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {resumeInfo.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="group bg-blue-50 p-6 rounded-xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-2">
                        {cert.authority}
                      </p>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Calendar size={14} />
                        <span>
                          {cert.issueDate}
                          {cert.expiryDate && ` - ${cert.expiryDate}`}
                        </span>
                      </div>
                    </div>
                    <Award className="text-blue-400 flex-shrink-0" size={24} />
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline transition-colors"
                    >
                      <span>View Certificate</span>
                      <ExternalLink
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key Projects */}
        {resumeInfo.projects?.length > 0 && (
          <section>
            <SectionHeader icon={Code} title="Key Projects" accent="purple" />
            <div className="grid gap-6">
              {resumeInfo.projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-purple-50 p-6 rounded-xl border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {project.name}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <Code
                      className="text-purple-400 flex-shrink-0 ml-4"
                      size={24}
                    />
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm group-hover:underline transition-colors"
                    >
                      <span>View Project</span>
                      <ExternalLink
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Achievements */}
        {resumeInfo.achievements?.length > 0 && (
          <section>
            <SectionHeader icon={Trophy} title="Achievements" accent="orange" />
            <div className="space-y-6">
              {resumeInfo.achievements.map((ach) => (
                <div
                  key={ach.id}
                  className="group bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-100 hover:border-orange-200 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <Trophy
                      className="text-orange-500 flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">
                          {ach.title}
                        </h3>
                        <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                          {ach.date}
                        </span>
                      </div>
                      <div
                        className="prose prose-gray max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: ach.description }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Languages */}
          {resumeInfo.languages?.length > 0 && (
            <section>
              <SectionHeader
                icon={MessageCircle}
                title="Languages"
                accent="green"
              />
              <div className="space-y-3">
                {resumeInfo.languages.map((lang, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-100"
                  >
                    <span className="font-semibold text-gray-800">
                      {lang.name}
                    </span>
                    <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Preferences */}
          {resumeInfo.preferences && (
            <section>
              <SectionHeader
                icon={Target}
                title="Job Preferences"
                accent="blue"
              />
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <span className="font-medium text-gray-700">Job Type</span>
                  <span className="text-blue-600 font-semibold">
                    {resumeInfo.preferences.jobType}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <span className="font-medium text-gray-700">
                    Preferred Location
                  </span>
                  <span className="text-blue-600 font-semibold">
                    {resumeInfo.preferences.location}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <span className="font-medium text-gray-700">
                    Willing to Relocate
                  </span>
                  <span
                    className={`font-semibold ${
                      resumeInfo.preferences.relocation
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {resumeInfo.preferences.relocation ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template1;
