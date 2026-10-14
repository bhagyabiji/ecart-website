import { faShoppingCart, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../redux/cartSlice'

function Cart() {

  const [total , setTotal] = useState(0)


  const cartArray = useSelector((state) => state.cartReducer)
  console.log(cartArray);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getTotal = ()=> {
    if(cartArray.length>0){
      setTotal(cartArray.map((item)=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else {
      setTotal(0)
    }
  }

  const checkout = ()=> {
    alert('Your order is placed successfully')
    dispatch(emptyCart())
    navigate('/')
    
  }

  useEffect(()=> {
    getTotal()
  },[cartArray])


  return (
    <div className='pt-15 my-32'>
      <h1 className='text-center text-violet-900 font-semibold text-4xl'>Shopping Cart <FontAwesomeIcon icon={faShoppingCart} /> </h1>

      {cartArray?.length > 0 ?
        <div className='md:p-10 p-5 w-full md:grid grid-cols-[2fr_1fr] flex-col'>
          <div className='pt-6 md:px-10'>

            <table className='border border-gray-300 w-full shadow-lg' >
              <thead className='bg-gray-400'>
                <tr>
                  <th className='p-3 border border-gray-200'>#</th>
                  <th className='p-3 border border-gray-200'>Title</th>
                  <th className='p-3 border border-gray-200'>Image</th>
                  <th className='p-3 border border-gray-200'>Price</th>
                  <th className='p-3 border border-gray-200'>Action</th>
                </tr>

              </thead>
              <tbody>
                {cartArray?.map((item , index) => (
                  <tr>
                  <td className='p-4 border border-gray-300'>{index+1}</td>
                  <td className='p-4 border border-gray-300'>{item?.title}</td>
                  <td className='p-4 justify-center flex border border-gray-300'>
                    <img src={item?.thumbnail} alt="No image" className='w-2/3 max-h-32' />
                  </td>
                  <td className='p-4 border border-gray-300'>${item?.price}</td>
                  <td className=' text-center p-4 border border-gray-300'>
                    <button type='button' onClick={()=>dispatch(removeFromCart(item.id))} className='border border-red-200 bg-red-500 px-3 py-2 rounded text-white hover:text-red-500 hover:bg-white '><FontAwesomeIcon icon={faTrashCan} /></button>
                  </td>
                </tr>

                )) 
                }

              </tbody>
            </table>
          </div>

          <div className='pt-6 md:px-10' >
            <div className='shadow-lg p-5'>
              <h2 className='text-2xl text-violet-400 text-center'>Cart Summary</h2>
              <h2 className='text-lg mt-4'>Total number of products : {cartArray?.length}</h2>
              <h2 className='text-lg mt-1'>Grand Total : $ {total}</h2>
              <button type='button' onClick={()=>checkout()} className='w-full bg-green-500 px-2 py-3 mt-4 text-white hover:text-green-500 hover:border hover:border-green-500 hover:bg-white'>Checkout</button>

            </div>

          </div>
        </div>
        :
        <div className='grid grid-cols-3 my-5'>
          <div></div>
          <div className='flex justify-center items-center flex-col'>
            <img src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-illustration-download-in-svg-png-gif-file-formats--is-explore-box-states-pack-design-development-illustrations-3385483.png?f=webp" alt="no image" className='w-1/2' />
            <p className='text-2xl text-violet-900 my-3'>Your Cart is empty</p>
            <Link to={'/'}><button className='bg-violet-900 text-white p-3 hover:bg-white hover:border hover:border-violet-600 hover:text-violet-600 rounded'>Back Home</button></Link>
          </div>
          <div></div>

        </div>
      }

    </div>
  )
}

export default Cart