import {
  SiDocker,
  SiKubernetes,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPostman,
  SiGit,
  SiGithub,
  SiDjango,
  SiTailwindcss,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BsTerminal } from "react-icons/bs";

const Technologies = () => {
  const techStack = [
    { icon: <SiJavascript className="text-7xl text-yellow-400" /> },
    { icon: <SiExpress className="text-7xl text-green-500" /> },
    { icon: <BsTerminal className="text-7xl text-yellow-500" /> },
    { icon: <SiFirebase className="text-7xl text-yellow-400" /> },
    { icon: <SiDjango className="text-7xl text-green-700" /> },
    { icon: <SiMongodb className="text-7xl text-green-500" /> },
    { icon: <FaReact className="text-7xl text-cyan-400" /> },
    { icon: <SiMysql className="text-7xl text-blue-500" /> },
    { icon: <SiPostgresql className="text-7xl text-blue-700" /> },
    { icon: <SiPython className="text-7xl text-blue-400" /> },
    { icon: <SiNodedotjs className="text-7xl text-green-600" /> },
    { icon: <SiPostman className="text-7xl text-orange-500" /> },
    { icon: <SiTypescript className="text-7xl text-blue-500" /> },
    { icon: <FaHtml5 className="text-7xl text-orange-600" /> },
    { icon: <SiDocker className="text-7xl text-blue-400" /> },
    { icon: <FaCss3Alt className="text-7xl text-blue-500" /> },
    { icon: <SiTailwindcss className="text-7xl text-blue-400" /> },
    { icon: <SiGit className="text-7xl text-orange-600" /> },
    { icon: <TbBrandNextjs className="text-7xl text-white" /> },
    { icon: <SiGithub className="text-7xl text-white" /> },
    { icon: <SiKubernetes className="text-7xl text-blue-500" /> },
  ];

  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center p-4 hover:scale-110 transition-transform"
          >
            {tech.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
