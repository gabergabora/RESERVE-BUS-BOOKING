import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
    return (
        <div className='flex py-10 justify-center'>
            <div className=' flex  gap-3 flex-col items-center '>
                <div className='p-4 border flex flex-col gap-2  border-slate-200  shadow-lg'>
                    <h1 className='sm:text-2xl text-base font-medium'>Sign-In</h1>
                    <div >
                        <label className='text-sm font-bold' htmlFor="email">Email</label>
                        <input  className='border sm:w-[300px] w-[250px] text-md rounded-md shadow-md p-1 block border-slate-200' type="text" id='email' />
                    </div>
                    <div>
                        <label className='text-sm font-bold' htmlFor="password">Password</label>
                        <input className='border text-md p-1 rounded-md sm:w-[300px] w-[250px] shadow-md block border-slate-200' type="password" id='password' />
                    </div>
                    <button  onClick={()=>{alert("This is a dummy page, So user don't need to do SignUp/SignIn to use this app.Hope you'll like my project..")}} className='w-full  py-2 my-3 text-white rounded-md text-md font-medium bg-gradient-to-b text-sm bg-[#FF8700]  text-center' >Continue</button>
                </div>
                <p className='text-slate-600 font-semibold text-xs '>New to Reserve?</p>
                <button className='bg-gradient-to-b text-md from-slate-100 to-slate-200 border w-full border-slate-400 p-1'><Link to='/signup'>Create new Account</Link></button>
            </div>
        </div>
    )
}
