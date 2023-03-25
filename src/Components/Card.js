import {MdDeliveryDining} from 'react-icons/md';

function Card (props) {
    return (
    <div className="card">
        <div className="card-image">
            <img src={props.cardImage} alt="card one" />
        </div>
        <div className='card-cont'>
        <div className="card-title">
            <h1>{props.cardTitle}</h1>
            <p>{props.price}</p>
        </div>
        <div className="card-desc">
            <p>{props.cardDesc}</p>
        </div>
        <div className="card-foot">
            <h1>Order a Delivery    <MdDeliveryDining /></h1>
        </div>
        </div>
    </div>
    );
}

export default Card;