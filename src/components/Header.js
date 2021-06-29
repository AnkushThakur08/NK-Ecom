import React from "react";

const Header = () => {
  return (
    <div className="row" style={{ marginTop: "1em" }}>
      <div className="col-3">
        { /* <div className="title">
          <h1 className="title-heading">Search</h1>
        </div>

        <div className="title-text">
          <input className="search-box" type="search" />
          <button>Search Now</button>
          <p> Use Keyboard to find the product you are looking for</p>
          <a> Advanced Search</a>
        </div> */}

        <img
          src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="img-responsive center-block d-block mx-auto"
          style={{ paddingLeft: "1em", marginTop: "2.3em", width: "100%" }}
        />
      </div>

      <div className="col-6">
        <img
          src="https://images.pexels.com/photos/3965551/pexels-photo-3965551.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="img-responsive center-block d-block mx-auto"
          style={{ marginTop: "2.3em", width: "-webkit-fill-available" }}
        />
      </div>

      <div className="col-3">
        <img
          src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="img-responsive center-block d-block mx-auto"
          style={{ marginTop: "2.3em", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Header;
