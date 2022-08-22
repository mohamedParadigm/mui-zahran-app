// Internals
import { useRouter } from "next/router";
// Data
import data from "../../utils/data";

const Product = ({product}) => {
    console.log(product)

    return ( 
        <h2>{product.uniqueName}</h2>

     );
}
 
export default Product;


export const getServerSideProps = (req) => {
    const { params } = req;
    const { products } = data;

    const product = products.find((item) => item.uniqueName === params.product);

    if (!product) {
        return {
        notFound: true,
        };
    }
    return {
        props: {
            product
        },
    };
}