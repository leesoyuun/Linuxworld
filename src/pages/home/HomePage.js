import { useQuery } from '@tanstack/react-query';
import { getProfile, getMe } from '../../api';
import Header from '../../components/MainHeader'
import SubHeader from '../../components/SubHeader'
import './HomePage.css'

function HomePage() {
    const { isLoading, data, isError } = useQuery(["me"], getMe, {
        retry: false
    });
    // console.log(data);
    console.log(useQuery(["me"], getMe, {
        retry: false
    }))
    return(
        <div className='home_header'>
            <Header/>
            <SubHeader/>
        </div>
    )
}
export default HomePage