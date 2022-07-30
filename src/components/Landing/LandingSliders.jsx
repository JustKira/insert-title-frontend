import React, {useEffect, useRef, useState} from 'react'

import {ReactComponent as Imgslide1} from '../../svg/landing_sliders/lp_1.svg'
import {ReactComponent as Imgslide2} from '../../svg/landing_sliders/lp_2.svg'
import {ReactComponent as Imgslide3} from '../../svg/landing_sliders/lp_3.svg'

import LandingSlide from './LandingSlide'
import Radio from '../Inputs/Radio'

import gsap from 'gsap'

const LandingSliders = () => {

    const slider_container = useRef(null)
    const radios_buttons = useRef(null)

    const [slide,
        setSlide] = useState(0)

    useEffect(() => {

        gsap.fromTo(slider_container.current, {
            x: '30rem',
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: radios_buttons.current,
                toggleActions: "play none none none"
            }
        })
    }, [slide])

    useEffect(()=> {
        gsap.fromTo(radios_buttons.current, {
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            delay:0.3,
            duration: 1.5,
            scrollTrigger: {
                trigger: radios_buttons.current,
                toggleActions: "play none none none"
            }
        })
    },[])

    const SlideHandler = () => {
        if (slide === 1) {
            //return slide
            return (
                <LandingSlide
                    title='CV - BUILDER'
                    desc='GET YOUR CV LOOK PRO WITH LOW EFFORT, HELP YOU IMPROVE ON IT WITH ALOT OF TEMPLETS READY FOR YOU'><img src='./assets/lp_2.png' width='800' className=' drop-shadow-blueglow'/></LandingSlide>
            )
        } else if (slide === 2) {
            return (
                <LandingSlide
                    title='ROAD MAPPER'
                    desc='WANT TO LEARN NEW SKILLS , WE GENERATE CUSTOM ROAD-MAP SUITS YOUR GOALS'><img src='./assets/lp_3.png' width='800' className=' drop-shadow-blueglow'/></LandingSlide>
            )
        } else {
            return (
                <LandingSlide
                    title='INTERNSHIPS'
                    desc='WE HELP YOU GET EXPERINCE , SKILLS AND KNOWLAGE TO BE READY FOR YOUR JOB'><img src='./assets/lp_1.png' width='800' className=' drop-shadow-blueglow'/></LandingSlide>
            )
        }
    }

    return (
        <div className='flex items-center justify-between'>
            <div className='flex flex-col ml-10' ref={radios_buttons}>
                <Radio
                    id='1'
                    label=''
                    isChecked='true'
                    onChange={() => {
                    setSlide(0)
                }}
                    name="slider-radio"/>
                <Radio
                    id='2'
                    label=''
                    isChecked='false'
                    onChange={() => {
                    setSlide(1)
                }}
                    name="slider-radio"/>
                <Radio
                    id='3'
                    label=''
                    isChecked='false'
                    onChange={() => {
                    setSlide(2)
                }}
                    name="slider-radio"/>
            </div>
            <div className='w-full' ref={slider_container}>
                <SlideHandler/>
            </div>

        </div>
    )
}

export default LandingSliders