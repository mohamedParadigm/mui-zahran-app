import { useRouter } from "next/router";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import NextLink from "next/link";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper";

const CardStyle = styled(Card)(({ theme }) => ({
  height: "100x",
  transition: "0.3s ease-in-out",
  border: "1px solid #eee",
  "&:hover": {
    transform: "scale(0.98)",
    backgroudColor: "trasnperent",
    "& .MuiCardContent-root": {
      color: theme.palette.primary.main,
    },
    "& .MuiCardActionArea-root:hover .MuiCardActionArea-focusHighlight": {
      opacity: "0",
    },
  },
  "& .MuiTypography-h6": {
    fontSize: ".8rem",
    fontWeight: "500",
  },
}));
const SwiperStyle = styled(Swiper)(({ theme }) => ({
  height: "125px",
  width: "100%",
  transition: "0.3s ease-in-out",
  marginTop: "12px",
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
    height: "100px",
    display: "flex",
    alignItems: "center",
  },
  "& .MuiCardContent-root": {
    padding: "0px",
  },
}));
const SliderCatogeryHomeSec = ({ brandsCatogery }) => {
  const { locale } = useRouter();

  return (
    <SwiperStyle
      spaceBetween={5}
      slidesPerView={5}
      pagination={{ clickable: true }}
      modules={[Pagination]}
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
        1300: {
          slidesPerView: 5,
        },
      }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {brandsCatogery?.map((item, index) => (
        <SwiperSlide key={index}>
          <CardStyle>
            <NextLink
              href={`/all-categories?brand=${item.uniqueName}`}
              passHref
            >
              <CardActionArea>
                <CardMedia
                  sx={{
                    "&.MuiCardMedia-root": {
                      backgroundSize: "contain",
                      objectFit: "contain",
                    },
                  }}
                  component="img"
                  height="50"
                  image={item.image}
                  alt={item[`name_${locale}`]}
                />
                <CardContent>
                  <Typography component="h3" variant="h6" textAlign="center">
                    {item[`name_${locale}`]}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </NextLink>
          </CardStyle>
        </SwiperSlide>
      ))}
    </SwiperStyle>
  );
};
export default SliderCatogeryHomeSec;
