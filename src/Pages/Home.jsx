import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    
    <>
<Navbar />
<div className="flex justify-left pl-40 bg-[#FFF4FB]">
  <ul className="menu menu-horizontal rounded-box text-black text-[20px] gap-x-10">
    <li><a>ชาย</a></li>
    <li><a>หญิง</a></li>
    <li><a>เด็ก</a></li>
  </ul>
</div>



    </>
    
  )
}

export default Home