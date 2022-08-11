// Internals
import { useRouter } from "next/router";

const SubCategoryDetails = () => {
  const router = useRouter();
  console.log(router.asPath.split("/").includes("hair-care"));

  return (
    <>
      <div>Sub Category</div>
    </>
  );
}

export default SubCategoryDetails;