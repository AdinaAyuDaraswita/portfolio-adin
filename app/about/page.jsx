import "./about.css";
import { FaGraduationCap } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";


export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-10">
      <h2 className="title">Tentang Saya ✨</h2>
      <p className="desc">
        Nama saya Adina Ayu Daraswita, saya adalah mahasiswa Informatika yang sedang mendalami bidang frontend development. 
        Saat ini saya fokus mempelajari penggunaan Next.js dan Tailwind CSS untuk membangun tampilan web yang modern, responsif, dan user-friendly. 
        Saya memiliki minat dalam mengembangkan antarmuka yang tidak hanya menarik secara visual, tetapi juga mudah digunakan oleh pengguna.
      </p>

      {/* Timeline */}
      <div className="timeline mt-10 space-y-6">
        <div className="timeline-item">
          <FaGraduationCap className="text-2xl text-yellow-400" />
          <div>
            <h3 className="item-title">Pendidikan</h3>
            <p className="item-desc">Mahasiswa Informatika (Sedang menempuh pendidikan)</p>
          </div>
        </div>

        <div className="timeline-item">
          <FaBriefcase className="text-2xl text-green-400" />
          <div>
            <h3 className="item-title">Pengalaman</h3>
            <p className="item-desc">Mengerjakan berbagai project frontend berbasis web, termasuk pembuatan website portfolio menggunakan Next.js dan Tailwind CSS.</p>
          </div>
        </div>

        <div className="timeline-item">
          <FaCode className="text-2xl text-pink-400" />
          <div>
            <h3 className="item-title">Skill</h3>
            <p className="item-desc">React, Next.js, Tailwind, UI/UX Design</p>
          </div>
        </div>
      </div>
    </section>
  );
}
