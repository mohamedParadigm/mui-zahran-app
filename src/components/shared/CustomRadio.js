// MUI
import Radio from "@mui/material/Radio";
// Icons
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import TaskAltTwoToneIcon from '@mui/icons-material/TaskAltTwoTone';

const CustomRadio = (props) => {
  return (
    <Radio
      color="primary"
      checkedIcon={<TaskAltTwoToneIcon />}
      icon={<CircleOutlinedIcon />}
      {...props}
    />
  );
};

export default CustomRadio;
