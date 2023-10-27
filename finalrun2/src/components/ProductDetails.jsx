import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  const getSingleProduct = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/${id}/`);

    setProduct(data);
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const deleteProduct = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/${id}/`);
    navigate("/");
  };

  return (
    <div>
      <h1 class="text-3xl font-bold ">Product Details</h1>
      <hr></hr>
      <br />
      <div className="full-student-detail ms-3">
        <img src={product.image} height="100" width="80" />
        <p>
          <b>Name: </b>
          {product.name}
        </p>
        <p>
          <b>Price: </b>
          {product.price}
        </p>
        <p>
          <b>Description: </b>
          {product.description}
        </p>
      </div>

      <Link
        className="btn btn-primary ms-3"
        to={`/products/${product.id}/update/`}
      >
        Update
      </Link>
      <Link
        className="btn btn-danger ms-3"
        onClick={() => deleteProduct(product.id)}
      >
        Delete
      </Link>
    </div>
  );
}
