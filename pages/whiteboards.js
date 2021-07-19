import Header from '../components/header'
import Nav from '../components/nav'
import DataContainer from '../components/data-container'
import Footer from '../components/footer'
import { useUser } from '@auth0/nextjs-auth0';


export default function Whitebaords() {

    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    return (
        user && (
            <>
                <Header/>
                <Nav/>
                <DataContainer user={user}/>
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
                <Footer/>
            </>
        )
    );
}