import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I'm a junior software engineer with a good foundation in client-side scripting. I’m currently diving deeper into server-side programming and backend technologies, focusing on building robust, scalable, and efficient systems. I enjoy turning ideas into functional solutions and I’m eager to grow my expertise in comprehensive development skills to solve real-world problems through technology.`;

export const ABOUT_TEXT = `My curiosity about how systems work has driven me to dive into building APIs and exploring DevOps practices. Though still in the early stages, I'm committed to continuous learning and adapting to new technologies. I thrive in collaborative environments and enjoy solving real-world problems through efficient and scalable solutions.

Outside of coding, I enjoy connecting with people, I'm a faithful believer, and an indulgent sportsperson.
`;
export const EXPERIENCES = [
  {
    year: "July 2025 - Present",
    role: "Backend Developer",
    company: "Solvit Africa",
    companyLink: "https://solvit.africa/",
    description: `Participating in the Code2Connect Fellowship, a hands-on, in-person program by Solvit Africa aimed at equipping youth
with employable tech skills. Specializing in backend development using Node.js ,working on practical projects that involve
building real-world, scalable server-side solutions.`,
    tasks: [
      "Gaining expertise in RESTful API creation, authentication and authorization (JWT), data validation, and secure endpoint development.",
      "Expanding knowledge in system integration within the JavaScript ecosystem, connecting backend services with third-party APIs, and implementing middleware for performance and security.",
      "Developing strong skills in database interaction with PostgreSQL and MongoDB, including schema design, query optimization, and CRUD operations.",
      "Advancing skills in collaborative development, using Git for version control, managing feature branches, resolving merge conflicts, and applying agile principles in a team environment.",
      "Applying best practices in backend architecture, including modular code structure, error handling, logging, caching,and deployment workflows using CI/CD pipelines.",
    ],
    technologies: [
      "Docker",
      "Express.js",
      "Typescript",
      "RESTful APIs",
      "JWT",
      "Middleware",
      "Error Handling",
      "Input Validation",
      "CORS Configuration",
      "Redis",
      "PostgreSQL",
      "ORMs",
      "API Documentation",
    ],
  },

  // {
  //   year: "May 2025 - Present",
  //   role: "QA Engineer",
  //   company: "Yegobox",
  //   companyLink: "https://yegobox.com/",
  //   description: `Actively contributing to Flipper, an open-source business management platform through a QA apprenticeship. This involves testing features impacting users of the platform, reporting issues, and ensuring quality from the user’s perspective, all while learning within a collaborative and agile environment.`,
  //   tasks: [
  //     "Collaborating with Flipper’s core maintainers to test features and workflows within an open-source environment.",
  //     "Identifying, reproducing, and reporting bugs using GitHub Issues.",
  //     "Writing clear test cases, documenting steps to reproduce, and suggesting usability improvements.",
  //     "Validating UI components across different platforms and ensuring cross-device consistency.",
  //     "Offering structured QA feedback aligned with each new feature release.",
  //   ],
  //   technologies: [
  //     "Integration Testing",
  //     "E2E Testing",
  //     "UI Testing",
  //     "Regression Testing",
  //     "Usability Testing",
  //     "Playwright",
  //     "Git & Github",
  //   ],
  // },
  // {
  //   year: "Apr 2025 - Present",
  //   role: "Software Engineer",
  //   company: "TheGym",
  //   companyLink: "https://www.the-gym.rw/",
  //   description: `Blending academics with practical experience, this software development traineeship spans 12 months of core training and a 2-year project phase. With coaching from senior developers and real-world project exposure, it aims to elevate participants to industry-ready, intermediate-level professionals prepared for global remote roles`,
  //   tasks: [
  //     "Contributed to weekly hands-on software development challenges while balancing full-time university coursework, enhancing problem-solving and time management skills.",
  //     "Collaborated with peers and international senior developers through code reviews and remote pair programming, following agile methodologies.",
  //     "Built and maintained real-world projects during the project-phase, applying industry-standard practices like version control, clean code, and testing.",
  //     "Received ongoing technical coaching and feedback to grow from foundational to intermediate developer level, focusing on both frontend and backend skills.",
  //     "Participated in technical discussions, stand-ups, and documentation reviews, gaining confidence in communicating ideas in distributed development environments",
  //   ],
  //   technologies: [
  //     "API Integration (RESTful APIs)",
  //     "Node.js",
  //     "JavaScript (ES6+)",
  //     "Object-Oriented Programming(OOP)",
  //     "Agile Development",
  //     "React",
  //     "Testing & Debugging",
  //     "Code Reviews",
  //     "Soft Skills",
  //     "Git & Github",
  //   ],
  // },
  {
    year: "Mar 2024 - Oct 2024",
    role: "Frontend Developer",
    company: "ALX Rwanda",
    companyLink: "https://www.alxafrica.com/rwanda/",
    description: `Honing my skills and gaining hands-on experience in an accelerator front-end development program. Creating visually appealing and user-friendly solutions. Working on real-world projects, collaborating with experienced developers, and continuously learning and growing in the ever-evolving field of web development.`,
    tasks: [
      "Developed responsive, cross-browser-compatible user interfaces using HTML, CSS, and JavaScript",
      "Implemented interactive features and API integrations with JavaScript libraries and frameworks like React.js.",
      "Collaborated with designers and back-end developers to deliver high-quality, user-friendly web applications.",
      "Used Git for version control, managing code repositories and resolving conflicts in a team environment.",
      "Optimized web performance and applied SEO best practices to enhance site speed and search visibility.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Git",
      "Working with APIs",
      "GitHub",
      "TailwindCSS",
    ],
  },
];

