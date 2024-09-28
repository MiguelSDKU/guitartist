import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Catalog from "./components/catalog.jsx";
import Home from "./components/home.jsx";
import Admin from "./components/admin.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalProvider from "./state/GlobalProvider.jsx";
import Cart from "./components/cart.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <GlobalProvider>
      {" "}
      {/* Envuelve la aplicación dentro de GlobalProvider */}
      <video autoPlay muted loop id="myVideo">
        <source src="/images/behindjazz.mp4" type="video/mp4"></source>
      </video>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
