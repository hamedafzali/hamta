import React from "react";
import logo from "../assets/images/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light  nav ">
        <img src={logo} className="logo" alt="" />

        <div
          className="navbar-toggler navbarToggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className=" navbar-nav ">
            <li className="nav-item active navItem ">خانه</li>

            <li className="nav-item navItem">کارتخوان</li>
            <li className="nav-item navItem">خودپرداز</li>
            <li className="nav-item navItem">همتا سرویس</li>
            <li className="nav-item navItem">تماس با ما</li>
          </ul>
          <div className="btnContainer">
            <div className="btn hbtn ">پورتال نمایندگان</div>
            <div className="btn hbtn ">فروشگاه</div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
