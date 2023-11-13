import { useDispatch, useSelector } from "react-redux";
import OrderCard from "./OrderCard";
import { fetchOrder, userUrl } from "../../constants/api";
import { useEffect } from "react";
import imageUrls from "../../constants/images";
import { url } from "../../constants/api";

const Orders = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    const apiUrl = `${userUrl}/restapi/orders`;
    fetchOrder(apiUrl,dispatch)
  }, []);
  const orderData = useSelector((state) => state.details.orders);
 
  return (
    <div className="w-full min-h-[70vh]">
      {
        orderData?.length>0 ?(<> {orderData.map((item,index) => {
          return <OrderCard key={item.prodName} order={item} image={imageUrls[index]} />;
        })} </>)

        :(
          <div className="text-center mt-7 text-red-900 font-bold text-xl">
            {" "}
            Order page is empty
          </div>
        )
      }
      
      
    </div>
  );
};

export default Orders;
