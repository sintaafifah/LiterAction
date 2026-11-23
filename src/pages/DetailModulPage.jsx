import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { modulesData } from '../mockData';
import { materiData } from '../data/materiData';
import { getCompletedMaterials } from '../utils/progressStorage';

export default function DetailModulPage() {
  const { id } = useParams();

  const module = modulesData.find(
    (item) => String(item.id) === id
  );

  if (!module) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f9ff] p-5">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800">
            Modul Tidak Ditemukan
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Modul yang kamu cari belum tersedia.
          </p>
          <Link
            to="/modul"
            className="mt-5 inline-block rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white"
          >
            Kembali ke Daftar Modul
          </Link>
        </div>
      </div>
    );
  }

  const materials = materiData[module.id] || [];

  const completedMaterials = useMemo(() => {
  return getCompletedMaterials();
}, []);

const completedCount = materials.filter((material) =>
  completedMaterials.some(
    (item) =>
      item.moduleId === Number(id) &&
      item.materialId === Number(material.id)
  )
).length;

const progressPercentage = materials.length > 0
  ? Math.round((completedCount / materials.length) * 100)
  : 0;
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

          <Link
            to="/modul"
            className="flex items-center gap-3 rounded-xl bg-sky-50 px-4 py-3 font-semibold text-sky-700"
          >
            <span>▣</span>
            Modul
          </Link>

          <Link
            to="/progress"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-500 transition hover:bg-sky-50 hover:text-sky-700"
          >
            <span>◈</span>
            Progres Belajar
          </Link>

          <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400">
            <span>▤</span>
            Aktivitas Terbaru
          </div>
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
      <div className="sticky top-0 z-30 border-b border-sky-100 bg-white px-5 py-3 md:hidden">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src="/images/literaction-logo.png"
              alt="LiterAction"
              className="h-9 w-auto object-contain"
            />
          </Link>

          <Link
            to="/modul"
            className="rounded-xl bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700"
          >
            ← Daftar Modul
          </Link>
        </div>
      </div>

      {/* KONTEN UTAMA */}
      <main className="min-w-0 md:ml-64">
        <div className="mx-auto max-w-[1250px] px-5 py-5 sm:px-7 lg:px-8">

          {/* HEADER */}
          <header className="mb-8">
            <p className="text-sm font-medium text-slate-400">
              Ruang Belajar LiterAction
            </p>
            <h1 className="mt-1 text-2xl font-bold text-slate-800">
              Detail Modul
            </h1>
          </header>

          {/* TOMBOL KEMBALI */}
          <Link
            to="/modul"
            className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-900"
          >
            ← Kembali ke Daftar Modul
          </Link>

          {/* INFORMASI MODUL */}
          <section className="mb-8 rounded-[28px] bg-gradient-to-r from-sky-600 to-blue-500 p-7 text-white shadow-lg shadow-sky-100 sm:p-10">

            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-50">
              {module.category}
            </span>

            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              {module.title}
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-sky-50 sm:text-base">
              {module.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-xl border border-white/20 bg-white/15 px-5 py-3">
                <p className="text-2xl font-bold">
                  {materials.length}
                </p>
                <p className="text-xs text-sky-100">
                  Materi Pembelajaran
                </p>
              </div>

              <div className="rounded-xl border border-white/20 bg-white/15 px-5 py-3">
  <p className="text-2xl font-bold">
    {progressPercentage}%
  </p>
  <p className="text-xs text-sky-100">
    Progres Belajar
  </p>
</div>
            </div>
          </section>

          {/* DAFTAR MATERI */}
          <section className="mb-9">

            <div className="mb-5">
              <h2 className="text-lg font-bold text-slate-800">
                Materi Pembelajaran
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Pelajari materi berikut secara berurutan untuk memahami topik ini.
              </p>
            </div>
            
            <div className="space-y-4">
            {materials.length > 0 ? (
                materials.map((material, index) => (
                <Link
                    key={material.id}
                    to={`/modul/${module.id}/materi/${material.id}`}
                    className="flex flex-col gap-4 rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md sm:flex-row sm:items-center"
                >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 font-bold text-sky-700">
                    {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-sky-600">
                        Materi {index + 1}
                    </p>

                    <h3 className="mt-1 font-bold text-slate-800">
                        {material.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                        {material.description}
                    </p>
                    </div>

                    <span className="rounded-xl bg-sky-50 px-5 py-2.5 text-center text-sm font-semibold text-sky-700">
                    Pelajari →
                    </span>
                </Link>
                ))
            ) : (
                <div className="rounded-2xl border border-sky-100 bg-white p-6 text-center">
                <p className="font-semibold text-slate-700">
                    Materi Sedang Disiapkan
                </p>
                <p className="mt-2 text-sm text-slate-400">
                    Materi untuk modul ini akan segera tersedia.
                </p>
                </div>
            )}
            </div>

          </section>

            {/* Tombol Investigasi khusus Modul 7 */}
            {module.id === 7 && (
            <div className="mt-8 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-blue-50 p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wide text-sky-600">
                    Investigation Lab
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-slate-800">
                    Siap Menjadi Detektif Digital?
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                    Uji kemampuanmu mengenali tanda-tanda phishing melalui
                    skenario kasus dan pemeriksaan bukti.
                    </p>
                </div>

                <Link
                    to={`/modul/${module.id}/investigasi`}
                    className="shrink-0 rounded-xl bg-sky-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-sky-700"
                >
                    Mulai Investigasi →
                </Link>
                </div>
            </div>
            )}

          {/* FOOTER */}
          <footer className="border-t border-sky-100 py-5 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} LiterAction. Belajar, Investigasi, Berpikir Kritis.
          </footer>

        </div>
      </main>
    </div>
  );
}