import React from 'react'
import { useSelector } from 'react-redux'
import {Link, useSearchParams} from 'react-router-dom'

import {ReactComponent as IT_LOGO} from '../../svg/inserttitlelogo.svg'

const Navbar = () => {
    const redux = useSelector((state)=> state.auth.values.data)

    const ProfileSwitch = () => {
        try {
            if(redux.refresh != '' || redux.refresh != undefined) {
                return <Link to="/profile">PROFILE</Link>
            }
        } catch (error) {
            
        }
        return <Link to="/signing">LOGIN</Link>
    
    }
    return (
        <div className='h-16'>
            <div className='fixed w-full mt-2 z-10'>
                <nav className='flex items-center justify-between w-full pl-6 pr-2'>
                    <Link to="/"><IT_LOGO height='50' className='drop-shadow-blueglow'/></Link>
                    <div>
                        <ul>
                            <li className='inline-block mr-10'>
                                <Link to="/posts">POST</Link>
                            </li>
                            <li className='inline-block mr-10'>
                                <Link to="/cv-builder">CV-BUILDER</Link>
                            </li>
                            <li className='inline-block mr-10'>
                                <Link to="/road-map">ROAD-MAP</Link>
                            </li>
                            <li className='inline-block mr-10'>
                                <ProfileSwitch />
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar