import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("currentUser")) || {};

  return (
    <div className=" flex justify-center -mt-80 mx-70 w-200">
      <div className="w-[90%] max-w-3xl border border-purple-500 rounded-xl p-6 bg-white/50 backdrop-blur">
        <h1 className="text-3xl font-bold mb-6 text-black">ข้อมูลสมาชิก</h1>

        <div className="bg-white rounded-xl border border-gray-200  p-6 shadow-sm relative">
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-lg font-semibold text-[#1679AB]">ข้อมูลสมาชิก</h2>
            <Link
              to="/edit-profile"
              className="flex items-center gap-1 text-sm hover:text-blue-600"
            >
              <FiEdit2 />
              แก้ไขข้อมูลบัญชี
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-y-3 text-sm">
            <p className="text-gray-600">ชื่อผู้ใช้งาน</p>
            <p className="text-black">{user.username || "-"}</p>

            <p className="text-gray-600">อีเมล</p>
            <p className="text-black">{user.email || "-"}</p>

            <p className="text-gray-600">ชื่อ - นามสกุล</p>
            <p className="text-black">{user.fullname || "-"}</p>

            <p className="text-gray-600">เพศ</p>
            <p className="text-black">{user.gender || "-"}</p>

            <p className="text-gray-600">วันเกิด</p>
            <p className="text-black">{user.birthday || "ไม่ระบุ"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
