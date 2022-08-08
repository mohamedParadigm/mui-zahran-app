// Internals
import { useState } from "react";
import Image from "next/image";
// MUI
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// Icons
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const LabelStyle = styled("label")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  cursor: "pointer",
  position: "relative",
});

const IconStyle = styled(AddOutlinedIcon)(({ theme }) => ({
  position: "absolute",
  [theme.breakpoints.down("sm")]: {
    bottom: -19,
    left: "50%",
    transform: "translateX(-50%)",
  },
  [theme.breakpoints.up("sm")]: {
    top: "50%",
    right: 0,
    transform: "translateY(-50%)",
  },
}));

const MultipleItems = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState(items);

  const handleFilterChange = (item) => {
    const isExist = selectedItems.find(
      (el) => el.uniqueName === item.uniqueName
    );

    if (isExist) {
      setSelectedItems((prev) =>
        prev.filter((el) => el.uniqueName !== item.uniqueName)
      );
    } else {
      setSelectedItems((prev) => [...prev, item]);
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      {items?.map((item, index) => (
        <Grid key={item.uniqueName} item xs={12} sm whiteSpace="nowrap">
          <LabelStyle htmlFor={`ingredients_${item.uniqueName}`}>
            <Checkbox
              checked={selectedItems.indexOf(item) > -1}
              onChange={() => handleFilterChange(item)}
              icon={<CheckBoxOutlineBlankOutlinedIcon />}
              checkedIcon={<CheckBoxTwoToneIcon />}
              id={`ingredients_${item.uniqueName}`}
              sx={{ p: 0 }}
              color="secondary"
            />
            <Image src={item.image} alt={item.label} width={80} height={80} />
            <Typography component="h4" variant="h6">
              {item.label}
            </Typography>
            <Typography variant="body2">{item.price} EGP</Typography>
            {index + 1 !== items.length && <IconStyle />}
          </LabelStyle>
        </Grid>
      ))}
      {selectedItems.length !== 0 && (
        <Grid item xs={12} textAlign="center">
          <Button variant="contained" color="secondary">
            Add to {selectedItems.length} items cart
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default MultipleItems;
