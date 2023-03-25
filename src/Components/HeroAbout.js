import '../Styles/HeroAbout.css';
import { Link } from 'react-router-dom';

function HeroAbout (props) {
    return (
        <section className={props.heroOrAbout}>
            <div className="container">
                <div className="hero-about-cont">
                    <div className="desc">
                        <h1>
                            Little Lemon
                            <small>Egypt</small>
                        </h1>
                        <p>{props.paragraph}</p>
                        <button><Link className='btn' to="reservation-form">Reserve a Table</Link></button>
                    </div>
                    <div className="hero-about-image">
                        <img src={props.image} alt="hero&about" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroAbout;