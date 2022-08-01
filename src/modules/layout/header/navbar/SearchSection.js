// Internals
import { useState } from "react";
// MUI
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
// Icons
import SearchIcon from "@mui/icons-material/Search";

const categories = [
  "all",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const FormStyle = styled("form")(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.spacing(1),
  overflow: "hidden",
  display: "flex",
  alignItems: "stretch",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    // order: 3,
  },
  "& .MuiOutlinedInput-root": {
    border: "none",
    borderRadius: 0,
    backgroundColor: grey[200],
    [theme.breakpoints.down("lg")]: {
      width: 90,
    },
    [theme.breakpoints.up("lg")]: {
      width: 120,
    },
    "& .MuiSelect-select": {
      padding: "8.5px 14px",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
}));

const SearchSection = () => {
  const [categoryOptions, setCategoryOptions] = useState(["all"]);

  const handleSelectChange = (e) => {
    const { value } = e.target;

    setCategoryOptions(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleRenderValue = (selected) => {
    if (selected.length === 0) {
      return `Select...`;
    }
    if (selected.length === 1) {
      return <span style={{ textTransform: "capitalize" }}>{selected[0]}</span>;
    }
    if (selected.length > 1) {
      return (
        <span style={{ textTransform: "capitalize" }}>
          {selected.length} Items
        </span>
      );
    }
  };

  return (
    <FormStyle>
      <Select
        labelId="category-select-options-label"
        id="category-select-options"
        multiple
        value={categoryOptions}
        onChange={handleSelectChange}
        displayEmpty
        renderValue={(selected) => handleRenderValue(selected)}
        MenuProps={MenuProps}
      >
        {categories.map((category) => (
          <MenuItem
            key={category}
            value={category}
            sx={{ px: 1, whiteSpace: "initial" }}
          >
            <Checkbox checked={categoryOptions.indexOf(category) > -1} />
            <ListItemText primary={category} />
          </MenuItem>
        ))}
      </Select>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="What are you looking for?"
        inputProps={{ "aria-label": "category search" }}
      />
      <IconButton type="submit" sx={{ p: 1 }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </FormStyle>
  );
};

export default SearchSection;
