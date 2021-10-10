import React from "react";
import contactUs from "../assets/images/contactUs.png";
const NewsDetail = () => {
  return (
    <div className="appContainer p1 ">
      <img src={contactUs} alt="" className="contactUsImg" />
      <h1>شرح خبر</h1>
    </div>
  );
};

export default NewsDetail;
