import "./admin.css";
import { useState } from "react";

function Admin() {
  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });

  const [product, setProduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
  });

  function handleCoupon(e) {
    const text = e.target.value;
    const name = e.target.name;
    console.log(name, text);

    //copy,modify the copy, set the copy
    const copy = { ...coupon };
    copy[name] = text;

    setCoupon(copy);
  }

  function handleProduct(e) {
    const text = e.target.value;
    const name = e.target.name;
    console.log(name, text);

    //copy,modify the copy, set the copy
    const copy = { ...product };
    copy[name] = text;

    setProduct(copy);
  }

  function saveCoupon() {
    console.log(coupon);
  }

  function saveProduct() {
    console.log(product);
  }

  return (
    <div className="admin">
      <h1>Store Administration</h1>
      <div className="admin-flex">
        <div className="products">
          <div className="form">
            <h3>Register a Product</h3>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Title
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder=""
                onChange={handleProduct}
                name="title"
              ></input>
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Image
              </label>
              <input
                type="file"
                class="form-control"
                id="formGroupExampleInput"
                placeholder=""
                onChange={handleProduct}
                name="image"
              ></input>
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Category
              </label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                onChange={handleProduct}
                name="category"
              ></input>
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Price
              </label>
              <input
                type="number"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder=""
                onChange={handleProduct}
                name="Price"
              ></input>
              <button className="btn btn-outline-dark" onClick={saveProduct}>
                Save Product
              </button>
            </div>
          </div>
        </div>
        <div className="coupons">
          <div className="form">
            <h3>Register a Coupon</h3>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Code
              </label>
              <input
                type="text"
                class="form-control"
                id="ccode"
                onChange={handleCoupon}
                placeholder=""
                name="code"
              ></input>
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Discount
              </label>
              <input
                type="number"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder=""
                name="discount"
                onChange={handleCoupon}
              ></input>
              <button className="btn btn-outline-dark" onClick={saveCoupon}>
                Save Coupon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
