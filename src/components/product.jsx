import "./product.css";
import QuantityPicker from "./quantitypicker";
import { useState } from "react";

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  function adder() {
    console.log("adding to cart");
  }

  function handleQuantity(qty) {
    console.log("Quantity changed!", qty);
    setQuantity(qty);
  }

  function getTotal() {
    let total = props.data.price.toFixed(2) * quantity;
    return total.toFixed(2);
  }

  return (
    <div className="product">
      {" "}
      <div className="prodo">
        {" "}
        <img src={props.data.image} alt=""></img>
        <h3>{props.data.title} </h3>
        <div className="price-flex">
          {" "}
          <label className="solo-price">
            Price ${props.data.price.toFixed(2)}
          </label>
          <label className="total-price">Total ${getTotal()}</label>
        </div>
        <QuantityPicker onChange={handleQuantity}></QuantityPicker>
        <button onClick={adder} className="btn btn-sm btn-primary">
          Add
        </button>
      </div>
    </div>
  );
}

export default Product;
