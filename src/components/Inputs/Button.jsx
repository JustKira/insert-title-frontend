import React from 'react'

const Button = ({children, hollow}) => {
    if (hollow === true) {
        return (
            <button
                class="relative inline-flex items-center justify-center w-48 h-12 p-0.5 mb-4 mt-4 mr-4 overflow-hidden text-sm font- text-gray-900 rounded-full group bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white">
                <span
                    class="relative px-5 py-3 transition-all ease-in w-48 duration-75 bg-white rounded-full group-hover:bg-opacity-0">
                    {children}
                </span>
            </button>
        )
    } else {
        return (
            <button
                className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm  w-48 h-12 rounded-full mr-4 mt-4 mb-4 transition-all ease-in duration-75 group-hover:from-cyan-700 group-hover:to-blue-700'>
                {children}
            </button>
        )
    }

}

export default Button