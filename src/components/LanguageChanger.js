// Main Imports
import { useRouter } from "next/router";
import NextLink from "next/link";
// MUI
import Link from "@mui/material/Link";

const LanguageChanger = (props) => {
  const { color = "inherit", sx = {}, ...other } = props;
  const router = useRouter();
  const { asPath, locale } = router;

  return (
    <NextLink href={asPath} locale={locale === "en" ? "ar" : "en"} passHref>
      <Link color={color} underline="none" sx={sx} {...other}>
        {locale === "en" ? "العربية" : "English"}
      </Link>
    </NextLink>
  );
};

export default LanguageChanger;
