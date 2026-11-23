
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const benefits = [
  {
    image: "/images/benefit-knowledge.webp",
    title: "Menambah Pengetahuan",
    description:
      "Memperluas wawasan dan memahami informasi di dunia digital.",
  },
  {
    image: "/images/benefit-productivity.webp",
    title: "Lebih Produktif",
    description:
      "Memanfaatkan teknologi untuk mendukung aktivitas sehari-hari.",
  },
  {
    image: "/images/benefit-safety.webp",
    title: "Lebih Aman",
    description:
      "Melindungi data pribadi dan menghindari ancaman digital.",
  },
  {
    image: "/images/benefit-participation.webp",
    title: "Siap Berpartisipasi",
    description:
      "Menjadi bagian dari masyarakat digital yang positif.",
  },
];

const pillars = [
  {
    image: "/images/pillar-digital-skills.jpg",
    number: "01",
    title: "Digital Skills",
    description:
      "Kemampuan menggunakan teknologi digital secara efektif dan produktif.",
  },
  {
    image: "/images/pillar-digital-culture.jpg",
    number: "02",
    title: "Digital Culture",
    description:
      "Membangun budaya digital yang positif dan menghargai keberagaman.",
  },
  {
    image: "/images/pillar-digital-ethics.jpg",
    number: "03",
    title: "Digital Ethics",
    description:
      "Memahami etika dan tanggung jawab saat berinteraksi di dunia digital.",
  },
  {
    image: "/images/pillar-digital-safety.jpg",
    number: "04",
    title: "Digital Safety",
    description:
      "Menjaga keamanan diri, data, dan privasi ketika menggunakan teknologi.",
  },
];

const learningSteps = [
  {
    image: "/images/step-materi.webp",
    number: "01",
    title: "Pelajari Materi",
    description: "Kenali konsep dasar literasi digital melalui materi interaktif.",
  },
  {
    image: "/images/step-investigasi.webp",
    number: "02",
    title: "Investigasi Kasus",
    description: "Analisis berbagai kasus dan temukan informasi yang relevan.",
  },
  {
    image: "/images/step-latihan.webp",
    number: "03",
    title: "Uji Pemahaman",
    description: "Kerjakan latihan untuk mengukur pemahamanmu.",
  },
];

