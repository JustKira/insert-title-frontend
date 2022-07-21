import React from 'react'
import Button from '../Inputs/Button'
import InputField from '../Inputs/InputField'

const ProfileField = ({
    type,
    ...others
}) => {
    return (<input
        type={type}
        {...others}
        className='bg-gray-50 border border-gray-300 w-full h-10 p-4 text-gray-900 text-sm rounded-full drop-shadow-lg'/>)
}

const ProfileHandler = () => {
    return (
        <div className='flex flex-col items-center w-full font-light text-base'>
            <div className='flex justify-between w-1/2 items-center my-4'>
                <div className='flex items-center'>
                    <div
                        className='w-32 h-32 rounded-full bg-white border-gray-300 border-2 drop-shadow-4xl'><img src=''/></div>
                </div>
                <Button>Change Image</Button>
            </div>
            <div className='flex flex-col items-center w-1/2 my-4'>
                <div className='w-full my-4'>
                    <label className='block capitalize'>user-name</label>
                    <ProfileField type='text' name='username'/>
                </div>
                <div className='w-full my-4'>
                    <label className='block capitalize'>first-name</label>
                    <ProfileField type='text' name='firstname'/>
                </div>
                <div className='w-full my-4'>
                    <label className='block capitalize'>last-name</label>
                    <ProfileField type='text' name='lastname'/>
                </div>
                <div className='w-full my-4'>
                    <label className='block  capitalize'>location</label>
                    <ProfileField type='text' name='location'/>
                </div>
                <div className='w-full my-4'>
                    <label className='block  capitalize'>phonenumber</label>
                    <ProfileField type='number' name='phonenumber'/>
                </div>
            </div>
        </div>
    )
}

export default ProfileHandler