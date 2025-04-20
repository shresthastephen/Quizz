import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Copyright } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white py-2 px-12 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo*/}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-2xl font-bold hover:text-yellow-400 transition"
          >
            QuizPro
            <p className="text-gray-400 text-sm">
              Challenge Your Mind, Conquer the Quiz!
            </p>
          </Link>
        </div>

        {/* Links */}
        <ul className="flex gap-6 text-gray-300 text-m">
          <li>
            <Link to="/AboutUs" className="hover:text-yellow-400 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/entrance" className="hover:text-yellow-400 transition">
              Entrance
            </Link>
          </li>

          <li>
            <Link to="/testguides" className="hover:text-yellow-400 transition">
              Test Guides
            </Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-yellow-400 transition">
              Features
            </Link>
          </li>
        </ul>

        {/* Social Media */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-yellow-400 transition">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm flex justify-center items-center gap-1">
        <Copyright className="w-4 h-4" />
        <span>2025 QuizPro. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
