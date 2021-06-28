import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="row" style={{ backgroundColor: "#58ababe0" }}>
        <div
          className="col-12"
          style={{
            color: "white",
            fontFamily: "auto",
            textAlignLast: "center",
          }}
        >
          NK International
        </div>
      </div>

      <div
        className="row"
        style={{
          backgroundColor: "#2e7373e0",
          height: "9%",
          padding: "1.2em",
        }}
      >
        <div
          className="col-1"
          style={{
            color: "white",
            textAlignLast: "center",
            fontFamily: "auto",
            alignSelf: "center",
            borderRight: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          Home
        </div>

        <div
          className="col-1"
          style={{
            color: "white",
            textAlignLast: "center",
            fontFamily: "auto",
            alignSelf: "center",
            borderRight: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          Women
        </div>

        <div
          className="col-1"
          style={{
            color: "white",
            textAlignLast: "center",
            fontFamily: "auto",
            alignSelf: "center",
            borderRight: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          Men
        </div>

        <div
          className="col-1"
          style={{
            color: "white",
            textAlignLast: "center",
            fontFamily: "auto",
            alignSelf: "center",
            borderRight: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          Kids
        </div>

        <div
          className="col-6"
          style={{
            color: "white",
            textAlignLast: "center",
            fontFamily: "auto",
            alignSelf: "center",
            borderRight: "1px solid rgba(0,0,0,0.07)",
          }}
        ></div>

        <div
          className="col-1"
          style={{
            color: "white",
            textAlignLast: "center",
            fontFamily: "auto",
            alignSelf: "center",
            borderRight: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          Cart
        </div>

        <div
          className="col-1"
          style={{
            color: "white",
            textAlignLast: "center",
            fontFamily: "auto",
            alignSelf: "center",
            borderRight: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          Sign in
        </div>
      </div>
    </div>
  );
};

export default NavBar;
