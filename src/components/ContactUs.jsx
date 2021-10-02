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
          <div className="tblRow">
            <div className="tblCol">
              <p className="contactUsDetail">
                آدرس:
                <br /> تهران ، خیابان بهشتی ،خیابان قنبرزاده ، نبش خرمشهر پلاک
                222
                <br />
                طبقه اول <br />
                <br />
                تلفن تماس :<br /> 02158702-02188763610
                <br />
                <br /> کد پستی :<br /> 1555555555
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
