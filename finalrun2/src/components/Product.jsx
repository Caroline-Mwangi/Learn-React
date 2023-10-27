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
      <div className="row p-5 ms-5">
        {products.map((product) => (
          <>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <img src={product.image} width="80"></img>
              <p>
                <b>Name:</b> {product.name}
              </p>
              <a href={"/products/" + product.id} className="text-primary">
                Details
              </a>
              <br></br>
              <br></br>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Product;
