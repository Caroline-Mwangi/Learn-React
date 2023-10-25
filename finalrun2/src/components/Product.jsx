import axios from "axios";
import { useState, useEffect } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await axios.get("http://127.0.0.1:8000/");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1 class="text-3xl font-bold ">All Products</h1>
      <br></br>

      {products.map((product) => (
        <>
          <img src={product.image} width="80"></img>
          <p><b>Name:</b> {product.name}</p>
          <a href={product.id} className="text-primary">Details</a>
          <br></br>
          <br></br>
        </>
      ))}
    </>
  );
}

export default Product;
