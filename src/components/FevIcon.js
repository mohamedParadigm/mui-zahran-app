// Internals
import {useState} from 'react'

//MUI
import Tooltip from '@mui/material/Tooltip'
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton'

//Icons
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

// Externals
import { useDispatch } from 'react-redux';
import { addToFav } from '../redux/features/cart/cartSlice'


const FevIcon = ({cart , product}) => {

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()

    const handleClick = () =>{
        dispatch(addToFav(product));
    }

    return ( 
        <>
        <Tooltip arrow title="Add to favorite" placement="top">
            <IconButton aria-label="add to favorites" align="right" onClick={handleClick()}>
            {!open ?
                <FavoriteBorderOutlinedIcon /> : <FavoriteIcon />
            }
            </IconButton>
        </Tooltip>
        
        </>
     );
}
 
export default FevIcon;