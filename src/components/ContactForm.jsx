import { useState } from "react";
import emailjs from "emailjs-com";
import { FiSend } from "react-icons/fi";
import { Toaster, toast } from "react-hot-toast";
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name:"",
        email: "",
        message:"",
    })

    const[errors, setErrors] = useState({});
    const[isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const validate = () => {
        let errors = {};
        if(!formData.name) errors.name = "Name is required";
        if(!formData.email){
            errors.email = "Email is required";
        }else if(!/\S+@\S+\.\S+/.test(formData.email)) {
                errors.email = "Email is invalid";
            }
            if(!formData.message) errors.message = "Message is required";
            return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSending(true);

            emailjs.send(
                "service_6nzf61p",
                "template_erymmyl",
                formData,
                "guk5qKOhgPSzDXQ2Z",
            )
            .then((response) => {
                toast.success("Message sent successfully");
                setFormData({name: "", email: "", message: ""});
            })
            .catch((error)=> {
                console.log("FAILED...", error);
                toast.error("Failed to send message. Please try again later.");
            }) 
            .finally(()=> {
                setIsSending(false);
            })    
        }
    }
  return (
    <div className="p-4 lg:w-3/4 mx-auto" id="contact" >
        <Toaster />
        <motion.h2 
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1}}
        className="mb-12 mt-20 text-center text-4xl 
        font-semibold  hover:text-pink-400 text-pink-600">Let's Connect</motion.h2>
        <motion.form 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ duration:0.8, delay:0.7}}
        onSubmit={handleSubmit}>
            <div className="mb-4 flex space-x-4 w-full">
            <div className="w-full lg:flex lg:space-x-4">
            {/* Name Field */}
                <div className="lg:w-1/2">
                <input type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                className="mb-8 w-full appreance-none rounded-lg
                border border-stone-50/30 bg-transparent
                px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"/>
                {errors.name &&(
                    <motion.p 
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    className="text-sm text-rose-800">{errors.name}
                    </motion.p>
                )}
                </div>
                

                {/* Email Field */}
                <div className="lg:w-1/2">
                <input type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                className="mb-8 w-full appreance-none rounded-lg
                border border-stone-50/30 bg-transparent
                px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"/>
                {errors.email &&(
                    <motion.p 
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    className="text-sm text-rose-800">{errors.email}
                    </motion.p>
                )}
                </div>
                </div>
</div>
                <div className="mb-4">
                <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Message"
                onChange={handleChange}
                className="mb-8 w-full appreance-none rounded-lg
                border border-stone-50/30 bg-transparent
                px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
                rows="6"
                ></textarea>

                {errors.message &&(
                    <motion.p 
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    className="text-sm text-rose-800">{errors.message}
                    </motion.p>
                )}
                </div>
                <button type="submit" className={`mb-8 w-full rounded border
                    border-stone-50/30 bg-stone-200 px--4 py-2 text-sm
                    font-semibold text-stone-900 hover:bg-stone-300
                    ${isSending ? "cursor-not-allowed opacity-50 " : ""
                    }`}
                        disabled={isSending}
                        >
                            <div className="flex items-center justify-center gap-2">
                                {isSending ? "Sending..." : "Send"}
                                <FiSend/>
                            </div>
                    </button>

            
        </motion.form>
    </div>
  )
}

export default ContactForm