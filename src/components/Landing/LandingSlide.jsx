import React from 'react'

const LandingSlide = ({children, title, desc}) => {
    return (
        <div className='flex items-center justify-between w-full h-screen p-10'>
            <div>
                <h1 className='text-blue-400 font-bold text-6xl font'>INSERT TITLE</h1>
                <h2 className='font-light text-3xl'>{title}</h2>
                <h3 className='font-extralight text-xl'>{desc}</h3>
            </div>

            {children}

        </div>
    )
}

export default LandingSlide