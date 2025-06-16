"use client"

import React, { useRef } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

function Testimonials() {
  const scrollRef = useRef(null);
  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };
  return (
    <div className="bg-[#F8F8F8] py-8 sm:py-10 px-4 sm:px-6 gap-y-5 flex flex-col relative">
      <div>
        <div>
          <div className="xl:mb-8 md:mb-6 mb-5 flex flex-col">
            <h2 className="font-[700] mb-2 text-[#1B2124] text-xl sm:text-2xl md:text-3xl xl:text-[32px] xl:leading-[48px] text-center">
              Students ❤️ English Lingua
            </h2>
            <div className="font-[500] text-[#3D3D3D] text-sm sm:text-base xl:text-lg text-center">
              Hear from our students
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10"
              onClick={() => scroll('left')}
              type="button"
            >
              <HiOutlineChevronLeft size={20} />
            </button>
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
            >
              {/* Testimonial Card 1 */}
              <div className="min-w-[280px] sm:min-w-[320px] w-[85%] sm:w-[320px] bg-white shadow-md rounded-lg p-4 snap-start flex-shrink-0">
                <div className="text-sm sm:text-base md:text-[16px] text-[#3D3D3D] font-normal mb-4">
                  "motivated me during my drop year...."
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <img src="/images/without_bg.png" alt="User" className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-bold text-[#1B2124] text-sm">Multiple Rankers</div>
                    <div className="text-xs text-[#5A4BDA] font-semibold">AIR 1, AIR 86 and other | NEET</div>
                  </div>
                </div>
              </div>
              {/* Testimonial Card 2 */}
              <div className="min-w-[280px] sm:min-w-[320px] w-[85%] sm:w-[320px] bg-white shadow-md rounded-lg p-4 snap-start flex-shrink-0">
                <div className="text-sm sm:text-base md:text-[16px] text-[#3D3D3D] font-normal mb-4">
                  "I never looked back after joining."
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <img src="/images/without_bg.png" alt="User" className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-bold text-[#1B2124] text-sm">Sushant Padha</div>
                    <div className="text-xs text-[#5A4BDA] font-semibold">JEE Advanced 2024 - AIR 52 | IIT JEE</div>
                  </div>
                </div>
              </div>
              {/* Testimonial Card 3 */}
              <div className="min-w-[280px] sm:min-w-[320px] w-[85%] sm:w-[320px] bg-white shadow-md rounded-lg p-4 snap-start flex-shrink-0">
                <div className="text-sm sm:text-base md:text-[16px] text-[#3D3D3D] font-normal mb-4">
                  "My preparation was boosted drastically."
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <img src="/images/without_bg.png" alt="User" className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-bold text-[#1B2124] text-sm">Karan Garg</div>
                    <div className="text-xs text-[#5A4BDA] font-semibold">AIR 429 | NEET</div>
                  </div>
                </div>
              </div>
              <div className="min-w-[280px] sm:min-w-[320px] w-[85%] sm:w-[320px] bg-white shadow-md rounded-lg p-4 snap-start flex-shrink-0">
                <div className="text-sm sm:text-base md:text-[16px] text-[#3D3D3D] font-normal mb-4">
                  "My preparation was boosted drastically."
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <img src="/images/without_bg.png" alt="User" className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-bold text-[#1B2124] text-sm">Karan Garg</div>
                    <div className="text-xs text-[#5A4BDA] font-semibold">AIR 429 | NEET</div>
                  </div>
                </div>
              </div>
              <div className="min-w-[280px] sm:min-w-[320px] w-[85%] sm:w-[320px] bg-white shadow-md rounded-lg p-4 snap-start flex-shrink-0">
                <div className="text-sm sm:text-base md:text-[16px] text-[#3D3D3D] font-normal mb-4">
                  "My preparation was boosted drastically."
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <img src="/images/without_bg.png" alt="User" className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-bold text-[#1B2124] text-sm">Karan Garg</div>
                    <div className="text-xs text-[#5A4BDA] font-semibold">AIR 429 | NEET</div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10"
              onClick={() => scroll('right')}
              type="button"
            >
              <HiOutlineChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials