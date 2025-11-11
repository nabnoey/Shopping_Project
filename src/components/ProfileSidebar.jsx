import React from "react";
import { FaUser, FaHistory, FaHeart, FaHome, FaSignOutAlt } from "react-icons/fa";
import { Outlet } from "react-router-dom";  

function ProfileSidebar({ active }) {
  const menu = [
    { key: "info", label: "ข้อมูลสมาชิก", icon: <FaUser /> },
    { key: "history", label: "ประวัติการซื้อ", icon: <FaHistory /> },
    { key: "favorite", label: "สินค้าที่ชอบ", icon: <FaHeart /> },
    { key: "address", label: "จัดการที่อยู่", icon: <FaHome /> },
    { key: "logout", label: "ออกจากระบบ", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="w-64 mx-35 pt-25 px-6 py-10 border-r min-h-screen">

      
      <div className="flex items-center gap-4 mb-10">
        <img
          src="https://i.pinimg.com/736x/a6/71/97/a671973f3b355f500755eb89c99220c0.jpg"
          className="rounded-full w-20 h-20 object-cover"
        />

        {/* กล่องข้อความที่จัดเป็นคอลัมน์ */}
        <div className="flex flex-col">
          <p className="font-medium text-black">ยินดีต้อนรับ :)</p>

          <span className="bg-gray-200 text-[#636161] text-sm px-3 py-1 rounded-full w-fit mt-1">
            Member
          </span>
        </div>
      </div>

      {/* Menu list */}
      <ul className="space-y-4 text-gray-700">
        {menu.map((item) => (
          <li
            key={item.key}
            className={`flex items-center gap-3 cursor-pointer px-2 py-1 rounded-md
            ${active === item.key ? "text-pink-600 font-semibold" : "hover:text-pink-600"}`}
          >
            {item.icon} {item.label}
          </li>
        ))}
      </ul>

      <div className="flex-1 p-6">
        <Outlet />   
      </div>
    </div>

    
  );
}

export default ProfileSidebar;
