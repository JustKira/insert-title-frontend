import React, {useEffect, useRef} from 'react'
import Button from '../Inputs/Button'
import InputField from '../Inputs/InputField'
import gsap from 'gsap'

const SignIn = ({children}) => {


    const signin_container = useRef(null)

    useEffect(() => {
        gsap.fromTo(signin_container.current, {
            opacity: 0,
            y: 100,
            rotateY: 45
        }, {
            opacity: 1,
            duration: 1,
            rotateY: 0,
            y: 0,
            scrollTrigger: {
                trigger: signin_container.current,
                toggleActions: "play none resume reset"
            }
        })
    }, [])

    return (
        <div className='flex items-center justify-center drop-shadow-2xl' ref={signin_container}>
            <div className=' flex-col items-center justify-center'>
                <h1 className='mb-10 capitalize text-xl'>
                    Sign In
                </h1>
                <form>
                    <div className='mt-4'>
                        <label className='block font-light text-lg capitalize'>email</label>
                        <InputField type='email' placeholder="adress@email.com"/>
                    </div>
                    <div className='mt-4'>
                        <label className='block font-light text-lg capitalize'>password</label>
                        <InputField type='password' placeholder="********"/>
                    </div>
                    <div className='flex justify-center items-center mt-4'>
                        <Button>Sign In</Button>
                    </div>
                    <div className='flex justify-center items-center mt-4'>
                        {children}
                    </div>
                </form>
            </div>

        </div>
    )
}

export default SignIn