import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Details() {
  const { id } = useParams();

  const [student, setStudent] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/students/" + id)
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

          <Link to="/students">Go Back</Link>
        </div>
      ) : null}
    </>
  );
}

export default Details;
