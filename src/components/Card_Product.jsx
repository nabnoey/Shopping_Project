import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";

function Card_Product() {
  return (
   <div className="card bg-base-100 w-70 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <h3 className="flex justify-right font-bold text-[21px]">฿200</h3>
    <div className="card-actions justify-end">
      <button className="btn rounded-[30px] bg-blue-100 w-22 h-10">
        <MdAddShoppingCart className='text-black text-[20px]'/></button>
    </div>
  </div>
</div>
  )
}

export default Card_Product