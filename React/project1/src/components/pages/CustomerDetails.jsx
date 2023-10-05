import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CustomerDetails() {
  const { id } = useParams();

  const [custo, setCusto] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/customers/" + id)
      .then((response) => response.json())
      .then((data) => {
        setCusto(data.custo);
      });
  }, []);

  return (
    <>
      <h1>CUSTOMER DETAILS</h1>

      {custo ? (
        <div>
          <p>Name: {custo.name}</p>

          <Link to="/students">Go Back</Link>
        </div>
      ) : null}
    </>
  );
}

export default CustomerDetails;
