import {useState} from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button'


const CartButton = ({setOpenButton}) => {
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
            <Button disabled >{counter}</Button>
            <Button variant="contained" onClick={()=> setCounter(counter + 1) }>+</Button>
        </ButtonGroup>
     );
}
 
export default CartButton;