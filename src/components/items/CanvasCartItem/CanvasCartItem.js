// Internals
import { useRouter } from "next/router";
import NextLink from "next/link";
// MUI
import Grid from "@mui/material/Grid";
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
// Externals
import { useSelector, useDispatch } from "react-redux";

const CanvasCartItems = ({product}) => {
    
    const {locale} = useRouter();
    return ( 
        
        <Grid container spacing={1}>
            <Grid item xs={3} alignSelf="center" >
                <NextLink href="/product" passHref>
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
            <Grid item xs={9} sm>
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
                        {product.discount !== "" ? 
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent={{ xs: "center", sm: "start" }}
                            >
                                <strong>{product.priceAfterDiscount}</strong>
                                <del style={{ opacity: 0.7 }}>{product.price}</del>
                            </Stack> 
                            : 
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent={{ xs: "center", sm: "start" }}
                            >
                                <strong>{product.price}</strong>
                            </Stack> 
                        }
                        <Typography
                            color="primary"
                            textTransform="uppercase"
                            variant="body2"
                        >
                            {product.availability === true ? "NOT AVAILABLE" : ""}
                        </Typography>
                    </CardContent>

                    <CardActions
                        sx={{
                            px: 0,
                            justifyContent: { xs: "center", sm: "start" },
                        }}
                    >
                        <CartButton quantity={product.quantity} product={product}  />
                    </CardActions>
                   
                </Box>
            </Grid>
        </Grid>
     );
}
 
export default CanvasCartItems;