import React from "react";
import { MdShoppingCart } from "react-icons/md";

function Card_Product({ product }) {
  const mockProduct = {
    product_name: "ตัวอย่างสินค้า",
    price: 0,
    image: "https://via.placeholder.com/250x300.png?text=No+Image",
  };

  const item = product || mockProduct;

  return (
    <div className="card bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 w-60">
      <figure className="h-60 flex items-center justify-center bg-[#FFF4FB]">
        <img
          src={item.image}
          alt={item.product_name}
          className="h-full object-contain"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold">{item.product_name}</h2>
        <p className="text-pink-600 font-bold text-[18px]">฿{item.price}</p>
        <div className="card-actions justify-end mt-2">
           <button className="btn bg-pink-100 hover:bg-pink-200 p-2 rounded-full">
              <MdShoppingCart className="text-pink-600 text-xl" />
        </button>
        </div>
      </div>
    </div>
  );
}

export default Card_Product;
