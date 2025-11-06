import React from 'react'
import CircleData from "../data/circleData.json"
import Card_Product from "../components/Card_Product.jsx"
import productsData from "../db.json"

function Sweater() {
  return (
    <div>
 <div className="flex justify-start pl-[50px] bg-[#FFF4FB]  w-full">
        <ul className="menu menu-horizontal bg-[#FFF8FC] rounded-box text-black gap-x-6 text-[18px]">
          <li><a href="/category/oversize-shirt">ชาย</a></li>
          <li><a>หญิง</a></li>
          <li><a href="/category/kids">เด็ก</a></li>
        </ul>
      </div>

        
         <div className="flex justify-between items-center w-full  px-70 pt-20">
              <h2 className="text-[40px] font-medium text-gray-700 px-120  truncate">Sweater</h2>
              </div>

 <div className="pt-8 flex gap-x-6 flex-wrap justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productsData.products
                .filter(p=>p.category === "Sweater")
                .map((product) => (
                <Card_Product key={product.id} product={product} />
              ))}
              </div>
            </div>

    </div>
  )
}

export default Sweater