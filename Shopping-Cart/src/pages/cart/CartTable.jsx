import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContextProvider";
import "./cartTable.css";
import QuantityCounter from "../../components/QuantityCounter";

const CartTable = () => {
  const { cartItems, productsData, setCartItems, setNumberOfItemsInCart } =
    useContext(ProductContext);

  const cartItemIds = Object.entries(cartItems)
    .filter(([itemId, quantity]) => quantity > 0)
    .map(([itemId]) => Number(itemId));

  const cartProducts = productsData.filter((product) =>
    cartItemIds.includes(product.id)
  );

  setNumberOfItemsInCart(cartProducts.length);

  const handleRemoveBtn = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: 0 };
    });
  };

  return (
    <div className="cart-table-container">
      <h2>Your Cart</h2>
      {
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product) => (
              <tr>
                <td className="table-img">
                  <img src={product.image} alt="" />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <QuantityCounter product={product} />
                </td>
                <td>total</td>
                <td>
                  <button onClick={() => handleRemoveBtn(product.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
};

export default CartTable;
