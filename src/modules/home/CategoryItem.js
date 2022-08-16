// Internals
import { useRouter } from "next/router";
import NextLink from "next/link";
// MUI
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MuiTooltip from "../../components/shared/MuiTooltip";

const CardStyle = styled(Card)(({ theme }) => ({
  transition: "0.3s ease-in-out",
  "&:hover": {
    transform: "scale(0.98)",
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

const CategoryItem = ({ item }) => {
  // console.log(item)
  const { locale } = useRouter();
  return (
    <MuiTooltip title={item[`name_${locale}`]} followCursor placement="top">
      <CardStyle>
        <NextLink href={`/${item.uniqueName}`} passHref>
          <CardActionArea>
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
      </CardStyle>
    </MuiTooltip>
  );
};

export default CategoryItem;
