import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { setCart } from "../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "../../constants/api";
import imageUrls from "../../constants/images";

const Cart = () => {
  
  useEffect(() => {
    const apiUrl = "http://192.168.1.142:8082/user-cart/user/3";
    fetchCartItems(apiUrl,dispatch)
  }, []);
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.details.cart);
  let sum = cartData.reduce(
    (total, item) => total + item?.prodQty * item?.prodPrice,
    0
  );

  return (
    <div className="min-h-[73vh] pt-10">
      {cartData.length > 0 ? (
        <>
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cartData.map((item,index) => {
                return <CartItem cartItem={item} image={imageUrls[index]}/>;
              })}
            </div>
            {/* Subtotal */}
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">&#8377; {sum}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">&#8377; 49</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">&#8377; {sum + 49}</p>
                  <p className="text-sm text-gray-700">including GST</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </div>
          </div>{" "}
        </>
      ) : (
        <div className="text-center text-red-900 font-bold text-xl">
          {" "}
          Your Cart is Empty
        </div>
      )}
    </div>
  );
};

export default Cart;
