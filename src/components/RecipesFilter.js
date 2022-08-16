// MUI
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// Icons
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";

const LabelStyle = styled("label")({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  cursor: "pointer",
  flexGrow: 1,
});

const RecipesFilter = ({ recipesCategories, filterBy, handleFilterChange }) => {
  
  return (
    <List>
      {recipesCategories.map((el) => (
        <ListItem key={el.id} sx={{ py: 0.5 }}>
          <LabelStyle htmlFor={el.id}>
            <Checkbox
              checked={filterBy.indexOf(el) > -1}
              onChange={() => handleFilterChange(el)}
              icon={<CheckBoxOutlineBlankOutlinedIcon />}
              checkedIcon={<CheckBoxTwoToneIcon />}
              id={el.id}
              sx={{ p: 0 }}
              color="secondary"
            />
            <Stack direction="row" justifyContent="space-between" flexGrow={1}>
              <Typography
                textTransform="capitalize"
                sx={{
                  "&:hover": {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
              >
                {el.label}
              </Typography>
              <span>(7)</span>
            </Stack>
          </LabelStyle>
        </ListItem>
      ))}
    </List>
  );
};

export default RecipesFilter;
