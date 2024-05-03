import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { setSignupData } from '../../../slice/auth';
import { checkUsername } from '../../../service/operation/Auth';

const SignupForm = ({setStep}) => {
    const {register,handleSubmit,formState:{errors},getValues,setValue} = useForm();
    const [email,setEmail] = useState("");
    const [error,setError] = useState(false);
    const [expactedUsernames,setExpactedUsernames] = useState();

    const dispatch = useDispatch();
    const {signupData} = useSelector((state) => state.auth)

    const handleForm  = async(data) => {
        setStep(2)
        dispatch(setSignupData(data))
    }

    useEffect(() => {
    if(signupData){
      setValue("email",signupData.email);
      setValue("fullName",signupData.fullName)
      setValue("username",signupData.username)
    }
    },[])

    const fetchUsernames = async () => {
      console.log("calling...")
      const result = await checkUsername({email:email},setError)
      if(result){
        console.log(result.usernames,"this is result")
        setExpactedUsernames(result.usernames)
      }
    }

    useEffect(() => {
    if(email.includes("@gmail.com")){
    fetchUsernames()
    }
    },[email])
    
  return (
    <form onSubmit={handleSubmit(handleForm)} className='w-full h-full px-11 flex flex-col gap-2 py-3'>
    <p className='font-semibold text-center pb-4'>Sign up to see photos and videos from your friends.</p>

    <input
        className='w-full  border border-black rounded-sm text-sm p-2 bg-slate-50 outline-none'
         placeholder='Email'
         {...register("email",{required:true})}
         type='email'
         onChange={(e)=> setEmail(e.target.value)}
    />
    {
        errors.email && 
        <span className="ml-2 text-xs tracking-wide text-pink-200">
        email is required
      </span>
    }

{
        error && 
        <span className="ml-2 text-xs tracking-wide text-pink-200">
        email is alredy rejustered
      </span>
    }

    <input
        className='w-full border border-black rounded-sm text-sm p-2 bg-slate-50 outline-none'
        placeholder='Full Name'
        {...register("fullName",{required:true})}
        type='text'
    />
    {
        errors.fullName && 
        <span className="ml-2 text-xs tracking-wide text-pink-200">
        Name is required
      </span>
    }

    <input
        className='w-full  border border-black rounded-sm text-sm p-2 bg-slate-50 outline-none'
         placeholder='Username'
         {...register("username",{required:true})}
         type='text'
    />
    {
        errors.username && 
        <span className="ml-2 text-xs tracking-wide text-pink-200">
        Username is required
      </span>
    }

  {
    expactedUsernames && 
    <div className='flex flex-row gap-2 '>
    <div onClick={() => setValue("username",expactedUsernames[0])}
    className='w-full  border border-black rounded-sm text-sm p-2 bg-slate-50 cursor-pointer'>
    {expactedUsernames[0]}
    </div>
    <div onClick={() => setValue("username",expactedUsernames[1])}
    className='w-full  border border-black rounded-sm text-sm p-2 bg-slate-50 cursor-pointer'>
      {expactedUsernames[1]}
    </div>
  </div>
  }

    <input
        className='w-full border border-black rounded-sm text-sm p-2 bg-slate-50 outline-none'
        placeholder='Password'
        {...register("password",{required:true})}
        type='password'
    />
    {
        errors.fullName && 
        <span className="ml-2 text-xs tracking-wide text-pink-200">
        Pasword is required
      </span>
    }

    <p className='text-xs text-center'>People who use our service may have uploaded your contact information to Instagram. Learn More</p>

    <button className='w-full rounded-md py-1 bg-blue-400 mt-4 mb-3'>Sign Up</button>

</form>
  )
}

export default SignupForm
