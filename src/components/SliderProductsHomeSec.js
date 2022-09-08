import { useRouter } from "next/router";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "@mui/material/styles";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {  Navigation , Autoplay } from "swiper";





const SwiperStyle = styled(Swiper)(({ theme }) => ({
  transition: "0.3s ease-in-out",
  "& .swiper-pointer-events": {
    cursor: "pointer",
  },
  "& .swiper-pagination-bullet-active": {
    background: "#ce1717",
  },
  "& .swiper-horizontal>.swiper-pagination-bullets": {
    bottom: "0px",
  },
  "& .swiper-pagination-bullets.swiper-pagination-horizontal": {
    bottom: "0px",
  },
  "& .MuiPaper-root": {
  
    display: "flex",
    alignItems: "center",
  },
  "& .swiper-pagination-bullet-active": {
    background: "#ce1717",
  },
  "& .swiper-pointer-events": {
    cursor: "pointer",
  },
  "& .swiper-button-prev,& .swiper-button-next,& .swiper-rtl .swiper-button-next,& .swiper-rtl .swiper-button-prev":
    {
      "border": "1px solid #ce1717",
      "width": "48px",
      "height": "48px",
      "zIndex": "10",
      "opacity": "1",
      "webkitTransition": "0.3s ease-in-out",
      "mozTransition": "0.3s ease-in-out",
      "transition": "0.3s ease-in-out",
      "color": "#ce1717",
      "borderRadius": "50%"
    },
    ".swiper-button-prev:after, .swiper-rtl .swiper-button-next:after,.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after": {
      "fontSize": "20px"
    },
    ".swiper-button-next, .swiper-button-prev":{
      "top": "40%"
    }
}));
const SliderProductsHomeSec = ({ children}) => {
  const { locale } = useRouter();

  return (
    <SwiperStyle
      spaceBetween={10}
      slidesPerView={5}
      navigation={true}
      modules={[ Navigation,Autoplay]}
      // loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
    }}
      breakpoints={{
        300: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3,
        },
        900: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      }}
    
    >
    
      {children}
  
    </SwiperStyle>
  );
};
export default SliderProductsHomeSec;
