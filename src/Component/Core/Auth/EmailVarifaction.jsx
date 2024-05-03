import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { signup } from '../../../service/operation/Auth';

const EmailVarifaction = ({setStep}) => {
    const {signupData} = useSelector((state) => state.auth)
    const [otp,setOtp] = useState();

   const handleSubmit = async() => {
    const data = {
        ...signupData,
        otp : otp
    }
     await signup(data);
   }
    
    return (
        <div className='w-full h-full px-4 flex flex-col gap-1 '>
            <p className='font-semibold text-sm text-center'>Enter Confirmation Code</p>
            <p className='text-sm pb-3 text-center'>Enter the confirmation code we sent to {signupData.email} {  }
            <span className='font-semibold text-blue-500 cursor-pointer hover:text-blue-700'>Resend Code</span>
             </p>

            <input
                type='number'
                placeholder='Confirmation Code'
                className='w-full  border border-black rounded-sm text-sm p-2 bg-slate-50 outline-none'
                onChange={(e) => setOtp(e.target.value)}
            />

            <button 
                onClick={handleSubmit}
                className='w-full rounded-md text-white py-1 bg-blue-400 mt-2 mb-3'>Next
            </button>

            <span
                onClick={() => setStep(1)}
                className='text-blue-700 pb-5 text-center font-semibold cursor-pointer'>
                Go back
            </span> 
            
        </div>
    )
}

export default EmailVarifaction
