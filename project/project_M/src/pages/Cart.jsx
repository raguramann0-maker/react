import Sidebar from "../components/Sidebar";
import "./Cart.css";
import { useEffect, useState } from "react";

function Cart() {

  const [cartItems, setCartItems] = useState([]);



  useEffect(() => {

    const data =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(data);

  }, []);

  // REMOVE ITEM

  const removeItem = (id) => {

    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // GRAND TOTAL

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container">

      <Sidebar />

      <div className="cart-page">

        <h1>My Cart</h1>

        {cartItems.length === 0 ? (

          <h2 className="empty">
            Cart Is Empty
          </h2>

        ) : (

          <>
            <div className="cart-grid">

              {cartItems.map((item) => (

                <div className="cart-card" key={item.id}>

                  <img
                    src={item.image}
                    alt=""
                  />

                  <h2>{item.name}</h2>

                  <p>₹ {item.price}</p>

                  <p>
                    Quantity :
                    {item.quantity}
                  </p>

                  <h3>
                    Total :
                    ₹ {item.price * item.quantity}
                  </h3>

                  <button
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>
              ))}

            </div>

            <div className="checkout-box">

              <h2>
                Grand Total : ₹ {total}
              </h2>

              <button className="checkout-btn">
                Checkout
              </button>

            </div>
          </>
        )}

      </div>

    </div>
  );
}

export default Cart;