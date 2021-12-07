import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  return (
    <div>
      <AnimatePresence>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "3rem" }}
        >
          Mind Voys
        </motion.h1>
      </AnimatePresence>
      <hr />
    </div>
  );
};

export default Header;
