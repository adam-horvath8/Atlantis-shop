import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContextProvider";
import "./cartTable.css";
import QuantityCounter from "../../components/QuantityCounter";

const CartTable = () => {
  const { cartProducts, setCartItems, cartItems } = useContext(ProductContext);

  console.log(cartItems);

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
              <tr key={product.id}>
                <td className="table-img">
                  <img src={product.image} alt="" />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <QuantityCounter product={product} />
                </td>
                <td>
                  {Number(
                    (Number(cartItems[product.id]) * product.price).toFixed(2)
                  ) + " EUR"}
                </td>
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
