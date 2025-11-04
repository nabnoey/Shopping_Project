import React from 'react'
import circleDataKids from "./circleDataKids.json"
function ShirtKids() {
  return (
    <div> <div className="w-full flex justify-center mt-20">
                      <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
                        {circleDataKids.map((circle) => (
                          <a key={circle.id} href={circle.link} className="flex flex-col items-center">
                            <img src={circle.imageUrl} alt={circle.label} className="w-24 h-24 rounded-full object-cover" />
                            <span className="mt-2 text-gray-700 font-medium">{circle.label}</span>
                          </a>
                        ))}
                      </div>
                    </div></div>
  )
}

export default ShirtKids