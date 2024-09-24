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
    <BrowserRouter>
      {" "}
      <div className="App">
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/catalog" element={<Catalog></Catalog>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/admin" element={<Admin></Admin>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/cart" element={<Cart></Cart>} />
        </Routes>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
