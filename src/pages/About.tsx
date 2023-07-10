import { motion } from "framer-motion";

function About() {
  return (
    <motion.div 
      className="w-max mx-auto flex flex-col items-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      >
        <h1>About</h1>
      </motion.div>
  )
}

export default About;
