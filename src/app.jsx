import React from "react";
import Homepage from "./pages/homepage/homepage.jsx";
import Login from "./pages/login/login.jsx";
import Navbar from "/src/components/navbar/Navbar.jsx";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/footer-pages/about/about.jsx";
import Contact from "./pages/footer-pages/contact/contact.jsx";
import Exchange from "./pages/footer-pages/exchange/exchange.jsx";
import Faq from "./pages/footer-pages/faq/faq.jsx";
import How_to_buy from "./pages/footer-pages/how_to_buy/how_to_buy.jsx";
import Payment from "./pages/footer-pages/payment/payment.jsx";
import Retail from "./pages/footer-pages/retail/retail.jsx";
import Shipping from "./pages/footer-pages/shipping/shipping.jsx";
import Work from "./pages/footer-pages/work/work.jsx";
import Signup from "./pages/signup/signup.jsx";
import Footer from "./footer/footer.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
 
    }


  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/how_to_buy" element={<How_to_buy />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/work" element={<Work />} />
          <Route path="/signup" element={<Signup /> } />
        </Routes>
        <Footer />
      </>
    );
  }
}



export default App;
