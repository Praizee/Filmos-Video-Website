import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="">
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 3 }}
      >

        <div className="hero min-h-screen bg-[#f8f8fd]">

        </div>

      </motion.div>
    </section>
  );
};

export default Home;