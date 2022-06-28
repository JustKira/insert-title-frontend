import axios from 'axios';
import React, { useEffect, useState } from 'react'
export default function Cards() {
    let [extended, setExtended] = useState(false);
    const filterExtend=()=>{
        setExtended(true)
    }
    const [posts, setPosts] = useState([]);
    useEffect(() => {

        const getProducts = async () => {
          try {
            const res = await axios.get("http://127.0.0.1:8000/api/postings");
            setPosts(res.data);
            console.log(posts)
          } catch (error) {console.log(error.response)}
        };
        getProducts();
      },);
 console.log(posts)
  return (
    <div className='container  flex  items-start mt-16  h-screen select-none'>
        <div className='container flex flex-col ml-3'>
            <div className='rounded-full bg-cyan-500 h-10 w-10 text-center  cursor-pointer justify-end' onClick={()=>filterExtend()}></div>
            { extended &&<div className='bg-blue-500/50 border-neutral-400 border-2 w-10/12 justify-center px-3 py-3'>
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
                <button className='h-10 w-40 bg-zinc-300 '>Apply Filters</button>
            </div>
}
            <div className='container mx-auto items-start  pr-20 h-full mt-2 '>
                <div className='rounded-xl p-6 bg-blue-500/50 text-white h-4/6 min-h-3/4 select-none'>
                    <h3 className='text-2xl '> is voluptas voluptates exercitationem velit ullam tenetur dolorem reprehenderit, ipsum consequuntur sed similique, sequi impedit obcaecati laboriosam accusantium harum temporibus.</h3>
                </div>  
            </div>
        </div>
        <div className='container mx-auto flex flex-wrap items-start overflow-auto h-full'>
        {posts.map((post)=>(<div className='rounded-xl p-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white mx-3 mb-5 w-80 h-80 cursor-pointer transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300 '>
                
                <img className='rounded-full w-20' src={post.image}/>
                <h2 className='text-2xl font-bold mb-2 uppercase'> provided by :{post.company}</h2>
                <h3 className='text-2xl font-bold mb-2 uppercase'> field : {post.recruiter}</h3>
            </div>)) }
           
        </div>
    
    </div>
  )
}
