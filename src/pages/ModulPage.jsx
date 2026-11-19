import React, { useState } from 'react';
import { pillarsData, modulesData } from '../mockData';

export default function ModulPage() {
  const [activeFilter, setActiveFilter] = useState('semua');

  // Filter modul berdasarkan kategori pilar yang diklik (menggunakan categorySlug)
  const filteredModules = activeFilter === 'semua' 
    ? modulesData 
    : modulesData.filter(m => m.categorySlug === activeFilter);

  return (
    <div className="min-h-screen bg-blue-50/50 pb-16">
      {/* Container utama */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        
        {/* Header Banner */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-sm flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Modul</h1>
            <p className="text-blue-100 text-sm md:text-base">
              Pelajari empat pilar literasi digital. Mulai dari hal kecil, bangun kebiasaan baik.
            </p>
          </div>
          <div className="hidden md:flex gap-6 bg-blue-700/60 px-6 py-4 rounded-xl border border-blue-500">
            <div className="text-center">
              <div className="text-2xl font-bold">9</div>
              <div className="text-xs text-blue-200">Modul</div>
            </div>
            <div className="w-[1px] bg-blue-500"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">4</div>
              <div className="text-xs text-blue-200">Pilar digital</div>
            </div>
          </div>
        </div>

          {/* Filter Tombol Pilar */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveFilter('semua')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === 'semua'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Semua
            </button>

            {pillarsData
              .filter((pillar) => pillar.id !== 'semua')
              .map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => setActiveFilter(pillar.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === pillar.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {pillar.name}
                </button>
              ))}
          </div>

        {/* Grid Kartu Modul */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((mod) => (
            <div 
              key={mod.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between"
            >
              <div>
                {/* Ilustrasi Kotak Gambar Kartu */}
                <div className="w-full h-36 bg-blue-50 rounded-xl mb-4 flex items-center justify-center border border-blue-100/60 relative">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                    📘
                  </div>
                  <span className="absolute top-3 left-3 bg-blue-100 text-blue-700 text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {mod.category}
                  </span>
                </div>

                {/* Judul & Deskripsi */}
                <h3 className="font-bold text-gray-800 text-lg mb-1">{mod.title}</h3>
                <p className="text-gray-500 text-xs mb-4 leading-relaxed">{mod.description}</p>
              </div>

              <div>
                {/* Info Materi & Persentase */}
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>{mod.totalMateri} materi</span>
                  <span className="font-semibold text-blue-600">{mod.progress}% selesai</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-blue-600 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${mod.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}