import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
//import NavbarMenu from "./common/Navbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-light nav p-0">
        <div className="navLogoContainer">
          <img src={logo} className="logo" alt="" />
        </div>

        <div
          className="navbar-toggler navbarToggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
          {/* <span class="my-1 mx-2 close">X</span> */}
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="nav1">
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
              <div
                className="outLink"
                onClick={() => window.open("http://www.hamta-service.com")}
              >
                <li className="nav-item navItem">همتا سرویس</li>
              </div>
              <Link to="/contactus" className="Link">
                <li className="nav-item navItem">تماس با ما</li>
              </Link>
            </ul>
            <div className="btnContainer2">
              <div className=" hbtn hbtn2">پورتال نمایندگان</div>
              <div className=" hbtn hbtn1">فروشگاه</div>
              <div className="  hbtn3"></div>
            </div>
          </div>
          <div className="btnContainer1">
            <div className=" hbtn hbtn2">پورتال نمایندگان</div>
            <div className=" hbtn hbtn1">فروشگاه</div>
            <div className="  hbtn3"></div>
          </div>
        </div>
      </nav>
      {/* <NavbarMenu /> */}
    </React.Fragment>
  );
};

export default Header;
