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
          console.log('this is rubrics' + item.comments)
        })
    }

    // TODO for each key in the key value pair, generate a table row with the key and value as the cell 


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
                <table class="table">
                    <tr>
                        <th>Name</th>
                    </tr>
                    <tbody id="myTable">
                        
                    </tbody>
                    
                </table>
            </>


            </>
    )
}