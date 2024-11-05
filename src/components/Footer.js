// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-gray-800 text-gray-200">
      <div>
        <p>© {new Date().getFullYear()} Garry Sangha. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
