import React from 'react'

function PlatformTrust() {
  return (
    <div className="bg-white mt-[-10%] px-4 sm:px-6 md:px-8 py-8">


    <div className="mt-6 md:mt-10 mx-auto lg:max-w-6xl xl:px-0 px-4 w-full flex flex-col items-center justify-center">
      <div>
        <h2 className="md:text-[32px] text-[20px] md:leading-[48px] leading-[30px] font-[700] my-[8px] text-center text-black">
          A Platform Trusted by Students
        </h2>
      </div>
      <div>
        <div className="md:text-[18px] text-[14px] text-[#3D3D3D] md:leading-[24px] text-center leading-[20px] font-[500]">
          Physics Wallah aims to transform not just through words, but provide results with numbers!
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="animate-in">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 md:my-[32px] my-[20px] text-black">
            {[
                {
                    bgColor: 'bg-[#FFF3E3]',
                    label: 'Happy Students',
                    image: 'https://static.pw.live/5b09189f7285894d9130ccd0/fa94a64a-7f6c-49c7-99be-dbf5b4cf440f.webp',
                    count: '1 Million+'
                },
                {
                    bgColor: 'bg-[#FFEEEE]',
                    label: 'Mock Tests',
                    image: 'https://static.pw.live/5b09189f7285894d9130ccd0/112aa59c-9952-4add-8491-e93f2f45b90b.webp',
                    count: '2500+'
                },
                {
                    bgColor: 'bg-[#E4FAFF]',
                    label: 'Video Lectures',
                    image: 'https://static.pw.live/5b09189f7285894d9130ccd0/4f6749a2-e834-4c08-81ff-c42330f9bf87.webp',
                    count: '2500+'
                },
                {
                    bgColor: 'bg-[#ECE7FF]',
                    label: 'Practice Papers',
                    image: 'https://static.pw.live/5b09189f7285894d9130ccd0/55bb8055-5be9-473e-85b6-1db04b8cc50b.webp',
                    count: '1200+'
                }
            ].map((item, i) => (
                <div
                key={i}
                className={`w-full aspect-[1/1] ${item.bgColor} md:rounded-[16px] rounded-[8px] flex flex-col items-center justify-center overflow-hidden`}
                >
                <div className="duration-300 flex flex-col items-center justify-center">
                  <div className="lg:text-[40px] md:text-[38px] text-2xl font-[700] mb-1">{item.count}</div>
                  <div className="md:text-lg text-[#3D3D3D] text-sm font-[500]">{item.label}</div>
                </div>
                <div
                  className="mt-[3px] transform hover:translate-y-0 opacity-50 w-full h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] bg-center bg-contain bg-no-repeat"
                  style={{ backgroundImage: `url(${item.image})` }}
                  />
              </div>
            ))}
          </div>
        </div>
        <div className="animate-in mt-6">
          <button className="px-5 sm:px-6 py-3 sm:py-4 w-[200px] sm:w-[240px] text-[15px] sm:text-[17px] rounded-md hover:bg-[#4437B8] transition-all duration-200 bg-[#5A4BDA] text-white font-semibold leading-[24px] sm:leading-[27px]">
            Get Started
          </button>
        </div>
      </div>
            </div>
    </div>
  )
}

export default PlatformTrust