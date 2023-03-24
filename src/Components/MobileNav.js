import Nav from "./Nav";
import iconClose from '../Assets/icons-logo/icon-close.svg';
import '../Styles/MobileNav.css';

function MobileNav () {
    const closeMobileNav = (e) => {
        e.preventDefault();
        document.querySelector(".mobile-nav").style.width = "0";
    };
    return (
        <aside className="mobile-nav">
            <Nav
            one={<img src={iconClose} alt="close menu"
                onClick={closeMobileNav}
            />}
            two="Home" three="About" four="Menu"
            five="Reservations"
            six="Order Online"
            seven="Login" />
        </aside>
    );
}

export default MobileNav;