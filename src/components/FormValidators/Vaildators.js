import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const signupSchema = yup.object().shape({
    username: yup.string().required("Required"),
    firstname: yup.string().required("Required"),
    lastname: yup.string().required("Required"),
    email: yup.string().email("Please Enter valid email").required("Required"),
    phone_number: yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Required"),
    password: yup.string().min(8).matches(passwordRules,{message:"Please Create a stronger password"}).required("Required"),
    password2: yup.string().oneOf([yup.ref('password'),null],"Password Must match").required("Required")
})

export const signinSchema = yup.object().shape({
    // email: yup.string().email("Please Enter valid email").required("Required"),
    username: yup.string().required("Required"),
    password: yup.string().required("Required"),
    
})

export const addPostSchema = yup.object().shape({
    post_name: yup.string().required("Required"),
    post_description: yup.string().required("Required"),
    company: yup.string().required("Required"),
    pay_range: yup.number().moreThan(-1,'use ZERO for no payrange or add a vaild postive number').required("Required"),
    location: yup.string().required("Required")
})