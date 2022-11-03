import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProfile, getMe, logOut, usernameLogin } from '../../api';
import Header from '../../components/MainHeader'
import SubHeader from '../../components/SubHeader'
import './HomePage.css'

function HomePage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isLoading, data, isError } = useQuery(["me"], getMe, {
        retry: false
    });
    const queryClient = useQueryClient();
    const onLogOut = async() => {
        await logOut();
        queryClient.refetchQueries(["me"]); 
    };
    const onChange = (event) => {
        const { name, value } = event.currentTarget;
        if (name === "username") {
          setUsername(value);
        } else if (name === "password") {
          setPassword(value);
        }
      };
    const onSubmit = async (event) => {
        event.preventDefault();
        await usernameLogin({username, password});
        queryClient.refetchQueries(["me"]); 
      };
    return(
        <div>
            {isLoading ? <Header /> : (
                isError ? <Header /> : (
                    <>
                    <h1>{data.username}</h1>
                    <button onClick={onLogOut}>logout</button>
                    <form onSubmit={onSubmit}>
                        <input 
                            required
                            name="username"
                            onChange={onChange}
                            value={username}
                            placeholder="username"
                        />
                        <input 
                            required
                            name="password"
                            onChange={onChange}
                            value={password}
                            type="password"
                            placeholder="password"
                        />
                        <button type="submit">login</button>
                    </form>
                    </>
                    )
                ) }
        </div>
    )
}
export default HomePage