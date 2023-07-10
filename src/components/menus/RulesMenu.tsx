import { useState } from "react";
import { motion } from "framer-motion";

const buttonStyling = "p-2 h-10 bg-red-500 text-white hover:animate-pulse hover:bg-blue-600 hover:text-white";
const itemStyling = "p-3 text-xs hover:animate-pulse hover:bg-blue-600 hover:text-white";

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
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="menu"
        >
        <div className="flex justify-center">
            <motion.button
            className={buttonStyling}
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
            className="text-center border-2 border-red-500"
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
            <motion.li className={itemStyling} variants={itemVariants}>
            Players take turns selecting card stats.
            </motion.li>
            <motion.li className={itemStyling} variants={itemVariants}>
            The player with the highest value wins the round.
            </motion.li>
            <motion.li className={itemStyling} variants={itemVariants}>
            The winner collects the opponent's card.
            </motion.li>
            <motion.li className={itemStyling} variants={itemVariants}>
            The game continues until one player has all the cards.
            </motion.li>
        </motion.ul>
        </motion.nav>
    );
}

export default Rules;
