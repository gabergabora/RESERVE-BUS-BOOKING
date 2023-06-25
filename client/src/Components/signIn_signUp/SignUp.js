import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div>
        <div  className='py-10 flex flex-col gap-3 items-center'>
            <form className='p-6 flex rounded-sm flex-col gap-3 shadow-lg border border-slate-300' action="/">
                <div>
                    <label  className='text-sm font-bold' htmlFor="YourName">Your Name</label>
                    <input  size={40} id='YourName'  className='border text-md rounded-md shadow-md p-1 block border-slate-200' type="text" />
                </div>
                <div>
                    <label  className='text-sm font-bold' htmlFor="email">Email</label>
                    <input  size={40}  id='email' className='border text-md rounded-md shadow-md p-1 block border-slate-200' type="email" />
                </div>
                <div>
                    <label  className='text-sm font-bold' htmlFor="MobileNumber">Mobile Number</label>
                    <input  size={40}  id='MobileNumber' className='border text-md rounded-md shadow-md p-1 block border-slate-200' type="text" />
                </div>
                <div>
                    <label  className='text-sm font-bold' htmlFor="Password">Password</label>
                    <input  size={40}  id='Password' className='border text-md rounded-md shadow-md p-1 block border-slate-200' type="password" />
                </div>
                <div>
                    <label  className='text-sm font-bold' htmlFor="PasswordAgain">Password Again</label>
                    <input  size={40}  id='PasswordAgain' className='border text-md rounded-md shadow-md p-1 block border-slate-200' type="password" />
                </div>
                <button onClick={()=>{alert("This is a dummy page, So user don't need to do SignUp/SignIn to use this app. Hope you'll like my project..")}} className='w-full py-2 my-3 text-medium text-white rounded-md text-md bg-[#FF8700] text-center'>Continue</button> <hr />
                <p className='text-sm font-semibold'>Already have an account?<span className='text-sky-700'><Link to='/signin' > Sign In</Link></span> </p>
            </form>
            
        </div>
    </div>
  )
}
