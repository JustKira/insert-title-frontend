import React from 'react'
import { useSelector } from 'react-redux';
import {useLocation, Navigate ,Outlet} from 'react-router-dom';

const RequireAuth = () => {

    const location = useLocation();
    const state = useSelector((state) => state.auth.values.data);

    return (state?  <Outlet/> :  <Navigate to="/signing" state={{from : location}} replace/>)

}

export default RequireAuth