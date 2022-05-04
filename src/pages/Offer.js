import { useParams } from "react-router-dom";

const Product = () => {
  const { _id } = useParams();
  return <div>Product : {_id}</div>;
};

export default Product;
