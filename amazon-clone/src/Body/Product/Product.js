import React from 'react'
import './Product.css'
import GradeIcon from '@material-ui/icons/Grade';
import { useStateValue } from '../../StateProvider/StateProvider';

const Product = ({id,title,price,rating,image}) => {
  const [{cart},dispatch] = useStateValue()
  

  const addToCart = ()=>{
    // dispatch item into data layer
    dispatch({
      type : 'ADD_TO_CART',
      item : {
        id : id,
        title : title,
        price : price,
        image : image,
        rating : rating
      }
    })
  }

  return (
    <div className='product' >
        <div className='product__info' key={id}>
          <p>{title}
          </p>
        <p className='product__price'><small>$</small><strong>{price}</strong></p>
        <p className='product__rating'>{Array(rating).fill().map((_,i)=>{return(<GradeIcon/>)
          
        })}</p>
        </div>
      <img src={image} alt='book'/>
      <button className='addToCart' onClick={addToCart}>Add to Cart</button>
        
    </div>
  )
}

export default Product