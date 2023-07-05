import { motion } from "framer-motion";

interface SeeRulesButtonProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

function SeeRulesButton({ isVisible, toggleVisibility }: SeeRulesButtonProps) {
  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        visible: { y: 50 },
        hidden: { y: -300 },
      }}
      transition={{ duration: 0.3 }}
      className="bottom-half"
    >
      <motion.button
        className="bg-gray-900 hover:bg-gray-300 border-gray-900 hover:border-gray-300 hover:text-black text-white font-bold py-2 px-4 rounded-full"
        whileTap={{ scale: 0.95 }}
        onClick={toggleVisibility}
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
      >
        {isVisible ? "Hide Rules" : "Show Rules"}
      </motion.button>
    </motion.div>
  );
}

export default SeeRulesButton;
