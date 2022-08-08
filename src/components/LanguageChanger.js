// Main Imports
import NextLink from "next/link";
import { useRouter } from "next/router";
// MUI
import Link from "@mui/material/Link";

const LanguageChanger = (props) => {
  const { color = "inherit", sx = {}, ...other } = props;
  const { locale, asPath } = useRouter();

  return (
    <NextLink href={asPath} locale={locale === "en" ? "ar" : "en"} passHref>
      <Link color={color} underline="none" sx={sx} {...other}>
        {locale === "en" ? "العربية" : "English"}
      </Link>
    </NextLink>
  );
};

export default LanguageChanger;