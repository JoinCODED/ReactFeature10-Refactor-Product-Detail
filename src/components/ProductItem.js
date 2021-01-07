// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { ProductWrapper } from "../styles";

const ProductItem = ({ product, deleteProduct }) => {
  return (
    <ProductWrapper>
      <img alt={product.name} src={product.image} />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton productId={product.id} deleteProduct={deleteProduct} />
    </ProductWrapper>
  );
};

export default ProductItem;
