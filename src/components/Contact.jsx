import { CONTACT } from "../assets"
import {motion} from 'framer-motion';
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1}}
        className="my-10 text-center text-4xl">GET IN TOUCH</motion.h2>
        <motion.div
       
        className="text-center tracking-tighter">
            <motion.p 
             whileInView={{opacity:1, x:0}}
             initial={{opacity:0, x:-100}}
             transition={{duration:1}}
            className="my-4">{CONTACT.address}</motion.p>
            <p className="my-4 ">{CONTACT.phone}</p>
            <motion.a
             whileInView={{opacity:1, x:0}}
             initial={{opacity:0, x:100}}
             transition={{duration:1}}
            href="#" className="border-b">{CONTACT.email}</motion.a>
        </motion.div>
        
        
        
        </div>
        


)   
}

export default Contact