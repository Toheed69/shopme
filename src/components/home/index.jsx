import React from "react";
import Hero from "./Hero";
import TopProducts from "../TopProducts/TopProducts";  
import Products from "../Products/Products";
import Testimonials from "../Testimonials/Testimonials";
import Subscribe from "../Subscribe/Subscribe";
import Banner from "../Banner/Banner";  

const Home = () => {
  const handleOrderPopup = () => {
    console.log("Order popup triggered!");
  };

  return (
    <div>
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Testimonials />
    </div>
  );
};

export default Home;
