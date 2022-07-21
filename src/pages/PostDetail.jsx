import React, { useRef, useEffect } from 'react'
import InputField from '../components/Inputs/InputField'
import TextArea from '../components/Inputs/TextArea'

const PostDetail = ({ post }) => {


    const selectDocument = useRef(null)

    useEffect(()=>{
        selectDocument.current.innerHTML = post.description
    }, [])

  return (
    <div className="container mx-auto px-4 md:px-15">
        <div className='flex flex-col justify-center items-center w-full h-full mt-24 mb-12'>
            <div className="flex flex-wrap justify-center px-4 gap-10 w-full md:px-20 md:justify-start mb-10">
                <img className='rounded-full border-2 w-36 h-36 border-gray-300 drop-shadow-3xl' src={post.image} alt=''/>
                <div className="flex flex-col gap-2 mt-2 font-semibold">
                    <h2>{post.title}</h2>
                    <h2>{post.company}</h2>
                    <h2>{post.pay_range}</h2>
                    <h2>{post.location}</h2>
                </div>
            </div>
            <div className="w-full mb-10 px-12 sm:px-20">
                <p ref={selectDocument}></p>
            </div>
            <form className="w-full px-12 sm:px-20">
                {post.questions.map((question, id)=>{
                    if (question.type == "textarea"){
                        return(
                            <div key={id} className="my-2">
                                <label>{question.question}</label><br/>
                                <TextArea/>
                            </div>
                            )
                    }else if(question.type == "dropdown"){
                        return(
                            <div className="my-2" key={id}>
                                <label>{question.question}</label><br/>
                                <select className="px-6 py-2">
                                    {question.choices.map((choice, id)=>{
                                        return(
                                            <option key={id}>{choice}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            )
                    }else{
                        return(
                            <div className="my-2" key={id}>
                                <label>{question.question}</label>
                                <InputField type={question.type} />
                            </div>
                            )
                    }})}
            </form>
            
        </div>
    </div>
  )
}

export default PostDetail