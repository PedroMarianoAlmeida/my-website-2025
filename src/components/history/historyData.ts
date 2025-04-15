export interface IHistory {
  companyName: string;
  flag: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  companyLogo: string;
  techStack: string[];
  companySummary: string;
  jobSummary: string;
  activities: string[];
  isActive: boolean;
}
export const history: IHistory[] = [
  {
    companyName: "Solutions Medias 360",
    flag: "🇨🇦",
    jobTitle: "Frontend Developer",
    startDate: "Feb 2024",
    endDate: "Present",
    companyLogo: "/history/sm360.jpeg",
    techStack: [
      "React",
      "React Native",
      "JavaScript",
      "Scss",
      "JSP",
      "Git",
      "Gitlab",
      "Jira",
      "Agile Methods",
      "Support",
    ],
    companySummary:
      "360.Agency provides innovative digital solutions for the automotive industry, including dealership websites, online retailing tools, and CRM systems to streamline operations and boost sales. It is a 15 years old company with a large code base in several products, some internal tools, and a few highly customizable products tailored for clients",
    jobSummary: "Implement new features and maintenance of several codebases",
    activities: [
      "Designed and implemented features across React micro-frontends, improving scalability for 200+ car dealership websites",
      "Maintenance in React Native + Expo mobile app. Participate in the full delivery cycle, from code to ship",
      "Delivered efficient technical support for legacy JSP projects, enhancing user satisfaction",
      "Worked on support tasks (fixing bugs) in several products that required solving things with different stakeholders (like clients, Product Owners, different dev teams, etc)",
    ],
    isActive: true,
  },
  {
    companyName: "Moz (contractor)",
    flag: "🇺🇸",
    jobTitle: "Fullstack Developer",
    startDate: "Ago 2023",
    endDate: "Feb 2024",
    companyLogo: "/history/moz.jpeg",
    techStack: [
      "NextJs",
      "React",
      "TypeScript",
      "JavaScript",
      "MUI",
      "Node",
      "Git",
      "Gitlab",
      "tRPC",
      "Jira",
      "Agile Methods",
      "Stripe",
      "Twig",
    ],
    companySummary:
      "Moz is a SaaS company specializing in search engine optimization (SEO) tools and resources",
    jobSummary:
      "On checkout flow, me team was implementing features requested by Marketing Team, while keep code quality and integration with Stripe",
    activities: [
      "Several changes and enhancements on a NextJs + TypeScript project",
      "Implemented features in a Node + tRPC backend that serves the frontend project",
      "Learned Twig (a PHP framework) due to the company's necessity and help in this area",
    ],
    isActive: false,
  },
  {
    companyName: "Fetchly Labs",
    flag: "🇺🇸",
    jobTitle: "FullStack Developer",
    startDate: "Dec 2021",
    endDate: "Apr 2023",
    companyLogo: "/history/fetchly.jpeg",
    techStack: [
      "React",
      "React native",
      "Ruby on Rails",
      "TypeScript",
      "NextJs",
      "JavaScript",
      "Scss",
      "Styled Components",
      "Node",
      "Git",
      "Github",
      "Jira",
      "Agile Methods",
    ],
    companySummary:
      "Fetchly Labs is a Software House that build MVPs and outsource developers to other clients",
    jobSummary:
      "Creation of MVPs with different teams, working close to UI/UX and QA teams",
    activities: [
      "Created Pixel Perfect UI based on Figma in React and React Native",
      "Developed the backend and integrated it with the UI",
      "Built over 4 MVPs with React, React Native, and Ruby on Rails",
      "Worked as an outsourcer refactoring a React Native app in production (with TDD Methodology)",
    ],
    isActive: false,
  },
  {
    companyName: "Mondiale",
    flag: "🇧🇷",
    jobTitle: "Frontend Developer",
    startDate: "Jan 2021",
    endDate: "Dec 2021",
    companyLogo: "/history/mondiale.jpeg",
    techStack: [
      "NextJs",
      "React",
      "JavaScript",
      "TypeScript",
      "Scss",
      "Styled Components",
      "Theme UI",
      "HTML + CSS",
      "Jira",
      "Agile Methods",
    ],
    companySummary: "Mondiale is a company specialized in chat bot",
    jobSummary: "Maintenance in over 20 Landing  with different stacks",
    activities: [
      "Creation of Landing Pages based in a model",
      "Performing changes in the pages (data, colors, images, styles) - Several web pages using different technologies (Next, React, HTML + CSS) and Styles (Theme UI, Styled Component, Vanilla CSS)",
      "Add features in existent projects (like getting data from a web API)",
      "Validate the changes with the Product Owner and the code with the Tech Lead (scrum)",
      "Refactor React component",
    ],
    isActive: false,
  },
  {
    companyName: "Pedro Programmer",
    flag: "🌎",
    jobTitle: "Owner/FullStack Developer",
    startDate: "Jan 2018",
    endDate: "Present",
    companyLogo: "/history/pedroprogrammer.png",
    techStack: [
      "Open Source",
      "AWS",
      "AI",
      "Micro SaaS",
      "NextJs",
      "React",
      "MongoDb",
      "JavaScript",
      "TypeScript",
    ],
    companySummary:
      "Pedro Programmer is my own Company where I developed hands on expertise in several areas that I do not got chance to dig deep on my daily job, like AI and AWS",
    jobSummary: "Freelancer project and open source contributions",
    activities: [
      "Open source contributions for React Bits (10k stars), and Meteor",
      "Created a React framework after the release of React 19",
      "Created a AI Micro SaaS: Better Image IA (shut down due to costs)",
      "Freelancer projects into NDA contract",
      "Helped a lot of developers (check testimonials)",
    ],
    isActive: true,
  },
];
