import { BIO } from "../constants";
import { motion } from "framer-motion";

const Bio = () => {
  return (
    <section className="flex max-w-4xl flex-col items-center text-center 
    gap-12 pt-20 mx-auto" id="bio">
        <motion.h2 
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1}}
        className="mb-12 mt-20 text-center text-4xl 
        font-semibold hover:text-pink-400 text-pink-600">
        Bio
        </motion.h2>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8, delay:0.2}}>
            {BIO.map((bio, index) => (
                <motion.p 
                initial={{opacity:0, x:-20}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.8, delay:index*0.5}}
                key={index} 
                className="mb-4 text-lg lg:text-xl">
                    {bio}
                </motion.p>
            ))}
        </motion.div>
    </section>
) 
}

export default Bio