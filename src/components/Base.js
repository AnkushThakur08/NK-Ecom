import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Base = () => {
  return (
    <div id="Base">
      <div className="webTitle" style={{ backgroundColor: "#58ababe0" }}>
        <div
          style={{
            color: "white",
            fontFamily: "auto",
            textAlignLast: "center",
          }}
        >
          NK International
        </div>

        {/* Navbar */}

        <NavBar />
      </div>

      {/* Footer */}

      <Footer />
    </div>
  );
};

export default Base;
