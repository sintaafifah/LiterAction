
const STORAGE_KEY = 'literaction_progress';

// Mengambil seluruh riwayat hasil latihan
export const getProgress = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// Menyimpan hasil latihan
export const saveProgress = (result) => {
  const currentProgress = getProgress();

  const newResult = {
    id: Date.now(),
    moduleId: result.moduleId,
    type: result.type,
    score: result.score,
    maxScore: 100,
    date: new Date().toISOString(),
  };

  const updatedProgress = [...currentProgress, newResult];

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedProgress)
  );

  return newResult;
};

const MATERIAL_STORAGE_KEY = 'literaction_completed_materials';

// Mengambil daftar materi yang sudah selesai
export const getCompletedMaterials = () => {
  const data = localStorage.getItem(MATERIAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// Menandai materi sebagai selesai
export const completeMaterial = (moduleId, materialId) => {
  const completedMaterials = getCompletedMaterials();

  const alreadyCompleted = completedMaterials.some(
    (item) =>
      item.moduleId === Number(moduleId) &&
      item.materialId === Number(materialId)
  );

  if (!alreadyCompleted) {
    completedMaterials.push({
      moduleId: Number(moduleId),
      materialId: Number(materialId),
      completedAt: new Date().toISOString(),
    });

    localStorage.setItem(
      MATERIAL_STORAGE_KEY,
      JSON.stringify(completedMaterials)
    );
  }

  return completedMaterials;
};