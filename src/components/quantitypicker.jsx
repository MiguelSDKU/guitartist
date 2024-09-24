import { useState } from "react";
import "./quantitypicker.css";

function QuantityPicker(props) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    console.log("Increase");

    setQuantity(quantity + 1);
    props.onChange(quantity + 1);
  }

  function handleDecrease() {
    console.log("Decrease");
    if (quantity == 1) {
      setQuantity(1);
    } else if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
    props.onChange(quantity - 1);
  }

  return (
    <div className="qt-picker">
      <button
        disabled={quantity === 1}
        onClick={handleDecrease}
        className="btn btn-sm btn-dark"
      >
        -
      </button>
      <label>{quantity}</label>
      <button onClick={handleIncrease} className="btn btn-sm btn-dark">
        +
      </button>
    </div>
  );
}

export default QuantityPicker;
