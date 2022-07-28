import React, {useEffect, useRef} from 'react'
import Button from '../components/Inputs/Button'

//import images
import {ReactComponent as Hero} from '../svg/hero.svg'

import LandingSliders from '../components/Landing/LandingSliders'

import gsap from 'gsap'
import Signing from '../components/Signing/Signing'

const Landing = () => {

    const container = useRef(null)
    const button_container = useRef(null)
    const scroll_to_sign = useRef(null)
    const scroll_to_slider = useRef(null)

    const ScrollToSign = () => scroll_to_sign.current.scrollIntoView()    
    const ScrollToSlider = () => scroll_to_sign.current.scrollIntoView()    

    useEffect(() => {
        gsap.fromTo(container.current.children[0], {
            x: 300,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5
        })

        gsap.fromTo(container.current.children[1], {
            opacity: 0
        }, {
            opacity: 1,
            duration: 1,
            delay: 1.5
        })
        gsap.fromTo(button_container.current, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 1,
            delay: 2
        })
    }, [])

    return (
        <div>
            <div
                className='flex items-center justify-between w-full h-screen p-10'
                ref={container}>
                <div>
                    <h1 className='text-blue-500 font-bold text-6xl font'>INSERT TITLE</h1>
                    <h2 className='font-light text-3xl'>WE HELP YOU REACH YOUR GOAL</h2>
                    <h3 className='font-extralight text-xl'>WE PROVIDE YOU WITH , INTERNSHIPS , CV-BUILDER AND ROADMAP TO UP YOUR SKILLS</h3>
                    <div ref={button_container}>
                        <Button>Join Now</Button>
                        <Button hollow={true}>More Info</Button>
                    </div>
                </div>

                <div>
                    <Hero width='600' height='600' className='drop-shadow-blueglow'/>
                </div>
            </div>
            <LandingSliders ref={scroll_to_slider}/>
            <Signing ref={scroll_to_sign}/>
        </div>

    )
}

export default Landing