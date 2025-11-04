import React, {useState} from 'react'
import Swal from "sweetalert2"


function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password , setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

const handleSubmit = () => {
  if (password !== confirmPassword){
    Swal.fire({
      icon: "error",
      title: "รหัสผ่านไม่ตรงกัน",
      confirmButtonColor: "#d33",
    })
    return
  }

  const usersData = JSON.parse(localStorage.getItem("users")) || []

  // เช็ค email ซ้ำตรงนี้
  const exist = usersData.find(u => u.email === email)
  if(exist){
    Swal.fire({
      icon: "warning",
      title: "อีเมลนี้มีผู้ใช้แล้ว",
      confirmButtonColor: "#f39c12",
    })
    return
  }

  usersData.push({ name, email, phone, password })
  localStorage.setItem("users", JSON.stringify(usersData))

  Swal.fire({
    icon: "success",
    title: "สร้างบัญชีสำเร็จ!",
    confirmButtonColor: "#3d85c6",
  }).then(() => {
    window.location.href = "/login"
  })
}



  return (
     <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[900px] h-[450px] bg-white rounded-3xl shadow-xl flex overflow-hidden">
        
        <div className="w-1/2 bg-[#6fa8dc] rounded-l-3xl"></div>

        <div className="w-1/2 flex flex-col items-center justify-center p-10">
          <h2 className="text-2xl font-semibold text-center text-[#3d85c6]">
            Welcome
          </h2>
          <p className="text-sm mt-1 text-gray-500">
            Login to your account
          </p>

  
          <div className="w-full font-semibold text-[15px] mt-6 space-y-4 text-blue-400">
            <input
              type="name"
              placeholder="Name"
              className="w-full py-2 px-4 rounded-full bg-[#ddebf7] outline-none"
              onChange={(e)=>setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full py-2 px-4 rounded-full bg-[#ddebf7] outline-none"
              onChange={(e)=>setEmail(e.target.value)}
            />

              <input
              type="phone"
              placeholder="Phone"
              className="w-full py-2 px-4 rounded-full bg-[#ddebf7] outline-none"
              onChange={(e)=>setPhone(e.target.value)}
            />

             <input
              type="password"
              placeholder="Password"
              className="w-full py-2 px-4 rounded-full bg-[#ddebf7] outline-none"
              onChange={(e)=>setPassword(e.target.value)}
            />
             <input
              type="password"
              placeholder="Confirm Password"
              className="w-full py-2 px-4 rounded-full bg-[#ddebf7] outline-none"
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />


           

            <button className="w-full py-2 bg-[#3d85c6] text-white rounded-full shadow-md mt-4 hover:bg-[#6fa8dc] font-medium"
            onClick={handleSubmit}
            >
              Submit
            </button>

              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register