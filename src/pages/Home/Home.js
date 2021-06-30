import React from "react";

// Components

import Banner from "../../components/Banner";
import ProductSection from "../../components/ProductSection";

import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.css";
import Base from "../../components/Base";
import ProductShowCaseSection from "../../components/ProductShowCaseSection";

const Home = () => {
  return (
    <div>
      <Base>
        <Banner />
        <ProductSection />
        <ProductShowCaseSection />
      </Base>
    </div>
  );
};

export default Home;
