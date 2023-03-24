import Card from "./Card";
import greekSalad from '../Assets/icons-logo/greekSalad.jpg';
import bruchetta from '../Assets/icons-logo/bruchetta.jpg';
import lemonDessert from '../Assets/icons-logo/lemonDessert.jpg';
import '../Styles/Highlights.css';

function Highlights () {
    return (
        <section className="highlights">
            <div className="container">
                <div className="highlights-head">
                    <h1>Specials</h1>
                    <button>Online Menu</button>
                </div>
                <div className="three-cards">
                    <Card
                        cardImage={greekSalad}
                        cardTitle="Greek Salad"
                        price="$12.99"
                        cardDesc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    />
                    <Card
                        cardImage={bruchetta}
                        cardTitle="Bruchetta"
                        price="$5.99"
                        cardDesc="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                    />
                    <Card
                        cardImage={lemonDessert}
                        cardTitle="Lemon Dessert"
                        price="$5.00"
                        cardDesc="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                    />
                </div>
            </div>
        </section>
    );
}

export default Highlights;