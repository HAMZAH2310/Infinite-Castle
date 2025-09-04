"use client";

import { motion } from "framer-motion";
import React, { useMemo } from "react";

interface TrailerProps {
  url?: string;
}

const TrailerSection: React.FC<TrailerProps> = ({
  url = "https://www.youtube.com/embed/x7uLutVRBfI",
}) => {
  const particles = useMemo(
    () => 
      [...Array(12)].map((_,i) => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 8 + Math.random() * 4,
        dir: i % 2 === 0 ? 30 : -30,
      })),
      []
  );
  return (
    <motion.section
      id="trailer"
      className="relative h-screen flex items-center justify-center 
                 bg-gradient-to-b from-black via-red-950 to-purple-950 
                 overflow-hidden"
      initial={{ y: "-100vh", rotateX: 25, opacity: 0.5, filter: "blur(6px)" }}
      animate={{ y: 0, rotateX: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      
      <div className="absolute inset-0 bg-[url('/infinite.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-black/60"></div>

      
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
      >
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-radial from-white/10 to-transparent rounded-full blur-3xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, i % 2 === 0 ? 30 : -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center">
        <motion.iframe
          className="w-full h-[75vh] rounded-xl 
                     shadow-[0_0_40px_rgba(220,38,38,0.8),0_0_80px_rgba(34,197,94,0.5)]
                     transition-transform duration-500 hover:scale-[1.02]"
          src={url}
          title="Demon Slayer Infinite Castle Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        ></motion.iframe>

        <motion.div
          className="mt-10"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        >
          <motion.button
            onClick={() =>
              document.getElementById("synopsis")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            animate={{ boxShadow: ["0 0 20px rgba(220,38,38,0.9)", "0 0 40px rgba(220,38,38,1)", "0 0 20px rgba(220,38,38,0.9)"] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="px-8 py-4 rounded-lg font-bold text-lg
                       bg-red-800 text-white relative overflow-hidden
                       hover:bg-red-700 transition-all duration-300"
          >
            Enter Castle
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TrailerSection;
