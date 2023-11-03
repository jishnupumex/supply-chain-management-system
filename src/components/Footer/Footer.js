import React from 'react'

const Footer = () => {
  return (
    <div className='text-xs mt-4 sm:text-base bg-slate-200 w-[100%] h-[110px] p-6 text-slate-600 font-semibold'>
        <div className='flex justify-center gap-12 sm:gap-48 items-center '>
        <div className='hover:text-gray-950 hover:cursor-pointer'>Contact Us</div>
        <div className='hover:text-gray-950 hover:cursor-pointer'>Services</div>
        <div className='hover:text-gray-950 hover:cursor-pointer'>Support</div>
        </div>
        <div className='bg-slate-400 h-[1px] w-[97%] md:w-[80%] m-auto my-3'/>
        <div className='flex justify-center gap-10 sm:gap-40 item-center'>
        <div className='hover:text-gray-950 hover:cursor-pointer'>Privacy Policy</div>
        <div className='hover:text-gray-950 hover:cursor-pointer'>Terms of Servcies</div>
        </div>
        
    </div>
  )
}

export default Footer