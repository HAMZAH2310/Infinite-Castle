"use client";

import { motion, Variants } from "framer-motion";

const synopsisParagraphs = [
  "The Infinite Castle arc in Demon Slayer: Kimetsu no Yaiba is a climactic showdown where the Demon Slayer Corps infiltrates Muzan's ever-shifting fortress.",
  "Tanjiro and his allies navigate through labyrinthine rooms that defy physics, battling Upper Rank demons in intense confrontations.",
  "Themes of perseverance, family, and the cycle of hatred are explored as the story builds to a thrilling conclusion.",
];

const SynopsisSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, rotateX: -10 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="synopsis"
      className="h-screen flex items-center justify-center bg-gradient-to-b from-black via-purple-950 to-black p-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      
      <motion.div
        className="absolute inset-0 bg-[url('/infinite.jpg')] bg-cover opacity-20"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      
      <div className="absolute inset-0 bg-black/50" />
      
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/20 via-transparent to-red-900/20"
        animate={{ opacity: [0.2, 0.5, 0.2], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-red-800/20 via-transparent to-purple-800/20"
        animate={{ opacity: [0.3, 0.6, 0.3], x: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="max-w-4xl mx-auto prose prose-invert text-center z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <motion.div
          className="px-6 py-4 rounded-xl bg-black/70 backdrop-blur-md inline-block shadow-[0_0_20px_rgba(220,38,38,0.7)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 via-purple-400 to-red-500 bg-clip-text text-transparent"
            style={{ textShadow: "0 0 25px rgba(239,68,68,0.7)" }}
            variants={itemVariants}
          >
            Synopsis: Infinity Castle
          </motion.h2>
        </motion.div>

        <motion.div
          className="w-72 h-1 mx-auto mb-8 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        />
        
        <div className="text-left md:text-justify space-y-6 text-gray-200 text-lg md:text-xl leading-relaxed max-w-prose mx-auto">
          {synopsisParagraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className="relative pl-4 border-l-4 border-red-600 italic"
              style={{ textShadow: "0 0 8px rgba(0,0,0,0.7)" }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SynopsisSection;
