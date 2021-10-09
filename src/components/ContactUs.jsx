import React from "react";
import contactUs from "../assets/images/contactUs.png";
import Map from "./Map";
const ContactUs = () => {
  return (
    <div className="appContainer p1 ">
      <img src={contactUs} alt="" className="contactUsImg" />
      <div className="contactUsContent">
        <div className="contactUsTbl">
          <p className="contactUsTitle">با ما در تماس باشید</p>

          <div className="tblRow ">
            <div className="tblCol ">
              <input placeholder="نام" className="input"></input>
            </div>
            <div className="tblCol">
              <input placeholder="پست الکترونیکی" className="input"></input>
            </div>
          </div>
          <div className="tblRow">
            <div className="tblCol">
              <input placeholder="شماره تماس" className="input"></input>
            </div>
            <div className="tblCol">
              <input placeholder="موضوع" className="input"></input>
            </div>
          </div>
          <div className="tblRow">
            <div className="tblCol ">
              <textarea
                placeholder="متن پیام"
                className="textarea"
                rows="10"
              ></textarea>
            </div>
          </div>
          <hr />
          <p className="contactUsDetail">
            آدرس:
            <br /> تهران، خیابان خرمشهر، تقاطع قنبرزاده، ساختمان نگین سبز (پارس
            آنلاین) پلاک 222 طبقه اول
          </p>
          <div className="tblRow">
            <div className="tblCol">
              <p className="contactUsDetail">
                <br /> <br />
                تلفن تماس:
                <br />
                <h4>58702 - 021</h4>
                02188769497 - 02188763610
                <br />
                02188749601 - 02188749603
                <br />
                <br /> کد پستی :<br /> 1533743518
              </p>
            </div>
            <div className="tblCol">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
