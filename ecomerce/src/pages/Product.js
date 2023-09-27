import styles from "./Product.module.css";
import { useGetData } from "../hooks/useGetdata";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  console.log("id :" + id);
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useGetData(url);
  return (
    <div>
      <p className={styles.id}>ID do produto: {id}</p>
      {product && (
        <div>
          <h1>{product.name}</h1>
          <div className={styles.image}>
            <img src={product.image} alt={product.name} />
          </div>
          <p className={styles.price}>R${product.price}</p>
          <NavLink to={`/products/${product.id}/info`}>Mais Informações</NavLink>
        </div>
      )}
    </div>
  );
};
export default Product;
