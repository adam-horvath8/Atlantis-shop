import React from "react";
import "./cartTable.css";
import QuantityCounter from "../../components/reusables/QuantityCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import CheckOut from "./CheckOut";

const CartTable = ({
  handleRemoveBtn,
  cartProducts,
  cartItems,
  getTotalPrice,
}) => {
  console.log(cartItems);



  return (
    <>
      <div className="cart-table-container">
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
                  <td>
                    <span>
                      {product.price}{" "}
                      <FontAwesomeIcon className="icon" icon={faEuroSign} />
                    </span>
                  </td>
                  <td>
                    <QuantityCounter product={product} />
                  </td>
                  <td>
                    <span>
                      {Number(
                        (Number(cartItems[product.id]) * product.price).toFixed(
                          2
                        )
                      )}
                      <FontAwesomeIcon className="icon" icon={faEuroSign} />
                    </span>
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
        <CheckOut getTotalPrice={getTotalPrice} />
      </div>
    </>
  );
};

export default CartTable;
