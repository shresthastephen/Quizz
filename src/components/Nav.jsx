import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const menuItems = [
  { name: "About Us", link: "/about" },
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
      { name: "IELTS", link: "/testguides/ielts" },
      { name: "PTE", link: "/testguides/ielts" },
      { name: "SAT", link: "/testguides/ielts" },
      { name: "Others", link: "/testguides" },
    ],
  },
  {
    name: "Features",
    dropdown: [
      { name: "Mock Tests", link: "/mocktest" },
      { name: "Live Quiz", link: "/features/live-quiz" },
      { name: "Performance Analytics", link: "/features/analytics" },
    ],
  },
];

const Nav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleRandomQuiz = () => {
    navigate("/mocktest");
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <header className="bg-[#FFAC10] px-10 py-5 shadow-md">
      <nav className="flex justify-between items-center">
        {/* Left Title */}
        <div className="text-2xl font-bold text-white">
          <Link to="/">QUIZZPRO</Link>
        </div>

        {/* Middle Links */}
        <ul className="flex gap-8">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => handleDropdown(index)}
                    className="text-lg font-medium text-black focus:text-white"
                  >
                    {item.name}
                  </button>
                  {openDropdown === index && (
                    <ul className="absolute left-0 mt-2 bg-white w-44 rounded-md shadow-lg z-50">
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
        </ul>

        {/* Right Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleRandomQuiz}
            className="bg-white text-[#FFAC10] px-4 py-2 rounded-full text-lg "
          >
            Random Quiz
          </button>
          <button
            onClick={handleSignIn}
            className="bg-black text-white px-4 py-2 rounded-full text-lg "
          >
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
