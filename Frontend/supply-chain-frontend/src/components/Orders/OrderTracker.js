import React from "react";

const OrderTracker = ({ status = "Out For Delivery" }) => {
  const orderStages = [
    { status: "New", text: "Order Placed" },
    { status: "NEW", text: "Processing" },
    { status: "AVAILABLE", text: "Order Confirmed" },
    { status: "Shipped", text: "Shipped" },

    { status: "DELIVERED", text: "Delivered" },
  ];
  return (
    <ol className="flex items-center mt-4">
      {orderStages.map((stage, index) => (
        <li
          key={index}
          className={`relative w-full ${index % 2 === 0 ? "sm:mb-6" : "mb-6"}`}
        >
          <div className="flex items-center">
            <div
              className={`z-10 flex items-center justify-center w-6 h-6 ${
                status === stage.status ||
                index <= orderStages.findIndex((item) => item.status === status)
                  ? "bg-green-600 transition-all duration-1000"
                  : "bg-gray-200"
              } rounded-full ring-0 ring-white sm:ring-8  shrink-0`}
            >
              <svg
                className={`w-2.5 h-2.5 ${
                  status === stage.status ||
                  index <=
                    orderStages.findIndex((item) => item.status === status)
                    ? "text-black"
                    : "text-gray-500 dark:text-white"
                } dark:text-blue-300`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </div>
            <div
              className={`flex w-full ${
                index < orderStages.findIndex((item) => item.status === status)
                  ? "bg-green-600 transition-all duration-1000"
                  : "bg-gray-200"
              } h-0.5 ${index === orderStages.length - 1 && "hidden"}`}
            ></div>
          </div>
          <div className="mt-3">
            <h3
              className={`font-medium ${
                status === stage.status ||
                index <= orderStages.findIndex((item) => item.status === status)
                  ? "text-black"
                  : "text-gray-900 dark:text-white"
              } `}
            >
              {stage.text}
            </h3>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default OrderTracker;
