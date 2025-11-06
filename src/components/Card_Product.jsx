import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

function Card_Product({ product }) {
  return (
    <div className="card bg-base-100 w-70 shadow-sm hover:shadow-lg transition-all duration-200">
      <figure className="h-50 bg-white">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.product_name}
            className="h-full w-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </figure>

      <div className="card-body bg-[#C2A4FF]">
        <h2 className="card-title text-[#1E1B4B]">{product.product_name}</h2>
        <h3 className="text-right font-bold text-[22px] text-[#8102D0]">
          ฿{product.price}
        </h3>
        <div className="card-actions justify-end">
          <button className="btn rounded-[30px] bg-blue-100 w-20 h-10 hover:bg-blue-200">
            <MdAddShoppingCart className="text-black text-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card_Product;
