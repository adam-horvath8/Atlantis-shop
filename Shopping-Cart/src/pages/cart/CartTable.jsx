import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContextProvider";
import "./cartTable.css";
import QuantityCounter from "../../components/reusables/QuantityCounter";
import scrollToTop from "../../utils/scrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";

const CartTable = () => {
  const { cartProducts, setCartItems, cartItems } = useContext(ProductContext);

  console.log(cartItems);

  const handleRemoveBtn = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: 0 };
    });
  };

  const getTotalPrice = () => {
    const arrayOfPrices = cartProducts.map((product) => {
      return Number((cartItems[product.id] * product.price).toFixed(2));
    });

    const totalPrice = arrayOfPrices
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0)
      .toFixed(2);

    return totalPrice;
  };

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
        <div className="check-out">
          <span>
            {getTotalPrice()} <FontAwesomeIcon icon={faEuroSign} />
          </span>
          <button type="button">Checkout</button>
          <Link to="/shop" onClick={scrollToTop} className="check-out-link">
            Keep Shopping!
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartTable;
