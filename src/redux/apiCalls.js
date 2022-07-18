import {descriptionFetchFailure,descriptionFetchStart,descriptionFetchSuccess} from './posts'
import { publicRequest } from './../requestMethods';
import { failRegistering, loginFailure, loginStart, loginSuccess, startRegistering, successRegistering } from './user';

//===========login==========
export const login=async(dispatch,user)=>{

   
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/token/", user);
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}
//===========register===========
export const register=async(dispatch,user,navigate)=>{
    dispatch(startRegistering())
    try {
         await publicRequest.post("/register/", user);
        dispatch(successRegistering())
        navigate('/login')
    } catch (error) { dispatch(failRegistering())}
}

//==========card===========
export const cardDiscription=async(id,dispatch)=>{

    dispatch(descriptionFetchStart());
    try {
        const res = await publicRequest.get("/postings/"+id);
        dispatch(descriptionFetchSuccess(res.data))
    } catch (error) {
        dispatch(descriptionFetchFailure())
    }
}
// export const cardDiscription=(id)=>{

//     return async(dispatch)=>{
//         dispatch(descriptionFetchStart());
//         try {
//             const res = await publicRequest.get("/postings/"+id);
//             dispatch(descriptionFetchSuccess(res.data))
//         } catch (error) {
//             dispatch(descriptionFetchFailure())
//         }
//     }
//}