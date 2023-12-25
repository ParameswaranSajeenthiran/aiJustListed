import React from "react";
import { FillUpSvg, HouseSvg, PremadeSvg } from "../../../assets/icon";
import userImage from "../../../assets/profile/profile.png";
import "./welcome.scss";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

function Welcome() {
  const userName = localStorage.getItem("userName");

  return (
    <div className="welcome">
      <div className="header">
        <div className="houses">
          {/* <div className="house">
            123
            <HouseSvg />
          </div>
          <div className="userImage">
            david
            <img src={userImage} alt="" />
          </div> */}
        </div>
      </div>
      <div className="container">
        <div className="welcome-message">
          <img src={logo} alt="" />
          <div className="userName">Welcome {userName} !</div>
          <p>Experience the art of living in every property.</p>
          <div className="buttons">
            <Link to={"/premade"}>
              <PremadeSvg />
              Add your pre-made list
            </Link>
            <Link to={"/fillup"}>
              <FillUpSvg />
              Fill up quickly
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
