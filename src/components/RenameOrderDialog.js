// Internals
import { useState, forwardRef } from "react";
// MUI
import { grey } from "@mui/material/colors";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
// Icons
import CloseIcon from "@mui/icons-material/Close";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const RenameOrderDialog = (props) => {
  const {
    showRenameOrderDialog,
    handleToggleRenamingDialog,
    title,
    initialValues,
  } = props;

  const [renameOrder, setRenameOrder] = useState(initialValues);

  const handleRenameOrderChange = (e) => {
    setRenameOrder((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancelRenameDialog = () => {
    setRenameOrder(initialValues);

    handleToggleRenamingDialog();
  };

  const handleRenameOrderSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
  };

  return (
    <Dialog
      open={showRenameOrderDialog}
      TransitionComponent={Transition}
      onClose={handleCancelRenameDialog}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textTransform: "capitalize",
          backgroundColor: grey[200],
        }}
        variant="h6"
      >
        <span>{title}</span>
        <IconButton onClick={handleToggleRenamingDialog}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ padding: "1rem" }}>
        <form onSubmit={handleRenameOrderSubmit}>
          <List>
            <ListItem>
              <TextField
                id="orderName"
                name="orderName"
                label="Rename Your Favourite Order"
                placeholder="Enter Your Prefared Naming."
                variant="outlined"
                color="secondary"
                value={renameOrder.orderName}
                onChange={handleRenameOrderChange}
                fullWidth
              />
            </ListItem>
            <ListItem>
              <Grid container spacing={1} justifyContent="flex-end">
                <Grid item>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleCancelRenameDialog}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={!renameOrder.orderName && renameOrder.orderName === initialValues.orderName}
                  >
                    save
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RenameOrderDialog;
