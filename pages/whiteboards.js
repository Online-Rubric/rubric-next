import axios from 'axios'
import useSWR from 'swr'
import { useState } from 'react';


export default function Whitebaords() {

    const [ currentRubrics, setCurrentRubrics ] = useState([]);
    const [ student, setStudent ] = useState({id:-1});

    const { data: students, error } = useSWR("http://127.0.0.1:8000/api/v1/rubrics/students/", fetcher);
    const { data: rubrics, rubricError } = useSWR("http://127.0.0.1:8000/api/v1/rubrics/", fetcher);

    if (error || rubricError) return "error"
    if (!students || !rubrics) return "Loading..."

    function changeHandler(e) {
        const studentID = parseInt(e.target.value);
        const selectedStudent = students.find( candidate => candidate.id===studentID);
        setStudent(selectedStudent);
        const newRubrics = rubrics.filter( rubric => rubric.student===selectedStudent.id );
        setCurrentRubrics(newRubrics);
    }

    // console.log(JSON.stringify(rubrics));

    return(
        <>
        <select onChange={changeHandler}>
            <option value={0}>---</option>
            {students.map(student => (
                <option key={student.id} value={student.id}>{student.username}</option>
            ))}
        </select>
        <h2>{student.username}</h2>
        <div>
            {currentRubrics.map( rubric => ( 
                <p key={rubric.id}>
                    {rubric.challenge}
                </p>
            ))}
        </div>
        </>
    )
}

async function fetcher(url) {
    const response = await axios.get(url);
    return response.data
}