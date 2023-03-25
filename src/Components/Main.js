import Home from "./Home";
import BookingForm from "./BookingForm";
import { Route, Routes } from "react-router-dom";
import MobileNav from "./MobileNav";

function Main () {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservation-form" element={<BookingForm />} />
            </Routes>
            <MobileNav />
        </main>
    );
}

export default Main;