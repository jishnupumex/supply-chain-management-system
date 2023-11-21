import React, { useEffect } from "react";
import OrderTracker from "./OrderTracker";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderDetails, url, userUrl } from "../../constants/api";
import imageUrls from "../../constants/images";
import { Icons } from "react-toastify";
import { AiOutlineDownload } from "react-icons/ai";

const OrderDetails = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const apiUrl = `${userUrl}/restapi/orders/${orderId}`;
    fetchOrderDetails(apiUrl, dispatch);
  }, []);

  function downloadInvoice() {
    console.log("Inside download invoice");
    fetch("http://localhost:8084/logistics/invoice")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);

          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "Invoice.pdf";
          alink.click();
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  const orderDetails = useSelector((state) => state.details.orderDetails);

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col">
        <h1 className="text-3xl  lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
          Order #{orderId}
        </h1>
        <p className="text-base  font-medium leading-6 text-gray-600">
          21st Mart 2021 at 10:34 PM
        </p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start  bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
              <div className="pb-4 md:pb-8 w-full md:w-40">
                <img
                  className="w-full hidden md:block"
                  src={orderDetails?.prodImage}
                  alt="product"
                />
                <img
                  className="w-full md:hidden"
                  src={orderDetails?.prodImage}
                  alt="product"
                />
              </div>
              <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl  xl:text-2xl font-semibold leading-6 text-gray-800">
                    {orderDetails?.prodName}
                  </h3>
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-sm  leading-none text-gray-800">
                      <span className=" text-red-900">prodDesc: </span>{" "}
                      {orderDetails?.prodDesc}
                    </p>
                    <p className="text-sm  leading-none text-gray-800">
                      <span className=" text-red-900">Type: </span>{" "}
                      {orderDetails?.prodType}
                    </p>
                    <p className="text-sm  leading-none text-gray-800">
                      <span className=" text-red-900">Color: </span> Light Blue
                    </p>
                  </div>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  <p className="text-base  xl:text-lg leading-6">
                    &#8377; {orderDetails?.prodPrice}{" "}
                    <span className="text-red-300 line-through">
                      {" "}
                      &#8377; {orderDetails?.prodPrice + 10}
                    </span>
                  </p>
                  <p className="text-base  xl:text-lg leading-6 text-gray-800">
                    {orderDetails?.prodQty}
                  </p>
                  <p className="text-base  xl:text-lg font-semibold leading-6 text-gray-800">
                    &#8377; {orderDetails?.totalPrice}
                  </p>
                  <AiOutlineDownload onClick={downloadInvoice} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrderTracker status={orderDetails?.orderStatus} />
    </div>
  );
};

export default OrderDetails;
