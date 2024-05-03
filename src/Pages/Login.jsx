import React, { useEffect } from 'react'
import AuthTemplet from '../Component/Core/Auth/AuthTemplet'
import { useDispatch } from 'react-redux'
import { setSignupData } from '../slice/auth';

const Login = () => {
  const dispatch = useDispatch();

  // setSignupData null
  useEffect(() => {
   dispatch(setSignupData(null))
  },[])
  return (
    <div className='w-full h-full'>
      <AuthTemplet isLogin={true}/>
    </div>
  )
}

export default Login
