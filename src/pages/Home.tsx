import { motion } from "framer-motion";
import React, { ChangeEvent } from "react";
import useUsername from "../hooks/useUsername";

import UsernameForm from "../components/forms/UsernameForm";
import RulesMenu from "../components/menus/RulesMenu";

const homePositioning = "flex flex-col justify-around items-center";
const contentWidth = "max-w-lg"; // Set the desired width for the content

function Home() {
  const { username, setUsername } = useUsername();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <motion.div 
      className={`${homePositioning} ${contentWidth}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
    >
      <UsernameForm username={username} handleChange={handleChange} />
      <RulesMenu />
    </motion.div>
  );
}

export default Home;