function SectionTitle({ label, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="inline-block rounded-full bg-blue-100 px-4 py-2 font-heading text-sm font-bold text-blue-700">
        {label}
      </span>

      <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-base leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="bg-white">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section
          id="beranda"
          className="relative bg-gradient-to-br from-sky-50 via-white to-blue-50"
        >
          <div className="mx-auto grid min-h-[460px] max-w-[1080px] items-center gap-8 px-5 py-12 md:grid-cols-2 md:py-14">
            <div>
              <span className="inline-flex rounded-full border border-blue-100 bg-white px-3 py-1.5 font-heading text-sm font-bold text-blue-700 shadow-sm">
                ✨ Selamat Datang di LiterAction
              </span>

              <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-slate-900 md:text-[40px]">
                Jadilah Pengguna Digital yang{" "}
                <span className="text-blue-600">Cerdas dan Bijak!</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg">
                Belajar memahami dunia digital, menyelidiki informasi, dan
                membangun kemampuan berpikir kritis melalui pengalaman belajar
                yang menyenangkan.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/register"
                  className="rounded-full bg-blue-600 px-7 py-3 font-heading font-bold !text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
                >
                  Mulai Belajar →
                </a>

                <a
                  href="#tentang"
                  className="rounded-full border-2 border-blue-600 bg-white px-7 py-3 font-heading font-bold text-blue-600 transition hover:bg-blue-50"
                >
                  Pelajari Lebih Lanjut
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-slate-600">
                <span>✓ Materi interaktif</span>
                <span>✓ Belajar mandiri</span>
                <span>✓ Berpikir kritis</span>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full bg-sky-100 blur-3xl md:h-96 md:w-96" />

              <img
                src="/images/hero-mascot.webp"
                alt="Maskot LiterAction sedang belajar menggunakan laptop"
                className="relative z-10 w-full max-w-[380px] object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        

        {/* WHAT IS DIGITAL LITERACY SECTION */}
        <section id="apa-itu" className="bg-white px-5 py-12 md:py-16">
          <div className="mx-auto grid max-w-[1080px] items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex items-center justify-center">
              <img
                src="/images/digital-literacy-boy.webp"
                alt="Pelajar sedang belajar menggunakan laptop"
                className="w-full max-w-[400px] object-contain"
              />
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-8 w-1.5 rounded-full bg-blue-600"></span>
                <h2 className="font-heading text-2xl font-extrabold text-slate-900 md:text-3xl">
                  Apa Itu Literasi Digital?
                </h2>
              </div>

              <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                Literasi digital adalah kemampuan untuk mencari, memahami,
                menilai, dan menggunakan informasi dari dunia digital secara
                cerdas, aman, dan bertanggung jawab.
              </p>

              
<a
  href="#pilar"
  style={{ color: "#ffffff" }}
  className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-heading text-sm font-bold transition hover:bg-blue-700"
>
  Baca Artikel <span>›</span>
</a>

            </div>
          </div>
        </section>



        {/* BENEFITS SECTION */}
        <section className="bg-sky-50 px-5 py-20">
          <div className="mx-auto max-w-[1080px]">
            <SectionTitle
              label="Manfaat Literasi Digital"
              title="Mengapa Literasi Digital Penting?"
              description="Kemampuan digital yang baik membantu kita menjalani aktivitas di era teknologi dengan lebih cerdas dan bertanggung jawab."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[22px] border-2 border-sky-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:border-sky-300 hover:shadow-lg"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="mx-auto mb-5 h-28 w-28 object-contain"
                  />

                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PILLARS SECTION */}
        
{/* PILLARS SECTION */}
<section id="pilar" className="bg-white px-5 py-20">
  <div className="mx-auto max-w-[1080px]">

    {/* Judul Section */}
    <div className="mb-12">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-8 w-1.5 rounded-full bg-blue-600"></span>
        <span className="font-heading text-sm font-bold uppercase tracking-wider text-blue-600">
          LiterAction
        </span>
      </div>

      <h2 className="font-heading text-3xl font-extrabold text-slate-900 md:text-4xl">
        Empat Pilar Literasi Digital
      </h2>

      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
        Bangun Kemampuan Digitalmu. Pelajari empat pilar utama untuk menjadi
        pengguna teknologi yang cakap, berbudaya, beretika, dan aman.
      </p>
    </div>

    {/* Pillar Cards */}
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

      {pillars.map((item) => (
        <article
          key={item.number}
          className="group flex flex-col gap-4 rounded-[20px] border border-sky-100 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg sm:flex-row sm:items-stretch sm:gap-4"
        >
          {/* Gambar */}
          <div className="relative min-h-[170px] overflow-hidden rounded-2xl bg-sky-50 sm:min-h-[175px] sm:w-[38%] sm:shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>

          {/* Informasi */}
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 py-2 sm:py-3">

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg bg-blue-50 px-3 py-1 text-xs font-extrabold text-blue-700">
                PILAR {item.number}
              </span>

              <span className="rounded-lg bg-sky-50 px-3 py-1 text-xs font-semibold text-slate-600">
                Literasi Digital
              </span>
            </div>

            <h3 className="font-heading text-xl font-extrabold text-slate-900 transition group-hover:text-blue-600">
              {item.title}
            </h3>

            <p className="text-sm leading-relaxed text-slate-600">
              {item.description}
            </p>

            <div className="mt-1 flex items-center gap-2 font-heading text-sm font-bold text-blue-600">
              <span>Pelajari Pilar</span>
              <span className="transition group-hover:translate-x-1">→</span>
            </div>

          </div>
        </article>
      ))}

    </div>
  </div>
</section>


        {/* LEARNING STEPS SECTION */}
        
      {/* LEARNING STEPS SECTION */}
      <section id="alur" className="bg-sky-50 px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[1080px]">
          {/* Judul section */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-8 w-1.5 rounded-full bg-blue-600"></span>
              <span className="font-heading text-sm font-bold uppercase tracking-wider text-blue-600">
                Alur Pembelajaran
              </span>
            </div>

            <h2 className="font-heading text-3xl font-extrabold text-slate-900 md:text-4xl">
              Mulai Perjalanan Belajarmu!
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Ikuti langkah sederhana untuk mengembangkan kemampuan literasi
              digital bersama LiterAction.
            </p>
          </div>

          {/* Kartu alur pembelajaran */}
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {/* Langkah 1 */}
            <article className="flex min-h-[125px] items-center gap-4 rounded-[20px] border-2 border-sky-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-sky-50">
                <img
                  src="/images/step-materi.webp"
                  alt="Ilustrasi mempelajari materi"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0 border-l-2 border-sky-100 pl-4">
                <span className="text-xs font-extrabold text-blue-600">01</span>
                <h3 className="font-heading text-base font-extrabold text-slate-900">
                  Pelajari Materi
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Kenali konsep dasar literasi digital melalui materi
                  interaktif.
                </p>
              </div>
            </article>

            {/* Panah penghubung */}
            <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white md:flex">
              →
            </div>

            {/* Langkah 2 */}
            <article className="flex min-h-[125px] items-center gap-4 rounded-[20px] border-2 border-sky-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-sky-50">
                <img
                  src="/images/step-investigasi.webp"
                  alt="Ilustrasi investigasi kasus"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0 border-l-2 border-sky-100 pl-4">
                <span className="text-xs font-extrabold text-blue-600">02</span>
                <h3 className="font-heading text-base font-extrabold text-slate-900">
                  Investigasi Kasus
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Analisis berbagai kasus dan temukan informasi yang relevan.
                </p>
              </div>
            </article>

            {/* Panah penghubung */}
            <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white md:flex">
              →
            </div>

            {/* Langkah 3 */}
            <article className="flex min-h-[125px] items-center gap-4 rounded-[20px] border-2 border-sky-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-sky-50">
                <img
                  src="/images/step-latihan.webp"
                  alt="Ilustrasi latihan soal"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0 border-l-2 border-sky-100 pl-4">
                <span className="text-xs font-extrabold text-blue-600">03</span>
                <h3 className="font-heading text-base font-extrabold text-slate-900">
                  Uji Pemahaman
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Kerjakan latihan untuk mengukur pemahamanmu.
                </p>
              </div>
            </article>
          </div>

          {/* Tombol ajakan */}
        
        </div>
      </section>


{/* ABOUT US SECTION */}


{/* ABOUT US SECTION */}
<section id="tentang" className="bg-white px-5 py-12 md:py-14">
  <div className="mx-auto max-w-[1080px]">
    <div className="mb-8">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-8 w-1.5 rounded-full bg-blue-600"></span>
        <span className="font-heading text-sm font-bold uppercase tracking-wider text-blue-600">
          Tentang Kami
        </span>
      </div>

      <h2 className="font-heading text-3xl font-extrabold text-slate-900 md:text-4xl">
        Mengenal LiterAction Lebih Dekat
      </h2>

      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
        LiterAction merupakan platform pembelajaran literasi digital
        yang dirancang untuk membantu pelajar memahami dunia digital,
        mengembangkan kemampuan berpikir kritis, serta menjadi pengguna
        teknologi yang cerdas, bijak, dan bertanggung jawab.
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      <article className="rounded-2xl border border-sky-100 bg-sky-50/60 p-5 transition hover:-translate-y-1 hover:shadow-md">
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-2xl">
          🎯
        </div>
        <h3 className="font-heading text-lg font-bold text-slate-900">
          Misi Kami
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Membantu pelajar meningkatkan kemampuan literasi digital
          melalui pembelajaran yang mudah dipahami dan menyenangkan.
        </p>
      </article>

      <article className="rounded-2xl border border-sky-100 bg-sky-50/60 p-5 transition hover:-translate-y-1 hover:shadow-md">
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-2xl">
          💡
        </div>
        <h3 className="font-heading text-lg font-bold text-slate-900">
          Cara Belajar
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Belajar melalui materi interaktif, investigasi kasus,
          dan latihan soal untuk mengasah pemahaman.
        </p>
      </article>

      <article className="rounded-2xl border border-sky-100 bg-sky-50/60 p-5 transition hover:-translate-y-1 hover:shadow-md">
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-2xl">
          🌐
        </div>
        <h3 className="font-heading text-lg font-bold text-slate-900">
          Empat Pilar
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Mengembangkan Digital Skills, Digital Culture,
          Digital Ethics, dan Digital Safety.
        </p>
      </article>
    </div>
  </div>
</section>


        {/* CTA SECTION */}
        <section className="bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-16">
          <div className="mx-auto max-w-3xl text-center">
            
<h2
  style={{ color: "#ffff" }}
  className="font-heading text-3xl font-extrabold md:text-4xl"
>
  Siap Menjadi Generasi Digital yang Cerdas?
</h2>

            <p className="mt-4 leading-relaxed text-blue-50">
              Mulai langkah kecilmu hari ini dan jadilah pengguna digital yang
              lebih kritis, bijak, dan bertanggung jawab.
            </p>

            <a
              href="/register"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-3 font-heading font-bold text-blue-700 shadow-md transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Daftar Sekarang
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;
