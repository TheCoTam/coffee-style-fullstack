import { createContext, useState } from "react";

export const ProductsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [productList, setProductList] = useState([]);

  const addToCart = (mug, quantity) => {
    if (!cartItems[mug._id]) {
      setCartItems({
        ...cartItems,
        [mug._id]: Number(quantity),
      });
      setProductList([...productList, mug]);
    } else {
      setCartItems((prev) => ({
        ...prev,
        [mug._id]: prev[mug._id] + Number(quantity),
      }));
    }
  };

  const remove1Quantity = (mugId) => {
    if (cartItems[mugId] === 1) {
      const { [mugId]: _, ...rest } = cartItems;
      setCartItems(rest);
      setProductList(productList.filter((mug) => mug._id !== mugId));
    } else {
      setCartItems((prev) => ({
        ...prev,
        [mugId]: prev[mugId] - 1,
      }));
    }
  };

  const add1Quantity = (mugId) => {
    setCartItems((prev) => ({
      ...prev,
      [mugId]: prev[mugId] + 1,
    }));
  };

  const getTotalCartPrice = () => {
    let total = 0;

    for (const item in cartItems) {
      const mug = productList.find((mg) => mg._id === item);
      total += mug.price * cartItems[item];
    }

    return total;
  };

  const contextValue = {
    productList,
    cartItems,
    addToCart,
    remove1Quantity,
    add1Quantity,
    getTotalCartPrice,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
