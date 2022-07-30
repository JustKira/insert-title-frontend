import React from 'react'
import Button from '../Inputs/Button'
import InputField from '../Inputs/InputField'
import { useSelector } from 'react-redux/es/exports'
import TextArea from '../Inputs/TextArea'
const ProfileField = ({
    type,
    ...others
}) => {
    return (<input
        type={type}
        {...others}
        className='bg-gray-50 border border-gray-400 w-full h-10 p-4 text-gray-900 text-sm rounded-full drop-shadow-lg'/>)
}

const ProfileHandler = () => {

    const userValues = useSelector((state) => state.user.values.data)

    return (
        <div className='flex flex-col items-center w-full font-light text-base'>
            <div className='flex justify-between w-1/2 items-center my-4'>
                <div className='flex items-center'>
                    <div
                        className='w-32 h-32 rounded-full bg-white border-gray-400 border-2 drop-shadow-4xl'><img src=''/></div>
                </div>
                <Button>Change Image</Button>
            </div>
            <div className='flex flex-col items-center w-1/2 my-4'>
                <div className='w-full my-4'>
                    <label className='block capitalize'>user-name</label>
                    <ProfileField type='text' name='username' placeholder={userValues.username}/>
                </div>
                <div className='w-full my-4'>
                    <label className='block capitalize'>first-name</label>
                    <ProfileField type='text' name='firstname' placeholder={userValues.firstname}/>
                </div>
                <div className='w-full my-4'>
                    <label className='block capitalize'>last-name</label>
                    <ProfileField type='text' name='lastname' placeholder={userValues.lastname}/>
                </div>
                <div className='w-full my-4'>
                    <label className='block  capitalize'>phonenumber</label>
                    <ProfileField type='number' name='phonenumber' placeholder={userValues.phonenumber}/>
                </div>
                <div className='w-full my-4'>
                    <label className='block  capitalize'>birthdate</label>
                    <ProfileField type='date' name='birthdate' placeholder={userValues.birthdate}/>
                </div>
                <div className='w-full my-4'>
                    <label className='block  capitalize'>bio</label>
                    <TextArea placeholder={userValues.bio}/>
                </div>
                <div className='w-full my-4'>
                    <label className='block  capitalize'>undergraduate year</label>
                    <ProfileField type='number' name='undergraduate_year' placeholder={userValues.undergraduate_year}/>
                </div>
                <div className='w-full my-4'>
                    <label className='block  capitalize'>languages</label>
                    <TextArea placeholder={userValues.languages}/>
                </div>
                <div className='w-full my-4'>
                    <label className='block  capitalize'>github link</label>
                    <ProfileField type='url' name='github_link' placeholder={userValues.github_link}/>
                </div>
                <div className='w-full my-4'>
                    <label className='block  capitalize'>linkedin link</label>
                    <ProfileField type='url' name='linkedin_link' placeholder={userValues.linkedin_link}/>
                </div>
                <div className='w-full my-4'>
                    <label className='block  capitalize'>other website links</label>
                    <ProfileField type='url' name='other_website_links' placeholder={userValues.other_website_links}/>
                </div>
                <div className='w-full my-4'>
                    <label className='block  capitalize'>contact links</label>
                    <ProfileField type='url' name='contact_links' placeholder={userValues.contact_links}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileHandler