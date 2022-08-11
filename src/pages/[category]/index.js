// Internals
import { useRouter } from "next/router";
// MUI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Externals
import useTranslation from "next-translate/useTranslation";
// Components
import Layout from "../../modules/layout/Layout";
import CustomBreadcrumbs from "../../components/Breadcrumbs";
import PageFilter from "../../components/PageFilter";
// Data
import data from "../../utils/data";

const Category = (props) => {
  const { category } = props;
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  const breadCrumbData =
    typeof category === "string"
      ? [{ uniqueName: category, name: t("allCategories") }]
      : [{ uniqueName: category.uniqueName, name: category[`name_${locale}`] }];

  return (
    <Layout
      title={
        typeof category === "string"
          ? t("allCategories")
          : category[`name_${locale}`]
      }
      footerOtherStyle={{ marginBottom: { xs: "58px", md: 0 } }}
      scrollOffset={{ bottom: { xs: 120, md: 16 } }}
    >
      <Container sx={{ py: 4 }}>
        <CustomBreadcrumbs label="Category breadcrumbs" data={breadCrumbData} sx={{mb: 2}} />
        <Grid container spacing={3}>
          <PageFilter categories={data.categories} />
        </Grid>
      </Container>
    </Layout>
  );
};

export default Category;

export const getServerSideProps = (req, res) => {
  const { params, query, locale } = req;

  const category =
    params.category !== "all-categories"
      ? data.categories.find((cat) => cat.uniqueName === params.category)
      : "all-categories";

  if (!category) {
    return {
      notFound: true,
    };
  }

  return {
    props: { category },
  };
};
