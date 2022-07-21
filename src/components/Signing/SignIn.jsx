import React, {useEffect, useRef} from 'react'
import Button from '../Inputs/Button'
import InputField from '../Inputs/InputField'
import gsap from 'gsap'
import { useDispatch } from 'react-redux/es/exports'
import {useFormik} from 'formik'
import {signinSchema} from '../FormValidators/Vaildators'
import { getAuth } from '../../redux/auth'

const SignIn = ({children}) => {

    
    const signin_container = useRef(null)
    const dispatch = useDispatch()

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
                toggleActions: "play none none reset"
            }
        })
    }, [])

    const onSubmit = (values, actions) => {
        console.log(values)
        console.log(actions)
        dispatch(getAuth(values))
        
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
            password: ""
        },
        onSubmit
    })

    return (
        <div
            className='flex items-center justify-center drop-shadow-2xl'
            ref={signin_container}>
            <div className=' flex-col items-center justify-center'>
                <h1 className='mb-10 capitalize text-xl'>
                    Sign In
                </h1>
                <form onSubmit={handleSubmit} autoComplete='off'>
                    <div className='mt-6 relative'>
                        <label className='block font-light text-lg capitalize'>username</label>
                        <InputField
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type='text'
                            placeholder="adress@email.com"/> {errors.username && touched.username && <p
                            className='bottom-0 text-sm font-light left-0 translate-y-6 absolute text-red-400'>{errors.username}</p>}
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
                    <div className='flex justify-center items-center mt-4'>
                        <Button type="submit" >Sign In</Button>
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