import logoHeader from '../Assets/icons-logo/Logo.svg';
import Nav from './Nav';
import burgerMenu from '../Assets/icons-logo/burgerMenu.svg';

function Header () {
    return (
        <header className='container'>
            <div className='head-cont'>
                <div className="logo">
                    <img src={logoHeader} alt="logo" />
                </div>
                <Nav class="header-nav" one="Home" two="About" three="Menu" four="Reservations" five="OrderOnline" six="LogIn" seven={<img src={burgerMenu} alt="menu" />} />
            </div>
        </header>
    );
}

export default Header;