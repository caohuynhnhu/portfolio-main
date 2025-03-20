export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

// Updated skills data to match the image
export const skillsData: SkillCategory[] = [
  {
    category: "Testing",
    skills: [
      { name: "Manual", icon: "/images/skills/manual.svg" },
      { name: "API", icon: "/images/skills/api.svg" },
      { name: "Automation", icon: "/images/skills/automation.svg" },
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "/images/skills/git.svg" },
      { name: "HTML", icon: "/images/skills/html.svg" },
      { name: "CSS", icon: "/images/skills/css.svg" },
      //{ name: "Elasticsearch", icon: "/images/skills/elasticsearch.svg" }
    ]
  }
];