import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../../api';
import Header from '../../components/MainHeader'
import SubHeader from '../../components/SubHeader'
import './HomePage.css'

function HomePage() {
    const { isLoading, data } = useQuery(["profile"], getProfile);
    console.log(data);
    return(
        <div className='home_header'>
            <Header/>
            <SubHeader/>
        </div>
    )
}
export default HomePage