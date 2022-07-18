import React from 'react'
import { useSelector } from 'react-redux';

export default function Discription() {
  const desc=useSelector((state)=>state.posts.desc)
  console.log(desc)
  
  
  return (
    <div>
       <div className='container rounded-2xl items-start  h-full w-900px '>
                <div className='rounded-2xl p-6  min-h-3/4 select-none bg-white '>
                    <h3 className='text-2xl '> {desc}</h3>
                </div>  
            </div>
    </div>
  )
}
