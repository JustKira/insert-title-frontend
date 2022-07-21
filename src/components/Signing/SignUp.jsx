import React, {useEffect, useRef} from 'react'
import Button from '../Inputs/Button'
import InputField from '../Inputs/InputField'
import Radio from '../Inputs/Radio'
import gsap from 'gsap'
import {useFormik} from 'formik'
import {signupSchema} from '../FormValidators/Vaildators'




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
                toggleActions: "play none none reset"
            }
        })
    }, [])

    const onSubmit = (values, actions) => {
        console.log(values)
        console.log(actions)
    }

    const {
        values,
        errors,
        touched,
        handleSubmit,
        handleBlur,
        handleChange
    } = useFormik({
        initialValues: {
            username: "",
            firstname: "",
            lastname: "",
            email: "",
            phone_number:"",
            password: "",
            conpassword: "",    
            userType: "S",
        },
        validationSchema: signupSchema,
        onSubmit
    })

    console.log(values)
    return (
        <div
            className='flex items-center justify-center drop-shadow-2xl'
            ref={signup_container}>
            <div className=' flex-col items-center justify-center'>
                <h1 className='mb-10 capitalize text-xl'>
                    Sign Up
                </h1>
                <form onSubmit={handleSubmit} autoComplete='off'>
                    <div className='mt-6 relative'>
                        <label className='block font-light text-lg capitalize'>user name</label>
                        <InputField
                            id="username"
                            name="username"
                            type='text'
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="nickname"/> {errors.username && touched.username && <p
                            className='bottom-0 text-sm font-light left-0 translate-y-6 absolute text-red-400'>{errors.username}</p>}
                    </div>
                    <div className='flex'>
                    <div className='mt-6 relative'>
                        <label className='block font-light text-lg capitalize'>first name</label>
                        <InputField
                            id="firstname"
                            name="firstname"
                            type='text'
                            value={values.firstname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder=". . ."/> {errors.firstname && touched.firstname && <p
                            className='bottom-0 text-sm font-light left-0 translate-y-6 absolute text-red-400'>{errors.firstname}</p>}
                    </div>
                    <div className='mt-6 relative'>
                        <label className='block font-light text-lg capitalize'>last name</label>
                        <InputField
                            id="lastname"
                            name="lastname"
                            type='text'
                            value={values.lastname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder=". . ."/> {errors.lastname && touched.lastname && <p
                            className='bottom-0 text-sm font-light left-0 translate-y-6 absolute text-red-400'>{errors.lastname}</p>}
                    </div>
                    
                    </div>
                    <div className='mt-6 relative'>
                        <label className='block font-light text-lg capitalize'>email</label>
                        <InputField
                            id="email"
                            name="email"
                            type='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="adress@email.com"/> {errors.email && touched.email && <p
                            className='bottom-0 text-sm font-light left-0 translate-y-6 absolute text-red-400'>{errors.email}</p>}
                    </div>
                    <div className='mt-6 relative'>
                        <label className='block font-light text-lg capitalize'>phonenumber</label>
                        <InputField
                            id="phone_number"
                            name="phone_number"
                            type='number'
                            value={values.phone_number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder=". . . ."/> {errors.phone_number && touched.phone_number && <p
                            className='bottom-0 text-sm font-light left-0 translate-y-6 absolute text-red-400'>{errors.phone_number}</p>}
                    </div>
                    <div className='mt-6 relative'>
                        <label className='block font-light text-lg capitalize'>password</label>
                        <InputField
                            id="password"
                            name="password"
                            type='password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="********"/> {errors.password && touched.password && <p
                            className='bottom-0 text-sm font-light left-0 translate-y-6 absolute text-red-400'>{errors.password}</p>}
                    </div>
                    <div className='mt-6 relative'>
                        <label className='block font-light text-lg capitalize'>confirm password</label>
                        <InputField
                            id="conpassword"
                            name="conpassword"
                            type='password'
                            value={values.conpassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="********"/> {errors.conpassword && touched.conpassword && <p
                            className='bottom-0 text-sm font-light left-0 translate-y-6 absolute text-red-400'>{errors.conpassword}</p>}
                    </div>

                    <div className='flex px-4 mt-8 justify-between w-full'>
                        <Radio
                            id='2'
                            label='Student'
                            isChecked='true'
                            value='S'
                            name="userType"
                            onChange={handleChange}/>
                        <Radio
                            id='1'
                            label='Recruiter'
                            isChecked='false'
                            value='R'
                            name="userType"
                            onChange={handleChange}/>
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