import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper" style={{backgroundColor : 'black'}}>
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left" style={{paddingTop:'2rem'}}>
        <div style={{position:'relative'}}>
          <img src="./datawizlogo.png" alt="" width={170} style={{position:"absolute",top:-105,left:-32}} />
          </div>
          <span className="secondaryText">
          Empowering You to Understand Companies <br />
          and Data Like Never Before.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText " style={{color:'#fff'}}>Information</span>
          <span className="secondaryText">144 Andheri, Mumbai, India</span>
          <div className="flexCenter f-menu">
            {/* <span>Property</span> */}
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
