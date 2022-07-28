import React, {useEffect, useState} from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { useSelector } from 'react-redux'
const Signing = () => {

    const status = useSelector((state) => state.auth.values)

    const [signUp,
        setSignUp] = useState(true)

    const [logged,setLogged] = useState(false)

    const SigningSwitcher = () => {

        //Status Check

        if (signUp === true) {
            return (
                <div className='h-screen flex-col items-center justify-center'>
                    <SignUp>
                        Already got account &nbsp;<a className='cursor-pointer text-blue-500' onClick={() => setSignUp(false)}>
                            Sign in
                        </a>
                        &nbsp; then
                    </SignUp>
                </div>
            )
        } else {
            return (

                <div className='h-screen flex-col items-center justify-center'>
                    {/* REMOVE WHEN ADD PROPER POPUP HANDLER */}
                    
                    {logged? <h1 className='mt-10 mb-20 text-3xl font-light bg-gradient-to-r from-cyan-400 to-blue-400 text-center'>Login Was Succesfull</h1>:<div></div>}
                    <SignIn>
                        Dont have account make one &nbsp;<a className='cursor-pointer text-blue-500' onClick={() => setSignUp(true)}>
                            Sign in</a>
                            
                
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

export default Signing