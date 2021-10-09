// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "../assets/images/12.png";
import Banner1 from "../assets/images/Banner1.png";
import Banner2 from "../assets/images/Banner2.png";
import NewsCard from "./common/NewsCard";
import newsimg from "../assets/images/pinpad.jpeg";
// Import Swiper styles
// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const NewsBox = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <NewsCard
            src={newsimg}
            description="خلاصه راهنمای کاربری برای استفاده سریعتر نمایندگان محترم در دست تهیه می باشد که به زودی تقدیم خواهد شد "
          />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard
            src={Banner1}
            description="خلاصه راهنمای کاربری برای استفاده سریعتر نمایندگان محترم در دست تهیه می باشد که به زودی تقدیم خواهد شد "
          />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard
            src={newsimg}
            description="خلاصه راهنمای کاربری برای استفاده سریعتر نمایندگان محترم در دست تهیه می باشد که به زودی تقدیم خواهد شد "
          />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard
            src={Banner2}
            description="خلاصه راهنمای کاربری برای استفاده سریعتر نمایندگان محترم در دست تهیه می باشد که به زودی تقدیم خواهد شد "
          />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard
            src={newsimg}
            description="خلاصه راهنمای کاربری برای استفاده سریعتر نمایندگان محترم در دست تهیه می باشد که به زودی تقدیم خواهد شد "
          />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard
            src={Banner}
            description="خلاصه راهنمای کاربری برای استفاده سریعتر نمایندگان محترم در دست تهیه می باشد که به زودی تقدیم خواهد شد "
          />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard
            src={newsimg}
            description="خلاصه راهنمای کاربری برای استفاده سریعتر نمایندگان محترم در دست تهیه می باشد که به زودی تقدیم خواهد شد "
          />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard
            src={Banner2}
            description="خلاصه راهنمای کاربری برای استفاده سریعتر نمایندگان محترم در دست تهیه می باشد که به زودی تقدیم خواهد شد "
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default NewsBox;
