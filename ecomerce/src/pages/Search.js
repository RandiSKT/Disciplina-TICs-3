import { useSearchParams, NavLink } from "react-router-dom";
import { useGetData } from "../hooks/useGetdata";

const Search = () => {
  let [searchParams] = useSearchParams();
  const url = "http://localhost:3000/products?" + searchParams;
  const { data: items } = useGetData(url);
  return (
    <div>
      <h1>Resultados disponíveis:</h1>
      <ul className="products">
        {items &&
          items.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2> <p>R$: {product.price}</p>
              <NavLink to={`/products/${product.id}`}>Detalhes</NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Search;
