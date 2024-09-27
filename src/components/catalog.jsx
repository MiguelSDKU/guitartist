import "./catalog.css";
import Product from "./product.jsx";
import { catalog as Products, categories } from "../services/DataService.js";
import { useState } from "react";

function Catalog() {
  const [filter, setFilter] = useState("");

  return (
    <div className="catalog">
      <h1>Our amazing catalog</h1>
      {/* <div>
        {categories.map((cat) => (
          <button className="btn btn-outline-dark">{cat}</button>
        ))}
      </div> */}

      <div className="filters">
        <button
          className="btn btn-sm btn-outline-dark"
          onClick={() => setFilter("")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            className="btn btn-sm btn-outline-dark"
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product">
        {Products.filter((prod) => filter == "" || prod.category == filter).map(
          (prod) => (
            <Product data={prod}></Product>
          )
        )}
      </div>

      {/* <div className="product">
        {" "}
        {Products.map((prod) => (
          <Product data={prod}></Product>
        ))}
      </div> */}
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
