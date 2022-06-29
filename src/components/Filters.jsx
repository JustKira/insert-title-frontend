import React, { useState } from 'react'
import Button from './Inputs/Button';

export default function Filters() {
    let [extended, setExtended] = useState(false);
  return (
    <div>
       <div className='rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 h-10 w-10 text-center  cursor-pointer justify-end' onPointerMove={()=>setExtended(true)}></div>
            { extended &&<div className=' border-neutral-400 border-2 w-10/12 justify-center px-3 py-3' onPointerLeave={()=>setExtended(false)}>
                <select id="fields" className=" shadow-inner cursor-pointer bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-10/12 p-2.5 mb-2 mx-2">
                <option value="FRONT">FRONTEND</option>
                <option value="BACK">BACKEND</option>
                <option value="AI">AI & ML</option>
                <option value="DATA analytics">DATA ANALISIS</option>
                </select>
                <select id="fields" className="shadow-inner cursor-pointer bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-10/12 p-2.5 mb-2 mx-2">
                <option value="FRONT">FRONTEND</option>
                <option value="BACK">BACKEND</option>
                <option value="AI">AI & ML</option>
                <option value="DATA analytics">DATA ANALISIS</option>
                </select>
                <select id="fields" className="shadow-inner cursor-pointer bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-10/12 p-2.5 mb-2 mx-2">
                <option value="FRONT">FRONTEND</option>
                <option value="BACK">BACKEND</option>
                <option value="AI">AI & ML</option>
                <option value="DATA analytics">DATA ANALISIS</option>
                </select>
                <Button>Apply Filters</Button>
            </div>
}
    </div>
  )
}
