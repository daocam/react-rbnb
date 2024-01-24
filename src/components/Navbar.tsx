import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="w-full h-[100px] text-primary py-0 flex items-center justify-between">
      <Link to="/">
        <h2 className="sm:text-6xl text-5xl">APART</h2>
      </Link>
      <nav className="sm:text-xl text-lg">
        <ul className="flex gap-5">
          <Link
            className={
              location.pathname === "/" ? "underline underline-offset-4" : ""
            }
            to="/"
          >
            Accueil
          </Link>
          <Link
            className={
              location.pathname === "/about"
                ? "underline underline-offset-4"
                : ""
            }
            to="/about"
          >
            A propos
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
