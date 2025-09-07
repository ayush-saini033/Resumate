export const fakeData1 = {
  firstName: "Riya",
  lastName: "Sharma",
  jobTitle: "Software Engineer",
  address: "Bangalore, India",
  phone: "+91 9123456789",
  email: "riya.sharma@example.com",
  summary:
    "Software Engineer with 2+ years of experience in developing scalable web applications and APIs. Proficient in full-stack development using React, Node.js, and cloud technologies. Passionate about building products that improve user experience and efficiency.",

  experience: [
    {
      id: 1,
      title: "Software Engineer",
      companyName: "Flipkart",
      city: "Bangalore",
      state: "Karnataka",
      startDate: "2022-04",
      endDate: "",
      currentlyWorking: true,
      workSummary:
        "Developing and maintaining e-commerce features with React and Node.js. Optimized API performance, reducing response time by 25%. Collaborated with product teams to deliver scalable solutions.",
    },
    {
      id: 2,
      title: "Backend Developer Intern",
      companyName: "Paytm",
      city: "Noida",
      state: "Uttar Pradesh",
      startDate: "2021-01",
      endDate: "2021-06",
      currentlyWorking: false,
      workSummary:
        "Built microservices for payment processing. Integrated secure authentication and developed internal dashboards for transaction monitoring.",
    },
  ],

  education: [
    {
      id: 1,
      universityName: "IIT Delhi",
      startDate: "2018-07",
      endDate: "2022-05",
      degree: "B.Tech",
      major: "Computer Science",
      description:
        "Graduated with CGPA 8.9/10. Participated in coding clubs and led multiple hackathon teams.",
    },
    {
      id: 2,
      universityName: "CBSE Board",
      startDate: "2016-04",
      endDate: "2018-03",
      degree: "Class 12th",
      major: "Science (PCM)",
      description:
        "Scored 94% with strong focus on Mathematics and Computer Science.",
    },
  ],

  certifications: [
    {
      id: 1,
      name: "Google Cloud Associate Engineer",
      authority: "Google",
      issueDate: "2023-02",
      expiryDate: "2026-02",
      credentialUrl: "https://cloud.google.com/certification",
    },
    {
      id: 2,
      name: "React Developer Certification",
      authority: "Meta",
      issueDate: "2022-09",
      expiryDate: "",
      credentialUrl: "https://coursera.org/meta-react",
    },
  ],

  skills: [
    { id: 1, name: "JavaScript", rating: 90 },
    { id: 2, name: "React.js", rating: 85 },
    { id: 3, name: "Node.js", rating: 80 },
    { id: 4, name: "TypeScript", rating: 75 },
    { id: 5, name: "PostgreSQL", rating: 70 },
    { id: 6, name: "AWS", rating: 65 },
  ],

  socialLinks: [
    { id: 1, name: "GitHub", url: "https://github.com/riyasharma" },
    { id: 2, name: "LinkedIn", url: "https://linkedin.com/in/riya-sharma" },
    { id: 3, name: "Portfolio", url: "https://riya.dev" },
  ],

  projects: [
    {
      id: 1,
      name: "TaskFlow",
      description:
        "Project management app with real-time collaboration, Kanban boards, and team chat features.",
      liveUrl: "https://taskflow.vercel.app",
    },
    {
      id: 2,
      name: "EduNote",
      description:
        "AI-powered tool that generates study notes from PDF textbooks, allowing users to save and download notes.",
      liveUrl: "https://edunote.vercel.app",
    },
  ],

  achievements: [
    {
      id: 1,
      title: "Winner – Smart India Hackathon",
      description:
        "Led a team of 5 to build a smart healthcare solution, winning the national hackathon.",
      date: "2021-08",
    },
    {
      id: 2,
      title: "Top Contributor – GSSoC",
      description:
        "Ranked among top contributors in GirlScript Summer of Code for impactful open-source contributions.",
      date: "2020-07",
    },
  ],

  languages: [
    { id: 1, name: "English", proficiency: "Fluent" },
    { id: 2, name: "Hindi", proficiency: "Native" },
    { id: 3, name: "German", proficiency: "Intermediate" },
  ],

  preferences: {
    jobType: "Full-Time",
    location: "Bangalore, India",
    relocation: true,
  },
};
