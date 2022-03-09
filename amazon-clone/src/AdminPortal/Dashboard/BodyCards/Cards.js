import React from 'react'
import './Cards.css'

const Cards = () => {
  return (
    <div className="card">
      <div className="card_body">
        <div className="card_header">
        <div className="counts">5555</div>
          <div className="card_icon">
            <img src="" alt="icon" />
          </div>
          
        </div>
        <div className="card_ProgressBar"></div>
        <div className="card_footer">
          <div className="card_title">Total Orders</div>
          <div className="card_orderPercentage">+4.2%</div>
        </div>
      </div>
    </div>
  )
}

export default Cards
