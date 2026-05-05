"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi sederhana
    if (!formData.name || !formData.email || !formData.message) {
      alert("Semua field wajib diisi!");
      return;
    }
    // Jika lolos validasi
    alert("pesan berhasil dikirim ✅");
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-10 text-white">
      <h2 className="text-4xl font-extrabold mb-8 drop-shadow-lg">
        📬 Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold mb-2">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message..."
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 font-bold text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          Send Message 🚀
        </button>
      </form>
    </section>
  );
}
