
import { Link } from "react-router-dom";

const pillars = [
  {
    number: "01",
    title: "Digital Skills",
    description: "Kecakapan menggunakan teknologi digital.",
    color: "bg-sky-500",
    light: "bg-sky-50",
    text: "text-sky-600",
    progress: 0,
  },
  {
    number: "02",
    title: "Digital Culture",
    description: "Budaya dan partisipasi di dunia digital.",
    color: "bg-indigo-400",
    light: "bg-indigo-50",
    text: "text-indigo-600",
    progress: 0,
  },
  {
    number: "03",
    title: "Digital Ethics",
    description: "Etika dan tanggung jawab digital.",
    color: "bg-blue-400",
    light: "bg-blue-50",
    text: "text-blue-600",
    progress: 0,
  },
  {
    number: "04",
    title: "Digital Safety",
    description: "Menjaga keamanan diri di internet.",
    color: "bg-cyan-500",
    light: "bg-cyan-50",
    text: "text-cyan-600",
    progress: 0,
  },
];

function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#f5f9ff] text-slate-700">
      {/* Sidebar */}
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
          <a
            href="#dashboard"
            className="flex items-center gap-3 rounded-xl bg-sky-50 px-4 py-3 font-semibold text-sky-700"
          >
            <span>▦</span>
            Dashboard
          </a>
          <a
            href="#pilar"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-500 transition hover:bg-sky-50 hover:text-sky-700"
          >
            <span>◈</span>
            Progres Belajar
          </a>
          <a
            href="#aktivitas"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-500 transition hover:bg-sky-50 hover:text-sky-700"
          >
            <span>▤</span>
            Aktivitas Terbaru
          </a>
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


{/* Navbar Mobile */}
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
      onClick={() => {
        document.getElementById("mobile-menu").classList.toggle("hidden");
      }}
      className="rounded-xl bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700"
    >
      ☰ Menu
    </button>
  </div>

  {/* Menu Mobile */}
  <div
    id="mobile-menu"
    className="hidden border-t border-sky-100 bg-white px-5 py-4"
  >
    <p className="mb-3 px-3 text-xs font-bold uppercase tracking-widest text-slate-400">
      Menu Utama
    </p>

    <nav className="flex flex-col gap-2">
      <a
        href="#dashboard"
        onClick={() => document.getElementById("mobile-menu").classList.add("hidden")}
        className="flex items-center gap-3 rounded-xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700"
      >
        ▦ Dashboard
      </a>

      <a
        href="#pilar"
        onClick={() => document.getElementById("mobile-menu").classList.add("hidden")}
        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-sky-50"
      >
        ◈ Progres Belajar
      </a>

      <a
        href="#aktivitas"
        onClick={() => document.getElementById("mobile-menu").classList.add("hidden")}
        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-sky-50"
      >
        ▤ Aktivitas Terbaru
      </a>

      <div className="my-1 border-t border-sky-100" />

      <Link
        to="/"
        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50"
      >
        ↩ Keluar
      </Link>
    </nav>
  </div>
</div>


      {/* Main Content */}
      <main id="dashboard" className="min-w-0 md:ml-64">
        <div className="mx-auto max-w-[1250px] px-5 py-5 sm:px-7 lg:px-8">

          {/* Header */}
          <header className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-400">
                Ruang Belajar LiterAction
              </p>
              <h1 className="mt-1 text-2xl font-bold text-slate-800">
                Dashboard
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-bold text-slate-700">
                  Pengguna
                </p>
                <p className="text-xs text-slate-400">
                  Pelajar LiterAction
                </p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-700">
                U
              </div>
            </div>
          </header>

          {/* Welcome Banner */}
          <section className="relative mb-8 overflow-hidden rounded-[28px] bg-gradient-to-r from-sky-600 to-blue-500 px-7 py-8 text-white shadow-lg shadow-sky-100 sm:px-10">
            <div className="relative z-10 max-w-[65%]">
              <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-sky-50">
                BELAJAR BERSAMA LITERACTION
              </span>

             <h2 className="mt-4 !text-white text-2xl font-bold leading-snug sm:text-3xl">
  Halo, Selamat Datang! 👋
