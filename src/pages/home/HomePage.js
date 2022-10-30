import React, { useEffect, useState } from 'react'
import Header from '../../components/MainHeader'

function HomePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState();
    const fetchProfile = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/v1/profile/1/");
        const json = await response.json();
        setProfile(json);
        setIsLoading(false);
    };
    useEffect(() => {
        fetchProfile();
    }, []);
    console.log(profile);
    return(

        <div>
            {isLoading ? null : <Header/> }
        </div>
        
    )
}
export default HomePage