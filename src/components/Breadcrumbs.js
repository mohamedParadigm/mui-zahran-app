// Internals
import NextLink from "next/link";
// MUI
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
// Icons
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
// Externals
import useTranslation from "next-translate/useTranslation";

const CustomBreadcrumbs = (props) => {
  const {
    label,
    separator = <ChevronRightOutlinedIcon />,
    data,
    ...others
  } = props;

  const { t } = useTranslation("common");

  return (
    <Breadcrumbs aria-label={label} separator={separator} {...others}>
      <NextLink href="/" passHref>
        <Link color="inherit" underline="hover" textTransform="capitalize">
          {t("home")}
        </Link>
      </NextLink>
      {data.map((item, index) => (
        <div key={item.uniqueName}>
          {index + 1 === data.length ? (
            <Typography color="primary" textTransform="capitalize">
              {item.name}
            </Typography>
          ) : (
            <NextLink href={`/${item.uniqueName}`} passHref>
              <Link
                color="inherit"
                underline="hover"
                textTransform="capitalize"
              >
                {item.name}
              </Link>
            </NextLink>
          )}
        </div>
      ))}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
