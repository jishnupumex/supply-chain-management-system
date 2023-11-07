import React from 'react'


const OrderTracker = ({status="Order Placed"}) => {
    
  return (
    <ol className="flex items-center mt-4 ">
    <li className="relative w-full sm:mb-6 ">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-green-600 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-black dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
            <div className={`flex w-full ${status!="Order Placed" ? "bg-green-600" : "bg-gray-200"} h-0.5 dark:bg-gray-700`}></div>
        </div>
        <div className="mt-3">
            <h3 className="font-medium text-gray-900 dark:text-white">Order Confirmed</h3>
        </div>
    </li>
    <li className="relative w-full mb-6">
        <div className="flex items-center">
            <div className={`z-10 flex items-center justify-center w-6 h-6 ${ status!="Order Placed" ? "bg-green-600" : "bg-gray-200"} rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0`}>
                <svg className="w-2.5 h-2.5 text-black dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
            <div className={`flex w-full ${ (status!="Order Placed" && status!="Shipped")? "bg-green-600" : "bg-gray-200"} h-0.5 dark:bg-gray-700`}></div>
        </div>
        <div className="mt-3">
            <h3 className="font-medium text-gray-900 dark:text-white">Shipped</h3>
        </div>
    </li>
    <li className="relative w-full sm:mb-6">
        <div className="flex items-center">
            <div className={`z-10 flex items-center justify-center w-6 h-6 ${ (status!="Order Placed" && status!="Shipped") ? "bg-green-600" : "bg-gray-200"} rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0`}>
                <svg className="w-2.5 h-2.5 text-black dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
            <div className={`flex w-full ${ status=="Delivered"? "bg-green-600" : "bg-gray-200"} h-0.5 dark:bg-gray-700`}></div>
        </div>
        <div className="mt-3">
            <h3 className="font-medium text-gray-900 dark:text-white">Out For Delivery</h3>
        </div>
    </li>
    <li className="relative w-full mb-6">
        <div className="flex items-center">
            <div className={`z-10 flex items-center justify-center w-6 h-6 ${ status=="Delivered"? "bg-green-600" : "bg-gray-200"} rounded-full ring-0 ring-white dark:bg-gray-700 sm:ring-8 dark:ring-gray-900 shrink-0`}>
                <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
        </div>
        <div className="mt-3">
            <h3 className="font-medium text-gray-900 dark:text-white">Delivered</h3>
        </div>
    </li>
</ol>
  )
}

export default OrderTracker