// Internal
import {useState} from 'react';

// MUI
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button'


const CartButton = ({setOpenButton , handleIncreament , quantity}) => {

    const [counter , setCounter] = useState(1)
    function HandleButton(){
        if (counter >= 2){
            setCounter(counter - 1)
        }
        else{
            setOpenButton(false)
       }
    }
 
    return ( 
        <ButtonGroup size="small" aria-label="small button group">
            <Button variant="contained" onClick={HandleButton}>-</Button>
            <Button  >{quantity}</Button>
            <Button variant="contained" onClick={handleIncreament}>+</Button>
        </ButtonGroup>
     );
}
 
export default CartButton;