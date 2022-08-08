// Internals
import { useState } from "react";
import NextLink from "next/link";
// MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// Components
import CartButton from "./CartButton";
import FevIcon from "./FevIcon";

const SpanHeader = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: "0.25rem 0.5rem",
  borderTopRightRadius: theme.shape.borderRadius,
  borderBottomRightRadius: theme.shape.borderRadius,
  margin: "10px 0",
  fontSize: "0.7rem",
}));

const Header = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 9,
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  backgroundColor: "transparent",
}));

const items = [
  {
    id: 0,
    src: "/images/products/p-1.webp",
  },
  {
    id: 1,
    src: "/images/products/ingredient-1.jpg",
  },
];

const ProductItem = () => {
  const [item, setItem] = useState(items[0].src);
  const [OpenButton, setOpenButton] = useState(false);

  const renderImage = () => {
    if (items.length === 1) {
      return (
        <CardMedia
          component="img"
          image={item}
          height="226"
          sx={{
            "&.MuiCardMedia-img": {
              objectFit: "contain",
            },
          }}
        />
      );
    } else {
      return (
        <CardMedia
          component="img"
          image={item}
          height="150"
          onMouseEnter={() => setItem(items[1].src)}
          onMouseLeave={() => setItem(items[0].src)}
          sx={{
            "&.MuiCardMedia-img": {
              objectFit: "contain",
            },
          }}
        />
      );
    }
  };

  return (
    <Card sx={{ maxWidth: 300, position: "relative", textAlign: "center" }}>
      <Header>
        <SpanHeader>35% OFF</SpanHeader>
        <FevIcon />
      </Header>
      <NextLink href="/Product" passHref>
        <CardActionArea>
          {renderImage()}
          <CardContent>
            <Typography
              component="h3"
              variant="h6"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              Tefal Cook
            </Typography>
            <Typography
              variant="body2"
              color="alt.main"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
              height={21}
              mb={1}
            >
              cursus magna, vel scelerisque nisl consectetur et
            </Typography>
            <Typography fontSize="1.1rem" fontWeight={700} color="primary.main">
              {" "}
              135 EGP
            </Typography>
            <Typography variant="body2" component="del" color="alt.main">
              {" "}
              200 EGP
            </Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        {!OpenButton ? (
          <Button
            fullWidth
            variant="contained"
            onClick={() => setOpenButton((prev) => !prev)}
          >
            Add to cart
          </Button>
        ) : (
          <CartButton setOpenButton={setOpenButton} />
        )}
      </CardActions>
    </Card>
  );
};

export default ProductItem;
