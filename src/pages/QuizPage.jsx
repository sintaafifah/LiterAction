
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { modulesData } from '../mockData';
import { saveProgress } from '../utils/progressStorage';

const questions = [
  {
    question: 'Apa yang dimaksud dengan phishing?',
    options: [
      'Teknik meningkatkan kecepatan internet',
      'Upaya penipuan untuk mencuri informasi pribadi',
      'Aplikasi untuk melindungi perangkat',
      'Cara menyimpan data secara online',
    ],
    answer: 1,
    explanation:
      'Phishing merupakan upaya penipuan yang bertujuan mencuri informasi pribadi seperti kata sandi dan kode OTP.',
  },
  {
    question: 'Apa tanda yang mencurigakan dari alamat email pengirim?',
    options: [
      'Menggunakan alamat email resmi',
      'Memiliki tanda tangan perusahaan',
      'Menggunakan domain yang tidak sesuai dengan identitas pengirim',
      'Menggunakan nama perusahaan yang dikenal',
    ],
    answer: 2,
    explanation:
      'Domain yang tidak sesuai dengan identitas pengirim dapat menjadi tanda bahwa email tersebut palsu.',
  },
  {
    question: 'Apa yang harus dilakukan ketika seseorang meminta kode OTP kamu?',
    options: [
      'Tidak membagikan kode OTP kepada siapa pun',
      'Memberikannya jika orang tersebut mengaku petugas',
      'Mengirimkannya melalui email',
      'Membagikannya kepada teman',
    ],
    answer: 0,
    explanation:
      'Kode OTP bersifat rahasia dan tidak boleh dibagikan kepada siapa pun, termasuk pihak yang mengaku sebagai petugas resmi.',
  },
  {
    question: 'Kamu menerima pesan bahwa akun akan diblokir dalam 24 jam. Apa tindakan paling tepat?',
    options: [
      'Langsung mengeklik tautan dalam pesan',
      'Memeriksa akun melalui aplikasi atau situs resmi',
      'Membalas pesan dengan informasi pribadi',
      'Mengirimkan kata sandi untuk verifikasi',
    ],
    answer: 1,
    explanation:
      'Jangan terburu-buru mengeklik tautan. Periksa informasi melalui aplikasi atau situs resmi layanan tersebut.',
  },
  {
    question: 'Apakah situs dengan HTTPS selalu aman dan terpercaya?',
    options: [
      'Ya, semua situs HTTPS pasti resmi',
      'Ya, karena HTTPS menjamin tidak ada penipuan',
      'Tidak, karena HTTPS hanya menunjukkan koneksi terenkripsi',
      'Tidak, karena HTTPS berarti situs tersebut berbahaya',
    ],
    answer: 2,
    explanation:
      'HTTPS membantu mengenkripsi koneksi, tetapi tidak menjamin bahwa pemilik situs memiliki identitas yang terpercaya.',
  },
];

export default function QuizPage() {
  const { id } = useParams();
  const module = modulesData.find((item) => String(item.id) === id);

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [warning, setWarning] = useState('');

  const score = questions.reduce((total, question, index) => {
    return total + (answers[index] === question.answer ? 20 : 0);
  }, 0);

  const handleSubmit = () => {
  if (Object.keys(answers).length !== questions.length) {
    setWarning('Silakan jawab semua pertanyaan terlebih dahulu.');
    return;
  }

  setWarning('');

  saveProgress({
    moduleId: Number(id),
    type: 'assessment',
    score: score,
  });

  setSubmitted(true);
};

  if (!module) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-800">
            Modul Tidak Ditemukan
          </h2>
          <Link to="/modul" className="mt-4 inline-block text-sky-600">
            Kembali ke Modul
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f9ff] px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          to={`/modul/${id}/investigasi`}
          className="text-sm font-semibold text-sky-600 hover:text-sky-800"
        >
          ← Kembali ke Investigation Lab
        </Link>

        <div className="mt-6 rounded-3xl bg-gradient-to-r from-sky-600 to-blue-700 p-6 text-white sm:p-8">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-100">
            Assessment / Latihan Soal
          </span>
          <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
            Uji Pemahamanmu!
          </h1>
          <p className="mt-2 text-sm text-sky-100">
            {module.title} · Jawab 5 pertanyaan untuk menguji pemahamanmu tentang phishing.
          </p>
          <div className="mt-5 flex gap-4 text-sm">
            <span>5 Pertanyaan</span>
            <span>•</span>
            <span>100 Poin Maksimal</span>
          </div>
        </div>

        {submitted && (
          <div className="mt-6 rounded-2xl border border-sky-100 bg-white p-6 text-center shadow-sm">
            <p className="text-sm font-semibold text-sky-600">
              Hasil Assessment
            </p>
            <p className="mt-2 text-5xl font-bold text-sky-700">
              {score}/100
            </p>
            <p className="mt-3 text-sm text-slate-500">
              {score >= 80
                ? 'Hebat! Kamu sudah memahami materi dengan baik.'
                : score >= 60
                ? 'Bagus! Yuk, pelajari kembali beberapa materi.'
                : 'Jangan menyerah! Coba pelajari kembali materi sebelumnya.'}
            </p>
          </div>
        )}

        <div className="mt-6 space-y-5">
          {questions.map((question, index) => (
            <div
              key={index}
              className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm sm:p-6"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-sky-600">
                Pertanyaan {index + 1} dari {questions.length}
              </p>

              <h2 className="mt-2 font-bold text-slate-800">
                {question.question}
              </h2>

              <div className="mt-4 space-y-3">
                {question.options.map((option, optionIndex) => {
                  const isSelected = answers[index] === optionIndex;
                  const isCorrect = question.answer === optionIndex;

                  let optionStyle = 'border-slate-200 hover:border-sky-300';

                  if (!submitted && isSelected) {
                    optionStyle = 'border-sky-500 bg-sky-50';
                  }

                  if (submitted && isCorrect) {
                    optionStyle = 'border-green-400 bg-green-50';
                  } else if (submitted && isSelected && !isCorrect) {
                    optionStyle = 'border-red-300 bg-red-50';
                  }

                  return (
                    <button
                      key={optionIndex}
                      type="button"
                      disabled={submitted}
                      onClick={() =>
                        setAnswers({
                          ...answers,
                          [index]: optionIndex,
                        })
                      }
                      className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left text-sm transition ${optionStyle} ${
                        submitted ? 'cursor-default' : 'cursor-pointer'
                      }`}
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                        {String.fromCharCode(65 + optionIndex)}
                      </span>
                      <span className="flex-1 text-slate-700">{option}</span>
                      {submitted && isCorrect && (
                        <span className="text-xs font-bold text-green-700">
                          Benar
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-4 rounded-xl bg-sky-50 p-4">
                  <p className="text-sm font-bold text-sky-800">
                    Pembahasan
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {question.explanation}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {warning && (
          <p className="mt-4 text-sm font-semibold text-red-500">
            {warning}
          </p>
        )}

        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="mt-6 w-full rounded-xl bg-sky-600 px-6 py-4 font-bold text-white transition hover:bg-sky-700"
          >
            Kirim Jawaban
          </button>
        ) : (
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
                setWarning('');
              }}
              className="rounded-xl border border-sky-200 bg-white px-6 py-4 font-semibold text-sky-700 hover:bg-sky-50"
            >
              Ulangi Kuis
            </button>
            <Link
              to={`/modul/${id}`}
              className="rounded-xl bg-sky-600 px-6 py-4 text-center font-semibold text-white hover:bg-sky-700"
            >
              Kembali ke Modul
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}