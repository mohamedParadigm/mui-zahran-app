// Internals
import { useState } from "react";
// MUI
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CartButton = ({ setOpenButton }) => {
  const [counter, setCounter] = useState(1);

  const handleButton = () => {
    if (counter >= 2) {
      setCounter(counter - 1);
    } else {
      setOpenButton(false);
    }
  };

  return (
    <ButtonGroup
      size="small"
      aria-label="small button group"
      fullWidth
      sx={{ alignItems: "center" }}
      disableElevation
    >
      <Button
        variant="contained"
        onClick={() => handleButton}
        sx={{ width: "fit-content" }}
      >
        -
      </Button>
      <Typography flexGrow={1}>{counter}</Typography>
      <Button
        variant="contained"
        onClick={() => setCounter(counter + 1)}
        sx={{ width: "fit-content" }}
      >
        +
      </Button>
    </ButtonGroup>
  );
};

export default CartButton;
