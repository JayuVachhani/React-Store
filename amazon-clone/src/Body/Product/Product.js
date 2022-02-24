import React from 'react'
import './Product.css'
import GradeIcon from '@material-ui/icons/Grade';

const Product = ({title,price,rating,image}) => {
  return (
    <div className='product'>
        <div className='product__info'>
          <p>{title}
          </p>
        <p className='product__price'><small>$</small><strong>{price}</strong></p>
        <p className='product__rating'>{Array(rating).fill().map((_,i)=>{return(<GradeIcon/>)
          
        })}</p>
        </div>
      <img src={image} alt='book'/>
      <button className=''>Add to Cart</button>
        
    </div>
  )
}

export default Product