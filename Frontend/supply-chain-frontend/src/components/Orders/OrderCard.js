import React from "react";
import { Link } from "react-router-dom";

const OrderCard = ({order,image}) => {
  return (
    <div className="w-[95%] mt-4 md:mt-6 flex justify-start items-start md:items-center md:space-x-6 xl:space-x-8 m-auto">
      <div className="pb-4 md:pb-8 w-40">
        <img
          className="w-full "
          src={image}
          alt="phone"
        />
      </div>
      <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
        <div className="w-full flex flex-col justify-start items-start space-y-8">
          <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
            {order.prodName}
          </h3>
          <div className="flex justify-start items-start flex-col space-y-2">
            <p className="text-sm dark:text-white leading-none text-gray-800">
              <span className="dark:text-gray-400 text-red-900">Desc: </span> {order.prodDesc}
            </p>

            <p className="text-sm dark:text-white leading-none text-gray-800">
              <span className="dark:text-gray-400 text-red-900">Color: </span>{" "}
              Light Blue
            </p>
            <p className="text-sm dark:text-white leading-none text-sky-500">
              <span className="dark:text-gray-400 text-slate-800">OrderId: </span>{order.userOrderId}
            </p>
          </div>
        </div>
        <div className="flex justify-between space-x-1 sm:space-x-8 items-start w-full">
          <p className="text-sm dark:text-white xl:text-lg leading-6">&#8377;{order.totalPrice}</p>
          <p className="flex items-center justify-center text-xs sm:text-base font-semibold dark:text-white xl:text-lg sm:leading-6 text-gray-800">
            <div className="w-2 h-2 bg-green-600 rounded-full mr-1"></div> {order.orderStatus}&nbsp;
             on Apr 14,2023
          </p>
          <Link to={`/orderDetails/${order.userOrderId}`}>
            <p className="text-sm text-cyan-600 xl:text-base font-semibold sm:leading-6 underline">
              View More
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
