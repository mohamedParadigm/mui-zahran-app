import { useState, useEffect } from "react";
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
import Skeleton from '@mui/material/Skeleton';

const SwiperStyle = styled(Swiper)(({ theme }) => ({
  // [theme.breakpoints.up('xl')]: {
  //   backgroundColor: "#000",
  //  "& .img2":{
  //   width:"200px !important"
  //  }
  // },
  "@media (max-width: 900px)": {
    "& span": {
      height: "100% !important"
    },

    "& a": {
      height: "300px !important",
      display: "block"
    },
    "& .img2": {
      objectFit: "cover"
    }
  },

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <SwiperStyle
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      loop={true}
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
    // onSlideChange={() => console.log("slide change")}
    // onSwiper={(swiper) => console.log(swiper)}
    >
      {bannersHome?.map((item) => (
        <SwiperSlide key={item.id} >
          {loading ? (
            <Skeleton variant="rectangular" width={1350} height={250} animation="wave" />

          ) : (

            <NextLink href={`/all-categories?brand=${item.uniqueName}`} passHref>
              <Link underline="none" color="inherit">
                <Image className="img2"
                  src={item.image}
                  alt={item.uniqueName}
                  width={1360}
                  height={250}
                  layout="responsive"
                />
              </Link>
            </NextLink>
          )}
        </SwiperSlide>
      ))}
    </SwiperStyle>
  );
};
export default BannersHome;
