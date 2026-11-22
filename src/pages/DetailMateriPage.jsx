
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { materiData } from '../data/materiData';
import {
  completeMaterial,
  getCompletedMaterials,
} from '../utils/progressStorage';

export default function DetailMateriPage() {
  const { id, materiId } = useParams();

  const daftarMateri = materiData[id] || [];
  const materi = daftarMateri.find(
    (item) => String(item.id) === materiId
  );

  const indexMateri = daftarMateri.findIndex(
    (item) => String(item.id) === materiId
  );

  const [isCompleted, setIsCompleted] = useState(() => {
  return getCompletedMaterials().some(
    (item) =>
      item.moduleId === Number(id) &&
      item.materialId === Number(materiId)
  );
});

const handleComplete = () => {
  completeMaterial(id, materiId);
  setIsCompleted(true);
};

  if (!materi) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f9ff] p-5">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800">
            Materi Tidak Ditemukan
          </h1>
          <Link
            to={`/modul/${id}`}
            className="mt-5 inline-block rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white"
          >
            Kembali ke Detail Modul
          </Link>
        </div>
      </div>
    );
  }

  const materiSebelumnya = daftarMateri[indexMateri - 1];
  const materiSelanjutnya = daftarMateri[indexMateri + 1];

  return (
    <div className="min-h-screen bg-[#f5f9ff] text-slate-700">
      <main className="mx-auto max-w-4xl px-5 py-8 sm:px-8">

        <Link
          to={`/modul/${id}`}
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900"
        >
          ← Kembali ke Detail Modul
        </Link>

        <div className="mb-6">
          <p className="text-sm font-medium text-sky-600">
            Phishing Detective
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-800">
            {materi.title}
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            {materi.description}
          </p>
        </div>

        <div className="mb-8 h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-sky-500"
            style={{
              width: `${((indexMateri + 1) / daftarMateri.length) * 100}%`
            }}
          />
        </div>

        <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm sm:p-8">

          {materi.content.map((bagian, index) => (
            <section key={index} className="mb-7 last:mb-0">
              <h2 className="mb-3 text-xl font-bold text-slate-800">
                {bagian.heading}
              </h2>

              <p className="text-sm leading-7 text-slate-600">
                {bagian.text}
              </p>
            </section>
          ))}

          <div className="mt-8 rounded-xl border border-sky-100 bg-sky-50 p-5">
            <h2 className="mb-2 font-bold text-sky-800">
              Contoh Kasus
            </h2>

            <p className="text-sm leading-7 text-slate-600">
              {materi.example}
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
            <h2 className="mb-3 font-bold text-blue-800">
              Rangkuman Materi
            </h2>

            <ul className="space-y-2">
              {materi.summary.map((item, index) => (
                <li key={index} className="flex gap-2 text-sm text-slate-600">
                  <span className="font-bold text-blue-600">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </article>

        <div className="mt-6">
  <button
    type="button"
    onClick={handleComplete}
    disabled={isCompleted}
    className={`w-full rounded-xl px-5 py-3 text-sm font-semibold transition ${
      isCompleted
        ? 'cursor-default bg-emerald-100 text-emerald-700'
        : 'bg-sky-600 text-white hover:bg-sky-700'
    }`}
  >
    {isCompleted ? '✓ Materi Sudah Selesai' : 'Tandai Materi Selesai'}
  </button>
</div>

        <div className="mt-7 flex items-center justify-between gap-3">

          {materiSebelumnya ? (
            <Link
              to={`/modul/${id}/materi/${materiSebelumnya.id}`}
              className="rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm font-semibold text-sky-700 hover:bg-sky-50"
            >
              ← Sebelumnya
            </Link>
          ) : (
            <div />
          )}

          {materiSelanjutnya ? (
            <Link
              to={`/modul/${id}/materi/${materiSelanjutnya.id}`}
              className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
            >
              Selanjutnya →
            </Link>
          ) : (
            <Link
              to={`/modul/${id}`}
              className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
            >
              Selesai →
            </Link>
          )}

        </div>

      </main>
    </div>
  );
}