</h2>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-sky-50 sm:text-base">
                Siap meningkatkan kemampuan literasi digitalmu?
                Yuk, mulai belajar dan jadilah generasi digital yang cerdas.
              </p>

              <a
                href="#pilar"
                className="mt-6 inline-flex rounded-xl border border-white/30 bg-blue-800/30 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800/50"
              >
                Lihat Progres Belajar
              </a>
            </div>

            <div className="pointer-events-none absolute -right-8 -top-12 h-64 w-64 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute bottom-[-80px] right-24 h-48 w-48 rounded-full bg-white/10" />

            <img
              src="/images/hero-mascot.webp"
              alt="Maskot LiterAction"
              className="absolute bottom-0 right-3 z-10 hidden h-52 w-48 object-contain sm:block"
            />
          </section>

          {/* Statistics */}
          <section className="mb-9">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-slate-800">
                Ringkasan Belajarmu
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Pantau perkembangan aktivitas belajarmu.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-500">Materi Dipelajari</p>
                  <span className="rounded-xl bg-sky-50 p-2 text-lg">📚</span>
                </div>
                <p className="mt-4 text-3xl font-bold text-slate-800">0</p>
                <p className="mt-1 text-xs text-slate-400">
                  Materi telah diselesaikan
                </p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-500">Latihan Selesai</p>
                  <span className="rounded-xl bg-indigo-50 p-2 text-lg">✍️</span>
                </div>
                <p className="mt-4 text-3xl font-bold text-slate-800">0</p>
                <p className="mt-1 text-xs text-slate-400">
                  Latihan telah dikerjakan
                </p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-500">Progres Belajar</p>
                  <span className="rounded-xl bg-cyan-50 p-2 text-lg">📈</span>
                </div>
                <p className="mt-4 text-3xl font-bold text-slate-800">0%</p>
                <p className="mt-1 text-xs text-slate-400">
                  Progres keseluruhan
                </p>
              </div>
            </div>
          </section>

          {/* Pillar Progress */}
          <section id="pilar" className="mb-9">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-slate-800">
                Progres Empat Pilar Literasi Digital
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Kenali empat kemampuan utama yang akan kamu pelajari.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${pillar.light} ${pillar.text} font-bold`}>
                      {pillar.number}
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${pillar.light} ${pillar.text}`}>
                      {pillar.progress}%
                    </span>
                  </div>

                  <h3 className="mt-4 font-bold text-slate-800">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {pillar.description}
                  </p>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${pillar.color}`}
                      style={{ width: `${pillar.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>


{/* Rekomendasi Belajar */}
<section className="mb-9">
  <div className="mb-4">
    <h2 className="text-lg font-bold text-slate-800">
      Rekomendasi Belajar
    </h2>
    <p className="mt-1 text-sm text-slate-400">
      Mulai tingkatkan kemampuan literasi digitalmu.
    </p>
  </div>

  <div className="grid gap-4 sm:grid-cols-3">
    <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-2xl">
        📚
      </div>
      <h3 className="mt-4 font-bold text-slate-800">
        Pelajari Materi
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">
        Perluas pengetahuanmu melalui materi literasi digital.
      </p>
      <span className="mt-4 inline-block text-xs font-semibold text-sky-600">
        Segera hadir
      </span>
    </div>

    <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
        🔎
      </div>
      <h3 className="mt-4 font-bold text-slate-800">
        Investigasi Kasus
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">
        Asah kemampuan berpikir kritis melalui kasus digital.
      </p>
      <span className="mt-4 inline-block text-xs font-semibold text-indigo-600">
        Segera hadir
      </span>
    </div>

    <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-2xl">
        ✍️
      </div>
      <h3 className="mt-4 font-bold text-slate-800">
        Latihan Soal
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">
        Uji pemahamanmu melalui latihan soal interaktif.
      </p>
      <span className="mt-4 inline-block text-xs font-semibold text-cyan-600">
        Segera hadir
      </span>
    </div>
  </div>
</section>



          {/* Recent Activity */}
          <section id="aktivitas" className="mb-8">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-slate-800">
                Aktivitas Terbaru
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Catatan kegiatan belajarmu akan muncul di sini.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-white px-6 py-10 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-2xl">
                📖
              </div>
              <h3 className="mt-4 font-bold text-slate-700">
                Belum Ada Aktivitas
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
                Aktivitas materi, investigasi, dan latihan yang kamu kerjakan
                nantinya akan tercatat di bagian ini.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-sky-100 py-5 text-center text-xs text-slate-400">
            © 2026 LiterAction. Belajar, Investigasi, Berpikir Kritis.
          </footer>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
