// Internals
import { useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActionArea, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

// Components
import CartButton from "./CartButton";
import FevIcon from "./FevIcon";

// Externals
import { useSelector, useDispatch } from "react-redux";
import useTranslation from "next-translate/useTranslation";
import { toast } from "react-toastify";
import {addToCart} from "../../../redux/features/cart/cartSlice";

const SpanHeader = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  padding: "5px",
  borderRadius: "0px 7px 7px 0",
  margin: "10px 0",
  fontSize: "0.7rem",
  width: "fit-content",
}));
const Header = styled(Box)(() => ({
  position: "absolute",
  top: "0",
  zIndex: 9,
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  backgroundColor: "transparent",
}));

const ProductItem = ({ product, quantity }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const [img, setImg] = useState(product.images[0].imageAcutal);
  const [openButton, setOpenButton] = useState(false);

  console.log(quantity);

  // Add to cart action
  const handleAddToCart = (element) => {
    const newItem = { ...element, quantity: 1 };
    dispatch(addToCart(newItem));
    setOpenButton(!openButton);
    const message =
      locale === "en"
        ? `${newItem.name_en} Added Successfully`
        : `تم اضافة ${newItem.name_ar} بنجاح`;
    toast.success(message, { autoClose: 1000, position: "top-right" });
  };

  const renderImage = () => {
    if (product.images.length === 1) {
      return (
        <CardMedia
          component="img"
          image={img}
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
          image={img}
          height="150"
          onMouseEnter={() => setImg(product.images[1].imageAcutal)}
          onMouseLeave={() => setImg(product.images[0].imageAcutal)}
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
        <SpanHeader>{product.isFeatured}</SpanHeader>
        <FevIcon />
      </Header>
      <NextLink href="/Products" passHref>
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
              {product[`name_${locale}`]}
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
              {product[`description_${locale}`]}
            </Typography>
            <Typography fontSize="1.1rem" fontWeight={700} color="primary.main">
              {" "}
              {product.priceAfterDiscount} EGP
            </Typography>
            <Typography
              variant="body2"
              component="del"
              color="alt.main"
              sx={{
                textDecoration: "line-through",
                lineHeight: "10px",
                marginBottom: "15px",
              }}
            >
              {product.Price} EGP{" "}
            </Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>

      <CardActions>
        {quantity  ? (
          <CartButton quantity={quantity} product={product} /> 
        ) : (
          <Button
            fullWidth
            variant="contained"
            onClick={() => handleAddToCart(product)}
          >
            {t("addToCart")}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductItem;
