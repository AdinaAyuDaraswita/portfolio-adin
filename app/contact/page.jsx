export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-10 text-white">
      <h2 className="text-4xl font-extrabold mb-8 drop-shadow-lg">
        📬 Contact Me
      </h2>

      <form className="w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold mb-2">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
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
