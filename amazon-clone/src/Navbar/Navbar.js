import React from 'react'
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';


const Navbar = () => {
    const [{cart,user},dispatch] = useStateValue();
  return (
    <>
    <div className='navbar'>
        <div className='navbar__logo'>
            <Link to="/"><img src='https://bizmonthly.com/wp-content/uploads/2020/04/amazon-logo-black.png' alt="Amazon"/></Link>
            
        </div>
        <div className='navbar__search'>
            <input type='text' className='searchField'/>
            <SearchIcon className="navbar__searchIcon"/>

        </div>
        
        <div className='navbar__nav'>
        <Link to='/login'>
        <div className='navbar__option'>
                <span className='navbar_optionone'>Hello {user ? user?.email.split("@")[0] : "Guest"}</span>
                <span className='navbar_optiontwo'>{user?"Sign Out":"Sign In"}</span>
            </div>
        </Link>
            
            <div className='navbar__option'>
            <span className='navbar_optionone'>Returns</span>
                <span className='navbar_optiontwo'>& Orders</span>
            </div>
            <div className='navbar__option'>
            <span className='navbar_optionone'>Your</span>
                <span className='navbar_optiontwo'>Prime</span>
            </div>
            <Link to='checkout'>
            <div className='navbar__optionBasket'>
            <ShoppingCartIcon/>
            <span className='navbar_optiontwo navbar__basketCount'>{cart?.length}</span>
            </div>
            </Link>
        </div>
    </div>
    </> 
  )
}

export default Navbar