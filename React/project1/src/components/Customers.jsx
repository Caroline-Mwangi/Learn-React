import { useEffect, useState } from "react";

function Customers(){

    const[customers, setCustomers] = useState();

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/customers/")
        .then((response) => response.json())
        .then((data) => {
            setCustomers(data.customers)
        })
    }, [])

    return <>

    <p>{customers?customers.map((customer) => {
        return <>
        
            <p>Name: {customer.name}</p>
            <p>Industry: {customer.industries}</p>
            <br></br>
        
        </>
    })
    :null}</p>

    </>
};

export default Customers;