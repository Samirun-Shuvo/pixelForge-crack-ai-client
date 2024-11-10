import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-5">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">About Pixel Froge</h3>
          <p className="text-gray-400">
            Pixel Froge is your AI-powered companion for creating stunning
            digital paintings from simple text prompts. Discover art like never
            before!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-white"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/paintings"
                className="text-gray-400 hover:text-white"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/generate"
                className="text-gray-400 hover:text-white"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Genarate Paint
              </Link>
            </li>
            <li>
              <Link
                to="/replies"
                className="text-gray-400 hover:text-white"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Contact and Replies
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Pixel Froge (Samirun-shuvo). All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
