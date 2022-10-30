import React, { useEffect, useState } from 'react'
import Header from '../../components/MainHeader'
import SubHeader from '../../components/SubHeader'
import './HomePage.css'

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
        <div className='home_header'>
            <Header/>
            <SubHeader/>
        </div>
        
    )
}
export default HomePage