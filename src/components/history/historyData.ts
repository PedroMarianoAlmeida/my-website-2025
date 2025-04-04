export interface IHistory {
  companyName: string;
  flag: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  companyUrl: string;
  companyLogo: string;
  techStack: string[];
  companySummary: string;
  jobSummary: string;
  activities: string[];
}
export const history: IHistory[] = [
  {
    companyName: "Solutions Medias 360",
    flag: "🇨🇦",
    jobTitle: "Software Engineer (Frontend)",
    startDate: "Feb 2024",
    endDate: "Present",
    companyUrl: "https://www.linkedin.com/company/solutions-medias-360/",
    companyLogo: "/history/sm360.jpeg",
    techStack: [
      "React",
      "JavaScript",
      "Scss",
      "JSP",
      "Jira",
      "Agile Methods",
      "Support",
    ],
    companySummary:
      "360.Agency provides innovative digital solutions for the automotive industry, including dealership websites, online retailing tools, and CRM systems to streamline operations and boost sales. It is a 15 years old company with a large code base in several products, some internal tools, and a few highly customizable products tailored for clients.",
    jobSummary: "Implement new features and maintenance of several codebases",
    activities: [
      "Designed and implemented features across React micro-frontends, improving scalability for 200+ car dealership websites",
      "Maintenance in React Native + Expo mobile app. Participate in the full delivery cycle, from code to ship",
      "Delivered efficient technical support for legacy JSP projects, enhancing user satisfaction",
      "Worked on support tasks (fixing bugs) in several products that required solving things with different stakeholders (like clients, Product Owners, different dev teams, etc)",
    ],
  },
  {
    companyName: "Moz (contractor)",
    flag: "🇺🇸",
    jobTitle: "Software Engineer (Frontend)",
    startDate: "Ago 2023",
    endDate: "Feb 2024",
    companyUrl: "https://www.linkedin.com/company/moz",
    companyLogo: "/history/moz.jpeg",
    techStack: [
      "NextJs",
      "React",
      "TypeScript",
      "JavaScript",
      "MUI",
      "Node",
      "tRPC",
      "Jira",
      "Agile Methods",
      "Stripe",
      "Twig",
    ],
    companySummary:
      "Moz is a SaaS company specializing in search engine optimization (SEO) tools and resources.",
    jobSummary:
      "On checkout flow, me team was implementing features requested by Marketing Team, while keep code quality and integration with Stripe",
    activities: [
      "Several changes and enhancements on a NextJs + TypeScript project",
      "Implemented features in a Node + tRPC backend that serves the frontend project",
      "Learned Twig (a PHP framework) due to the company's necessity and help in this area",
    ],
  },
];
