import DataContext from "./DataContext";
import { useState } from "react";

function GlobalProvider(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ userId: 123, name: "Sergio" });

  function addProductToCart() {}

  function removeProductFromCart() {}

  function clearCart() {}

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        user: user,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        cleanCart: clearCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalProvider;
