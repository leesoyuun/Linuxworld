import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../../api';
import Header from '../../components/MainHeader'

function HomePage() {
    const { isLoading, data } = useQuery(["profile"], getProfile);
    console.log(data);
    return(
        <div>
            {isLoading ? null : <Header/> }
        </div>

    )
}
export default HomePage