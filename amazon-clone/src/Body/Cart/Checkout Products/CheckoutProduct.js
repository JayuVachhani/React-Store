import React from 'react'
import { useStateValue } from '../../../StateProvider/StateProvider'
import GradeIcon from '@material-ui/icons/Grade'
import './CheckoutProducts.css'

const CheckoutProduct = () => {
  const [{ cart }, dispatch] = useStateValue()
  const removeItemFromCart = (id) => {
      console.log("delete id",id)
    dispatch({
        type:"REMOVE_ITEM_FROM_CART",
        id:id
    })
  }
  return (
    <div className=''>
      {cart.length > 0 ? (
        cart.map((item, id) => {
            console.log(item.id)
          return (
            <div className="checkoutProduct">
              <div className="checkoutProductLeft">
                <div className="productImage">
                  <img src={item.image} />
                </div>
              </div>
              <div className="checkoutProductRight">
                <div className="productTitle">{item.title}</div>
                <div className="productPrice">${item.price}</div>
                <div className="productRating">
                  {item.rating &&
                    Array(item.rating)
                      .fill()
                      .map((_, i) => {
                        return <GradeIcon />
                      })}
                </div>
                <button className="removeItem" onClick={() => removeItemFromCart(item.id)}>
                  Remove Item
                </button>
              </div>
            </div>
          )
        })
      ) : (
        <p>Your Amazon Cart is Empty!!!</p>
      )}
    </div>
  )
}

export default CheckoutProduct
