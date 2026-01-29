import React from "react";

export default function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="container mt-4">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="row">
          {cartItems.map((item, index) => (
            <div className="col-lg-4 mb-4 mt-4" key={index}>
              <div className="card p-3 shadow">
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5>{item.name}</h5>
                  <p>Price: {item.price}$</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove ❌
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
