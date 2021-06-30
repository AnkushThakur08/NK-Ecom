import React from "react";
import BannerImg from "../assets/banner.jpg";
const Banner = () => {
  const LoginForm = () => {
    return (
      <div className="bg-white">
        <div
          className="text-white p-3 mt-3 text-center rounded-top"
          style={{ backgroundColor: "#468383" }}
        >
          Login to Cart
        </div>
        <form className="loginform pt-3 rounded-bottom border border-secondary px-2 pb-3">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group pt-3">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <div className="form-check pt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="btn text-white"
            style={{ backgroundColor: "#468383" }}
          >
            Submit
          </button>
          <div>
            Not a member already?{" "}
            <a className="link-dark" href="#!">
              Signup here
            </a>
          </div>
        </form>
      </div>
    );
  };

  const SearchForm = () => {
    return (
      <div className="bg-white">
        <div
          className="text-white p-3 mt-3 text-center rounded-top"
          style={{ backgroundColor: "#468383" }}
        >
          Search for Products
        </div>
        <form className="searchform pt-3 rounded-bottom border border-secondary px-2 pb-3">
          <div className="form-group">
            <label for="imputSearch"></label>
            <input
              type="text"
              className="form-control"
              id="imputSearch"
              aria-describedby="search"
              placeholder="Search here..."
            />
          </div>

          <button
            type="Search"
            className="btn text-white mt-2"
            style={{ backgroundColor: "#468383" }}
          >
            Search
          </button>
          <div>Use keywords to find the product you are looking for. </div>
          <a className="link-dark" href="#!">
            Advanced Search
          </a>
        </form>
      </div>
    );
  };

  return (
    <div className="row">
      <div className="col-12 col-md-3 rounded ">
        <SearchForm />
      </div>

      <img
        src={BannerImg}
        alt="banner"
        className="img-fluid col-12 col-md-6 "
      />

      <div className="col-12 col-md-3 rounded ">
        <LoginForm />
      </div>
    </div>
  );
};

export default Banner;
