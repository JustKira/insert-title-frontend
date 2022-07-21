import React from 'react'

const PostDetail = ({ post }) => {
  return (
    <div className="container mx-auto px-4 md:px-15">
        <div className='flex flex-col justify-center items-center w-full h-full my-24'>
            <div class="flex flex-wrap justify-center px-4 gap-10 w-full md:px-20 md:justify-start mb-10">
                <img className='rounded-full border-2 w-36 h-36 border-black' src={post.image} alt=''/>
                <div className="flex flex-col gap-2 mt-2">
                    <h2>{post.title}</h2>
                    <h2>{post.company}</h2>
                    <h2>{post.pay_range}</h2>
                    <h2>{post.location}</h2>
                </div>
            </div>
            <div className="w-full px-20">
                <p id="post_description">{post.description}</p>
            </div>
            
        </div>
    </div>
  )
}

export default PostDetail