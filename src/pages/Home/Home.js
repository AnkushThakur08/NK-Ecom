import React from "react";

// Components
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import Product from "../../components/Product";
import Footer from "../../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <HeroSection />
      <Product />
      <Footer />
      {/* <div className="row" style={{ margiTop: "1em" }}>
        <div className="col-12">
          <img
            src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img-responsive center-block d-block mx-auto"
          />
        </div>
      </div>
      <div
        className="row"
        style={{
          width: "98%",
          margiTop: "0em",
          margiLeft: "1em",
          height: "53%",
        }}
      >
        <div className="col-3">
          <img
            src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img-responsive center-block d-block mx-auto"
            style={{ width: "80%", height: "50%" }}
          />
          <img
            src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img-responsive center-block d-block mx-auto"
            style={{ marginTop: "1em" }}
          />
        </div>
        <div className="col-3">
          <img
            src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img-responsive center-block d-block mx-auto"
            style={{ width: "80%", height: "50%" }}
          />
          <img
            src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img-responsive center-block d-block mx-auto"
            style={{ marginTop: "1em" }}
          />
        </div>
        <div className="col-3">
          <img
            src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img-responsive center-block d-block mx-auto"
            style={{ width: "80%", height: "50%" }}
          />
          <img
            src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img-responsive center-block d-block mx-auto"
            style={{ marginTop: "1em" }}
          />
        </div>
        <div className="col-3">
          <img
            src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img-responsive center-block d-block mx-auto"
            style={{ width: "80%", height: "50%" }}
          />
          <img
            src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img-responsive center-block d-block mx-auto"
            style={{ marginTop: "1em" }}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Home;
