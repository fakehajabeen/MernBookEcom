import React, { useState, useEffect, useContext } from 'react';
import SummaryApi from '../common';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import displayINRCurrency from '../helpers/displayCurrency';
import { MdDelete } from "react-icons/md";
import Context from '../context'





const Cart = () => {
    const [data, setData] = useState([]);
    const params = useParams();
    const [loading,setLoading] = useState(false)
    const context = useContext(Context)
    const loadingCart = new Array(4).fill(null)
    const navigate =useNavigate()


    const fetchUserCart = async () => {
        try {
            const response = await fetch(SummaryApi.addToCartProductView.url, {
                method: SummaryApi.addToCartProductView.method,
                credentials: "include",
                headers: {
                    "content-type": "application/json"
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch cart data");
            }

            const dataResponse = await response.json();
            setData(dataResponse?.data || []);
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    };


    useEffect(() => {
      setLoading(true)
        fetchUserCart();
        setLoading(false)
    }, []);

    const increaseQty = async(id,qty) =>{
     // console.log(qty)
      const response = await fetch(SummaryApi.updateCartProduct.url,{
          method : SummaryApi.updateCartProduct.method,
          credentials : 'include',
          headers : {
              "content-type" : 'application/json'
          },
          body : JSON.stringify(
              {   
                  _id : id,
                  quantity : qty + 1
              }
          )
      })

      const responseData = await response.json()


      if(responseData.success){
        fetchUserCart()
      }
  }
  const decraseQty = async(id,qty) =>{
   // console.log(qty)
    const response = await fetch(SummaryApi.updateCartProduct.url,{
        method : SummaryApi.updateCartProduct.method,
        credentials : 'include',
        headers : {
            "content-type" : 'application/json'
        },
        body : JSON.stringify(
            {   
                _id : id,
                quantity : qty -1 
            }
        )
    })

    const responseData = await response.json()


    if(responseData.success){
      fetchUserCart()
    }
}
const deleteCartProduct = async(id)=>{
  const response = await fetch(SummaryApi.deleteCartProduct.url,{
      method : SummaryApi.deleteCartProduct.method,
      credentials : 'include',
      headers : {
          "content-type" : 'application/json'
      },
      body : JSON.stringify(
          {   
              _id : id,
          }
      )
  })

  const responseData = await response.json()

  if(responseData.success){
      fetchUserCart()
     context.fetchUserAddtoCart()
  }
}

const handleorder =()=>{
    localStorage.setItem("orderSummary", JSON.stringify({ totalQty, totalPrice }));
    navigate('/payment')
}
const totalQty = data.reduce((previousValue,currentValue)=> previousValue + currentValue.quantity,0)
const totalPrice = data.reduce((preve,curr)=> preve + (curr.quantity * curr?.productId?.sellingPrice) ,0)

       
    return (
      <div className='container mx-auto'>
        
      <div className='text-center text-lg my-3'>
          {
              data.length === 0 && !loading && (
                  <p className='bg-white py-5'>No Data</p>
              )
          }
      </div>

      <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4'>   
              {/***view product */}
              <div className='w-full max-w-3xl'>
                  {
                      loading ? (
                          loadingCart?.map((el,index) => {
                              return(
                                  <div key={el+"Add To Cart Loading"+index} className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded'>
                                  </div>
                              )
                          })
                           
                      ) : (
                        data.map((product,index)=>{
                         return(
                          <div key={product?._id+"Add To Cart Loading"} className='w-full bg-white h-32 my-2 border border-slate-300  rounded grid grid-cols-[128px,1fr]'>
                              <div className='w-32 h-32 bg-slate-200'>
                                  <img src={product?.productId?.productImage[0]} className='w-full h-full object-scale-down mix-blend-multiply' />
                              </div>
                              <div className='px-4 py-2 relative'>
                                  {/**delete product */}
                                  <div className='absolute right-0 text-pink-600 rounded-full p-2 hover:bg-pink-600 hover:text-white cursor-pointer' onClick={()=>deleteCartProduct(product?._id)}>
                                      <MdDelete/>
                                  </div>

                                  <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>{product?.productId?.productName}</h2>
                                  {/* <p className='capitalize text-slate-500'>{product?.productId.category}</p> */}
                                  <div className='flex items-center justify-between'>
                                          <p className='text-pink-600 font-medium text-lg'>{displayINRCurrency(product?.productId?.sellingPrice)}</p>

                                          
                                          <p className='text-slate-600 font-semibold text-lg'>{displayINRCurrency(product?.productId?.sellingPrice  * product?.quantity)}</p>
                                  </div>
                                  <div className='flex items-center gap-3 mt-1'>
                                      <button className='border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white w-6 h-6 flex justify-center items-center rounded ' onClick={()=>decraseQty(product?._id,product?.quantity)}>-</button>
                                      <span>{product?.quantity}</span>
                                      <button className='border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white w-6 h-6 flex justify-center items-center rounded ' onClick={()=>increaseQty(product?._id,product?.quantity)}>+</button>
                                  </div>
                              </div>    
                          </div>
                         )
                        })
                      )
                  }
              </div>


              {/***summary  */}
              <div className='mt-5 lg:mt-0 w-full max-w-sm'>
                      {
                          loading ? (
                          <div className='h-36 bg-slate-200 border border-slate-300 animate-pulse'>
                              
                          </div>
                          ) : (
                              <div className='h-36 bg-white'>
                                  <h2 className='text-white bg-pink-600 px-4 py-1'>Summary</h2>
                                  <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                                      <p>Quantity</p>
                                      <p>{totalQty}</p>
                                  </div>

                                  <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                                      <p>Total Price</p>
                                      <p>{displayINRCurrency(totalPrice)}</p>    
                                  </div>

                                  <button onClick={handleorder} className='bg-blue-600 p-2 text-white w-full mt-2'>Place Order</button>

                              </div>
                          )
                      }
              </div>
      </div>
  </div>
)
}

export default Cart;
