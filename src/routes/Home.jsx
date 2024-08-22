import React from "react";
import "./Home.css";
import Banner from "../components/Banner/Banner";
import Category from "../components/Category/Category";
import Products from "../components/Products/Products";
import Trending from "../components/Trending/Trending";
import Shipping from "../components/Shipping/Shipping";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <Products />
      <Trending />
      <Shipping />
      <Footer />
    </>
  );
};

export default Home;
