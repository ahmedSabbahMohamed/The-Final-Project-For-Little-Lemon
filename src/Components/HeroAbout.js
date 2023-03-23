function HeroAbout (props) {
    return (
        <section>
            <div className="container">
                <div className="hero-about-cont">
                    <div className="desc">
                        <h1>Little Lemon</h1>
                        <p>{props.paragraph}</p>
                        <button>Reserve a Table</button>
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