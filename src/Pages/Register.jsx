import React from 'react'

function Register() {
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

  
          <div className="w-full mt-6 space-y-4 text-blue-400">
            <input
              type="name"
              placeholder="Name"
              className="w-full py-2 px-4 rounded-full bg-[#ddebf7] outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full py-2 px-4 rounded-full bg-[#ddebf7] outline-none"
            />

              <input
              type="phone"
              placeholder="Phone"
              className="w-full py-2 px-4 rounded-full bg-[#ddebf7] outline-none"
            />

             <input
              type="password"
              placeholder="Password"
              className="w-full py-2 px-4 rounded-full bg-[#ddebf7] outline-none"
            />
             <input
              type="password"
              placeholder="Confirm Password"
              className="w-full py-2 px-4 rounded-full bg-[#ddebf7] outline-none"
            />


           

            <button className="w-full py-2 bg-[#3d85c6] text-white rounded-full shadow-md mt-4 hover:bg-[#6fa8dc] font-medium">
              Submit
            </button>

              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register