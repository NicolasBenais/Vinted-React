import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  return <div>Product : {params.item.id}</div>;
};

export default Product;
