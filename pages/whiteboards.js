import Header from '../components/header'
import DashNav from '../components/dashboard-nav'
import DataContainer from '../components/data-container'
import LeftBar from '../components/dashboard-leftbar'
// import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios'


export default function Whitebaords() {

    // const { user, error, isLoading } = useUser();

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>{error.message}</div>;

    const apiData = async () => {
      const res = await axios.get('http://127.0.0.1:8000/api/v1/rubrics/')
      
      res.data.map(item => {
        //   console.log('this is rubrics ' + item.comments)
        //   console.dir(item)

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
          var text = document.getElementById('test')
              text.append(
                item.comments + ' ',
                // item.comments[1]
              )
        })
    }



    return (
        // user && (
            <>
                <Header/>
                {/* <DashNav user={user}/> */}
                <div class="flex flex-col md:flex-row">
                    <p>Whiteboards</p>
                    {/* <LeftBar user={user}/> */}
                    {/* <DataContainer user={user}/> */}
                    {/* <div>
                        <img src={user.picture} alt={user.name} />
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div> */}
                    <div className="flex m-10">
                        <button onClick={() => apiData()}>
                            Show Previous Scores
                        </button>
                    </div>

                </div>

            <>
                {/* <table class="table">
                    <tr>
                        <th>Name</th>
                    </tr>
                    <tbody id="myTable">
                        
                    </tbody>
                    
                </table> */}
                <p id="test"></p>
            </>


            </>
    )
}