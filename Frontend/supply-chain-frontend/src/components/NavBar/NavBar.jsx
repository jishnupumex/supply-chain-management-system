import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="flex bg-slate-100 w-[100%] h-[8vh] items-center justify-between p-5">
     <Link to='/' className="flex items-center">
      <img className="h-12 w-12"  src='https://img.freepik.com/premium-vector/smartphone-logo-communication-electronics-vector-modern-phone-design-company-brand-symbol_638875-2350.jpg?size=626&ext=jpg&ga=GA1.1.48861228.1697620267&semt=ais' alt="" />
       <h1 className="font-bold font-serif hover:cursor-pointer text-lg sm:text-xl">Phone Zone</h1></Link>
      <div className="text-slate-600 hover:text-gray-950 flex justify-around items-center gap-2 md:gap-6 mr-2 md:mr-9 hover:cursor-pointer">
        <Link to="/cart">
          <h6 className="text-xs sm:text-base hover:underline decoration-sky-600 underline-offset-2">
            Cart
          </h6>
        </Link>
        <Link to="/orders">  <h6 className="text-xs sm:text-base hover:underline decoration-sky-600 underline-offset-2">
          Orders
        </h6></Link>
      </div>
    </div>
  );
};

export default NavBar;
