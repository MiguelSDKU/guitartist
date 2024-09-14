import "./product.css";
import QuantityPicker from "./quantitypicker";

function Product(props) {
  function adder() {
    console.log("adding to cart");
  }

  return (
    <div className="product">
      {" "}
      <div className="prodo">
        {" "}
        <img src={props.data.image} alt=""></img>
        <h3>{props.data.title} </h3>
        <label>${props.data.price}</label>
        <QuantityPicker></QuantityPicker>
        <button onClick={adder} className="btn btn-sm btn-primary">
          Add
        </button>
      </div>
    </div>
  );
}

export default Product;
