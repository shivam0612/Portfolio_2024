import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-4 md:p-12 flex flex-col md:flex-row justify-between items-center">
        <span className="mb-4 md:mb-0">LOGO</span>
        <p className="text-slate-600">&copy; 2024 Shivam Patel - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
