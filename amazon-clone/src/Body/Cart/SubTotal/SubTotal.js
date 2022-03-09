import React from 'react'
import { useNavigate } from "react-router-dom";

import { useStateValue } from '../../../StateProvider/StateProvider'

import './SubTotal.css'

const SubTotal = () => {
  const navigate = useNavigate()
  const [{cart},dispatch] = useStateValue();
  
  const getCartTotalAmount = (cart)=>{
    return(
      cart.reduce((amount,item)=>item.price+amount,0)
    )

  }

  return (
    <div className='subtotal'>
      <h2>Continue to Payment</h2>
        <div className='subtotal__items'>
            You have <strong>{cart.length}</strong> items in your cart
        </div>
        <div className='subtotal__amount'>
            <span>Subtotal</span> : <strong>${getCartTotalAmount(cart)}</strong>
        </div>
        <div className='gift'>
            <input type='checkbox'/>
            Item in your cart contains Gift Card. Please add if you want! 
        </div>
        
        <button onClick={()=>navigate('/payment',{replace:true})} className='paymentButton'>Proceed to Payment</button>
        
        
    </div>
    
  )
}

export default SubTotal