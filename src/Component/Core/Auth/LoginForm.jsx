import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { login } from '../../../service/operation/Auth';

const LoginForm = () => {
    const [showPass,setShowPass] = useState(false);
    const {register,handleSubmit,formState:{errors},} = useForm();

    const handleForm  = async(data) => {
        const result = await login(data);
        if(result){
            console.log(result)
        }
    }

    return (
        <form onSubmit={handleSubmit(handleForm)} className='w-full h-full px-10 flex flex-col gap-2 py-8'>
            <input 
                className='w-full  border border-black rounded-sm text-sm p-2 bg-slate-50 outline-none'
                 placeholder='Username or email'
                {...register("username",{required:true})}
                type='text'
            />
            {errors.username &&
             <span className="ml-2 text-xs tracking-wide text-red-600">
             Username or Email is required
            </span>
            }

            <div className='relative'>
            <input
                className='w-full border border-black rounded-sm text-sm p-2 bg-slate-50 outline-none'
                placeholder='Password'
                {...register("password",{required:true})}
                type={showPass?"text":"password"}
            />
            <span onClick={() =>setShowPass(!showPass)}
            className='absolute hover:text-slate-400 font-semibold hover right-3 top-[6px] cursor-pointer'>{showPass ? "Show" : "Hide"}</span>
            </div>

            {
                errors.password && 
                <span className="ml-2 text-xs tracking-wide text-red-600">
                Password is required
              </span>
            }

           

            <button className='w-full rounded-md py-1 bg-blue-400 mt-4'>Log In</button>

            <div className='flex flex-row gap-3 items-center justify-center my-5'>
                <div className='border-black border-b h-0 w-[45%]'></div>
                OR 
            <div className='border-black border-b h-0 w-[45%]'></div>
            </div>

            <Link to={"/forgot-password"}>
               <p className='text-sm text-center  text-blue-500'>Forgot password?</p>
            </Link>
        </form>
    )
}

export default LoginForm
