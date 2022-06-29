import React, {useEffect, useRef} from 'react'
import Button from '../Inputs/Button'
import InputField from '../Inputs/InputField'
import Radio from '../Inputs/Radio'
import gsap from 'gsap'

const SignUp = ({children}) => {

    const signup_container = useRef(null)

    useEffect(() => {
        gsap.fromTo(signup_container.current, {
            opacity: 0,
            y: 100,
            rotateY: 45
        }, {
            opacity: 1,
            duration: 1,
            rotateY: 0,
            y: 0,
            scrollTrigger: {
                trigger: signup_container.current,
                toggleActions: "play none resume reset"
            }
        })
    }, [])

    return (
        <div
            className='flex items-center justify-center drop-shadow-2xl'
            ref={signup_container}>
            <div className=' flex-col items-center justify-center'>
                <h1 className='mb-10 capitalize text-xl'>
                    Sign Up
                </h1>
                <form>
                    <div className='mt-4'>
                        <label className='block font-light text-lg capitalize'>user name</label>
                        <InputField type='text' placeholder="nickname"/>
                    </div>
                    <div className='mt-4'>
                        <label className='block font-light text-lg capitalize'>email</label>
                        <InputField type='email' placeholder="adress@email.com"/>
                    </div>
                    <div className='mt-4'>
                        <label className='block font-light text-lg capitalize'>password</label>
                        <InputField type='password' placeholder="********"/>
                    </div>
                    <div className='mt-4 mb-8'>
                        <label className='block font-light text-lg capitalize'>confirm password</label>
                        <InputField type='password' placeholder="********"/>
                    </div>
                    <div className='flex px-4 justify-between w-full'>
                        <Radio
                            id='2'
                            label='Student'
                            isChecked='true'
                            value='Student'
                            name="user-type"
                            ifChecked={() => console.log('')}/>
                        <Radio
                            id='1'
                            label='Recruiter'
                            isChecked='false'
                            value='Recruiter'
                            name="user-type"
                            ifChecked={() => console.log('')}/>
                    </div>
                    <div className='flex justify-center items-center mt-4'>
                        <Button>CREATE ACCOUNT</Button>
                    </div>
                    <div className='flex justify-center items-center mt-4'>
                        {children}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp