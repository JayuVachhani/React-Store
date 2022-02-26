import React from 'react'
import './SubTotal.css'

const SubTotal = () => {
  return (
    <div className='subtotal'>
      <h2>Continue to Payment</h2>
        <div className='subtotal__items'>
            You have <strong>2</strong> items in your cart
        </div>
        <div className='subtotal__amount'>
            <span>Subtotal</span> : <strong>$50</strong>
        </div>
        <div className='gift'>
            <input type='checkbox'/>
            This items contains Gifts 
        </div>
        <button>Proceed to Payment</button>
    </div>
    
  )
}

export default SubTotal