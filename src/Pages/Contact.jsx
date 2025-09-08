import React from "react";
import contact_img from "../assets/contact.jpeg";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7e428775-c488-4c43-8478-7cd6dabbfd89");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-900 via-black to-purple-900 animate-gradient-x"></div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center tracking-wider"
      >
        HOW TO REACH ME ✨
      </motion.h1>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row w-full max-w-5xl rounded-2xl shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20 overflow-hidden"
      >
        {/* Left Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex items-center justify-center"
        >
          <img
            className="w-full h-72 sm:h-80 md:h-full object-cover"
            src={contact_img}
            alt="contact-form"
          />
        </motion.div>

        {/* Right Form */}
        <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-10 text-white">
          <motion.form
            className="w-full max-w-md space-y-4"
            onSubmit={onSubmit}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Name */}
            <div>
              <label className="block text-gray-200 font-medium mb-1">
                Name :
              </label>
              <input
                className="w-full p-3 border border-gray-500 rounded-lg bg-black/30 text-white 
                           focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Enter your name..."
                type="text"
                name="name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-200 font-medium mb-1">
                Email :
              </label>
              <input
                className="w-full p-3 border border-gray-500 rounded-lg bg-black/30 text-white 
                           focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email..."
                type="email"
                name="email"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-200 font-medium mb-1">
                Message :
              </label>
              <textarea
                className="w-full p-3 border border-gray-500 rounded-lg bg-black/30 text-white 
                           focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none h-28"
                placeholder="Enter your message..."
                name="message"
                required
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59,130,246,0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold p-3 rounded-lg shadow-lg transition duration-300"
              type="submit"
            >
              Submit Form
            </motion.button>
          </motion.form>

          {/* Result Message */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-purple-400 font-medium"
          >
            {result}
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
