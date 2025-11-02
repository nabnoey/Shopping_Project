import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Card_Product from "../components/Card_Product";
import slides from "../data/dbslide.json";
import circleData from "../data/circleData.json";
import advertisementData from "../data/advertisementData.json";
import productsData from "../db.json";

const Home = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true, slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

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

      {/* Body */}
      <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 font-inter">
        <div className="w-full max-w-7xl flex flex-col">

          {/* Welcome Section */}
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
                  className="relative flex flex-col justify-center items-center h-full flex-none overflow-hidden mx-1 min-w-full md:min-w-[calc(50%-0.5rem)] lg:min-w-[calc(33.3333%-0.6666rem)]"
                >
                  <img
                    alt={`Slide ${index + 1}`}
                    src={src}
                    loading="lazy"
                    className="rounded-lg select-none w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>

            <button
              onClick={scrollPrev}
              className="absolute left-5 top-1/2 -translate-y-1/2 btn btn-circle btn-sm md:btn-md bg-white/50 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
            >❮</button>

            <button
              onClick={scrollNext}
              className="absolute right-5 top-1/2 -translate-y-1/2 btn btn-circle btn-sm md:btn-md bg-white/50 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
            >❯</button>
          </div>

          {/* New Product */}
          <div className="pt-70 text-center">
            <h1 className="text-6xl font-bold text-gray-800 drop-shadow-sm mb-6">New Product</h1>
          </div>
            <div className="flex justify-between items-center w-full px-2 pt-6">
              <h2 className="text-[40px] font-medium text-gray-700 truncate">Polo</h2>
              <button className="text-blue-600 hover:text-blue-800 text-[20px]" type="button">
                ดูทั้งหมด
              </button>
            </div>

            <div className="pt-8 flex gap-x-6 flex-wrap justify-center">
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productsData.products.map((product) => (
                <Card_Product key={product.id} product={product} />
              ))}
              </div>
            </div>
         

          {/* Collection Section */}
          <div className="pt-70 text-center">
            <h1 className="text-6xl font-extrabold text-blue-600 mb-6">Collection</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="https://www.yuedpao.com/KODNUM-cat.k2eqy0?sorter=PRODUCT_SORTER_POPULAR" className="rounded-lg overflow-hidden shadow-lg">
                <img src="https://mp-static.yuedpao.com/admin/web-management/medium-banner/624pv64jscx4gfvtmcvu/lgz5aphog9kjjrep9myp" alt="Banner 1" className="w-full h-auto object-cover" />
              </a>
              <a href="https://www.yuedpao.com/ULTRASOFTNON-IRON-cat.0ycq8v?option.skip=0" className="rounded-lg overflow-hidden shadow-lg">
                <img src="https://mp-static.yuedpao.com/admin/web-management/medium-banner/q7ctvnw060r3ba9h1jit/oc19bgvpyk62m3a22fd0" alt="Banner 2" className="w-full h-auto object-cover" />
              </a>
              <a href="https://www.yuedpao.com/ULTRASOFTNON-IRON-cat.0ycq8v?option.skip=0" className="rounded-lg overflow-hidden shadow-lg md:col-span-2">
                <img src="https://mp-static.yuedpao.com/admin/web-management/medium-banner/q7ctvnw060r3ba9h1jit/oc19bgvpyk62m3a22fd0" alt="Banner 3" className="w-full h-auto object-cover" />
              </a>
            </div>
          </div>

          {/* Circle Row Section */}
          <div className="w-full flex justify-center mt-20">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
              {circleData.map((circle) => (
                <a key={circle.id} href={circle.link} className="flex flex-col items-center">
                  <img src={circle.imageUrl} alt={circle.label} className="w-24 h-24 rounded-full object-cover" />
                  <span className="mt-2 text-gray-700 font-medium">{circle.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Advertisement Section */}
          <div className="text-center w-full pt-30">
            <h2 className="text-5xl font-extrabold text-purple-700 drop-shadow-sm mb-10">
              ข้อเสนอพิเศษ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {advertisementData.map((ad, idx) => (
                <a
                  key={idx}
                  href={ad.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card w-full max-w-sm bg-base-100 image-full shadow-lg transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl group cursor-pointer"
                >
                  <figure className="relative h-64 overflow-hidden">
                    <img
                      src={ad.imageUrl}
                      alt={ad.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </figure>
                  <div className="card-body p-6 flex flex-col justify-end text-white">
                    <h2 className="card-title text-2xl md:text-3xl font-bold mb-2">{ad.title}</h2>
                    <p className="text-base md:text-lg mb-4 opacity-90">{ad.description}</p>
                    <div className="card-actions justify-start">
                      <button className="btn btn-warning btn-md font-semibold shadow-lg hover:bg-warning/90">
                        ดูเพิ่มเติม
                      </button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Skirt */}
          <div className="flex justify-between items-center w-full px-2 pt-30">
            <h2 className="text-[40px] font-medium text-gray-700 truncate">Skirt</h2>
            <button className="text-blue-600 hover:text-blue-800 text-[20px]">ดูทั้งหมด</button>
          </div>

          <div className="pt-8 flex gap-x-6 flex-wrap justify-center">
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productsData.products.map((product) => (
                <Card_Product key={product.id} product={product} />
              ))}
              </div>
          </div>

          {/* Trousers */}
          <div className="flex justify-between items-center w-full px-2 pt-30">
            <h2 className="text-[40px] font-medium text-gray-700 truncate">Trousers</h2>
            <button className="text-blue-600 hover:text-blue-800 text-[20px]">ดูทั้งหมด</button>
          </div>

          <div className="pt-8 flex gap-x-6 flex-wrap justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productsData.products.map((product) => (
                <Card_Product key={product.id} product={product} />
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
