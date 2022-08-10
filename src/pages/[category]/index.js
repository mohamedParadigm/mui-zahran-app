// Internals
import { useRouter } from "next/router";
// MUI
import Container from "@mui/material/Container";
// Components
import Layout from "../../modules/layout/Layout";

const Category = () => {
  const router = useRouter();

  // console.log(router);

  return (
    <Layout title="Category">
      <Container></Container>
    </Layout>
  );
};

export default Category;

export const getServerSideProps = (req, res) => {
  const { params, query } = req;
  console.log("Params ", params);
  console.log("Query ", query);

  return {
    props: {},
  };
};
