import TestimonialsCards from "./TestimonialsCards";
import personOne from '../Assets/images/personOne';
import personTwo from '../Assets/images/personTwo';
import personThree from '../Assets/images/personThree';
import personFour from '../Assets/images/personFour';
import star from '../Assets/images/star';
import '../Styles/Testimonials.css';

function Testimonials () {
    return (
        <section className="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                <div className="four-cards">
                    <TestimonialsCards
                        star={
                            <>
                                <img src={star} alt="rating stars" />
                                <img src={star} alt="rating stars" />
                                <img src={star} alt="rating stars" />
                                <img src={star} alt="rating stars" />
                                <img src={star} alt="rating stars" />
                            </>
                        }
                        image={personOne}
                        name="Oliver Twist"
                        reviewText="Amazing restaurant i recommend you to visit"
                    />
                    <TestimonialsCards
                        star={
                            <>
                                <img src={star} alt="rating stars" />
                                <img src={star} alt="rating stars" />
                                <img src={star} alt="rating stars" />
                                <img src={star} alt="rating stars" />
                            </>
                        }
                        image={personTwo}
                        name="Enas Mansour"
                        reviewText="Amazing restaurant i recommend you to visit"
                    />
                    <TestimonialsCards
                        star={
                            <>
                                <img src={star} alt="rating stars" />
                                <img src={star} alt="rating stars" />
                                <img src={star} alt="rating stars" />
                                <img src={star} alt="rating stars" />
                                <img src={star} alt="rating stars" />
                            </>
                        }
                        image={personThree}
                        name="Ali Mohamed"
                        reviewText="Amazing restaurant i recommend you to visit"
                    />
                    <TestimonialsCards
                        star={
                            <>
                                <img src={star} alt="rating stars" />
                                <img src={star} alt="rating stars" />
                                <img src={star} alt="rating stars" />
                                <img src={star} alt="rating stars" />
                            </>
                        }
                        image={personFour}
                        name="Rewan Saleh"
                        reviewText="Amazing restaurant i recommend you to visit"
                    />
                </div>
            </div>
        </section>
    );
}

export default Testimonials;