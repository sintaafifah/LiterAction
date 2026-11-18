
import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
  e.preventDefault();

  if (!name.trim()) {
    setError("Nama lengkap wajib diisi.");
    return;
  }

  if (!email.trim()) {
    setError("Email wajib diisi.");
    return;
  }

  if (!password.trim()) {
    setError("Password wajib diisi.");
    return;
  }

  if (!confirmPassword.trim()) {
    setError("Konfirmasi password wajib diisi.");
    return;
  }

  const emailPattern = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");

  if (!emailPattern.test(email)) {
    setError("Format email tidak valid.");
    return;
  }

  if (password.length < 8) {
    setError("Password minimal 8 karakter.");
    return;
  }

  if (password !== confirmPassword) {
    setError("Konfirmasi password tidak sama.");
    return;
  }

  setError("");
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="mx-auto grid min-h-screen max-w-[960px] items-center gap-6 px-5 py-3 md:grid-cols-2 md:px-8">

        {/* Ilustrasi */}
        <div className="hidden flex-col items-center justify-center text-center md:flex">
          <img
            src="/images/literaction-logo.png"
            alt="Logo LiterAction"
            className="mb-4 h-12 w-auto object-contain"
          />

          <img
            src="/images/hero-mascot.webp"
            alt="Maskot LiterAction"
            className="w-full max-w-[240px] object-contain"
          />

          <h2 className="mt-3 font-heading text-xl font-extrabold text-slate-900">
            Bergabung Bersama Kami!
          </h2>

          <p className="mt-2 max-w-sm text-xs leading-relaxed text-slate-600">
            Mulai perjalananmu menjadi generasi digital yang cerdas,
            kritis, dan bertanggung jawab bersama LiterAction.
          </p>
        </div>

        {/* Form Register */}
        <div className="flex justify-center">
          <div className="w-full max-w-[380px] rounded-[24px] border-2 border-sky-100 bg-white p-5 shadow-xl shadow-blue-100/50">

            <div className="mb-5 text-center md:text-left">
              <div className="mb-3 flex justify-center md:hidden">
                <img
                  src="/images/literaction-logo.png"
                  alt="Logo LiterAction"
                  className="h-10 w-auto object-contain"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Selamat Datang
              </span>

              <h1 className="mt-1 font-heading text-2xl font-extrabold text-slate-900">
                Buat Akun Baru
              </h1>

              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                Daftarkan dirimu dan mulai belajar bersama LiterAction.
              </p>
            </div>

            <form onSubmit={handleRegister}>

              {/* Nama Lengkap */}
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Nama Lengkap
                </label>

                <input
  id="name"
  type="text"
  placeholder="Masukkan nama lengkap"
  autoComplete="name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  required
  className="w-full rounded-xl border-2 border-sky-100 px-3 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
/>
              </div>

              {/* Email */}
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Email
                </label>

                <input
  id="email"
  type="email"
  placeholder="nama@email.com"
  autoComplete="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  className="w-full rounded-xl border-2 border-sky-100 px-3 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
/>
              </div>

              {/* Password */}
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="relative">
                  <input
  id="password"
  type={showPassword ? "text" : "password"}
  placeholder="Buat password"
  autoComplete="new-password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
  className="w-full rounded-xl border-2 border-sky-100 px-3 py-2.5 pr-10 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
/>

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Sembunyikan password" : "Lihat password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3l18 18" />
                        <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                        <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.5 4.5 9.5 7a11.8 11.8 0 0 1-3 4.2" />
                        <path d="M6.2 6.2A12.5 12.5 0 0 0 2.5 12c1 2.5 4.5 7 9.5 7a10.8 10.8 0 0 0 3.1-.5" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Konfirmasi Password */}
              <div className="mb-5">
                <label
                  htmlFor="confirmPassword"
                  className="mb-1.5 block text-xs font-semibold text-slate-700"
                >
                  Konfirmasi Password
                </label>

                <div className="relative">
                  <input
  id="confirmPassword"
  type={showConfirmPassword ? "text" : "password"}
  placeholder="Masukkan ulang password"
  autoComplete="new-password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  required
  className="w-full rounded-xl border-2 border-sky-100 px-3 py-2.5 pr-10 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
/>

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? "Sembunyikan password" : "Lihat password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600"
                  >
                    {showConfirmPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3l18 18" />
                        <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                        <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.5 4.5 9.5 7a11.8 11.8 0 0 1-3 4.2" />
                        <path d="M6.2 6.2A12.5 12.5 0 0 0 2.5 12c1 2.5 4.5 7 9.5 7a10.8 10.8 0 0 0 3.1-.5" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

{error && (
  <p className="mb-4 text-xs font-medium text-red-600">
    {error}
  </p>
)}

              {/* Tombol Daftar */}
              <button
                type="submit"
                className="w-full rounded-full bg-blue-600 px-5 py-3 text-sm font-heading font-bold !text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Daftar Sekarang
              </button>

            </form>

            {/* Link Login */}
            <p className="mt-5 text-center text-xs text-slate-600">
              Sudah punya akun?{" "}
              <Link
                to="/login"
                className="font-bold text-blue-600 hover:text-blue-800"
              >
                Masuk
              </Link>
            </p>

            {/* Kembali ke Beranda */}
            <div className="mt-4 border-t border-sky-100 pt-4 text-center">
              <Link
                to="/"
                className="text-xs font-medium text-slate-500 transition hover:text-blue-600"
              >
                ← Kembali ke Beranda
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default RegisterPage;
