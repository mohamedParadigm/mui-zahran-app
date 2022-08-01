// MUI
import Radio from "@mui/material/Radio";
// Icons
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckIcon from "@mui/icons-material/Check";

const CustomRadio = (props) => {
  const { checked = false, name, ...other } = props;

  return (
    <Radio
      checked={checked}
      color="primary"
      checkedIcon={<CheckIcon />}
      icon={<CircleOutlinedIcon />}
      name={name}
      {...other }
    />
  );
};

export default CustomRadio;
