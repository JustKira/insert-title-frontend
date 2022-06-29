import React from 'react'

const Radio = ({
    id,
    label,
    ifChecked,
    isChecked,
    ...other
}) => {

    if (isChecked === 'true') {
        return (
            <div>
                <input
                    type='radio'
                    id={id}
                    defaultChecked
                    className='form-check-input appearance-none rounded-full h-5 w-5 mx-2 border-2 b-1 border-blue-500 bg-white checked:bg-blue-500 checked:blue-500'
                    {...other}/>
                <label for={id} className="text-xl font-light">{label}</label>
            </div>
        )
    } else {
        return (
            <div>
                <input
                    type='radio'
                    id={id}
                    className='form-check-input appearance-none rounded-full h-5 w-5 mx-2 border-2 b-1 border-blue-500 bg-white checked:bg-blue-500 checked:blue-500'
                    {...other}/>
                <label for={id} className="text-xl font-light">{label}</label>
            </div>
        )
    }
}

export default Radio