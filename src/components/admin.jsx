import "./admin.css";
import { useEffect, useState } from "react";
import DataService from "../services/DataService";

function Admin() {
  const [allCoupons, setAllCoupons] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  async function loadData() {
    let prods = await DataService.getProducts();
    setAllProducts(prods);
  }

  useEffect(() => {
    loadData();
  }, []);

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
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }

  async function saveProduct() {
    console.log(product);

    let fixedProd = { ...product };
    fixedProd.price = parseFloat(fixedProd.price);

    let copy = [...allProducts];
    copy.push(fixedProd);
    setAllProducts(copy);

    let resp = await DataService.saveProduct(fixedProd);
    console.log(resp);
  }

  return (
    <div className="admin">
      <h1 className="h1color">Store Administration</h1>
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
                type="text"
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
                name="price"
              ></input>
              <button className="btn btn-outline-dark" onClick={saveProduct}>
                Save Product
              </button>
            </div>
          </div>

          {allProducts.map((prod) => (
            <li className="prod">
              <img src={prod.image}></img>
              <h5>{prod.title}</h5>
              <label>${prod.price}</label>
            </li>
          ))}
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
          {allCoupons.map((cp) => (
            <li>
              {cp.code} -- {cp.discount}%
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
