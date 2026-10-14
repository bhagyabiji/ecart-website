import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const [show, setshow] = useState(false)
  const wishListArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishListArray);
  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  
  
  return (

    <nav className='bg-violet-900 p-5 w-full text-white fixed top-0'>
      <div className='md:flex'>
        <div className='flex justify-between items-center'>
          <Link to={'/'}><h1 className='text-3xl fw-bold'><FontAwesomeIcon icon={faCartShopping} className='me-2' />E-CART</h1></Link>
          <button onClick={()=>setshow(!show)} className='flex md:hidden'><FontAwesomeIcon icon={faBars} className='fa-2x' /></button>
        </div>

        { show && <div className='flex md:hidden ms-auto mt-10 md:mt-0'>
          <Link to={'/wishlist'}><button className='border border-white py-3 px-4 rounded hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faHeart} className='text-red-600 me-2'/>Wishlist <span className='bg-gray-100 rounded px-2 py-1 ms-2 text-violet-900' >{wishListArray?.length}</span> </button></Link>
          <Link to={'/cart'}><button className='border border-white py-3 px-4 rounded hover:bg-white hover:text-violet-900 ms-3'><FontAwesomeIcon icon={faCartShopping} className='text-green-400 me-2' /> Cart <span className='bg-gray-100 rounded px-2 py-1 ms-2 text-violet-900'  >{cartArray?.length}</span> </button></Link>
        </div>}


        <div className='md:flex hidden ms-auto mt-10 md:mt-0'>
          <Link to={'/wishlist'}><button className='border border-white py-3 px-4 rounded hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faHeart} className='text-red-600 me-2'/>Wishlist <span className='bg-gray-100 rounded px-2 py-1 ms-2 text-violet-900' >{wishListArray?.length}</span> </button></Link>
          <Link to={'/cart'}><button className='border border-white py-3 px-4 rounded hover:bg-white hover:text-violet-900 ms-3'><FontAwesomeIcon icon={faCartShopping} className='text-green-400 me-2' /> Cart <span className='bg-gray-100 rounded px-2 py-1 ms-2 text-violet-900'  >{cartArray?.length}</span> </button></Link>
        </div>
      </div>

    </nav>

  )
}

export default Header