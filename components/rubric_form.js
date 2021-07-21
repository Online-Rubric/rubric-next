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
    }

    return (
        <div className="bg-gray-200">
        <form onSubmit={submitHandler}>
            <table className="table w-full p-4">
                <thead className="p-4">
                    <tr className="flex w-full p-2 m-auto bg-gray-400 border-b-4 border-black border-solid flex-nowrap">
                        <th className="flex-1 px-2">Student</th>
                        <th className="flex-1">
                            <input name="student" id="student" type="text" />
                        </th>
                        <th className="flex-1 px-2">Proctor</th>
                        <th className="flex-1">
                            <input name="proctor" id="proctor" type="text" />
                        </th>
                        <th className="flex-1 px-2">Start Time</th>
                        <th className="flex-1">
                            <input name="time_start" id="time_start" type="text" />
                        </th>
                        <th className="flex-1 px-2">End Time</th>
                        <th className="flex-1">
                            <input name="time_end" id="time_end" type="text" />
                        </th>
                        <th className="flex-1 px-2">Challenge Given</th>
                        <th className="flex-1">
                            <input name="challenge" id="challenge" type="text" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="flex border-b-4 border-black border-solid space-between">
                        <td className="p-1 border-l border-r border-black border-solid w-60">Section Points</td>
                        <td className="flex-1 border-r border-black border-solid">Earned</td>
                        <td className="w-48 border-r border-black border-solid">Possible</td>
                        <td className="flex-1 border-b border-black border-solid"></td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    {/* start section */}
                    {/* -----Interpreted the Question----- */}
                    <tr className="flex justify-start border-black">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60">0</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                        <td className="w-48 border-b border-r border-black border-solid">10</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Interpreted the Question</td>
                        <td className="flex-1 border-b border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 text-center border-b border-r border-black border-solid">
                            <input name="clarify_question" id="clarify_question" type="number" max="2" />
                        </td>
                        <td className="w-48 border-b border-r border-black border-solid">2</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Asked meaningful clarifying questions</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input name="inputs_outputs" id="inputs_outputs" type="number" max="2"/>
                        </td>
                        <td className="w-48 border-b border-r border-black border-solid">2</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Identified inputs and outputs</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex-1 border-b border-r border-black border-solid"><input name="illustrate_problem" id="illustrate_problem" type="number" max="2" /></td>
                        <td className="w-48 border-b border-r border-black border-solid">2</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Visually illustrated the problem domain</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid">
                            <input name="optimal_structure" id="optimal_structure" type="number" max="4"/>
                        </td>
                        <td className="w-48 border-b border-r border-black border-solid">4</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Identified optimal data structure and/or algorithm</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start p-1">
                        <td className="flex-auto">Notes</td>
                    </tr>
                    <tr className="flex justify-start border-b-4 border-black border-solid">
                        <td className="flex-auto my-3"><input name="interpret_question_notes" id="interpret_question_notes" type="text" /></td>
                    </tr>
                    {/* start section */}
                    {/* -----Solved the technical problem----- */}
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60">0</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                        <td className="w-48 border-b border-r border-black border-solid">12</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Solved the technical problem</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input name="working_algorithm" id="working_algorithm" type="number" max="4" />
                        </td>
                        <td className="w-48 border-b border-r border-black border-solid">4</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Presented and understood a working algorithm</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex-1 border-b border-r border-black border-solid"><input name="syntactically_correct" id="syntactically_correct" type="number" max="3"/></td>
                        <td className="w-48 border-b border-r border-black border-solid">3</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Final code was syntactically correct</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex-1 border-b border-r border-black border-solid"><input name="idiomatically_correct" id="idiomatically_correct" type="number" max="3"/></td>
                        <td className="w-48 border-b border-r border-black border-solid">3</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Final code was idiomatically correct</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex-1 border-b border-r border-black border-solid"><input name="best_solution" id="best_solution" type="number" max="2" /></td>
                        <td className="w-48 border-b border-r border-black border-solid">2</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Solution was the best possible option</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start p-1">
                        <td className="flex-auto">Notes</td>
                    </tr>
                    <tr className="flex justify-start border-b-4 border-black border-solid">
                        <td className="flex-auto my-3"><input name="solve_problem_notes" id="solve_problem_notes" type="text" /></td>
                    </tr>
                    {/* start section */}
                    {/* -----Analyzed the proposed solution----- */}
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60">0</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                        <td className="w-48 border-b border-r border-black border-solid">6</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Analyzed the proposed solution</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex-1 border-b border-r border-black border-solid"><input name="walkthrough_solution" id="walkthrough_solution" type="number" max="2" /></td>
                        <td className="w-48 border-b border-r border-black border-solid">2</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Stepped through their solution</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex-1 border-b border-r border-black border-solid"><input name="big_o" id="big_o" type="number" max="2"/></td>
                        <td className="w-48 border-b border-r border-black border-solid">2</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Big O time and space are analyzed</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex-1 border-b border-r border-black border-solid"><input name="testing" id="testing" type="number" max="2" /></td>
                        <td className="w-48 border-b border-r border-black border-solid">2</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Explain an approach to testing</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start p-1">
                        <td className="flex-auto">Notes</td>
                    </tr>
                    <tr className="flex justify-start border-b-4 border-black border-solid">
                        <td className="flex-auto my-3"><input name="interpret_question_notes" id="interpret_question_notes" type="text" /></td>
                    </tr>
                    {/* start section */}
                    {/* -----Communicated effectively throughout----- */}
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60">0</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                        <td className="w-48 border-b border-r border-black border-solid">12</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Communicated effectively throughout</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex-1 border-b border-r border-black border-solid"><input name="thought_process" id="thought_process" type="number" max="6" /></td>
                        <td className="w-48 border-b border-r border-black border-solid">6</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Verbalized their thought process</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex-1 border-b border-r border-black border-solid"><input name="terminology" id="terminology" type="number" max="2"/></td>
                        <td className="w-48 border-b border-r border-black border-solid">2</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Used correct terminology</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex-1 border-b border-r border-black border-solid"><input name="use_time" id="use_time" type="number" max="1" /></td>
                        <td className="w-48 border-b border-r border-black border-solid">1</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Used the time available effectively</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input name="overconfident" id="overconfident" type="number" max="1" />
                        </td>
                        <td className="w-48 border-b border-r border-black border-solid">1</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Was not overconfident (not listening to suggestions)</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input name="underconfident" id="underconfident" type="number" max="1"/>
                        </td>
                        <td className="w-48 border-b border-r border-black border-solid">1</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Was not under-confident (unsure of known algorithm)</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start">
                        <td className="p-1 border-b border-l border-r border-black border-solid w-60"></td>
                        <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                            <input name="whiteboard" id="whiteboard" type="number" max="1" />
                        </td>
                        <td className="w-48 border-b border-r border-black border-solid">1</td>
                        <td className="flex-1 text-left border-b border-black border-solid">Whiteboard was readable (penmanship and spacing)</td>
                        <td className="flex-1 border-b border-r border-black border-solid"></td>
                    </tr>
                    <tr className="flex justify-start p-1 my-3">
                        <td className="flex-auto">Notes</td>
                    </tr>
                    <tr className="flex justify-start border-b-4 border-black border-solid">
                        <td className="flex-auto my-3"><input name="communicate_effectively_notes" id="communicate_effectively_notes" type="text" /></td>
                    </tr>
                    {/* submit button */}
                    <tr className="">
                        <button className="px-20 py-3 my-3 bg-green-500 rounded w-max">Submit</button>
                    </tr>
                </tbody>
            </table>
            </form>
            
        </div>
    )
}

