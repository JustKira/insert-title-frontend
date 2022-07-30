import React from 'react'
import AddPostForm from '../components/Posts/R/AddPostForm'

const AddPost = () => {

    return (
        <div className=' flex-col items-center justify-center px-8 py-2'>
            <h1 className='mb-10 capitalize text-xl'>
                Add Post
            </h1>
            <AddPostForm/>
        </div>
    )
}

export default AddPost