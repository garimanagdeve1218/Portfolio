import { motion } from "framer-motion";

const DownloadCV = () => {
    // URL to your CV file
    const cvUrl = 'https://drive.google.com/file/d/1Kr8SY17Mzw3GlT2BygLy4-Sur9upoK4-/view?usp=drive_link'; // Replace with the actual path to your CV
  
    return (
        <div className="flex justify-center">
      <motion.a 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1}}
      href={cvUrl}
      target="_blank" // Ensures the link opens in a new tab
      rel="noopener noreferrer"
      download 
      className="inline-flex items-center justify-center px-8 py-3 text-lg text-white bg-pink-500 rounded-md shadow-2xl hover:bg-pink-600 transition-colors">
      
        Download CV
      </motion.a>
    </div>
    );
  };
  
  export default DownloadCV;