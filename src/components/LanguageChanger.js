// Main Imports
import { useRouter } from "next/router";
import NextLink from "next/link";
// MUI
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
// Externals
import { setCookie } from "cookies-next";

const LanguageChanger = (props) => {
  const { color = "inherit", sx = {}, ...other } = props;
  const router = useRouter();
  const { pathname, query, asPath, locale } = router;

  // const handleLocaleChange = () => {
  //   const newLocale = locale === "en" ? "ar" : "en";

  //   router.push({ pathname, query }, asPath, {
  //     locale: newLocale,
  //   });

  //   setCookie("NEXT_LOCALE", newLocale, { maxAge: 60 * 6 * 24, path: asPath });
  // };

  return (
    <NextLink href={asPath} locale={locale === "en" ? "ar" : "en"} passHref>
      <Link color={color} underline="none" sx={sx} {...other}>
        {locale === "en" ? "العربية" : "English"}
      </Link>
    </NextLink>
  );
  // return (
  //   <Button
  //     color={color}
  //     underline="none"
  //     sx={sx}
  //     {...other}
  //     onClick={handleLocaleChange}
  //   >
  //     {router.locale === "en" ? "العربية" : "English"}
  //   </Button>
  // );
};

export default LanguageChanger;
