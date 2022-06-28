import React, {useEffect, useState} from 'react'

import {ReactComponent as Imgslide1} from '../../svg/landing_sliders/lp_1.svg'
import {ReactComponent as Imgslide2} from '../../svg/landing_sliders/lp_2.svg'
import {ReactComponent as Imgslide3} from '../../svg/landing_sliders/lp_3.svg'

import LandingSlide from './LandingSlide'
import Radio from '../Inputs/Radio'

const LandingSliders = () => {

    const SlideHandler = () => {
        if (slide === 1) {
            //return slide
            return (
                <LandingSlide
                    title='CV - BUILDER'
                    desc='GET YOUR CV LOOK PRO WITH LOW EFFORT, HELP YOU IMPROVE ON IT WITH ALOT OF TEMPLETS READY FOR YOU'></LandingSlide>
            )
        } else if (slide === 2) {
            return (
                <LandingSlide
                    title='ROAD MAPPER'
                    desc='WANT TO LEARN NEW SKILLS , WE GENERATE CUSTOM ROAD-MAP SUITS YOUR GOALS'></LandingSlide>
            )
        } else {
            return (
                <LandingSlide
                    title='INTERNSHIPS'
                    desc='WE HELP YOU GET EXPERINCE , SKILLS AND KNOWLAGE TO BE READY FOR YOUR JOB'></LandingSlide>
            )
        }
    }

    const [slide,
        setSlide] = useState(0)

        useEffect(() => {
            console.log(slide)
        }, [slide])
        
    return (
        <div className='flex items-center justify-between'>
            <SlideHandler/>

            <div className='flex flex-col ml-10'>
                <Radio id='1' label='' isChecked='true' onChange={()=>{setSlide(0)}} name="slider-radio"/>
                <Radio id='1' label='' isChecked='false' onChange={()=>{setSlide(1)}}  name="slider-radio"/>
                <Radio id='1' label='' isChecked='false' onChange={()=>{setSlide(2)}}  name="slider-radio"/>
            </div>
        </div>
    )
}

export default LandingSliders