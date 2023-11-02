
import { setCart } from "../redux/productSlice";



export const changeQty=(apiUrl,productId,quantity)=>{
  
fetch(apiUrl, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ productId, quantity }), // Include the product and the new quantity
})
.then((response) => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json(); // Parse the response as JSON
})
.then((result) => {
  console.log("data", result);
})
.catch((error) => {
  console.error("Error:", error);
})
 }

export const fetchCartItems=(apiUrl,dispatch)=>{
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((result) => {
        console.log("datass", result);
        dispatch(setCart(result))
        // Set the data in your component's state
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } 
