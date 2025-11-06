import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    product_name: "",
    category: "",
    gender: "",
    price: "",
    image: "",
    description: "",
  });

  const categories = ["Oversize", "Dress", "Pants", "Set", "Sweater", "Skirt"];
  const genders = ["ชาย", "หญิง", "เด็ก"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    Swal.fire({
      title: "เพิ่มสินค้าสำเร็จ!",
      text: "สินค้าได้ถูกบันทึกเข้าสู่ระบบแล้ว",
      icon: "success",
      confirmButtonText: "ตกลง",
      confirmButtonColor: "#FF6FA5",
    }).then(() => {
      navigate("/"); 
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 pt-20">
      <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-2xl p-6 border border-pink-100">

        <h2 className="text-3xl font-bold text-center mb-1 text-[#FF6FA5]">
          เพิ่มสินค้าใหม่
        </h2>
        <p className="text-center text-gray-500 mb-6">
          เพิ่มข้อมูลสินค้าเข้าสู่ระบบร้านของคุณ
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

        
          <div>
            <label className="font-medium text-gray-700">ชื่อสินค้า</label>
            <input
              type="text"
              name="product_name"
              value={formData.product_name}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2.5 text-cyan-800 rounded-xl border border-gray-300 
                         focus:border-pink-400 focus:ring focus:ring-pink-100 outline-none"
              placeholder="กรอกชื่อสินค้า"
              required
            />
          </div>

        
          <div>
            <label className="font-medium text-gray-700">หมวดหมู่สินค้า</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2.5 text-cyan-800 rounded-xl border border-gray-300 
                         focus:border-pink-400 focus:ring focus:ring-pink-100 outline-none"
              required
            >
              <option value="">-- เลือกหมวดหมู่ --</option>
              {categories.map((c, i) => (
                <option key={i} value={c}>{c}</option>
              ))}
            </select>
          </div>

          
          <div>
            <label className="font-medium text-gray-700">สำหรับเพศ</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 w-full text-cyan-800 px-4 py-2.5 rounded-xl border border-gray-300 
                         focus:border-pink-400 focus:ring focus:ring-pink-100 outline-none"
              required
            >
              <option value="">-- เลือกเพศ --</option>
              {genders.map((g, i) => (
                <option key={i} value={g}>{g}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-medium text-gray-700">ราคา (บาท)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2.5 text-cyan-800 rounded-xl border border-gray-300 
                         focus:border-pink-400 focus:ring focus:ring-pink-100 outline-none"
              placeholder="เช่น 199"
              required
            />
          </div>

          
          <div>
            <label className="font-medium text-gray-700">ลิงก์รูปภาพสินค้า</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="mt-1 w-full px-4 text-cyan-800 py-2.5 rounded-xl border border-gray-300 
                         focus:border-pink-400 focus:ring focus:ring-pink-100 outline-none"
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>

         
          <div>
            <label className="font-medium text-gray-700">รายละเอียดสินค้า</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="mt-1 w-full px-4 text-cyan-800 py-2.5 rounded-xl border border-gray-300 
                         focus:border-pink-400 focus:ring focus:ring-pink-100 outline-none"
              placeholder="กรอกรายละเอียดสินค้า"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF8FB1] to-[#FF6FA5] 
                       text-white text-lg font-semibold hover:scale-[1.02] 
                       transition-transform shadow-md"
          >
            บันทึกสินค้า
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
