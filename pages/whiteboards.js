import Header from '../components/header'
import DashNav from '../components/dashboard-nav'
import DataContainer from '../components/data-container'
import LeftBar from '../components/dashboard-leftbar'
// import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios'
import Nav from '../components/nav'


export default function Whitebaords() {

    // const { user, error, isLoading } = useUser();

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>{error.message}</div>;

    const apiData = async () => {
      const res = await axios.get('http://127.0.0.1:8000/api/v1/rubrics/')
      
      res.data.map(item => {
          const json_objects = {
            proctor:  item.proctor,
            time_start : item.time_start,
            time_end : item.time_end,
            challenge: item.challenge,
            clarifying_question: item.clarifying_question,
            inputs_outputs: item.inputs_outputs,
            illustrate_problem: item.illustrate_problem,
            optimal_structure: item.optimal_structure,
            interpret_question_notes: item.interpret_question_notes,
            working_algorithm: item.working_algorithm,
            syntactically_correct: item.syntactically_correct,
            idiomatically_correct: item.idiomatically_correct,
            best_solution: item.best_solution,
            solve_problem_notes: item.solve_problem_notes,
            walkthrough_solution: item.walkthrough_solution,
            big_o: item.big_o,
            testing: item.testing,
            analyze_solution_notes: item.analyze_solution_notes,
            thought_process: item.thought_process,
            terminology: item.terminology,
            use_time: item.use_time,
            overconfident: item.overconfident,
            underconfident: item.underconfident,
            whiteboard: item.whiteboard,
            communicate_effectively_notes: item.communicate_effectively_notes,
            total: item.total,
            comments: item.comments,
            created_at: item.created_at,
            student: item.student
        
        }
        console.log(json_objects)
        // var student = document.getElementById('student')
        // student.append(item.student.value)
        })
    }

    return (
        // user && (

        <div className="min-h-screen bg-gray-400">
            <div className="items-center justify-center py-2">
                <Nav />
                <Header/>
                {/* <DashNav user={user}/> */}
            </div>

            <main>
                <h1>TEST</h1>
            </main>

        </div>
    )
}


// <div class="flex flex-col md:flex-row">
//                     <p>Whiteboards</p>
//                     {/* <LeftBar user={user}/> */}
//                     {/* <DataContainer user={user}/> */}
//                     {/* <div>
//                         <img src={user.picture} alt={user.name} />
//                         <h2>{user.name}</h2>
//                         <p>{user.email}</p>
//                     </div> */}
//                     <div className="flex m-10">
//                         <button onClick={() => apiData()}>
//                             Show Previous Scores
//                         </button>
//                     </div>

//                 </div>

