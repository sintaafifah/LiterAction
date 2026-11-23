
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  getProgress,
  getCompletedMaterials,
} from '../utils/progressStorage';
import { modulesData } from '../mockData';

export default function ProgressPage() {
  const history = useMemo(() => {
    return getProgress().sort((a, b) => b.id - a.id);
  }, []);

  const completedMaterials = useMemo(() => {
  return getCompletedMaterials();
}, []);

const totalMaterials = modulesData.reduce(
  (total, module) => total + module.totalMateri,
  0
);

const progressPercentage = totalMaterials > 0
  ? Math.min(
      100,
      Math.round((completedMaterials.length / totalMaterials) * 100)
    )
  : 0;

  
  const averageScore = history.length
    ? Math.round(
        history.reduce((total, item) => total + item.score, 0) /
          history.length
      )
    : 0;

  return (
    <div className="min-h-screen bg-[#f5f9ff] px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/modul"
          className="text-sm font-semibold text-sky-600"
        >
          ← Kembali ke Modul
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-slate-800">
          Feedback & Progress
        </h1>

        <p className="mt-2 text-slate-500">
          Pantau perkembangan dan hasil latihan belajarmu.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total Modul</p>
            <h2 className="mt-2 text-3xl font-bold text-sky-700">
              {modulesData.length}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">
              Latihan Dikerjakan
            </p>
            <h2 className="mt-2 text-3xl font-bold text-sky-700">
              {history.length}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Rata-rata Nilai</p>
            <h2 className="mt-2 text-3xl font-bold text-sky-700">
              {averageScore}
            </h2>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
  <div className="flex items-center justify-between">
    <h2 className="text-xl font-bold text-slate-800">
      Progres Belajar
    </h2>

    <span className="font-bold text-sky-700">
      {progressPercentage}%
    </span>
  </div>

  <p className="mt-2 text-sm text-slate-500">
    Kamu sudah menyelesaikan {completedMaterials.length} dari {totalMaterials} materi pembelajaran.
  </p>

  <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
    <div
      className="h-full rounded-full bg-sky-600 transition-all"
      style={{ width: `${progressPercentage}%` }}
    />
  </div>
</div>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800">
            Riwayat Latihan
          </h2>

          {history.length === 0 ? (
            <p className="mt-4 text-sm text-slate-500">
              Belum ada riwayat latihan.
            </p>
          ) : (
            <div className="mt-4 space-y-4">
              {history.map((item) => {
                const moduleInfo = modulesData.find(
                  (mod) => mod.id === Number(item.moduleId)
                );

                const feedback =
                  item.score >= 80
                    ? 'Hebat! Kamu sudah memahami materi dengan baik. Pertahankan!'
                    : item.score >= 60
                    ? 'Bagus! Masih ada beberapa hal yang perlu kamu pelajari kembali.'
                    : 'Jangan menyerah! Pelajari kembali materi dan coba latihan sekali lagi.';

                return (
                  <div
                    key={item.id}
                    className="rounded-xl border border-slate-100 p-4"
                  >
                    <h3 className="font-bold text-slate-800">
                      {moduleInfo?.title || `Modul ${item.moduleId}`}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {item.type === 'investigasi'
                        ? 'Investigation Lab'
                        : 'Assessment'}
                    </p>

                    <div className="mt-2 flex flex-wrap justify-between gap-2">
                      <span className="text-sm text-slate-500">
                        {new Date(item.date).toLocaleString('id-ID')}
                      </span>

                      <span className="font-bold text-sky-700">
                        {item.score}/100
                      </span>
                    </div>

                    <p className="mt-3 rounded-lg bg-sky-50 p-3 text-sm text-slate-600">
                      {feedback}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}