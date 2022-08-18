// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "@mui/material/styles";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import NextLink from "next/link";
import Link from "@mui/material/Link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperStyle = styled(Swiper)(({ theme }) => ({
  "& .swiper-pagination-bullet-active": {
    background: "#ce1717",
  },
  "& .swiper-pointer-events": {
    cursor: "pointer",
  },
  "& .swiper-button-prev,& .swiper-button-next,& .swiper-rtl .swiper-button-next,& .swiper-rtl .swiper-button-prev":
    {
      color: "#ce1717",
    },
}));
const BannersHome = ({ bannersHome }) => {
  return (
    <SwiperStyle
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {bannersHome?.map((item) => (
        <SwiperSlide key={item.id}>
          <NextLink href={`/all-categories?brand=${item.uniqueName}`} passHref>
            <Link underline="none" color="inherit">
              <Image
                src={item.image}
                alt={item.uniqueName}
                width={1360}
                height={250}
              />
            </Link>
          </NextLink>
        </SwiperSlide>
      ))}
    </SwiperStyle>
  );
};
export default BannersHome;
