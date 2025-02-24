import { FaHtml5 } from "react-icons/fa";
import { RiReactjsLine } from 'react-icons/ri'
import { MdCss } from "react-icons/md"; 
import { FaJsSquare } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { motion} from 'framer-motion';


const iconVariants = (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    },
});
const Technologies = () => {
  return (
   <div className="border-b border-neutral-800 pb-24">
    <motion.h1
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:-100}}
    transition={{duration:1}}
    className="my-20 text-center text-4xl ">TECHNOLOGIES</motion.h1>
    <motion.div
    whileInView={{opacity:1, x:0}}
    initial={{opacity:0, x:-100}}
    className="flex flex-wrap justify-center items-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className='text-7xl text-orange-400' />
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <MdCss className='text-7xl ' />
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJsSquare className='text-7xl text-yellow-300' />
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNode className='text-7xl text-green-500' />
        </motion.div>
        </motion.div>
   </div>
  )
}

export default Technologies