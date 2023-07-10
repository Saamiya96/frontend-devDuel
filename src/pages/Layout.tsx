import { Outlet, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const parentContainer = "h-screen";
const navBarStyling = "p-5 flex justify-center font-mono tracking-widest text-green-400";
const navItemStyling = "p-3 bg-red-500 text-white hover:animate-pulse hover:bg-blue-600 hover:text-white";
const mainContentPositioning = "p-12 flex justify-center font-mono tracking-widest min-h-full";

function Layout() {
  const location = useLocation();

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className={parentContainer}>
      <nav className={navBarStyling}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          {location.pathname === "/about" ? (
            <Link onClick={handleGoBack} className={navItemStyling}>
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
            </Link>
          ) : (
            <Link to="/about" className={navItemStyling}>
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
            </Link>
          )}
        </motion.div>
      </nav>
      <div
        className={mainContentPositioning}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
