import Home from "./Home";
import BookingForm from "./BookingForm";
import { Route, Routes } from "react-router-dom";

function Main () {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservation-form" element={<BookingForm />} />
            </Routes>
        </main>
    );
}

export default Main;