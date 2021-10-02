// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Banner2 from "../assets/images/Banner2.png";

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

const SwiperBox = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Banner2} alt="" className="mylogo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} alt="" className="mylogo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} alt="" className="mylogo" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperBox;
