import * as React from 'react';
import Tooltip from '@mui/material/Tooltip'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton'
import {useState} from 'react'


const FevIcon = () => {

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return ( 
        <>
        <Tooltip arrow title="Add to favorite" placement="top">
            <IconButton aria-label="add to favorites" align="right" onClick={handleClick}>
            {!open ?
                <FavoriteBorderOutlinedIcon /> : <FavoriteIcon />
            }
            </IconButton>
        </Tooltip>
        
        </>
     );
}
 
export default FevIcon;