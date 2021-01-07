// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";

const ProductDetail = ({ product, deleteProduct }) => {
  return (
    <DetailWrapper>
      <p>Back to Products</p>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton productId={product.id} deleteProduct={deleteProduct} />
    </DetailWrapper>
  );
};

export default ProductDetail;
