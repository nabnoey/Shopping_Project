import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Card_Product from "../components/Card_Product";
import slides from '../data/dbslide.json';

const Home = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true, slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const circleData = [
    { id: 1, label: "ชาย", link: "/category/men" },
    { id: 2, label: "หญิง", link: "/category/women" },
    { id: 3, label: "เด็ก", link: "/category/kids" },
    { id: 4, label: "เสื้อโปโล", link: "/category/polo" },
    { id: 5, label: "เสื้อเชิ้ต", link: "/category/shirt" },
    { id: 6, label: "แจ็กเก็ต", link: "/category/jacket" },
  ];

  return (
    <>
      {/* Menu Bar */}
      <div className="flex justify-start pl-[50px] bg-[#FFF4FB] p-2 w-full">
        <ul className="menu menu-horizontal bg-[#FFF8FC] rounded-box text-black gap-x-6 text-[18px]">
          <li><a>ชาย</a></li>
          <li><a>หญิง</a></li>
          <li><a>อื่น ๆ</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 font-inter">
        <div className="w-full max-w-7xl flex flex-col">

          {/* Welcome */}
          <div className="pb-10 text-center">
            <h1 className="text-7xl font-extrabold text-gray-800 drop-shadow-sm">Welcome</h1>
            <p className="text-gray-600 mt-2">ยินดีต้อนรับเข้าสู่ แบรนด์.....</p>
          </div>

          {/* Hero Carousel */}
          <div className="relative w-full h-[600px] overflow-hidden rounded-xl shadow-2xl group" ref={emblaRef}>
            <div className="flex h-full">
              {slides.map((src, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative select-none rounded-lg flex flex-col justify-center items-center h-full flex-none overflow-hidden mx-1 min-w-full md:min-w-[calc(50%-0.5rem)] lg:min-w-[calc(33.3333%-0.6666rem)]"
                  draggable="false"
                >
                  <img
                    alt={`Slide ${index + 1}`}
                    draggable="false"
                    className="rounded-lg select-none w-full h-full object-cover"
                    src={src}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>

            <button
              onClick={scrollPrev}
              className="absolute left-5 top-1/2 -translate-y-1/2 btn btn-circle btn-sm md:btn-md z-10 bg-white/50 hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
            >
              ❮
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-5 top-1/2 -translate-y-1/2 btn btn-circle btn-sm md:btn-md z-10 bg-white/50 hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
            >
              ❯
            </button>
          </div>

          {/* New Product */}
          <div className="pt-16 text-center">
            <h1 className="text-6xl font-bold text-gray-800 drop-shadow-sm mb-6">New Product</h1>

            <div className="flex justify-between items-center w-full px-2 pt-6">
              <h2 className="text-[40px] font-medium text-gray-700 truncate">Polo</h2>
              <button className="text-blue-600 hover:text-blue-800 font-normal flex items-center text-[20px]" type="button">
                ดูทั้งหมด
              </button>
            </div>

            <div className="pt-8 flex gap-x-6 flex-wrap justify-center">
              <Card_Product />
              <Card_Product />
              <Card_Product />
            </div>
          </div>

          {/* Collection Header */}
          <div className="pt-24 text-center">
            <h1 className="text-6xl font-extrabold text-blue-600 truncate mb-6">
              Collection
            </h1>
          </div>

          {/* Circle Row Section */}
          <div className="w-full flex justify-center mt-16">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
              {circleData.map((circle) => (
                <a key={circle.id} href={circle.link} className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {circle.id}
                  </div>
                  <span className="mt-2 text-gray-700 font-medium">{circle.label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
