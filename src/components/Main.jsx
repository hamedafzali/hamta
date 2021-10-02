import React from "react";

import atm from "../assets/images/atm_dark.png";
import deal from "../assets/images/deal_dark.png";
import pointofsale from "../assets/images/point-of-sale_dark.png";
import about from "../assets/images/about.png";
import lights from "../assets/images/lights.png";
import simcard from "../assets/images/simcard.png";
import BlueBox from "./common/BlueBox";

import News from "./News";
import SwiperBox from "./SwiperBox";
const Main = () => {
  return (
    <React.Fragment>
      <div className="appContainer p1">
        <div className="imgContainer">
          <div className="text-center">
            <SwiperBox />;
          </div>
          <div className="BlueBoxContainer">
            <BlueBox text="درخواست خودپرداز">
              <img src={atm} alt="" className="BlueBoxImg" />
            </BlueBox>

            <BlueBox text="اعطای نمایندگی">
              <img src={deal} alt="" className="BlueBoxImg" />
            </BlueBox>
            <BlueBox text="درخواست کارتخوان">
              <img src={pointofsale} alt="" className="BlueBoxImg" />
            </BlueBox>
          </div>
        </div>
      </div>
      <div className="pAd">
        <p>اینجا محل تبلیغ شماست</p>
      </div>

      <div className="appContainer p1">
        <div className="aboutContainer aboutText">
          <div className="col text-justify">
            <p>درباره ما</p>
            {/* <p> معرفی شرکت آمیتیس همتا</p>
            <p>(هسته مرکزی تراکنش های الکترونیکی):</p> */}
            <div>
              شرکت آمیتیس همتا ، در راستای بسط و توسعه سیاستهای کلی کشور و جهت
              راه‌اندازی کسب و کارهای الکترونیکی و مجازی در حوزه تراکنش‌های مالی
              و بانکی با استفاده از ابزارهای مربوطه و با هدف ایجاد اشتغالزایی
              برای افراد مختلف در این حوزه و تسهیل بیشتر در گردش های مالی و
              بانکی به ویژه مناطق کم برخوردار و با اتکا به تجربیات و تلاش های
              سالیان گذشته کارکنان خود تشکیل شد. عموم افراد حاضر در این شرکت از
              میان فعالان حوزه پرداخت‌های الکترونیکی به ویژه در زمینه POS و ATM
              و ... و تعدادی از مدیران ، کارشناسان و صاحب نظران شاغل و بازنشسته
              در حوزه های مالی و بانکی می باشند.{" "}
            </div>
          </div>
          <div className="col aboutImageContainer">
            <img src={about} alt="" className="aboutImage" />
          </div>
        </div>
      </div>

      <News />
      <div className="appContainer p2">
        <div className="aboutContainer aboutText">
          <div className="col text-justify">
            <p>اقدامات شرکت همتا</p>

            <div>
              شرکت آمیتیس همتا ، در راستای بسط و توسعه سیاستهای کلی کشور و جهت
              راه‌اندازی کسب و کارهای الکترونیکی و مجازی در حوزه تراکنش‌های مالی
              و بانکی با استفاده از ابزارهای مربوطه و با هدف ایجاد اشتغالزایی
              برای افراد مختلف در این حوزه و تسهیل بیشتر در گردش های مالی و
              بانکی به ویژه مناطق کم برخوردار و با اتکا به تجربیات و تلاش های
              سالیان گذشته کارکنان خود تشکیل شد. عموم افراد حاضر در این شرکت از
              میان فعالان حوزه پرداخت‌های الکترونیکی به ویژه در زمینه POS و ATM
              و ... و تعدادی از مدیران ، کارشناسان و صاحب نظران شاغل و بازنشسته
              در حوزه های مالی و بانکی می باشند.{" "}
            </div>
          </div>
          <div className="col aboutImageContainer">
            <img src={lights} alt="" className="activityImage" />
          </div>
        </div>
      </div>
      <div className="appContainer p1">
        <div className="aboutContainer aboutText">
          <div className="col text-justify">
            <p>سیم کارتهای اختصاصی شرکت همتا</p>

            <div>
              شرکت آمیتیس همتا ، در راستای بسط و توسعه سیاستهای کلی کشور و جهت
              راه‌اندازی کسب و کارهای الکترونیکی و مجازی در حوزه تراکنش‌های مالی
              و بانکی با استفاده از ابزارهای مربوطه و با هدف ایجاد اشتغالزایی
              برای افراد مختلف در این حوزه و تسهیل بیشتر در گردش های مالی و
              بانکی به ویژه مناطق کم برخوردار و با اتکا به تجربیات و تلاش های
              سالیان گذشته کارکنان خود تشکیل شد. عموم افراد حاضر در این شرکت از
              میان فعالان حوزه پرداخت‌های الکترونیکی به ویژه در زمینه POS و ATM
              و ... و تعدادی از مدیران ، کارشناسان و صاحب نظران شاغل و بازنشسته
              در حوزه های مالی و بانکی می باشند.{" "}
            </div>
          </div>
          <div className="col aboutImageContainer">
            <img src={simcard} alt="" className="activityImage" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
