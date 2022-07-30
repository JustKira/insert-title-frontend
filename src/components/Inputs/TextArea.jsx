import React from 'react'

const TextArea = ({...others}) => {
  return (
    <textarea {...others} className='bg-gray-50 border border-gray-300 w-full p-4 text-gray-900 text-sm rounded-md drop-shadow-lg h-36'></textarea>
  )
}

export default TextArea