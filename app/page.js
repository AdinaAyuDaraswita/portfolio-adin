import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center p-10">
      {/* Hero Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-6 animate-pulse">
        Hallo, Aku Adin 👋
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-2xl max-w-2xl mb-10 opacity-90">
        Mahasiswa Informatika yang fokus mengembangkan kemampuan di bidang frontend development. Saya terbiasa menggunakan Next.js, React, dan Tailwind CSS untuk membangun tampilan web yang modern dan responsif.
      </p>

      {/* Buttons */}
      <div className="flex gap-6">
        <Link
          href="/projects"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-pink-500 font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          🚀 View Projects
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          📬 Contact Me
        </Link>
      </div>
    </section>
  );
}
