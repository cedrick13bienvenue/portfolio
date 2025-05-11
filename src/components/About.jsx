import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariantsH2 = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const childVariantsP = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className="my-40 text-center"
    >
      <motion.h2
        variants={childVariantsH2}
        className="text-4xl lg:text-5xl tracking-tighter mb-10"
      >
        About Me
      </motion.h2>
      <motion.p
        variants={childVariantsP}
        className="max-w-5xl mx-auto text-xl leading-relaxed tracking-tighter"
      >
        {ABOUT_TEXT}
      </motion.p>
    </motion.div>
  );
};

export default About;
