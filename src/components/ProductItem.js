import {useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import NextLink from 'next/link'
import {CardActionArea, Paper} from '@mui/material'
import { styled } from "@mui/material/styles";
import CartButton from './CartButton';
import FevIcon from './FevIcon';

const SpanHeader = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    padding: '5px',
    borderRadius: '0px 7px 7px 0',
    margin: '10px 0',
    fontSize: '0.7rem',
    width: 'fit-content'
}));
const Header = styled(Box)(() => ({
    position: 'absolute',
    top: '0',
    zIndex: 9,
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'transparent'
}))

const items = [
    {
        id: 0,
        src: '/images/products/p-1.webp'
    },
    {
        id: 1,
        src: '/images/products/ingredient-1.jpg'
    }
]

const ProductItem = () => {
    const [item , setItem] = useState(items[0].src)
    const [OpenButton , setOpenButton] = useState(false)

    const renderImage = () => {
        if (items.length === 1) {
            return (
                <CardMedia component="img" image={item} height="226" />
            );
        } else {
            return (
                <CardMedia component="img" image={item} height="226" onMouseEnter={() => setItem(items[1].src)} onMouseLeave={() => setItem(items[0].src)} />
            )
        }
    }

    return (
        <Card sx={{maxWidth: 300, position: 'relative', textAlign: 'center'}}>
            <Header>
                <SpanHeader>35% OFF</SpanHeader>
                <FevIcon />
            </Header>
            <NextLink href="/Products" passHref>
                <CardActionArea>
                    {renderImage()}
                    <CardContent>
                        <Typography component="h3" variant="h6">
                            Tefal Cook
                        </Typography>
                        <Typography variant="body2" component="p" color="alt.main" >
                            cursus magna, vel scelerisque nisl consectetur et
                        </Typography>
                        <Typography variant="h5" component="div" color="primary.main"> 135 EGP</Typography>
                        <Typography variant="body2" component="p" color="alt.main" sx={{textDecoration: 'line-through', lineHeight: '10px',marginBottom: '15px'}}> 200 EGP</Typography>
                    </CardContent>
                </CardActionArea>
            </NextLink>
            {(!OpenButton ) ? 
                <Button fullWidth variant="contained" onClick={()=> setOpenButton(prev =>!prev)}>Add to cart</Button>
                :
                <CartButton setOpenButton={setOpenButton} />
            }
        </Card>
    );
    
}
 
export default ProductItem;