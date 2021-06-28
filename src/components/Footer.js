import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div
        className="row"
        style={{ borderTop: "1px solid", borderTopColor: "#f5e8ec" }}
      ></div>
      <div
        id="footer-div"
        className="row"
        style={{
          marginTop: "0.1em",
          backgroundColor: "beige",
          height: "100%",
        }}
      >
        <div
          className="col-3"
          style={{
            color: "#a09e9e",
            backgroundColor: "beige",
            textAlignLast: "center",
            fontFamily: "auto",
            alignSelf: "center",
            borderLeft: "1px solid rgba(0,0,0,0.07)",
            marginTop: "-30em",
          }}
        >
          POLICY
          <div>Privacy Policy</div>
          <div>Terms of Use</div>
          <div>Return Policy</div>
          <div>Report Abuse</div>
        </div>
        <div
          className="col-3"
          style={{
            color: "#a09e9e",
            backgroundColor: "beige",
            textAlignLast: "center",
            fontFamily: "auto",
            alignSelf: "center",
            borderLeft: "1px solid rgba(0,0,0,0.07)",
            marginTop: "-30em",
          }}
        >
          ABOUT US
          <div>Brands</div>
          <div>F. A.Qs</div>
          <div>Career </div>
          <div> Career </div>
        </div>
        <div
          className="col-3"
          style={{
            color: "#a09e9e",
            textAlignLast: "center",
            backgroundColor: "beige",
            fontFamily: "auto",
            alignSelf: "center",
            borderLeft: "1px solid rgba(0,0,0,0.07)",
            marginTop: "-30em",
          }}
        >
          CATEGORIES
          <div>Clothing and Fashion</div>
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
        </div>
        <div
          className="col-3"
          style={{
            color: "#a09e9e",
            backgroundColor: "beige",
            textAlignLast: "center",
            fontFamily: "auto",
            alignSelf: "center",
            borderLeft: "1px solid rgba(0,0,0,0.07)",
            marginTop: "-30em",
          }}
        >
          CONNECT WITH US
          <div>Address</div>
          <div>Testimonials</div>
          <div>SiteMap</div>
          <div>SiteMap</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
