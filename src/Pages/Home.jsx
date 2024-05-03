import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const {token} = useSelector((state) => state.auth);

  //check token
  useEffect(() => {
  if(!token){
    navigate('/login')
  }
  },[])

  return (
    <div>
      
    </div>
  )
}

export default Home
