import React from 'react'
import { faCartShopping, faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemWishList } from '../redux/wishlistSlice'
import { addToCart, removeFromCart } from '../redux/cartSlice'


function Wishlist() {
  const wishListArray = useSelector((state) => state.wishlistReducer)
  console.log(wishListArray);
  const dispatch = useDispatch()

  const handleCart = (item) => {
    dispatch(addToCart(item))
    dispatch(removeItemWishList(item.id))
  }

  return (
    <>
      <h1 className='text-center text-violet-900 font-semibold text-3xl mt-5'>WishList <FontAwesomeIcon icon={faHeart} /> </h1>

      { wishListArray?.length>0? 
      <div className='grid grid-cols-4 px-10 my-32'>

        {wishListArray?.map((item)=>(
          <div className='shadow p-3'>
          <img src={item?.thumbnail} className='w-full' />
          <p className='mt-3 text-justify'>{item?.description.slice(0,100)} ...</p>
          <p className='text-violet-900 text-2xl mt-3 font-semibold'>Price : ${item?.price}</p>
          <div className="flex justify-between mt-4">
            <button type='button' onClick={()=>dispatch(removeItemWishList(item?.id))} className='p-3 bg-red-600 text-white rounded hover:border hover:border-red-600 hover:text-red-600 hover:bg-white'><FontAwesomeIcon icon={faTrashCan} /></button>
            <button type='button' onClick={()=>handleCart(item)} className='p-3 bg-green-600 text-white rounded hover:border hover:border-green-600 hover:text-green-600 hover:bg-white'><FontAwesomeIcon icon={faCartShopping} /></button>
          </div>

        </div>

        )) }

      </div>
          :
      <div className='grid grid-cols-3 my-5'>
        <div></div>
        <div className='flex justify-center items-center flex-col'>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png" alt="no image" className='w-1/2' />
          <p className='text-2xl text-violet-900 my-4'>Your wishlist is empty</p>
          <Link to={'/'}><button className='bg-violet-900 text-white p-3 hover:bg-white hover:border hover:border-violet-600 hover:text-violet-600 rounded'>Back Home</button></Link>
        </div>
        <div></div>

      </div>}

    </>
  )
}

export default Wishlist