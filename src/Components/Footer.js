import footerLogo from '../Assets/icons-logo/Logo.svg';
import Nav from './Nav';
import {CiFacebook} from 'react-icons/ci';
import {CiTwitter} from 'react-icons/ci';
import {AiOutlineInstagram} from 'react-icons/ai';
import '../Styles/Footer.css';

function Footer () {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={footerLogo} alt="logo" />
                    </div>
                    <Nav class="footer-nav" one="Doormat Nav Igation" two="Home" three="About" four="Menu" five="Reservations" six="Order Online" seven="Login" />
                    <Nav class="footer-nav" one="Contact" two="Adress" three="Phone Number" four="Email" />
                    <Nav class="footer-social" one="Social Media Links" two={<CiFacebook />} three={<CiTwitter/>} four={<AiOutlineInstagram />} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;