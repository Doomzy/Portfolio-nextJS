export const navData = {
  heading: "Mohamed Abdulhamid",
  links: ["Overview", "Skills", "Projects", "Experience"],
};

import personalImg from "@/public/images/me.jpg";

export const heroData = {
  image_url: personalImg,
  job_title: "Softwar Develper",
  name: "Mohamed Abdulhamid",
};

import frontendIcon from "@/public/icons/front-end.png";
import backendIcon from "@/public/icons/back-end.png";
import softwareProtoIcon from "@/public/icons/software-prototyping.png";
import uiuxDevIcon from "@/public/icons/uiux-development.png";
import { Code, Layers, Pencil, University } from "lucide-react";

export const overViewData = {
  overview:
    "Highly motivated Full-Stack Developer with strong analytical and problem-solving abilities and hands-on experience in building web applications. Developed internal management applications and implemented real-time communication features in numerous applications leveraging WebSockets, showcasing strong back-end skills by building well-documented and scalable APIs. Proficient in modern JavaScript frameworks such as React.js, Next.js, and Express.js. Committed to delivering high-quality, well-tested, and maintainable code.",
  cards: [
    {
      title: "Frontend Developer",
      icon: frontendIcon,
    },
    {
      title: "Backend Developer",
      icon: backendIcon,
    },
    {
      title: "UI/UX Development",
      icon: uiuxDevIcon,
    },
    {
      title: "Software Prototyping",
      icon: softwareProtoIcon,
    },
  ],
};

export const skillSet1 = [
  "HTML/CSS",
  "React.js",
  "Tailwind",
  "Jvascript",
  "TypeScript",
  "Python",
];

export const skillSet2 = [
  "Node.js",
  "Express.js",
  "Next.js",
  "SQL/NoSQL",
  "Git",
  "Scrum/Agile",
];

import foodRecipes from "@/public/images/food-recipes.jpeg";
import realtimeVoting from "@/public/images/realtime-voting.png";
import expenseTracker from "@/public/images/expense-tracker.png";
import apiImg from "@/public/images/api.webp";

export const projects = [
  {
    name: "Food Recipes",
    stack: "React.js, Public API",
    description:
      "Its a food recipes app that allows you to explore new recipes and search for your favourite ones.",
    thumbnail: foodRecipes,
    fillThumbnail: true,
    link: "https://food-recipes-libpgdkho-mohamed-abdulhamids-projects.vercel.app/",
    gitLink: "https://github.com/Doomzy/Food-Recipes-ReactJS",
  },
  {
    name: "Real-time Voting",
    stack: "Expess.js, EJS, WebSockets",
    description:
      "Its an app that allows users to create and share polls with other people.",
    thumbnail: realtimeVoting,
    fillThumbnail: false,
    gitLink: "https://github.com/Doomzy/Real-time_Voting-app-nodeJS",
  },
  {
    name: "Expense Tracker",
    stack: "React.js, Firebase",
    description:
      "A simple expense tracker app that allows you to track your expenses and income.",
    thumbnail: expenseTracker,
    fillThumbnail: true,
    link: "https://expense-tracker-react-kz9dltmud-mohamed-abdulhamids-projects.vercel.app/",
    gitLink: "https://github.com/Doomzy/Expense-Tracker_ReactJS",
  },
  {
    name: "Properties Rental api",
    stack: "Express.js, MongoDB",
    description:
      "An api for a residential properties to use in a renting app, the owners list their properties and tenants/users expolre and reserve it.",
    thumbnail: apiImg,
    fillThumbnail: true,
    gitLink: "https://github.com/Doomzy/Properties_rental_api-nodeJS",
  },
];

export const experienceData = [
  {
    title: "CS Bachelor's Degree",
    description: "Misr University for Science and Technology",
    icon: <University size={32} />,
    date: "2016 - 2020",
  },
  {
    title: "UI Developer",
    description: "Freelance",
    icon: <Pencil size={32} />,
    date: "OCT 2020 - MAR 2021",
  },
  {
    title: "Python Developer",
    description: "RevaGroup.io | Denmark-Remote",
    icon: <Code size={32} />,
    date: "FEB 2022 - DEC 2022",
  },
  {
    title: "Full-Stack Developer",
    description: "Unique Solutions | Egypt-Remote",
    icon: <Layers size={32} />,
    date: "DEC 2023 - Present",
  },
];

export const contactsData = {
  email: "mohamed_abdulhamid5@outlook.com",
  resume:
    "https://drive.google.com/file/d/1OIOz6BXUzfhfxqijcBWLoHCc9gEBKsg6/view?usp=sharing",
  phone: "±20 106 506 3125",
  socials: [
    { name: "Github", link: "https://github.com/doomzy" },
    { name: "Gitlab", link: "https://gitlab.com/Mo_abdulhamid" },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/mohamed-abdulhamid",
    },
  ],
};
