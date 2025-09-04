"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";


const characters = [
  {
    name: "Kamado Tanjiro",
    role: "Demon Slayer Corps",
    image: "/image/Tanjiro.jpg",
    primary: "text-green-400",
    shadow: "shadow-[0_0_40px_8px_rgba(220,38,38,0.6)]", // red glow
    accent: "text-red-500",
    description: `Tanjiro Kamado is the main protagonist of Demon Slayer: Kimetsu no Yaiba.
    A kind-hearted boy determined to cure his sister Nezuko and defeat Muzan Kibutsuji.
    He wields Water Breathing and the legendary Sun Breathing techniques.`,
  },
  {
    name: "Kamado Nezuko",
    role: "Tanjiro's Sister",
    image: "/image/Nezuko.jpg",
    primary: "text-pink-400",
    shadow: "shadow-[0_0_40px_8px_rgba(236,72,153,0.7)]", // pink glow
    accent: "text-purple-400",
    description: `Nezuko Kamado, Tanjiro’s younger sister, was turned into a demon but
    retained her human emotions. She fights alongside her brother, using her demon
    powers to protect humans and resist Muzan’s control.`,
  },
  {
    name: "Agatsuma Zenitsu",
    role: "Demon Slayer Corps",
    image: "/image/Zenitsu.jpg",
    primary: "text-yellow-400",
    shadow: "shadow-[0_0_40px_8px_rgba(255,223,0,0.7)]", // yellow glow
    accent: "text-yellow-600",
    description: `Zenitsu Agatsuma is a member of the Demon Slayer Corps.
    Though cowardly, when unconscious he displays his true strength,
    unleashing the powerful Thunder Breathing techniques.`,
  },
  {
    name: "Hashibira Inosuke",
    role: "Demon Slayer Corps",
    image: "/image/Inosuke.jpg",
    primary: "text-blue-500",
    shadow: "shadow-[0_0_40px_8px_rgba(0,102,204,0.7)]", // blue glow
    accent: "text-blue-300",
    description: `Inosuke Hashibira is a hot-headed Demon Slayer who wears a boar mask.
    Raised in the mountains, he is aggressive but fiercely loyal to his comrades,
    using the Beast Breathing style.`,
  },
  {
    name: "Kanao Tsuyuri",
    role: "Demon Slayer Corps",
    image: "/image/Kanao.jpg",
    primary: "text-pink-300",
    shadow:
      "shadow-[0_0_30px_8px_rgba(255,105,180,0.7),0_0_40px_10px_rgba(139,0,0,0.6)]", // pink + crimson mix
    accent: "text-rose-500",
    description: `Kanao Tsuyuri is a quiet but skilled swordswoman of the Demon Slayer Corps.
    She overcomes her past trauma and learns to follow her heart, joining Tanjiro
    and Nezuko in their battles.`,
  },
  {
    name: "Kochou Shinobu",
    role: "Insect Hashira",
    image: "/image/Shinobu.jpg",
    primary: "text-purple-400",
    shadow: "shadow-[0_0_40px_8px_rgba(102,51,153,0.75)]", // deep purple glow
    accent: "text-indigo-300",
    description: `Shinobu Kocho is the Insect Hashira, known for her calm smile and
    deadly poison techniques. Despite her gentle demeanor, she harbors deep hatred
    for demons after losing her sister.`,
  },
  {
    name: "Tomioka Giyuu",
    role: "Water Hashira",
    image: "/image/Giyuu.jpg",
    primary: "text-blue-900", // close to #003399
    shadow: "shadow-[0_0_40px_8px_rgba(0,51,153,0.8)]", // deep ocean blue
    accent: "text-blue-400",
    description: `Giyu Tomioka is the Water Hashira, a stoic swordsman who saved
    Tanjiro and Nezuko. He wields the Water Breathing style with unmatched precision
    and is respected for his composure and strength.`,
  },
  {
    name: "Akaza",
    role: "Upper Rank Three",
    image: "/image/Akaza.jpg",
    primary: "text-red-600",
    shadow: "shadow-[0_0_40px_8px_rgba(139,0,0,0.8)]", // blood red
    accent: "text-pink-400",
    description: `Akaza is an Upper Rank Three demon of the Twelve Kizuki.
    Fierce in combat, he respects only the strong and fights with destructive
    martial arts enhanced by his Blood Demon Art.`,
  },
  {
    name: "Douma",
    role: "Upper Rank Two",
    image: "/image/Douma.jpg",
    primary: "text-gray-200",
    shadow: "shadow-[0_0_40px_8px_rgba(255,255,255,0.7)]", // misty white glow
    accent: "text-sky-200",
    description: `Douma is the Upper Rank Two demon, outwardly cheerful but cruel at heart.
    He manipulates ice with his Blood Demon Art and is responsible for countless deaths,
    including members of the Demon Slayer Corps.`,
  },
  {
    name: "Kibutsuji Muzan",
    role: "Demon King",
    image: "/image/Muzan.jpg",
    primary: "text-red-700",
    shadow: "shadow-[0_0_50px_10px_rgba(139,0,0,0.9)]", // ominous red mist
    accent: "text-red-800",
    description: `Muzan Kibutsuji is the first demon and the Demon King.
    Cunning and merciless, he seeks to create a demon race that thrives
    under his rule, making him the ultimate enemy of the Demon Slayer Corps.`,
  },
];

const CharacterCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextCharacter = () => setIndex((prev) => (prev + 1) % characters.length);
  const prevCharacter = () =>
    setIndex((prev) => (prev - 1 + characters.length) % characters.length);

  return (
    <section className="min-h-screen w-full bg-black flex items-center justify-center px-6 py-12 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={characters[index].name}
          className={`w-full md:w-[80%] h-[85vh] grid md:grid-cols-2 items-center gap-8 
          bg-gradient-to-br from-black/90 to-gray-900/80 rounded-3xl overflow-hidden 
          ring-2 ring-gray-700 ${characters[index].shadow}`}
          initial={{ opacity: 0, x: 200, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -200, scale: 0.9 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >

          <motion.div
            className="relative h-[350px] md:h-full w-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src={characters[index].image}
              alt={characters[index].name}
              fill
              priority
              className="object-cover object-center rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
            />
          </motion.div>

          {/* Konten */}
          <motion.div
            className="p-8 md:p-12 text-left flex flex-col justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.h3
              className={`text-4xl md:text-5xl font-bold drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] ${characters[index].primary}`}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {characters[index].name.split(" ")[0]}{" "}
              <span className={characters[index].accent}>
                {characters[index].name.split(" ")[1]}
              </span>
            </motion.h3>

            <motion.h2
              className={`mt-6 text-2xl md:text-3xl font-semibold ${characters[index].primary}`}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {characters[index].role}
            </motion.h2>

            <motion.p
              className="mt-4 text-gray-300 text-lg leading-relaxed bg-black/40 p-4 rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {characters[index].description}
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Tombol Navigasi */}
      <motion.div
        className="absolute bottom-8 flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevCharacter}
          className="px-6 py-3 bg-gray-800/70 text-white rounded-xl shadow-lg hover:bg-gray-700 transition backdrop-blur-sm"
        >
          Prev
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextCharacter}
          className="px-6 py-3 bg-gray-800/70 text-white rounded-xl shadow-lg hover:bg-gray-700 transition backdrop-blur-sm"
        >
          Next
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CharacterCarousel;
