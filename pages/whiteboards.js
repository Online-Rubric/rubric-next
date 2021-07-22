import axios from 'axios'
import useSWR from 'swr'
import { useState } from 'react';
import Header from '../components/header'
import Nav from '../components/nav'
import FixedFooter from '../components/fixed-footer'


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

    console.log(JSON.stringify(rubrics));

    return(
        <>
        <div className="flex flex-col items-center justify-start min-h-screen py-2 bg-gray-400">
            <Header/>
            <Nav/>
            <select onChange={changeHandler}>
                <option value={0}>---</option>
                {students.map(student => (
                    <option key={student.id} value={student.id}>{student.username}</option>
                ))}
            </select>
            <h2>{student.username}</h2>
            <div>
                {currentRubrics.map( rubric => ( 
                    // <p key={rubric.id}>
                    //     {rubric.challenge}
                    // </p>
                    <table key={rubric.id}>
                        <thead>
                            <tr>
                                <th> Challenge Attempted: {rubric.challenge}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Time Started: {rubric.time_start}</td>
                            </tr>
                            <tr>
                                <td>Time Ended: {rubric.time_end}</td>
                            </tr>
                            <tr>
                                <td>Asked Clarifying Questions: {rubric.clarify_question}</td>
                            </tr>
                            <tr>
                                <td>Identified Inputs and Outputs: {rubric.inputs_outputs} </td>
                            </tr>
                            <tr>
                                <td>Illustrated the Problem: {rubric.illustrate_problem}</td>
                            </tr>
                            <tr>
                                <td>Optimal Structure{rubric.optimal_structure}</td>
                            </tr>
                            <tr>
                                <td>Instructor Notes: {rubric.interpret_question_notes}</td>
                            </tr>
                            <tr>
                                <td>Presented a Working Algorithm: {rubric.working_algorithm}</td>
                            </tr>
                            <tr>
                                <td>Correct Syntax: {rubric.syntactically_correct}</td>
                            </tr>
                            <tr>
                                <td>idiomatically Correct: {rubric.idiomatically_correct}</td>
                            </tr>
                            <tr>
                                <td>Code Was Best Solution: {rubric.best_solution}</td>
                            </tr>
                            <tr>
                                <td>Instructor Notes: {rubric.solve_problem_notes}</td>
                            </tr>
                            <tr>
                                <td>Walked Through Solution: {rubric.walkthrough_solution}</td>
                            </tr>
                            <tr>
                                <td>Understood BigO: {rubric.big_o}</td>
                            </tr>
                            <tr>
                                <td>Walkthrough Tests: {rubric.testing}</td>
                            </tr>
                            <tr>
                                <td>Instructor Notes: {rubric.analyze_solution_notes}</td>
                            </tr>
                            <tr>
                                <td>Explained Thought Process: {rubric.thought_process}</td>
                            </tr>
                            <tr>
                                <td>Used Correct Terminology: {rubric.terminology}</td>
                            </tr>
                            <tr>
                                <td>Effective use of Time{rubric.use_time}</td>
                            </tr>
                            <tr>
                                <td>Not Overconfident: {rubric.overconfident}</td>
                            </tr>
                            <tr>
                                <td>Not Underconfident: {rubric.underconfident}</td>
                            </tr>
                            <tr>
                                <td>Instructor Notes: {rubric.communicate_effectively_notes}</td>
                            </tr>
                            <tr>
                                <td>Instructor Comments: {rubric.comments}</td>
                            </tr>
                        
                        </tbody>
                    </table>
                ))}
            </div>
            <FixedFooter/>
        </div>
        </>
    )
}

async function fetcher(url) {
    const response = await axios.get(url);
    return response.data
}

