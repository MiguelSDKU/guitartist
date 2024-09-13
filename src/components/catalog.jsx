import "./catalog.css";
import Product from "./product.jsx";

function Catalog() {
  return (
    <div className="catalog">
      <h1>Our amazing catalog</h1>
      <Product></Product>
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
