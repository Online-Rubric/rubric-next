import axios from 'axios'

export default function RubricForm(props) {


    function submitHandler(event) {
        event.preventDefault();
        const rubricInfo = {};
        rubricInfo.student = event.target.student.value;
        rubricInfo.proctor = event.target.proctor.value;
        rubricInfo.time_start = event.target.time_start.value;
        rubricInfo.time_end = event.target.time_end.value;
        rubricInfo.challenge = event.target.challenge.value;
        rubricInfo.clarify_question = parseInt(event.target.clarify_question.value);
        rubricInfo.inputs_outputs = parseInt(event.target.inputs_outputs.value);
        rubricInfo.illustrate_problem = parseInt(event.target.illustrate_problem.value);
        rubricInfo.optimal_structure = parseInt(event.target.optimal_structure.value);
        rubricInfo.interpret_question_notes = event.target.interpret_question_notes.value
        rubricInfo.working_algorithm = parseInt(event.target.working_algorithm.value);
        rubricInfo.syntactically_correct = parseInt(event.target.syntactically_correct.value);
        rubricInfo.idiomatically_correct = parseInt(event.target.idiomatically_correct.value);
        rubricInfo.best_solution = parseInt(event.target.best_solution.value);
        rubricInfo.solve_problem_notes = event.target.solve_problem_notes.value
        rubricInfo.walkthrough_solution = parseInt(event.target.walkthrough_solution.value);
        rubricInfo.big_o = parseInt(event.target.big_o.value);
        rubricInfo.testing = parseInt(event.target.testing.value);
        rubricInfo.analyze_solution_notes = event.target.analyze_solution_notes.value
        rubricInfo.thought_process = parseInt(event.target.thought_process.value);
        rubricInfo.terminology = parseInt(event.target.terminology.value);
        rubricInfo.use_time = parseInt(event.target.use_time.value);
        rubricInfo.overconfident = parseInt(event.target.overconfident.value);
        rubricInfo.underconfident = parseInt(event.target.underconfident.value);
        rubricInfo.whiteboard = parseInt(event.target.whiteboard.value);
        rubricInfo.communicate_effectively_notes = event.target.communicate_effectively_notes.value

        console.log(rubricInfo)
        props.apiPost(rubricInfo)
        
    }

    return (
        <div className="bg-gray-200">
            <legend className="px-3 py-3 text-2xl text-center bg-gray-400"></legend>
            <form onSubmit={submitHandler}>
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
                    {/* -----Interpreted the Question----- */}
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
                    {/* -----Solved the technical problem----- */}
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
                    {/* -----Analyzed the proposed solution----- */}
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
                    {/* -----Communicated effectively throughout----- */}
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
            </form>
        </div>
    )
}