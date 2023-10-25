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
      <h2>Product Details </h2>
      <hr></hr>
      <div className="full-student-detail">
        <img src={product.image} height="100" width="80" />
        <p><b>Name: </b>{product.name}</p>
        <p><b>Price: </b>{product.price}</p>
        <p><b>Description: </b>{product.description}</p>
      </div>

      <Link
        className="btn btn-danger"
        onClick={() => deleteProduct(product.id)}
      >
        Delete
      </Link>
    </div>
  );
}