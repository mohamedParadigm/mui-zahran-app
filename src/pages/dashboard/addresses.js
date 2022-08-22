// Internals
import { useEffect, useState } from "react";
// MUI
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// Externals
import useTranslation from "next-translate/useTranslation";
import { hasCookie, getCookie } from "cookies-next";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../../redux/features/user/userSlice";
import { createAddress } from "../../redux/features/userAddresses/userAddressesSlice";
// Components
import DashboardLayout from "../../modules/dashboard/DashboardLayout";
import AddressDialog from "../../components/AddressDialog";
import AddressItem from "../../components/items/AddressItem";
import { withSessionSsr } from "../../lib/withSession";

const addressInitialDetails = {
  country: "",
  city: "",
  area: "",
  detailedAddress: "",
  userPhone: "",
};

const Addresses = ({ user }) => {
  const { t } = useTranslation("addresses");
  const dispatch = useDispatch();
  const { userAddresses } = useSelector((state) => state);

  const [showAddressDialog, setShowAddressDialog] = useState(false);

  const handleToggleAddressDialog = () => setShowAddressDialog((prev) => !prev);

  useEffect(() => {
    user && dispatch(createUser(user));

    hasCookie("userAddresses") &&
      dispatch(createAddress(JSON.parse(getCookie("userAddresses"))));
  }, [dispatch, user]);

  return (
    <DashboardLayout
      title={t("title")}
      elevationOption={false}
      activeTab={2}
      maxWidth={700}
      BottomNavigationValue={4}
      footerOtherStyle={{ marginBottom: { xs: "56px", md: 0 } }}
      scrollOffset={{ bottom: { xs: 70, md: 16 } }}
    >
      <Box mb={3}>
        <Typography variant="h5" component="h2" textTransform="capitalize">
          {t("title")}
        </Typography>
        <Typography variant="body1" mb={2}>
          {t("desc")}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleToggleAddressDialog}
        >
          {t("addNew")}
        </Button>
        <AddressDialog
          showAddressDialog={showAddressDialog}
          handleToggleAddressDialog={handleToggleAddressDialog}
          title={t("addNew")}
          initialValues={addressInitialDetails}
          type="userAddress"
        />
      </Box>
      <Box>
        {userAddresses.length === 0 && (
          <Typography
            variant="h5"
            component="h3"
            textTransform="capitalize"
            textAlign="center"
            color="primary"
          >
            {t("noAddresses")}
          </Typography>
        )}
        {userAddresses.length !== 0 && (
          <List>
            {userAddresses?.map((item) => (
              <ListItem key={item.id}>
                <AddressItem item={item} />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </DashboardLayout>
  );
};

export default Addresses;

export const getServerSideProps = withSessionSsr(async ({ req, locale }) => {
  const user = req.session.user;
  if (!user) {
    return {
      redirect: {
        destination: `/${locale}/account/login?redirect=dashboard/addresses`,
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
});
