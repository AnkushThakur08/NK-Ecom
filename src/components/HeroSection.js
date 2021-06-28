import React from "react";

const HeroSection = () => {
  return (
    <div className="row" style={{ marginTop: "1em", height: "60%" }}>
      <div className="col-3" style={{ marginTop: "-4em" }}>
        <div
          className="accordion"
          id="accordionExample"
          style={{ marginLeft: "1em" }}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{ backgroundColor: "#2e7373e0", color: "white" }}
              >
                Category Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This</strong>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Category Item #2
              </button>
            </h2>

            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Category Item #3
              </button>
            </h2>

            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Category Item #4
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the fourth item's accordion body.</strong>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Category Item #5
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the fifth item's accordion body.</strong>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Category Item #6
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the six item's accordion body.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-6">
        <div>
          <h1 style={{ textAlign: "center", color: "blue" }}>Min 60% OFF</h1>
          {/* <img
            src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img-responsive center-block d-block mx-auto"
          /> */}
        </div>
        <div
          style={{
            margin: "0 auto",
            width: "100%",
            display: "flex",
            marginTop: "1em",
          }}
        >
          <div style={{ float: "left", width: "50%" }}>
            <img
              src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="img-responsive center-block d-block mx-auto"
              style={{
                width: "80%",
                height: "100%",
                marginLeft: "1em !important",
              }}
            />
            <div style={{ textAlign: "center", fontWeight: "bold" }}>
              Sports Wear Tank
            </div>
            {/* <img
              src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="img-responsive center-block d-block mx-auto"
              style={{ marginTop: "1em", margiLeft: "7em !important" }}
            /> */}
          </div>
          <div style={{ width: "50%" }}>
            <img
              src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="img-responsive center-block d-block mx-auto"
              style={{ width: "80%", height: "100%" }}
            />

            <div style={{ textAlign: "center", fontWeight: "bold" }}>
              Summer Wear Stuff
            </div>
            {/* <img
              src="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="img-responsive center-block d-block mx-auto"
              style={{ marginTop: "1em" }}
            /> */}
          </div>
        </div>
      </div>
      <div className="col-3" style={{ paddingRight: "2em" }}>
        <div className="accordion" id="accordionExample1">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne1"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{ backgroundColor: "#2e7373e0", color: "white" }}
              >
                BestSeller Item #1
              </button>
            </h2>
            <div
              id="collapseOne1"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne1"
              data-bs-parent="#accordionExample1"
            >
              <div className="accordion-body">
                <strong>This</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo1">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo1"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                BestSeller Item #2
              </button>
            </h2>
            <div
              id="collapseTwo1"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo1"
              data-bs-parent="#accordionExample1"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree1">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree1"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                BestSeller Item #3
              </button>
            </h2>
            <div
              id="collapseThree1"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree1"
              data-bs-parent="#accordionExample1"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "2em",
            height: "48%",
            backgroundColor: "#2e7373e0",
          }}
        >
          <label
            style={{
              color: "white",
              fontSize: "xxx-large",
              fontStyle: "italic",
              fontFamily: "auto",
              marginLeft: ".1em",
              marginTop: "1em",
            }}
          >
            Free Shipping!
          </label>
          <br />
          <button
            type="button"
            className="btn btn-outline-light"
            style={{ marginLeft: "6.5em", marginTop: "1em" }}
          >
            Click here
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
