import React from 'react'
import './Cart.css'
import SubTotal from './SubTotal/SubTotal'

const Cart = () => {
  return (
    <div className='checkout'>
      <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ad"/>
      <div className='checkout__items'>
      <div className='checkout__left'>
        
          
        
        <div className='checkout_items'>
          <h3>Your Cart Items</h3>
        </div>
      </div>
      <div className='checkout__right'>
        <div className='payment'>
          
          <SubTotal/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cart