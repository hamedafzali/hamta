import Map from "./Map";
const Footer = () => {
  return (
    <div className="footer ">
      <div className="footerContent">
        <div className="text-white">
          <div className="my-2">
            آدرس:تهران-خیابان خرمشهر- تقاطع قنبرزاده- پلاک 222 طبقه اول
          </div>
          <div className="my-2">تلفن:02188763610،02158702</div>
          <div>
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
          </div>
        </div>

        <div className="text-white">لینکهای مرتبط</div>
      </div>
      <Map />
    </div>
  );
};

export default Footer;
