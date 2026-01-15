import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Trust from "./components/Trust";
import About from "./components/About";
import Contact from "./components/Contact";

import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LANDING PAGE */}
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Hero />
              <Services />
              <Trust />
              <About />
              <Contact />
            </div>
          }
        />

        {/* BOOKING */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-success" element={<BookingSuccess />} />

      </Routes>
    </BrowserRouter>
  );
}



