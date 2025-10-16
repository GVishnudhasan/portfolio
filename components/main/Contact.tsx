"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const loadingToast = toast.loading('Sending message...');
    
    try {
      const response = await fetch("https://formspree.io/f/mpwyowyw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.dismiss(loadingToast);
        toast.success('Message sent successfully!', {
          style: {
            border: '1px solid #7042f88b',
            padding: '16px',
            background: '#0a0a0a',
            color: '#fff',
            backdropFilter: 'blur(10px)',
          },
          iconTheme: {
            primary: '#7042f8',
            secondary: '#fff',
          },
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.dismiss(loadingToast);
        toast.error('Failed to send message. Please try again.', {
          style: {
            border: '1px solid #7042f88b',
            padding: '16px',
            background: '#0a0a0a',
            color: '#fff',
            backdropFilter: 'blur(10px)',
          },
        });
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      console.error("Error sending message:", error);
      toast.error('Failed to send message. Please try again.', {
        style: {
          border: '1px solid #7042f88b',
          padding: '16px',
          background: '#0a0a0a',
          color: '#fff',
          backdropFilter: 'blur(10px)',
        },
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 w-full relative z-20 pointer-events-auto" id="contact">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          style: {
            background: '#0a0a0a',
            color: '#fff',
            border: '1px solid #7042f88b',
            backdropFilter: 'blur(10px)',
          },
        }}
      />
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="w-full h-full flex flex-col items-center justify-center"
      >
        <h1 className="text-[55px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6">
          Get in Touch
        </h1>
        <p className="text-white/70 max-w-lg text-center px-4 mb-10">
          Feel free to reach out by filling the form below - I’m always open to discussing new projects, opportunities, or just saying hi!
        </p>
      </motion.div>
{/* 
      <div className="w-full max-w-xl mx-auto px-6 py-10 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
  <form onSubmit={handleSubmit} className="space-y-8 relative z-10"> */}
  <div className="w-full px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48">
  <div className="max-w-xl mx-auto py-10 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
    <form onSubmit={handleSubmit} className="space-y-8 px-6 relative z-10">

          <div>
            <label htmlFor="name" className="block mb-2 text-white font-mono text-sm cursor-text">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="What's your good name?"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg bg-[#1e1e2f] border border-[#2c2c45] px-5 py-3 text-white placeholder:text-[#555] focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-white font-mono text-sm cursor-text">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="What's your email address?"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg bg-[#1e1e2f] border border-[#2c2c45] px-5 py-3 text-white placeholder:text-[#555] focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-white font-mono text-sm cursor-text">
              Your Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              placeholder="What you want to say?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-lg bg-[#1e1e2f] border border-[#2c2c45] px-5 py-3 text-white placeholder:text-[#555] focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 font-semibold text-white shadow-lg hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
