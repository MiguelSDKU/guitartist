import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Catalog from "./components/catalog.jsx";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Catalog></Catalog>

      <Footer></Footer>
    </div>
  );
}

export default App;
