import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Reservation from "./pages/Reservation";
import ContactUs from "./pages/ContactUs";
import Checkout from "./pages/Checkout";
import Testimonials from "./pages/Testimonials";
import Events from "./pages/Events";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/event" element={<Events />} />
      </Routes>
    </div>
  )
}

export default App
