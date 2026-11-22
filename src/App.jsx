
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ModulPage from './pages/ModulPage';
import DetailModulPage from './pages/DetailModulPage';
import DetailMateriPage from './pages/DetailMateriPage';
import CaseStudyPage from './pages/CaseStudyPage';
import QuizPage from './pages/QuizPage';
import ProgressPage from './pages/ProgressPage';

// Halaman utama buatan Sinta (FE 1)
function HomeSinta() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold text-white mb-4">
          LiterAction
        </h1>
        <p className="text-lg text-slate-300 mb-6">
          Belajar, Investigasi, Berpikir Kritis.
        </p>
        <Link
          to="/modul"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Mulai Belajar
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeSinta />} />
        <Route path="/modul" element={<ModulPage />} />
        <Route path="/modul/:id" element={<DetailModulPage />} />
        <Route
          path="/modul/:id/materi/:materiId"
          element={<DetailMateriPage />}
        />
        <Route
          path="/modul/:id/investigasi"
          element={<CaseStudyPage />}
        />
        <Route
          path="/modul/:id/kuis"
          element={<QuizPage />}
        />
        <Route
          path="/progress"
          element={<ProgressPage />}
        />
      </Routes>
    </Router>
  );
}