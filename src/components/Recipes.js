import { useRouter } from "next/router";
import {   styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperStyle = styled(Swiper) ({
  "& img": {
objectFit:"cover"
  },

  "& .swiper-slide div::after": {
    content: "''",
    position: "absolute",
    top:"0",
    left:"0",
    width:"100%",
    height:"100%",
    backgroundColor:"#00000029",
    zIndex:"1"
  },
  "& .MuiTypography-root": {
    cursor: "pointer",
  },
  "& .MuiTypography-h4": {
    position: "absolute",
    color:"#fff",
    zIndex:"10"
  },
  "& .MuiButton-root": {
    position: "absolute",
    bottom:"52px",
    zIndex:"10"
  },
  "& .swiper-pagination-bullet-active": {
    background: "#ce1717",
  },

});
const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const Recipes = () => {
  const { locale } = useRouter();
  return (
    <Box sx={{ mt: 3, mb: 3 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid
          item
          xs={12}
          md={6}
          justifyContent="center"
          alignItems="center"
          sx={{ textAlign: "center" }}
        >
          <Typography component="h3" variant="h4">
            Lorem Ipsum
          </Typography>
          <Typography variant="body2" component="p" color="alt.main">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
            View all Recipes
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <SwiperStyle
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {images.map((item) => (
              <SwiperSlide key={item.label}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img
                    src={item.imgPath}
                    srcSet={item.imgPath}
                    alt={item.label}
                    width="100%"
                    loading="lazy"
                    height="300"
                    
                  />
                  <Typography component="h3" variant="h4">
                    Lorem Ipsum
                  </Typography>
                  <Button variant="contained" sx={{ mt: 2 }}>
                    Get Recipe
                  </Button>
                </Stack>
              </SwiperSlide>
            ))}
          </SwiperStyle>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recipes;
