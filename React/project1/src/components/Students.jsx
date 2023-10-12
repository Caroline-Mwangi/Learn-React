import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Students() {
  //useState is used to monitor the state of an element
  const [students, setStudents] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/students")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data.students);
      });
  }, []);

  return (
    <>
      <h1>STUDENTS</h1>

      <ul>
        {students
          ? students.map((student) => {
              return (
                <li key={student.id}>
                  <p>Name: {student.name}</p>
                  <Link to={"/students/" + student.id}>View Details</Link>
                  <br></br>
                  <br></br>
                </li>
              );
            })
          : null}
      </ul>
    </>
  );
}

export default Students;
