import "./catalog.css";
import Product from "./product.jsx";
import { catalog as Products } from "../services/DataService.js";

function Catalog() {
  return (
    <div className="catalog">
      <h1>Our amazing catalog</h1>
      <div className="product">
        {" "}
        <Product data={Products[0]}></Product>
        {/* <Product title="Gibson Les Paul" price="300"></Product>
        <Product title="Fender Stratocaster" price="700"></Product>
        <Product title="Jackson FLying V " price="500"></Product>
        <Product title="Epiphone Acoustic" price="400"></Product>
        <Product title="Yamaha Pacifica" price="350"></Product> */}
      </div>
    </div>
  );
}

export default Catalog;

/**
 * Create a Product component
 * render a title inside it
 * and a price
 *
 * on Catalog page
 * render 5 Product tags
 */
