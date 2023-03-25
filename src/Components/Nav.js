function Nav (props) {
    return (
        <nav>
        <ul className={props.class}>
            <li>{props.one}</li>
            <li>{props.two}</li>
            <li>{props.three}</li>
            <li>{props.four}</li>
            <li>{props.five}</li>
            <li>{props.six}</li>
            <li>{props.seven}</li>
        </ul>
    </nav>
    );
}

export default Nav;