// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import baner from "../assets/images/baner1.jpg";
import ad2 from "../assets/images/ad2.jpeg";
import ad3 from "../assets/images/ad3.jpeg";
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
          {/* <img src={baner} alt="" className="mylogo" /> */}
          Slide 1
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={ad2} alt="" className="mylogo" /> */}
          Slide 2
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={ad3} alt="" className="mylogo" /> */}
          Slide 3
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperBox;
