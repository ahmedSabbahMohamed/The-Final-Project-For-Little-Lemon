function Nav (props) {
    return (
        <nav>
            <ul className={props.class}>
                <li><a href="/">{props.one}</a></li>
                <li><a href="/">{props.two}</a></li>
                <li><a href="/">{props.three}</a></li>
                <li><a href="/">{props.four}</a></li>
                <li><a href="/">{props.five}</a></li>
                <li><a href="/">{props.six}</a></li>
                <li><a href='$'>{props.seven}</a></li>
            </ul>
        </nav>
    );
}

export default Nav;