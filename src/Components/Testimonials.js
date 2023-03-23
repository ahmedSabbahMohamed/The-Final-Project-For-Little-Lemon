import TestimonialsCards from "./TestimonialsCards";
import personOne from '../Assets/images/personOne';
import personTwo from '../Assets/images/personTwo';
import personThree from '../Assets/images/personThree';
import personFour from '../Assets/images/personFour';

function Testimonials () {
    return (
        <section>
            <div className="container">
                <div className="four-cards">
                    <TestimonialsCards
                        image={personOne}
                        name="Oliver Twist"
                    />
                    <TestimonialsCards
                        image={personTwo}
                        name="Enas Mansour"
                    />
                    <TestimonialsCards
                        image={personThree}
                        name="Ali Mohamed"
                    />
                    <TestimonialsCards
                        image={personFour}
                        name="Rewan Saleh"
                    />
                </div>
            </div>
        </section>
    );
}

export default Testimonials;