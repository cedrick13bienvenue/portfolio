import {
  SiDocker,
  SiKubernetes,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiTerraform,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPostman,
  SiGraphql,
  SiGit,
  SiGithubactions,
  SiDjango,
  SiTailwindcss,
  SiNextdotjs,
  SiNginx,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { BsTerminal } from "react-icons/bs";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -15 },
  animate: {
    y: [15, -15],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const techStack = [
  {
    id: 1,
    name: "JavaScript",
    icon: <SiJavascript className="text-7xl text-yellow-400" />,
    duration: 3,
  },
  {
    id: 2,
    name: "Express",
    icon: <SiExpress className="text-7xl text-green-500" />,
    duration: 2.5,
  },
  {
    id: 3,
    name: "Terminal",
    icon: <BsTerminal className="text-7xl text-yellow-500" />,
    duration: 5,
  },
  {
    id: 4,
    name: "Firebase",
    icon: <SiFirebase className="text-7xl text-yellow-400" />,
    duration: 3,
  },
  {
    id: 5,
    name: "Django",
    icon: <SiDjango className="text-7xl text-green-700" />,
    duration: 2.5,
  },
  {
    id: 6,
    name: "MongoDB",
    icon: <SiMongodb className="text-7xl text-green-500" />,
    duration: 5,
  },
  {
    id: 7,
    name: "React",
    icon: <FaReact className="text-7xl text-cyan-400" />,
    duration: 3,
  },
  {
    id: 8,
    name: "MySQL",
    icon: <SiMysql className="text-7xl text-blue-500" />,
    duration: 2.5,
  },
  {
    id: 9,
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-7xl text-blue-700" />,
    duration: 5,
  },
  {
    id: 10,
    name: "Python",
    icon: <SiPython className="text-7xl text-blue-400" />,
    duration: 3,
  },
  {
    id: 11,
    name: "Node.js",
    icon: <SiNodedotjs className="text-7xl text-green-600" />,
    duration: 2.5,
  },
  {
    id: 12,
    name: "Postman",
    icon: <SiPostman className="text-7xl text-orange-500" />,
    duration: 5,
  },
  {
    id: 13,
    name: "TypeScript",
    icon: <SiTypescript className="text-7xl text-blue-500" />,
    duration: 3,
  },
  {
    id: 14,
    name: "HTML5",
    icon: <FaHtml5 className="text-7xl text-orange-600" />,
    duration: 2.5,
  },
  {
    id: 15,
    name: "Docker",
    icon: <SiDocker className="text-7xl text-blue-400" />,
    duration: 5,
  },
  {
    id: 16,
    name: "CSS3",
    icon: <FaCss3Alt className="text-7xl text-blue-500" />,
    duration: 3,
  },
  {
    id: 17,
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-7xl text-blue-400" />,
    duration: 2.5,
  },
  {
    id: 18,
    name: "Git",
    icon: <SiGit className="text-7xl text-orange-600" />,
    duration: 5,
  },
  {
    id: 19,
    name: "GraphQL",
    icon: <SiGraphql className="text-7xl text-pink-600" />,
    duration: 3,
  },
  {
    id: 20,
    name: "Next.js",
    icon: <SiNextdotjs className="text-7xl text-white" />,
    duration: 2.5,
  },
  {
    id: 21,
    name: "GitHub Actions",
    icon: <SiGithubactions className="text-7xl text-white" />,
    duration: 5,
  },
  {
    id: 22,
    name: "Kubernetes",
    icon: <SiKubernetes className="text-7xl text-blue-500" />,
    duration: 3,
  },
  {
    id: 23,
    name: "Terraform",
    icon: <SiTerraform className="text-7xl text-purple-500" />,
    duration: 2.5,
  },
  {
    id: 24,
    name: "Nginx",
    icon: <SiNginx className="text-7xl text-green-500" />,
    duration: 4,
  },
];

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {techStack.map(({ id, icon, name, duration }) => (
          <motion.div
            key={id}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            whileHover={{
              scale: 1.4,
              zIndex: 10,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
            }}
            className="relative group flex items-center p-4 cursor-pointer transition-transform duration-300"
          >
            {icon}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm rounded-lg px-2 py-1 transition-opacity duration-300">
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
