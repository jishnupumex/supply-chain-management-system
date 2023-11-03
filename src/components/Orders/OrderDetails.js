import React from 'react'
import OrderTracker from './OrderTracker'

const OrderDetails = () => {
  return (
    <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      
    
      <div class="flex justify-start item-start space-y-2 flex-col">
        <h1 class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #13432</h1>
        <p class="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM</p>
      </div>
      <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        
            <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
              <div class="pb-4 md:pb-8 w-full md:w-40">
                <img class="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
                <img class="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
              </div>
              <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                <div class="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">Premium Quaility Dress</h3>
                  <div class="flex justify-start items-start flex-col space-y-2">
                    <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Style: </span> Italic Minimal Design</p>
                    <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Size: </span> Small</p>
                    <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Color: </span> Light Blue</p>
                  </div>
                </div>
                <div class="flex justify-between space-x-8 items-start w-full">
                  <p class="text-base dark:text-white xl:text-lg leading-6">$36.00 <span class="text-red-300 line-through"> $45.00</span></p>
                  <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">01</p>
                  <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p>
                </div>
              </div>
            </div>
            
          </div>
         
        </div>
        
      </div>
      <OrderTracker/>
    </div>
  )
}

export default OrderDetails