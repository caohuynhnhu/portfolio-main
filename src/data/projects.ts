export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "NewsRadar",
    description: "A news and trending keyword platform that allows users to read articles and search for posts across multiple social media platforms. Developed as a personal project to enhance skills in full-stack development, web scraping, and API integration.",
    technologies: ["React", "Remix", "Python", "FastAPI", "Web Scraping", "Docker"],
    githubLink: "",
    image: "images/newsradar.png"
  },
  {
    id: 2,
    title: "API Integration Services",
    description: "Enterprise software to collect product prices on Vietnamese e-commerce platforms. Designed and implemented backend APIs, data pipelines, and monitoring systems using Prometheus. Served as Scrum master for a team of 14 developers.",
    technologies: ["Apache Kafka", "Redis", "FastAPI", "Flask", "Elasticsearch", "MySQL"],
    githubLink: "",
    image: "images/api-integration.png"
  },
  {
    id: 3,
    title: "E-Commerce Scraper",
    description: "Freelance project to develop software for collecting product prices on Vietnamese e-commerce platforms. Implemented efficient data collection methods using Scrapy and Kafka for data processing.",
    technologies: ["Scrapy", "Python", "Reverse API", "Kafka"],
    githubLink: "",
    image: "images/ecommerce-scraper.png"
  },
  {
    id: 4,
    title: "Enterprise Management Suite",
    description: "Developed APIs for enterprise products including Calendar, Workflow Management, and Expense Management Software. Worked in a team of 11 developers to create scalable backend solutions using Django and Google App Engine.",
    technologies: ["Django", "Google App Engine", "SQL", "Python"],
    githubLink: "",
    image: "images/enterprise-management.png"
  },
  {
    id: 5,
    title: "YouTube Engagement Tool",
    description: "Freelance project to develop software that simulates user actions (multi-threaded) for watching videos, liking, commenting, and subscribing to YouTube channels. Implemented using Selenium WebDriver for browser automation.",
    technologies: ["Selenium WebDriver", "Python", "Multi-threading"],
    githubLink: "",
    image: "images/youtube-tool.png"
  },
  {
    id: 6,
    title: "Multi-platform Image Crawler",
    description: "Software to collect and download photos from websites such as Google, Baidu, Yandex, Pinterest, and more. Developed as a freelance project using web scraping techniques and HTTP requests.",
    technologies: ["Selenium WebDriver", "Requests", "Python", "Image Processing"],
    githubLink: "",
    image: "images/image-crawler.png"
  },
  {
    id: 7,
    title: "Twitter to Telegram Bot",
    description: "Automated system that collects post information from Twitter and forwards it to Telegram channels using a custom bot. Developed as a freelance project to facilitate social media content aggregation.",
    technologies: ["Selenium WebDriver", "Requests", "Telethon", "Bot API", "Python"],
    githubLink: "",
    image: "images/twitter-telegram.png"
  }
];