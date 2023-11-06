
import { toast } from "react-toastify";

const Card = ({ name, desc, image, price, qty, prodId }) => {

  const apiUrl = "http://192.168.1.142:8082/user-cart/add";
  const addToCartMessage = () => {
    toast.success("Added to Cart !", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  };
  const words = desc.split(' ');
 const description = words.slice(0, 3).join(' ');

  const addToCartFunction = () => {
  const   itemToAdd={prodId:prodId,userId:3}
    fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemToAdd), // Include the item you want to add in the request body
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((result) => {
        console.log("data", result);
        // dispatch(
        //     addToCart({
        //       name,
        //       desc,
        //       image,
        //       price,
        //       quantity: 1,
        //       prodId,
        //     })
        //   );
        addToCartMessage();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    
    
  };
  return (
    <div className="w-[40%] md:w-[23%] relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="md:p-8 rounded-t-lg" src={image} />
      </a>
      <div className="px-2 pb-2 md:px-5 md:pb-5">
        <a href="#">
          <h5 className="h-14 overflow-hidden text-xs text-center sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {name}{" "}
          </h5>
          <h5 className="h-14 overflow-hidden text-xs text-center sm:text-base font-medium tracking-tight text-gray-900 dark:text-white">
            {description}{" "}
          </h5>
          {qty <= 0 ? (
            <h5 className="absolute text-xs top-1 sm:text-sm font-medium tracking-tight text-red-800 dark:text-white">
              * Out of Stock{" "}
            </h5>
          ) : (
            <h5></h5>
          )}
        </a>
        <div className="flex items-center justify-center mb-2 mt-1.5 md:mt-2.5 md:mb-5">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 mr-[1px] md:mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 mr-[1px] md:mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 mr-[1px] md:mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 mr-[1px] md:mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className=" bg-blue-100 text-blue-800 text-xs font-semibold px-1 sm:mr-2 sm:px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            5.0
          </span>
        </div>
        <div className="text-center items-center justify-between">
          <div className="text-sm sm:text-xl font-bold text-gray-900 dark:text-white">
            &#8377; {price}
          </div>
          <div className="mb-1 sm:flex justify-center items-center gap-4 text-xs mt-2">
            {/* <div href="#" className="mb-1 sm:mb-0 text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal sm:font-medium rounded-lg  px-1 py-1 sm:px-1 sm:py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy Now</div> */}
            {qty > 0 ? (
              <a
                href="#"
                onClick={addToCartFunction}
                className="text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal sm:font-medium rounded-lg  px-1.5 py-1.5 sm:px-2 sm:py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            ) : (
              <a
                href="#"
                className="text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal sm:font-medium rounded-lg  px-1.5 py-1.5 sm:px-2 sm:py-2 text-center"
              >
                Make Order
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
