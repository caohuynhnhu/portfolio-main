export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  project1: string;
  project2: string;
  description1: string[];
  description2: string[];
  icon?: string;
}

export const experienceData: Experience[] = [
  {
    id: 1,
    title: "QC Engineer",
    company: "Apollo Technological Solutions Co., Ltd",
    location: "Vietnam",
    date: "Apr 2022 - Present",
    project1: "",
    project2: "",
    description1: [
      "Review and analyze requirement and UI/UX.",
      "Define test cases and test data.",
      "Execute web application testing.",
      "Receive feedback from stakeholder and verify.",
      "Reporting bugs into Bug Tracking System.",
      "Write Releases Note, User Guide.",
      "Work with Scrum team.",
      "Utilize technologies like Jira, Confluence."
    ],
    description2: [],
    icon: "work"
  },
  {
    id: 2,
    title: "QC Engineer",
    company: "ARI Technology",
    location: "Vietnam",
    date: "May 2020 - Mar 2022",
    project1: "Project: Doxa Connex offers a unique procurement solution which allowed them to have an ecosystem where their Suppliers, Sub-Contractors, and Financiers can digitally connect. As more companies from the relevant industries get onboarded to Doxa, more benefits and enhancements are enjoyed by existing customers because of the platform effect.",
    project2: "Thermomix is an end-to-end system which allows the client to manage sales operations and member rewards from the back office which links to a customer-facing E-commerce site.",
    description1: [
      "Write manual test cases.",
      "Execution based on test cases.",
      "Write automation testing based on the written testcase with javacript, use library taiko and gauge.",
      "Technologies: Git, Source Tree, Trello, Redmine, TestLink, Jenkins."
    ],
    description2: [
      "Write manual testcase.",
      "Execution based on test cases.",
      "Technologies: Git, Source Tree, Redmine."
    ],
    icon: "work"
  },
  {
    id: 3,
    title: "Fresher QC",
    company: "TMA Solutions",
    location: "Vietnam",
    date: "Dec 2019 - Mar 2020",
    project1: "",
    project2: "",
    description1: [
      "Research on library, technology of project: Selenium, RobotFramework, Automation Test with BDD.",
      "Automation Test with BDD.",
      "Execute testcase."
    ],
    description2: [],
    icon: "work"
  }
];
