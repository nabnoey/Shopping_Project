import React, {useState} from 'react'

function Login() {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleLogin = () => {
  const userData = JSON.parse(localStorage.getItem("users")) || []

  const found = userData.find(
    (u) => email === email && u.password === password  )

    if(found){
         localStorage.setItem("currentUser", JSON.stringify(found));
      alert("เข้าสู่ระบบสำเร็จ");
      window.location.href = "/"
    }else{
      alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง")
    }
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

          {/* form */}
          <div className="w-full mt-6 space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full py-2 px-4 rounded-full bg-[#ddebf7] outline-none"
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full py-2 px-4 rounded-full bg-[#ddebf7] outline-none"
              onChange={(e)=>setPassword(e.target.value)}
            />

            <div className="text-right text-xs">
              <a href="#" className="underline text-gray-500">
                Forgot your password?
              </a>
            </div>

            <button className="w-full py-2 bg-[#3d85c6] text-white rounded-full shadow-md mt-4 hover:bg-[#6fa8dc] font-medium"
            onClick={handleLogin}
            >
              LOG IN
            </button>

               <a href='/register' className="btn border-blue-600  w-full py-2 bg-white text-blue-600 rounded-full shadow-md mt-2 hover:bg-[#c7dbed] font-medium">
              Create Account
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login