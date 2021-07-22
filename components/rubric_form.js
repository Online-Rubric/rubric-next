import axios from 'axios'

export default function RubricForm(props) {


    function submitHandler(event) {
        event.preventDefault();
        const rubricInfo = {};

        const text_fields = [
        "student",
        "proctor",
        "time_start",
        "time_end",
        "challenge",
        "interpret_question_notes",
        "solve_problem_notes",
        "analyze_solution_notes",
        "communicate_effectively_notes",
        "comments"]

        const score_fields = [
        "clarify_question",
        "inputs_outputs",
        "illustrate_problem",
        "optimal_structure",
        "working_algorithm",
        "syntactically_correct",
        "idiomatically_correct",
        "best_solution",
        "walkthrough_solution",
        "big_o",
        "testing",
        "thought_process",
        "terminology",
        "use_time",
        "overconfident",
        "underconfident",
        "whiteboard"]
        
        for (let field of text_fields){
            rubricInfo[field] = event.target[field].value
        }
        
        for (let field of score_fields){
            rubricInfo[field] = parseInt(event.target[field].value)
        }
        props.apiPost(rubricInfo);
    }

    return (
        <div className="mb-10 bg-gray-200">
        <form onSubmit={submitHandler}>
            <table className="table w-full p-4">
                <thead className="flex flex-row flex-wrap p-4">
                    <tr className="flex flex-row justify-between w-full p-2 m-auto bg-gray-400 border-b-4 border-black border-solid flex-nowrap">
                        <th className="px-2">Student</th>
                        <th className="">
                            {/* <input name="student" id="student" type="select" /> */}
                            <select className="flex items-center justify-center p-1" name="student">
                                <option value={0}>---</option>
                                {props.students.map(student => (
                                    <option key={student.id} value={student.id}>{student.username}</option>
                                ))}
                            </select>
                        
                        </th>
                        <th className="px-2">Proctor</th>
                        <th className="">
                            {/* <input name="proctor" id="proctor" type="text" />
                             */}
                            <select className="flex items-center justify-center p-1" name="proctor">
                                <option value={0}>---</option>
                                 {props.proctors.map(proctor => (
                                    <option key={proctor.id} value={proctor.id}>{proctor.username}</option>
                                ))}
                            </select>
                        </th>
                        <th className="px-2">Challenge Given</th>
                        <th className="">
                            <input className="flex items-center justify-center p-1" name="challenge" id="challenge" type="text" />
                        </th>
                    </tr>
                    <tr>
                        <th className="px-2">Start Time</th>
                        <th className="">
                            <input className="p-1 " name="time_start" id="time_start" type="datetime-local" />
                        </th>
                        <th className="px-2">End Time</th>
                        <th className="">
                            <input className="p-1 " name="time_end" id="time_end" type="datetime-local" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="flex border-b-4 border-black border-solid space-between">
                        <td className="p-1 border-l border-r border-black border-solid w-60">Section Points</td>
                        <td className="flex-1 border-r border-black border-solid">Earned</td>
                        <td className="w-48 border-r border-black border-solid">Possible</td>
                        <td className="w-1/2 border-b border-black border-solid"></td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    {/* start section */}
                    {/* -----Interpreted the Question----- */}
                    <tr className="flex justify-start text-gray-800 bg-blue-400 border-b-4 border-black">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60">0</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">10</td>
                        <td className="w-1/2 px-1 py-2 font-bold text-left border-b border-black border-solid">Interpreted the Question</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 text-center border-b border-r border-black border-solid">
                            <input className="flex items-center justify-center p-1" name="clarify_question" id="clarify_question" type="number" max="2" />
                        </td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">2</td>
                        <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Asked meaningful clarifying questions</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input className="flex items-center justify-center p-1" name="inputs_outputs" id="inputs_outputs" type="number" max="2"/>
                        </td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">2</td>
                        <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Identified inputs and outputs</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid">
                            <input className="flex items-center justify-center p-1" name="illustrate_problem" id="illustrate_problem" type="number" max="2" />
                        </td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">2</td>
                        <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Visually illustrated the problem domain</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid">
                            <input className="flex items-center justify-center p-1" name="optimal_structure" id="optimal_structure" type="number" max="4"/>
                        </td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">4</td>
                        <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Identified optimal data structure and/or algorithm</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start p-1 border-l border-r border-black">
                        <td className="flex-auto">Notes</td>
                    </tr>
                    <tr className="flex justify-start border-b-4 border-l border-r border-black border-solid">
                        <td className="flex-auto my-3"><input className="w-1/2 p-1" name="interpret_question_notes" id="interpret_question_notes" type="text" /></td>
                    </tr>
                    {/* start section */}
                    {/* -----Solved the technical problem----- */}
                    <tr className="flex justify-start text-gray-800 bg-blue-400 border-b-4 border-black">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60">0</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">12</td>
                        <td className="w-1/2 px-1 py-2 font-bold text-left border-b border-black border-solid">Solved the technical problem</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input className="flex items-center justify-center p-1" name="working_algorithm" id="working_algorithm" type="number" max="4" />
                        </td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">4</td>
                        <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Presented and understood a working algorithm</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input className="flex items-center justify-center p-1" name="syntactically_correct" id="syntactically_correct" type="number" max="3"/>
                        </td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">3</td>
                        <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Final code was syntactically correct</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input className="flex items-center justify-center p-1" name="idiomatically_correct" id="idiomatically_correct" type="number" max="3"/>
                        </td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">3</td>
                        <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Final code was idiomatically correct</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input className="flex items-center justify-center p-1" name="best_solution" id="best_solution" type="number" max="2" />
                        </td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">2</td>
                        <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Solution was the best possible option</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start p-1 border-l border-r border-black">
                        <td className="flex-auto">Notes</td>
                    </tr>
                    <tr className="flex justify-start border-b-4 border-l border-r border-black border-solid">
                        <td className="flex-auto my-3">
                            <input className="w-1/2 p-1" name="solve_problem_notes" id="solve_problem_notes" type="text" />
                        </td>
                    </tr>
                    {/* start section */}
                    {/* -----Analyzed the proposed solution----- */}
                    <tr className="flex justify-start text-gray-800 bg-blue-400 border-b-4 border-black">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60">0</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">6</td>
                        <td className="w-1/2 px-1 py-2 font-bold text-left border-b border-black border-solid">Analyzed the proposed solution</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input className="flex items-center justify-center p-1" name="walkthrough_solution" id="walkthrough_solution" type="number" max="2" />
                        </td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">2</td>
                        <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Stepped through their solution</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input className="flex items-center justify-center p-1" name="big_o" id="big_o" type="number" max="2"/>
                        </td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">2</td>
                        <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Big O time and space are analyzed</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input className="flex items-center justify-center p-1" name="testing" id="testing" type="number" max="2" />
                        </td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">2</td>
                        <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Explain an approach to testing</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start p-1 border-l border-r border-black">
                        <td className="flex-auto">Notes</td>
                    </tr>
                    <tr className="flex justify-start border-b-4 border-l border-r border-black border-solid ">
                        <td className="flex-auto my-3"><input className="w-1/2 p-1" name="analyze_solution_notes" id="analyze_solution_notes" type="text" /></td>
                    </tr>
                    {/* start section */}
                    {/* -----Communicated effectively throughout----- */}
                    <tr className="flex justify-start text-gray-800 bg-blue-400 border-b-4 border-black">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60">0</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">12</td>
                        <td className="w-1/2 px-1 py-2 font-bold text-left border-b border-black border-solid">Communicated effectively throughout</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input className="flex items-center justify-center p-1" name="thought_process" id="thought_process" type="number" max="6" />
                        </td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">6</td>
                        <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Verbalized their thought process</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input className="flex items-center justify-center p-1" name="terminology" id="terminology" type="number" max="2"/>
                        </td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">2</td>
                        <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Used correct terminology</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input className="flex items-center justify-center p-1" name="use_time" id="use_time" type="number" max="1" />
                        </td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">1</td>
                        <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Used the time available effectively</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input className="flex items-center justify-center p-1" name="overconfident" id="overconfident" type="number" max="1" />
                        </td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">1</td>
                        <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Was not overconfident (not listening to suggestions)</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input className="flex items-center justify-center p-1" name="underconfident" id="underconfident" type="number" max="1"/>
                        </td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">1</td>
                        <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Was not under-confident (unsure of known algorithm)</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input className="flex items-center justify-center p-1" name="whiteboard" id="whiteboard" type="number" max="1" />
                        </td>
                        <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">1</td>
                        <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Whiteboard was readable (penmanship and spacing)</td>
                        <td className="border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start p-1 py-2 border-l border-r border-black">
                        <td className="flex-auto">Notes</td>
                    </tr>
                    <tr className="flex justify-start border-b-4 border-l border-r border-black border-solid">
                        <td className="flex-auto my-3"><input className="w-1/2 p-1" name="communicate_effectively_notes" id="communicate_effectively_notes" type="text" /></td>
                    </tr>
                    {/* general notes */}
                    <tr className="flex justify-start p-1 py-2 border-l border-r border-black">
                        <td className="flex-auto">General Comments</td>
                    </tr>
                    <tr className="flex justify-start border-b-4 border-l border-r border-black border-solid">
                        <td className="flex-auto my-3">
                            <input className="w-1/2 p-1" name="comments" id="comments" type="text" />
                        </td>
                    </tr>
                    {/* submit button */}
                    <button className="px-20 py-3 my-3 text-white bg-green-500 rounded hover:bg-green-400 w-max hover:text-black">Submit</button>
                    
                </tbody>
            </table>
            
            </form>
            
        </div>
    )
}
