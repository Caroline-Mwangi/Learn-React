import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseUrl } from "../../shared";


function Details() {
  const { id } = useParams();

  const [student, setStudent] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(baseUrl + "api/students/" + id)
      .then((response) => response.json())
      .then((data) => {
        setStudent(data.student);
      });
  }, []);

  return (
    <>
      <h1>STUDENT DETAILS</h1>

      {student ? (
        <div>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <p>Sesion: {student.session}</p>
          <button onClick={(e) => {
            const url = baseUrl + "api/students/" + id;
            fetch(url, {
              method: "DELETE"
            }).then((response) => {
              if(response.ok){
                navigate("/students");
              }
            }) 
          }}>DELETE</button> <br />
          <Link to="/students">Go Back</Link>
        </div>
      ) : null}
    </>
  );
}

export default Details;
