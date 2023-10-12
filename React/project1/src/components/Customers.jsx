import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Customers() {
  const [customers, setCustomers] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/test/api/customers")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data.customers);
      });
  }, []);

  return (
    <>
      <h1>CUSTOMERS</h1>

      <p>
        {customers
          ? customers.map((customer) => {
              return (
                <>
                  <p>Name: {customer.name}</p>
                  <Link to={"/customers/" + customer.id}>View Details</Link>
                  <br></br>
                  <br></br>
                </>
              );
            })
          : null}
      </p>
    </>
  );
}

export default Customers;
