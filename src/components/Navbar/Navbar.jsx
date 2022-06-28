import React from 'react'

import {ReactComponent as IT_LOGO} from '../../svg/inserttitlelogo.svg'

const Navbar = () => {
    return (
        <div className='fixed w-full mt-2 z-10'>
            <nav className='flex items-center justify-between w-full pl-6 pr-2'>
                <IT_LOGO height='50' className='drop-shadow-blueglow'/>
                <div>
                    <ul>
                        <li className='inline-block mr-10'>POST</li>
                        <li className='inline-block mr-10'>CV-BUILDER</li>
                        <li className='inline-block mr-10'>ROAD-MAP</li>
                        <li className='inline-block mr-10'>PROFILE</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar