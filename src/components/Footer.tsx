import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-950 p-6 text-center text-white">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-primary">Multilingual School Unified</h2>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-500 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-600 transition" />
          </a>
        </div>
      </div>
      <div className="mb-4">
        <p>Contact us: msu@company.com | +123 456 7890</p>
      </div>
      <div className="text-sm">
        &copy; 2024 Company Profile. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
