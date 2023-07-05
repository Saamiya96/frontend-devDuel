import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="flex justify-end">
        <Link to="/about">About</Link>
        <Link to="/game">Game</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
