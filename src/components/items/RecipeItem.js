// Internals
import { useState } from "react";
import NextLink from "next/link";
// MuI
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
// Icons
import AlarmOnOutlinedIcon from "@mui/icons-material/AlarmOnOutlined";

const AdsStyle = styled("span")(({ theme }) => ({
  display: "block",
  fontSize: "0.75rem",
  padding: "0.25rem 0.5rem",
  color: theme.palette.common.white,
  backgroundColor: theme.palette.secondary.main,
  position: "absolute",
  top: "0.5rem",
  left: 0,
  zIndex: 1,
  borderTopRightRadius: theme.shape.borderRadius,
  borderBottomRightRadius: theme.shape.borderRadius,
}));

const RecipeItem = () => {
  const [elevNum, setElevNum] = useState(1);

  return (
    <Card
      elevation={elevNum}
      onMouseEnter={() => setElevNum(7)}
      onMouseLeave={() => setElevNum(1)}
      sx={{
        position: "relative",
        borderRadius: 2,
        "&:hover .title": {
          color: (theme) => theme.palette.primary.main,
        },
      }}
    >
      <AdsStyle>lorem ipsum</AdsStyle>
      <NextLink href="/recipes/123" passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            height="120"
            image="/images/recipes/recipe_2.jpg"
            alt=""
          />
          <CardContent sx={{ p: 1 }}>
            <Typography
              component="h3"
              variant="h6"
              textTransform="capitalize"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              overflow="hidden"
              className="title"
              sx={{ transition: "0.3s ease-in-out" }}
              mb={1}
            >
              Pizza Baguette
            </Typography>
            <Typography
              variant="body2"
              sx={{ opacity: 0.7 }}
              height={20}
              mb={1}
            >
              Instafood, Party
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <AlarmOnOutlinedIcon sx={{ opacity: 0.7 }} />
              <Typography variant="body2">20 min</Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </NextLink>
    </Card>
  );
};

export default RecipeItem;
