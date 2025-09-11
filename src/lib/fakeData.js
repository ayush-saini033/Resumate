export const fakeData1 = {
  firstName: "Ayush",
  lastName: "Saini",
  jobTitle: "Senior Software Engineer / Technical Lead",
  address: "Hyderabad, Telangana, India",
  phone: "+91 8824415430",
  email: "ayush.jslab@gmail.com",

  summary: `<p>Senior Software Engineer with 8+ years of experience architecting, developing, and leading enterprise-grade web applications and cloud solutions. Skilled in microservices, distributed systems, DevOps, and team leadership. Adept at driving innovation, mentoring developers, and delivering scalable software products on time.</p>`,

  experience: [
    {
      id: 1,
      title: "Senior Software Engineer / Technical Lead",
      companyName: "Infosys Ltd",
      city: "Hyderabad",
      state: "Telangana",
      startDate: "2019-06",
      endDate: "",
      currentlyWorking: true,
      workSummary: `<ul>
        <li>Led a team of 8 engineers developing microservices-based SaaS product deployed on AWS using Docker and Kubernetes.</li>
        <li>Architected and implemented RESTful APIs with Node.js and Spring Boot, improving system scalability by 40%.</li>
        <li>Integrated CI/CD pipelines using Jenkins and GitLab, reducing deployment time by 50%.</li>
        <li>Mentored junior developers and conducted knowledge sharing sessions on cloud-native architectures.</li>
        <li>Collaborated with product managers and UX teams to enhance feature delivery and improve user satisfaction scores.</li>
      </ul>`,
    },
    {
      id: 2,
      title: "Software Engineer",
      companyName: "Tata Consultancy Services (TCS)",
      city: "Bangalore",
      state: "Karnataka",
      startDate: "2015-01",
      endDate: "2019-05",
      currentlyWorking: false,
      workSummary: `<ul>
        <li>Developed and maintained high-availability backend systems using Java and Spring MVC.</li>
        <li>Implemented caching strategies with Redis, improving API response times by 30%.</li>
        <li>Collaborated in Agile teams to deliver features for banking and financial clients.</li>
        <li>Automated testing processes with Selenium and JUnit, improving software quality.</li>
      </ul>`,
    },
    {
      id: 3,
      title: "Junior Software Developer",
      companyName: "TechMahindra",
      city: "Pune",
      state: "Maharashtra",
      startDate: "2013-07",
      endDate: "2014-12",
      currentlyWorking: false,
      workSummary: `<ul>
        <li>Contributed to frontend development using AngularJS and Bootstrap.</li>
        <li>Assisted in database schema design and query optimization in MySQL.</li>
        <li>Participated in code reviews and sprint planning.</li>
      </ul>`,
    },
  ],

  education: [
    {
      id: 1,
      universityName: "National Institute of Technology, Warangal",
      startDate: "2009-08",
      endDate: "2013-05",
      degree: "Bachelor of Technology (B.Tech)",
      major: "Computer Science and Engineering",
      description: `<p>Graduated with a CGPA of 8.2/10. Actively participated in coding clubs and tech symposiums.</p>`,
    },
  ],

  certifications: [
    {
      id: 1,
      name: "AWS Certified Solutions Architect – Associate",
      authority: "Amazon Web Services",
      issueDate: "2021-11",
      expiryDate: "2024-11",
      credentialUrl:
        "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    },
    {
      id: 2,
      name: "Certified Kubernetes Application Developer (CKAD)",
      authority: "Cloud Native Computing Foundation",
      issueDate: "2022-05",
      expiryDate: "2025-05",
      credentialUrl: "https://www.cncf.io/certification/ckad/",
    },
    {
      id: 3,
      name: "Oracle Certified Professional, Java SE 8 Programmer",
      authority: "Oracle",
      issueDate: "2017-08",
      expiryDate: "",
      credentialUrl:
        "https://education.oracle.com/java-se-8-programmer/pexam_1Z0-808",
    },
  ],

  skills: [
    { id: 1, name: "Java", rating: 95 },
    { id: 2, name: "Node.js", rating: 85 },
    { id: 3, name: "Spring Boot", rating: 90 },
    { id: 4, name: "React.js", rating: 80 },
    { id: 5, name: "AWS (EC2, S3, Lambda, RDS)", rating: 85 },
    { id: 6, name: "Docker & Kubernetes", rating: 80 },
    { id: 7, name: "Microservices Architecture", rating: 90 },
    { id: 8, name: "SQL & NoSQL Databases", rating: 85 },
    { id: 9, name: "CI/CD (Jenkins, GitLab)", rating: 80 },
    { id: 10, name: "Agile & Scrum", rating: 85 },
  ],

  socialLinks: [
    { id: 1, name: "GitHub", url: "https://github.com/arjunkumar" },
    { id: 2, name: "LinkedIn", url: "https://linkedin.com/in/arjunkumar" },
    { id: 3, name: "Portfolio", url: "https://arjunkumar.dev" },
  ],

  projects: [
    {
      id: 1,
      name: "Enterprise SaaS Platform",
      description: `Developed a multi-tenant SaaS platform enabling clients to customize workflows and automate processes. Tech stack: Node.js, React, AWS, Docker, Kubernetes.`,
      liveUrl: "https://saasplatform.example.com",
    },
    {
      id: 2,
      name: "Real-Time Inventory Management System",
      description: `Built real-time inventory tracking with notifications and analytics for retail chains. Used Spring Boot, Redis caching, and Angular.`,
      liveUrl: "https://inventory.example.com",
    },
  ],

  achievements: [
    {
      id: 1,
      title: "Employee of the Year",
      description: `Awarded Infosys Employee of the Year 2022 for outstanding leadership and delivery of key projects.`,
      date: "2022-12",
    },
    {
      id: 2,
      title: "Best Innovation Award",
      description: `Recognized at TCS for innovative automation scripts that reduced manual QA efforts by 40%.`,
      date: "2018-09",
    },
  ],

  languages: [
    { id: 1, name: "English", proficiency: "Fluent" },
    { id: 2, name: "Hindi", proficiency: "Native" },
    { id: 3, name: "Telugu", proficiency: "Conversational" },
  ],

  preferences: {
    jobType: "Full-Time",
    location: "Hyderabad, Telangana, India",
    relocation: true,
    remote: true,
    industries: [
      "Information Technology",
      "Software Development",
      "Cloud Computing",
    ],
  },
};