export const PROJECTS = [
  {
    title: "THE BIG FIVE",
    image: project1,
    description:
      "The platform highlights the initiative's mission, problem statement, and team members, aiming to bridge the gap between education and job market demands. It features smooth animations powered by Framer Motion, a responsive design, and a clean modern layout that enhances the user experience across devices.",
    technologies: ["HTML", "CSS", "React", "TailwindCSS"],
    link: "https://thebig5.vercel.app/",
  },
  {
    title: "AUTHENTICATION",
    image: project2, // Replace with a screenshot of your app or auth form
    description:
      "A backend-focused MERN stack project built to explore user authentication flows, JWT security, email verification, and password reset via OTP. Includes protected routes, cookie-based sessions, and Swagger API documentation. Designed as a foundational project to practice backend APIs",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
      "Nodemailer",
      "Swagger",
      "Render",
      "Vercel",
    ],
    link: "https://authentic-mern.vercel.app",
  },

  {
    title: "BLOG-BACKEND",
    image: project3,
    description:
      "This blog backend application is a Node.js and Express-based server application designed to power a content publishing platform. It provides a robust, scalable API for managing blog posts, categories, and users, with full CRUD functionality and authentication features. The project focuses on clean architecture, secure endpoints, and database integration, making it suitable for production-ready deployment or as a foundation for a larger blogging system",
    technologies: [
      "Express.js",
      "Typescript",
      "Docker",
      "Redis",
      "JWT",
      "PostgreSQL",
      "Cloudinary",
      "Sequalize",
    ],
    link: " https://github.com/cedrick13bienvenue/practice/tree/master/back-end/blog-backend",
  },

  {
    title: "MVP",
    image: project1,
    description:
      "A Next.js/React-based tourism booking platform MVP that currently supports mock authentication, payment in RWF, and a mobile-responsive design. The platform is in its early stage, with many features not yet implemented, such as real user authentication, secure payment gateways, booking management, user dashboards, reviews, and integration with external services. It serves as a functional prototype to demonstrate core flows and validate the concept before full development.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Radix UI",
      "Recharts",
    ],
    link: "https://trekkrwanda.vercel.app/",
  },

  {
    title: "E-COMMERCE API",
    image: project4,
    description:
      " An e-commerce backend built with Node.js, Express, and TypeScript using Sequelize with PostgreSQL. Features include JWT-based authentication, file uploads, Redis caching, and security middleware. API endpoints are documented with Swagger, logging is managed with Winston, and Docker is supported for deployment",
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "Sequelize",
      "PostgreSQL",
      "JWT",
      "Multer",
      "Redis",
      "Docker",
    ],
    link: "https://github.com/Solvit-Africa-Training-Center/ecommerce-practice",
  },
];

export const CONTACT = {
  address: "Kigali, Rwanda",
  phoneNo: "+250 784 667 128 ",
  email: "cedrick13bienvenue@gmail.com",
};
