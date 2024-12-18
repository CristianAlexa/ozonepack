import { useParams } from "react-router-dom";

const ProductDisplayPage = () => {
  const { productId } = useParams();

  console.log(productId);

  return <div>ProductDisplayPage</div>;
};

export default ProductDisplayPage;
