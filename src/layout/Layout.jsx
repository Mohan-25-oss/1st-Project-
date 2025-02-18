import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import CartModal from './../components/CartModal';


const Layout = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const handleCartModalClose = () => {
    setIsCartModalOpen(false);
  };
  const handleCartModalOpen = () => {
    setIsCartModalOpen(true);
  };
  return (
    <>
      <Header handleCartModalOpen={handleCartModalOpen}></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster></Toaster>
      <CartModal
        handleCartModalClose={handleCartModalClose}
        isCartModalOpen={isCartModalOpen}
      ></CartModal>
    </>
  );
};

export default Layout;
