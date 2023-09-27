import {useEffect, useState} from 'react';

function Students () {
    //useState is used to monitor the state of an element
    const [students, setStudents] = useState();
    
    useEffect(() => {

        fetch("http://127.0.0.1:8000/api/students/")
        .then((response) => response.json())
        .then((data) => {
            setStudents(data.students);
        });

    }, []);

    return <>

        <p>{students?students.map((student) => {
            return <>
            
                <p>Name: {student.name}</p>
                <p>Email: {student.email}</p>
                <p>Session: {student.session}</p>
                <br></br>
            
            </>
        })
        :null}</p>

    </>
}

export default Students;