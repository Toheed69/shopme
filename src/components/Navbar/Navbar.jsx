import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Top Rated", link: "/top-rated" },
  { id: 3, name: "Kids Wear", link: "/kids" },
  { id: 4, name: "Mens Wear", link: "/men-wear" },
  { id: 5, name: "Electronics", link: "/electronics" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to="/" className="font-bold text-xl flex gap-1 items-center">
              <FiShoppingBag size="30" />
              ShopMe
            </Link>
          </div>

          {/* Desktop Search & Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative group flex items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-slate-800 dark:text-white"
              />
              <IoMdSearch className="text-gray-700 dark:text-white group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer" />
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Dark Mode Switch */}
            <DarkMode />
          </div>

          {/* Mobile Menu & Search Button */}
          <div className="sm:hidden flex items-center gap-3">
            {/* Search Button */}
            <button onClick={() => setSearchOpen(!searchOpen)}>
              <IoMdSearch className="text-2xl" />
            </button>

            {/* Mobile Menu Button */}
            <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="sm:hidden flex justify-center mt-2 px-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-[300px] rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-slate-800 dark:text-white"
            />
          </div>
        )}
      </div>

      {/* Navigation Links - Desktop */}
      <div data-aos="zoom-in" className="hidden sm:flex justify-center">
        <ul className="flex items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-primary duration-200 cursor-pointer"
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden flex flex-col absolute top-full left-0 w-full bg-white dark:bg-slate-800 shadow-md overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col gap-4 items-center">
          {Menu.map((data) => (
            <li key={data.id} onClick={() => setMenuOpen(false)}>
              <Link
                to={data.link}
                className="block text-lg font-semibold py-2 hover:text-primary"
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
