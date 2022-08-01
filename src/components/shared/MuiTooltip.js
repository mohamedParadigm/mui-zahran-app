// MUI
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.secondary.main,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[1],
  },
}));

const MuiTooltip = (props) => {
  const { children, ...other } = props;

  return <CustomTooltip {...other}>{children}</CustomTooltip>;
};

export default MuiTooltip;
