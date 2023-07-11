import { motion } from "framer-motion";
import { ReactNode } from "react";

// CSS class name for the fade-in transition div
const fadeInDiv = "fade-in-div w-max mx-auto flex flex-col items-center";

// FadeInTransition component
const FadeInTransition = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div 
            className={fadeInDiv}
            initial={{ opacity: 0, y: -10 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeInOut" },
            }}
        >
            {children} {/* Render the children within the fade-in transition div */}
        </motion.div>
    );
};

export default FadeInTransition;