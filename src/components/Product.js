import React from "react";

const Product = () => {
  return (
    <div>
      <div className="row" style={{ marginTop: "1em" }}>
        <h1 style={{ textAlign: "center", color: "blue" }}>SHOP MORE</h1>
        <div className="col-12">
          <img src="" className="img-responsive center-block d-block mx-auto" />
        </div>
      </div>

      <div
        className="row"
        style={{
          width: "98%",
          marginTop: "3em",
          marginLeft: "1em",
          height: "53%",
        }}
      >
        <div className="col-3">
          <img
            src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img-responsive center-block d-block mx-auto"
            style={{ width: "80%", height: "50%" }}
          />
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            T-Shirts
          </div>
          {/* <img
            src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img-responsive center-block d-block mx-auto"
            style={{ marginTop: "1em", height: "8%" }}
          /> */}
        </div>

        <div className="col-3">
          <img
            src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img-responsive center-block d-block mx-auto"
            style={{ width: "80%", height: "50%" }}
          />
          <div style={{ textAlign: "center", fontWeight: "bold" }}>Shirts</div>
          {/* <img
            src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img-responsive center-block d-block mx-auto"
            style={{ marginTop: "1em", height: "7%" }}
          /> */}
        </div>
        <div className="col-3">
          <img
            src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img-responsive center-block d-block mx-auto"
            style={{ width: "80%", height: "50%" }}
          />
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            Flip-Flops
          </div>
          {/* <img
            src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img-responsive center-block d-block mx-auto"
            style={{ marginTop: "1em", height: "8%" }}
          /> */}
        </div>
        <div className="col-3">
          <img
            src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img-responsive center-block d-block mx-auto"
            style={{ width: "80%", height: "50%" }}
          />
          <div style={{ textAlign: "center", fontWeight: "bold" }}>shorts</div>
          <img
            src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img-responsive center-block d-block mx-auto"
            style={{ margiTop: "1em", height: "7%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
