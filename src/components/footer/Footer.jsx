import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pinterest_icon from '../assets/pinterest_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={footer_logo} alt="footer_logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-social-icon'>
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="instagram_icon" />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon} alt="pinterest_icon" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="whatsapp_icon" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright © 2024 - All Right Reserved.</p>
            </div>
        </div>
    )
}


