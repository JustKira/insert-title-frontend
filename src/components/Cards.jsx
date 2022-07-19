import React, { useEffect, useState, useRef } from 'react'
import Discription from './Discription';
import Filters from './Filters';
import gsap from 'gsap'
import { publicRequest } from './../requestMethods';
import { useDispatch } from 'react-redux';
import { cardDiscription } from '../redux/apiCalls';
export default function Cards() {
    const dispatch=useDispatch()
    const cardContainer=useRef(null)
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        gsap.fromTo(cardContainer.current, {
            x: 300,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5
        })
    },[])
    useEffect(() => {

        const getProducts = async() => {
            try {
                const res = await publicRequest.get("/postings");
                setPosts(res.data);
            } catch (error) {
                console.log(error.response)
            }
        };
        getProducts();
      },[]);
    useEffect(()=>{
        
    })
    const hoverCard=(id)=>{
        cardDiscription(id,dispatch)
    }
  return (
    <div className=' flex   mt-16  h-screen select-none  '>
        <div className=' ml-3 flex flex-col'>
            <Filters/>
            <Discription/>
           
        </div>
        <div className='  flex flex-wrap items-start overflow-auto overflow-x-hidden h-full justify-end p-5 w-70%' ref={cardContainer}>
        {posts.map((post)=>(<div onPointerEnter={()=>hoverCard(post.id)} className='rounded-xl p-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white mx-3 mb-5 w-80 h-80 cursor-pointer transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300 '>
                
                <img className='rounded-full w-20 h-20' src={post.image} alt=''/>
                <h2 className='text-2xl font-bold mb-2 uppercase'> provided by :{post.company}</h2>
                <h3 className='text-2xl font-bold mb-2 uppercase'> field : {post.recruiter}</h3>
            </div>)) }
                

            </div>

        </div>
    )
}
