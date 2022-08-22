// MUI
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
// Externals
import useTranslation from "next-translate/useTranslation";

const ConfirmModal = (props) => {
  const { open, title, handleConfirm, handleCancel, content } = props;
  const { t } = useTranslation("common");

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} variant="outlined" color="secondary">
          {t("cancel")}
        </Button>
        <Button onClick={handleConfirm} variant="contained" color="primary">
          {t("confirm")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;
