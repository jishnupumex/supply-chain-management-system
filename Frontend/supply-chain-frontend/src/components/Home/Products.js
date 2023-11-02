
import Card from './Card'
import imageUrls from '../../constants/images'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from './Pagination'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setProducts } from '../../redux/productSlice'


const Products = () => {
  const data=useSelector((state)=>state.details.products)
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages =Math.ceil(data.length/10) ; // Total number of pages
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Add your logic here to fetch data for the new page
  };
  const itemsToSkip = (currentPage-1)*12;

  const apiUrl = "http://192.168.1.142:8082/inventories"
  const dispatch = useDispatch()
  
  useEffect(() => {

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
      })
      .then((result) => {
        dispatch(setProducts(result)); // Set the data in your component's state
      })
      .catch((error) => {
        console.error('Error:', error);
      })
    
  }, [])

  
  return (
    <div>
<div className='min-h-[73vh] flex p-8 justify-center items-center w-[95%] lg:w-[90%] m-auto flex-wrap gap-4'>
        {
         data && data.slice(itemsToSkip,itemsToSkip+12).map((product,index)=>{
            return <Card  key={product.prodId} name={product.prodName} desc={product.prodDesc} image={imageUrls[index]} price={product.prodPrice} qty={product.prodQty} prodId={product.prodId}/>
          })
        }
    </div>
    <Pagination currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}/>
        <ToastContainer/>
    </div>
    
  )
}

export default Products