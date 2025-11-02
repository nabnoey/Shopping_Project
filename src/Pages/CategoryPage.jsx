import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Card_Product from "../components/Card_Product";
import productsData from "../db.json"; 

function CategoryPage() {
  const savedGender = localStorage.getItem("preferredGender") || "ทั้งหมด";
  const savedCategory = localStorage.getItem("preferredCategory") || "ทั้งหมด";

  const [selectedGender, setSelectedGender] = useState(savedGender);
  const [selectedCategory, setSelectedCategory] = useState(savedCategory);

  
  const categories = ["ทั้งหมด", ...new Set(productsData.products.map(p => p.category))];
  const genders = ["ทั้งหมด", "ชาย", "หญิง"];

 
  useEffect(() => { localStorage.setItem("preferredGender", selectedGender); }, [selectedGender]);
  useEffect(() => { localStorage.setItem("preferredCategory", selectedCategory); }, [selectedCategory]);

 
  const filteredProducts = productsData.products.filter((product) => {
    const genderMatch = selectedGender === "ทั้งหมด" || product.gender === selectedGender;
    const categoryMatch = selectedCategory === "ทั้งหมด" || product.category === selectedCategory;
    return genderMatch && categoryMatch;
  });

  return (
    <div>
      <Navbar onCategorySelect={(cat) => setSelectedCategory(cat)} />

      <div className="p-4 sm:p-8">
        {/* Filter controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <select
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
            className="select select-bordered flex-1"
          >
            {genders.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="select select-bordered flex-1"
          >
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {/* Personalized greeting */}
        {selectedGender !== "ทั้งหมด" && (
          <p className="mb-4 text-lg font-semibold text-pink-500">
            สินค้าแนะนำสำหรับ {selectedGender}
          </p>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Card_Product key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">ไม่พบสินค้า</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
