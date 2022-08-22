// Internals
import { useRouter } from "next/router";
import NextLink from "next/link";
import { styled } from "@mui/material/styles";
// MUI
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
// Components
import CartButton from "../product/CartButton";
// Icons
import DeleteIcon from "@mui/icons-material/Delete";
// Externals
import useTranslation from "next-translate/useTranslation";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../../redux/features/cart/cartSlice";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  boxShadow: "unset !important",
}));

const CanvasCartItems = ({ product }) => {
  const { locale } = useRouter();
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const handleClearItem = (product) => {
    dispatch(deleteFromCart(product));
  };

  return (
    <Grid
      container
      sx={{ boxShadow: "2px 5px 12px 3px rgb(0 0 0 / 20%)" }}
    >
      <Grid
        item
        xs={12}
        display="inline-flex"
        sx={{ justifyContent: "space-between" }}
      >
        <Item md={6}>
          {product.weight < 1 ? (
            <Typography component="h3" variant="h5">
              {t("grocery")}{" "}
            </Typography>
          ) : (
            <Typography component="h3" variant="h5">
              {t("household")}
            </Typography>
          )}
        </Item>
        <Item md={6} sx={{ textDecoration: "underline" }}>
          <Typography component="span">{t("shippedBy")} Zahran</Typography>
        </Item>
      </Grid>
      <Grid item xs={4} alignSelf="center">
        <DeleteIcon
          onClick={() => handleClearItem(product)}
          sx={{ cursor: "pointer", color: "primary.main" }}
        />
        <NextLink href='/' passHref>
          <CardActionArea>
            <CardMedia
              component="img"
              image={product.images[0].imageAcutal}
              width={150}
              height={150}
              alt="..."
              sx={{ objectFit: "contain" }}
            />
          </CardActionArea>
        </NextLink>
      </Grid>
      <Grid item xs={8}>
        <Box py={{ sm: 1 }} px={2} textAlign={{ xs: "center", sm: "initial" }}>
          <CardContent sx={{ px: 0 }}>
            <NextLink href='/' passHref>
              <Typography
                component="h4"
                variant="h5"
                sx={{ cursor: "pointer" }}
              >
                {product[`name_${locale}`]}
              </Typography>
            </NextLink>
            {product.discount !== "" ? (
              <Stack
                direction="row"
                spacing={1}
                justifyContent={{ xs: "center", sm: "start" }}
              >
                <strong sx={{ color: "primary.main" }}>
                  {product.priceAfterDiscount} {t("egp")}{" "}
                </strong>
                <del style={{ opacity: 0.7 }}>
                  {product.Price} {t("egp")}{" "}
                </del>
              </Stack>
            ) : (
              <Stack
                direction="row"
                spacing={1}
                justifyContent={{ xs: "center", sm: "start" }}
              >
                <strong>{product.Price}</strong>
              </Stack>
            )}
            <Typography
              color="primary"
              textTransform="uppercase"
              variant="body2"
            >
              {product.availability === true ? "" : "NOT AVAILABLE"}
            </Typography>
          </CardContent>

          {product.availability === true ? (
            <CardActions
              sx={{
                p: 0,
                justifyContent: { xs: "center", sm: "start" },
              }}
            >
              <CartButton quantity={product.quantity} product={product} sx={{width: '100%' , textAlign:'center'}}/>
            </CardActions>
          ) : (
            <CardActions
              sx={{ p: 0, justifyContent: { xs: "center", sm: "start" } }}
            >
              <Button variant="contained" color="secondary">
                notify me
              </Button>
              <Button variant="outlined" color="secondary">
                find similar
              </Button>
            </CardActions>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default CanvasCartItems;
