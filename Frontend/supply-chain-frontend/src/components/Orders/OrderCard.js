import React from "react";
import { Link } from "react-router-dom";

const OrderCard = () => {
  return (
    <div class="w-[95%] mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 m-auto">
      <div class="pb-4 md:pb-8 w-full md:w-40">
        <img
          class="w-full "
          src="https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Ftiimg.tistatic.com%2Ffp%2F1%2F007%2F574%2Fvivo-mobile-phone-7-38mm-ultra-smooth-body-170g-light-2-5d-adjusted-outline-for-a-great-hold-703.jpg&w=750&q=75"
          alt="dress"
        />
      </div>
      <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
        <div class="w-full flex flex-col justify-start items-start space-y-8">
          <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
            Premium Quaility Phones
          </h3>
          <div class="flex justify-start items-start flex-col space-y-2">
            <p class="text-sm dark:text-white leading-none text-gray-800">
              <span class="dark:text-gray-400 text-gray-300">RAM: </span> 8 GB
            </p>

            <p class="text-sm dark:text-white leading-none text-gray-800">
              <span class="dark:text-gray-400 text-gray-300">Color: </span>{" "}
              Light Blue
            </p>
            <p class="text-sm dark:text-white leading-none text-sky-500">
              <span class="dark:text-gray-400 text-slate-800">OrderId: </span> #12131
            </p>
          </div>
        </div>
        <div class="flex justify-between space-x-8 items-start w-full">
          <p class="text-base dark:text-white xl:text-lg leading-6">$36.00</p>
          <p class="flex items-center justify-center text-base font-semibold dark:text-white xl:text-lg leading-6 text-gray-800">
            <div class="w-2 h-2 bg-green-600 rounded-full mr-1"></div> Delievred
            on Apr 14,2023
          </p>
          <Link to="/orderDetails">
            <p class="text-sm text-cyan-600 xl:text-base font-semibold leading-6 underline">
              View More
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
