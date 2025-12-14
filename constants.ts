import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Henok Alem",
  title: "Software Engineer & Financial Analyst",
  location: "N/S/L Gofa",
  phone: "0901258178",
  email: "alemh2112@gmail.com",
  objective: "Detail-oriented professional with a degree in Accounting and Finance, currently completing a Software Engineering degree at Addis Ababa University. Seeking to leverage analytical and technical skills.",
  experience: [
    {
      id: "exp_1",
      role: "Software Engineering Intern",
      company: "Kb design and printing p.l.c",
      date: "Feb 2025",
      description: [
        "Contributed to software development lifecycles.",
        "Participated in testing and debugging of core applications.",
        "Collaborated with senior developers on feature implementation."
      ]
    },
    {
      id: "exp_2",
      role: "Intern Financial Analyst",
      company: "Adiss Ababa road and Autority",
      date: "July 2024",
      description: [
        "Analyzed financial statements and prepared detailed reports.",
        "Developed forecasting models to support decision making.",
        "Assisted in budget preparation and variance analysis."
      ]
    },
  ],
  education: [
    {
      id: "edu_1",
      degree: "B.Sc. in Software Engineering",
      school: "Addis Ababa University",
      date: "Expected Jun 2026"
    },
    {
      id: "edu_2",
      degree: "B.Sc. in Accounting and Finance",
      school: "St. Mary University",
      date: "Jun 2025"
    }
  ],
  skills: [
    {
      category: "Technical",
      skills: ["Python", "Java", "SQL", "React", "TypeScript", "Software Development"]
    },
    {
      category: "Analytical",
      skills: ["Financial Analysis", "Data Modeling", "Forecasting", "Reporting"]
    },
    {
      category: "Communication",
      skills: ["Verbal Communication", "Written Communication", "Team Collaboration"]
    }
  ]
};

export const INITIAL_CHAT_MESSAGE = "Hi! I'm Henok's AI assistant. Ask me anything about his experience, skills, or education.";
