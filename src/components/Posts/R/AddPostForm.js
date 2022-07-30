import React, { useEffect, useRef } from 'react'
import {useFormik} from 'formik'
import {addPostSchema} from '../../FormValidators/Vaildators'
import InputField from '../../Inputs/InputField'
import TextArea from '../../Inputs/TextArea'
import { ref } from 'yup'

const AddPostForm = () => {

    const formikValues = useRef(null)

    const onSubmit = (values, actions) => {
        //Add Post
    }

    useEffect(() => {
        console.log(formikValues)
    }, [formikValues])
    
    const {
        values,
        errors,
        touched,
        handleSubmit,
        handleBlur,
        handleChange
    } = useFormik({
        innerRef:{formikValues},
        initialValues: {
            post_name: "",
            post_description: "",
            company: "",
            pay_range: "",
            location: ""
        },
        validationSchema: addPostSchema,
        onSubmit
    })

    return (
        <div className='flex w-full'>
            <form onSubmit={handleSubmit} autoComplete='off' className='w-1/2 px-12'>
                <div className='flex'>
                    <div className='flex items-center'>
                        <div
                            className='w-44 h-44 rounded-full bg-white border-gray-400 border-2 drop-shadow-4xl'><img src=''/></div>
                    </div>
                    <div className='mt-6 relative ml-10 w-full'>
                        <label className='block font-light text-lg capitalize'>post name</label>
                        <InputField
                            id="post_name"
                            name="post_name"
                            value={values.post_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type='text'
                            placeholder="..."/> {errors.post_name && touched.post_name && <p
                            className='bottom-0 text-sm font-light left-0 translate-y-6 absolute text-red-400'>{errors.post_name}</p>}
                    </div>
                </div>
                <div className='mt-6 relative'>
                    <label className='block font-light text-lg capitalize'>post description</label>
                    <TextArea
                        id="post_description"
                        name="post_description"
                        value={values.post_description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="..."/> {errors.post_description && touched.post_description && <p
                        className='bottom-0 text-sm font-light left-0 translate-y-6 absolute text-red-400'>{errors.post_description}</p>}
                </div>
                <div className='flex w-full'>
                    <div className='w-1/2 mt-6 relative'>
                        <label className='block font-light text-lg capitalize'>company</label>
                        <InputField
                            id="company"
                            name="company"
                            value={values.company}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type='text'
                            placeholder="..."/> {errors.company && touched.company && <p
                            className='bottom-0 text-sm font-light left-0 translate-y-6 absolute text-red-400'>{errors.company}</p>}
                    </div>
                    <div className='w-1/2 mt-6 relative'>
                        <label className='block font-light text-lg capitalize'>payrange</label>
                        <InputField
                            id="pay_range"
                            name="pay_range"
                            value={values.pay_range}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type='number'
                            placeholder="0"/> {errors.pay_range && touched.pay_range && <p
                            className='bottom-0 text-sm font-light left-0 translate-y-6 absolute text-red-400 align-middle'>{errors.pay_range}</p>}
                    </div>
                </div>
                <div className=' mt-6 relative'>
                    <label className='block font-light text-lg capitalize'>location</label>
                    <InputField
                        id="location"
                        name="location"
                        value={values.location}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type='text'
                        placeholder="..."/> {errors.location && touched.location && <p
                        className='bottom-0 text-sm font-light left-0 translate-y-6 absolute text-red-400'>{errors.location}</p>}
                </div>
            </form>
            <div className='w-1/2'>
                preview
            </div>
        </div>
    )
}

export default AddPostForm