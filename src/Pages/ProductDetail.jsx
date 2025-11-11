import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [allProducts, setAllProducts] = useState([]); 
  const [relatedProducts, setRelatedProducts] = useState([]); 
  const [colorFilteredProducts, setColorFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setLoading(true);
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

         const colorFiltered = allProductsData.filter(
          (p) =>
            p.color === productData.color &&
            p.id !== productData.id
        );
        setColorFilteredProducts(colorFiltered);
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

     {/*  ปุ่มกลับหน้าแรก */}
      <button
        onClick={() => navigate("/")} 
        className="mb-4 flex items-center gap-2 px-4 py-mb-6 px-5 py-2 bg-purple-100 text-purple-700 font-medium rounded-full 
             shadow-sm hover:bg-purple-200 active:scale-95 transition-all duration-200"
      >
        กลับหน้าแรก
      </button>


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
      {colorFilteredProducts.length > 0 && (
  <div className="mt-4">
    <p className="font-semibold mb-2">สีอื่นๆ:</p>
    <div className="flex gap-2">
      {/* แสดงสีอื่น ๆ */}
      {colorFilteredProducts.map((p) => (
        <span
          key={p.id}
          className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer hover:border-purple-500"
          style={{ backgroundColor: p.color }}
          onClick={() => navigate(`/product/${p.id}`)}
        ></span>
      ))}
    </div>
  </div>
)}

          {/* ไซส์สินค้า */}
          <div className="mt-4">
            <p className="font-semibold mb-1">ไซส์:</p>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-3 py-1 border rounded-md hover:bg-blue-500 btn btn-info"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

         {/* จำนวนสินค้า */}
          <div className="flex items-center gap-3 mb-4 mt-4">
            <span className="text-gray-700 font-medium">จำนวน</span>

            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white">
              <button
                    onClick={handleDecrease}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition">
                   −
              </button>

            <span className="w-10 text-center text-gray-800 select-none">
                  {quantity}
            </span>

                <button
                    onClick={handleIncrease}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition">
               +
                  </button>
            </div>

            <span className="text-gray-700 font-medium">ชิ้น</span>
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
          className="border rounded-lg p-3 hover:shadow-lg transition hover:bg-purple-50"
        >
          <img
            src={item.image}
            alt={item.product_name}
            className="w-full h-48 object-cover rounded-md mb-2"
          />
          <p className="font-semibold text-gray-800">{item.product_name}</p>
          <p className="text-sm text-gray-500 line-clamp-2">
            {item.description}
          </p>
          <p className="text-[#F472B6] font-bold mt-1">฿{item.price}</p>

          {/* ปุ่มดูรายละเอียด */}
          <button
            onClick={() => navigate(`/product/${item.id}`)}
            className="mt-3 w-full bg-purple-100 text-purple-700 rounded-md py-1 font-medium hover:bg-purple-200 active:scale-95 transition-all"
          >
            ดูรายละเอียด
          </button>
        </div>
      ))}
    </div>
  </div>
)}

    </div>
  );
}

export default ProductDetail;
