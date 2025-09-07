import useResumeStore from "../store/resumeStore";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  User,
  Star,
  Globe,
  Building,
  CheckCircle,
} from "lucide-react";

const Template9 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume;

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white font-sans text-black shadow-lg border border-gray-200 rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - Sidebar */}
        <aside className="lg:col-span-4 bg-gradient-to-b from-slate-50 to-blue-50 p-6 rounded-lg border border-gray-200 shadow-sm">
          {/* Contact Information */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <User className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                Contact Info
              </h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 bg-white/70 rounded-md border border-gray-200">
                <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">
                  {resumeInfo.phone}
                </span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-white/70 rounded-md border border-gray-200">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-gray-700 break-all">
                  {resumeInfo.email}
                </span>
              </div>
              <div className="flex items-start gap-3 p-2 bg-white/70 rounded-md border border-gray-200">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 leading-tight">
                  {resumeInfo.address}
                </span>
              </div>
            </div>
          </section>

          {/* Professional Links */}
          {resumeInfo.socialLinks && resumeInfo.socialLinks.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-green-600 rounded-lg">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                  Links
                </h2>
              </div>
              <div className="space-y-2">
                {resumeInfo.socialLinks.map((link, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2 bg-white/70 rounded-md border border-gray-200"
                  >
                    <ExternalLink className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-600 font-medium hover:text-green-800 transition-colors truncate"
                      title={link.url}
                    >
                      {link.name || link.url}
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technical Skills */}
          {resumeInfo.skills && resumeInfo.skills.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-purple-600 rounded-lg">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                  Technical Skills
                </h2>
              </div>
              <div className="space-y-4">
                {resumeInfo.skills.map((skill) => (
                  <SkillProgressBar key={skill.id} skill={skill} />
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {resumeInfo.education && resumeInfo.education.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-indigo-600 rounded-lg">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                  Education
                </h2>
              </div>
              <div className="space-y-4">
                {resumeInfo.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-4 bg-white/70 rounded-lg border border-gray-200"
                  >
                    <h3 className="font-bold text-base text-gray-900 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 mb-1">
                      {edu.major}
                    </p>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {edu.universityName}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    {edu.description && (
                      <p className="text-xs text-gray-700 leading-relaxed border-l-2 border-indigo-200 pl-2">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </aside>

        {/* Right Column - Main Content */}
        <main className="lg:col-span-8">
          {/* Header */}
          <header className="mb-8 text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-2 text-gray-900 tracking-wide">
              {resumeInfo.firstName} {resumeInfo.lastName}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mb-4 mx-auto lg:mx-0 rounded-full"></div>
            <h2 className="text-xl font-semibold text-blue-700 uppercase tracking-widest">
              {resumeInfo.jobTitle}
            </h2>
          </header>

          {/* Professional Summary */}
          {resumeInfo.summery && (
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                  Professional Summary
                </h2>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg border-l-4 border-blue-600 shadow-sm">
                <p className="text-gray-700 leading-relaxed text-justify">
                  {resumeInfo.summery}
                </p>
              </div>
            </section>
          )}

          {/* Professional Experience */}
          {resumeInfo.experience && resumeInfo.experience.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-600 rounded-lg">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                  Professional Experience
                </h2>
              </div>
              <div className="space-y-6">
                {resumeInfo.experience.map((exp) => (
                  <article
                    key={exp.id}
                    className="relative pl-6 pb-6 border-l-2 border-purple-200 last:border-l-0 last:pb-0"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full border-2 border-white shadow-sm"></div>

                    <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Building className="w-4 h-4 text-purple-600" />
                            <span className="font-semibold text-purple-600">
                              {exp.companyName}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="w-3 h-3" />
                            <span>
                              {exp.city}, {exp.state}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-md mt-3 lg:mt-0 lg:ml-4 border border-gray-200">
                          <Calendar className="w-3 h-3" />
                          <time>
                            {exp.startDate} -{" "}
                            {exp.currentlyWorking ? "Present" : exp.endDate}
                          </time>
                        </div>
                      </div>
                      <div
                        className="text-gray-700 leading-relaxed pl-4 border-l-2 border-purple-100"
                        dangerouslySetInnerHTML={{ __html: exp.workSummery }}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Key Projects */}
          {resumeInfo.projects && resumeInfo.projects.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-600 rounded-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                  Key Projects
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resumeInfo.projects.map((project, index) => (
                  <article
                    key={index}
                    className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-5 border border-orange-200 hover:shadow-md transition-shadow duration-200"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {project.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm mb-4">
                      {project.description}
                    </p>
                    {project.liveUrl && (
                      <div className="flex items-center gap-2 pt-3 border-t border-orange-200">
                        <ExternalLink className="w-4 h-4 text-orange-600" />
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:text-orange-800 font-semibold text-sm transition-colors"
                        >
                          View Live Demo
                        </a>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

const SkillProgressBar = ({ skill }) => {
  return (
    <div className="p-3 bg-white/70 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-purple-600" />
          <span className="font-semibold text-gray-800 text-sm">
            {skill.name}
          </span>
        </div>
        <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">
          {skill.rating}%
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${skill.rating}%` }}
        />
      </div>
    </div>
  );
};

export default Template9;
