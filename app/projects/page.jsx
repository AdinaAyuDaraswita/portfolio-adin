import { FaLaptopCode, FaMobile, FaPaintbrush } from "react-icons/fa6";

export default function Projects() {
  const projects = [
    {
      title: "Web Portfolio",
      desc: "Website portfolio pribadi menggunakan Next.js dan Tailwind CSS dengan fitur navigasi, halaman dinamis, dan form kontak.",
      icon: <FaLaptopCode className="text-3xl text-yellow-400" />,
    },
    {
      title: "Dashboard Visualisasi Data",
      desc: "Project analisis data penjualan coffee shop yang menampilkan informasi dalam bentuk grafik dan dashboard interaktif.",
      icon: <FaMobile className="text-3xl text-green-400" />,
    },
    {
      title: "UI Design",
      desc: "Desain dashboard interaktif dengan Figma",
      icon: <FaPaintbrush className="text-3xl text-pink-400" />,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 p-10 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-10 drop-shadow-lg">
        🚀 My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {project.icon}
              <h3 className="text-2xl font-bold">{project.title}</h3>
            </div>
            <p className="opacity-90">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
