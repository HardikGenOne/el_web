"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ImageSlider() {
  return (
    <>
    
    
    <div className="relative w-full group">
      {/* Navigation buttons - hidden by default, show on hover */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 hidden group-hover:block">
        <button className="swiper-button-prev !text-white !fill-white !stroke-white"></button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 hidden group-hover:block">
        <button className="swiper-button-next !text-white !fill-white !stroke-white"></button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={5}
        slidesPerView={1}
        navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        // onSlideChange={() => console.log('slide change')}
        >
        {/* Slides */}
        <SwiperSlide>
          <div className="relative group">
            <img src="/images/image2.jpg" className="w-full h-72 object-cover rounded-lg" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-r from-black/20 via-transparent to-black/20" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <img src="/images/image3.jpg" className="w-full h-72 object-cover rounded-lg" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-r from-black/20 via-transparent to-black/20" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <img src="/images/image4.jpg" className="w-full h-72 object-cover rounded-lg" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-r from-black/20 via-transparent to-black/20" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <img src="/images/image5.jpg" className="w-full h-72 object-cover rounded-lg" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-r from-black/20 via-transparent to-black/20" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <img src="/images/image5.jpg" className="w-full h-72 object-cover rounded-lg" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-r from-black/20 via-transparent to-black/20" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <img src="/images/image5.jpg" className="w-full h-72 object-cover rounded-lg" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-r from-black/20 via-transparent to-black/20" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <img src="/images/image5.jpg" className="w-full h-72 object-cover rounded-lg" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-r from-black/20 via-transparent to-black/20" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination" />
    </div>
    {/* <div className="w-full flex justify-center mt-2 gap-2">
    </div> */}
  </>
  );
}