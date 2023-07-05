import { Outlet, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Layout() {
  const location = useLocation();

  return (
    <>
      <nav className="flex justify-end">
        <motion.div
          className="box"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {location.pathname === "/about" ? (
            <Link to="/">Back</Link>
          ) : (
            <Link to="/about">About</Link>
          )}
        </motion.div>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
