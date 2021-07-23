import axios from 'axios'
import React, { useState } from 'react';

export default function RubricForm(props) {
    
    const [countTable, setCountTable] = useState({
        
        "interpretQuestion":{
        "clarify_question":0,
        "inputs_outputs":0,
        "illustrate_problem":0,
        "optimal_structure":0,},
        
        "solveProblem":{
        "working_algorithm":0,
        "syntactically_correct":0,
        "idiomatically_correct":0,
        "best_solution":0,},

        "analyzeSolution":{
        "walkthrough_solution":0,
        "big_o":0,
        "testing":0,},
        
        "communicate":{
        "thought_process":0,
        "terminology":0,
        "use_time":0,
        "overconfident":0,
        "underconfident":0,
        "whiteboard":0,},

        "total":{
         "communicate":0,
         "analyzeSolution":0,
         "solveProblem":0,
         "interpretQuestion":0,
        }
        
    })
        
    function changeHandler(category, item, event){
        const value = parseInt(event.target.value) || 0
        const newTable = {...countTable};
        newTable[category][item] = value;
        // newTable.interpretQuestion = 
        setCountTable(newTable)
        
    }
    
    function getCategoryScore(category){
        const group = countTable[category]
        let score = 0
        for(let item in group){
            const itemScore = group[item]
            score += itemScore
        }       
        return score
    }

    let score1 = getCategoryScore("communicate")
    let score2 = getCategoryScore("analyzeSolution")
    let score3 = getCategoryScore("solveProblem")
    let score4 = getCategoryScore('interpretQuestion')

    function totalScore(){
        return score1+score2+score3+score4
    }

      
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

        for (let field of text_fields) {
            rubricInfo[field] = event.target[field].value
        }

        for (let field of score_fields) {
            rubricInfo[field] = parseInt(event.target[field].value)
        }
        props.apiPost(rubricInfo);
        alert("Successfully Graded!");
        event.target.reset();
        window.scrollTo(0,0);
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

                        {/* start section */}
                        {/* -----Interpreted the Question----- */}
                        <tr className="flex border-t-4 border-b-4 border-black border-solid space-between">
                            <td className="flex-1 border-r border-black border-solid">Points Earned</td>
                            <td className="w-48 border-r border-black border-solid">Points Possible</td>
                            <td className="w-1/2 border-black border-solid">Metric</td>

                        </tr>
                        <tr className="flex justify-start">
                            <td className="flex items-center justify-center flex-1 text-center border-b border-r border-black border-solid">
                                <input className="flex justify-center p-1 text-center" name="clarify_question" id="clarify_question" type="number" max="2" onChange = {event => changeHandler("interpretQuestion","clarify_question",event)} value = {countTable.interpretQuestion.clarify_question}  />
                            </td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">2</td>
                            <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Asked meaningful clarifying questions</td>

                        </tr>
                        <tr className="flex justify-start">
                            <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                                <input className="flex justify-center p-1 text-center" name="inputs_outputs" id="inputs_outputs" type="number" max="2" onChange = {event => changeHandler("interpretQuestion","inputs_outputs",event)} value = {countTable.interpretQuestion.inputs_outputs} />
                            </td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">2</td>
                            <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Identified inputs and outputs</td>

                        </tr>
                        <tr className="flex justify-start">
                            <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid">
                                <input className="flex justify-center p-1 text-center" name="illustrate_problem" id="illustrate_problem" type="number" max="2" onChange = {event => changeHandler("interpretQuestion","illustrate_problem",event)} value = {countTable.interpretQuestion.illustrate_problem}/>
                            </td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">2</td>
                            <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Visually illustrated the problem domain</td>

                        </tr>
                        <tr className="flex justify-start">
                            <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid">
                                <input className="flex justify-center p-1 text-center" name="optimal_structure" id="optimal_structure" type="number" max="4" onChange = {event => changeHandler("interpretQuestion","optimal_structure",event)} value = {countTable.interpretQuestion.optimal_structure}/>
                            </td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">4</td>
                            <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Identified optimal data structure and/or algorithm</td>

                        </tr>
                        <tr className="flex justify-start text-gray-800 bg-blue-300 border-b-4 border-black">
                            <td className="items-center flex-1 border-b border-r border-black border-solid">{getCategoryScore('interpretQuestion')}</td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">10</td>
                            <td className="w-1/2 px-1 py-2 font-bold text-left border-b border-black border-solid">Interpreted the Question</td>

                        </tr>
                        <tr className="flex justify-start p-1 border-l border-r border-black">
                            <td className="flex-auto">Notes</td>
                        </tr>
                        <tr className="flex justify-start border-b-4 border-l border-r border-black border-solid">
                            <td className="flex-auto my-3"><input className="w-1/2 p-1" name="interpret_question_notes" id="interpret_question_notes" type="text" /></td>
                        </tr>
                        {/* start section */}
                        {/* -----Solved the technical problem----- */}
                        <tr className="flex border-b-4 border-black border-solid space-between">
                            <td className="flex-1 border-r border-black border-solid">Points Earned</td>
                            <td className="w-48 border-r border-black border-solid">Points Possible</td>
                            <td className="w-1/2 border-black border-solid">Metric</td>

                        </tr>
                        <tr className="flex justify-start">
                            <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                                <input className="flex justify-center p-1 text-center" name="working_algorithm" id="working_algorithm" type="number" max="4" onChange = {event => changeHandler("solveProblem","working_algorithm",event)} value = {countTable.solveProblem.working_algorithm} />
                            </td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">4</td>
                            <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Presented and understood a working algorithm</td>

                        </tr>
                        <tr className="flex justify-start">
                            <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                                <input className="flex justify-center p-1 text-center" name="syntactically_correct" id="syntactically_correct" type="number" max="3" onChange = {event => changeHandler("solveProblem","syntactically_correct",event)} value = {countTable.solveProblem.syntactically_correct} />
                            </td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">3</td>
                            <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Final code was syntactically correct</td>

                        </tr>
                        <tr className="flex justify-start">
                            <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                                <input className="flex justify-center p-1 text-center" name="idiomatically_correct" id="idiomatically_correct" type="number" max="3" onChange = {event => changeHandler("solveProblem","idiomatically_correct",event)} value = {countTable.solveProblem.idiomatically_correct} />
                            </td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">3</td>
                            <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Final code was idiomatically correct</td>

                        </tr>
                        <tr className="flex justify-start">
                            <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                                <input className="flex justify-center p-1 text-center" name="best_solution" id="best_solution" type="number" max="2" onChange = {event => changeHandler("solveProblem","best_solution",event)} value = {countTable.solveProblem.best_solution}/>
                            </td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">2</td>
                            <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Solution was the best possible option</td>

                        </tr>
                        <tr className="flex justify-start text-gray-800 bg-blue-300 border-b-4 border-black">
                            <td className="flex-1 text-center border-b border-r border-black border-solid">{getCategoryScore('solveProblem')}</td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">12</td>
                            <td className="w-1/2 px-1 py-2 font-bold text-left border-b border-black border-solid">Solved the technical problem</td>

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
                        <tr className="flex border-b-4 border-black border-solid space-between">
                            <td className="flex-1 border-r border-black border-solid">Points Earned</td>
                            <td className="w-48 border-r border-black border-solid">Points Possible</td>
                            <td className="w-1/2 border-black border-solid">Metric</td>

                        </tr>
                        <tr className="flex justify-start">

                            <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                                <input className="flex justify-center p-1 text-center" name="walkthrough_solution" id="walkthrough_solution" type="number" max="2" onChange = {event => changeHandler("analyzeSolution","walkthrough_solution",event)} value = {countTable.analyzeSolution.walkthrough_solution}/>
                            </td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">2</td>
                            <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Stepped through their solution</td>

                        </tr>
                        <tr className="flex justify-start">

                            <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                                <input className="flex justify-center p-1 text-center" name="big_o" id="big_o" type="number" max="2" onChange = {event => changeHandler("analyzeSolution","big_o",event)} value = {countTable.analyzeSolution.big_o} />
                            </td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">2</td>
                            <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Big O time and space are analyzed</td>

                        </tr>
                        <tr className="flex justify-start">

                            <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                                <input className="flex justify-center p-1 text-center" name="testing" id="testing" type="number" max="2" onChange = {event => changeHandler("analyzeSolution","testing",event)} value = {countTable.analyzeSolution.testing} />
                            </td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">2</td>
                            <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Explain an approach to testing</td>

                        </tr>
                        <tr className="flex justify-start text-gray-800 bg-blue-300 border-b-4 border-black">
                            <td className="flex-1 border-b border-r border-black border-solid">{getCategoryScore('analyzeSolution')}</td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">6</td>
                            <td className="w-1/2 px-1 py-2 font-bold text-left border-b border-black border-solid">Analyzed the proposed solution</td>

                        </tr>
                        <tr className="flex justify-start p-1 border-l border-r border-black">
                            <td className="flex-auto">Notes</td>
                        </tr>
                        <tr className="flex justify-start border-b-4 border-l border-r border-black border-solid ">
                            <td className="flex-auto my-3"><input className="w-1/2 p-1" name="analyze_solution_notes" id="analyze_solution_notes" type="text" /></td>
                        </tr>
                        {/* start section */}
                        {/* -----Communicated effectively throughout----- */}
                        <tr className="flex border-b-4 border-black border-solid space-between">
                            <td className="flex-1 border-r border-black border-solid">Points Earned</td>
                            <td className="w-48 border-r border-black border-solid">Points Possible</td>
                            <td className="w-1/2 border-black border-solid">Metric</td>

                        </tr>
                        <tr className="flex justify-start">

                            <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                                <input className="flex justify-center p-1 text-center" name="thought_process" id="thought_process" type="number" max="6" onChange = {event => changeHandler("communicate","thought_process",event)} value = {countTable.communicate.thought_process} />
                            </td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">6</td>
                            <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Verbalized their thought process</td>

                        </tr>
                        <tr className="flex justify-start">

                            <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                                <input className="flex justify-center p-1 text-center" name="terminology" id="terminology" type="number" max="2" onChange = {event => changeHandler("communicate","terminology",event)} value = {countTable.communicate.terminology} />
                            </td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">2</td>
                            <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Used correct terminology</td>

                        </tr>
                        <tr className="flex justify-start">

                            <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                                <input className="flex justify-center p-1 text-center" name="use_time" id="use_time" type="number" max="1" onChange = {event => changeHandler("communicate","use_time",event)} value = {countTable.communicate.use_time} />
                            </td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">1</td>
                            <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Used the time available effectively</td>

                        </tr>
                        <tr className="flex justify-start">

                            <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                                <input className="flex justify-center p-1 text-center" name="overconfident" id="overconfident" type="number" max="1" onChange = {event => changeHandler("communicate","overconfident",event)} value = {countTable.communicate.overconfident} />
                            </td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">1</td>
                            <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Was not overconfident (not listening to suggestions)</td>

                        </tr>
                        <tr className="flex justify-start">

                            <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                                <input className="flex justify-center p-1 text-center" name="underconfident" id="underconfident" type="number" max="1" onChange = {event => changeHandler("communicate","underconfident",event)} value = {countTable.communicate.underconfident} />
                            </td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">1</td>
                            <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Was not under-confident (unsure of known algorithm)</td>

                        </tr>
                        <tr className="flex justify-start">

                            <td className="flex items-center justify-center flex-1 border-b border-r border-black border-solid ">
                                <input className="flex justify-center p-1 text-center" name="whiteboard" id="whiteboard" type="number" max="1" onChange = {event => changeHandler("communicate","whiteboard",event)} value = {countTable.communicate.whiteboard} />
                            </td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">1</td>
                            <td className="w-1/2 px-1 py-2 text-left border-b border-black border-solid">Whiteboard was readable (penmanship and spacing)</td>

                        </tr>
                        <tr className="flex justify-start text-gray-800 bg-blue-300 border-b-4 border-black">

                            <td className="flex-1 border-b border-r border-black border-solid">{getCategoryScore('communicate')}</td>
                            <td className="flex items-center justify-center w-48 border-b border-r border-black border-solid">12</td>
                            <td className="w-1/2 px-1 py-2 font-bold text-left border-b border-black border-solid">Communicated effectively throughout</td>

                        </tr>
                        <tr className="flex justify-start p-1 py-2 border-l border-r border-black">
                            <td className="flex-auto">Notes</td>
                        </tr>
                        <tr className="flex justify-start pb-5 border-b-4 border-l border-r border-black border-solid">
                            <td className="flex-auto my-3"><input className="w-1/2 p-1" name="communicate_effectively_notes" id="communicate_effectively_notes" type="text" /></td>
                        </tr>
                        {/* general notes */}
                        <tr className="flex justify-start p-1 py-2 border-l border-r border-black">
                            <td className="flex-auto">General Comments</td>
                        </tr>
                        <tr className="flex justify-start pb-5 border-b-4 border-l border-r border-black border-solid">
                            <td className="flex-auto my-3">
                                <input className="w-1/2 p-1" name="comments" id="comments" type="text" />
                            </td>
                        </tr>
                        <tr className="flex bg-blue-300 border-b-4 border-black border-solid space-between">
                            <td className="flex-1 border-r border-black border-solid">Points Earned</td>
                            <td className="flex-1 border-r border-black border-solid">Points Possible</td>
                        </tr>
                        <tr className="flex justify-start text-gray-800 border-b-4 border-black">

                            <td className="flex-1 border-r border-black border-solid">{totalScore()}</td>
                            <td className="items-center flex-1 border-r border-black border-solid justify-centerborder-b">40</td>
                        </tr>
                        {/* submit button */}
                        <button className="px-20 py-3 my-3 mt-10 bg-green-500 rounded mt-text-white hover:bg-green-400 w-max hover:text-black">Submit</button>

                    </tbody>
                </table>

            </form>

        </div>
    )
}
