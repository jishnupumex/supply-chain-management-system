import React from "react";
import "./Cart.css";
import {
  increaseQuantity,
  deleteItem,
  decreaseQuantity,
  resetCart,
} from "../../redux/productSlice";
import { useDispatch } from "react-redux";
import { changeQty, inventoryUrl } from "../../constants/api";

const CartItem = ({ cartItem, image }) => {
  const dispatch = useDispatch();
  const apiUrl = `${inventoryUrl}/user-cart/update-prod`;
  const increament = (prodId) => {
    changeQty(apiUrl, cartItem.prodId, 1);
    dispatch(increaseQuantity({ prodId }));
  };
  const decreament = (prodId) => {
    changeQty(apiUrl, cartItem.prodId, -1);
    dispatch(decreaseQuantity({ prodId }));
  };

  return (
    cartItem && (
      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src={image}
          alt="product-image"
          className="w-1/2 rounded-lg sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">
              {cartItem?.prodName}
            </h2>
            <p className="mt-1 text-xs text-gray-700">{cartItem?.prodDesc}</p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <span
                onClick={() => decreament(cartItem.prodId)}
                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                {" "}
                -{" "}
              </span>
              <input
                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                type="number"
                value={cartItem?.prodQty}
                min="1"
              />
              <span
                onClick={() => increament(cartItem.prodId)}
                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                {" "}
                +{" "}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">&#8377; {cartItem?.prodPrice}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CartItem;
