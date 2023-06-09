import { useState } from "react";
import '../Styles/BookingForm.css';

function BookingForm () {
    //color
    var red = "hsl(0, 94%, 66%)";
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
    var validNum = /[1-9]/;
    //validate time
    const [time, setTime] = useState("Select date");
    //validate occasion
    const [occasion, setOccasion] = useState("any");
    const submitHandler = (e) => {
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
        if (guest === "" || !validNum.test(guest)) {
            document.querySelector("#guests").style.border = `1px solid ${red}`;
            error[5].style.display = "block";
        } else {
            document.querySelector("#guests").style.border = "1px solid gray";
            error[5].style.display = "none";
        }
        if (time === "Select date") {
            document.querySelector("#time").style.border = `1px solid ${red}`;
            error[4].style.display = "block";
        } else {
            document.querySelector("#time").style.border = `1px solid gray`;
            error[4].style.display = "none";
        }
        if (occasion === "any") {
            document.querySelector("#occasion").style.border = `1px solid ${red}`;
            error[6].style.display = "block";
        } else {
            document.querySelector("#occasion").style.border = "1px solid gray";
            error[6].style.display = "none";
        }
        e.preventDefault();
        if (name ===! "" || validName.test(name) && email ===! "" || validEmail.test(email) && phone ===! "" || validPhone.test(phone) && phone ===! "" || validPhone.test(phone) && guest ===! "" || validNum.test(guest)) {
            if (occasion ===! "any") {
                console.log("continue");
            }
        }
    };
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
                <label htmlFor="time">
                    <span>Choose Time:</span>
                    <span className="error">You didn't select a time</span>
                </label>
                <select defaultValue={time} id="time" onChange={e => setTime(e.target.value)}>
                    <option value="empty">Select date</option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>

                <label htmlFor="guests">
                    <span>Number of guests:</span>
                    <span className="error">There is no guests</span>
                </label>
                <input type="text" id="guests" placeholder="2" max="10" min="1" onChange={e => setGuests(e.target.value)} />
                <label htmlFor="occasion">
                    <span>occasion:</span>
                    <span className="error">you didn't select a occasion</span>
                </label>
                <select defaultValue={occasion} id="occasion" onChange={e => setOccasion(e.target.value)}>
                    <option value="empty">any</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button aria-label="on Click" className="submit" type="submit">Make Your Reservation</button>
                <div className="square"></div>
                <div className="animate"></div>
            </form>
        </section>
    );
}

export default BookingForm;