import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 mt-4 border-t border-gray-200">
      <div className="mx-auto px-10 py-8 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-20 text-sm text-gray-600">
        
        {/* Column 1: Site Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">MySite</h3>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact / Social */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Connect</h4>
          <ul className="space-y-1">
            <li>Email: <a href="mailto:contact@example.com" className="hover:text-blue-600">contact@example.com</a></li>
            <li>Twitter: <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">@MySite</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
