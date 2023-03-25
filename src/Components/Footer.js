import footerLogo from '../Assets/icons-logo/Logo.svg';
import Nav from './Nav';
import {CiFacebook} from 'react-icons/ci';
import {CiTwitter} from 'react-icons/ci';
import {AiOutlineInstagram} from 'react-icons/ai';
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={footerLogo} alt="logo" />
                    </div>
                    <Nav class="footer-nav" one="Doormat Nav Igation" two={<Link to="/">Home</Link>} three={<a href='/'>About</a>} four={<a href='/'>Menu</a>} five={<Link to="/reservation-form">Reservations</Link>} six={<a href='/'>Order Online</a>} seven={<a href='/'>Login</a>} />
                    <Nav class="footer-nav" one="Contact" two={<a href='/'>Adress</a>} three={<a href='/'>Phone Number</a>} four={<a href='/'>Email</a>} />
                    <Nav class="footer-social" one="Social Media Links" two={<a href='/'><CiFacebook /></a>} three={<a href='/'><CiTwitter/></a>} four={<a href='/'><AiOutlineInstagram /></a>} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;