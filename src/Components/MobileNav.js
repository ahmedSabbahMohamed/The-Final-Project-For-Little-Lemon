import Nav from "./Nav";
import iconClose from '../Assets/icons-logo/icon-close.svg';
import '../Styles/MobileNav.css';
import { Link } from "react-router-dom";

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
                two={<Link to="/">Home</Link>}
                three={<a href='/'>About</a>}
                four={<a href='/'>Menu</a>}
                five={<Link to="/reservation-form">Reservations</Link>}
                six={<a href='/'>Order Online</a>}
                seven={<a href='/'>Login</a>}
            />
        </aside>
    );
}

export default MobileNav;