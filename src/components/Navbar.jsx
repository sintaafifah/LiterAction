
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Pilar Literasi", href: "#pilar" },
    { label: "Alur Belajar", href: "#alur" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-2 border-sky-100 bg-white">
      <nav className="mx-auto flex min-h-16 max-w-[1080px] items-center justify-between px-5 py-3">
        {/* Logo */}
        <a href="#beranda" className="flex shrink-0 items-center gap-2">
          <img
            src="/images/literaction-logo.png"
            alt="LiterAction"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Menu Desktop */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-heading text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Tombol Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-full border border-blue-600 px-5 py-2 font-heading text-sm font-bold text-blue-600 transition hover:bg-blue-50"
          >
            Masuk
          </Link>

          <Link
            to="/register"
            className="rounded-full bg-blue-600 px-5 py-2 font-heading text-sm font-bold !text-white shadow-sm transition hover:bg-blue-700"
          >
            Daftar
          </Link>
        </div>

        {/* Tombol Mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-2xl text-blue-600 hover:bg-blue-50 md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="border-t border-sky-100 bg-white px-5 py-4 shadow-md md:hidden">
          <div className="mx-auto flex max-w-[1080px] flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-heading text-sm font-semibold text-slate-700 hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}

            <div className="flex gap-3 pt-2">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-full border border-blue-600 px-4 py-2 text-center font-heading text-sm font-bold text-blue-600"
              >
                Masuk
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-full bg-blue-600 px-4 py-2 text-center font-heading text-sm font-bold text-white"
              >
                Daftar
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
