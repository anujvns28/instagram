import React from 'react'
import AuthTemplet from '../Component/Core/Auth/AuthTemplet'

const Login = () => {
  return (
    <div className='w-full h-full'>
      <AuthTemplet isLogin={true}/>
    </div>
  )
}

export default Login
