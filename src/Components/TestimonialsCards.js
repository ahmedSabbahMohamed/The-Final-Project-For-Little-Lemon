function TestimonialsCards (props) {
    return (
        <div className="Testimonials-card">
            <div className="rating">
                <span>{props.star}</span>
            </div>
            <div className="person">
                <img src={props.image} alt="person" />
                <p>{props.name}</p>
            </div>
            <p>{props.reviewText}</p>
        </div>
    );
}

export default TestimonialsCards;