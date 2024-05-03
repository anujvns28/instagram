import React, { useState } from 'react'
import logo from "../../../assets/insta logo.png"
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AddBirthday from './AddBirthday'
import EmailVarifaction from './EmailVarifaction'

const AuthTemplet = ({ isLogin }) => {
  const [step,setStep] = useState(1);
  const navigate = useNavigate();
  const {signupData} = useSelector((state) => state.auth)

  return (
    <div className='w-screen h-screen flex  items-center justify-center'>
      <div className='flex flex-col gap-5 w-[23%] mx-auto  '>
        <div className='border border-black '>
          <div className='flex flex-col items-center justify-center'>
            <img className='w-[200px] '
              src={logo} />
          </div>
          {/* login or signup form */}
          <div>
            {isLogin && <LoginForm /> }
            {
              !isLogin &&
              <div>
            {step == 1 && <SignupForm setStep={setStep}/>}
            {step == 2 && <AddBirthday setStep={setStep}/>}
            {step == 3 && <EmailVarifaction setStep={setStep} /> }
              </div>
            }
            
          </div>
        </div>

        <div className='border border-black flex items-center justify-center text-sm py-3'>
          {isLogin ?
            <p>Don't have an account?
              <span onClick={() => navigate("/signup")}
                className='text-blue-500 cursor-pointer'>
                Sign up
              </span>
            </p>
            : <p>Have an account?
              <span
                onClick={() => navigate("/login")}
                className='text-blue-500 cursor-pointer'>
                Log in
              </span>
            </p>}
        </div>
      </div>
    </div>
  )
}

export default AuthTemplet
