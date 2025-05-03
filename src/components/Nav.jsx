import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { logoutUser, updateUser } from "../services/api";

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
    dropdown: [{ name: "Performance Analytics", link: "/features/analytics" }],
  },
];

const Nav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const navigate = useNavigate();
  const navRef = useRef(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    setIsLoggedIn(!!storedUser);
    setIsAdmin(storedUser?.role === "admin");
  }, []);

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleRandomQuiz = () => navigate("/random");

  const handleSignIn = () => navigate("/signin");

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      setIsAdmin(false);
      setUser(null);
      navigate("/signin");
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (!currentPassword) {
      alert("Please enter your current password");
      return;
    }

    const updatedUser = {
      ...user,
      name: newName || user.name,
      email: newEmail || user.email,
    };

    try {
      await updateUser(user.id, updatedUser, currentPassword);
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      alert("Profile updated successfully");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Error updating profile");
    }
  };

  const toggleModal = () => {
    if (!isModalOpen && user) {
      setNewName(user.name || "");
      setNewEmail(user.email || "");
      setCurrentPassword("");
    }
    setIsModalOpen(!isModalOpen);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setOpenDropdown(null);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#FFAC10] px-6 py-4 shadow-md relative z-50">
      <nav ref={navRef} className="flex justify-between items-center relative z-50">
        <div className="text-2xl font-bold text-white">
          <Link to="/">QUIZZPRO</Link>
        </div>

        <button className="lg:hidden text-white z-50" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && !isAdmin && (
          <div className="absolute top-16 left-0 w-full bg-[#FFAC10] rounded-b-[25px] py-4 px-6 flex flex-col items-center gap-4 z-40 shadow-lg lg:hidden">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <>
                    <button onClick={() => handleDropdown(index)} className="text-lg font-medium text-black">
                      {item.name}
                    </button>
                    {openDropdown === index && (
                      <ul className="mt-2 bg-white rounded-md shadow-md overflow-hidden">
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link to={subItem.link} className="block px-4 py-2 text-sm text-black hover:bg-orange-200">
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={item.link} className="text-lg font-medium text-black hover:text-white">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button onClick={handleRandomQuiz} className="bg-white text-[#FFAC10] px-4 py-2 rounded-full text-lg">
                Random Quiz
              </button>
              {!isLoggedIn ? (
                <button onClick={handleSignIn} className="bg-black text-white px-4 py-2 rounded-full text-lg">
                  Sign In
                </button>
              ) : (
                <>
                  <div className="text-white">{user?.name || user?.email}</div>
                  <div onClick={toggleModal} className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-full">
                    <FaUserCircle size={30} />
                  </div>
                  {isAdmin && (
                    <button onClick={() => navigate("/admin")} className="bg-blue-500 text-white px-4 py-2 rounded-full">
                      Admin Panel
                    </button>
                  )}
                  <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-full">
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 z-50">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              {item.dropdown ? (
                <>
                  <button onClick={() => handleDropdown(index)} className="text-lg font-medium text-black hover:text-white">
                    {item.name}
                  </button>
                  {openDropdown === index && (
                    <ul className="absolute left-0 mt-2 bg-white w-44 rounded-md shadow-lg z-50">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link to={subItem.link} className="block px-4 py-2 text-sm text-black hover:bg-orange-200">
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={item.link} className="text-lg font-medium text-black hover:text-white">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4 z-50">
          <button onClick={handleRandomQuiz} className="bg-white text-[#FFAC10] px-4 py-2 rounded-full text-lg">
            Random Quiz
          </button>
          {!isLoggedIn ? (
            <button onClick={handleSignIn} className="bg-black text-white px-4 py-2 rounded-full text-lg">
              Sign In
            </button>
          ) : (
            <>
              {!isAdmin && (
                <FaUserCircle size={44} className="text-white cursor-pointer" onClick={toggleModal} />
              )}
              {isAdmin && (
                <button onClick={() => navigate("/admin")} className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg">
                  Admin Panel
                </button>
              )}
              <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-full text-lg">
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-xl font-bold mb-4">Update Profile</h2>
            <form onSubmit={handleUpdateProfile}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                Update
              </button>
            </form>
            <button onClick={toggleModal} className="mt-4 w-full bg-gray-300 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;

