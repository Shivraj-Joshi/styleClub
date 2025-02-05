import React from "react";
// import { useContext } from "react";

import Layout from "../../components/layout/Layout";

// import myContext from "../../context/myContext";
// import { NavLink } from "react-router-dom";
import HeroSection from "../../components/heroSection/HeroSection";
import Products from "../../components/products/Products";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, deleteFromCart } from "../../redux/CartSlice";

const Home = () => {
  // const dispatch = useDispatch();
  // const cartItem = useSelector((state) => state.cart);

  // console.log(cartItem);

  // const addCart = () => {
  //   dispatch(addToCart("t-shirt"));
  // };

  // const deleteCart = () => {
  //   dispatch(deleteFromCart("t-shirt"));
  // };

  return (
    <Layout>
      <div className="mt-16">
        <HeroSection />
        <Products />
      </div>
    </Layout>
  );
};

export default Home;
