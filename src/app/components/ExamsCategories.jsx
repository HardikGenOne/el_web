import React from "react";

const ExamsCategories = () => {
  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8">

    <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Exam Categories</h2>
      <p className="text-center text-base sm:text-lg text-gray-600 mb-10">
        English Lingua is preparing students for over 20 years. Scroll down to find the one you are preparing for.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* IELTS */}
        <div className="bg-white border rounded-lg p-4 sm:p-5 md:p-6 shadow hover:shadow-lg transition hover:scale-[1.02]">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">IELTS</h3>
          <div className="flex flex-wrap gap-2 text-gray-700">
            <p className="border rounded-full px-3 sm:px-4 py-1 text-sm hover:bg-[#f0f0ff] transition">IELTS Academic</p>
            <p className="border rounded-full px-3 sm:px-4 py-1 text-sm hover:bg-[#f0f0ff] transition">IELTS General Training</p>
            <p className="border rounded-full px-3 sm:px-4 py-1 text-sm hover:bg-[#f0f0ff] transition">IELTS for UKVI</p>
          </div>
          <p className="mt-4 text-[#5A4BDA] text-sm sm:text-base font-medium cursor-pointer hover:underline">Explore Category</p>
        </div>

        {/* School Preparations */}
        <div className="bg-white border rounded-lg p-4 sm:p-5 md:p-6 shadow hover:shadow-lg transition hover:scale-[1.02]">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">School Preparations</h3>
          <div className="flex flex-wrap gap-2 text-gray-700">
            <p className="border rounded-full px-3 sm:px-4 py-1 text-sm hover:bg-[#f0f0ff] transition">Class 8</p>
            <p className="border rounded-full px-3 sm:px-4 py-1 text-sm hover:bg-[#f0f0ff] transition">Class 9</p>
            <p className="border rounded-full px-3 sm:px-4 py-1 text-sm hover:bg-[#f0f0ff] transition">Class 10</p>
          </div>
          <p className="mt-4 text-[#5A4BDA] text-sm sm:text-base font-medium cursor-pointer hover:underline">Explore Category</p>
        </div>

        {/* Advanced English */}
        <div className="bg-white border rounded-lg p-4 sm:p-5 md:p-6 shadow hover:shadow-lg transition hover:scale-[1.02]">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Advanced English</h3>
          <div className="flex flex-wrap gap-2 text-gray-700">
            <p className="border rounded-full px-3 sm:px-4 py-1 text-sm hover:bg-[#f0f0ff] transition">Fluency</p>
            <p className="border rounded-full px-3 sm:px-4 py-1 text-sm hover:bg-[#f0f0ff] transition">Vocab</p>
            <p className="border rounded-full px-3 sm:px-4 py-1 text-sm hover:bg-[#f0f0ff] transition">Grammar</p>
          </div>
          <p className="mt-4 text-[#5A4BDA] text-sm sm:text-base font-medium cursor-pointer hover:underline">Explore Category</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ExamsCategories;