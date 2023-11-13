import { setCart, setOrderDetails, setOrders } from "../redux/productSlice";
import { useNavigate } from "react-router-dom";


export const inventoryUrl = "http://192.168.1.154:8082";
export const userUrl = "http://192.168.1.154:8080";

export const changeQty = (apiUrl, prodId, prodQty) => {
  fetch(apiUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: 3, prodId, prodQty }), // Include the product and the new quantity
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse the response as JSON
    })
    .then((result) => {
      console.log("dataaaaa", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const fetchCartItems = (apiUrl, dispatch) => {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse the response as JSON
    })
    .then((result) => {
      console.log("datass", result);
      dispatch(setCart(result));
      // Set the data in your component's state
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const fetchOrder = (apiUrl, dispatch) => {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse the response as JSON
    })
    .then((result) => {
      console.log("order data", result);
      dispatch(setOrders(result));
      // Set the data in your component's state
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const fetchOrderDetails = (apiUrl, dispatch) => {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse the response as JSON
    })
    .then((result) => {
      console.log("orderDetails", result);
      dispatch(setOrderDetails(result));
      // Set the data in your component's state
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const sendCartData = (apiUrl,cartData) => {
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartData), 
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response; // Parse the response as JSON
    })
    .then((result) => {
      console.log("cart data submit", result);
      // const navigate=useNavigate()
      // navigate('/checkout')
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
