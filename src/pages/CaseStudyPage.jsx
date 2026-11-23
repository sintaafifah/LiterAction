
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { modulesData } from '../mockData';
import { saveProgress } from '../utils/progressStorage';

const evidenceData = [
  {
    id: 1,
    title: 'Alamat pengirim',
    detail: 'LayananAkun <verifikasi@layanan-akun.example>',
    clue: 'Alamat pengirim tidak menggunakan domain resmi layanan yang diklaim.',
    isCorrect: true,
  },
  {
    id: 2,
    title: 'Tautan dalam pesan',
    detail: 'http://verifikasi-akun.example',
    clue: 'Alamat tautan terlihat tidak berkaitan dengan situs resmi.',
    isCorrect: true,
  },
  {
    id: 3,
    title: 'Isi pesan',
    detail: 'Akun Anda akan diblokir dalam waktu 24 jam. Segera lakukan verifikasi!',
    clue: 'Pesan menggunakan ancaman dan tekanan waktu agar penerima segera bertindak.',
    isCorrect: true,
  },
  {
    id: 4,
    title: 'Permintaan informasi',
    detail: 'Masukkan kata sandi dan kode OTP untuk mengaktifkan kembali akun.',
    clue: 'Pesan meminta informasi rahasia berupa kata sandi dan kode OTP.',
    isCorrect: true,
  },
  {
    id: 5,
    title: 'Salam pembuka',
    detail: 'Halo, pelanggan yang terhormat.',
    clue: 'Salam pembuka yang umum tidak otomatis menunjukkan adanya phishing.',
    isCorrect: false,
  },
  {
    id: 6,
    title: 'Tampilan pesan',
    detail: 'Pesan menggunakan logo dan warna yang menyerupai layanan resmi.',
    clue: 'Tampilan yang menyerupai merek resmi tidak membuktikan bahwa pesan tersebut asli.',
    isCorrect: false,
  },
];

