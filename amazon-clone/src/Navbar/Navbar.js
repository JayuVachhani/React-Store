import React from 'react'
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <div className='navbar__logo'>
            <img src='https://bizmonthly.com/wp-content/uploads/2020/04/amazon-logo-black.png' alt="Amazon"/>
        </div>
        <div className='navbar__search'>
            <input type='text' className='searchField'/>
            <SearchIcon className="navbar__searchIcon"/>

        </div>
        <div className='navbar__nav'>
            <div className='navbar__option'>
                <span className='navbar_optionone'>Hello Guest</span>
                <span className='navbar_optiontwo'>SignIn</span>
            </div>
            <div className='navbar__option'>
            <span className='navbar_optionone'>Returns</span>
                <span className='navbar_optiontwo'>& Orders</span>
            </div>
            <div className='navbar__option'>
            <span className='navbar_optionone'>Your</span>
                <span className='navbar_optiontwo'>Prime</span>
            </div>
            <div className='navbar__optionBasket'>
            <ShoppingCartIcon/>
            <span className='navbar_optiontwo navbar__basketCount'>0</span>
            </div>
        </div>
    </div>
    </> 
  )
}

export default Navbar