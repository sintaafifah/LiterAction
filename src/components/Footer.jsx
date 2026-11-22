
function Footer() {
  return (
    <footer className="border-t-2 border-sky-100 bg-sky-50">
      <div className="mx-auto max-w-[1080px] px-5 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <img
              src="/images/literaction-logo.png"
              alt="LiterAction"
              className="mb-4 h-12 w-auto object-contain"
            />

            <p className="max-w-xs text-sm leading-relaxed text-slate-600">
              Platform pembelajaran literasi digital untuk membangun
              kemampuan, budaya, etika, dan keamanan di dunia digital.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold text-slate-900">
              Navigasi
            </h3>

            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#beranda" className="transition hover:text-blue-600">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang" className="transition hover:text-blue-600">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#pilar" className="transition hover:text-blue-600">
                  Pilar Literasi
                </a>
              </li>
              <li>
                <a href="#alur" className="transition hover:text-blue-600">
                  Alur Belajar
                </a>
              </li>
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-bold text-slate-900">
              LiterAction
            </h3>

            <p className="text-sm leading-relaxed text-slate-600">
              Belajar, Investigasi, Berpikir Kritis.
            </p>

            <p className="mt-3 text-sm text-slate-600">
              Mari menjadi pengguna digital yang cerdas dan bertanggung jawab.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-sky-200 pt-5 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} LiterAction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
