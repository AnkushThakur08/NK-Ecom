import React from "react";
import product from "../assets/product.jpg";
import product1 from "../assets/Product1.jpeg";
import product2 from "../assets/Product2.jpeg";
import ProductCart from "./ProductCard";

const ProductSection = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-3 rounded ">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div
              className="card-header"
              id="headingOne"
              style={{ backgroundColor: "#468383" }}
            >
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Collapsible Group Item #1
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <b>This </b>
              </div>
            </div>
          </div>

          {/* 2nd Accordin */}
          <div class="card">
            <div
              class="card-header"
              id="headingTwo"
              style={{ backgroundColor: "white" }}
            >
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Collapsible Group Item #2
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <b>This is the second item's accordion body. </b>
              </div>
            </div>
          </div>
          {/* 3rd Accordion */}
          <div class="card">
            <div
              class="card-header"
              id="headingThree"
              style={{ backgroundColor: "white" }}
            >
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Collapsible Group Item #3
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <b>This is the third item's accordion body.</b>
              </div>
            </div>
          </div>

          {/* 4th Accordion */}

          <div class="card">
            <div
              class="card-header"
              id="headingFour"
              style={{ backgroundColor: "white" }}
            >
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Collapsible Group Item #4
                </button>
              </h5>
            </div>
            <div
              id="collapseFour"
              class="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <b>This is the Fourth item's accordion body.</b>
              </div>
            </div>
          </div>

          {/* 5th Accordions */}

          <div class="card">
            <div
              class="card-header"
              id="headingFive"
              style={{ backgroundColor: "white" }}
            >
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Collapsible Group Item #5
                </button>
              </h5>
            </div>
            <div
              id="collapseFive"
              class="collapse"
              aria-labelledby="headingFive"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <b>This is the Fiveth item's accordion body.</b>
              </div>
            </div>
          </div>

          {/* 6th Accordion */}

          <div class="card">
            <div
              class="card-header"
              id="headingSix"
              style={{ backgroundColor: "white" }}
            >
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Collapsible Group Item #6
                </button>
              </h5>
            </div>
            <div
              id="collapseSix"
              class="collapse"
              aria-labelledby="headingSix"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <b>This is the Sixth item's accordion body.</b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6">
        {" "}
        <h1 style={{ textAlign: "center", color: "blue" }} className="my-3">
          Min 60% OFF
        </h1>
        <div className="row my-3">
          <div className="col-12 col-sm-12 col-md-6 ">
            <ProductCart img={product} title="Shirt" />
          </div>

          <div className="col-12 col-sm-12 col-md-6 ">
            <ProductCart img={product1} title="Flip-Flop" />
          </div>
        </div>
        <h2 style={{ textAlign: "center", color: "blue" }} className="my-3">
          SHOP MORE
        </h2>
      </div>

      <div className="col-12 col-md-3 rounded ">
        <div className="accordion" id="accordionExample">
          <div class="card">
            <div
              class="card-header"
              id="headingSeven"
              style={{ backgroundColor: "#468383" }}
            >
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Best Seller
                </button>
              </h5>
            </div>
            <div
              id="collapseSeven"
              class="collapse"
              aria-labelledby="headingSeven"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <b>This </b>
              </div>
            </div>
          </div>

          {/* 8th Accordion */}
          <div class="card">
            <div
              class="card-header"
              id="headingEight"
              style={{ backgroundColor: "white" }}
            >
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Best Seller Item #2
                </button>
              </h5>
            </div>
            <div
              id="collapseEight"
              class="collapse"
              aria-labelledby="headingEight"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <b>This is the Eight item's accordion body. </b>
              </div>
            </div>
          </div>

          {/* 9Th Arrordion */}

          <div class="card">
            <div
              class="card-header"
              id="headingNine"
              style={{ backgroundColor: "white" }}
            >
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Best Seller Item #3
                </button>
              </h5>
            </div>
            <div
              id="collapseNine"
              class="collapse"
              aria-labelledby="headingNine"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <b>This is the second item's accordion body. </b>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Free Shooping */}
    </div>
  );
};

export default ProductSection;
