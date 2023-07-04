import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="flex justify-end">
        <Link to="/about" className="">
          About
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