//             <>
            

            
//             <table class="table-auto">
//                 <thead>
//                     <tr className="flex w-full m-auto bg-gray-400 flex-nowrap">
//                         <th className="flex-1">Student</th>
//                         <th className="flex-1"><p id="student">  </p></th>
//                         <th className="flex-1">Proctor</th>
//                         <th className="flex-1"><input name="proctor" id="proctor" type="text" /></th>
//                         <th className="flex-1">Start Time</th>
//                         <th className="flex-1"><input name="time_start" id="time_start" type="text" /></th>
//                         <th className="flex-1">End Time</th>
//                         <th className="flex-1"><input name="time_end" id="time_end" type="text" /></th>
//                         <th className="flex-1">Challenge Given</th>
//                         <th className="flex-1"><input name="challenge" id="challenge" type="text" /></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr className="flex space-between">
//                         <td className="flex-1 border-black border-1">Section Points</td>
//                         <td className="flex-1">Earned</td>
//                         <td className="flex-1">Possible</td>
//                         <td className="flex-1"></td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     {/* start section */}
//                     {/* -----Interpreted the Question----- */}
//                     <tr className="flex justify-start">
//                         <td className="flex-1">0</td>
//                         <td className="flex-1"></td>
//                         <td className="flex-1">10</td>
//                         <td className="flex-1">Interpreted the Question</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-1"></td>
//                         <td className="flex-1"><input name="clarify_question" id="clarify_question" type="number" max="2" /></td>
//                         <td className="flex-1">2</td>
//                         <td className="flex-1">Asked meaningful clarifying questions</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-1"></td>
//                         <td className="flex-1"><input name="inputs_outputs" id="inputs_outputs" type="number" max="2"/></td>
//                         <td className="flex-1">2</td>
//                         <td className="flex-1">Identified inputs and outputs</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-1"></td>
//                         <td className="flex-1"><input name="illustrate_problem" id="illustrate_problem" type="number" max="2" /></td>
//                         <td className="flex-1">2</td>
//                         <td className="flex-1">Visually illustrated the problem domain</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-1"></td>
//                         <td className="flex-1"><input name="optimal_structure" id="optimal_structure" type="number" max="4"/></td>
//                         <td className="flex-1">4</td>
//                         <td className="flex-1">Identified optimal data structure and/or algorithm</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-auto">Notes</td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-auto"><input name="interpret_question_notes" id="interpret_question_notes" type="text" /></td>
//                     </tr>
//                     {/* start section */}
//                     {/* -----Solved the technical problem----- */}
//                     <tr className="flex justify-start">
//                         <td className="flex-1">0</td>
//                         <td className="flex-1"></td>
//                         <td className="flex-1">12</td>
//                         <td className="flex-1">Solved the technical problem</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-1"></td>
//                         <td className="flex-1"><input name="working_algorithm" id="working_algorithm" type="number" max="4" /></td>
//                         <td className="flex-1">4</td>
//                         <td className="flex-1">Presented and understood a working algorithm</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-1"></td>
//                         <td className="flex-1"><input name="syntactically_correct" id="syntactically_correct" type="number" max="3"/></td>
//                         <td className="flex-1">3</td>
//                         <td className="flex-1">Final code was syntactically correct</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-1"></td>
//                         <td className="flex-1"><input name="idiomatically_correct" id="idiomatically_correct" type="number" max="3"/></td>
//                         <td className="flex-1">3</td>
//                         <td className="flex-1">Final code was idiomatically correct</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-1"></td>
//                         <td className="flex-1"><input name="best_solution" id="best_solution" type="number" max="2" /></td>
//                         <td className="flex-1">2</td>
//                         <td className="flex-1">Solution was the best possible option</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-auto">Notes</td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-auto"><input name="solve_problem_notes" id="solve_problem_notes" type="text" /></td>
//                     </tr>
//                     {/* start section */}
//                     {/* -----Analyzed the proposed solution----- */}
//                     <tr className="flex justify-start">
//                         <td className="flex-1">0</td>
//                         <td className="flex-1"></td>
//                         <td className="flex-1">6</td>
//                         <td className="flex-1">Analyzed the proposed solution</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-1"></td>
//                         <td className="flex-1"><input name="walkthrough_solution" id="walkthrough_solution" type="number" max="2" /></td>
//                         <td className="flex-1">2</td>
//                         <td className="flex-1">Stepped through their solution</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-1"></td>
//                         <td className="flex-1"><input name="big_o" id="big_o" type="number" max="2"/></td>
//                         <td className="flex-1">2</td>
//                         <td className="flex-1">Big O time and space are analyzed</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-1"></td>
//                         <td className="flex-1"><input name="testing" id="testing" type="number" max="2" /></td>
//                         <td className="flex-1">2</td>
//                         <td className="flex-1">Explain an approach to testing</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-auto">Notes</td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-auto"><input name="interpret_question_notes" id="interpret_question_notes" type="text" /></td>
//                     </tr>
//                     {/* start section */}
//                     {/* -----Communicated effectively throughout----- */}
//                     <tr className="flex justify-start">
//                         <td className="flex-1">0</td>
//                         <td className="flex-1"></td>
//                         <td className="flex-1">12</td>
//                         <td className="flex-1">Communicated effectively throughout</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-1"></td>
//                         <td className="flex-1"><input name="thought_process" id="thought_process" type="number" max="6" /></td>
//                         <td className="flex-1">6</td>
//                         <td className="flex-1">Verbalized their thought process</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-1"></td>
//                         <td className="flex-1"><input name="terminology" id="terminology" type="number" max="2"/></td>
//                         <td className="flex-1">2</td>
//                         <td className="flex-1">Used correct terminology</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-1"></td>
//                         <td className="flex-1"><input name="use_time" id="use_time" type="number" max="1" /></td>
//                         <td className="flex-1">1</td>
//                         <td className="flex-1">Used the time available effectively</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-1"></td>
//                         <td className="flex-1"><input name="overconfident" id="overconfident" type="number" max="1" /></td>
//                         <td className="flex-1">1</td>
//                         <td className="flex-1">Was not overconfident (not listening to suggestions)</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-1"></td>
//                         <td className="flex-1"><input name="underconfident" id="underconfident" type="number" max="1"/></td>
//                         <td className="flex-1">1</td>
//                         <td className="flex-1">Was not under-confident (unsure of known algorithm)</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-1"></td>
//                         <td className="flex-1"><input name="whiteboard" id="whiteboard" type="number" max="1" /></td>
//                         <td className="flex-1">1</td>
//                         <td className="flex-1">Whiteboard was readable (penmanship and spacing)</td>
//                         <td className="flex-1"></td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-auto">Notes</td>
//                     </tr>
//                     <tr className="flex justify-start">
//                         <td className="flex-auto"><input name="communicate_effectively_notes" id="communicate_effectively_notes" type="text" /></td>
//                     </tr>
//                 </tbody>
//             </table>
//             </>

