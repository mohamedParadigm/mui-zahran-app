// Internals
import { useState } from "react";
// MUI
import IconButton from "@mui/material/IconButton";
// Icons
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
// Components
import MuiTooltip from "../../shared/MuiTooltip";

const FevIcon = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <MuiTooltip title="Add to favorite" arrow placement="top">
      <IconButton aria-label="add to favorites" onClick={handleClick}>
        {!open ? <FavoriteBorderOutlinedIcon /> : <FavoriteIcon />}
      </IconButton>
    </MuiTooltip>
  );
};

export default FevIcon;
