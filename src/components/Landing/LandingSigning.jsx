import React, {useEffect, useState} from 'react'
import SignUp from '../Signing/SignUp'
import SignIn from '../Signing/SignIn'
const LandingSigning = () => {

    const [signUp,
        setSignUp] = useState(true)
    useEffect(() => {}, [])

    const SigningSwitcher = () => {

        if (signUp === true) {
            return (
                <div className='h-screen flex items-center justify-center'>
                    <SignUp>
                     Already got account &nbsp;<a className='cursor-pointer text-blue-500' onClick={() => setSignUp(false)}> Sign in </a> &nbsp; then
                    </SignUp>
                </div>
            )
        } else {
            return (

                <div className='h-screen flex items-center justify-center'>
                    <SignIn>
                        Dont have account make one &nbsp;<a className='cursor-pointer text-blue-500' onClick={() => setSignUp(true)}> Sign in</a>
                    </SignIn>
                </div>

            )
        }
    }

    return (
        <div>
            <SigningSwitcher/>
        </div>
    )
}

export default LandingSigning