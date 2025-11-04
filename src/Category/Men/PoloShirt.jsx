import React from 'react'
import Card_Product from "../../components/Card_Product.jsx"
import CircleDataMen from "./circleDataMen.json"
import productsData from "../../db.json"

function PoloShirt() {
  return (
    <div>
        {/* Menu Bar */}
      <div className="flex justify-start pl-[50px] bg-[#FFF4FB] p-2 w-full">
        <ul className="menu menu-horizontal bg-[#FFF8FC] rounded-box text-black gap-x-6 text-[18px]">
          <li><a href="/men">ชาย</a></li>
          <li><a>หญิง</a></li>
          <li><a>เด็ก</a></li>
        </ul>
      </div>
    <div className="w-full flex justify-center mt-20">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
              {CircleDataMen.map((circle) => (
                <a key={circle.id} href={circle.link} className="flex flex-col items-center">
                  <img src={circle.imageUrl} alt={circle.label} className="w-24 h-24 rounded-full object-cover" />
                  <span className="mt-2 text-gray-700 font-medium">{circle.label}</span>
                </a>
              ))}
            </div>
          </div>


                <div className="flex justify-between items-center w-full  px-70 pt-20">
              <h2 className="text-[40px] font-medium text-gray-700 truncate">Polo</h2>
              <button className="text-blue-600 hover:text-blue-800 text-[20px]" type="button">
                ดูทั้งหมด
              </button>
            </div>

                  <div className="pt-8 flex gap-x-6 flex-wrap justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productsData.products
                .filter(p=>p.category === "Polo")
                .filter(g=>g.gender === "ชาย")
                .map((product) => (
                <Card_Product key={product.id} product={product} />
              ))}
              </div>
            </div>


    </div>
  )
}

export default PoloShirt