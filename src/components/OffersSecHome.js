import { useRouter } from "next/router";
import { useTheme } from '@mui/material/styles';
import NextLink from "next/link";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const OffersSecHome = ({ item }) => {
  const theme = useTheme();
  const { locale } = useRouter();
  return (
    <NextLink href={`/${item.uniqueName}`} passHref>
        <Link underline="none">
    <Card sx={{ display: 'flex'}} >
     <Box sx={{ display: 'flex', flexDirection: 'column' , width:"100%"}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          {item[`name_${locale}`]}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {item[`desc_${locale}`]}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 140 }}
        image={item.image}
        alt={item[`name_${locale}`]}
      />
         </Card>
         </Link>
    </NextLink>
  );
}
export default OffersSecHome;
