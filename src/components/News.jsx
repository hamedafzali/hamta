import React from "react";
import NewsCard from "./common/NewsCard";
import newsimg from "../assets/images/pinpad.jpeg";
import NewsBox from "./NewsBox";
//import newsimg1 from "../assets/images/ad3.jpeg";
//import newsimg3 from "../assets/images/ad2.jpeg";
const News = () => {
  return (
    <React.Fragment>
      <div className="row newsTitle">اخبار و اطلاعات</div>
      <div className="appContainer p1 ">
        <div className=" ">
          {/* <div></div>
          <NewsCard
            src={newsimg}
            description="پنل جدید همتا مطابق با سامانه جام جم و سازگار با سوئیچ حداقل ۵ شرکت psp طراحی و راه اندازی شد "
          />

          <NewsCard
            src={newsimg}
            description="پنل جدید همتا مطابق با سامانه جام جم و سازگار با سوئیچ حداقل ۵ شرکت psp طراحی و راه اندازی شد "
          />

          <NewsCard
            src={newsimg}
            description="خلاصه راهنمای کاربری برای استفاده سریعتر نمایندگان محترم در دست تهیه می باشد که به زودی تقدیم خواهد شد "
          />
          <NewsCard
            src={newsimg}
            description="پنل جدید همتا مطابق با سامانه جام جم و سازگار با سوئیچ حداقل ۵ شرکت psp طراحی و راه اندازی شد "
          />
          <div></div> */}
          <NewsBox />
        </div>

        <div className="archiveBtn">آرشیو</div>
      </div>
    </React.Fragment>
  );
};

export default News;
