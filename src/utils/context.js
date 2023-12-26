import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  useEffect(() => {
    let subTotal = 0;
    let count = 0;

    cartItems.map((item) => {
      subTotal += item.attributes.price * item.attributes.quantity;
      count += item.attributes.quantity;
    });
    setCartSubTotal(subTotal);
    setCartCount(count);
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let idx = items.findIndex((p) => p.id === product.id);

    if (idx !== -1) {
      items[idx].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  };

  const handleRemoveToCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
  };

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let idx = items.findIndex((p) => p.id === product.id);

    if (type === "inc") {
      items[idx].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[idx].attributes.quantity === 1) return;
      items[idx].attributes.quantity -= 1;
    }

    setCartItems(items);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveToCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
