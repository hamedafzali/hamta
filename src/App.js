import React, { useEffect } from "react";
//import { useSelector, useDispatch } from "react-redux";
// import NotificationBar from "./components/common/notificationBar";
import Header from "./components/Header";
import baner from "./assets/images/baner1.jpg";
import atm from "./assets/images/atm.png";
import deal from "./assets/images/deal.png";
import pointofsale from "./assets/images/point-of-sale.png";
import about from "./assets/images/about.png";
import employees from "./assets/images/employees.jpg";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import Main from "./components/Main";
// import { errorChanged } from "./store/loading";

import "./App.scss";
import BlueBox from "./components/common/BlueBox";
import Footer from "./components/Footer";
import News from "./components/News";

const App = () => {
  useEffect(() => AOS.init(), []);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(errorChanged(false));
  //   }, [dispatch]);
  //   const isLoading = useSelector((state) => state.loadingsReducer);
  return (
    <>
      <Header />
      <div className="appContainer p1">
        <div className="imgContainer">
          <div className="text-center">
            <img src={baner} alt="" className="mylogo" />
          </div>
          <div className="BlueBoxContainer">
            <BlueBox>
              <img src={atm} alt="" className="BlueBoxImg" />
            </BlueBox>
            <BlueBox>
              <img src={deal} alt="" className="BlueBoxImg" />
            </BlueBox>
            <BlueBox>
              <img src={pointofsale} alt="" className="BlueBoxImg" />
            </BlueBox>
          </div>
        </div>
      </div>
      <News />
      <div className="appContainer p1">
        <div className="aboutContainer aboutText">
          <div className="col text-justify">
            <p>درباره ما</p>
            <p> معرفی شرکت آمیتیس همتا</p>
            <p>(هسته مرکزی تراکنش های الکترونیکی):</p>
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

        <div className="aboutText">
          سوابق ، تجربیات و عملکرد : از سوابق قبلی موسسین و عملکرد مدیران فعلی
          شرکت می توان به موارد ذیل اشاره نمود : واگذاری 170 هزار دستگاه POS
          سیار در سال های 98 و 99 به شرکت های همکار و مشاغل خرد نصب و راه اندازی
          بیش از 1500 دستگاه خودپرداز مشارکتی و ایجاد درآمدزایی واشتغال برای
          پذیرندگان در بانک های شهر ، انصار ، قوامین و کوثر ازسال 92 تا 99 عقد
          قرارداد اتصال سوئیچ پرداخت همتا با شرکت پرداخت نوین آرین به عنوان زیر
          سوئیچ به منظور نصب دستگاههای کارتخوان در سال 99 عقد قرارداد اتصال
          سوئیچ پرداخت همتا با شرکت فناوا کارت به عنوان زیر سوئیچ به منظور نصب
          دستگاههای کارتخوان در سال 99 عقد قرارداد نصب و راه اندازی دستگاه
          خودپرداز با بانک کارآفرین در سال 1400 عقد قرارداد اتصال سوئیچ پرداخت
          همتا به شرکت پرداخت الکترونیک سداد به عنوان زیر سوئیچ به منظور نصب
          دستگاههای کارتخوان در سال 1400 جذب بیش از 1100 نماینده در سراسر کشور
          جهت واگذاری و پشتیبانی دستگاههای کارتخوان جذب 65 نماینده استانی در
          سراسر کشور به منظور پشتیبانی و پرستاری دستگاههای خودپرداز مذاکره و
          توافق با دو بانک خصوصی کشور به منظور نصب و پشتیبانی حداقل 100 هزار
          دستگاه کارتخوان سیار طی مدت یکسال بصورت اجاره ماهانه جهت جذب منابع
        </div>
      </div>

      {/* <PersonDataMap /> */}
      <div className="pAd">
        <p>اینجا محل تبلیغ شماست</p>
      </div>
      <div className="appContainer p1">
        <div className="aboutContainer aboutText">
          <div className="col text-justify">
            <p>درباره ما</p>
            <p> معرفی شرکت آمیتیس همتا</p>
            <p>(هسته مرکزی تراکنش های الکترونیکی):</p>
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
            <img src={employees} alt="" className="aboutImage" />
          </div>
        </div>

        <div className="aboutText">
          سوابق ، تجربیات و عملکرد : از سوابق قبلی موسسین و عملکرد مدیران فعلی
          شرکت می توان به موارد ذیل اشاره نمود : واگذاری 170 هزار دستگاه POS
          سیار در سال های 98 و 99 به شرکت های همکار و مشاغل خرد نصب و راه اندازی
          بیش از 1500 دستگاه خودپرداز مشارکتی و ایجاد درآمدزایی واشتغال برای
          پذیرندگان در بانک های شهر ، انصار ، قوامین و کوثر ازسال 92 تا 99 عقد
          قرارداد اتصال سوئیچ پرداخت همتا با شرکت پرداخت نوین آرین به عنوان زیر
          سوئیچ به منظور نصب دستگاههای کارتخوان در سال 99 عقد قرارداد اتصال
          سوئیچ پرداخت همتا با شرکت فناوا کارت به عنوان زیر سوئیچ به منظور نصب
          دستگاههای کارتخوان در سال 99 عقد قرارداد نصب و راه اندازی دستگاه
          خودپرداز با بانک کارآفرین در سال 1400 عقد قرارداد اتصال سوئیچ پرداخت
          همتا به شرکت پرداخت الکترونیک سداد به عنوان زیر سوئیچ به منظور نصب
          دستگاههای کارتخوان در سال 1400 جذب بیش از 1100 نماینده در سراسر کشور
          جهت واگذاری و پشتیبانی دستگاههای کارتخوان جذب 65 نماینده استانی در
          سراسر کشور به منظور پشتیبانی و پرستاری دستگاههای خودپرداز مذاکره و
          توافق با دو بانک خصوصی کشور به منظور نصب و پشتیبانی حداقل 100 هزار
          دستگاه کارتخوان سیار طی مدت یکسال بصورت اجاره ماهانه جهت جذب منابع
        </div>
      </div>

      <Footer />
    </>
  );
};
// const PersonDataMap = ({ selected }) => {
//   return (
//     <iframe
//       style={{ width: "100%", height: 400 }}
//       title="map"
//       src="http://mapsengine.google.com/map/embed?mid=z-BEFzFo7gdM.kYdiUKVQpQQI"
//     ></iframe>
//   );
// };
export default App;
