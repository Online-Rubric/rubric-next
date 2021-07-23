import axios from 'axios'
import useSWR from 'swr'
import { useState } from 'react';
import Header from '../components/header'
import Nav from '../components/nav'
import FixedFooter from '../components/fixed-footer'
import Loading from './loading'


export default function Whitebaords() {

    const [ currentRubrics, setCurrentRubrics ] = useState([]);
    const [ student, setStudent ] = useState({id:-1});

    const { data: students, error } = useSWR("https://rubric-api-project.herokuapp.com/api/v1/rubrics/students/", fetcher);

    const { data: rubrics, rubricError } = useSWR("https://rubric-api-project.herokuapp.com/api/v1/rubrics/", fetcher);

    if (error || rubricError) return "error"
    if (!students || !rubrics) return <Loading/>

    function changeHandler(e) {
        const studentID = parseInt(e.target.value);
        const selectedStudent = students.find( candidate => candidate.id===studentID);
        setStudent(selectedStudent);
        const newRubrics = rubrics.filter( rubric => rubric.student===selectedStudent.id );
        setCurrentRubrics(newRubrics);
    }


    function handleSelect(e) {
        window.location = process.env.ROOT + "whiteboards#" + e.target.value;
        // window.location = "http://localhost:3000/whiteboards#" + e.target.value;
        console.log('this is the console log ur looking for', process.env.ROOT);
    }

    const cellClasses = "p-2 border border-black flex-1"
    const notesCellClasses = "p-2 border border-black flex-auto border-b-4"
    const cellSectionClasses = "p-2 border border-black flex-1 bg-blue-300 font-bold text-center"
    const trClasses = "bg-gray-400 border-b-4 border-black border-solid w-full text-white"
    const cellChalClasses = "bg-gray-500 p-2 border border-black flex-1"

    return(
        <>
        <div className="flex flex-col items-center justify-start min-h-screen bg-gray-200">
            <Header/>
            <Nav/>
            <main className="container my-5 mb-10 items-left">
                <h3 className="inline-block mr-3 text-xl">Select a Student:</h3>
                <select onChange={changeHandler} className="inline-block p-1 mr-8 text-xl">
                    <option value={0}>---</option>
                    {students.map(student => (
                        <option key={student.id} value={student.id}>{student.username}</option>
                    ))}
                </select>
                
                {/* dropdown nav */}
                <p className="inline-block mr-3 text-xl">Select a Whiteboard:</p>
                <select className="dropdown" onChange={handleSelect} className="inline-block p-1 text-xl">
                    <option>---</option>
                    {currentRubrics.map( rubric => (
                    <option key={rubric.id} value={rubric.id}>{rubric.time_start}</option>
                    ))}
                </select>
                {currentRubrics.map( rubric => (
                <>
                <div className="flex flex-col flex-wrap">
                    <>
                    <table key={rubric.id} id={rubric.id} className="p-2 my-4 bg-gray-100 border-4 border-black table-auto">
                        <thead className="w-full" colspan="2">
                            <tr className={trClasses}>
                                <th className={cellChalClasses} colspan="2">Challenge Attempted: {rubric.challenge}</th>
                                <th className={cellClasses} colspan="2">Time Started: {rubric.time_start.toString()}</th>
                                <th className={cellClasses} colspan="1">Time Ended: {rubric.time_end}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="p-2">
                            <tr>
                                <td className={cellSectionClasses}  colspan="5">Interpreted the Question</td>
                            </tr>
                            <tr>
                                <td className={cellClasses}>Asked Clarifying Questions: {rubric.clarify_question}/2</td>
                                <td className={cellClasses}>Identified Inputs and Outputs: {rubric.inputs_outputs}/2</td>
                                <td className={cellClasses}>Illustrated the Problem: {rubric.illustrate_problem}/2</td>
                                <td className={cellClasses}>Optimal Structure: {rubric.optimal_structure}/4</td>
                            </tr>
                            <tr>
                                <td className={notesCellClasses} colspan="5"><p>Notes: {rubric.interpret_question_notes}</p></td>
                            </tr>
                            <tr>
                                <td className={cellSectionClasses}  colspan="5">Solved the technical problem</td>
                            </tr>
                            <tr>
                                <td className={cellClasses}>Presented a Working Algorithm: {rubric.working_algorithm}/4</td>
                                <td className={cellClasses}>Correct Syntax: {rubric.syntactically_correct}/3</td>
                                <td className={cellClasses}>Idiomatically Correct: {rubric.idiomatically_correct}/3</td>
                                <td className={cellClasses}>Code Was Best Solution: {rubric.best_solution}/2</td>
                            </tr>
                            <tr>
                                <td className={notesCellClasses} colspan="5">Notes: {rubric.solve_problem_notes}</td>
                            </tr>
                            <tr>
                                <td className={cellSectionClasses}  colspan="5">Analyzed the proposed solution</td>
                            </tr>
                            <tr>
                                <td className={cellClasses}>Walked Through Solution: {rubric.walkthrough_solution}/2</td>
                                <td className={cellClasses}>Understood BigO: {rubric.big_o}/2</td>
                                <td className={cellClasses}>Walkthrough Tests: {rubric.testing}/2</td>
                            </tr>
                            <tr>
                                <td className={notesCellClasses} colspan="5">Notes: {rubric.analyze_solution_notes}</td>
                            </tr>
                            <tr>
                                <td className={cellSectionClasses}  colspan="5">Communicated effectively throughout</td>
                            </tr>
                            <tr>
                                <td className={cellClasses}>Explained Thought Process: {rubric.thought_process}/6</td>
                                <td className={cellClasses}>Used Correct Terminology: {rubric.terminology}/2</td>
                                <td className={cellClasses}>Effective use of Time{rubric.use_time}/1</td>
                                <td className={cellClasses}>Not Overconfident: {rubric.overconfident}/1</td>
                                <td className={cellClasses}>Not Underconfident: {rubric.underconfident}/1</td>
                            </tr>
                            <tr>
                                <td className={notesCellClasses} colspan="5">Notes: {rubric.communicate_effectively_notes}</td>
                            </tr>
                            <tr>
                                <td className={notesCellClasses} colspan="5">Comments: {rubric.comments}</td>
                            </tr>
                        
                        </tbody>
                    </table>
                    </>
                </div>
                </>
                ))}
                
            </main>
            <FixedFooter/>
        </div>
        </>
    )
}

async function fetcher(url) {
    const response = await axios.get(url);
    return response.data
}

