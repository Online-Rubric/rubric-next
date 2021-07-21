import Header from '../components/header'
import DashNav from '../components/dashboard-nav'
import DataContainer from '../components/data-container'
import LeftBar from '../components/dashboard-leftbar'
// import { useUser } from '@auth0/nextjs-auth0';


export default function Whitebaords() {

    // const { user, error, isLoading } = useUser();

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>{error.message}</div>;

    
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
                </div>
            </>
    )
}