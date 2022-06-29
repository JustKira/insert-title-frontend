import React from 'react'
import SignUp from '../RAL/SignUp'
import SignIn from '../RAL/SignIn'
const LandingRAL = () => {

    return (
        <div>
            <div className='h-screen flex items-center justify-center'>
                <SignUp/>
            </div>
            <div className='h-screen flex items-center justify-center'>
                <SignIn/>
            </div>
        </div>
    )
}

export default LandingRAL