// MUI
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
// Externals
import { useSelector } from "react-redux";

const SubmitLoading = () => {
  const { submitLoading } = useSelector((state) => state.global);

  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={submitLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default SubmitLoading;
