import { useState } from "react";
import { motion } from "framer-motion";

// CSS class names for the menu and its elements
const menuMotion = "menu-motion";
const menu = "menu flex justify-center";
const button = "show-readme-button p-2 h-10 bg-red-500 text-white hover:animate-pulse hover:bg-blue-600 hover:text-white";
const readmeList = "readme-list text-center border-2 border-red-500";
const readmeItem = "readme-item p-3 text-xs hover:animate-pulse hover:bg-blue-600 hover:text-white";

// Animation variants for the list items
const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.2 }
    }
};

function Rules() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            className={menuMotion}
            initial={false}
            animate={isOpen ? "open" : "closed"}
        >
            <div className={menu}>
                <motion.button
                    className={button}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                README.md
                <motion.div
                    variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                ></motion.div>
                </motion.button>
            </div>
            <motion.ul
                className={readmeList}
                variants={{
                open: {
                    clipPath: "inset(0% 0% 0% 0%)",
                    transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05
                    }
                },
                closed: {
                    clipPath: "inset(10% 50% 90% 50%)",
                    transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3
                    }
                }
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
                <motion.li className={readmeItem} variants={itemVariants}>
                    Players take turns selecting card stats.
                </motion.li>

                <motion.li className={readmeItem} variants={itemVariants}>
                    The player with the highest value wins the round.
                </motion.li>
                
                <motion.li className={readmeItem} variants={itemVariants}>
                    The winner collects the opponent's card.
                </motion.li>
                
                <motion.li className={readmeItem} variants={itemVariants}>
                    The game continues until one player has all the cards.
                </motion.li>
            </motion.ul>
        </motion.nav>
    );
}

export default Rules;