{/* <form onSubmit={submitHandler}>
    <div id="top_level" className="flex flex-wrap m-auto bg-gray-400">
        <p>Student</p>
        <input name="student" id="student" type="text" />
        <p>Proctor</p>
        <input name="proctor" id="proctor" type="text" />
        <p>Start Time</p>
        <input name="time_start" id="time_start" type="text" />
        <p>End Time</p>
        <input name="time_end" id="time_end" type="text" />
        <p>Challenge Given</p>
        <input name="challenge" id="challenge" type="text" />
    </div>
    <div id="main_form">
        <p>Please provide professional, polite, direct, honest feedback to the individual you are interviewing:</p>
        
        <div id="interpret_the_question">
            <p>Interpreted the Question</p>
            <p>Section Points</p>
            <p>Earned</p>
            <p>Possible 10</p>
            <p>Asked meaningful clarifying questions</p>
            <p>Possible Points = 2</p>
            <input name="clarify_question" id="clarify_question" type="number" max="2" />
            <p>Identified inputs and outputs</p>
            <p>Possible Points = 2</p>
            <input name="inputs_outputs" id="inputs_outputs" type="number" max="2"/>
            <p>Visually illustrated the problem domain</p>
            <p>Possible Points = 2</p>
            <input name="illustrate_problem" id="illustrate_problem" type="number" max="2" />
            <p>Identified optimal data structure and/or algorithm</p>
            <p>Possible Points = 4</p>
            <input name="optimal_structure" id="optimal_structure" type="number" max="4"/>
            <p>Notes</p>
            <input name="interpret_question_notes" id="interpret_question_notes" type="text" />
        </div>
        
        <div id="interpret_the_question">
            <p>Solved the technical problem</p>
            <p>Section Points</p>
            <p>Earned</p>
            <p>Possible 12</p>
            <p>Presented and understood a working algorithm</p>
            <p>Possible Points = 4</p>
            <input name="working_algorithm" id="working_algorithm" type="number" max="4" />
            <p>Final code was syntactically correct</p>
            <p>Possible Points = 3</p>
            <input name="syntactically_correct" id="syntactically_correct" type="number" max="3"/>
            <p>Final code was idiomatically correct</p>
            <p>Possible Points = 3</p>
            <input name="idiomatically_correct" id="idiomatically_correct" type="number" max="3"/>
            <p>Solution was the best possible option</p>
            <p>Possible Points = 2</p>
            <input name="best_solution" id="best_solution" type="number" max="2" />
            <p>Notes</p>
            <input name="solve_problem_notes" id="solve_problem_notes" type="text" />
        </div>
        
        <div id="interpret_the_question">
            <p>Analyzed the proposed solution</p>
            <p>Section Points</p>
            <p>Earned</p>
            <p>Possible 6</p>
            <p>Stepped through their solution</p>
            <p>Possible Points = 2</p>
            <input name="walkthrough_solution" id="walkthrough_solution" type="number" max="2" />
            <p>Big O time and space are analyzed</p>
            <p>Possible Points = 2</p>
            <input name="big_o" id="big_o" type="number" max="2"/>
            <p>Explain an approach to testing</p>
            <p>Possible Points = 2</p>
            <input name="testing" id="testing" type="number" max="2" />
            <p>Notes</p>
            <input name="analyze_solution_notes" id="analyze_solution_notes" type="text" />
        </div>
        
        <div id="interpret_the_question">
            <p>Communicated effectively throughout</p>
            <p>Section Points</p>
            <p>Earned</p>
            <p>Possible 12</p>
            <p>Verbalized their thought process</p>
            <p>Possible Points = 6</p>
            <input name="thought_process" id="thought_process" type="number" max="6" />
            <p>Used correct terminology</p>
            <p>Possible Points = 2</p>
            <input name="terminology" id="terminology" type="number" max="2"/>
            <p>Used the time available effectively</p>
            <p>Possible Points = 1</p>
            <input name="use_time" id="use_time" type="number" max="1" />
            <p>Was not overconfident (not listening to suggestions)</p>
            <p>Possible Points = 1</p>
            <input name="overconfident" id="overconfident" type="number" max="1" />
            <p>Was not under-confident (unsure of known algorithm)</p>
            <p>Possible Points = 1</p>
            <input name="underconfident" id="underconfident" type="number" max="1"/>
            <p>Whiteboard was readable (penmanship and spacing)</p>
            <p>Possible Points = 1</p>
            <input name="whiteboard" id="whiteboard" type="number" max="1" />
            <p>Notes</p>
            <input name="communicate_effectively_notes" id="communicate_effectively_notes" type="text" />
        </div>
        <button className="px-20 py-3 bg-green-500 rounded w-max">Submit</button>
    </div>
</form> */}