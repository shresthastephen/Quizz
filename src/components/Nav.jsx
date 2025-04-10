import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { logoutUser } from "../services/api";  

const menuItems = [
  { name: "About Us", link: "/AboutUs" },
  {
    name: "Entrance",
    dropdown: [
      { name: "BCA", link: "/entrance/bca" },
      { name: "CSIT", link: "/entrance/csit" },
      { name: "BIM", link: "/entrance/bim" },
      { name: "Others", link: "/entrance" },
    ],
  },
  {
    name: "Test Guides",
    dropdown: [
      { name: "IELTS", link: "/test-guides/ielts" },
      { name: "PTE", link: "/test-guides/pte" },
      { name: "SAT", link: "/test-guides/sat" },
      { name: "Others", link: "/testguides" },
    ],
  },
  {
    name: "Features",
    dropdown: [
      { name: "Mock Tests", link: "/mocktest" },
      { name: "Performance Analytics", link: "/features/analytics" },
    ],
  },
];

const Nav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const navRef = useRef(null); // Added navRef

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleRandomQuiz = () => {
    navigate("/mocktest");
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await logoutUser();  
      localStorage.removeItem("user");  
    } catch (error) {
      console.error("Logout failed:", error);
      alert("An error occurred during logout.");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }

      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#FFAC10] px-6 py-4 shadow-md relative z-50">
      <nav ref={navRef} className="flex justify-between items-center relative z-50">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link to="/">QUIZZPRO</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-white focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Desktop & Mobile Menu */}
        <ul
          ref={dropdownRef}
          className={`absolute lg:static bg-[#FFAC10] pt-4 pb-4 pl-4 pr-4 rounded-[25px] lg:flex lg:items-center gap-8 top-16 left-0 w-full lg:w-auto transform ${
            menuOpen ? "translate-y-0" : "-translate-y-[500px]"
          } lg:translate-y-0 transition-all duration-300 ease-in-out lg:flex-row flex flex-col lg:space-x-6 space-y-4 lg:space-y-0 z-50`}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="relative text-center lg:text-left z-50">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => handleDropdown(index)}
                    className="text-lg font-medium text-black focus:text-white w-full lg:w-auto z-50"
                  >
                    {item.name}
                  </button>
                  {openDropdown === index && (
                    <ul className="absolute left-0 mt-2 bg-white w-44 rounded-md shadow-lg z-50 lg:text-left text-center">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.link}
                            className="block px-4 py-2 text-sm text-black hover:bg-orange-200"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.link}
                  className="text-lg font-medium text-black hover:text-white"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 lg:hidden z-50">
            <button
              onClick={handleRandomQuiz}
              className="bg-white text-[#FFAC10] px-4 py-2 rounded-full text-lg"
            >
              Random Quiz
            </button>
            <button
              onClick={handleSignIn}
              className="bg-black text-white px-4 py-2 rounded-full text-lg"
            >
              Sign In
            </button>
            {/* Add Logout Button if user is logged in */}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-full text-lg"
            >
              Logout
            </button>
          </div>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4 z-50">
          <button
            onClick={handleRandomQuiz}
            className="bg-white text-[#FFAC10] px-4 py-2 rounded-full text-lg"
          >
            Random Quiz
          </button>
          <button
            onClick={handleSignIn}
            className="bg-black text-white px-4 py-2 rounded-full text-lg"
          >
            Sign In
          </button>
          {/* Add Logout Button if user is logged in */}
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-full text-lg"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
