"use client"

import {motion} from 'framer-motion'
import HomePage from '../../components/homepage'
import TrailerSection from '../../components/trailersection'
import SynopsisSection from '../../components/synopsis'
import CharacterSection from '../../components/characters'


export default function Page(){
  return(
    <div className='min-h-screen bg-black text-white overflow-hidden'>
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}
      className='flex flex-col'
      > 
        <HomePage/>
        <TrailerSection/>
        <SynopsisSection/>
        <CharacterSection/>
      </motion.div>
    </div>
    
  )
}