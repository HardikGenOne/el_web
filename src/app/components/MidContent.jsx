import React from 'react';

function MidContent() {
  return (
    <div className="mb-0 pb-0 overflow-x-hidden">
    <div className="w-full min-h-[550px] bg-[url('/images/light-gradient-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-20 gap-10">
        <div className="order-2 md:order-1 mt-6 md:mt-0 flex justify-center w-full md:max-w-[45%]">
        <img
          alt="Hero Student"
          src="https://static.pw.live/ua/images/hero-student-w.webp"
          className="block w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain"
        />
        </div>
        <div className="w-full md:max-w-[50%] text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight mb-4 text-black">
            Bharat's <span style={{ color: 'var(--color-border)' }}>Trusted &<br />Affordable</span><br />
            Educational Platform
          </h2>
          <p className="text-base text-black mb-6">
            Unlock your potential by signing up with Physics Wallah —<br />
            <span>The most affordable learning solution</span>
          </p>
          <button className="bg-[var(--color-border)] hover:brightness-160 hover:blur-[0.5px] cursor-pointer transition-all duration-150 text-white px-[28px] py-[14px] w-[240px] rounded-md text-[17px] font-semibold leading-[27px] shadow-md" >Get Started</button>
        </div>
      </div>
    </div>
    <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="w-full mx-auto rounded-md bg-white px-4 sm:px-6 py-6 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] flex flex-wrap justify-between items-center gap-6 sm:gap-4 md:gap-6 lg:gap-10">
        {[
          {
            img: "https://static.pw.live/5b09189f7285894d9130ccd0/165756ec-8d87-4a09-9a88-95c342adddea.webp",
            title: "Daily Live",
            subtitle: "Interactive classes",
          },
          {
            img: "https://static.pw.live/5b09189f7285894d9130ccd0/ee478abe-a66b-4529-a264-16b61ffb6c51.webp",
            title: "10 Million +",
            subtitle: "Tests, sample papers & notes",
          },
          {
            img: "https://static.pw.live/5b09189f7285894d9130ccd0/b75e0c1a-6893-4b31-8d79-f37a1c72115a.webp",
            title: "24 x 7",
            subtitle: "Doubt solving sessions",
          },
          {
            img: "https://static.pw.live/5b09189f7285894d9130ccd0/65d1e4cb-abf8-4bda-9f2c-49f37a714b7a.webp",
            title: "100 +",
            subtitle: "Offline centres",
          },
        ].map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center w-[45%] sm:w-auto mx-auto">
              <div className="self-center mb-2.5 md:mb-3.5">
                <div className="sm:w-12 sm:h-12 w-8 h-8 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${item.img})` }} />
              </div>
              <div className="text-sm md:text-lg font-semibold text-[#1B2124]">{item.title}</div>
              <div className="md:text-base text-xs font-medium text-[#1B2124]">{item.subtitle}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
    </div>
  )
}

export default MidContent