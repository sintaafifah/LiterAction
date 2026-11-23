
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";

import ModulPage from "./pages/ModulPage";
import DetailModulPage from "./pages/DetailModulPage";
import DetailMateriPage from "./pages/DetailMateriPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import QuizPage from "./pages/QuizPage";
import ProgressPage from "./pages/ProgressPage";

function App() {
  return (
    <Routes>
      {/* Halaman utama FE1 */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />

      {/* Halaman pembelajaran FE2 */}
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
      <Route path="/progress" element={<ProgressPage />} />
    </Routes>
  );
}

export default App;
