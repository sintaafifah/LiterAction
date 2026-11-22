import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { pillarsData, modulesData } from '../mockData';
import { getCompletedMaterials } from '../utils/progressStorage';

export default function ModulPage() {
  const [activeFilter, setActiveFilter] = useState('semua');
  const [menuOpen, setMenuOpen] = useState(false);
  const completedMaterials = useMemo(() => {
  return getCompletedMaterials();
}, []);

const getModuleProgress = (moduleId) => {
  const moduleInfo = modulesData.find(
    (item) => item.id === Number(moduleId)
  );

  const total = moduleInfo?.totalMateri || 0;

  const completed = completedMaterials.filter(
    (item) => item.moduleId === Number(moduleId)
  ).length;

  const percentage = total > 0
    ? Math.round((completed / total) * 100)
    : 0;

  return {
    completed,
    total,
    percentage,
  };
};

  // Filter modul berdasarkan pilar yang dipilih
  const filteredModules =
    activeFilter === 'semua'
      ? modulesData
      : modulesData.filter(
          (mod) => mod.categorySlug === activeFilter
        );

  // Navigasi sidebar
  const menuItems = [
    { label: 'Progres Belajar', icon: '◈' },
    { label: 'Aktivitas Terbaru', icon: '▤' },
  ];

  return (
    <div className="min-h-screen bg-[#f5f9ff] text-slate-700">

      {/* SIDEBAR DESKTOP */}
      <aside className="fixed left-0 top-0 z-20 hidden h-screen w-64 flex-col border-r border-sky-100 bg-white px-6 py-7 md:flex">

        <Link to="/" className="mb-10 flex items-center">
          <img
            src="/images/literaction-logo.png"
            alt="LiterAction"
            className="h-11 object-contain"
          />
        </Link>

        <p className="mb-3 px-3 text-xs font-bold uppercase tracking-widest text-slate-400">
          Menu Utama
        </p>

        <nav className="space-y-2">

          <Link
            to="/"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-500 transition hover:bg-sky-50 hover:text-sky-700"
          >
            <span>▦</span>
            Beranda
          </Link>

          <div className="flex items-center gap-3 rounded-xl bg-sky-50 px-4 py-3 font-semibold text-sky-700">
            <span>▣</span>
            Modul
          </div>

          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.label === 'Progres Belajar' ? '/progress' : '#'}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-500 transition hover:bg-sky-50 hover:text-sky-700"
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}

        </nav>

        <div className="mt-auto rounded-2xl bg-sky-50 p-4">
          <p className="text-sm font-bold text-sky-800">
            Terus Semangat!
          </p>

          <p className="mt-2 text-xs leading-relaxed text-slate-500">
            Setiap langkah kecil membawamu menjadi pengguna digital yang lebih cerdas.
          </p>

          <img
            src="/images/hero-mascot.webp"
            alt="Maskot LiterAction"
            className="mx-auto mt-3 h-24 object-contain"
          />
        </div>

        <Link
          to="/"
          className="mt-5 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:bg-red-50 hover:text-red-500"
        >
          ↩ Keluar
        </Link>
      </aside>


      {/* NAVBAR MOBILE */}
      <div className="sticky top-0 z-30 border-b border-sky-100 bg-white shadow-sm md:hidden">

        <div className="flex items-center justify-between px-5 py-3">

          <Link to="/">
            <img
              src="/images/literaction-logo.png"
              alt="LiterAction"
              className="h-9 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700"
          >
            {menuOpen ? '✕ Tutup' : '☰ Menu'}
          </button>

        </div>

        {menuOpen && (
          <div className="border-t border-sky-100 bg-white px-5 py-4">

            <p className="mb-3 px-3 text-xs font-bold uppercase tracking-widest text-slate-400">
              Menu Utama
            </p>

            <nav className="flex flex-col gap-2">

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-sky-50"
              >
                ▦ Beranda
              </Link>

              <div className="flex items-center gap-3 rounded-xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700">
                ▣ Modul
              </div>

              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.label === 'Progres Belajar' ? '/progress' : '#'}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-sky-50 hover:text-sky-700"
                >
                  {item.icon} {item.label}
                </Link>
              ))}

              <div className="my-1 border-t border-sky-100" />

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-red-500 hover:bg-red-50"
              >
                ↩ Keluar
              </Link>

            </nav>
          </div>
        )}
      </div>


      {/* KONTEN UTAMA */}
      <main className="min-w-0 md:ml-64">

        <div className="mx-auto max-w-[1250px] px-5 py-5 sm:px-7 lg:px-8">

          {/* HEADER */}
          <header className="mb-8 flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-slate-400">
                Ruang Belajar LiterAction
              </p>

              <h1 className="mt-1 text-2xl font-bold text-slate-800">
                Modul Pembelajaran
              </h1>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-700">
              U
            </div>

          </header>


          {/* BANNER MODUL */}
          <section className="relative mb-8 overflow-hidden rounded-[28px] bg-gradient-to-r from-sky-600 to-blue-500 px-7 py-8 text-white shadow-lg shadow-sky-100 sm:px-10">

            <div className="relative z-10 max-w-2xl">

              <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-sky-50">
                LITERACTION LEARNING
              </span>

              <h2 className="mt-4 text-2xl font-bold leading-snug text-white sm:text-3xl">
                Jelajahi Modul Literasi Digital!
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-relaxed text-sky-50 sm:text-base">
                Pelajari empat pilar literasi digital. Mulai dari hal kecil, bangun kebiasaan baik.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                <div className="rounded-xl border border-white/20 bg-white/15 px-5 py-3">
                  <p className="text-2xl font-bold">
                    {modulesData.length}
                  </p>
                  <p className="text-xs text-sky-100">
                    Total Modul
                  </p>
                </div>

                <div className="rounded-xl border border-white/20 bg-white/15 px-5 py-3">
                  <p className="text-2xl font-bold">
                    {pillarsData.filter((p) => p.id !== 'semua').length}
                  </p>
                  <p className="text-xs text-sky-100">
                    Pilar Digital
                  </p>
                </div>

              </div>
            </div>

            <div className="pointer-events-none absolute -right-8 -top-12 h-64 w-64 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute bottom-[-80px] right-24 h-48 w-48 rounded-full bg-white/10" />

          </section>


          {/* DAFTAR MODUL */}
          <section className="mb-9">

            <div className="mb-5">
              <h2 className="text-lg font-bold text-slate-800">
                Daftar Modul
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Pilih kategori pilar untuk menemukan materi pembelajaran.
              </p>
            </div>


            {/* FILTER PILAR */}
            <div className="mb-7 flex flex-wrap gap-2">

              {pillarsData.map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => setActiveFilter(pillar.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    activeFilter === pillar.id
                      ? 'bg-sky-600 text-white shadow-sm'
                      : 'border border-sky-100 bg-white text-slate-600 hover:bg-sky-50 hover:text-sky-700'
                  }`}
                >
                  {pillar.name}
                </button>
              ))}

            </div>


            {/* JUMLAH MODUL */}
            <p className="mb-4 text-sm text-slate-400">
              Menampilkan <span className="font-semibold text-slate-700">{filteredModules.length}</span> modul pembelajaran
            </p>


            {/* GRID KARTU MODUL */}
            {filteredModules.length > 0 ? (

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

                {filteredModules.map((mod) => (

                  <Link
                    to={`/modul/${mod.id}`}
                    key={mod.id}
                    className="relative z-10 flex cursor-pointer flex-col justify-between rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >

                    <div>

                      {/* ILUSTRASI */}
                      <div className="relative mb-5 flex h-36 w-full items-center justify-center rounded-xl border border-sky-100 bg-sky-50">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-600 text-2xl text-white shadow-sm">
                          📘
                        </div>

                        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-700 shadow-sm">
                          {mod.category}
                        </span>

                      </div>


                      {/* JUDUL DAN DESKRIPSI */}
                      <h3 className="mb-2 text-lg font-bold text-slate-800">
                        {mod.title}
                      </h3>

                      <p className="mb-5 text-sm leading-relaxed text-slate-500">
                        {mod.description}
                      </p>

                    </div>
                    

{/* PROGRESS MATERI */}
<div>
  <div className="mb-2 flex items-center justify-between text-xs">
    <span className="text-slate-400">
      {getModuleProgress(mod.id).completed} dari{' '}
      {getModuleProgress(mod.id).total} materi selesai
    </span>

    <span className="font-bold text-sky-600">
      {getModuleProgress(mod.id).percentage}%
    </span>
  </div>

  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
    <div
      className="h-full rounded-full bg-sky-500 transition-all duration-500"
      style={{
        width: `${getModuleProgress(mod.id).percentage}%`,
      }}
    />
  </div>
</div>
                  </Link>

                ))}

              </div>

            ) : (

              <div className="rounded-2xl border border-sky-100 bg-white px-6 py-12 text-center">

                <div className="mb-3 text-4xl">📚</div>

                <h3 className="font-bold text-slate-700">
                  Belum Ada Modul
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Belum tersedia modul untuk kategori ini.
                </p>

              </div>

            )}

          </section>


          {/* FOOTER */}
          <footer className="border-t border-sky-100 py-5 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} LiterAction. Belajar, Investigasi, Berpikir Kritis.
          </footer>

        </div>
      </main>

    </div>
  );
}