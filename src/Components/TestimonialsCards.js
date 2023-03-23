function TestimonialsCards (props) {
    return (
        <div className="Testimonials-card">
            <h1>Rating</h1>
            <div className="person">
                <img src={props.image} alt="person" />
                <h1>{props.name}</h1>
            </div>
            <h1>review text</h1>
        </div>
    );
}

export default TestimonialsCards;