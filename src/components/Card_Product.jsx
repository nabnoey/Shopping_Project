import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";

function Card_Product({ product }) {
  const mockProduct = {
    product_name: "ตัวอย่างสินค้า",
    price: 0,
    image: "https://via.placeholder.com/250x300.png?text=No+Image",
  };

  const item = product || mockProduct;

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const isAdmin = currentUser?.role === "admin";

  return (
    <div className="card bg-base-100 w-70 shadow-sm">
      <figure className="h-50 bg-white">
        <img
          src={item.image}
          alt={item.product_name}
          className="h-full w-auto object-cover"
        />
      </figure>

      <div className="card-body bg-[#C2A4FF]">
        <h2 className="card-title font-stretch-90% text-[#1E1B4B]">{item.product_name}</h2>
        <h3 className="flex justify-right font-bold text-[22px] text-[#8102D0]">฿{item.price}</h3>

        <div className="card-actions justify-end gap-2">

         
          {!isAdmin && (
            <button className="btn rounded-[30px] bg-blue-100 w-20 h-10">
              <MdAddShoppingCart className="text-black text-[20px]" />
            </button>
          )}

          
          {isAdmin && (
            <>
              <button className="btn btn-warning btn-sm">EDIT</button>
              <button className="btn btn-error btn-sm">DELETE</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}


export default Card_Product