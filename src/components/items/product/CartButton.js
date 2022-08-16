// Internals
import { useRouter } from "next/router";

// MUI
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

// Externals
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  increament,
  decreament,
  deleteFromCart,
} from "../../../redux/features/cart/cartSlice";

const CartButton = ({ product , quantity , sx = {} }) => {

  const { locale } = useRouter();
  const dispatch = useDispatch();

  // Increament action
  const handleIncreament = (element) => {
    dispatch(increament(element));
  };

  // Decreament action
  const handleDecreament = (element) => {
    if (quantity <= 1) {
      dispatch(deleteFromCart(element));
      const message =
        locale === "en"
          ? `${element.name_en} deleted Successfully`
          : `تم حذف ${element.name_ar} بنجاح`;
      toast.error(message, {
        autoClose: 1000,
        position: "top-right",
        icon: <DeleteIcon style={{ color: "var(--main-color)" }} />,
      });
    } else {
      dispatch(decreament(element));
    }
  };

  return (
    <ButtonGroup
      size="small"
      aria-label="small button group"
      sx={{ alignItems: "center" , ...sx}}
      disableElevation
    >
      <Button
        variant="contained"
        sx={{ width: "fit-content" }}
        onClick={() => handleDecreament(product)}
      >
        {quantity > 1 ? "-" : <DeleteIcon />}
      </Button>

      <Typography flexGrow={1} sx={{minWidth: 40 }}>{quantity}</Typography>
      <Button
        variant="contained"
        sx={{ width: "fit-content" }}
        onClick={() => handleIncreament(product)}
      >
        +
      </Button>
    </ButtonGroup>
  );
};

export default CartButton;
