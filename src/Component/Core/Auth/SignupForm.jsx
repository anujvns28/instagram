import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'

const SignupForm = () => {
    const {register,handleSubmit,formState:{errors},} = useForm();

    const handleForm  = async(data) => {
        console.log(data)
    }
  return (
    <form onSubmit={handleSubmit(handleForm)} className='w-full h-full px-11 flex flex-col gap-2 py-3'>
    <p className='font-semibold text-center pb-4'>Sign up to see photos and videos from your friends.</p>

    <input
        className='w-full  border border-black rounded-sm text-sm p-2 bg-slate-50 outline-none'
         placeholder='Email'
         {...register("email",{required:true})}
         type='email'
    />
    {
        errors.email && 
        <span className="ml-2 text-xs tracking-wide text-pink-200">
        email is required
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
        errors.fullName && 
        <span className="ml-2 text-xs tracking-wide text-pink-200">
        Username is required
      </span>
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
