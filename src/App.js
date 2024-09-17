import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Catalog from "./components/catalog.jsx";
import Home from "./components/home.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Home></Home>

      <Catalog></Catalog>

      <Footer></Footer>
    </div>
  );
}

export default App;
