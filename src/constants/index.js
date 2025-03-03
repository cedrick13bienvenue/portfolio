import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I'm a junior software engineer with a good foundation in client-side scripting. I’m currently diving deeper into server-side programming and backend technologies, focusing on building robust, scalable, and efficient systems. I enjoy turning ideas into functional solutions and I’m eager to grow my expertise in comprehensive development skills to solve real-world problems through technology.`;

export const ABOUT_TEXT = `My curiosity about how systems work has driven me to dive into building APIs and exploring DevOps practices. Though still in the early stages, I'm committed to continuous learning and adapting to new technologies. I thrive in collaborative environments and enjoy solving real-world problems through efficient and scalable solutions.

Outside of coding, I enjoy connecting with people, I'm a faithful believer, and an indulgent sportsperson.
`
export const EXPERIENCES = [
  {
    year: "Mar 2024 - Oct 2024",
    role: "Frontend Developer",
    company: "ALX Rwanda",
    description: `Honing my skills and gaining hands-on experience in an accelerator front-end development program. Creating visually appealing and user-friendly solutions. Working on real-world projects, collaborating with experienced developers, and continuously learning and growing in the ever-evolving field of web development.`,
    tasks: [
      "Developed responsive, cross-browser-compatible user interfaces using HTML, CSS, and JavaScript",
      "Implemented interactive features and API integrations with JavaScript libraries and frameworks like React.js.",
      "Collaborated with designers and back-end developers to deliver high-quality, user-friendly web applications.",
      "Used Git for version control, managing code repositories and resolving conflicts in a team environment.",
      "Optimized web performance and applied SEO best practices to enhance site speed and search visibility."
    ],
    technologies: ["HTML", "CSS", "Javascript", "ReactJS", "Git", "Working with APIs", "GitHub", "Tailwind-css"],
  },
];


export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Kigali, Rwanda",
  phoneNo: "+250 784 667 128 ",
  email: "cedrick13bienvenue@gmail.com",
};
