import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [allProducts, setAllProducts] = useState([]); // ✅ ย้ายมาข้างใน function
  const [relatedProducts, setRelatedProducts] = useState([]); // ✅ เพิ่ม state สำหรับสินค้าที่เกี่ยวข้อง
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productRes, reviewsRes, customersRes, allProductsRes] =
          await Promise.all([
            fetch(`http://localhost:5000/products/${id}`),
            fetch(`http://localhost:5000/reviews?P_Id=${id}`),
            fetch("http://localhost:5000/customers"),
            fetch("http://localhost:5000/products"),
          ]);

        const productData = await productRes.json();
        const reviewData = await reviewsRes.json();
        const customerData = await customersRes.json();
        const allProductsData = await allProductsRes.json();

        setProduct(productData);
        setReviews(reviewData);
        setCustomers(customerData);
        setAllProducts(allProductsData);

        // ✅ คำนวณสินค้าที่เกี่ยวข้อง
        const related = allProductsData.filter(
          (p) =>
            p.category === productData.category &&
            p.gender === productData.gender &&
            p.id !== productData.id
        );

        setRelatedProducts(related);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <p className="text-center mt-10">กำลังโหลดข้อมูลสินค้า...</p>;
  if (!product) return <p>ไม่พบข้อมูลสินค้า</p>;

  const getCustomerName = (userId) => {
    const user = customers.find((c) => c.id === userId);
    return user ? `${user.first_name} ${user.last_name}` : "ไม่ทราบชื่อผู้ใช้";
  };

  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : "0.0";

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* ---------- ข้อมูลสินค้า ---------- */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6 grid md:grid-cols-2 gap-6">
        {/* ภาพสินค้า */}
        <div>
          <img
            src={product.image}
            alt={product.product_name}
            className="rounded-xl w-full object-cover"
          />
          <div className="flex gap-2 mt-3">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-16 h-16 object-cover rounded-md border hover:border-purple-500 cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* รายละเอียดสินค้า */}
        <div>
          <h1 className="text-2xl font-bold text-purple-900">
            {product.product_name}
          </h1>
          <p className="text-gray-600 mt-2">{product.description}</p>

          <p className="text-3xl mt-4 font-semibold" style={{ color: "#F472B6" }}>
            ฿{product.price}
          </p>

          {/* สีสินค้า */}
          <div className="mt-4">
            <p className="font-semibold mb-1">สี:</p>
            <div className="flex gap-2">
              {product.colors?.map((color) => (
                <button
                  key={color}
                  className="w-8 h-8 rounded-full border hover:scale-110 transition"
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>

          {/* ไซส์สินค้า */}
          <div className="mt-4">
            <p className="font-semibold mb-1">ไซส์:</p>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-3 py-1 border rounded-md hover:bg-purple-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* จำนวนสินค้า */}
          <div className="flex items-center gap-2 mb-4 mt-4">
            <span className="text-gray-700">จำนวน</span>
            <button
              onClick={handleDecrease}
              className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              -
            </button>
            <span className="w-10 text-center">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              +
            </button>
            <span className="text-gray-700 ml-1">ชิ้น</span>
          </div>

          {/* ปุ่มเพิ่มลงตะกร้า + หัวใจ */}
          <div className="flex items-center gap-3">
            <button className="bg-[#A78BFA] hover:bg-[#8B5CF6] text-white px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2">
              <MdAddShoppingCart className="text-lg" />
              เพิ่มลงตะกร้า
            </button>

            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-3 rounded-full border transition ${
                isFavorite ? "bg-pink-200 border-pink-400" : "bg-white border-gray-300"
              }`}
            >
              <FaHeart
                className={`text-2xl transition ${
                  isFavorite ? "text-pink-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ---------- ส่วนรีวิวลูกค้า ---------- */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-4">รีวิวของลูกค้า</h3>

        {reviews.length > 0 ? (
          <>
            {/* คะแนนเฉลี่ย */}
            <div className="flex items-center gap-2 mb-4">
              <FaStar className="text-yellow-400" />
              <span className="text-lg font-semibold">{avgRating}</span>
              <span className="text-gray-500">จาก {reviews.length} รีวิว</span>
            </div>

            {/* รายการรีวิว */}
            <div className="space-y-6">
              {reviews.map((r) => (
                <div
                  key={r.R_Id}
                  className="border-b pb-4 border-gray-200 last:border-none"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < r.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700">{r.text}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    โดย: {getCustomerName(r.User_Id)}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-gray-500">ยังไม่มีรีวิวสำหรับสินค้านี้</p>
        )}
      </div>

      {/* ---------- สินค้าที่เกี่ยวข้อง ---------- */}
      {relatedProducts.length > 0 && (
        <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4">
            สินค้าในหมวดเดียวกัน ({product.category} - {product.gender})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-3 hover:shadow-lg transition cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.product_name}
                  className="w-full h-48 object-cover rounded-md mb-2"
                />
                <p className="font-semibold text-gray-800">{item.product_name}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-[#F472B6] font-bold mt-1">฿{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
