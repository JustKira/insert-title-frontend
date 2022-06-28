import React from 'react'
import Button from '../Inputs/Button'

//import images
import {ReactComponent as Hero} from '../../svg/hero.svg'

import LandingSliders from './LandingSliders'
const Landing = () => {
    return (
        <div>
            <div className='flex items-center justify-between w-full h-screen p-10'>
                <div>
                    <h1 className='text-blue-400 font-bold text-6xl font'>INSERT TITLE</h1>
                    <h2 className='font-light text-3xl'>WE HELP YOU REACH YOUR GOAL</h2>
                    <h3 className='font-extralight text-xl'>WE PROVIDE YOU WITH , INTERNSHIPS , CV-BUILDER AND ROADMAP TO UP YOUR SKILLS</h3>
                    <Button>Hello world</Button>
                    <Button hollow={true}>Hello world</Button>
                </div>
                <div>
                    <Hero width='600' height='600' className='drop-shadow-blueglow'/>
                </div>
            </div>

            <LandingSliders/>
        </div>

        
    )
}

export default Landing