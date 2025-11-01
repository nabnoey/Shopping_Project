import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import slides from '../data/dbslide.json';

const Home = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      align: "start", 
      loop: true,
      slidesToScroll: 1, 
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <>

    <div className="flex justify-left pl-50 bg-[#FFF4FB]">
  <ul className="menu menu-horizontal bg-[#FFF8FC] rounded-box text-black gap-x-6 text-[18px]">
    <li><a>ชาย</a></li>
    <li><a>หญิง</a></li>
    <li><a>อื่น ๆ</a></li>
  </ul>
</div>

    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 font-inter"> 
      <div className="w-full max-w-7xl flex flex-col"> 
        <div className="pb-5 text-center"> 
          <h1 className="text-7xl font-extrabold text-gray-800 drop-shadow-sm"> 
            Welcome
          </h1>
          <p className="text-gray-600 mt-2">ยินดีต้อนรับเข้าสู่ แบรนด์.....</p>
        </div>
        
        <div
          className="relative w-full h-[850px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl group" 
          ref={emblaRef}
        >
          <div className="flex h-full"> 
            {slides.map((src, index) => (
              <a 
                key={index} 
                href="#"
                className={`
                  relative select-none rounded-lg text-center flex flex-col justify-center items-center 
                  h-full flex-none overflow-hidden mx-1 
                  min-w-full 
                  md:min-w-[calc(50%-0.5rem)] 
                  lg:min-w-[calc(33.3333%-0.6666rem)] 
                `}
                draggable="false"
              >
                <img
                  alt={`Slide ${index + 1}`}
                  draggable="false"
                  decoding="async"
                  className="rounded-lg select-none w-full h-full object-cover"
                  src={src}
                  style={{ color: "transparent" }}
                  loading="lazy"
                />
              </a>
            ))}
          </div>

    
    <>

<div className="flex justify-left pl-40 bg-[#FFF4FB]">
  <ul className="menu menu-horizontal rounded-box text-black text-[20px] gap-x-10">
    <li><a>ชาย</a></li>
    <li><a>หญิง</a></li>
    <li><a>เด็ก</a></li>
  </ul>
</div>



    </>
    

          <button
            onClick={scrollPrev}
            className="absolute left-5 top-1/2 -translate-y-1/2 btn btn-circle btn-sm md:btn-md z-10 
                       bg-white/50 hover:bg-white transition-opacity 
                       opacity-0 group-hover:opacity-100"
          >
            ❮
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-5 top-1/2 -translate-y-1/2 btn btn-circle btn-sm md:btn-md z-10 
                       bg-white/50 hover:bg-white transition-opacity
                       opacity-0 group-hover:opacity-100"
          >
            ❯
          </button>
        </div>
        
        {/* New Product */}
        <div className="pt-61 text-center"> 
          <h1 className="text-6xl font-extrabold text-gray-800 drop-shadow-sm mb-6">
            New Product
          </h1>
          
          <div className="flex justify-between items-center w-full px-2">
            <h2 className="text-2xl font-bold text-gray-700 truncate">Polo</h2> 
            <button className="text-blue-600 hover:text-blue-800 font-normal flex items-center" type="button">
              ดูทั้งหมด
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1 w-4 h-4">
                <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
              </svg>
            </button>
          </div>
        </div>


        {/* Collection */}
         <div className="pt-61 text-center flex justify-between items-center w-full px-2"> 
          <h1 className="text-6xl font-extrabold text-blue-600 truncate">
            Collection
          </h1>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default Home;
