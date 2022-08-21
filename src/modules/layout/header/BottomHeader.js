import {useState} from 'react'
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const BottomHeader = ({categories}) => {

    const [value, setValue] = useState('one');
    const [open , setOpen] = useState(null)
    const [activeLink , setActiveLink] = useState(null)


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function handleOpen(){
        setActiveLink(!activeLink)
        setOpen(!open)
    };

    return ( 
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Categories"
                variant="fullWidth"
                sx={{ backgroundColor: '#fff'}}
            >
                {categories.slice(0 , 5).map((category , index) => (
                    <Tab
                    value={index}
                    label={category.title}
                    wrapped
                    onMouseEnter={handleOpen}
                    onMouseLeave={handleOpen}
                    key={index}
                    />
                ))}
            </Tabs>

            {open ? 
                <div>worked</div>
            :
                <div>wrong</div>
            }
        </Box>
     );
}
 
export default BottomHeader;