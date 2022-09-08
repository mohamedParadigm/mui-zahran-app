// Internals
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useState, useEffect } from "react";
// MUI
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Skeleton from '@mui/material/Skeleton';

const CardStyle = styled(Card)(({ theme }) => ({
  transition: "0.3s ease-in-out",
  "&:hover": {

    "& .MuiCardContent-root": {
      color: theme.palette.primary.main,
    },
  },
  "& .MuiCardContent-root": {
    padding: theme.spacing(1),
    backgroundColor: grey[200],
    "& .MuiTypography-root": {
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
  },
}));

const CategorySec = ({ item }) => {
  // console.log(item)
  const { locale } = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (

    <CardStyle >
      {loading ? (
        <Skeleton variant="rectangular" width="100%" height={150} />
      ) : (
        <NextLink href={`/${item.uniqueName}`} passHref>
          <CardActionArea >
            <CardMedia
              component="img"
              height="140"
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
      )}
    </CardStyle>
  );
};

export default CategorySec;
