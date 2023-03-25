import { useState } from "react";
import '../Styles/BookingForm.css';

function BookingForm (props) {
    //color
    var red = "hsl(0, 94%, 66%)";
    //reservation
    var times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const [availableTimes, setAvailableTimes] = useState(times);
    //validate name
    const [name, setName] = useState("");
    var validName = /[a-z]/ig;
    //validate email
    const [email, setEmail] = useState("");
    var validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //validate phone number
    const [phone, setPhone] = useState("");
    var validPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    //validate date
    const [date, setDate] = useState("");
    //validate number of guests
    const[guest, setGuests] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        let error = document.querySelectorAll("label .error");
        if (name === "" || !validName.test(name)) {
            document.querySelector("#name").style.border = `1px solid ${red}`;
            error[0].style.display = "block";
        } else {
            document.querySelector("#name").style.border = "1px solid gray";
            error[0].style.display = "none";
        }
        if (email === "" || !validEmail.test(email)) {
            document.querySelector("#email").style.border = `1px solid ${red}`;
            error[1].style.display = "block";
        } else {
            document.querySelector("#email").style.border = "1px solid gray";
            error[1].style.display = "none";
        }
        if (phone === "" || !validPhone.test(phone)) {
            document.querySelector("#phone").style.border = `1px solid ${red}`;
            error[2].style.display = "block";
        } else {
            document.querySelector("#phone").style.border = "1px solid gray";
            error[2].style.display = "none";
        }
        if (date === "") {
            document.querySelector("#date").style.border = `1px solid ${red}`;
            error[3].style.display = "block";
        } else {
            document.querySelector("#date").style.border = "1px solid gray";
            error[3].style.display = "none";
        }
        if (guest === "") {
            document.querySelector("#guests").style.border = `1px solid ${red}`;
            error[4].style.display = "block";
        } else {
            document.querySelector("#guests").style.border = "1px solid gray";
            error[4].style.display = "none";
        }
    }
    return (
        <section className="container">
            <form onSubmit={submitHandler}>
                <label htmlFor="name">
                    <span>Name:</span>
                    <span className="error">Name isn't valid</span>
                </label>
                <input type="text" id="name" placeholder="Ahmed Sabbah" onChange={e => setName(e.target.value)} />
                <label htmlFor="email">
                    <span>Email:</span>
                    <span className="error">Email isn't valid</span>
                </label>
                <input type="text" id="email" placeholder="example@gmail.com" onChange={e => setEmail(e.target.value)} />
                <label htmlFor="phone">
                    <span>Phone:</span>
                    <span className="error">Phone isn't valid</span>
                </label>
                <input type="text" id="phone" placeholder="1234567890" onChange={e => setPhone(e.target.value)} />
                <label htmlFor="date">
                    <span>Choose Date:</span>
                    <span className="error">Date isn't valid</span>
                </label>
                <input type="date" id="date" onChange={e => setDate(e.target.value)} />
                <label htmlFor="time">Choose Time:</label>
                <select id="time" onChange={e => setAvailableTimes(e.target.value)}>
                    {
                        availableTimes.map(time => (<option key={time} value={time}>{time}</option>))
                    }
                </select>
                <label htmlFor="guests">
                    <span>Number of guests:</span>
                    <span className="error">There is no guests</span>
                </label>
                <input type="number" id="guests" placeholder="2" max="10" min="1" onChange={e => setGuests(e.target.value)} />
                <label htmlFor="occasion">occasion:</label>
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button type="submit">Make Your Reservation</button>
                <div className="square"></div>
                <div className="animate"></div>
            </form>
        </section>
    );
}

export default BookingForm;