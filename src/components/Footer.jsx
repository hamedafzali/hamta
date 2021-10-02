// import Map from "./Map";
const Footer = () => {
  return (
    <div>
      <div className="footer ">
        <div className="footerContent">
          <div className="text-white">
            <div className="my-2">
              آدرس:
              <br /> تهران، خیابان بهشتی، خیابان قنبرزاده، نبش خرمشهر <br />{" "}
              پلاک 222 طبقه اول
              <br /> <br />
            </div>

            <div className="my-2">
              تلفن تماس:
              <br />
              02188763610 <br /> 02158702
            </div>
            <br />
            <div className="my-2">
              کد پستی :
              <br />
              1555555555
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

          <div className="text-white">لینکهای مرتبط</div>
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
