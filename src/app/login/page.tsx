import Image from 'next/image'
import React from 'react'

function Login() {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row flex-1 w-full h-full mt-12 gap-4'>
    <div className="shadow-lg w-full flex lg:flex-row flex-col">
   <div className="w-full relative h-[calc(100vh-200px)] lg:w-1/2">
   <Image src="/loginbg.jpg" alt='' fill className='object-cover'/>
   </div>
   <div className="w-full lg:w-1/2 flex-col flex p-4">
   <h2 className="">Login</h2>
   <form action="" className="">
    <div className="mt-8">
    <input type="text" className="" placeholder='Email Address' />
    </div>
<div className="mt-8">
<input type="password" className="" placeholder='Password' />
</div>

<button className='flex items-center justify-center text-sm bg-slate-900 py-1 px-2 rounded-md text-white mt-12'>Login</button>
   </form>
   </div>   
   </div>
    </div>
  )
}

export default Login
