import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProfile, getMe, logOut, usernameLogin } from '../../api';
import Header from '../../components/MainHeader'
import SubHeader from '../../components/SubHeader'
import './HomePage.css'

function HomePage() {
    return(
        <>
        <Header />
        <SubHeader />
        </>
    )
}
export default HomePage