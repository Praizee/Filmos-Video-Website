import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Palm from "../assets/palm-frond.jpeg"
import ChainFence from "../assets/chain-fence.jpg"
import IceSkating from "../assets/ice-skating.jpg"
import Shrug from "../assets/shrug.jpeg"
import Eye from "../assets/eye.jpg"
import Freckles from "../assets/freckles.jpg"
import Boat from "../assets/boat.jpg"
import RugLady from "../assets/rug-lady.jpg"
import PillowLady from "../assets/pillow-lady.jpg"
import Thinking from "../assets/thinking.jpg"


const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="text-black bg-white">
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 3 }}
      >

        <div className=" laptop:mt-[20rem] border-4 h-[4rem] p-4 laptop:p-0 mt-[10rem] min-h-screen mb-0 laptop:mx-[7rem] ">
          {/* bg-[#f8f8fd] */}
          <div className="">
            <h1 class="laptop:text-[9rem] laptop:leading-[8rem] font-black">
              Video  <br />
              production.
            </h1>

          </div>

        </div>

        <div className=" my-20 mx-4 laptop:mx-0">
          <div className="laptop:mx-[7rem] ">
            <img src={Palm} className="laptop:w-1/2 my-2 w-auto" alt="" />
            <span className="laptop:flex gap-4 block">
              <img src={ChainFence} className="laptop:w-1/2 my-2 w-auto" alt="" />
              <img src={IceSkating} className="laptop:w-1/2 my-2 w-auto" alt="" />
            </span>
            <img src={Shrug} className="laptop:w-1/2 my-2 w-auto" alt="" />
            <span className="laptop:flex gap-4 block">
              <img src={Eye} className="laptop:w-1/2 my-2 w-auto" alt="" />
              <img src={Freckles} className="laptop:w-1/2 my-2 w-auto" alt="" />
            </span>
            <img src={Boat} className="laptop:w-1/2 my-2 w-auto" alt="" />
            <span className="laptop:flex gap-4 block">
              <img src={RugLady} className="laptop:w-1/2 my-2 w-auto" alt="" />
              <img src={PillowLady} className="laptop:w-1/2 my-2 w-auto" alt="" />
            </span>
            <img src={Thinking} className="laptop:w-1/2 my-2 w-auto" alt="" />
          </div>

        </div>


      </motion.div>
    </section>
  );
};

export default Home;