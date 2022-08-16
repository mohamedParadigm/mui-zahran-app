import { useRouter } from "next/router";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import NextLink from "next/link";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { styled } from "@mui/material/styles";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from "swiper";
import MuiTooltip from './shared/MuiTooltip';

const CardStyle = styled(Card)(({ theme }) => ({
  height:"100x",
   transition: "0.3s ease-in-out",
  "&:hover": {
    transform: "scale(0.98)",
    backgroudColor:"trasnperent",
    "& .MuiCardContent-root": {
      color: theme.palette.primary.main,
    },
     "& .MuiCardActionArea-root:hover .MuiCardActionArea-focusHighlight": {
      opacity: "0",
    },
  },

}));
const SwiperStyle = styled(Swiper)(({ theme }) => ({
  height:"100px",
  transition: "0.3s ease-in-out",
  "& .swiper-pointer-events": {
    cursor:"pointer",
  
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
    height: "80px",
    display: "flex",
    alignItems: "center",

  },

}));
const BrandHomeSec = ({ brands }) => {
  const { locale } = useRouter();

  return (
    <SwiperStyle
      spaceBetween={30}
      slidesPerView={5}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {brands?.map((item, index) => (
        <SwiperSlide key={index}>
          {/* <MuiTooltip title={item[`name_${locale}`]} followCursor placement="top"> */}
          <CardStyle>
            <NextLink href={`/all-categories?brand=${item.uniqueName}`} passHref>
              <CardActionArea>
                <CardMedia
                  sx={{ "&.MuiCardMedia-root": { backgroundSize: "contain", objectFit: "contain"} }}
                  component="img"
                  height="50"
                  image={item.image}
                  alt={item[`name_${locale}`]}
                />
              </CardActionArea>
            </NextLink>
          </CardStyle>
          {/* </MuiTooltip> */}
        </SwiperSlide>

      ))}
    </SwiperStyle>
  );
};
export default BrandHomeSec