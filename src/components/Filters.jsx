import React, { useEffect, useRef, useState } from 'react'
import Button from './Inputs/Button';
import gsap from 'gsap'
export default function Filters() {
  const filterContainer=useRef(null)
  let [extended, setExtended] = useState(false);
  const handleExtend=()=>{
    if(extended){setExtended(false)}
    else setExtended(true)
    console.log(extended)
  }
  useEffect(()=>{
    gsap.fromTo(filterContainer.current, {
      opacity: 0
  }, {
      opacity: 1,
      duration: 1,
      delay:.1,
  })
  })
  return (
    <div className='w-full'>
       <div className='rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 h-10 w-10 text-center  cursor-pointer ' onClick={()=>handleExtend()}></div>
            { extended &&<div className=' rounded-2xl  w-full justify-center p-1' ref={filterContainer}>
              <div className='w-full rounded-2xl bg-white justify-items-center p-2 flex justify-center flex-col items-center'>
                <div className='rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 w-70% items-center m-2'>
                  <select id="fields" className="shadow-inner cursor-pointer  text-black text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-80% p-2.5 m-1">
                  <option value="FRONT">FRONTEND</option>
                  <option value="BACK">BACKEND</option>
                  <option value="AI">AI & ML</option>
                  <option value="DATA analytics">DATA ANALISIS</option>
                  </select>
                </div>
                <div className='rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 w-70% items-center m-2'>
                  <select id="fields" className="shadow-inner cursor-pointer   text-black text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-80% p-2.5 m-1">
                  <option value="FRONT">FRONTEND</option>
                  <option value="BACK">BACKEND</option>
                  <option value="AI">AI & ML</option>
                  <option value="DATA analytics">DATA ANALISIS</option>
                  </select>
                </div>
                <div className='rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 w-70% items-center m-2'>
                  <select id="fields" className="shadow-inner cursor-pointer   text-black text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-80% p-2.5 m-1">
                  <option value="FRONT">FRONTEND</option>
                  <option value="BACK">BACKEND</option>
                  <option value="AI">AI & ML</option>
                  <option value="DATA analytics">DATA ANALISIS</option>
                  </select>
                </div>
                <Button>Apply Changes</Button>
            </div>
            </div>
}
    </div>
  )
}
