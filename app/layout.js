import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Portfolio Adina Ayu Daraswita",
  description: "Portofolio modern dengan Next.js & Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-900 text-white">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
        <footer className="text-center py-6 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Portfolio Adin. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
