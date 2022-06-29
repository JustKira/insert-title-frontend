import React from 'react'
import Button from '../Inputs/Button'
import InputField from '../Inputs/InputField'
const SignIn = () => {
  return (
    <div className='flex items-center justify-center drop-shadow-2xl'>
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
        </form>
    </div>

</div>
  )
}

export default SignIn