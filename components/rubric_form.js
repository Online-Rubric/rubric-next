export default function RubricForm(props) {

    // function submitHandler(event) {
    //     event.preventDefault();
    //     const rubricInfo = {};
    //     rubricInfo.xxx = event.target.xxx.value;
    //     rubricInfo.xxx = event.target.xxx.value;
    //     rubricInfo.xxx = event.target.xxx.value;
    //     rubricInfo.xxg = event.target.xxx.value;
    //     props.onRubricCreate(rubricInfo)
    // }

    return (
        <div className="bg-gray-200">
            <legend className="px-3 py-3 text-2xl text-center bg-gray-400"></legend>
            <form>
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
                        <input name="clarify_question" id="clarify_question" type="number" max="4" />
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
                </div>
            </form>
        </div>
    )
}