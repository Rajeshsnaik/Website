"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#355694] via-[#2DACE3] to-[#F6A25C] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl text-white flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {/* LEFT SECTION */}
        <div className="md:w-1/2 w-full space-y-6 text-center md:text-left">
          <motion.h1
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold drop-shadow-md"
          >
            Let’s Talk 👋
          </motion.h1>
          <motion.p
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/90 leading-relaxed"
          >
            We’d love to hear from you. Whether you have a question, project idea, 
            or just want to say hi — reach out below.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-2 text-white/90 font-medium"
          >
            <p>📍 Bengaluru, India</p>
            <p>📧 info@bluetechnology.com</p>
            <p>📞 +91 98765 43210</p>
          </motion.div>
        </div>

        {/* RIGHT SECTION - FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="md:w-1/2 w-full backdrop-blur-sm bg-white/10 rounded-2xl p-6 shadow-xl border border-white/20"
        >
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              required
              className="w-full bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              className="w-full bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              onChange={handleChange}
              required
              className="w-full bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-[#2DACE3] to-[#F6A25C] text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Send Message 🚀
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