export default function CaseStudyPage() {
  const { id } = useParams();
  const module = modulesData.find((item) => String(item.id) === id);

  const [selectedEvidence, setSelectedEvidence] = useState([]);
  const [decision, setDecision] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleEvidence = (evidenceId) => {
    setSelectedEvidence((previous) =>
      previous.includes(evidenceId)
        ? previous.filter((item) => item !== evidenceId)
        : [...previous, evidenceId]
    );
  };

  const handleSubmit = () => {
  if (selectedEvidence.length === 0 || !decision) {
    alert('Silakan pilih bukti dan kesimpulan terlebih dahulu.');
    return;
  }

  saveProgress({
    moduleId: Number(id),
    type: 'investigasi',
    score: totalScore,
  });

  setSubmitted(true);
};

  
const correctEvidence = evidenceData
  .filter((item) => item.isCorrect)
  .map((item) => item.id);

const wrongEvidence = evidenceData
  .filter((item) => !item.isCorrect)
  .map((item) => item.id);

const correctCount = selectedEvidence.filter((item) =>
  correctEvidence.includes(item)
).length;

const wrongCount = selectedEvidence.filter((item) =>
  wrongEvidence.includes(item)
).length;

const evidenceScore = Math.max(
  0,
  Math.round(
    (correctCount / correctEvidence.length) * 80 -
    (wrongCount / wrongEvidence.length) * 80
  )
);

const decisionScore = decision === 'phishing' ? 20 : 0;

const totalScore = evidenceScore + decisionScore;

  if (!module) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-bold text-slate-800">
            Modul Tidak Ditemukan
          </h2>
          <Link to="/modul" className="mt-4 inline-block font-semibold text-sky-600">
            Kembali ke daftar modul
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f9ff] text-slate-800">
      <header className="border-b border-sky-100 bg-white px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link to={`/modul/${id}`} className="font-semibold text-sky-700">
            ← Kembali ke Modul
          </Link>
  
          <span className="text-sm font-semibold text-slate-500">
            Investigation Lab
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
        <div className="mb-6">
          <p className="text-sm font-semibold text-sky-600">
            {module.title} / Studi Kasus
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Phishing Detective
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
            Jadilah seorang detektif digital. Periksa bukti yang tersedia,
            temukan tanda-tanda phishing, dan tentukan kesimpulanmu.
          </p>
        </div>

        <section className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
              SKENARIO KASUS
            </span>
            <span className="text-xs text-slate-400">Kasus 01</span>
          </div>

          <h2 className="mt-4 text-lg font-bold text-slate-800">
            Pesan Verifikasi Akun Mencurigakan
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Kamu menerima sebuah email yang mengatasnamakan layanan digital.
            Email tersebut menyatakan bahwa akunmu akan diblokir jika tidak
            segera melakukan verifikasi. Kamu diminta membuka tautan dan
            memasukkan kata sandi serta kode OTP.
          </p>

          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Isi pesan yang diterima
            </p>
            <p className="mt-3 text-sm font-semibold text-slate-700">
              Subjek: Peringatan! Akun Anda akan dinonaktifkan
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Pengguna yang terhormat, akun Anda terdeteksi mengalami masalah.
              Untuk menghindari pemblokiran, segera lakukan verifikasi melalui
              tautan yang tersedia dan masukkan informasi akun Anda.
            </p>
            <p className="mt-3 break-all text-sm font-semibold text-sky-700">
              http://verifikasi-akun.example
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-sky-100 bg-white p-5 shadow-sm sm:p-7">
          <div className="mb-5">
            <h2 className="text-lg font-bold text-slate-800">
              1. Periksa Bukti
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Pilih semua bukti yang menurutmu menunjukkan adanya indikasi phishing.
            </p>
          </div>

          <div className="space-y-3">
            {evidenceData.map((evidence) => (
              <button
                key={evidence.id}
                type="button"
                disabled={submitted}
                onClick={() => toggleEvidence(evidence.id)}
                className={`w-full rounded-xl border p-4 text-left transition ${
                  selectedEvidence.includes(evidence.id)
                    ? 'border-sky-400 bg-sky-50'
                    : 'border-slate-200 bg-white hover:border-sky-200'
                } ${submitted ? 'cursor-not-allowed' : ''}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs ${
                      selectedEvidence.includes(evidence.id)
                        ? 'border-sky-600 bg-sky-600 text-white'
                        : 'border-slate-300'
                    }`}
                  >
                    {selectedEvidence.includes(evidence.id) ? '✓' : ''}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-800">
                      {evidence.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {evidence.detail}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-sky-100 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="text-lg font-bold text-slate-800">
            2. Tentukan Kesimpulan
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Berdasarkan skenario dan bukti yang telah diperiksa, bagaimana
            kesimpulanmu?
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { value: 'phishing', label: 'Pesan termasuk Phishing' },
              { value: 'aman', label: 'Pesan merupakan pesan Aman' },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                disabled={submitted}
                onClick={() => setDecision(option.value)}
                className={`rounded-xl border p-4 text-left text-sm font-semibold transition ${
                  decision === option.value
                    ? 'border-sky-400 bg-sky-50 text-sky-700'
                    : 'border-slate-200 text-slate-600 hover:border-sky-200'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </section>

        {!submitted ? (
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-6 w-full rounded-xl bg-sky-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-sky-700"
          >
            Kirim Hasil Investigasi
          </button>
        ) : (
          <section className="mt-6 rounded-2xl border border-sky-200 bg-white p-5 shadow-sm sm:p-7">
            <h2 className="text-xl font-bold text-slate-900">
              Hasil Investigasi
            </h2>

            
<div className="mt-4 rounded-2xl bg-sky-50 p-5 text-center">
  <p className="text-sm font-semibold text-sky-700">
    Skor Investigasi
  </p>

  <p className="mt-2 text-4xl font-bold text-sky-800">
    {totalScore}/100
  </p>

  <p className="mt-2 text-sm text-slate-500">
    {totalScore >= 80
      ? 'Hebat! Kamu berhasil menganalisis kasus dengan baik.'
      : totalScore >= 60
      ? 'Bagus! Masih ada beberapa bukti yang perlu kamu perhatikan.'
      : 'Tetap semangat! Pelajari kembali tanda-tanda phishing.'}
  </p>
</div>

<div className="mt-4 rounded-xl bg-sky-50 p-4">
  <p className="font-semibold text-sky-800">
    {decision === 'phishing'
      ? 'Kesimpulanmu benar!'
      : 'Kesimpulanmu belum tepat.'}
  </p>
  <p className="mt-1 text-sm text-sky-700">
    Pesan tersebut merupakan phishing karena berisi beberapa
    tanda yang mencurigakan.
  </p>
</div>

<p className="mt-5 text-sm font-semibold text-slate-700">
  Bukti yang berhasil kamu temukan: {correctCount} dari 4
</p>

            <div className="mt-4 space-y-3">
              {evidenceData.map((evidence) => (
                <div key={evidence.id} className="border-b border-slate-100 pb-3">
                  <p className="font-semibold text-slate-800">
                    {evidence.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {evidence.clue}
                  </p>
                  <p className={`mt-1 text-xs font-semibold ${
                    selectedEvidence.includes(evidence.id) && evidence.isCorrect
                      ? 'text-emerald-600'
                      : 'text-amber-600'
                  }`}>
                    {selectedEvidence.includes(evidence.id)
                      ? evidence.isCorrect
                        ? 'Bukti benar berhasil ditemukan'
                        : 'Bukti yang dipilih tidak tepat'
                      : evidence.isCorrect
                        ? 'Bukti benar belum ditemukan'
                        : 'Pilihan pengecoh tidak dipilih'}
                  </p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedEvidence([]);
                setDecision('');
                setSubmitted(false);
              }}
              className="mt-6 rounded-xl border border-sky-200 px-5 py-3 text-sm font-semibold text-sky-700 hover:bg-sky-50"
            >
              Ulangi Investigasi
            </button>

            <Link
              to={`/modul/${id}/kuis`}
              className="ml-3 mt-4 inline-block rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Lanjut ke Assessment →
            </Link>
          </section>
        )}
      </main>
    </div>
  );
}