import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

export const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { getTotalCartItems } = useContext(ShopContext)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="logo" />
                <p>SHOPPER</p>
            </div>
            <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <li onClick={() => { setMenu("shop"); toggleMobileMenu(); }}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>Shop</Link> {menu === "shop" ? <hr></hr> : <></>}</li>
                <li onClick={() => { setMenu("mens"); toggleMobileMenu(); }}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/mens'}>Men</Link> {menu === "mens" ? <hr></hr> : <></>}</li>
                <li onClick={() => { setMenu("womens"); toggleMobileMenu(); }}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/womens'}>Women</Link> {menu === "womens" ? <hr></hr> : <></>}</li>
                <li onClick={() => { setMenu("kids"); toggleMobileMenu(); }}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/kids'}>Kids</Link> {menu === "kids" ? <hr></hr> : <></>}</li>
            </div>

            <div className='nav-hamburger' onClick={toggleMobileMenu}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            <div className='nav-login-cart'>
                <Link to={'/login'}><button>Login</button></Link>
                <Link to={'/cart'}><img src={cart_icon} alt="cart_icon" /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}


