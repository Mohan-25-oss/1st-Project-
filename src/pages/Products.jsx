import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import CartModal from "../components/CartModal";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
      console.log(response.data)
      setProducts(response.data);
    });
  }, []);
      

  const [isCartModalOpen, setIsCartModalOpen] = useState(true);
    const handleCartModalClose = () => {
      setIsCartModalOpen(false);
    };
    const handleCartModalOpen = () => {
      setIsCartModalOpen(true);
  };

  const [cartItems, setCartItems] = useState([]);

  const fetchExistingCartList = () => {
    const parsedProduct = JSON.parse(localStorage.getItem("cart"));
    console.log(parsedProduct);
    setCartItems(parsedProduct);
  };

  useEffect(() => {
    fetchExistingCartList();
  }, [])

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 max-h-auto">
        <div className="flex flex-wrap -m-4">
          {products &&
            products.length > 0 &&
            products.map((it) => {
              return (
                <Product
                  handleCartModalOpen={handleCartModalOpen}
                  key={it.id}
                  product={it}
                  fetchExistingCartList={fetchExistingCartList}
                ></Product>
              );
            })}
        </div>
      </div>
      
      <CartModal
        isCartModalOpen={isCartModalOpen}
        handleCartModalClose={handleCartModalClose}
        cartItems={cartItems} setCartItems={setCartItems}
      ></CartModal>
    </section>
  );
};
export default Products;
