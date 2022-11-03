import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProfile, getMe, logOut } from '../../api';
import Header from '../../components/MainHeader'
import SubHeader from '../../components/SubHeader'
import './HomePage.css'

function HomePage() {
    const { isLoading, data, isError } = useQuery(["me"], getMe, {
        retry: false
    });
    const queryClient = useQueryClient();
    const onLogOut = async() => {
        await logOut();
        queryClient.refetchQueries(["me"]); 
    };
    return(
        <div>
            {isLoading ? <Header /> : (
                isError ? <Header /> : (
                    <>
                    <h1>{data.username}</h1>
                    <button onClick={onLogOut}>logout</button>
                    </>
                    )
                ) }
        </div>
    )
}
export default HomePage