// Internals
import { useRouter } from "next/router";
import NextLink from "next/link";
// MUI
import {Grid , Stack , Typography , Button , CardActionArea , CardMedia , CardContent , CardActions , Box} from "@mui/material";
// Components
import CartButton from "../product/CartButton";
// Externals
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const CartItems = ({product , pageType = 'cart' , exist}) => {

    const { locale } = useRouter();
    const {t} = useTranslation("common")
    const ship = exist.find((item) => item.uniqueName === product.uniqueName)

    return ( 
        <>
            <Grid container spacing={1}>
                <Grid item xs="auto" alignSelf="center" mx="auto">
                    <NextLink href={`/product/${product.uniqueName}`} passHref>
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
                <Grid item xs={12} sm>
                    <Box
                        py={{ sm: 2 }}
                        px={2}
                        textAlign={{ xs: "center", sm: "initial" }}
                    >
                        <CardContent sx={{ px: 0 }}>
                            <Typography variant="body2" sx={{ opacity: 0.7 }}>
                                {product[`categoryName_${locale}`]}
                            </Typography>
                            <Typography component="h3" variant="h6">
                                {product[`name_${locale}`]}
                            </Typography>
                            <Typography
                                variant="caption"
                                height={20}
                                display="block"
                                overflow="hidden"
                                whiteSpace="nowrap"
                                textOverflow="ellipsis"
                            >
                                {product[`description_${locale}`]}
                            </Typography>
                            {product.discount ? 
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    justifyContent={{ xs: "center", sm: "start" }}
                                >
                                    <strong>{product.priceAfterDiscount} {t("egp")}</strong>
                                    <del style={{ opacity: 0.7 }}>{product.price} {t("egp")}</del>
                                </Stack> 
                                : 
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    justifyContent={{ xs: "center", sm: "start" }}
                                >
                                    <strong>{product.Price} {t("egp")}</strong>
                                </Stack> 
                            }
                            <Typography>{t("quantity")} {product.quantity}</Typography>

                            <Typography
                                color="primary"
                                textTransform="uppercase"
                                variant="body2"
                            >
                                {product.availability === true ? "" : "NOT AVAILABLE"}
                            </Typography>
                        </CardContent>

                        {product.availability  && pageType === 'cart' && 
                            <CardActions
                                sx={{
                                    px: 0,
                                    justifyContent: { xs: "start"},
                                }}
                            >
                                <CartButton quantity={product.quantity} product={product}  />
                            </CardActions>
                        }

                        {!product.availability  && pageType === 'cart' && 
                            <CardActions sx={{ px: 0,justifyContent: { xs: "start", sm: "space-between" }, }}>
                                <CartButton quantity={product.quantity} product={product} sx={{opacity: 0.5 ,pointerEvents: 'none'}} />
                                <Stack direction="row"
                                        spacing={1}
                                        justifyContent={{ xs: "center", sm: "start" }}>
                                    <Button variant="contained" color="secondary">
                                        notify me
                                    </Button>
                                    <Button variant="outlined" color="secondary">
                                        find similar
                                    </Button>
                                </Stack>
                            </CardActions>
                        }

                        {ship && pageType === 'checkout' && 
                            <CardActions sx={{ px: 0,justifyContent: { xs: "start", sm: "space-between" }, }}>
                                <CartButton quantity={product.quantity} product={product} sx={{opacity: 0.5 ,pointerEvents: 'none'}} />
                            </CardActions>
                        }
                        {!ship && pageType === 'checkout' &&  
                            <CardActions sx={{ px: 0,justifyContent: { xs: "start", sm: "space-between" }, }}>
                                <Typography
                                    color="primary"
                                    textTransform="uppercase"
                                    variant="body2"
                                >
                                    not available
                                </Typography>
                                <NextLink href="/checkout/shipping" passHref>
                                    <Link color="secondary">
                                    <Typography
                                        variant="caption"
                                        textTransform="capitalize"
                                        mt={1}
                                    >
                                        Choose Another Location
                                    </Typography>
                                    </Link>
                                </NextLink>
                            </CardActions>
                        }
                    </Box>
                </Grid>
            </Grid>
        
        </>
     );
}
 
export default CartItems;