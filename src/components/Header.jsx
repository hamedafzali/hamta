import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import NavbarMenu from "./common/Navbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light nav p-0">
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
          <span class="my-1 mx-2 close">بستن</span>
          <span class="navbar-toggler-icon"></span>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className=" navbar-nav p-0">
            <Link to="/" className="Link">
              <li className="nav-item active navItem ">خانه</li>
            </Link>
            <Link to="/pos" className="Link">
              <li className="nav-item navItem">کارتخوان</li>
            </Link>
            <Link to="/atm" className="Link">
              <li className="nav-item navItem">خودپرداز</li>
            </Link>
            <Link to="/hamtaservice" className="Link">
              <li className="nav-item navItem">همتا سرویس</li>
            </Link>
            <Link to="/contactus" className="Link">
              <li className="nav-item navItem">تماس با ما</li>
            </Link>
          </ul>
          <div className="btnContainer">
            <div className=" hbtn hbtn2">پورتال نمایندگان</div>
            <div className=" hbtn hbtn1">فروشگاه</div>
          </div>
        </div>
      </nav>
      {/* <NavbarMenu /> */}
    </React.Fragment>
  );
};

export default Header;
