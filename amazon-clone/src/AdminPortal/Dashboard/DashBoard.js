import React from 'react'
import Cards from './BodyCards/Cards'
import Charts from './Charts.js/Charts'
import './DashBoard.css'
import OrderSummary from './OrderSummary/OrderSummary'
import SideBar from './SideBar/SideBar'

const DashBoard = () => {
  return (
    <>
      <div className="dashboard">
        DashBoard
        <div className="dashBoardLeft">
          <SideBar />
        </div>
        <div className="dashBoardRight">
          <div className="dashboardContent">
            <div className="cards">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
            <div className="charts">
              <Charts />
            </div>
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard
