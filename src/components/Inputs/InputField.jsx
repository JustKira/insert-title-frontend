import { Input } from 'postcss'
import React from 'react'

const InputField = ({type,...others}) => {
  return (
    <input type={type} {...others} className='bg-gray-50 border border-gray-300 w-full h-10 p-4 text-gray-900 text-sm rounded-full drop-shadow-lg'/>
  )
}

export default InputField