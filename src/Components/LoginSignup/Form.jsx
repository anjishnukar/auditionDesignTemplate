import * as React from 'react';


export default function Form() {
    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'>
            <h1 className='text-5xl font-semibold'>Welcome</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Please enter your details.</p>
            <div className='mt-8'>
                <label className='text-lg font-medium'>Email</label>
                <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your email'/>
            </div>
            <div className='mt-8'>
                <label className='text-lg font-medium'>Password</label>
                <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your password' type='password'/>
            </div>
            <div className='mt-8 flex justify-between items-center'>
                <button className='font-medium text-base text-violet-500'>Forgot password</button>
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
                <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Sign in</button>
                <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all flex rounded-xl py-3 border-2 border-gray-100 items-center justify-center gap-2'>Sign in with Google</button>
            </div>
            <div className='mt-8 flex justify-center items-center'>
                <p className='font-medium text-base'>Don't have an account?</p>
                <button className='text-violet-500 text-base font-medium ml-2'>Sign up</button>
            </div>
        </div>
    )
}

// function App() {
//     return (
//       <div className='flex w-full h-screen'>
//         <div className='w-full flex items-center justify-center lg:w-1/2'>
//           <Form/>
//         </div>  
//         <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200'>
//           <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce'></div>
//           <div className='w-full h-1/2 absolute  bottom-0 bg-white/10 backdrop-blur-lg'></div>
//         </div>
//       </div>
//     )
//   }