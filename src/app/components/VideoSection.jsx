import React from 'react'

function VideoSection() {
  return (
    <div className="bg-black min-h-screen px-4 sm:px-6">
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <video
          src="https://static.pw.live/5b09189f7285894d9130ccd0/7c44087d-aff1-438d-aa67-2a493c48504f.mp4"
          playsInline
          autoPlay
          loop
          muted
          controlsList="nofullscreen nodownload noremoteplayback"
          className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
        ></video>
        <div className="w-full mx-auto">
          <div className="mx-auto text-[#fff] text-center z-[1] px-4 max-w-[90%] sm:max-w-[70%] md:max-w-[50%] flex flex-col justify-center h-full">
            <div className="mt-[10.5%] text-[18px] sm:text-[24px] md:text-[32px] leading-[26px] sm:leading-[36px] md:leading-[48px] font-[700] mb-[14px] z-[1] text-[#fff]">
              Explore Tech-Enabled Offline Vidyapeeth Centres
            </div>
            <div className="text-[#fff] sm:text-[18px] sm:leading-[28px] text-[14px] leading-[20px] font-[500] z-[1]">
              Creating new benchmarks in learning experiences
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full px-4 py-6 md:py-8 lg:py-10 xl:py-12">
        <div className="mb-[10%] w-full max-w-6xl p-4 sm:p-6 md:p-8 rounded-lg bg-white z-10 shadow-[0_0_12px_0_rgba(0,0,0,0.12)]">
          <div className="my-4 gap-1.5 xl:my-0 xl:gap-1 flex flex-col">
            <div className="text-center text-lg xl:text-2xl font-bold text-[#1B2124]">
              Find Vidyapeeth Centre in your city
            </div>
            <div className="flex justify-center items-center gap-1.5">
              <hr className="w-[58px] xl:w-[126px] h-0 bg-[#B7B7B7]" />
              <div className="flex gap-[2px] text-center">
                <div className="text-sm xl:text-xl px-2 py-0 sm:py-2 font-semibold text-[#757575]">
                  Available in <span className="text-[#5A4BDA]">105</span> cities
                </div>
              </div>
              <hr className="w-[58px] xl:w-[126px] h-0 bg-[#B7B7B7]" />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              { name: "Kota", url: "https://www.pw.live/vidyapeeth-centres/kota-rj", img: "https://static.pw.live/5b09189f7285894d9130ccd0/e7591d9a-54f0-4609-bade-c017952e56cd.webp" },
              { name: "Bareilly", url: "https://www.pw.live/vidyapeeth-centres/bareily-up/bareilly-vidyapeeth-506421", img: "https://static.pw.live/5b09189f7285894d9130ccd0/c3746454-250f-45b1-ad32-57be6ef8574c.webp" },
              { name: "Patna", url: "https://www.pw.live/vidyapeeth-centres/patna-br", img: "https://static.pw.live/5b09189f7285894d9130ccd0/94b0e6c1-ef94-470a-ac07-805c0fb72220.webp" },
              { name: "Noida", url: "https://www.pw.live/vidyapeeth-centres/noida-up", img: "https://static.pw.live/5b09189f7285894d9130ccd0/4f347740-f971-4964-8a51-a800c6a02a48.webp" },
             
            ].map(({ name, url, img }) => (
              <a
                key={name}
                href={url}
                className="group border hover:border cursor-pointer hover:border-[#B7B7B7] duration-300 ease-out border-[#E4E7EA] rounded md:rounded-md w-full h-[56px] md:h-[88px] p-2 md:p-3 flex items-center overflow-hidden relative"
              >
                <div className="bg-[#ffffff00] sm:h-[88px] absolute sm:w-[84px] h-[56px] w-[60px] group-hover:bg-gradient-to-l ease-in-out duration-500 group-hover:from-[#ffffffff] left-0 z-[1]"></div>
                <div
                  className="md:w-14 md:h-14 w-10 h-10 bg-center group-hover:scale-[155%] ease-in-out duration-500 bg-no-repeat bg-cover rounded-[4px] mr-4"
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
                <div className="xl:text-base text-sm font-bold text-[#000]">{name}</div>
              </a>
            ))}
          </div>
          <div className="text-center">
            <a href="https://www.pw.live/vidyapeeth-centres">
              <button className="rounded-md transition-all duration-200 hover:bg-[#4437B8] bg-[#5A4BDA] text-white font-semibold w-full sm:w-[240px] py-3 sm:py-3.5">
                View More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSection