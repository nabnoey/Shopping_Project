import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="navbar bg-[#FFF4FB] text-black py-7 px-10 relative ">
      <div className="flex-1">
        <a className="btn btn-ghost text-[36px] text-black hover:bg-transparent">
          Brand
        </a>

        <div
          className="btn btn-ghost btn-circle text-black hover:bg-[#FFE6F2]"
          onClick={() => setSidebarOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered rounded-[30px] w-64 pl-10 pr-10 border-pink-200 focus:border-pink-300 bg-white"
          />
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400 text-2xl cursor-pointer hover:scale-110 transition-transform" />
        </div>

      
       {currentUser ? (
  <div className="dropdown dropdown-end">
    <label tabIndex={0} className="cursor-pointer">
      <div className="avatar">
        <div className="w-10 rounded-full ring ring-pink-300 ring-offset-base-100">
          <img src={currentUser.image || "https://i.pravatar.cc/150?u=" + currentUser.email} />
        </div>
      </div>
    </label>
    <ul tabIndex={0} className="dropdown-content z-[100] menu p-2 shadow bg-white rounded-box w-40">
      <li><Link to="/profile">ข้อมูล</Link></li>
      <li>
        <button 
          onClick={()=>{
            localStorage.removeItem("currentUser");
            window.location.href="/login";
          }}
        >
        Logout
        </button>
      </li>
    </ul>
  </div>
) : (
  <Link
    to="/login"
    className="btn bg-[#afd6f8] border-pink-200 hover:bg-[#FFD8EC] text-pink-700 rounded-full px-5 font-medium transition-all flex items-center gap-2"
  >
    <FiUser className="text-[22px]" />
    Login
  </Link>
)}

        
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#FFF8FC] shadow-lg z-50 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-pink-200">
          <span className="text-xl font-bold">Menu</span>
          <button
            className="btn btn-ghost text-black"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>
        <ul className="menu p-4 text-black gap-y-6">
          <li><a className="hover:bg-[#FFE6F2]">เสื้อ Oversize</a></li>
          <li><a className="hover:bg-[#FFE6F2]">เสื้อ Polo</a></li>
          <li><a className="hover:bg-[#FFE6F2]">เสื้อ ครอป</a></li>
          <li><a className="hover:bg-[#FFE6F2]">เสื้อ sweater</a></li>
          <li><a className="hover:bg-[#FFE6F2]">กางเกง</a></li>
          <li><a className="hover:bg-[#FFE6F2]">กระโปรง</a></li>
        </ul>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-20 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
