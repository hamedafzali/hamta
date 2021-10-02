import React, { Component } from "react";

// import NewWindow from "react-new-window";
//import { Navbar, Nav } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
//import logo from "../../assets/images/Logo Amar without.png";
import logo from "../../assets/images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../../assets/css/navbar.css";
import { Link } from "react-router-dom";
//import { getMenuData } from "../../services/general";
class NavbarMenu extends Component {
  state = {
    menu: "",
    menudata: [
      {
        Id: 1,
        Name: "خانه",
        Link: "/",
        Status: 1,
        PId: 0,
        Order: "1",
        Icon: null,
      },

      {
        Id: 2,
        Name: "کارتخوان",
        Link: "/pos",
        Status: 1,
        PId: 0,
        Order: "2",
        Icon: null,
      },
      {
        Id: 3,
        Name: "خودپرداز",
        Link: "/atm",
        Status: 1,
        PId: 0,
        Order: "4",
        Icon: null,
      },
      {
        Id: 31,
        Name: "خودپرداز نقدی",
        Link: "/atm",
        Status: 1,
        PId: 3,
        Order: "4",
        Icon: null,
      },
      {
        Id: 311,
        Name: "NCR",
        Link: "/atm",
        Status: 1,
        PId: 31,
        Order: "4",
        Icon: null,
      },
      {
        Id: 312,
        Name: "Wincore",
        Link: "/atm",
        Status: 1,
        PId: 31,
        Order: "4",
        Icon: null,
      },
      {
        Id: 32,
        Name: "خودپرداز غیر نقدی",
        Link: "/atm",
        Status: 1,
        PId: 3,
        Order: "4",
        Icon: null,
      },
      {
        Id: 4,
        Name: "همتا سرویس",
        Link: "/hamtaservice",
        Status: 1,
        PId: 0,
        Order: "5",
        Icon: null,
      },
      {
        Id: 5,
        Name: "تماس با ما",
        Link: "/contactus",
        Status: 1,
        PId: 0,
        Order: "6",
        Icon: null,
      },
    ],
  };
  componentDidMount() {
    this.fillmenu();
  }
  fillmenu = () => {
    //const { data } = getMenuData();
    //console.log("menu", data);
    let menu = this.refresh(this.state.menudata, 0);
    this.setState({ menu: null }, () => this.setState({ menu }));
  };
  refresh = (table, PId) => {
    let menu = table.filter((i) => i.PId === PId);
    if (menu.length !== 0) {
      return menu.map((i) => {
        let subMenu = table.filter((j) => j.PId === i.Id);
        if (subMenu.length !== 0) {
          return (
            <Dropdown
            //key="right"
            //id={`dropdown-button-drop-right`}
            //drop="down"
            //variant="none"
            //title={` Drop right `}
            >
              <Dropdown.Toggle
                //variant="light"
                //id="dropdown-basic"
                //drop="right"
                //key="right"
                className="nav-item navItem m-1"
              >
                {i.Name}
              </Dropdown.Toggle>
              <Dropdown.Menu>{this.refresh(table, i.Id)}</Dropdown.Menu>
            </Dropdown>
          );
        } else {
          return (
            <Dropdown.Item key={i} eventKey="1" className="DropdownItem">
              <Link to={i.Link} className="Link">
                <li className="nav-item navItem">{i.Name}</li>
              </Link>
            </Dropdown.Item>
          );
        }
      });
    }
  };

  render() {
    return (
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
          <ul className=" navbar-nav ">{this.state.menu}</ul>
          <div className="btnContainer">
            <div className="btn hbtn ">پورتال نمایندگان</div>
            <div className="btn hbtn ">فروشگاه</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavbarMenu;
