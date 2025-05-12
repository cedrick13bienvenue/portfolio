import profile from "../assets/profile.webp";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profile}
              alt="Cedrick Bienvenue"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Cedric Bienvenue
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Software Engineer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.2 }}
              className="mt-[30px] mb-[50px] bg-black flex flex-row items-center justify-center gap-[20px] pl-[30px] pr-[10px] py-[10px] rounded-full"
            >
              <p className="text-white">My Resume</p>
              <span className="text-black bg-white px-[15px] py-[15px] rounded-full">
                <FaExternalLinkAlt />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
