"use client";
import { motion, Variants } from "framer-motion";

const KimetsuPage = () => {
  const primaryColor = "#e74c3c"; 
  const secondaryColor = "#f39c12"; 
  const textColor = "#ffffff";
  const backgroundGradient =
    "linear-gradient(135deg, #000000 20%, #1a1a1a 80%)";

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.6 },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: "easeOut", delay: 1 },
    },
  };

  return (
    <motion.div
      style={{
        background: backgroundGradient,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,0,0,0.15) 0%, transparent 70%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <motion.h1
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        style={{
          fontSize: "4.5em",
          fontWeight: "bold",
          color: primaryColor,
          fontFamily: "'Kokuryu', serif",
          marginBottom: "10px",
          textShadow: `0 0 20px ${secondaryColor}, 0 0 40px rgba(255,215,0,0.5)`,
        }}
      >
        Kimetsu No Yaiba: Infinite Castle
      </motion.h1>

      <motion.div
        className="w-48 h-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        style={{ margin: "20px 0" }}
      />

      <motion.h2
        variants={subtitleVariants}
        initial="hidden"
        animate="visible"
        style={{
          fontSize: "2em",
          color: textColor,
          fontFamily: "serif",
          letterSpacing: "0.1em",
          textShadow: "0 0 12px rgba(255,255,255,0.5)",
        }}
      >
        鬼滅の刃 無限城
      </motion.h2>
    </motion.div>
  );
};

export default KimetsuPage;
