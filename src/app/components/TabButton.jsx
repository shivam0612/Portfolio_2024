

import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children, isSubTab }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
  const activeColor = isSubTab ? "bg-[rgb(247,247,85)]" : "bg-[rgb(168,85,247)]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={`h-1 mt-2 mr-3 ${activeColor}`}
      ></motion.div>
    </button>
  );
};

export default TabButton;
