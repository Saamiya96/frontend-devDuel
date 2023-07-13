import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import FadeInTransition from "../components/divs/FadeInTransition";

const layoutContainer = "layout-container h-screen font-mono tracking-widest";
const navbar = "navbar p-5 flex justify-center  text-green-400";
const navbarItem =
  "navbar-item p-3 bg-red-500 text-white hover:animate-pulse hover:bg-blue-600 hover:text-white";
const outlet =
  "outlet flex flex-col items-center justify-center font-mono tracking-widest";

function Layout() {
  const location = useLocation();

  const handleGoBack = async () => {
    window.history.back();
    await new Promise((resolve) => setTimeout(resolve, 200)); // Wait for 200 milliseconds
    window.location.reload();
  };

  const handleGoToAbout = () => {
    window.location.href = "/about";
  };

  return (
    <FadeInTransition>
      <div className={layoutContainer}>
        <nav className={navbar}>
          {location.pathname === "/about" ? (
            <motion.button
              className={navbarItem}
              whileTap={{ scale: 0.97 }}
              onClick={handleGoBack}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2, ease: "easeInOut" },
                }}
              >
                Back
              </motion.span>
            </motion.button>
          ) : (
            <motion.button
              className={navbarItem}
              whileTap={{ scale: 0.97 }}
              onClick={handleGoToAbout}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2, ease: "easeInOut" },
                }}
              >
                About
              </motion.span>
            </motion.button>
          )}
        </nav>

        <div className={outlet}>
          <Outlet />
        </div>
      </div>
    </FadeInTransition>
  );
}

export default Layout;
