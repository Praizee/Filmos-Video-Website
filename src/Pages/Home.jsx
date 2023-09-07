import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Palm from "../assets/palm-frond.jpeg";
import ChainFence from "../assets/chain-fence.jpg";
import IceSkating from "../assets/ice-skating.jpg";
import Shrug from "../assets/shrug.jpeg";
import Eye from "../assets/eye.jpg";
import Freckles from "../assets/freckles.jpg";
import Boat from "../assets/boat.jpg";
import RugLady from "../assets/rug-lady.jpg";
import PillowLady from "../assets/pillow-lady.jpg";
import Thinking from "../assets/thinking.jpg";
import Video1 from "../assets/agency-video.mp4";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);

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
            <h1 className="laptop:text-[9rem] laptop:leading-[8rem] font-black">
              Video  <br />
              production.
            </h1>

          </div>

        </div>

        <div className="my-20 mx-4 laptop:mx-0">
          <div className="laptop:mx-[7rem]">
            {[Palm, ChainFence, IceSkating, Shrug, Eye, Freckles, Boat, RugLady, PillowLady, Thinking].map((image, index) => (
              <div key={index} className="relative w-[50%] my-2">
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredVideo(index)}
                  onMouseLeave={() => setHoveredVideo(null)}
                >
                  <img
                    src={image}
                    className="laptop:w-1/2 my-2 w-auto cursor-pointer"
                    alt=""
                  />
                  {hoveredVideo === index && (
                    <div className="">
                      <video
                        src={Video1}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        preload="auto"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-transparent text-[1.rem] font-bold text-white text-center py-[6rem]">
                        <motion.h1
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          Common Ground
                        </motion.h1>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-transparent text-white text-center py-[3rem]">
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          Partner up to reinvent pop <br />
                          culture and street style
                        </motion.p>
                      </div>

                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
