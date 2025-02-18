import React, { useEffect, useState } from "react";

const CartModal = ({ handleCartModalClose, isCartModalOpen, cartItems, setCartItems }) => {

  const handleMinus = (id) => {
    console.log(id);
    if (cartItems && cartItems.length > 0) {
      const filteredCart = cartItems.find((it) => it.id === id);
      console.log(filteredCart);
      if (filteredCart.qty > 1) {
        const newQty = filteredCart.qty - 1;
        const newPrice = newQty * filteredCart.price;
        // console.log(newQty, newPrice);
        filteredCart.total = newPrice;
        filteredCart.qty = newQty;
        const filterItem = cartItems.filter((it) => it.id !== id);
        // console.log(filterItem);
        const newCartItem = [...filterItem, filteredCart];
        setCartItems(newCartItem);
        localStorage.setItem("cart", JSON.stringify(newCartItem));
      }
    }
  };

  const handlePlus = (id) => {
    if (cartItems && cartItems.length > 0) {
      const filteredCart = cartItems.find((it) => it.id === id);
      const newQty = filteredCart.qty + 1;
      const newPrice = newQty * filteredCart.price;
      // console.log(newQty, newPrice);
      filteredCart.total = newPrice;
      filteredCart.qty = newQty;
      const filterItem = cartItems.filter((it) => it.id !== id);
      // console.log(filterItem);
      const newCartItem = [...filterItem, filteredCart];
      setCartItems(newCartItem);
      localStorage.setItem("cart", JSON.stringify(newCartItem));
    }
  };

  return (
    <div
      className={
        isCartModalOpen
          ? "h-screen w-1/4 bg-lime-300 fixed top-0 right-0 p-10"
          : "h-full w-1/4 bg-lime-300 hidden top-0 right-0 p-10"
      }
    >
      {cartItems &&
        cartItems.length > 0 &&
        cartItems.map((it) => {
          return (
            <div
              key={it.id}
              className="flex items-center justify-between bg-amber-50 text-black mb-2 p-5 rounded-2xl"
            >
              <div>
                <img className="w-20 h-20" src={it.image} />
              </div>
              <div className="p-5">
                <h3>{it.name}</h3>
                <h3>SG {it.total}</h3>
              </div>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => handleMinus(it.id)}
                  className="bg-white border text-2xl p-4 cursor-pointer"
                >
                  -
                </button>
                <h3>{it.qty}</h3>
                <button
                  onClick={() => handlePlus(it.id)}
                  className="bg-white border text-2xl p-4 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      <button
        onClick={handleCartModalClose}
        className="w-full bg-white border p-3 rounded tex-2xl cursor-pointer"
      >
        Close
      </button>
    </div>
  );
};

export default CartModal;



