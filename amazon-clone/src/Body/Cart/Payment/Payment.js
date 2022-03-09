import {
  CardElement,  
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../../StateProvider/StateProvider'
import './Payment.css'
import axios from './axios'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const [{ cart, user }, dispatch] = useStateValue()
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [processing, setProcessing] = useState('')
  const [succeeded, setSucceeded] = useState(false)
  const [clientSecret, setClientSecret] = useState(true)

  const stripe = useStripe()
  const element = useElements()
  const navigate = useNavigate()
  const getCartTotalAmount = (cart) => {
    return cart.reduce((amount, item) => item.price + amount, 0)
  }

  useEffect(() => {
    // generate special stripe secret which allows to charge customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payment/create?total=${getCartTotalAmount(cart)*100}`,
      });
      
      setClientSecret(response.data.clientSecret)
      console.log("response",response)
    }
    getClientSecret();
  }, [cart])
  console.log('client Secret', clientSecret)

  const handlePayment = async (e) => {
    e.preventDefault()
    setProcessing(true)
    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: element.getElement(CardElement),
        }
      })
      .then(({ paymentIntent }) => {
        console.log("payment",paymentIntent)
        setSucceeded(true)        
        setError(false)
        setProcessing(false)
        dispatch({type:'EMPTY_CART'})
        navigate('/')
        
      })
  }
  const handleInput = (e) => {
    setDisabled(e.empty)
    setError(e.error ? e.error.message : '')
  }

  
  return (
    <div className="payment">
      <div className="payment__container">
        <h1 className="payment_title">CheckOut</h1>
        <div className="payment__section">
          <div className="customer__address">
            <span>Delivery address</span>
            <p>Email : {user?.email}</p>
            <p>Address : Abc Apartment Near Temple Mumbai</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="review__CartItems">
            <h3>Review Cart Items and Delivery Address</h3>
          </div>
          {cart.length > 0 ? (
            <div className="payment__items">
              {cart.map((item) => {
                return (
                  <div className="item" key={item.id}>
                    <div className="itemImage">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="itemDetails">
                      <div className="itemTitle">{item.title}</div>
                      <div className="itemPrice">${item.price}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <p>No items</p>
          )}
        </div>
        <div className="payment__section">
          <div className="payment__Method">
            <h3>Payment Method</h3>
          </div>
          {error && <div>{error}</div>}
          <div className="payemt__details">
            <form className="card__Payment" onSubmit={handlePayment}>
              Card Details
              <div className="creditCard">
                <div className="cardnumber">
                  <CardElement onChange={handleInput} />
                  {/* <CardNumberElement
                    options={{ style: { base: inputElement } }}
                    onChange={handleInput}
                  />
                </div>
                <div className="expiryandcvv">
                    
                  <div className="cardexpiry">
                    <CardExpiryElement
                      options={{ style: { base: inputElement } }}
                    />
                  </div>

                  <div className="cardcvv">
                    <CardCvcElement
                      options={{ style: { base: inputElement } }}
                    />
                  </div> */}
                </div>
                <button
                  className="paymentButton"
                  disabled={processing || disabled || succeeded}
                >
                  <span>
                    {processing
                      ? 'Processing'
                      : `Buy Now for $${getCartTotalAmount(cart)}`}
                  </span>
                </button>
                {/* <div className="totalPayment">
                Total Amount : {getCartTotalAmount(cart)}
              </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
