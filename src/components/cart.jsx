import "./cart.css";
import { useContext } from "react";
import DataContext from "../state/DataContext";

function Cart() {
  const { cart } = useContext(DataContext);

  function getTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      const prod = cart[i];
      total += prod.quantity * prod.price;
    }

    return total.toFixed(2);
  }

  return (
    <div className="cart page">
      <h1>Got everythin?</h1>
      <h4>
        Lets proceed to payment of your <b>{cart.length}</b> items
      </h4>

      <div className="parent">
        <div className="list">
          {cart.length == 0 ? (
            <div className="alert alert-primary">
              <h5>Go to Catalog and add products there!</h5>
            </div>
          ) : null}

          {cart.map((prod) => (
            <div className="productS">
              <div className="product1">
                {" "}
                <img src={prod.image}></img>
                <h5>{prod.title}</h5>
                {/* <label>${prod.price}</label>
              <label>#{prod.price}</label> */}
              </div>

              <div className="product2">
                {" "}
                <label>${(prod.price * prod.quantity).toFixed(2)}</label>
                <button className="btn btn-sm btn-outline-danger">
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 ? (
          <div className="side">
            <h4>Total</h4>
            <h3>${getTotal()}</h3>

            <button className="btn btn-primary">Procees to payment</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Cart;
