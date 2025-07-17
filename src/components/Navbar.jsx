import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Ram Sundar</h1>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
