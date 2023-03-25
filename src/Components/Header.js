import logoHeader from '../Assets/icons-logo/Logo.svg';
import Nav from './Nav';
import burgerMenu from '../Assets/icons-logo/burgerMenu.svg';
import '../Styles/Header.css';
import { Link } from 'react-router-dom';

function Header () {
    const openMobileNav = (e) => {
        e.preventDefault();
        document.querySelector(".mobile-nav").style.width = "calc((100% / 3) * 2)";
    };
    return (
        <header className='container'>
            <div className='head-cont'>
                <div className="logo">
                    <a href='/'>
                    <img src={logoHeader} alt="logo" />
                    </a>
                </div>
                <Nav class="header-nav" one={<Link to="/">Home</Link>} two={<a href='/'>About</a>} three={<a href='/'>Menu</a>} four={<Link to="/reservation-form">Reservations</Link>} five={<a href='/'>Order Online</a>} six={<a href='/'>Login</a>}
                    seven={<img src={burgerMenu} alt="menu"
                    onClick={openMobileNav}
                        />}
                />
            </div>
        </header>
    );
}

export default Header;