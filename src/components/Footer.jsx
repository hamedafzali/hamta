// import Map from "./Map";
const Footer = () => {
  return (
    <div>
      <div className="footer ">
        <div className="footerContent ">
          <div className="">
            <div className="my-2">
              آدرس:
              <br /> تهران، خیابان خرمشهر، تقاطع قنبرزاده، ساختمان نگین سبز
              (پارس آنلاین) پلاک 222 طبقه اول
              <br /> <br />
            </div>

            <div className="my-2">
              تلفن تماس:
              <br />
              <h4>58702 - 021</h4>
              02188769497 - 02188763610
              <br />
              02188749601 - 02188749603
            </div>
            <br />
            <div className="my-2">
              کد پستی :
              <br />
              1533743518
            </div>
            {/* <div>
            <div className="fa-stack fa-lg mx-2">
              <a href={`tel:+982158702`}>
                <i className="fa fa-phone phone"></i>
              </a>
            </div>

            <div className="fa-stack fa-lg mx-2">
              <a
                // href={`whatsapp://send?abid=989121374574&text=you are invited to our team!!!`}
                href={`https://wa.me/989128485608?text=سلام. در صورت امکان آخرین لیست قیمت را برای من ارسال نمایید.`}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-whatsapp whatsapp"></i>
              </a>
            </div>
            <div className="fa-stack fa-lg mx-2">
              <a
                href={`https://instagram.com/amitis_hamta`}
                target={"_blank"}
                rel="noreferrer"
              >
                <i className="fa fa-instagram instagram"></i>
              </a>
            </div>
          </div> */}
          </div>

          <div>
            <div>لینکهای مرتبط</div>
            <hr />
            <div
              className="outLink"
              onClick={() => window.open("https://pna.co.ir/")}
            >
              پرداخت نوین
            </div>
            <div
              className="outLink"
              onClick={() => window.open("https://www.karafarinbank.ir/")}
            >
              بانک کارآفرین
            </div>
            <div
              className="outLink"
              onClick={() => window.open("http://www.kpec-co.com/fa/index.php")}
            >
              پارسیان کیش
            </div>
            <div
              className="outLink"
              onClick={() => window.open("https://negah-pay.com/")}
            >
              نگاه پرداخت کارآفرین
            </div>
            <div
              className="outLink"
              onClick={() => window.open("http://www.shatel.ir")}
            >
              شاتل موبایل
            </div>

            <div
              className="outLink"
              onClick={() => window.open("https://sadadpsp.ir/")}
            >
              سداد
            </div>
            <div
              className="outLink"
              onClick={() => window.open("https://sayancard.ir/")}
            >
              سایان
            </div>
          </div>
        </div>
        {/* <Map /> */}
      </div>
      <div className="footerContainer2">
        <div>AMITIS HAMTA 2021</div>
        <div>
          <i className="fa fa-linkedin linkedin m-1"></i>
          <i className="fa fa-youtube-square youtube m-1"></i>
          <i className="fa fa-facebook-square facebook m-1"></i>
          <i className="fa fa-twitter-square twitter m-1 "></i>
          <i className="fa fa-instagram instagram m-1 "></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
