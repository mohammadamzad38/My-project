import { useState } from "react";
import Link from "./Link/Link";
import { MdMenu } from "react-icons/md";
import { GrClose } from "react-icons/gr";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Services", path: "/services" },
    { id: 5, name: "Profile", path: "/profile" },
  ];

  return (
    <nav>
      <div
        className="md:flex bg-emerald-400 p-6 "
        onClick={() => setOpen(!open)}
      >
        {open === true ? (
          <GrClose></GrClose>
        ) : (
          <MdMenu className="text-2xl md:hidden"></MdMenu>
        )}

        <ul
          className={`md:flex bg-emerald-100 p-3 gap-6 ml-1 absolute md:static rounded-md  ${
            open ? "top-16" : "-top-80"
          }`}
        >
          {routes.map((route) => (
            <Link key={routes.id} route={route}></Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
