import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("โหลดข้อมูลสินค้าไม่สำเร็จ:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600">
        กำลังโหลดข้อมูลสินค้า...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600">
        ไม่พบสินค้านี้
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-50 p-10 flex flex-col gap-10">
      {/* 🔹 ข้อมูลสินค้า */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <img src={product.image} alt={product.product_name} className="w-96 rounded-lg shadow-lg" />
        <div>
          <h1 className="text-4xl font-bold">{product.product_name}</h1>
          <p className="text-gray-500 text-lg mt-4">{product.description}</p>
          <p className="text-2xl font-semibold mt-6 text-pink-600">
            {product.price} บาท
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg mt-6">
            เพิ่มลงตะกร้า
          </button>
        </div>
      </div>

      {/* 🔹 รีวิวสินค้า */}
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">รีวิวจากลูกค้า</h2>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <div key={review.id} className="border-b py-3">
              <p className="font-bold">{review.user}</p>
              <p className="text-yellow-500">
                {"⭐".repeat(review.rating)} ({review.rating}/5)
              </p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">ยังไม่มีรีวิวสินค้า</p>
        )}
      </div>

      {/* 🔹 รายชื่อลูกค้าที่ซื้อสินค้า */}
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">ลูกค้าที่เคยซื้อสินค้า</h2>
        {product.customers && product.customers.length > 0 ? (
          <ul className="list-disc pl-6 text-gray-700">
            {product.customers.map((customer) => (
              <li key={customer.id}>
                {customer.name} (วันที่ซื้อ: {customer.purchase_date})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">ยังไม่มีข้อมูลลูกค้าที่ซื้อสินค้า</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
