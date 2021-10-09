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
import NewsBox from "./NewsBox";
const Main = () => {
  return (
    <React.Fragment>
      <div className="appContainer p1">
        <div className="imgContainer">
          <div className="text-center">
            <SwiperBox />
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
      {/* <NewsBox /> */}
      <News />
      <div className="pAd">
        <p>اینجا محل تبلیغ شماست</p>
      </div>

      <div className="appContainer p1">
        <div className="aboutContainer aboutText">
          <div className="col text-justify">
            <p>درباره ما</p>
            {/* <p> معرفی شرکت آمیتیس همتا </p>
            <p>(هسته مرکزی تراکنش های الکترونیکی):</p> */}
            <div>
              شرکت آمیتیس همتا ، در راستای بسط و توسعه سیاست های کلی کشور و جهت
              راه‌اندازی کسب و کارهای الکترونیکی و مجازی در حوزه تراکنش‌های مالی
              و بانکی با استفاده از ابزارهای مربوطه و با هدف ایجاد اشتغالزایی
              برای افراد مختلف در این حوزه و تسهیل بیشتر در گردش های مالی و
              بانکی به ویژه مناطق کم برخوردار و با اتکا به تجربیات و تلاش های
              سالیان گذشته کارکنان خود تشکیل شد.
              <br /> ساختار سازمانی این شرکت از میان فعالان حوزه پرداخت‌های
              الکترونیکی به ویژه در زمینه POS و ATM و Cashless و ... و تعدادی از
              مدیران ، کارشناسان و صاحب نظران شاغل و بازنشسته در حوزه های مالی و
              بانکی می باشند.
            </div>
          </div>
          <div className="col aboutImageContainer">
            <img src={about} alt="" className="aboutImage" />
          </div>
        </div>
      </div>

      <div className="p2">
        <div className="aboutContainer aboutText">
          <div className="m-3 text-justify">
            <p>سوابق، تجربیات و عملکرد</p>

            <div>
              <div>
                از سوابق قبلی موسسین و عملکرد مدیران فعلی شرکت می توان به موارد
                ذیل اشاره نمود :
              </div>
              <br />
              <li>
                واگذاری170 هزار دستگاه pos سیار در سال های 98 و 99 به شرکت های
                همکار و مشاغل خرد
              </li>
              <li>
                نصب و راه اندازی بیش از 1500 دستگاه خودپرداز مشارکتی و ایجاد
                درآمدزایی و اشتغال برای پذیرندگان به صورت خصوصی در بانک های شهر
                ، انصار ، قوامین و کوثر و ... از سال 92 تا 99
              </li>
              <li>
                عقد قرارداد اتصال پرداخت سوئیچ همتا به PSP پرداخت نوین آرین به
                عنوان زیر سوئیچ به منظور نصب دستگاههای کارتخوان در سال 99
              </li>
              <li>
                عقد قرارداد نصب و راه اندازی دستگاه خودپرداز با بانک کارآفرین و
                اقتصاد نوین در سال 1400
              </li>
              <li>
                مذاکره جهت عقد قرارداد اتصال پرداخت سوئیچ همتا با چندین شرکت
                پرداخت الکترونیک به عنوان زیر سوئیچ به منظور نصب دستگاههای
                کارتخوان و تکمیل فرآیند تست سوئیچ در 3 شرکت PSP و انعقاد قرارداد
                NDA
              </li>
              <li>
                عقد قرارداد با شرکت پارسیان کیش به عنوان شریک تجاری جهت انجام
                طرح ها و پروژه های مشترک
              </li>
              <li>
                مذاکره و توافق با دو بانک خصوصی کشور به منظور نصب و پشتیبانی
                حداقل 50 هزار دستگاه کارتخوان سیار طی مدت یکسال بصورت اجاره
                ماهانه
              </li>
              <li>
                جذب بیش از 1100 نماینده در سراسر کشور جهت واگذاری و پشتیبانی
                دستگاههای کارتخوان
              </li>
              <li>
                جذب 65 نماینده استانی در سراسر کشور به منظور پشتیبانی و پرستاری
                دستگاههای خودپرداز
              </li>
              <br />
            </div>
          </div>
          <div className="aboutImageContainer">
            <img src={lights} alt="" className="activityImage" />
          </div>
        </div>
      </div>
      <div className="appContainer p1">
        <div className=" aboutText">
          <div className="row ">
            <div className="col text-justify">
              <p>سیم کارتهای اختصاصی شرکت همتا</p>
              یکی از ابزارها و وسایلی که متقاضیان در هنگام خرید دستگاه کارتخوان
              سیار به آن نیاز دارند ، سیم کارت مناسب با قدرت آنتن دهی مناسب در
              سراسر کشور می باشد . شرکت همتا در همین راستا و جهت سهولت دسترسی و
              تسریع در راه اندازی و فعالسازی دستگاههای کارتخوان پذیرندگان و
              همچنین ایجاد درآمدزایی بیشتر برای نمایندگان محترم خود ، نسبت به
              راه اندازی سیستم فروش سیم کارت اختصاصی همتا با همکاری شاتل موبایل
              طی قرارداد منعقده اقدام نموده و کلیه نمایندگان می توانند همزمان با
              فعالسازی دستگاه کارتخوان سیار برای پذیرندگان ، نسبت به تخصیص سیم
              کارت همتا یا شاتل برای پذیرندگان خود اقدام نمایند .<br />
            </div>
          </div>
          <div className="  aboutContainer">
            <div className=" text-justify">
              <div>
                نمایندگان همتا علاوه بر فروش سیم کارت می توانند خدمات دیگری را
                به شرح ذیل نیز به مشتریان خود ارائه و از این محل کسب درآمد
                نمایند :
                <br />
                <br />
                <li>نقل و انتقال سیم کارت</li>
                <li>تعویض سیم کارت سوخته و یا مفقود شده</li>
                <li>تغییر و اصلاح آدرس سیم کارت</li>
                <li>قطعی و وصل سیم کارت</li>
                <li>خرید شارژ و بسته های افزایشی</li>
                <li>ترابرد سیم کارت به اپراتور خود</li>
                <li>پیگیری مزاحمت تلفنی سیم کارت</li>
                <li>صدور صورتحساب</li>
                <li>مسدود سازی سیم کارت در صورت مفقودی</li>
                <li>فعالسازی سرویس‌های ویژه </li>
                <br />
              </div>
            </div>
            <div className=" aboutImageContainer">
              <img src={simcard} alt="" className="activityImage" />
            </div>
          </div>
          <div className="row ">
            <div className="col text-justify mb-5">
              نمایندگان محترم همچنین می توانند خدمات دیگری مثل پرداخت قبض سیم
              کارت های دائمی ، خرید مودم ، حراج شماره های رند ، بسته اینترنت و
              امکانات بسیار دیگری را به پذیرندگان یا سایر متقاضیان به صورت مستقل
              ارائه نمایند
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
