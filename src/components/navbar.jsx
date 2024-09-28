import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../state/DataContext";

function Navbar() {
  const { user, cart } = useContext(DataContext);

  return (
    <nav className="navbarog navbar navbar-expand-lg ">
      <div className="container-fluid navbars ">
        <Link className="navbar-brand text-warning" to="/">
          Guitartist
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link
                className="nav-link active text-warning"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-warning spacenav"
                aria-current="page"
                to="/catalog"
              >
                Catalogue
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-warning spacenav"
                aria-current="page"
                to="/admin"
              >
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-warning spacenav"
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-warning spacenav"
                aria-current="page"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <label className="btn btn-dark">{user.name}</label>

            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link to="/cart">
              <button className="btn btn-outline-success btn-sm" type="submit">
                View Cart{" "}
                <span className="badge bg-secondary text-light">
                  {cart.length}
                </span>
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
