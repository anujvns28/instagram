import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSignupData } from '../../../slice/auth';
import { useForm } from 'react-hook-form';
import { sendOtp } from '../../../service/operation/Auth';

const AddBirthday = ({setStep}) => {
    const {signupData} = useSelector((state) => state.auth)
    const [date,setDate] = useState();
    const dispatch = useDispatch();

    const handleDate = async() =>{

        if(date){
            setStep(3);
            const data = {
                ...signupData,
                dateOfBirth:date
            }
            dispatch(setSignupData(data))
        }

        await sendOtp(signupData.email)
    }
    
    
    return (
        <div className='w-full h-full px-4 flex flex-col gap-1 '>
            <p className='font-semibold text-sm text-center'>Add Your Birthday</p>
            <p className='text-sm text-center'>This won't be a part of your public profile. </p>

            <input
                type='date'
                className='text-center'
                onChange={(e) => setDate(e.target.value)}
            />

            <p className='text-xs text-center'>You need to enter the date you were born</p>
            <p className='text-xs text-center'>Use your own birthday, even if this account is for a business, a pet, or something else</p>

            <button onClick={handleDate}
            className='w-full rounded-md text-white py-1 bg-blue-400 mt-4 mb-3'>Next
            </button>

            <span
                onClick={() => setStep(1)}
                className='text-blue-700 pb-5 text-center font-semibold cursor-pointer'>
                Go back
            </span>
        </div>
    )
}

export default AddBirthday
